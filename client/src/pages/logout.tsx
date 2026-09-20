import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pulsevow.css';

export default function Logout() {
  useEffect(() => { localStorage.removeItem('pulsevow.authenticated'); }, []);
  return <div className="auth-page logout-page"><div className="logout-card"><div className="auth-mark">P</div><span className="auth-kicker">SIGNED OUT</span><h1>You’re logged out.</h1><p>Your PulseVow session has been ended. Come back whenever you want to catch up on the stories that matter.</p><div className="logout-actions"><Link className="auth-submit" to="/login">Sign in again</Link><Link className="profile-action" to="/">Return to PulseVow</Link></div></div></div>;
}
