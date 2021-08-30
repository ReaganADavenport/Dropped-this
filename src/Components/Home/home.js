import React,{Component} from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import './home.css';

import Mandarin from "../Card/Card_1/card1";

const Home = () => {
    return(
        <div className="Home">

            <div className="Content">
                <div className="MyWork">
                    <h4>Projects</h4>
                    <div className="Works">
                        <Mandarin/>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Home;