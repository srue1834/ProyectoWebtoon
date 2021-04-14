/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'

import MiButton from './components/Button'

const App = () => (
  <div>
    <MiButton onClick={() => alert('one')} />
    <MiButton title="hey" onClick={() => alert('two')} />
  </div>

)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
