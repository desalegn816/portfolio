import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { skillGroups } from '../data/siteData.js'

export default function Skills() {
  const revealRef = useScrollReveal()

  return (
    <section id="skills" className="section" aria-labelledby="skills-title">
      <div className="container reveal" ref={revealRef}>
        <SectionHeading id="skills-title" title="My Technical Skills" />

        <ul className="skills__grid">
          {skillGroups.map((group) => (
            <li key={group.title} className="skill-card">
              <div className="skill-card__head">
                <span className="skill-card__icon">
                  <Icon name={group.icon} size={20} />
                </span>
                <h3>{group.title}</h3>
              </div>
              <ul className="skill-card__items">
                {group.items.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
