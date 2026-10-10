// Small local SVG icon set (stroke icons, 24x24 grid). Decorative by default.
const PATHS = {
  arrow: 'M5 12h14M13 6l6 6-6 6',
  download: 'M12 4v11M7 11l5 5 5-5M5 20h14',
  external: 'M14 5h5v5M19 5l-8 8M18 14v4a1 1 0 0 1-1 1H6a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h4',
  mail: 'M4 6h16v12H4zM4 7l8 6 8-6',
  github:
    'M9 19c-4 1.3-4-2-6-2.5M15 21v-3.2a2.8 2.8 0 0 0-.8-2.2c2.700-.3 5.500-1.300 5.500-6a4.600 4.600 0 0 0-1.300-3.200 4.300 4.300 0 0 0-.1-3.200s-1-.3-3.300 1.300a11.400 11.400 0 0 0-6 0C7 3 6 3.300 6 3.300a4.300 4.300 0 0 0-.1 3.200A4.600 4.600 0 0 0 4.600 9.700c0 4.700 2.800 5.700 5.500 6a2.800 2.800 0 0 0-.8 2.200V21',
  linkedin:
    'M6 9v10M6 5.500v.1M10 19V9M10 13a4 4 0 0 1 8 0v6',
  check: 'M5 12.500l4.500 4.500L19 7.500',
  close: 'M6 6l12 12M18 6L6 18',
  cap: 'M2 9l10-5 10 5-10 5zM6 11.500V16c0 1.500 3 3 6 3s6-1.500 6-3v-4.500',
  layers: 'M12 3l9 5-9 5-9-5zM3 13l9 5 9-5M3 17.500l9 5 9-5',
  trend: 'M3 17l6-6 4 4 8-8M15 7h6v6',
  monitor: 'M3 5h18v11H3zM8 20h8M12 16v4',
  server: 'M4 4h16v6H4zM4 14h16v6H4zM8 7h.01M8 17h.01',
  database: 'M4 6c0-1.700 3.600-3 8-3s8 1.300 8 3-3.600 3-8 3-8-1.300-8-3zM4 6v6c0 1.700 3.600 3 8 3s8-1.300 8-3V6M4 12v6c0 1.700 3.600 3 8 3s8-1.300 8-3v-6',
  code: 'M8 7l-5 5 5 5M16 7l5 5-5 5M14 4l-4 16',
  git: 'M6 3v12M6 15a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 3a3 3 0 1 0 0 6 3 3 0 0 0 0-6zM18 9c0 4-6 3-12 6',
  puzzle: 'M10 4a2 2 0 1 1 4 0v2h4v4h-2a2 2 0 1 0 0 4h2v6h-6v-2a2 2 0 1 0-4 0v2H4v-6h2a2 2 0 1 0 0-4H4V6h6z',
  pin: 'M12 21s-7-6.200-7-11a7 7 0 0 1 14 0c0 4.800-7 11-7 11zM12 7.500a2.500 2.500 0 1 0 0 5 2.500 2.500 0 0 0 0-5z',
  eye: 'M2 12s4-7 10-7 10 7 10 7-4 7-10 7S2 12 2 12zM12 9a3 3 0 1 0 0 6 3 3 0 0 0 0-6z',
  file: 'M14 3H7a1 1 0 0 0-1 1v16a1 1 0 0 0 1 1h10a1 1 0 0 0 1-1V8zM14 3v5h5M9 13h6M9 17h6',
  spark: 'M12 3v4M12 17v4M3 12h4M17 12h4M6 6l2.500 2.500M15.500 15.500L18 18M18 6l-2.500 2.500M8.500 15.500L6 18',
}

export default function Icon({ name, size = 20, className = '' }) {
  const path = PATHS[name]
  if (!path) return null
  return (
    <svg
      className={className}
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.8"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      focusable="false"
    >
      <path d={path} />
    </svg>
  )
}
