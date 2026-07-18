import type { Post } from "../../../lib/content-defaults";
import { Field } from "../admin-chrome";

export function PostForm({ post }: { post?: Post }) {
  const today = new Date().toISOString().slice(0, 10);
  return <>
    {post && <input type="hidden" name="id" value={post.id} />}
    <div className="form-section"><h2>Post details</h2><Field label="Post title"><input name="title" defaultValue={post?.title ?? ""} required /></Field><Field label="Web address" hint="Use lowercase words separated by hyphens. It will be created from the title if left blank."><input name="slug" defaultValue={post?.slug ?? ""} pattern="[a-z0-9]+(?:-[a-z0-9]+)*" /></Field><Field label="Short summary" hint="This appears on the Dispatches list."><textarea name="excerpt" rows={3} defaultValue={post?.excerpt ?? ""} required /></Field><div className="field-row"><Field label="Category"><input name="category" defaultValue={post?.category ?? "Writing life"} required /></Field><Field label="Publication date"><input name="published_at" type="date" defaultValue={post?.published_at ?? today} /></Field><Field label="Minutes to read"><input name="read_minutes" type="number" min="1" max="120" defaultValue={post?.read_minutes ?? 4} required /></Field></div></div>
    <div className="form-section"><h2>Post content</h2><Field label="Article" hint="Leave a blank line between paragraphs."><textarea name="content" rows={24} defaultValue={post?.content ?? ""} required /></Field></div>
    <div className="publish-choice"><label><input type="radio" name="status" value="draft" defaultChecked={!post || post.status === "draft"} /><span><strong>Save as draft</strong><small>Only DJ can see it in the editor.</small></span></label><label><input type="radio" name="status" value="published" defaultChecked={post?.status === "published"} /><span><strong>Publish on the website</strong><small>Readers can see it immediately.</small></span></label></div>
  </>;
}
