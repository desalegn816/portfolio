// Single place for personal details. Edit here and the whole site updates.

export const profile = {
  name: 'Desalegn Worku',
  initials: 'DW',
  title: 'Software Engineering Student | Full-Stack Developer',
  footerTitle: 'Software Engineering Student',
  location: 'Dilla, Ethiopia',
  goal:
    'To build secure, scalable, and user-friendly software that solves real-world problems and creates opportunities through technology and innovation.',
}

// Links supplied by Desalegn. Set a value to '' to show a "not added yet" state instead.
export const links = {
  github: 'https://github.com/desalegn816/',
  linkedin: 'https://linkedin.com/in/desalegn-worku',
  email: 'desalegnworku816@gmail.com',
  // Served from /public/cv.pdf. Replace that file with the real CV.
  cv: `${import.meta.env.BASE_URL}cv.pdf`,
}

export const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const aboutCards = [
  {
    icon: 'cap',
    label: 'Education',
    title: 'Software Engineering',
    text: 'Studying software engineering with an interest in full-stack development and practical software projects.',
  },
  {
    icon: 'layers',
    label: 'Development',
    title: 'Building Real Applications',
    text: 'Developing web applications focused on usability, responsive interfaces, and solving real-world problems.',
  },
  {
    icon: 'trend',
    label: 'Career Goals',
    title: 'Continuous Growth',
    text: 'Improving technical skills, learning professional development practices, and preparing for software engineering opportunities.',
  },
]

export const skillGroups = [
  {
    icon: 'monitor',
    title: 'Frontend Development',
    items: ['HTML5', 'CSS3', 'JavaScript', 'React.js', 'Responsive Web Design'],
  },
  {
    icon: 'server',
    title: 'Backend Development',
    items: ['Node.js', 'PHP', 'REST API Development'],
  },
  {
    icon: 'database',
    title: 'Database Management',
    items: ['MySQL', 'SQLite', 'MongoDB', 'SQL'],
  },
  {
    icon: 'code',
    title: 'Programming Languages',
    items: ['Java', 'JavaScript', 'PHP'],
  },
  {
    icon: 'git',
    title: 'Tools & Version Control',
    items: ['Git', 'GitHub', 'Visual Studio Code'],
  },
  {
    icon: 'puzzle',
    title: 'Software Engineering',
    items: [
      'Object-Oriented Programming (OOP)',
      'Component-Based Architecture',
      'Software Testing',
      'Responsive UI/UX Design',
    ],
  },
]

export const approachSteps = [
  {
    title: 'Understand the Problem',
    text: 'Identify user needs and define the problem the application should solve.',
  },
  {
    title: 'Design the Experience',
    text: 'Plan page structure, navigation, information hierarchy, and responsive layouts.',
  },
  {
    title: 'Build the Interface',
    text: 'Develop reusable React components with semantic HTML and maintainable CSS.',
  },
  {
    title: 'Test and Improve',
    text: 'Check responsiveness, functionality, accessibility, and usability before deployment.',
  },
]

export const learningTopics = [
  'Advanced React patterns',
  'JavaScript fundamentals',
  'REST API integration',
  'Frontend testing',
  'Accessibility',
  'Web performance',
  'Git collaboration',
  'Secure web development fundamentals',
]
