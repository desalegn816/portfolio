import { useCallback, useEffect, useState } from 'react'
import Icon from './Icon.jsx'
import { useActiveSection } from '../hooks/useActiveSection.js'
import { links, navItems, profile } from '../data/siteData.js'

const SECTION_IDS = navItems.map((item) => item.id)

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [hasScrolled, setHasScrolled] = useState(false)
  const activeId = useActiveSection(SECTION_IDS)

  const closeMenu = useCallback(() => setIsMenuOpen(false), [])

  // Elevate the bar slightly once the page has scrolled.
  useEffect(() => {
    const handleScroll = () => setHasScrolled(window.scrollY > 8)
    handleScroll()
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Escape closes the mobile menu; a wide viewport resets it.
  useEffect(() => {
    const handleKey = (event) => {
      if (event.key === 'Escape') setIsMenuOpen(false)
    }
    const handleResize = () => {
      if (window.innerWidth > 860) setIsMenuOpen(false)
    }
    document.addEventListener('keydown', handleKey)
    window.addEventListener('resize', handleResize)
    return () => {
      document.removeEventListener('keydown', handleKey)
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return (
    <header className={`navbar ${hasScrolled ? 'navbar--scrolled' : ''}`}>
      <div className="navbar__inner container">
        <a className="navbar__logo" href="#home" onClick={closeMenu} aria-label={`${profile.name}, back to top`}>
          {profile.initials}
        </a>

        <nav id="primary-navigation" className={`navbar__menu ${isMenuOpen ? 'is-open' : ''}`} aria-label="Primary">
          <ul className="navbar__list">
            {navItems.map((item) => (
              <li key={item.id}>
                <a
                  href={`#${item.id}`}
                  className={`navbar__link ${activeId === item.id ? 'is-active' : ''}`}
                  aria-current={activeId === item.id ? 'true' : undefined}
                  onClick={closeMenu}
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <a className="btn btn--primary btn--small navbar__cv" href={links.cv} download="Desalegn-Worku-CV.pdf" onClick={closeMenu}>
            <Icon name="download" size={16} />
            Download CV
          </a>
        </nav>

        <button
          type="button"
          className={`navbar__toggle ${isMenuOpen ? 'is-open' : ''}`}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setIsMenuOpen((open) => !open)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>
    </header>
  )
}
