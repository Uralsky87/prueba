import type { TabKey } from '../types'

type TabsProps = {
  activeTab: TabKey
  onChange: (tab: TabKey) => void
}

function Tabs({ activeTab, onChange }: TabsProps) {
  return (
    <nav className="header-tabs" aria-label="Secciones">
      <button
        className={activeTab === 'area' ? 'tab-button is-active' : 'tab-button'}
        type="button"
        onClick={() => onChange('area')}
      >
        Área personal
      </button>
      <button
        className={activeTab === 'datos' ? 'tab-button is-active' : 'tab-button'}
        type="button"
        onClick={() => onChange('datos')}
      >
        Datos personales
      </button>
    </nav>
  )
}

export default Tabs
