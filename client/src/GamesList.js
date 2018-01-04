import React, { Component } from 'react'
import GameCard from './GameCard'

class GamesList extends Component {
  render() {
    const { games } = this.props

    if (games.length === 0) return null

    return (
      <div>
        <h3>My games!</h3>
        {games.map(game => <GameCard game={game} />)}
      </div>
    )
  }
}

export default GamesList
