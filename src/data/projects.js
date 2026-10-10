// All project content lives here. ProjectCard and ProjectModal render from this data.
//
// HOW TO UPDATE
// - featureStatus: 'goals' shows "Feature goals". Change to 'implemented' ONLY after you have
//   checked that every listed feature really exists in the project.
// - liveUrl / repoUrl: '' means the button shows as "not added yet" (disabled).
// - challenges / lessons: placeholders. Replace with your real experience.
// - screenshots: add files to public/images and list them as
//   { src: 'images/feedback-1.png', alt: 'Feedback dashboard', width: 1280, height: 720 }

const PLACEHOLDER_CHALLENGES = [
  '[Edit me] Describe a real technical challenge you faced while building this project.',
  '[Edit me] Describe how you approached or solved it.',
]

const PLACEHOLDER_LESSONS = [
  '[Edit me] Write one thing this project taught you.',
  '[Edit me] Write what you would improve in a next version.',
]

export const projects = [
  {
    id: 'student-feedback',
    number: '01',
    title: 'Student Feedback Management System',
    category: 'Education Technology',
    previewType: 'feedback',
    summary:
      'A platform for collecting and managing student feedback to help educational institutions evaluate academic services and improve the quality of education.',
    problem:
      'Educational institutions need an organized way to collect student opinions, evaluate academic services, and identify areas requiring improvement.',
    solution:
      'One system where students submit categorized feedback and staff review, filter and report on it from a management dashboard.',
    featureStatus: 'goals',
    features: [
      'Student feedback submission',
      'Feedback category selection',
      'Course and instructor feedback',
      'Academic service feedback',
      'Feedback management dashboard',
      'Feedback analysis and reporting',
      'Responsive user interface',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP'],
    repoUrl: 'https://github.com/desalegn816/student_feedbacks',
    liveUrl: '',
    screenshots: [],
    challenges: PLACEHOLDER_CHALLENGES,
    lessons: PLACEHOLDER_LESSONS,
  },
  {
    id: 'hotel-qr-ordering',
    number: '02',
    title: 'Hotel QR Food Ordering System',
    category: 'Hospitality Technology',
    previewType: 'menu',
    summary:
      'A digital food ordering experience that allows hotel guests to scan a QR code, browse the available menu, and place orders directly from their table or room.',
    problem:
      'Traditional food ordering can require additional staff interaction and may slow down communication between guests and hotel kitchens.',
    solution:
      'A mobile-friendly menu opened from a QR code, where guests build an order and send it straight to the kitchen.',
    featureStatus: 'goals',
    features: [
      'QR-code-based menu access',
      'Digital menu browsing',
      'Food categories',
      'Menu items with images and prices',
      'Quantity adjustment',
      'Order summary',
      'Order submission interface',
      'Mobile-friendly ordering experience',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP'],
    repoUrl: 'https://github.com/desalegn816/hotel_food_order',
    liveUrl: '',
    screenshots: [],
    challenges: PLACEHOLDER_CHALLENGES,
    lessons: PLACEHOLDER_LESSONS,
  },
  {
    id: 'library-management',
    number: '03',
    title: 'Library Management System',
    category: 'Education and Information Systems',
    previewType: 'library',
    summary:
      'A digital library management system designed to organize book collections and simplify borrowing, returning, and tracking library resources.',
    problem:
      'Manual library record management can make it difficult to monitor book availability, organize collections, and track borrowing activities.',
    solution:
      'A searchable catalog with availability status, borrowing records and return tracking in one management dashboard.',
    featureStatus: 'goals',
    features: [
      'Book catalog',
      'Book search',
      'Category filtering',
      'Book availability status',
      'Borrowing records',
      'Return tracking',
      'Library inventory management',
      'Responsive management dashboard',
    ],
    technologies: ['JavaScript', 'HTML5', 'CSS3', 'PHP'],
    repoUrl: '',
    liveUrl: '',
    screenshots: [],
    challenges: PLACEHOLDER_CHALLENGES,
    lessons: PLACEHOLDER_LESSONS,
  },
]
