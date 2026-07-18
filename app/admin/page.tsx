import Link from "next/link";
import { requireAdmin } from "../../lib/auth";
import { AdminChrome } from "./admin-chrome";

export const dynamic = "force-dynamic";

export default async function AdminPage() {
  const { user } = await requireAdmin();
  return <AdminChrome email={user.email ?? "DJ"}><div className="admin-title"><p className="admin-kicker">Website editor</p><h1>What would you like to update?</h1><p>Choose one of the three sections below. Every screen has one clear Save button.</p></div><div className="module-grid">
    <Link href="/admin/book" className="module-card"><span>Module 1</span><b>01</b><h2>The Book</h2><p>Update the book title, description, publication details, Amazon link, and hardcopy notice.</p><strong>Edit the book →</strong></Link>
    <Link href="/admin/author" className="module-card"><span>Module 2</span><b>02</b><h2>The Author</h2><p>Update the headline, introduction, and full author biography.</p><strong>Edit the author →</strong></Link>
    <Link href="/admin/dispatches" className="module-card"><span>Module 3</span><b>03</b><h2>Dispatches</h2><p>Add new blog posts or open and edit previously saved posts.</p><strong>Manage dispatches →</strong></Link>
  </div></AdminChrome>;
}
