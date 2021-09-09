import React,{Component} from 'react';
import { Link } from 'react-router-dom';
import './home.css';


import Bamboo_left from '../../Images/Bamboo_left.png'
import Bamboo_center from '../../Images/Bamboo_Center.png'
import Bamboo_right from '../../Images/Bamboo_right.png'

const Home = () => {
    return(
        <div className="Home">
            <div className="Bamboo_Grove">
                <img className="swing_b1" src={Bamboo_left}/>
                <img className="swing_b2" src={Bamboo_center}/>
                <img className="swing_b3" src={Bamboo_right}/>
            </div>

            <div className="text">
                <h2>Hi I'm Reagan!</h2>
                <h4>I build beautiful websites that work on any device.</h4>
                <h4>Check out some of my work here </h4>
                <Link to='/portfolio'><h4>>></h4></Link>
            </div>
            

        </div>
    )
}

export default Home;