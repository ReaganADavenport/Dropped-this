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
              React front-end and a postgres back-end application to learn Mandarin Chinese
              <button onClick={this.handleClick}>Click Me</button>
            </div>
    
            <div className="Back">
                <a href="https://github.com/ReaganADavenport/learn-mandarin-client"><h4>Front-end Repo</h4></a>
                <a href="https://github.com/ReaganADavenport/learn-mandarin-api"><h4>Back-end Repo</h4></a>
              <button onClick={this.handleClick}>Click Me</button>
            </div>
          </ReactCardFlip>
        )
    } 
}

export default Mandarin;
