import { requireAdmin } from "../../../../lib/auth";
import { createPost } from "../../actions";
import { AdminChrome, Notice } from "../../admin-chrome";
import { PostForm } from "../post-form";

export const dynamic = "force-dynamic";

export default async function NewPostPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { user } = await requireAdmin(); const params = await searchParams;
  return <AdminChrome email={user.email ?? "DJ"}><div className="admin-title"><p className="admin-kicker">Module 3 · New dispatch</p><h1>Add a dispatch</h1><p>Write the post, save it as a private draft, or publish it immediately.</p></div><Notice {...params} /><form action={createPost} className="editor-card admin-form"><PostForm /><div className="sticky-save"><span>You can return and edit this post at any time.</span><button className="admin-primary" type="submit">Save dispatch</button></div></form></AdminChrome>;
}
