import { useCallback, useEffect, useRef, useState } from 'react'
import { createPortal } from 'react-dom'
import Icon from './Icon.jsx'
import ProjectPreview from './ProjectPreview.jsx'
import { ExternalAction } from './ProjectLinks.jsx'

const CLOSE_ANIMATION_MS = 180
const FOCUSABLE =
  'a[href], button:not([disabled]), textarea, input, select, [tabindex]:not([tabindex="-1"])'

function DetailList({ items }) {
  return (
    <ul className="modal__list">
      {items.map((item) => (
        <li key={item}>{item}</li>
      ))}
    </ul>
  )
}

export default function ProjectModal({ project, onClose }) {
  const dialogRef = useRef(null)
  const closeButtonRef = useRef(null)
  const [isClosing, setIsClosing] = useState(false)

  const requestClose = useCallback(() => {
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches
    if (prefersReducedMotion) {
      onClose()
      return
    }
    setIsClosing(true)
    window.setTimeout(onClose, CLOSE_ANIMATION_MS)
  }, [onClose])

  // Focus management, background lock and restore focus on unmount.
  useEffect(() => {
    const previouslyFocused = document.activeElement
    const appContent = document.getElementById('app-content')

    // "inert" removes the page behind the dialog from the tab order and from screen readers.
    appContent?.setAttribute('inert', '')
    document.body.classList.add('modal-open')
    closeButtonRef.current?.focus()

    return () => {
      appContent?.removeAttribute('inert')
      document.body.classList.remove('modal-open')
      if (previouslyFocused instanceof HTMLElement && document.contains(previouslyFocused)) {
        previouslyFocused.focus()
      }
    }
  }, [])

  // Escape closes; Tab stays inside the dialog.
  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        event.preventDefault()
        requestClose()
        return
      }
      if (event.key !== 'Tab' || !dialogRef.current) return

      const focusable = Array.from(dialogRef.current.querySelectorAll(FOCUSABLE))
      if (focusable.length === 0) return
      const first = focusable[0]
      const last = focusable[focusable.length - 1]

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault()
        last.focus()
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault()
        first.focus()
      }
    }
    document.addEventListener('keydown', handleKeyDown)
    return () => document.removeEventListener('keydown', handleKeyDown)
  }, [requestClose])

  const features = project.features ?? []
  const technologies = project.technologies ?? []
  const screenshots = project.screenshots ?? []
  const challenges = project.challenges ?? []
  const lessons = project.lessons ?? []
  const featureHeading = project.featureStatus === 'implemented' ? 'Main features' : 'Main features (goals)'
  const titleId = `modal-title-${project.id}`

  return createPortal(
    <div
      className={`modal-overlay ${isClosing ? 'is-closing' : ''}`}
      onMouseDown={(event) => {
        // Clicking the dark area (not the dialog) closes. Keyboard users have Escape and the close button.
        if (event.target === event.currentTarget) requestClose()
      }}
    >
      <div ref={dialogRef} className="modal" role="dialog" aria-modal="true" aria-labelledby={titleId}>
        <div className="modal__header">
          <div>
            <p className="modal__meta">
              Project {project.number} &middot; {project.category}
            </p>
            <h2 id={titleId}>{project.title}</h2>
          </div>
          <button ref={closeButtonRef} type="button" className="modal__close" onClick={requestClose} aria-label="Close project details">
            <Icon name="close" size={20} />
          </button>
        </div>

        <div className="modal__scroll">
          <section className="modal__section">
            <h3>Project overview</h3>
            <p>{project.summary}</p>
          </section>

          <div className="modal__two-col">
            <section className="modal__section">
              <h3>Problem statement</h3>
              <p>{project.problem}</p>
            </section>
            <section className="modal__section">
              <h3>Proposed solution</h3>
              <p>{project.solution}</p>
            </section>
          </div>

          {features.length > 0 && (
            <section className="modal__section">
              <h3>{featureHeading}</h3>
              {project.featureStatus !== 'implemented' && (
                <p className="modal__note">
                  These are the project's feature goals. They will be marked as implemented once each one is confirmed.
                </p>
              )}
              <DetailList items={features} />
            </section>
          )}

          <section className="modal__section">
            <h3>Technology stack</h3>
            <ul className="tag-list">
              {technologies.map((tech) => (
                <li key={tech}>{tech}</li>
              ))}
            </ul>
          </section>

          <div className="modal__two-col">
            <section className="modal__section">
              <h3>Development challenges</h3>
              <DetailList items={challenges} />
            </section>
            <section className="modal__section">
              <h3>Lessons learned</h3>
              <DetailList items={lessons} />
            </section>
          </div>

          <section className="modal__section">
            <h3>Project screenshots</h3>
            {screenshots.length > 0 ? (
              <ul className="modal__shots">
                {screenshots.map((shot) => (
                  <li key={shot.src}>
                    <img src={`${import.meta.env.BASE_URL}${shot.src}`} alt={shot.alt} width={shot.width} height={shot.height} loading="lazy" />
                  </li>
                ))}
              </ul>
            ) : (
              <>
                <p className="modal__note">
                  Real screenshots have not been added yet. The illustration below is a concept preview with sample data.
                </p>
                <ProjectPreview type={project.previewType} title={project.title} />
              </>
            )}
          </section>
        </div>

        <div className="modal__footer">
          <ExternalAction url={project.liveUrl} icon="external" label="Live Demo" missingLabel="Live demo not added yet" variant="primary" />
          <ExternalAction url={project.repoUrl} icon="github" label="GitHub Repository" missingLabel="Repository not added yet" />
        </div>
      </div>
    </div>,
    document.body,
  )
}
