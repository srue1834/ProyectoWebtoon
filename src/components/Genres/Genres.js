/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React, { Component } from 'react'
import card1 from './images/justPancakes.png'
import card2 from './images/muted.png'
import card3 from './images/saphie.png'
import card4 from './images/shiloh.png'
import card5 from './images/shootAround.png'
import card6 from './images/unTouchable.png'
import card7 from './images/waffles&pancakes.png'
import card8 from './images/wolfsbane.png'
import card9 from './images/comedy.png'
import card10 from './images/drama.png'

class Genres extends Component {
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
          <p style={styles.title}>GENRES</p>
          <div className="view_port2" style={styles.viewport3}>
            <div className="comedy">
              <img src={card9} style={styles.card} />
            </div>
            <div className="pancake">
              <img src={card1} style={styles.card} />
            </div>
            <div className="shoot">
              <img src={card5} style={styles.card} />
            </div>
            <div className="saphie">
              <img src={card3} style={styles.card} />
            </div>
            <div className="waffles">
              <img src={card7} style={styles.card} />
            </div>
          </div>
        </div>

        <div div className="view_port3" style={styles.viewport2}>
          <div className="drama">
            <img src={card10} style={styles.card} />
          </div>
          <div className="untouchable">
            <img src={card6} style={styles.card} />
          </div>
          <div className="wolfsbane">
            <img src={card8} style={styles.card} />
          </div>
          <div className="shiloh">
            <img src={card4} style={styles.card} />
          </div>
          <div className="muted">
            <img src={card2} style={styles.card} />
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  viewport: {
    display: 'flex',
    height: '450px',
    margin: '20 0 0 175',
    flexDirection: 'row',
    width: 'relative',
  },
  viewport3: {
    display: 'flex',
    height: '450px',
    margin: '60 0 0 -729',
    flexDirection: 'row',
    // width: 'relative',
    position: 'relative',
    padding: '0 0 0 73',
    width: '1300px',

  },
  viewport2: {
    display: 'flex',
    height: '450px',
    margin: '-140 0 0 175',
    flexDirection: 'row',
    width: 'relative',
  },
  card: {
    display: 'block',
    position: 'relative',
    height: '234px',
    margin: '0 0 0 0',
    padding: '0 18 0 0',
    width: '234px',
  },
  title: {
    position: 'relative',
    fontSize: '22px',
    lineHeight: '24px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '10 0 0 565',
    padding: '0 0 0 0',
    display: 'flex',
  },
}
export default Genres
