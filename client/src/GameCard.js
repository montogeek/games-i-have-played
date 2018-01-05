import React from 'react'
import format from 'date-fns/format'

const GameCard = ({ game }) => {
  return (
    <li>
      <h3 className="f3">
        {game.name}{' '}
        <span className="black-60">
          {format(parseInt(game.releaseDate, 10), 'YYYY-MM-DD')}
        </span>
      </h3>
      <p>{game.summary}</p>
    </li>
  )
}

export default GameCard
