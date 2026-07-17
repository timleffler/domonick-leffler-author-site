import Link from "next/link";
import { SiteFooter, SiteHeader } from "./site-chrome";

export default function Home() {
  return (
    <main>
      <SiteHeader />
      <section className="hero">
        <div className="hero-glow" aria-hidden="true" />
        <div className="hero-copy">
          <p className="eyebrow">A new fantasy series by Domonick Leffler</p>
          <h1>Destiny<br /><em>wears a pendant.</em></h1>
          <p className="hero-deck">Enter Velmara—a world of ancient legacies, dangerous magic, and one student whose arrival was never an accident.</p>
          <div className="button-row">
            <a className="button button-gold" href="https://www.amazon.com/dp/B0GXXDYDF2" target="_blank" rel="noreferrer">Buy the ebook <span>↗</span></a>
            <Link className="button button-ghost" href="/books">Discover the story</Link>
          </div>
        </div>
        <div className="hero-art">
          <div className="orbit orbit-one" aria-hidden="true" />
          <div className="orbit orbit-two" aria-hidden="true" />
          <div className="book-frame">
            <img src="/mada-mariner-cover.png" alt="Mada Mariner and the Hidden Prophecy cover artwork" />
          </div>
          <p className="artifact-note">The pendant has been waiting.</p>
        </div>
        <div className="scroll-note" aria-hidden="true">Scroll to enter <span>↓</span></div>
      </section>

      <section className="story-intro section-shell">
        <div className="chapter-mark">I</div>
        <div>
          <p className="eyebrow">The first adventure</p>
          <h2>The academy knows her name.</h2>
        </div>
        <p className="large-copy">When Mada enters the legendary Velrendor Academy, she expects rules, training, and the challenge of surviving a school built for the magically gifted. She doesn’t expect the halls to recognize her—or the pendant she has worn her entire life to finally awaken.</p>
      </section>

      <section className="quote-band">
        <div className="star-mark">✦</div>
        <blockquote>“Something ancient is stirring beneath the academy’s surface.”</blockquote>
        <div className="star-mark">✦</div>
      </section>

      <section className="author-tease section-shell">
        <div className="portrait-wrap"><img src="/domonick-leffler.jpeg" alt="Author Domonick Leffler" /></div>
        <div className="author-copy">
          <p className="eyebrow">Meet the author</p>
          <h2>Magic-minded.<br />Mischief-maker.<br /><em>Storyteller.</em></h2>
          <p>Domonick Leffler writes heartfelt fantasy for underdogs, spell-casters, and anyone who has ever wondered if they were destined for something bigger.</p>
          <Link className="text-link" href="/about">Read Domonick’s story <span>→</span></Link>
        </div>
      </section>

      <section className="dispatches section-shell">
        <div className="section-heading">
          <div><p className="eyebrow">From the author’s desk</p><h2>Latest dispatches</h2></div>
          <Link className="text-link" href="/blog">All dispatches <span>→</span></Link>
        </div>
        <div className="post-grid">
          <Link className="post-card featured-post" href="/blog/welcome-to-velmara">
            <span className="post-number">01</span><div><p className="post-meta">Worldbuilding · 4 min read</p><h3>Welcome to Velmara</h3><p>A first look at the magic, mysteries, and mischief behind the Mada Mariner series.</p></div><span className="arrow">↗</span>
          </Link>
          <article className="post-card upcoming"><span className="post-number">02</span><div><p className="post-meta">Behind the book</p><h3>The story behind the pendant</h3><p>Coming soon</p></div></article>
        </div>
      </section>
      <SiteFooter />
    </main>
  );
}
