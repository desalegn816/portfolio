import SectionHeading from './SectionHeading.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { approachSteps } from '../data/siteData.js'

// The four steps are a real sequence, so numbered markers and a connecting line are meaningful here.
export default function DevelopmentApproach() {
  const revealRef = useScrollReveal()

  return (
    <section id="approach" className="section section--alt" aria-labelledby="approach-title">
      <div className="container reveal" ref={revealRef}>
        <SectionHeading id="approach-title" title="How I Approach Development" />

        <ol className="approach__steps">
          {approachSteps.map((step, index) => (
            <li key={step.title} className="approach-step">
              <span className="approach-step__number" aria-hidden="true">
                {index + 1}
              </span>
              <h3>
                <span className="visually-hidden">Step {index + 1}: </span>
                {step.title}
              </h3>
              <p>{step.text}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  )
}
