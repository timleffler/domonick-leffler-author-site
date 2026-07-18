import { requireAdmin } from "../../../lib/auth";
import { defaultSections } from "../../../lib/content-defaults";
import { updateSection } from "../actions";
import { AdminChrome, Field, Notice } from "../admin-chrome";

export const dynamic = "force-dynamic";

export default async function AdminAuthorPage({ searchParams }: { searchParams: Promise<{ saved?: string; error?: string }> }) {
  const { supabase, user } = await requireAdmin();
  const { data } = await supabase.from("site_sections").select("*").eq("id", "author").maybeSingle();
  const section = data ?? defaultSections.author;
  const params = await searchParams;
  return <AdminChrome email={user.email ?? "DJ"}><div className="admin-title"><p className="admin-kicker">Module 2</p><h1>Edit The Author</h1><p>Update any part of Domonick’s biography while keeping the existing portrait and design.</p></div><Notice {...params} />
    <form action={updateSection} className="editor-card admin-form"><input type="hidden" name="id" value="author" />
      <div className="form-section"><h2>Page introduction</h2><Field label="Small heading above the title"><input name="hero_eyebrow" defaultValue={section.hero_eyebrow} required /></Field><Field label="Large page title"><input name="hero_title" defaultValue={section.hero_title} required /></Field><Field label="Short introduction"><textarea name="hero_intro" rows={3} defaultValue={section.hero_intro} required /></Field></div>
      <div className="form-section"><h2>Biography</h2><Field label="Biography heading"><input name="heading" defaultValue={section.heading} required /></Field><Field label="Full author biography" hint="Leave a blank line between paragraphs."><textarea name="body" rows={22} defaultValue={section.body} required /></Field></div>
      <div className="sticky-save"><span>Review your changes, then save.</span><button className="admin-primary" type="submit">Save author changes</button></div>
    </form></AdminChrome>;
}
