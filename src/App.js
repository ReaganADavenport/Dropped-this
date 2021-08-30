import React from 'react'
import {BrowserRouter as Router, Route} from 'react-router-dom';

// Import components here
import Header from './Components/Header/header';
import Footer from './Components/Footer/footer';

import './App.css';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Footer></Footer>
      </Router>
    </div>
  );
}

export default App;
