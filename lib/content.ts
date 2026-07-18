import { createPublicClient } from "./supabase/public";
import { defaultPost, defaultSections, type Post, type SiteSection } from "./content-defaults";

export async function getSection(id: SiteSection["id"]): Promise<SiteSection> {
  const supabase = createPublicClient();
  if (!supabase) return defaultSections[id];
  const { data, error } = await supabase.from("site_sections").select("*").eq("id", id).maybeSingle();
  return error || !data ? defaultSections[id] : data as SiteSection;
}

export async function getPublishedPosts(limit?: number): Promise<Post[]> {
  const supabase = createPublicClient();
  if (!supabase) return [defaultPost];
  let query = supabase.from("posts").select("*").eq("status", "published").order("published_at", { ascending: false });
  if (limit) query = query.limit(limit);
  const { data, error } = await query;
  return error || !data ? [defaultPost] : data as Post[];
}

export async function getPublishedPost(slug: string): Promise<Post | null> {
  const supabase = createPublicClient();
  if (!supabase) return slug === defaultPost.slug ? defaultPost : null;
  const { data, error } = await supabase.from("posts").select("*").eq("slug", slug).eq("status", "published").maybeSingle();
  if (error) return slug === defaultPost.slug ? defaultPost : null;
  return data as Post | null;
}

export function paragraphs(text: string) {
  return text.split(/\n\s*\n/).map((paragraph) => paragraph.trim()).filter(Boolean);
}
