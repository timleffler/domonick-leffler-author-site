import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";
import { getSection, paragraphs } from "../../lib/content";

export const metadata: Metadata = { title: "The Author" };

export const dynamic = "force-dynamic";

export default async function AboutPage() {
  const section = await getSection("author");
  return <main><SiteHeader />
    <section className="inner-hero"><p className="eyebrow">{section.hero_eyebrow}</p><h1>{section.hero_title}</h1><p>{section.hero_intro}</p></section>
    <section className="content-section"><div className="about-grid"><img src="/domonick-leffler.jpeg" alt="Domonick Leffler" /><div className="prose"><p className="eyebrow">The author</p><h2>{section.heading}</h2>
      {paragraphs(section.body).map((paragraph) => <p key={paragraph.slice(0, 40)}>{paragraph}</p>)}
    </div></div></section><SiteFooter /></main>;
}
