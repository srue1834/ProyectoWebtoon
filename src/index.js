/* eslint-disable react/style-prop-object */
/* eslint-disable no-alert */
/* eslint-disable react/jsx-filename-extension */
/* eslint-disable no-undef */
import React from 'react'
import ReactDOM from 'react-dom'
import Carousel from './components/Carousel/Carousel'
import Navbar from './components/Navigation_bar/Navbar'
import Daysbar from './components/Navigation_bar/Daysbar'
import Catalogo from './components/wed/Catalogo'
import New from './components/NewWT/New'
import Genres from './components/Genres/Genres'
import Age from './components/Popular/Age'

// import 'bootstrap/dist/css/bootstrap.min.css'

const App = () => (
  <div>
    <style>{'body { background-color: #f4f4f4; }'}</style>
    <Navbar />
    <Carousel />
    <Daysbar />
    <Catalogo />
    <New />
    <Genres />
    <Age />

  </div>

)

ReactDOM.render(
  <App />,
  document.getElementById('root'),
)
