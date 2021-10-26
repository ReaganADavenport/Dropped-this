import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import components here
import Header from './Components/Header/header';
import Home from './Components/Home/home';
import Portfolio from './Components/Portfolio/portfolio';
import DRC_Info from './Components/Portfolio/Info_Pages/info_2';
import Footer from './Components/Footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Route path='/' exact component={Home}/>
        <Route path='/portfolio' exact component={Portfolio}/>
        <Route path='/info/DRC' exact component={DRC_Info}/>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
