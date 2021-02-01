import React, { Component } from 'react';
import { BrowserRouter } from 'react-router-dom';
import './App.css';
import FullContainer from './Components/Containers/FullContainer';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="App">
          <FullContainer />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
