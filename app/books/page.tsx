import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { getSection, paragraphs } from "../../lib/content";

export const metadata: Metadata = { title: "The Book" };

export const dynamic = "force-dynamic";

export default async function BooksPage() {
  const section = await getSection("book");
  const extra = section.extra;
  return <main><SiteHeader />
    <section className="inner-hero"><p className="eyebrow">{section.hero_eyebrow}</p><h1>{section.hero_title}</h1><p>{section.hero_intro}</p></section>
    <section className="content-section"><div className="book-detail">
      <div><img src="/mada-mariner-cover.png" alt="Mada Mariner and the Hidden Prophecy cover artwork" /></div>
      <div><p className="eyebrow">Book one</p><h2>{section.heading}</h2><div className="facts"><span>Publication · {String(extra.publication_date)}</span><span>Kindle · {String(extra.kindle_pages)} pages</span><span>Paperback · {String(extra.paperback_pages)} pages</span></div>
      {paragraphs(section.body).map((paragraph) => <p className="synopsis" key={paragraph.slice(0, 40)}>{paragraph}</p>)}
      <a className="button button-gold" href={String(extra.amazon_url)} target="_blank" rel="noreferrer">Buy the ebook on Amazon <span>↗</span></a>
      <div className="hardcopy"><strong>Hardcopy edition</strong> · {String(extra.hardcopy_note)}</div>
      </div>
    </div></section><SiteFooter /></main>;
}
