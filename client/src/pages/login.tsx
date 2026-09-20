import { type FormEvent, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import '../styles/pulsevow.css';

export default function Login() {
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(true);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const submit = async (event: FormEvent) => {
    event.preventDefault();
    setError('');
    if (!email || !password) return setError('Enter your email and password.');
    setLoading(true);
    try {
      // Replace this block with your existing authApi.login() call.
      await new Promise((resolve) => setTimeout(resolve, 450));
      localStorage.setItem('pulsevow.authenticated', 'true');
      if (remember) localStorage.setItem('pulsevow.user.email', email);
      navigate('/');
    } catch {
      setError('Unable to sign in. Please check your credentials.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-page">
      <div className="auth-shell">
        <Link className="auth-brand" to="/">
          <span className="auth-mark">P</span>
          <span><strong>PulseVow</strong><small>Indian news intelligence</small></span>
        </Link>

        <div className="auth-card">
          <div className="auth-heading">
            <span className="auth-kicker">WELCOME BACK</span>
            <h1>Understand the news, not just read it.</h1>
            <p>Sign in to personalize your PulseVow intelligence feed.</p>
          </div>

          <form onSubmit={submit} className="auth-form">
            <label>Email address<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="you@example.com" autoComplete="email" /></label>
            <label>Password<div className="password-field"><input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter your password" autoComplete="current-password" /></div></label>
            {error && <div className="auth-error">{error}</div>}
            <div className="auth-row"><label className="check"><input type="checkbox" checked={remember} onChange={(e) => setRemember(e.target.checked)} /> Remember me</label><button type="button" className="text-button">Forgot password?</button></div>
            <button className="auth-submit" disabled={loading}>{loading ? 'Signing in…' : 'Sign in'}</button>
          </form>

          <div className="auth-divider"><span>or</span></div>
          <button className="social-login" type="button">Continue with Google</button>
          <p className="auth-footer-text">New to PulseVow? <Link to="/register">Create your profile</Link></p>
        </div>
        <p className="auth-legal">AI-powered summaries, credibility analysis, impact scoring and personalized recommendations.</p>
      </div>
    </div>
  );
}
