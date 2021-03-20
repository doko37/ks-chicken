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
      <div className="App">
        <FullContainer />
      </div>
      <div className="BarBottom">
        <div className="BottomDescription">
          <p>KS CHICKEN</p>
          <p>33b Triton Drive, Rosedale, Auckland 0632</p>
          <p>09-476-1952</p>
        </div>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
