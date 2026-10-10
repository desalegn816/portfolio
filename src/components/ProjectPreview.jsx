// Original CSS interface mockups. They are design concepts built with sample data,
// NOT screenshots of the running applications, and they are labelled that way.
// To use real screenshots, list them in data/projects.js and they appear in the modal.

function FeedbackPreview() {
  return (
    <div className="mock mock--feedback">
      <div className="mock__sidebar">
        <span className="mock__logo" />
        <span className="mock__nav is-on" />
        <span className="mock__nav" />
        <span className="mock__nav" />
        <span className="mock__nav" />
      </div>
      <div className="mock__main">
        <div className="mock__stats">
          <div className="mock__stat"><b>128</b><i>Responses</i></div>
          <div className="mock__stat"><b>4.2</b><i>Avg. rating</i></div>
          <div className="mock__stat"><b>3</b><i>Open issues</i></div>
        </div>
        <div className="mock__panels">
          <div className="mock__panel">
            <i>By category</i>
            <span className="mock__bar" style={{ '--w': '82%' }}><em>Courses</em></span>
            <span className="mock__bar mock__bar--sky" style={{ '--w': '64%' }}><em>Instructors</em></span>
            <span className="mock__bar mock__bar--mint" style={{ '--w': '48%' }}><em>Services</em></span>
          </div>
          <div className="mock__panel mock__form">
            <i>New feedback</i>
            <span className="mock__field" />
            <span className="mock__field mock__field--tall" />
            <span className="mock__button">Submit</span>
          </div>
        </div>
        <div className="mock__panel mock__recent">
          <i>Recent feedback (sample data)</i>
          <span className="mock__row"><u>Course</u><em>Clear examples in lectures</em><b>5</b></span>
          <span className="mock__row mock__row--sky"><u>Instructor</u><em>More office hours would help</em><b>4</b></span>
          <span className="mock__row mock__row--mint"><u>Service</u><em>Registration was quick</em><b>5</b></span>
        </div>
      </div>
    </div>
  )
}

function MenuPreview() {
  const dishes = [
    { name: 'Veggie platter', price: '$7', tone: 'a' },
    { name: 'Grilled chicken', price: '$9', tone: 'b' },
    { name: 'Fresh juice', price: '$3', tone: 'c' },
  ]
  return (
    <div className="mock mock--menu">
      <div className="mock__phone">
        <div className="mock__phone-top">
          <b>Room 204 menu</b>
          <span className="mock__qr" />
        </div>
        <div className="mock__chips">
          <span className="is-on">Mains</span>
          <span>Drinks</span>
          <span>Desserts</span>
        </div>
        <ul className="mock__dishes">
          {dishes.map((dish) => (
            <li key={dish.name}>
              <span className={`mock__food mock__food--${dish.tone}`} />
              <div>
                <b>{dish.name}</b>
                <i>{dish.price}</i>
              </div>
              <span className="mock__qty">
                <u>-</u>1<u>+</u>
              </span>
            </li>
          ))}
        </ul>
        <div className="mock__order">2 items<b>View order</b></div>
      </div>
    </div>
  )
}

function LibraryPreview() {
  const books = [
    { tone: 'a', status: 'Available' },
    { tone: 'b', status: 'Borrowed' },
    { tone: 'c', status: 'Available' },
    { tone: 'd', status: 'Available' },
  ]
  return (
    <div className="mock mock--library">
      <div className="mock__search">
        <span className="mock__search-icon" />
        <i>Search title, author…</i>
        <span className="mock__chip">All categories</span>
      </div>
      <div className="mock__stats">
        <div className="mock__stat"><b>240</b><i>Books</i></div>
        <div className="mock__stat"><b>36</b><i>Borrowed</i></div>
        <div className="mock__stat"><b>5</b><i>Due today</i></div>
      </div>
      <ul className="mock__books">
        {books.map((book, index) => (
          <li key={index}>
            <span className={`mock__cover mock__cover--${book.tone}`} />
            <span className={`mock__badge ${book.status === 'Borrowed' ? 'is-out' : ''}`}>{book.status}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

const PREVIEWS = {
  feedback: FeedbackPreview,
  menu: MenuPreview,
  library: LibraryPreview,
}

export default function ProjectPreview({ type, title }) {
  const Preview = PREVIEWS[type]
  if (!Preview) return <div className="preview preview--empty">Preview not available</div>

  return (
    <div className="preview-wrap">
      <div
        className="preview"
        role="img"
        aria-label={`Concept interface preview for ${title}. Illustration with sample data, not a screenshot.`}
      >
        <Preview />
      </div>
      <p className="preview__note">Concept preview with sample data, not a screenshot</p>
    </div>
  )
}
