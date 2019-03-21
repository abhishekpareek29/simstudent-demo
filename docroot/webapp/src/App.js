import React, { Component } from 'react';
import './App.css';
import MakeEntry from "./MakeEntry.js";

const API = 'http://api.quantworks.lc:81';
const endpoint = '/api/v1/store-details';

class App extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>SimStudent</h1>
        </header>
        <MakeEntry API={API} endpoint={endpoint}/>
      </div>
    );
  }

}

export default App;
