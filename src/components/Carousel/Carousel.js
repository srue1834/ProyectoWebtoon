/* eslint-disable max-len */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react'

import fondo from './images/fondoBanner.jpeg'
import banner1 from './images/banner1.gif'
import canva from './images/webtoonCV.png'

class Carousel extends Component {
  constructor(props) {
    super(props)

    this.state = {

    }
  }

  render() {
    return (
      // eslint-disable-next-line react/jsx-filename-extension
      <div>
        <div className="view_port" style={styles.viewport}>
          <img src={fondo} style={styles.fondoB} />
          <img src={banner1} style={styles.banner_container} />
          <img src={canva} style={styles.canvaCN} />
        </div>
      </div>
    )
  }
}

const styles = {
  viewport: {
    display: 'flex',
    position: 'relative',
    top: '20%',
    left: '50%',
    transform: 'translate(-50%, -100%)',
    height: '492px',
    margin: '-1 0 66 0',
    width: 'relative',
  },
  banner_container: {
    display: 'flex',
    flexDirection: 'row',
    width: 'fit-content',
    height: '565',
    top: '500',
    margin: '-7 0 0 -1515',
    position: 'relative',
  },
  canvaCN: {
    display: 'flex',
    flexDirection: 'row',
    width: '400',
    height: '505',
    top: '520',
    margin: '0 0 0 -50',
    position: 'relative',
  },
  fondoB: {
    position: 'relative',
    margin: '492 0 0 -9',
    width: '1600px',
    height: '548px',
    float: 'left',
  },
}

export default Carousel
