import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "Dispatches" };

export default function BlogPage() {
  return <main><SiteHeader />
    <section className="inner-hero"><p className="eyebrow">From the author’s desk</p><h1>Dispatches from<br /><em>Velmara.</em></h1><p>Notes on storytelling, worldbuilding, the road to publication, and the magic behind Mada Mariner.</p></section>
    <section className="content-section"><div className="blog-list">
      <Link className="blog-row" href="/blog/welcome-to-velmara"><span className="post-number">01</span><div><p className="post-meta">Worldbuilding · May 2026</p><h2>Welcome to Velmara</h2><p>A first look at the magic, mysteries, and mischief behind the Mada Mariner series.</p></div><span className="arrow">↗</span></Link>
      <div className="blog-row"><span className="post-number">02</span><div><p className="post-meta">Behind the book · Coming soon</p><h2>The story behind the pendant</h2><p>A future dispatch from Domonick’s desk.</p></div></div>
      <div className="blog-row"><span className="post-number">03</span><div><p className="post-meta">Writing life · Coming soon</p><h2>Why I write for underdogs</h2><p>A future dispatch from Domonick’s desk.</p></div></div>
    </div></section><SiteFooter /></main>;
}
