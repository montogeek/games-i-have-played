import React, { Component } from 'react'
import { graphql, QueryRenderer } from 'react-relay'
import environment from './environment'

import { installRelayDevTools } from 'relay-devtools'
installRelayDevTools()

class GameList extends Component {
  render() {
    const { name } = this.props

    if(!name) return null

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
              {props.game.map(game => {
                return (
                  <ul>
                    {game._id}
                    <li>{game.name}</li>
                    <li>{game.summary}</li>
                    <li>{game.releaseDate}</li>
                  </ul>
                )
              })}
            </div>
          )
        }}
      />
    )
  }
}

class SearchInput extends Component {
  render() {
    return [<label htmlFor="name">Enter game name: </label>, <input type="text" id="name" onChange={this.props.onChange}/>]
  }
}

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: ''
    }
    this.onChange = this.onChange.bind(this)
  }

  onChange(e) {
    this.setState({
      name: e.target.value
    })
  }

  render() {
    return [<SearchInput onChange={this.onChange}/>, <GameList name={this.state.name} />]
  }
}

export default App
