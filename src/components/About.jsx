import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { aboutCards, profile } from '../data/siteData.js'

export default function About() {
  const revealRef = useScrollReveal()

  return (
    <section id="about" className="section section--alt" aria-labelledby="about-title">
      <div className="container reveal" ref={revealRef}>
        <SectionHeading id="about-title" title="About Me" />

        <div className="about__layout">
          <div className="about__text">
            <p>
              Hi! I'm a passionate and dedicated Web Developer who enjoys building modern, responsive, and user-friendly
              websites. I specialize in creating clean and efficient web applications using HTML, CSS, and JavaScript,
              React, and Node.js, and I am continuously improving my skills in full-stack development and modern web
              technologies.
            </p>
            <p className="about__goal">
              <strong>Professional goal.</strong> {profile.goal}
            </p>
          </div>

          <ul className="about__cards">
            {aboutCards.map((card) => (
              <li key={card.title} className="info-card">
                <span className="info-card__icon">
                  <Icon name={card.icon} size={22} />
                </span>
                <div>
                  <p className="info-card__label">{card.label}</p>
                  <h3>{card.title}</h3>
                  <p>{card.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
