import Icon from './Icon.jsx'
import { links, navItems, profile } from '../data/siteData.js'

export default function Footer() {
  // Generated at render time so the year never goes stale.
  const currentYear = new Date().getFullYear()

  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__brand">
          <a className="navbar__logo" href="#home" aria-label="Back to top">
            {profile.initials}
          </a>
          <div>
            <p className="footer__name">{profile.name}</p>
            <p className="footer__role">{profile.footerTitle}</p>
          </div>
        </div>

        <nav aria-label="Footer">
          <ul className="footer__links">
            {navItems.map((item) => (
              <li key={item.id}>
                <a href={`#${item.id}`}>{item.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <ul className="footer__social">
          <li>
            <a href={links.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile (opens in a new tab)">
              <Icon name="github" size={20} />
            </a>
          </li>
          <li>
            <a href={links.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile (opens in a new tab)">
              <Icon name="linkedin" size={20} />
            </a>
          </li>
        </ul>
      </div>
      <p className="footer__copy container">
        &copy; {currentYear} {profile.name}. All rights reserved.
      </p>
    </footer>
  )
}
