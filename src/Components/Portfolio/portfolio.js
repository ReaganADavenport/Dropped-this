import React,{Component} from 'react';
import './portfolio.css';

import Mandarin from "././Card/card_1/card_1";
import Drc from './Card/card_2/card_2';


const Portfolio = () => {
    return(
        <div className="Portfolio">
            <div className="Projects">
                <Mandarin></Mandarin>
                <Drc></Drc>
            </div>

        </div>
    )
}

export default Portfolio;