import type { ReactNode } from 'react'

type AccordionProps = {
  title: string
  isOpen: boolean
  onToggle: () => void
  children: ReactNode
}

function Accordion({ title, isOpen, onToggle, children }: AccordionProps) {
  return (
    <section className="accordion">
      <button
        className="accordion-toggle"
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}
      >
        <span className={isOpen ? 'arrow arrow-open' : 'arrow'} aria-hidden="true">
          <svg width="18" height="18" viewBox="0 0 18 18">
            <polyline
              points="6 7 9 10 12 7"
              fill="none"
              stroke="#38bdf8"
              strokeWidth="2.2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </span>
        {title}
      </button>
      <div
        className={isOpen ? 'accordion-panel is-open' : 'accordion-panel is-closed'}
        aria-hidden={!isOpen}
      >
        {children}
      </div>
    </section>
  )
}

export default Accordion
