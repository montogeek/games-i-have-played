import React, { Component } from 'react'
import { installRelayDevTools } from 'relay-devtools'
import Search from './Search'
import SearchResultsList from './SearchResultsList'
import GamesList from './GamesList'

installRelayDevTools()

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      games: []
    }
    this.onChange = this.onChange.bind(this)
    this.addGame = this.addGame.bind(this)
  }

  addGame(game) {
    this.setState({
      games: [...this.state.games, game]
    })
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return (
      <div className="ma3 calisto">
        <Search onChange={this.onChange} />
        <div className="flex flex-row">
          <SearchResultsList name={this.state.name} onGameSelected={this.addGame} />
          <GamesList games={this.state.games} />
        </div>
      </div>
    )
  }
}

export default App
