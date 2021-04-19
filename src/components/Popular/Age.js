/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React, { Component } from 'react'
import fila from './popular/genre.png'
import fila2 from './popular/age.png'

class Age extends Component {
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
          <div className="fondo" style={styles.text1}>
            Most Popular by Genre
          </div>
          <img src={fila} style={styles.fila1} />
          <div className="fondo" style={styles.text2}>
            Most Popular by Age Group
          </div>
          <img src={fila2} style={styles.fila2} />
        </div>
      </div>
    )
  }
}

const styles = {
  viewport: {
    display: 'flex',
    height: '730px',
    margin: '-160 -10 0 -10',
    flexDirection: 'row',
    width: '1600px',
    backgroundColor: 'white',
  },
  text1: {
    display: 'flex',
    height: '20px',
    margin: '50 0 0 180',
    flexDirection: 'row',
    padding: '5 0 10 0',
    width: '220px',
    backgroundColor: 'transparent',
    fontSize: '19px',
    // lineHeight: '22px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
  },
  fila1: {
    display: 'flex',
    height: '550px',
    margin: '93 0 0 -220',
    flexDirection: 'row',
    padding: '5 0 10 0',
    width: '595px',
  },
  fila2: {
    display: 'flex',
    height: '550px',
    margin: '93 0 0 -280',
    flexDirection: 'row',
    padding: '5 0 10 0',
    width: '595px',
  },
  text2: {
    display: 'flex',
    height: '20px',
    margin: '50 0 0 60',
    flexDirection: 'row',
    padding: '5 0 10 0',
    width: '280px',
    backgroundColor: 'transparent',
    fontSize: '19px',
    // lineHeight: '22px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
  },

}
export default Age
