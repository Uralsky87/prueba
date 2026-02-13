import type { TabKey } from '../types'
import Tabs from './Tabs'

type HeaderProps = {
  activeTab: TabKey
  onTabChange: (tab: TabKey) => void
}

function Header({ activeTab, onTabChange }: HeaderProps) {
  return (
    <header className="app-header">
      <div className="header-left">
        <img className="title-logo" src="/titulo_ini.png" alt="Titulo" />
        <Tabs activeTab={activeTab} onChange={onTabChange} />
      </div>
      <div className="header-actions">
        <button className="icon-button" type="button" aria-label="Notificaciones">
          <svg
            className="icon-outline"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M18 8a6 6 0 10-12 0c0 7-3 7-3 9h18c0-2-3-2-3-9"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9.5 20a2.5 2.5 0 005 0"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        <button className="icon-button" type="button" aria-label="Chat">
          <svg
            className="icon-outline"
            viewBox="0 0 24 24"
            aria-hidden="true"
            focusable="false"
          >
            <path
              d="M6 7h12a3 3 0 013 3v5a3 3 0 01-3 3H10l-4 3v-3H6a3 3 0 01-3-3v-5a3 3 0 013-3z"
              fill="none"
              stroke="currentColor"
              strokeWidth="1.6"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
      </div>
    </header>
  )
}

export default Header
