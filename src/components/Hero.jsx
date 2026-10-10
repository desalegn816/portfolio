import Icon from './Icon.jsx'
import { links, profile } from '../data/siteData.js'

// Replace public/images/desalegn.jpg and desalegn.webp to change the photo (keep a 4:5 portrait crop).
const PHOTO_BASE = `${import.meta.env.BASE_URL}images/desalegn`

const TECH_LABELS = ['React.js', 'JavaScript', 'HTML5', 'CSS3']

// Decorative editor window. Every value shown here comes from the portfolio's own data,
// so nothing in the illustration claims anything that is not true.
function CodeWindow() {
  return (
    <figure className="code-window" aria-hidden="true">
      <div className="code-window__bar">
        <span className="code-window__dot" />
        <span className="code-window__dot" />
        <span className="code-window__dot" />
        <span className="code-window__tab">developer.js</span>
      </div>
      <pre className="code-window__body">
        <code>
          <span className="code-line" style={{ '--line': 0 }}>
            <span className="tok-key">const</span> <span className="tok-var">developer</span> = {'{'}
          </span>
          <span className="code-line" style={{ '--line': 1 }}>
            {'  '}name: <span className="tok-str">"{profile.name}"</span>,
          </span>
          <span className="code-line" style={{ '--line': 2 }}>
            {'  '}role: <span className="tok-str">"Software Engineering Student"</span>,
          </span>
          <span className="code-line" style={{ '--line': 3 }}>
            {'  '}location: <span className="tok-str">"{profile.location}"</span>,
          </span>
          <span className="code-line" style={{ '--line': 4 }}>
            {'  '}stack: [<span className="tok-str">"React"</span>, <span className="tok-str">"JavaScript"</span>,
          </span>
          <span className="code-line" style={{ '--line': 5 }}>
            {'          '}
            <span className="tok-str">"PHP"</span>, <span className="tok-str">"MySQL"</span>],
          </span>
          <span className="code-line" style={{ '--line': 6 }}>
            {'  '}openTo: <span className="tok-str">"Internships"</span>,
          </span>
          <span className="code-line" style={{ '--line': 7 }}>{'}'}</span>
        </code>
      </pre>
      <div className="code-window__status">
        <span className="status-dot" />
        Ready for a first engineering team
      </div>
    </figure>
  )
}

export default function Hero() {
  return (
    <section id="home" className="hero" aria-labelledby="hero-title">
      <div className="hero__backdrop" aria-hidden="true" />
      <div className="hero__inner container">
        <div className="hero__content">
          <p className="hero__badge hero-enter" style={{ '--delay': 0 }}>
            <span className="status-dot" />
            OPEN TO SOFTWARE DEVELOPMENT INTERNSHIPS
          </p>

          <h1 id="hero-title" className="hero__title hero-enter" style={{ '--delay': 1 }}>
            Building <span className="accent">Digital Experiences</span> That Solve{' '}
            <span className="accent accent--alt">Real Problems.</span>
          </h1>

          <p className="hero__intro hero-enter" style={{ '--delay': 2 }}>
            I'm {profile.name}, a Software Engineering student passionate about creating useful, accessible, and modern
            web applications.
          </p>

          <div className="hero__actions hero-enter" style={{ '--delay': 3 }}>
            <a className="btn btn--primary" href="#projects">
              View My Projects
              <Icon name="arrow" size={18} />
            </a>
            {/* One joined control for the CV: download it, or view it in the browser's PDF viewer (new tab). */}
            <div className="btn-group" role="group" aria-label="Curriculum vitae">
              <a className="btn btn--secondary" href={links.cv} download="Desalegn-Worku-CV.pdf">
                <Icon name="download" size={18} />
                Download My CV
              </a>
              <a className="btn btn--secondary" href={links.cv} target="_blank" rel="noopener noreferrer">
                <Icon name="eye" size={18} />
                View CV
                <span className="visually-hidden"> (opens in a new tab)</span>
              </a>
            </div>
            <a className="btn btn--ghost" href="#contact">
              Contact Me
            </a>
          </div>

          <ul className="hero__tech hero-enter" style={{ '--delay': 4 }} aria-label="Core technologies">
            {TECH_LABELS.map((label) => (
              <li key={label}>{label}</li>
            ))}
          </ul>
          <p className="hero__location hero-enter" style={{ '--delay': 4 }}>
            <Icon name="pin" size={16} />
            {profile.location}
          </p>
        </div>

        <div className="hero__visual hero-enter" style={{ "--delay": 2 }}>
          <CodeWindow />
          <figure className="portrait">
            <picture>
              <source srcSet={`${PHOTO_BASE}.webp`} type="image/webp" />
              <img
                src={`${PHOTO_BASE}.jpg`}
                alt={`Portrait of ${profile.name}`}
                width="480"
                height="600"
                fetchpriority="high"
                decoding="async"
              />
            </picture>
          </figure>
        </div>
      </div>
    </section>
  )
}
