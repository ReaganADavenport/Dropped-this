import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';

import "./card_1.css";

class Mandarin extends Component {
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
              <h3>Learn Mandarin:</h3>
              An application to learn Mandarin Chinese
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

export default Mandarin;
