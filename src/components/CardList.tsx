import type { CardData } from '../types'
import CardItem from './CardItem'

type CardListProps = {
  cards: CardData[]
  onSelect: (cardId: string) => void
}

function CardList({ cards, onSelect }: CardListProps) {
  return (
    <section className="cards-stack">
      {cards.map((card, index) => (
        <CardItem key={card.id} card={card} onSelect={onSelect} variant={(index % 7) + 1} />
      ))}
    </section>
  )
}

export default CardList
