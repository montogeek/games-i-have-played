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
    return [
      <Search onChange={this.onChange} />,
      <SearchResultsList name={this.state.name} onGameSelected={this.addGame} />,
      <GamesList games={this.state.games} />
    ]
  }
}

export default App
