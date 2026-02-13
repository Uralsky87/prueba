import React from 'react'
// ...existing code...

import Accordion from './Accordion'
import type { CardData } from '../types'

type CardDetailProps = {
  card: CardData
  isGeneralOpen: boolean
  isContenidosOpen: boolean
  onBack: () => void
  onToggleGeneral: () => void
  onToggleContenidos: () => void
}

function CardDetail({
  card,
  isGeneralOpen,
  isContenidosOpen,
  onBack,
  onToggleGeneral,
  onToggleContenidos,
}: CardDetailProps) {
  const [isClasesOpen, setIsClasesOpen] = React.useState(false);
  const [isActividadesOpen, setIsActividadesOpen] = React.useState(false);
  const generalButtons = [
    'Tablón general',
    'Foro general',
    'Guía Didáctica',
    'Plan de Trabajo',
    'Horario Clases',
  ];
  // El Accordion de contenidos ahora lo controla App.tsx
  // Personalización de títulos de UT según el menú
  let formativoTitles = [
    'UT1 - Arquitectura de sistemas y dispositivos periféricos.',
    'UT2 - Redes locales y dispositivos de interconexión',
    'UT3 - Sistemas operativos: conceptos, tipos e instalación',
    'UT4 - Gestión de la información y mantenimiento del sistema',
    'UT5 - Administración básica de red y servicios en entorno local',
    'UT6 - Seguridad informática y comunicaciones seguras',
    'UT7 - Documentación técnica, licencias y herramientas de productividad',
  ];
  if (card.titulo === '25-26_1_1_DAM-DAW_0484_Bases de Datos') {
    formativoTitles = [
      'UT1 - Fundamentos de las bases de datos',
      'UT2 - Diseño lógico de bases de datos',
      'UT3 - Diseño físico e implementación de bases de datos',
      'UT4 - Consultas a bases de datos',
      'UT5 - Manipulación y transacciones en bases de datos',
      'UT6 - Programación de bases de datos',
      'UT7 - Bases de datos no relacionales',
    ];
  } else if (card.titulo === '25-26_1_1_DAM-DAW_0485_Programación') {
    formativoTitles = [
      'UT1 - Fundamentos de la programación',
      'UT2 - Programación estructurada y estructuras de control',
      'UT3 - Principios de la programación orientada a objetos',
      'UT4 - Definición y uso de clases y objetos propios',
      'UT5 - Operaciones de entrada/salida e interfaces gráficas',
      'UT6 - Tipos de datos compuestos y colecciones',
      'UT7 - Herencia, jerarquías y polimorfismo en POO',
    ];
  } else if (card.titulo === '25-26_1_1_IPEI I CAT_1709_Itinerario Personal para la Empleabilidad I') {
    formativoTitles = [
      'UT1 - Conociendo el sector profesional y sus oportunidades',
      'UT2 - Seguridad y salud laboral I: cultura preventiva y riesgos',
      'UT3 - Seguridad y salud laboral II: gestión, emergencias y primeros auxilios',
      'UT4 - Marco laboral y condiciones contractuales',
      'UT5 - Diseñando mi perfil profesional',
      'UT6 - Hoja de ruta para la empleabilidad y mejora continua',
      'UT7 - Aprendizaje autónomo y entorno digital personal',
    ];
  }
  return (
    <div className="card-detail">
      <button className="back-button" type="button" onClick={onBack}>
        Volver
      </button>
      <h2 className="detail-title">{card.titulo}</h2>
      <p className="detail-subtitle">{card.subtitulo}</p>
      <div className="detail-accordions">
        <section className="accordion">
          <button
            className="accordion-toggle general-toggle"
            type="button"
            onClick={onToggleGeneral}
            aria-expanded={isGeneralOpen}
          >
            <span className={isGeneralOpen ? 'arrow arrow-open' : 'arrow'} aria-hidden="true">
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
            General
          </button>
          <div className={isGeneralOpen ? 'accordion-panel is-open' : 'accordion-panel is-closed'} aria-hidden={!isGeneralOpen}>
            <div className="general-buttons">
              {generalButtons.map((label) => (
                <div
                  key={label}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5em',
                    marginBottom: '0.18em',
                    border: '1px solid #111',
                    borderRadius: '0.3em',
                    padding: '0.15em 0.7em',
                    background: '#fff',
                    height: '1.8em',
                  }}
                >
                  <img
                    src="monologo.png"
                    alt="icono monologo"
                    style={{ height: '1.3em', width: 'auto', objectFit: 'contain', marginRight: '0.6em' }}
                  />
                  <span>{label}</span>
                </div>
              ))}
            </div>
          </div>
        </section>
        <Accordion
          title="Contenidos formativos y cuestionarios de autoevaluación"
          isOpen={isContenidosOpen}
          onToggle={onToggleContenidos}
        >
          <div className="formativo-blocks">
            {formativoTitles.map((ut, idx) => (
              <div className="formativo-section" key={ut}>
                <div className="formativo-title formativo-title-pink">
                  {ut}
                </div>
                <div className="formativo-btns-vertical">
                  <button className="general-link-btn" type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5em' }}>
                    <span>
                      {card.titulo === '25-26_1_1_DAM-DAW_0484_Bases de Datos'
                        ? `0484 UT${idx + 1} Bases de datos`
                        : card.titulo === '25-26_1_1_DAM-DAW_0485_Programación'
                        ? `0485 UT${idx + 1} Programación`
                        : card.titulo === '25-26_1_1_IPEI I CAT_1709_Itinerario Personal para la Empleabilidad I'
                        ? `1709 UT${idx + 1} Itinerario Personal para la Empleabilidad I`
                        : `0483 UT${idx + 1} Sistemas Informáticos`}
                    </span>
                    <span style={{ display: 'flex', alignItems: 'center', marginLeft: '0.5em', marginRight: '0.4em' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '1.5em', height: '1.5em', borderRadius: '50%', background: '#a7d7b5' }}>
                        <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                          <path d="M6 10.5l3 3 5-5" stroke="#3a7750" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </button>
                  <button className="general-link-btn" type="button" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '0.5em' }}>
                    <span>{`UT${idx + 1} Autoevaluación`}</span>
                    <span style={{ display: 'flex', alignItems: 'center', marginLeft: '0.5em', marginRight: '0.4em' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '1.5em', height: '1.5em', borderRadius: '50%', background: '#a7d7b5' }}>
                        <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                          <path d="M6 10.5l3 3 5-5" stroke="#3a7750" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                        </svg>
                      </span>
                    </span>
                  </button>
                </div>
              </div>
            ))}
          </div>
        </Accordion>
        {/* Fin de Accordions principales */}
        {/* Accordion de Clases síncronas (vacío y no desplegable) */}
        {/* Solo un menú de Clases síncronas, el segundo ha sido eliminado */}

        {/* Accordion de Convocatoria ordinaria (con submenús colapsables) */}
        {(() => {
          const [isConvOpen, setIsConvOpen] = React.useState(false);
          const [submenusOpen, setSubmenusOpen] = React.useState(Array(10).fill(false));
          React.useEffect(() => {
            if (isConvOpen) {
              setSubmenusOpen(Array(10).fill(true));
            } else {
              setSubmenusOpen(Array(10).fill(false));
            }
          }, [isConvOpen]);
          const handleSubToggle = (idx: number) => {
            setSubmenusOpen(openArr => openArr.map((v, i) => (i === idx ? !v : v)));
          };
          // Mapa de resultados personalizados para cada menú
          const totalConvData: Record<string, { examen: string, total: string }> = {
            '25-26_1_2_DAM-DAW_0373_Sistemas Informáticos': { examen: '5,26', total: '7' },
            '25-26_1_1_DAM-DAW_0484_Bases de Datos': { examen: '9,17', total: '9' },
            '25-26_1_1_DAM-DAW_0485_Programación': { examen: '7,8', total: '4' },
            '25-26_1_1_IPEI I CAT_1709_Itinerario Personal para la Empleabilidad I': { examen: '9,00', total: '9' },
          };
          const currentTotalConv = totalConvData[card.titulo] || { examen: '', total: '' };
          return (
            <Accordion
              title="Convocatoria ordinaria"
              isOpen={isConvOpen}
              onToggle={() => setIsConvOpen(prev => !prev)}
            >
              <div className="formativo-blocks">
                {Array.from({ length: 10 }).map((_, idx) => {
                  const isLast = idx === 9;
                  const title = isLast ? 'Total CONVOCATORIA ORDINARIA' : `RA${idx + 1} CONV. ORDINARIA`;
                  return (
                    <Accordion
                      key={title}
                      title={title}
                      isOpen={submenusOpen[idx]}
                      onToggle={() => handleSubToggle(idx)}
                    >
                      {/* Mostrar tabla en todos los RA (RA1 a RA9) */}
                      {idx >= 0 && idx < 9 && (
                        <div style={{ padding: '8px 0 0 0' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 4 }}>
                            <tbody>
                              <tr style={{ background: '#fff' }}>
                                <td style={{ padding: '4px 8px 4px 0' }}>
                                  <div style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500, marginBottom: '1px' }}>CALIFICACIÓN CALCULADA</div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '1.2em', height: '1.2em' }}>
                                      <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                                        <rect x="3" y="3" width="14" height="14" rx="2" fill="#111" />
                                        <rect x="6" y="6" width="8" height="2" rx="0.5" fill="#fff" />
                                        <rect x="6" y="9" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="9" y="9" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="12" y="9" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="6" y="12" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="9" y="12" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="12" y="12" width="2" height="2" rx="0.5" fill="#fff" />
                                      </svg>
                                    </span>
                                    <span style={{ fontWeight: 600, fontSize: '1rem', color: '#111827', textAlign: 'left', lineHeight: 1.1 }}>
                                      Total RA{idx+1}<br />EVALUACIÓN<br />CONTINUA
                                    </span>
                                  </div>
                                </td>
                                <td style={{ width: 32, textAlign: 'center', color: '#6b7280', fontWeight: 500, fontSize: '1.1rem' }}>-</td>
                                <td style={{ fontWeight: 600, fontSize: '1rem', color: '#111827', textAlign: 'left', padding: '4px 0 4px 8px', minWidth: '3.5em' }}>
                                  {card.titulo === '25-26_1_1_DAM-DAW_0485_Programación' && idx === 3 ? '4,00' : ['8,00','9,00','10,00'][[2,1,0,2,1,0,2,1,0][idx]]}
                                </td>
                              </tr>
                              <tr style={{ background: '#f3f4f6' }}>
                                <td style={{ padding: '4px 8px 4px 0' }}>
                                  <div style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500, marginBottom: '1px' }}>CALIFICACIÓN CALCULADA</div>
                                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.5em' }}>
                                    <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '1.2em', height: '1.2em' }}>
                                      <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                                        <rect x="3" y="3" width="14" height="14" rx="2" fill="#111" />
                                        <rect x="6" y="6" width="8" height="2" rx="0.5" fill="#fff" />
                                        <rect x="6" y="9" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="9" y="9" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="12" y="9" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="6" y="12" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="9" y="12" width="2" height="2" rx="0.5" fill="#fff" />
                                        <rect x="12" y="12" width="2" height="2" rx="0.5" fill="#fff" />
                                      </svg>
                                    </span>
                                    <span style={{ fontWeight: 600, fontSize: '1rem', color: '#111827', textAlign: 'left', lineHeight: 1.1 }}>
                                      RA{idx+1} EXAMEN<br />CONV.<br />ORDINARIA
                                    </span>
                                  </div>
                                </td>
                                <td style={{ width: 32, textAlign: 'center', color: '#6b7280', fontWeight: 500, fontSize: '1.1rem' }}>-</td>
                                <td style={{ fontWeight: 600, fontSize: '1rem', color: '#111827', textAlign: 'left', padding: '4px 0 4px 8px', minWidth: '3.5em' }}>
                                  10,00
                                </td>
                              </tr>
                              <tr style={{ background: '#fff' }}>
                                <td style={{ fontWeight: 700, fontSize: '1rem', color: '#111827', textAlign: 'left', padding: '4px 8px 4px 0' }} colSpan={2}>
                                  Total RA{idx+1} CONV.<br />ORDINARIA
                                </td>
                                <td style={{ fontWeight: 700, fontSize: '1.08rem', color: '#111827', textAlign: 'left', padding: '4px 0 4px 8px' }}>
                                  {card.titulo === '25-26_1_1_DAM-DAW_0485_Programación' && idx === 3
                                    ? 4
                                    : (() => {
                                        const evalCont = parseFloat(['8,00','9,00','10,00'][[2,1,0,2,1,0,2,1,0][idx]].replace(',','.'));
                                        const examen = 10.00;
                                        return Math.round((evalCont + examen) / 2);
                                      })()
                                  }
                                </td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                      {/* Total CONVOCATORIA ORDINARIA: solo dos filas */}
                      {idx === 9 && (
                        <div style={{ padding: '8px 0 0 0' }}>
                          <table style={{ width: '100%', borderCollapse: 'collapse', marginTop: 4 }}>
                            <tbody>
                              <tr style={{ background: '#f3f4f6' }}>
                                <td style={{ padding: '4px 8px 4px 0' }}>
                                  <div style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500, marginBottom: '1px' }}>CALIFICACIÓN CALCULADA</div>
                                  <div style={{ fontWeight: 600, fontSize: '1rem', color: '#111827', textAlign: 'left', lineHeight: 1.1 }}>
                                    EXAMEN CONV.<br />ORDINARIA
                                  </div>
                                </td>
                                <td style={{ width: 32, textAlign: 'center', color: '#6b7280', fontWeight: 500, fontSize: '1.1rem', padding: '4px 0 4px 8px' }}>-</td>
                                <td style={{ fontWeight: 600, fontSize: '1rem', color: '#111827', textAlign: 'left', padding: '4px 0 4px 8px', minWidth: '3.5em' }}>{currentTotalConv.examen || '—'}</td>
                              </tr>
                              <tr style={{ background: '#fff' }}>
                                <td style={{ fontWeight: 700, fontSize: '1rem', color: '#111827', textAlign: 'left', padding: '4px 8px 4px 0' }} colSpan={2}>
                                  <div style={{ fontSize: '0.78rem', color: '#6b7280', fontWeight: 500, marginBottom: '1px' }}>CALIFICACIÓN CALCULADA</div>
                                  Total CONVOCATORIA<br />ORDINARIA
                                </td>
                                <td style={{ fontWeight: 700, fontSize: '1.08rem', color: '#111827', textAlign: 'left', padding: '4px 0 4px 8px' }}>{currentTotalConv.total || '—'}</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      )}
                    </Accordion>
                  );
                })}
              </div>
            </Accordion>
          );
        })()}

        {/* Accordion de Clases síncronas (vacío y no desplegable) */}
        <Accordion
          title="Clases síncronas"
          isOpen={isClasesOpen}
          onToggle={() => setIsClasesOpen((prev) => !prev)}
        >
          <div className="general-buttons">
            {[
              { title: 'Clase 01', subtitle: 'Cierre: jueves, 9 de octubre de 2025, 15:30' },
              { title: 'Clase 02', subtitle: 'Cierre: jueves, 16 de octubre de 2025, 15:30' },
              { title: 'Clase 03', subtitle: 'Cierre: jueves, 30 de octubre de 2025, 15:30' },
              { title: 'Clase 04', subtitle: 'Cierre: martes, 11 de noviembre de 2025, 11:15' },
              { title: 'Clase 05', subtitle: 'Cierre: jueves, 13 de noviembre de 2025, 15:30' },
              { title: 'Clase 06', subtitle: 'Cierre: jueves, 27 de noviembre de 2025, 15:30' },
              { title: 'Clase 07', subtitle: 'Cierre: jueves, 11 de diciembre de 2025, 15:30' },
            ].map(({ title, subtitle }) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '0.1em',
                  marginBottom: '0.18em',
                  border: '1px solid #111',
                  borderRadius: '0.3em',
                  padding: '0.15em 0.7em',
                  background: '#fff',
                  minHeight: '2.2em',
                  width: '100%',
                }}
              >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
                  <span style={{ fontSize: '1em', fontWeight: 600 }}>{title}</span>
                  <span style={{ display: 'inline-flex', alignItems: 'center', justifyContent: 'center', width: '1.5em', height: '1.5em', borderRadius: '50%', background: '#a7d7b5', marginLeft: '0.5em', marginRight: '0.2em' }}>
                    <svg width="1em" height="1em" viewBox="0 0 20 20" fill="none">
                      <path d="M6 10.5l3 3 5-5" stroke="#3a7750" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                </div>
                <span style={{ fontSize: '0.85em', color: '#6b7280', fontWeight: 400 }}>{subtitle}</span>
              </div>
            ))}
          </div>
        </Accordion>
          {/* ...existing code... */}
        {/* Accordion de Actividades Obligatorias */}
        <Accordion
          title="Actividades Obligatorias"
          isOpen={isActividadesOpen}
          onToggle={() => setIsActividadesOpen((prev) => !prev)}
        >
          <div className="general-buttons">
            {[
              { title: 'Entrega de la actividad de la UT1. Fundamentos de la programación (RA1)', subtitle: 'Cierre: lunes, 20 de octubre de 2025, 23:59' },
              { title: 'Entrega de la actividad de la UT2. Programación estructurada y estructuras de control (RA3)', subtitle: 'Cierre: lunes, 27 de octubre de 2025, 23:59' },
              { title: 'Entrega de la actividad de la UT3. Principios de la programación orientada a objetos (RA2)', subtitle: 'Cierre: martes, 11 de noviembre de 2025, 23:59' },
              { title: 'Entrega de la actividad de la UT4. Definición y uso de clases y objetos propios (RA4)', subtitle: 'Cierre: martes, 11 de noviembre de 2025, 23:59' },
              { title: 'Entrega de la actividad de la UT6. Tipos de datos compuestos y colecciones (RA6)', subtitle: 'Cierre: lunes, 24 de noviembre de 2025, 23:59' },
              { title: 'Entrega de la actividad de la UT7. Herencia, jerarquías y polimorfismo en POO (RA7)', subtitle: 'Cierre: lunes, 1 de diciembre de 2025, 23:59' },
            ].map(({ title, subtitle }) => (
              <div
                key={title}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'flex-start',
                  gap: '0.1em',
                  marginBottom: '0.18em',
                  border: '1px solid #111',
                  borderRadius: '0.3em',
                  padding: '0.15em 0.7em',
                  background: '#fff',
                  minHeight: '2.2em',
                  width: '100%',
                }}
              >
                <span style={{ fontSize: '1em', fontWeight: 600 }}>{title}</span>
                <span style={{ fontSize: '0.85em', color: '#6b7280', fontWeight: 400 }}>{subtitle}</span>
              </div>
            ))}
          </div>
        </Accordion>
      </div>

      {/* Footer gris al final de la pantalla */}
      <footer style={{
        width: '100%',
        background: '#f3f4f6',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: '24px 0 18px 0',
        marginTop: '32px',
        position: 'relative',
        bottom: 0,
        left: 0,
      }}>
        <img src="titulo_ini.png" alt="Logo Linkia FP" style={{ maxWidth: '220px', width: '100%', height: 'auto', marginBottom: '10px' }} />
        <span style={{ color: '#6b7280', fontSize: '0.98rem', fontWeight: 400, textAlign: 'center' }}>
          © 2026 Linkia FP Formación Profesional Oficial a Distancia
        </span>
      </footer>
    </div>
  )
}

export default CardDetail
