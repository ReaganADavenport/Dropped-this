import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';

import "./card_4.css";

class Bear_Labs extends Component {
    constructor() {
        super();
          this.state = {
          isFlipped: false
        };
        this.handleClick = this.handleClick.bind(this);
      }
      handleClick(e) {
        e.preventDefault();
        this.setState(prevState => ({ isFlipped: !prevState.isFlipped }));
      }

      render() {
        return (
          <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div className="Front">
              <h3>Bear Labs Tutoring:</h3>
                Website for an Orton-Gillingham tutor
              <button className="cardButton" onClick={this.handleClick}>Flip Me</button>
            </div>
    
            <div className="Back">

              <a href="/">
                <button className="cardButton">Learn More</button>
              </a>
      
              <button className="cardButton" onClick={this.handleClick}>Flip Me</button>
            </div>
          </ReactCardFlip>
        )
    } 
}

export default Bear_Labs;
