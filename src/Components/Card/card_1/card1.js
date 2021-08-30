import React, {Component} from 'react';
import ReactCardFlip from 'react-card-flip';
// import logo from "../../../images/wu.png"

import "./card1.css";

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

    render(){
    return(
        <ReactCardFlip isFlipped={this.state.isFlipped} flipDirection="horizontal">
            <div className="flip-mcard-front" onClick={this.handleClick}>
                    {/* <img src={logo}/> */}
                    <h4>Learn Mandarin</h4>
                    <p>Learn how to read and write in Mandarin Chinese</p>
                </div>

                <div className="flip-mcard-back" onClick={this.handleClick}>
                    { /* <img src={logo}/> */}
                    <p>React, Express, HTML, CSS, JavaScipt, PosgreSQL</p>
                    
                    <p><a href="https://github.com/ReaganADavenport/learn-mandarin-client">GitHub - Frontend</a> </p>
                    <p><a href="https://github.com/ReaganADavenport/learn-mandarin-api">GitHub Backend</a> </p>
                </div>
        </ReactCardFlip>
    )
}
}


export default Mandarin; 