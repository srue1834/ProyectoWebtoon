/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable import/no-unresolved */
/* eslint-disable global-require */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable camelcase */
/* eslint-disable no-return-assign */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import wtLogo from './webtoonLogo.png'
import userLogo from './userLogo.png'
import bookLogo from './bookLogo.png'
import lupa from './lupa.png'

class Navbar extends Component {
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
          <img src={wtLogo} style={styles.imagen} />
          <p style={styles.originals}>ORIGINALS</p>
          <p style={styles.originals}>GENRES</p>
          <p style={styles.originals}>POPULAR</p>
          <p style={styles.originals}>CANVAS</p>
          <p style={styles.creators}>
            Creators 101
            <img src={bookLogo} style={styles.bookL} />
          </p>
          <small style={styles.bar}>|</small>
          <button type="button" style={styles.boton}>
            Publish
          </button>
          <button type="button" style={styles.boton2}>
            swheelier
            <img src={userLogo} style={styles.logoBtn2} />
          </button>
          <small style={styles.bar}>|</small>
          <button type="button" style={styles.search}>
            <img src={lupa} style={styles.lupaBtn} />
          </button>
        </div>
      </div>
    )
  }
}

const styles = {
  viewport: {
    display: 'flex',
    position: 'relative',
    height: '114px',
    margin: '-10 -10 0 -10',
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '1600px',
  },
  imagen: {
    position: 'relative',
    margin: '3 0 0 20',
    width: '109px',
    height: '106px',
    float: 'left',
  },
  originals: {
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '20px',
    position: 'relative',
    margin: '45 10 0 25',
    float: 'left',
  },
  boton: {
    position: 'relative',
    top: '32px',
    left: '600px',
    backgroundColor: '#2f2f2f',
    border: 'none',
    color: 'white',
    padding: '0 25 0 25',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '4 4 0 -85',
    cursor: 'pointer',
    height: '35px',
    width: '120px',
    borderRadius: '20px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '14px',
    lineHeight: '31px',
    verticalAlign: 'top',
  },
  boton2: {
    position: 'relative',
    top: '32px',
    left: '600px',
    background: 'src={wtLogo}',
    backgroundColor: '#fff',
    border: '1px solid #b4b4b4',
    color: '#7f7f7f',
    padding: '0 15 0 44',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '4px 4px',
    cursor: 'pointer',
    height: '35px',
    width: '120px',
    borderRadius: '20px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '13px',
    lineHeight: '31px',
    verticalAlign: 'top',
  },
  logoBtn2: {
    width: '30px',
    height: '30px',
    float: 'left',
    margin: '-28 0 20 -40',
  },
  bar: {
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '20px',
    position: 'relative',
    margin: '40 -506 0 605',
    float: 'left',
    display: 'flex',
    color: '#d6d6d6',
  },
  search: {
    position: 'relative',
    top: '33px',
    left: '600px',
    background: 'src={wtLogo}',
    backgroundColor: '#fff',
    border: '1px solid #b4b4b4',
    color: '#7f7f7f',
    padding: '0 0 0 0',
    textAlign: 'center',
    textDecoration: 'none',
    display: 'inline-block',
    margin: '4px -80px',
    cursor: 'pointer',
    height: '35px',
    width: '35px',
    borderRadius: '50%',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '13px',
    lineHeight: '31px',
    verticalAlign: 'top',

  },
  lupaBtn: {
    width: '25px',
    height: '25px',
    float: 'left',
    margin: '5 0 20 7',
  },
  creators: {
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '18px',
    position: 'relative',
    margin: '43 -595 0 465',
    float: 'left',
    display: 'flex',
    color: '#000',
    letterSpacing: '-.2px',
  },
  bookL: {
    width: '27px',
    height: '25px',
    float: 'rigth',
    margin: '0 130 20 -150',
  },
}

export default Navbar
