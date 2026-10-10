import SectionHeading from './SectionHeading.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { learningTopics } from '../data/siteData.js'

export default function Learning() {
  const revealRef = useScrollReveal()

  return (
    <section id="learning" className="section" aria-labelledby="learning-title">
      <div className="container reveal" ref={revealRef}>
        <SectionHeading
          id="learning-title"
          title="Always Learning"
          subtitle="Software changes quickly. These are the areas I am actively working to understand better. They are learning interests, not completed qualifications."
        />

        <ul className="learning__list">
          {learningTopics.map((topic) => (
            <li key={topic}>{topic}</li>
          ))}
        </ul>
      </div>
    </section>
  )
}
