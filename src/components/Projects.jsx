import { useCallback, useState } from 'react'
import ProjectCard from './ProjectCard.jsx'
import ProjectModal from './ProjectModal.jsx'
import SectionHeading from './SectionHeading.jsx'
import { projects } from '../data/projects.js'

export default function Projects() {
  const [selectedProject, setSelectedProject] = useState(null)
  const closeModal = useCallback(() => setSelectedProject(null), [])
  const hasProjects = Array.isArray(projects) && projects.length > 0

  return (
    <section id="projects" className="section section--alt" aria-labelledby="projects-title">
      <div className="container">
        <SectionHeading
          id="projects-title"
          title="Student Digital Management System"
          subtitle="A digital platform for managing student records, registrations, academic information, and school activities efficiently."
        />

        {hasProjects ? (
          <ul className="projects__grid">
            {projects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} onOpenDetails={setSelectedProject} />
            ))}
          </ul>
        ) : (
          <p className="empty-state">Projects are being added. Check back soon.</p>
        )}
      </div>

      {selectedProject && <ProjectModal project={selectedProject} onClose={closeModal} />}
    </section>
  )
}
