import { useMemo, useState } from 'react'
import Accordion from './components/Accordion'
import CardDetail from './components/CardDetail'
import CardList from './components/CardList'
import Header from './components/Header'
import type { CardData, GeneralFieldsMap, TabKey } from './types'

function App() {
  const [activeTab, setActiveTab] = useState<TabKey>('area')
  const [isDatosOpen, setIsDatosOpen] = useState(false)
  const [selectedCardId, setSelectedCardId] = useState<string | null>(null)
  const [isGeneralOpen, setIsGeneralOpen] = useState(true)
  const [isContenidosOpen, setIsContenidosOpen] = useState(true)
  const areaCards: CardData[] = [
    { id: 'card-1', titulo: '25-26_1_2_DAM-DAW_0373_Sistemas Informáticos', subtitulo: '2025/26 CN_CAT_2S_TR' },
    { id: 'card-2', titulo: '25-26_1_1_DAM-DAW_0484_Bases de Datos', subtitulo: '2025/26 CN_CAT_1S_TR' },
    { id: 'card-3', titulo: '25-26_1_1_DAM-DAW_0485_Programación', subtitulo: '2025/26 CN_CAT_1S_TR' },
    { id: 'card-4', titulo: '25-26_1_1_IPEI I CAT_1709_Itinerario Personal para la Empleabilidad I', subtitulo: '2025/26 CN_CAT_1S_TR' },
    { id: 'card-5', titulo: 'Módulo 0 - Plan nuevo (1 SEM)', subtitulo: '2025/26' },
    { id: 'card-6', titulo: 'Orientación Pedagógica - Cataluña', subtitulo: '2025/26' },
    { id: 'card-7', titulo: 'Secretaría Académica', subtitulo: '2025/26' },
  ]
  const selectedCard = useMemo(
    () => areaCards.find((card) => card.id === selectedCardId) ?? null,
    [areaCards, selectedCardId],
  )


  return (
    <div className="app-shell">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      <main className="app-main">
        {activeTab === 'datos' ? (
          <Accordion
            title="Datos personales"
            isOpen={isDatosOpen}
            onToggle={() => setIsDatosOpen((prev) => !prev)}
          >
            <div className="field-placeholder">
              <input type="text" placeholder="(campo vacío)" disabled />
            </div>
            <div className="field-placeholder">
              <input type="text" placeholder="(campo vacío)" disabled />
            </div>
            <div className="field-placeholder">
              <input type="text" placeholder="(campo vacío)" disabled />
            </div>
            <p className="future-note">Espacio reservado para informacion futura.</p>
          </Accordion>
        ) : selectedCard ? (
          <CardDetail
            card={selectedCard}
            isGeneralOpen={isGeneralOpen}
            isContenidosOpen={isContenidosOpen}
            onBack={() => setSelectedCardId(null)}
            onToggleGeneral={() => setIsGeneralOpen((prev) => !prev)}
            onToggleContenidos={() => setIsContenidosOpen((prev) => !prev)}
          />
        ) : (
          <CardList cards={areaCards} onSelect={setSelectedCardId} />
        )}
      </main>
    </div>
  )
}

export default App
