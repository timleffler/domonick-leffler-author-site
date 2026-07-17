import Link from "next/link";

export function SiteHeader() {
  return <header className="site-header">
    <Link className="wordmark" href="/"><span>DL</span><b>Domonick Leffler</b></Link>
    <nav aria-label="Main navigation"><Link href="/books">The Book</Link><Link href="/about">The Author</Link><Link href="/blog">Dispatches</Link></nav>
    <a className="nav-buy" href="https://www.amazon.com/dp/B0GXXDYDF2" target="_blank" rel="noreferrer">Buy on Amazon ↗</a>
  </header>;
}

export function SiteFooter() {
  return <footer className="site-footer">
    <div><Link className="wordmark" href="/"><span>DL</span><b>Domonick Leffler</b></Link><p>Stories for underdogs, spell-casters,<br />and the destined among us.</p></div>
    <div className="footer-links"><Link href="/books">The Book</Link><Link href="/about">The Author</Link><Link href="/blog">Dispatches</Link></div>
    <div className="footer-end"><p>© 2026 Domonick Leffler</p><p>Keep moving forward.</p></div>
  </footer>;
}
