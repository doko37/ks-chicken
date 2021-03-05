import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FullContainer from './Components/Containers/FullContainer';
import headerlogo from './headerlogo.png';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <link rel="icon" href ={headerlogo}/>
      <div className="BarTop"/>
      <div className="BarBottom"/>
      <div className="App">
        <FullContainer />
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
