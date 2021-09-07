import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './home.css';

import Mandarin from '../Card/card_1/card_1'
import Bamboo from '../../Images/Bamboo.png'

const Home = () => {
    return(
        <div className="Home">
            <img src={Bamboo}/>
            <div className="Content">
                <div className="MyWork">
                    <div className="Works">
                        
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home;