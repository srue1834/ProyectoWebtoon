/* eslint-disable no-use-before-define */
import React, { Component } from 'react'

class Daysbar extends Component {
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
          <p style={styles.daysNM}>MON</p>
          <p style={styles.daysNM}>TUE</p>
          <p style={styles.daysNM}>WED</p>
          <p style={styles.daysNM}>THU</p>
          <p style={styles.daysNM}>FRI</p>
          <p style={styles.daysNM}>SAT</p>
          <p style={styles.daysNM}>SUN</p>
          <p style={styles.more}>MORE</p>
          <small style={styles.bar}>|</small>
        </div>
      </div>
    )
  }
}

const styles = {
  viewport: {
    display: 'flex',
    position: 'relative',
    height: '67px',
    margin: '-11 -10 0 -10',
    backgroundColor: '#fff',
    flexDirection: 'row',
    width: '1600px',
    border: '1px solid #eaeaea',
  },
  daysNM: {
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '20px',
    position: 'relative',
    margin: '20 -272 0 370',
    left: '-80',
    float: 'left',
    display: 'flex',
  },
  daysvar: {
    display: 'flex',
    position: 'relative',
    height: '113px',
    margin: '40 -10 0 -10',
    width: 'relative',
    backgroundColor: '#000',
    flexDirection: 'row',
  },
  more: {
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '16px',
    position: 'relative',
    margin: '23 -506 0 340',
    float: 'left',
    display: 'flex',
    color: '#838383',
  },
  bar: {
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    fontSize: '18px',
    position: 'relative',
    margin: '23 -506 0 410',
    float: 'left',
    display: 'flex',
    color: '#d6d6d6',
  },
}

export default Daysbar
