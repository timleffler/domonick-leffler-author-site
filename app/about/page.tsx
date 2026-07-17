import type { Metadata } from "next";
import { SiteFooter, SiteHeader } from "../site-chrome";

export const metadata: Metadata = { title: "The Author" };

export default function AboutPage() {
  return <main><SiteHeader />
    <section className="inner-hero"><p className="eyebrow">Behind the worlds</p><h1>Meet Domonick.</h1><p>Magic-minded mischief-maker, lifelong storyteller, and creator of the Mada Mariner series.</p></section>
    <section className="content-section"><div className="about-grid"><img src="/domonick-leffler.jpeg" alt="Domonick Leffler" /><div className="prose"><p className="eyebrow">The author</p><h2>Wonder is non-negotiable.</h2>
      <p>Domonick Leffler is a magic-minded mischief-maker in their 30s who believes every great adventure should come with a prophecy, a pendant, and at least one unexpected plot twist. When they’re not spinning tales of wizard academies, ancient legacies, and morally questionable heroes, they’re probably rewatching a favorite cartoon—or imagining how their characters would derail a quiet afternoon in a donut shop.</p>
      <p>Born with Cerebral Palsy, Domonick has faced physical and mental challenges, but those experiences have never defined the limits of their imagination. Storytelling, world-building, and creative play have always been places of freedom—spaces where curiosity wins, rules are bendable, and wonder is non-negotiable.</p>
      <p>For Domonick, meaning comes from recognizing the past, acknowledging the present, and looking toward the future. It’s a philosophy summed up by a line they hold close to heart: “Keep moving forward.”</p>
      <p><em>Mada Mariner and the Hidden Prophecy</em> is Domonick’s debut novel and a love letter to underdogs, spell-casters, and anyone who has ever wondered if they were destined for something bigger.</p>
    </div></div></section><SiteFooter /></main>;
}
