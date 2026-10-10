import Icon from './Icon.jsx'

// Renders a real link when a URL exists, otherwise a clearly disabled button,
// so a missing link is never presented as functional.
export function ExternalAction({ url, icon, label, missingLabel, variant = 'secondary' }) {
  if (!url) {
    return (
      <button type="button" className={`btn btn--${variant} btn--small`} disabled title="Add this link in src/data/projects.js">
        <Icon name={icon} size={16} />
        {missingLabel}
      </button>
    )
  }
  return (
    <a className={`btn btn--${variant} btn--small`} href={url} target="_blank" rel="noopener noreferrer">
      <Icon name={icon} size={16} />
      {label}
      <span className="visually-hidden"> (opens in a new tab)</span>
    </a>
  )
}
