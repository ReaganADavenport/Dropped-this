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
              This is the front of the card.
              <button onClick={this.handleClick}>Click Me</button>
            </div>
    
            <div className="Back">
              This is the back of the card.
              <button onClick={this.handleClick}>Click Me</button>
            </div>
          </ReactCardFlip>
        )
    } 
}

export default Mandarin;
