import Link from "next/link";
import { logout } from "./actions";

export function AdminChrome({ email, children }: { email: string; children: React.ReactNode }) {
  return <div className="admin-app">
    <header className="admin-header"><Link href="/admin" className="admin-brand"><span>DL</span><strong>DJ’s Website Editor</strong></Link><div className="admin-account"><span>Signed in as {email}</span><form action={logout}><button className="admin-signout">Sign out</button></form></div></header>
    <div className="admin-layout"><nav className="admin-nav" aria-label="Editor modules"><Link href="/admin">Overview</Link><Link href="/admin/book"><b>1</b> The Book</Link><Link href="/admin/author"><b>2</b> The Author</Link><Link href="/admin/dispatches"><b>3</b> Dispatches</Link><Link href="/" target="_blank">View website ↗</Link></nav><main className="admin-main">{children}</main></div>
  </div>;
}

export function Notice({ saved, error }: { saved?: string; error?: string }) {
  if (saved) return <div className="admin-notice success" role="status">Your changes were saved and are now live.</div>;
  if (error) return <div className="admin-notice error" role="alert">We could not save those changes. Please review the form and try again.</div>;
  return null;
}

export function Field({ label, hint, children }: { label: string; hint?: string; children: React.ReactNode }) {
  return <label className="admin-field"><span>{label}</span>{hint && <small>{hint}</small>}{children}</label>;
}
