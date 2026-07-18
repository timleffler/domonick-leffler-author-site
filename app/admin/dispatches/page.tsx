import Link from "next/link";
import { requireAdmin } from "../../../lib/auth";
import type { Post } from "../../../lib/content-defaults";
import { AdminChrome, Notice } from "../admin-chrome";

export const dynamic = "force-dynamic";

export default async function DispatchesAdminPage({ searchParams }: { searchParams: Promise<{ saved?: string; error?: string }> }) {
  const { supabase, user } = await requireAdmin();
  const { data } = await supabase.from("posts").select("*").order("updated_at", { ascending: false });
  const posts = (data ?? []) as Post[];
  const params = await searchParams;
  return <AdminChrome email={user.email ?? "DJ"}><div className="admin-title-row"><div className="admin-title"><p className="admin-kicker">Module 3</p><h1>Dispatches</h1><p>Add a new blog post or select Edit to change an existing one.</p></div><Link href="/admin/dispatches/new" className="admin-primary">+ Add a dispatch</Link></div><Notice {...params} />
    <div className="table-card"><div className="table-scroll"><table className="post-table"><thead><tr><th>Title</th><th>Status</th><th>Category</th><th>Date</th><th><span className="sr-only">Actions</span></th></tr></thead><tbody>{posts.length ? posts.map((post) => <tr key={post.id}><td><strong>{post.title}</strong><small>/{post.slug}</small></td><td><span className={`status-pill ${post.status}`}>{post.status}</span></td><td>{post.category}</td><td>{post.published_at ? new Date(`${post.published_at}T12:00:00`).toLocaleDateString("en-US", { month: "short", day: "numeric", year: "numeric" }) : "Not set"}</td><td><Link className="edit-link" href={`/admin/dispatches/${post.id}`}>Edit →</Link></td></tr>) : <tr><td colSpan={5} className="empty-table">No dispatches yet. Select “Add a dispatch” to create the first one.</td></tr>}</tbody></table></div></div>
  </AdminChrome>;
}
