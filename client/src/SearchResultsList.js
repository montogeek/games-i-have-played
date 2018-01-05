import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import environment from './environment'
import GameCard from './GameCard'

const SearchResultItem = ({ game, onClick }) => {
  return [
    <GameCard game={game} />,
    <button className="f6 link dim br1 ba ph3 pv2 mb2 dib dark-gray" onClick={onClick.bind(this, game)}>Select</button>
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
            <div className="flex-auto flex-basis-50 pr5">
              <h2 className="f2">Available games</h2>
              <ul className="list pl0">
                {props.game.map(game => (
                  <SearchResultItem onClick={this.selectGame} game={game} />
                ))}
              </ul>
            </div>
          )
        }}
      />
    )
  }
}

export default SearchResultsList
