/* eslint-disable react/button-has-type */
/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
import React, { Component } from 'react'
import card1 from './images/dearX.jpeg'
import card2 from './images/delusion.jpeg'
import card4 from './images/dungeons&artifacts.jpeg'
import card3 from './images/returnPlayer.jpeg'
// import card5 from './images/seasonsBlossom.jpeg'
// import card6 from './images/theHipGuy.jpeg'
// import card7 from './images/theSaviorTime.jpeg'
// import card8 from './images/whenTheDay.jpeg'
import DXLikes from './images/Likes/DXLikes.png'
import DLikes from './images/Likes/DLikes.png'
import RPLikes from './images/Likes/RPLikes.png'
import DALikes from './images/Likes/DALikes.png'
// import SLikes from './images/Likes/SLikes.png'
// import HGLikes from './images/Likes/HGLikes.png'
// import STLikes from './images/Likes/STLikes.png'
// import WDLikes from './images/Likes/WDLikes.png'

import left from './buttons/left.png'
import right from './buttons/right.png'

class New extends Component {
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
          <p style={styles.title}>New to WEBTOON</p>
          <div className="carousel" style={styles.carousel_viewport}>
            <button type="button" style={styles.boton1}>
              <img src={left} style={styles.botones} />
            </button>
            <div className="slide1" style={styles.slide}>

              <div className="dearX">
                <img src={card1} style={styles.card} />
                <p style={styles.textInfo}>Dear X</p>
                <img src={DXLikes} style={styles.likes} />
                <p style={styles.thriller}>Thriller</p>
              </div>
              <div className="delusion">
                <img src={card2} style={styles.card} />
                <p style={styles.textInfo}>Delusion</p>
                <img src={DLikes} style={styles.likes} />
                <p style={styles.thriller}>Thriller</p>
              </div>
              <div className="return">
                <img src={card3} style={styles.card} />
                <p style={styles.textInfo}>Return Player</p>
                <img src={RPLikes} style={styles.likes} />
                <p style={styles.action}>Action</p>
              </div>
              <div className="dungeons">
                <img src={card4} style={styles.card2} />
                <p style={styles.textInfo2}>Dungeons and Artifacts</p>
                <p style={styles.summary2}>
                  A dungeon-guiding gig goes sideways for
                </p>
                <p style={styles.summary2}>
                  explorer Stetch Atelier when the prince who
                </p>
                <p style={styles.summary2}>
                  hired him tricks him into activating a fatal c...
                </p>
                <img src={DALikes} style={styles.likes2} />
                <p style={styles.action2}>Action</p>
              </div>
            </div>

            <button type="button" style={styles.boton2}>
              <img src={right} style={styles.botones} />
            </button>
          </div>
        </div>
      </div>
    )
  }
}

const styles = {
  viewport: {
    display: 'flex',
    position: 'relative',
    height: '404px',
    margin: '-65 -10 0 -10',
    backgroundColor: '#f4f4f4',
    flexDirection: 'row',
    width: '1600px',
    border: '1px solid #e5e5e5',
  },
  title: {
    position: 'relative',
    fontSize: '22px',
    lineHeight: '24px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '40 0 0 700',
    padding: '0 0 0 0',
    display: 'flex',
  },
  card: {
    display: 'block',
    position: 'relative',
    height: '234px',
    margin: '0 0 0 0',
    padding: '0 18 0 0',
    width: '234px',
  },
  card2: {
    display: 'block',
    position: 'relative',
    height: '234px',
    margin: '0 18 0 0',
    padding: '0 0 0 0',
    width: '485px',
  },
  thriller: {
    position: 'relative',
    fontSize: '14px',
    lineHeight: '0px',
    color: '#C00354',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '163 0 0 16',
    padding: '0 0 0 0',
    // left: '-715',
    display: 'flex',
  },
  action: {
    position: 'relative',
    fontSize: '14px',
    lineHeight: '0px',
    color: '#0069FA',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '163 0 0 16',
    padding: '0 0 0 0',
    display: 'flex',
  },
  action2: {
    position: 'relative',
    fontSize: '14px',
    lineHeight: '0px',
    color: '#0069FA',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '100 0 0 16',
    padding: '0 0 0 0',
    display: 'flex',
  },
  likes: {
    position: 'relative',
    margin: '8 0 0 15',
    width: '100px',
    height: '68px',
    float: 'left',
    // left: '-715',
  },
  likes2: {
    position: 'relative',
    margin: '-5 0 0 13',
    width: '90px',
    height: '65px',
    float: 'left',
  },
  textInfo: {
    position: 'relative',
    fontSize: '18px',
    lineHeight: '18px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '-215 0 0 23',
    padding: '0 0 0 0',
    display: 'flex',
    // left: '-715',
  },
  carousel_viewport: {
    display: 'flex',
    position: 'relative',
    height: '234px',
    margin: '90 0 0 -790',
    padding: '0 0 0 73',
    backgroundColor: 'transparent',
    width: '1300px',
    flexDirection: 'row',
  },
  slide: {
    display: 'flex',
    position: 'relative',
    height: '234px',
    margin: '0 0 0 0',
    padding: '0 0 0 0',
    backgroundColor: 'transparent',
    width: '1240px',
    flexDirection: 'row',
  },
  textInfo2: {
    position: 'relative',
    fontSize: '19px',
    lineHeight: '19px',
    color: 'white',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '-210 0 0 20',
    padding: '0 0 0 0',
    display: 'flex',
  },
  summary2: {
    position: 'relative',
    fontSize: '13px',
    lineHeight: '0px',
    color: 'white',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: ' 20 0 20 20',
    padding: '0 0 0 0',
    display: 'flex',
  },
  boton1: {
    position: 'relative',
    border: 'none',
    backgroundColor: 'transparent',
    display: 'inline-block',
    height: '45px',
    width: '45px',
    cursor: 'pointer',
    margin: '112 0 0 -45',
    right: '20',
    outline: 'none',
  },
  boton2: {
    position: 'relative',
    border: 'none',
    backgroundColor: 'transparent',
    display: 'inline-block',
    height: '45px',
    width: '45px',
    cursor: 'pointer',
    margin: '112 0 0 0',
    textDecoration: 'none',
    outline: 'none',
  },
  botones: {
    width: '45px',
    height: '45px',
    float: 'left',
  },
}

export default New
