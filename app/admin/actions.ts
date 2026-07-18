"use server";

import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";
import { requireAdmin } from "../../lib/auth";
import { createClient } from "../../lib/supabase/server";

function text(formData: FormData, key: string, max = 20000) {
  const value = String(formData.get(key) ?? "").trim();
  if (!value || value.length > max) throw new Error(`Please complete ${key}.`);
  return value;
}

function slugify(value: string) {
  return value.toLowerCase().trim().replace(/[^a-z0-9]+/g, "-").replace(/^-|-$/g, "").slice(0, 90);
}

export async function login(formData: FormData) {
  const supabase = await createClient();
  const email = text(formData, "email", 320).toLowerCase();
  const password = text(formData, "password", 256);
  const { data, error } = await supabase.auth.signInWithPassword({ email, password });
  if (error || !data.user) redirect("/admin/login?error=invalid-login");
  const { data: admin } = await supabase.from("admin_users").select("user_id").eq("user_id", data.user.id).maybeSingle();
  if (!admin) {
    await supabase.auth.signOut();
    redirect("/admin/login?error=not-authorized");
  }
  redirect("/admin");
}

export async function logout() {
  const supabase = await createClient();
  await supabase.auth.signOut();
  redirect("/admin/login");
}

export async function updateSection(formData: FormData) {
  const { supabase, user } = await requireAdmin();
  const id = text(formData, "id", 20);
  if (id !== "book" && id !== "author") throw new Error("Invalid section.");
  const extra = id === "book" ? {
    publication_date: text(formData, "publication_date", 80),
    kindle_pages: Number(formData.get("kindle_pages")) || 0,
    paperback_pages: Number(formData.get("paperback_pages")) || 0,
    amazon_url: text(formData, "amazon_url", 500),
    hardcopy_note: text(formData, "hardcopy_note", 500),
  } : {};
  const { error } = await supabase.from("site_sections").upsert({
    id,
    hero_eyebrow: text(formData, "hero_eyebrow", 160),
    hero_title: text(formData, "hero_title", 220),
    hero_intro: text(formData, "hero_intro", 500),
    heading: text(formData, "heading", 250),
    body: text(formData, "body"),
    extra,
    updated_at: new Date().toISOString(),
    updated_by: user.id,
  });
  if (error) redirect(`/admin/${id}?error=save-failed`);
  revalidatePath(id === "book" ? "/books" : "/about");
  redirect(`/admin/${id}?saved=1`);
}

function postPayload(formData: FormData, userId: string) {
  const title = text(formData, "title", 250);
  const slug = slugify(String(formData.get("slug") || title));
  if (!slug) throw new Error("Please provide a valid title or web address.");
  const status = formData.get("status") === "published" ? "published" : "draft";
  return {
    title,
    slug,
    excerpt: text(formData, "excerpt", 600),
    category: text(formData, "category", 100),
    published_at: String(formData.get("published_at") || "") || null,
    read_minutes: Math.max(1, Math.min(120, Number(formData.get("read_minutes")) || 4)),
    content: text(formData, "content", 100000),
    status,
    author_id: userId,
    updated_at: new Date().toISOString(),
  };
}

export async function createPost(formData: FormData) {
  const { supabase, user } = await requireAdmin();
  const { data, error } = await supabase.from("posts").insert(postPayload(formData, user.id)).select("id").single();
  if (error || !data) redirect("/admin/dispatches/new?error=save-failed");
  revalidatePath("/"); revalidatePath("/blog");
  redirect(`/admin/dispatches/${data.id}?saved=1`);
}

export async function updatePost(formData: FormData) {
  const { supabase, user } = await requireAdmin();
  const id = text(formData, "id", 80);
  const { error } = await supabase.from("posts").update(postPayload(formData, user.id)).eq("id", id);
  if (error) redirect(`/admin/dispatches/${id}?error=save-failed`);
  revalidatePath("/"); revalidatePath("/blog");
  redirect(`/admin/dispatches/${id}?saved=1`);
}
