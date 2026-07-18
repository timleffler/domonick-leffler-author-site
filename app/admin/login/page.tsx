import { login } from "../actions";

export const dynamic = "force-dynamic";

export default async function LoginPage({ searchParams }: { searchParams: Promise<{ error?: string }> }) {
  const { error } = await searchParams;
  return <main className="admin-login"><section className="login-card"><div className="login-mark">DL</div><p className="admin-kicker">Private website editor</p><h1>Welcome back, DJ.</h1><p>Sign in to update the book, author biography, and dispatches.</p>
    {error && <div className="admin-notice error" role="alert">{error === "not-authorized" ? "This account is not approved to edit the website." : "The email or password was not recognized."}</div>}
    <form action={login} className="admin-form"><label className="admin-field"><span>Email address</span><input name="email" type="email" autoComplete="email" required /></label><label className="admin-field"><span>Password</span><input name="password" type="password" autoComplete="current-password" required /></label><button className="admin-primary" type="submit">Sign in securely</button></form>
    <p className="login-help">This area is private. Accounts are created by the site administrator.</p></section></main>;
}
