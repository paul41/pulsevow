import { type FormEvent, useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/pulsevow.css';

const interests = ['Banking', 'Technology', 'Markets', 'Economy', 'Startups', 'Real Estate', 'Energy', 'Policy'];
const languages = ['English', 'हिन्दी', 'বাংলা', 'தமிழ்', 'తెలుగు', 'मराठी', 'ಕನ್ನಡ'];

export default function Profile() {
  const [name, setName] = useState('Sourav');
  const [email, setEmail] = useState('you@example.com');
  const [language, setLanguage] = useState('English');
  const [selected, setSelected] = useState(['Technology', 'Markets', 'Economy']);
  const [newsletter, setNewsletter] = useState(true);
  const [saved, setSaved] = useState(false);

  const toggleInterest = (interest: string) => setSelected((items) => items.includes(interest) ? items.filter((item) => item !== interest) : [...items, interest]);
  const save = (event: FormEvent) => { event.preventDefault(); setSaved(true); window.setTimeout(() => setSaved(false), 2200); };

  return (
    <div className="pulsevow-app profile-page">
      <header className="topnav">
        <Link className="brand" to="/"><div className="mark">P</div><div><span className="name">PulseVow</span><span className="tag">Indian news intelligence</span></div></Link>
        <div className="nav-right">
          {/* <Link className="profile-nav-home" to="/">Back to PulseVow</Link> */}
          <div className="avatar">PV</div>
        </div>
      </header>

      <main className="profile-main">
        <div className="profile-intro"><span className="auth-kicker">YOUR PULSE</span><h1>Your profile</h1><p>Shape what PulseVow brings to you. Your interests influence personalized stories, sector intelligence and monthly briefs.</p></div>
        <form className="profile-grid" onSubmit={save}>
          <section className="profile-card profile-card-wide">
            <div className="profile-card-head"><div><h2>Personal information</h2><p>Basic account details.</p></div><div className="profile-avatar-large">{name.slice(0, 1).toUpperCase()}</div></div>
            <div className="profile-fields"><label>Full name<input value={name} onChange={(e) => setName(e.target.value)} /></label><label>Email address<input type="email" value={email} onChange={(e) => setEmail(e.target.value)} /></label><label>Preferred language<select value={language} onChange={(e) => setLanguage(e.target.value)}>{languages.map((item) => <option key={item}>{item}</option>)}</select></label></div>
          </section>

          <section className="profile-card profile-card-wide"><div className="profile-card-head"><div><h2>News interests</h2><p>Select the areas you want PulseVow to prioritize.</p></div></div><div className="interest-grid">{interests.map((interest) => <button key={interest} type="button" className={`interest-chip ${selected.includes(interest) ? 'selected' : ''}`} onClick={() => toggleInterest(interest)}>{selected.includes(interest) ? '✓' : '+'} {interest}</button>)}</div></section>

          <section className="profile-card"><h2>Personalized intelligence</h2><p className="profile-description">Use your interests to tailor recommendations and sector-level intelligence.</p><div className="setting-row"><div><strong>Personalized stories</strong><span>Show stories connected to your interests.</span></div><span className="setting-on">ON</span></div><div className="setting-row"><div><strong>Daily newsletter</strong><span>Receive a concise intelligence briefing.</span></div><button type="button" className={`toggle ${newsletter ? 'on' : ''}`} onClick={() => setNewsletter(!newsletter)}><span /></button></div></section>

          <section className="profile-card"><h2>Account</h2><p className="profile-description">Manage your session and account access.</p><Link className="profile-action danger" to="/logout">Log out</Link><button type="button" className="profile-action">Change password</button></section>

          <div className="profile-save"><span>{saved ? '✓ Profile preferences saved' : 'Your preferences are private to your PulseVow account.'}</span><button className="auth-submit profile-submit">Save preferences</button></div>
        </form>
      </main>
    </div>
  );
}
