//p5.js
import P5Wrapper from 'react-p5-wrapper';
// import Sketch from "p5";
import sketch from './sketches/sketch';

import React,{Fragment} from 'react';
import './App.css';
import NavBar from './components/layout/Navbar';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import Home from './components/pages/Home';
import About from './components/pages/About';
import Institution from './components/pages/Institution';
import Projects from './components/pages/Projects';
const  App = ()=> {
  return (
    <Router>
      <NavBar/>
      <Route exact path='/' component={Home}/>
      <Route exact path='/about' component={About}/>
      <Route exact path='/institution' component={Institution}/>
      <Route exact path='/projects' component={Projects}/>

{/* idk the fuck bellow */}
      {/* <P5Wrapper sketch={sketch}> */}
      {/* </P5Wrapper> */}
      
    </Router>
  );
}
export default App;
