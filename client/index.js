import React from 'react'
import ReactDOM from 'react-dom'
import { AppContainer } from 'react-hot-loader'
import { Provider } from 'react-fela'
import { createRenderer } from 'fela'
import App from './src/App'

const render = Component => {
  ReactDOM.render(
    <AppContainer>
      <Provider renderer={renderer}>
        <Component />
      </Provider>
    </AppContainer>,
    document.getElementById('root')
  )
}

const renderer = createRenderer()

render(App)

// Webpack Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./src/App', () => {
    render(App)
  })
}
