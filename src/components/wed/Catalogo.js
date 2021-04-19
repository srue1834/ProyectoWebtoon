/* eslint-disable jsx-a11y/alt-text */
/* eslint-disable no-use-before-define */
/* eslint-disable max-len */
import React, { Component } from 'react'
import card1 from './images/trueBeauty.jpeg'
import card2 from './images/theRemarried.jpeg'
import card3 from './images/ageMatters.jpeg'
import card4 from './images/omniscientReader.jpeg'
import card5 from './images/loveMeKnot.jpeg'
import card6 from './images/phase.jpeg'
import card7 from './images/myGiant.jpeg'
import card8 from './images/swimmingLessons.jpeg'
import card9 from './images/rebirth.jpeg'
import TBLikes from './images/TBLikes.png'
import RELikes from './images/RELikes.png'
import AMLikes from './images/AMLikes.png'
import ORLikes from './images/ORLikes.png'
import LKLikes from './images/LKLikes.png'
import PLikes from './images/PLikes.png'
import MGLikes from './images/MGLikes.png'
import SLikes from './images/SLikes.png'
import RLikes from './images/RLikes.png'
import add from './images/add.png'

class Catalogo extends Component {
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
          <div className="trueBeauty">
            <img src={card1} style={styles.card} />
            <p style={styles.textInfo}>True Beauty</p>
            <img src={TBLikes} style={styles.likes} />
            <p style={styles.romance}>Romance</p>
          </div>
          <div className="theRemarriedEmpress">
            <img src={card2} style={styles.card2} />
            <p style={styles.textInfo2}>The Remarried Empress</p>
            <p style={styles.summary2}>
              Navier Ellie Trovi was an empress perfect in
            </p>
            <p style={styles.summary2}>
              every way -- intelligent, courageous, and
            </p>
            <p style={styles.summary2}>
              socially adept. She was kind to her subjects...
            </p>
            <img src={RELikes} style={styles.RElikes} />
            <p style={styles.fantasy}>Fantasy</p>
          </div>
          <div className="ageMatters">
            <img src={card3} style={styles.card} />
            <p style={styles.textInfo}>Age Matters</p>
            <img src={AMLikes} style={styles.likes} />
            <p style={styles.romance}>Romance</p>
          </div>
          <div className="Omniscient">
            <img src={card4} style={styles.card} />
            <p style={styles.textInfo}>Omniscient Reader</p>
            <img src={ORLikes} style={styles.likes} />
            <p style={styles.action}>Action</p>
          </div>
        </div>

        <div div className="view_port2" style={styles.viewport2}>
          <div className="LoveMeKnot">
            <img src={card5} style={styles.card} />
            <p style={styles.textInfo}>Love Me Knot</p>
            <img src={LKLikes} style={styles.likes} />
            <p style={styles.romance}>Romance</p>
          </div>
          <div className="Phase">
            <img src={card6} style={styles.card} />
            <p style={styles.textInfo}>Phase</p>
            <img src={PLikes} style={styles.likes} />
            <p style={styles.romance}>Romance</p>
          </div>
          <div className="myGiant">
            <img src={card7} style={styles.card} />
            <p style={styles.textInfo}>My Giant Nerd</p>
            <p style={styles.textInfo4}>Boyfriend</p>
            <img src={MGLikes} style={styles.likes3} />
            <p style={styles.slice}>Slice of life</p>
          </div>
          <div className="swimmingLessons">
            <img src={card8} style={styles.card} />
            <p style={styles.textInfo}>Swimming Lessons</p>
            <p style={styles.textInfo4}>for a Mermaid</p>
            <img src={SLikes} style={styles.likes} />
            <p style={styles.romance2}>Romance</p>
          </div>
          <div className="rebirth">
            <img src={card9} style={styles.card} />
            <p style={styles.textInfo}>Rebirth</p>
            <img src={RLikes} style={styles.likes} />
            <p style={styles.scifi}>Sci-fi</p>
          </div>
          <img src={add} style={styles.add1} />
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
  viewport2: {
    display: 'flex',
    height: '450px',
    margin: '-200 0 0 175',
    flexDirection: 'row',
    width: 'relative',
  },
  add1: {
    border: '0pt none',
    display: 'inline-block',
    width: '810px',
    height: '101px',
    margin: '262 0 0 -1050',
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
  textInfo: {
    position: 'relative',
    fontSize: '17px',
    lineHeight: '18px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '-210 0 0 20',
    padding: '0 0 0 0',
    display: 'flex',
  },
  romance: {
    position: 'relative',
    fontSize: '14px',
    lineHeight: '0px',
    color: '#FE3E84',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '163 0 0 16',
    padding: '0 0 0 0',
    display: 'flex',

  },
  fantasy: {
    position: 'relative',
    fontSize: '14px',
    lineHeight: '0px',
    color: '#0069FA',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '100 0 0 16',
    padding: '0 0 0 0',
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
  romance2: {
    position: 'relative',
    fontSize: '14px',
    lineHeight: '0px',
    color: '#FE3E84',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '142 0 0 10',
    padding: '0 0 0 0',
    display: 'flex',
  },
  slice: {
    position: 'relative',
    fontSize: '14px',
    lineHeight: '0px',
    color: '#9AB711',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '142 0 0 10',
    padding: '0 0 0 0',
    display: 'flex',
  },
  scifi: {
    position: 'relative',
    fontSize: '14px',
    lineHeight: '0px',
    color: '#2d4464',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    margin: '165 0 0 10',
    padding: '0 0 0 0',
    display: 'flex',
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
  textInfo4: {
    position: 'relative',
    fontSize: '17px',
    lineHeight: '18px',
    fontFamily: 'hind_m,simhei,verdana,Helvetica,sans-serif',
    display: 'flex',
    margin: '2 0 0 20',
    padding: '0 0 0 0',
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
  imagen: {
    position: 'relative',
    margin: '3 0 0 20',
    width: '210px',
    height: '210px',
    float: 'left',
  },
  likes: {
    position: 'relative',
    margin: '3 0 0 13',
    width: '75px',
    height: '20px',
    float: 'left',
  },
  RElikes: {
    position: 'relative',
    margin: '-5 0 0 13',
    width: '70px',
    height: '65px',
    float: 'left',
  },
  likes3: {
    position: 'relative',
    margin: '6 0 0 6',
    width: '85px',
    height: '65px',
    float: 'left',
  },
}
export default Catalogo
