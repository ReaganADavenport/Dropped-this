import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './home.css';

import Mandarin from '../Card/card_1/card_1'
import Bamboo_left from '../../Images/Bamboo_left.png'
import Bamboo_center from '../../Images/Bamboo_Center.png'
import Bamboo_right from '../../Images/Bamboo_right.png'

const Home = () => {
    return(
        <div className="Home">
            <img className="swing_b1" src={Bamboo_left}/>
            <img className="swing_b2" src={Bamboo_center}/>
            <img className="swing_b3" src={Bamboo_right}/>
        </div>
    )
}

export default Home;