import React, { Component } from 'react'
import GameCard from './GameCard'

class GamesList extends Component {
  render() {
    const { games } = this.props

    if (games.length === 0) return null

    return (
      <div className="flex-auto flex-basis-50">
        <h2 className="f2">Game collection</h2>
        <ul className="list pl0">{games.map(game => <GameCard game={game} />)}</ul>
      </div>
    )
  }
}

export default GamesList
