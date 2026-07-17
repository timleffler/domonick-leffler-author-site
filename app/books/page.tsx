import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "The Book" };

export default function BooksPage() {
  return <main><SiteHeader />
    <section className="inner-hero"><p className="eyebrow">The Mada Mariner series</p><h1>One pendant.<br /><em>One hidden prophecy.</em></h1><p>A magical academy, an ancient secret, and a destiny that refuses to stay buried.</p></section>
    <section className="content-section"><div className="book-detail">
      <div><img src="/mada-mariner-cover.png" alt="Mada Mariner and the Hidden Prophecy cover artwork" /></div>
      <div><p className="eyebrow">Book one</p><h2>Mada Mariner and the Hidden Prophecy</h2><div className="facts"><span>Publication · May 8, 2026</span><span>Kindle · 189 pages</span><span>Paperback · 208 pages</span></div>
      <p className="synopsis">In a world where magic shapes destiny, Mada Mariner is about to learn her future was never truly hers to begin with. When she enters the legendary Velrendor Academy, she expects rules, training, and the challenge of surviving a school built for the magically gifted. What she doesn’t expect is the way the halls seem to recognize her—or the strange pull of the pendant she’s worn her entire life without understanding why.</p>
      <p className="synopsis">As hidden truths begin to unravel, Mada is drawn into a prophecy that reaches far beyond the classroom walls. With forces closing in and her past beginning to fracture, Mada must discover who she truly is before the academy decides for her.</p>
      <a className="button button-gold" href="https://www.amazon.com/dp/B0GXXDYDF2" target="_blank" rel="noreferrer">Buy the ebook on Amazon <span>↗</span></a>
      <div className="hardcopy"><strong>Hardcopy edition</strong> · Currently in production. Availability details coming soon.</div>
      </div>
    </div></section><SiteFooter /></main>;
}
