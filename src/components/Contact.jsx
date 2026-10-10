import { useRef, useState } from 'react'
import Icon from './Icon.jsx'
import SectionHeading from './SectionHeading.jsx'
import { useScrollReveal } from '../hooks/useScrollReveal.js'
import { links } from '../data/siteData.js'

// ---------------------------------------------------------------------------
// FORM SERVICE: FormSubmit (https://formsubmit.co), free, no account needed.
// Messages are forwarded to the email address in src/data/siteData.js.
//
// ONE-TIME ACTIVATION: the first submission makes FormSubmit email an "Activate Form" link
// to that address (check Spam too). Until the link is clicked nothing is delivered, and this
// form shows an error with a direct-email fallback instead of pretending it worked.
//
// To use a different service (e.g. Formspree), set VITE_FORM_ENDPOINT in .env (see .env.example).
// ---------------------------------------------------------------------------
const FORM_ENDPOINT = (import.meta.env.VITE_FORM_ENDPOINT ?? '').trim() || `https://formsubmit.co/ajax/${links.email}`

const EMPTY_VALUES = { name: '', email: '', subject: '', message: '' }
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/

function validate(values) {
  const errors = {}
  if (!values.name.trim()) errors.name = 'Enter your full name.'
  if (!values.email.trim()) errors.email = 'Enter your email address.'
  else if (!EMAIL_PATTERN.test(values.email.trim())) errors.email = 'Enter a valid email address, for example name@example.com.'
  if (!values.subject.trim()) errors.subject = 'Enter a subject.'
  if (!values.message.trim()) errors.message = 'Write a message.'
  else if (values.message.trim().length < 10) errors.message = 'Write at least 10 characters so the message has some context.'
  return errors
}

function Field({ id, label, error, children }) {
  return (
    <div className="field">
      <label htmlFor={id}>{label}</label>
      {children}
      {error && (
        <p className="field__error" id={`${id}-error`}>
          {error}
        </p>
      )}
    </div>
  )
}

export default function Contact() {
  const revealRef = useScrollReveal()
  const formRef = useRef(null)
  const [values, setValues] = useState(EMPTY_VALUES)
  const [errors, setErrors] = useState({})
  // status: idle | submitting | success | error | needs-activation
  const [status, setStatus] = useState('idle')

  const handleChange = (event) => {
    const { name, value } = event.target
    setValues((current) => ({ ...current, [name]: value }))
    if (errors[name]) setErrors((current) => ({ ...current, [name]: undefined }))
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    const foundErrors = validate(values)
    setErrors(foundErrors)

    const firstInvalid = Object.keys(foundErrors)[0]
    if (firstInvalid) {
      setStatus('idle')
      formRef.current?.elements[firstInvalid]?.focus()
      return
    }

    // Hidden honeypot field: real visitors never fill it in, bots often do. Pretend success and send nothing.
    if (formRef.current?.elements['_honey']?.value) {
      setStatus('success')
      return
    }

    setStatus('submitting')
    try {
      const response = await fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
        body: JSON.stringify({
          ...values,
          _subject: `Portfolio message: ${values.subject.trim()}`,
          _template: 'table',
          _captcha: 'false',
        }),
      })
      const result = await response.json().catch(() => ({}))
      const message = String(result.message ?? '')

      // FormSubmit answers with a notice (not a delivery) until the owner confirms the address.
      if (/activat/i.test(message)) {
        setStatus('needs-activation')
        return
      }
      if (!response.ok || String(result.success) === 'false') {
        throw new Error(message || `Request failed with status ${response.status}`)
      }
      setValues(EMPTY_VALUES)
      setStatus('success')
    } catch {
      setStatus('error')
    }
  }

  const describedBy = (name) => (errors[name] ? `${name}-error` : undefined)
  const isSubmitting = status === 'submitting'

  return (
    <section id="contact" className="section" aria-labelledby="contact-title">
      <div className="container reveal contact__layout" ref={revealRef}>
        <div className="contact__intro">
          <SectionHeading
            id="contact-title"
            title="Let's Build Something Meaningful."
            subtitle="I'm interested in software development internships, collaborative projects, and opportunities to learn from experienced developers."
          />
          <ul className="contact__links">
            <li>
              <a href={`mailto:${links.email}`}>
                <Icon name="mail" size={20} />
                <span>
                  <small>Email</small>
                  {links.email}
                </span>
              </a>
            </li>
            <li>
              <a href={links.cv} target="_blank" rel="noopener noreferrer">
                <Icon name="file" size={20} />
                <span>
                  <small>Curriculum vitae</small>
                  View my CV (PDF)
                </span>
                <span className="visually-hidden">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={links.github} target="_blank" rel="noopener noreferrer">
                <Icon name="github" size={20} />
                <span>
                  <small>GitHub</small>
                  github.com/desalegn816
                </span>
                <span className="visually-hidden">(opens in a new tab)</span>
              </a>
            </li>
            <li>
              <a href={links.linkedin} target="_blank" rel="noopener noreferrer">
                <Icon name="linkedin" size={20} />
                <span>
                  <small>LinkedIn</small>
                  linkedin.com/in/desalegn-worku
                </span>
                <span className="visually-hidden">(opens in a new tab)</span>
              </a>
            </li>
          </ul>
        </div>

        <form ref={formRef} className="contact__form" onSubmit={handleSubmit} noValidate>
          <Field id="name" label="Full name" error={errors.name}>
            <input id="name" name="name" type="text" autoComplete="name" required value={values.name} onChange={handleChange} aria-invalid={Boolean(errors.name)} aria-describedby={describedBy('name')} />
          </Field>
          <Field id="email" label="Email address" error={errors.email}>
            <input id="email" name="email" type="email" autoComplete="email" required value={values.email} onChange={handleChange} aria-invalid={Boolean(errors.email)} aria-describedby={describedBy('email')} />
          </Field>
          <Field id="subject" label="Subject" error={errors.subject}>
            <input id="subject" name="subject" type="text" required value={values.subject} onChange={handleChange} aria-invalid={Boolean(errors.subject)} aria-describedby={describedBy('subject')} />
          </Field>
          <Field id="message" label="Message" error={errors.message}>
            <textarea id="message" name="message" rows="5" required value={values.message} onChange={handleChange} aria-invalid={Boolean(errors.message)} aria-describedby={describedBy('message')} />
          </Field>

          {/* Honeypot: hidden from people and assistive tech, see handleSubmit */}
          <input className="honeypot" type="text" name="_honey" tabIndex={-1} autoComplete="off" aria-hidden="true" />

          <button type="submit" className="btn btn--primary" disabled={isSubmitting}>
            {isSubmitting ? (
              <>
                <span className="spinner" aria-hidden="true" />
                Sending…
              </>
            ) : (
              'Send message'
            )}
          </button>

          {/* Live region: announced to screen readers when the result changes. */}
          <div className="form-status" role="status" aria-live="polite">
            {status === 'success' && <p className="form-status__msg form-status__msg--success">Message sent. Thank you, I will reply as soon as I can.</p>}
            {status === 'error' && (
              <p className="form-status__msg form-status__msg--error">
                The message could not be sent. Try again, or email{' '}
                <a href={`mailto:${links.email}`}>{links.email}</a> directly.
              </p>
            )}
            {status === 'needs-activation' && (
              <p className="form-status__msg form-status__msg--info">
                Your message was not delivered yet: the message service is still waiting for the site owner to confirm
                the email address. Please email <a href={`mailto:${links.email}`}>{links.email}</a> directly for now.
              </p>
            )}
          </div>
        </form>
      </div>
    </section>
  )
}
