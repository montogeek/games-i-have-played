import React from 'react'

const GameCard = ({ game }) => {
  return (
    <ul>
      {game._id}
      <li>{game.name}</li>
      <li>{game.summary}</li>
      <li>{game.releaseDate}</li>
    </ul>
  )
}

export default GameCard
