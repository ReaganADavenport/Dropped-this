import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';

import "./card_2.css";

class Drc extends Component {
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
              <h3>Diakonia Retreat Center</h3>
              A beautiful website with ecommerce
              <button className="cardButton" onClick={this.handleClick}>Flip Me</button>
            </div>
    
            <div className="Back">

              <a href="/">
                <button>Learn More</button>
              </a>
      
              <button className="cardButton" onClick={this.handleClick}>Flip Me</button>
            </div>
          </ReactCardFlip>
        )
    } 
}

export default Drc;