import type { CardData } from '../types'

type CardItemProps = {
  card: CardData
  onSelect: (cardId: string) => void
  variant: number
}

function CardItem({ card, onSelect, variant }: CardItemProps) {
  const isLast = card.id === 'card-7';
  const isPenultimate = card.id === 'card-6';
  const isFifth = card.id === 'card-5';
  let progress = 100;
  if (isLast) progress = 0;
  if (isPenultimate) progress = 50;
  if (isFifth) progress = 92;
  return (
    <article className="area-card" onClick={() => onSelect(card.id)}>
      <div className={`card-banner card-banner-${variant}`} />
      <div className="card-body">
        <h2 className="card-title">{card.titulo}</h2>
        <p className="card-subtitle">{card.subtitulo}</p>
        <div className="card-progress">
          <span className="progress-label">{progress}%</span>
          <div className="progress-track">
            <div
              className="progress-fill"
              style={{ width: `${progress}%` }}
            />
          </div>
        </div>
      </div>
    </article>
  )
}

export default CardItem
