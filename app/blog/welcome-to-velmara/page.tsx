import type { Metadata } from "next";
import Link from "next/link";
import { SiteFooter, SiteHeader } from "../../site-chrome";

export const metadata: Metadata = { title: "Welcome to Velmara" };

export default function PostPage() {
  return <main><SiteHeader />
    <section className="inner-hero"><p className="eyebrow">Worldbuilding · 4 min read</p><h1>Welcome to Velmara</h1><p>A note from Domonick on opening the doors to a new magical world.</p></section>
    <article className="content-section"><div className="article"><Link className="back-link" href="/blog">← All dispatches</Link><p className="lead">Every story starts with a door. Sometimes it is a literal one. Sometimes it is a strange pendant, an impossible prophecy, or the feeling that a hallway already knows your name.</p>
      <p>Velmara began with that feeling: a world just beyond sight, waiting for the right character to find the way in. Mada Mariner is that character, although she might not agree that she is ready for everything waiting on the other side.</p>
      <p>I wanted Velrendor Academy to feel both wondrous and unsettling—a place where magic is taught, but where the oldest lessons may have been intentionally forgotten. Its corridors hold history. Its rules hold secrets. And beneath all of it, something ancient is beginning to stir.</p>
      <p>This space will be where I share more about the world of Mada Mariner, the process behind the books, and the strange sparks that become stories. Thank you for stepping through the door.</p>
      <p><em>Keep moving forward,<br />Domonick</em></p></div></article><SiteFooter /></main>;
}
