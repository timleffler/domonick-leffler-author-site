import { notFound } from "next/navigation";
import { requireAdmin } from "../../../../lib/auth";
import type { Post } from "../../../../lib/content-defaults";
import { updatePost } from "../../actions";
import { AdminChrome, Notice } from "../../admin-chrome";
import { PostForm } from "../post-form";

export const dynamic = "force-dynamic";

export default async function EditPostPage({ params, searchParams }: { params: Promise<{ id: string }>; searchParams: Promise<{ saved?: string; error?: string }> }) {
  const { supabase, user } = await requireAdmin(); const { id } = await params;
  const { data } = await supabase.from("posts").select("*").eq("id", id).maybeSingle();
  if (!data) notFound(); const notice = await searchParams;
  return <AdminChrome email={user.email ?? "DJ"}><div className="admin-title"><p className="admin-kicker">Module 3 · Edit dispatch</p><h1>Edit “{data.title}”</h1><p>Make any changes below and select Save.</p></div><Notice {...notice} /><form action={updatePost} className="editor-card admin-form"><PostForm post={data as Post} /><div className="sticky-save"><span>Changes replace the current version.</span><button className="admin-primary" type="submit">Save dispatch</button></div></form></AdminChrome>;
}
