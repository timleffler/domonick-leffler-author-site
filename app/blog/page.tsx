import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { getPublishedPosts } from "../../lib/content";

export const metadata: Metadata = { title: "Dispatches" };

export const dynamic = "force-dynamic";

export default async function BlogPage() {
  const posts = await getPublishedPosts();
  return <main><SiteHeader />
    <section className="inner-hero"><p className="eyebrow">From the author’s desk</p><h1>Dispatches from<br /><em>Velmara.</em></h1><p>Notes on storytelling, worldbuilding, the road to publication, and the magic behind Mada Mariner.</p></section>
    <section className="content-section"><div className="blog-list">
      {posts.map((post, index) => <Link className="blog-row" href={`/blog/${post.slug}`} key={post.id}><span className="post-number">{String(index + 1).padStart(2, "0")}</span><div><p className="post-meta">{post.category} · {post.published_at ? new Date(`${post.published_at}T12:00:00`).toLocaleDateString("en-US", { month: "long", year: "numeric" }) : "New"}</p><h2>{post.title}</h2><p>{post.excerpt}</p></div><span className="arrow">↗</span></Link>)}
    </div></section><SiteFooter /></main>;
}
