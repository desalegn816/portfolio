import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'
import About from './components/About.jsx'
import Skills from './components/Skills.jsx'
import Projects from './components/Projects.jsx'
import DevelopmentApproach from './components/DevelopmentApproach.jsx'
import Learning from './components/Learning.jsx'
import Contact from './components/Contact.jsx'
import Footer from './components/Footer.jsx'

import './styles/global.css'
import './styles/navbar.css'
import './styles/hero.css'
import './styles/about.css'
import './styles/skills.css'
import './styles/projects.css'
import './styles/modal.css'
import './styles/contact.css'
import './styles/footer.css'

export default function App() {
  return (
    // #app-content is made inert while a project modal is open (see ProjectModal.jsx).
    <div id="app-content">
      <a className="skip-link" href="#main">Skip to main content</a>
      <Navbar />
      <main id="main">
        <Hero />
        <About />
        <Skills />
        <Projects />
        <DevelopmentApproach />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  )
}
