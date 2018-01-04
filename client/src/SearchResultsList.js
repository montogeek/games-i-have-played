import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import environment from './environment'
import GameCard from './GameCard'

const SearchResultItem = ({ game, onClick }) => {
  return [
    <GameCard game={game} />,
    <button onClick={onClick.bind(this, game)}>Select</button>
  ]
}

class SearchResultsList extends Component {
  constructor(props) {
    super(props)
    this.selectGame = this.selectGame.bind(this)
  }

  selectGame(game) {
    this.props.onGameSelected(game)
  }

  render() {
    const { name } = this.props

    if (!name) return null

    return (
      <QueryRenderer
        environment={environment}
        query={graphql`
          query AppQuery($name: String!) {
            game(name: $name) {
              _id
              name
              summary
              releaseDate
            }
          }
        `}
        variables={{ name }}
        render={({ error, props }) => {
          if (error) {
            return <div>{error}</div>
          }
          if (!props) {
            return <div>Loading...</div>
          }
          return (
            <div>
              <h3>Games</h3>
              {props.game.map(game => (
                <SearchResultItem onClick={this.selectGame} game={game} />
              ))}
            </div>
          )
        }}
      />
    )
  }
}

export default SearchResultsList
