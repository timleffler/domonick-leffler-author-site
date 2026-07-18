import { requireAdmin } from "../../../lib/auth";
import { defaultSections } from "../../../lib/content-defaults";
import { updateSection } from "../actions";
import { AdminChrome, Field, Notice } from "../admin-chrome";

export const dynamic = "force-dynamic";

export default async function AdminBookPage({ searchParams }: { searchParams: Promise<{ saved?: string; error?: string }> }) {
  const { supabase, user } = await requireAdmin();
  const { data } = await supabase.from("site_sections").select("*").eq("id", "book").maybeSingle();
  const section = data ?? defaultSections.book;
  const extra = section.extra as Record<string, string | number>;
  const params = await searchParams;
  return <AdminChrome email={user.email ?? "DJ"}><div className="admin-title"><p className="admin-kicker">Module 1</p><h1>Edit The Book</h1><p>These fields control the public book page. Changes appear after you press Save.</p></div><Notice {...params} />
    <form action={updateSection} className="editor-card admin-form"><input type="hidden" name="id" value="book" />
      <div className="form-section"><h2>Page introduction</h2><Field label="Small heading above the title"><input name="hero_eyebrow" defaultValue={section.hero_eyebrow} required /></Field><Field label="Large page title"><input name="hero_title" defaultValue={section.hero_title} required /></Field><Field label="Short introduction"><textarea name="hero_intro" rows={3} defaultValue={section.hero_intro} required /></Field></div>
      <div className="form-section"><h2>Book information</h2><Field label="Book title"><input name="heading" defaultValue={section.heading} required /></Field><Field label="Book description" hint="To start a new paragraph, press Return twice so there is one blank line between paragraphs."><textarea name="body" rows={14} defaultValue={section.body} required /></Field><div className="field-row"><Field label="Publication date"><input name="publication_date" defaultValue={String(extra.publication_date ?? "")} required /></Field><Field label="Kindle pages"><input name="kindle_pages" type="number" min="1" defaultValue={String(extra.kindle_pages ?? 189)} required /></Field><Field label="Paperback pages"><input name="paperback_pages" type="number" min="1" defaultValue={String(extra.paperback_pages ?? 208)} required /></Field></div><Field label="Amazon purchase link"><input name="amazon_url" type="url" defaultValue={String(extra.amazon_url ?? "")} required /></Field><Field label="Hardcopy notice"><textarea name="hardcopy_note" rows={3} defaultValue={String(extra.hardcopy_note ?? "")} required /></Field></div>
      <div className="sticky-save"><span>Review your changes, then save.</span><button className="admin-primary" type="submit">Save book changes</button></div>
    </form></AdminChrome>;
}
