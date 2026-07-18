import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { SiteFooter, SiteHeader } from "../../site-chrome";
import { getPublishedPost, paragraphs } from "../../../lib/content";

export const dynamic = "force-dynamic";

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const post = await getPublishedPost((await params).slug);
  return post ? { title: post.title, description: post.excerpt } : { title: "Dispatch not found" };
}

export default async function PostPage({ params }: { params: Promise<{ slug: string }> }) {
  const post = await getPublishedPost((await params).slug);
  if (!post) notFound();
  return <main><SiteHeader />
    <section className="inner-hero"><p className="eyebrow">{post.category} · {post.read_minutes} min read</p><h1>{post.title}</h1><p>{post.excerpt}</p></section>
    <article className="content-section"><div className="article"><Link className="back-link" href="/blog">← All dispatches</Link>{paragraphs(post.content).map((paragraph, index) => <p className={index === 0 ? "lead" : undefined} key={`${index}-${paragraph.slice(0, 30)}`}>{paragraph}</p>)}</div></article><SiteFooter /></main>;
}
