import Icon from './Icon.jsx'
import ProjectPreview from './ProjectPreview.jsx'
import { ExternalAction } from './ProjectLinks.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'

const VISIBLE_FEATURES = 4

// The modal remembers which element opened it, so no ref is needed here to restore focus.
export default function ProjectCard({ project, index, onOpenDetails }) {
  const revealRef = useScrollReveal(0.1)
  const features = project.features ?? []
  const technologies = project.technologies ?? []
  const featureHeading = project.featureStatus === 'implemented' ? 'Key features' : 'Feature goals'

  return (
    <li className="project-card reveal" ref={revealRef} style={{ '--stagger': index }}>
      <ProjectPreview type={project.previewType} title={project.title} />

      <div className="project-card__body">
        <p className="project-card__meta">
          <span className="project-card__number">Project {project.number}</span>
          <span>{project.category}</span>
        </p>
        <h3 className="project-card__title">{project.title}</h3>
        <p className="project-card__summary">{project.summary}</p>

        <div className="project-card__block">
          <h4>Problem being solved</h4>
          <p>{project.problem}</p>
        </div>

        {features.length > 0 && (
          <div className="project-card__block">
            <h4>{featureHeading}</h4>
            <ul className="project-card__features">
              {features.slice(0, VISIBLE_FEATURES).map((feature) => (
                <li key={feature}>
                  <Icon name="check" size={14} />
                  {feature}
                </li>
              ))}
            </ul>
            {features.length > VISIBLE_FEATURES && (
              <p className="project-card__more">+ {features.length - VISIBLE_FEATURES} more in details</p>
            )}
          </div>
        )}

        <ul className="tag-list" aria-label="Technologies used">
          {technologies.map((tech) => (
            <li key={tech}>{tech}</li>
          ))}
        </ul>

        <div className="project-card__actions">
          <button
            type="button"
            className="btn btn--primary btn--small"
            onClick={() => onOpenDetails(project)}
            aria-haspopup="dialog"
          >
            View Details
            <span className="visually-hidden">: {project.title}</span>
          </button>
          <ExternalAction url={project.liveUrl} icon="external" label="Live Demo" missingLabel="Live demo not added yet" />
          <ExternalAction url={project.repoUrl} icon="github" label="GitHub Repository" missingLabel="Repository not added yet" />
        </div>
      </div>
    </li>
  )
}
