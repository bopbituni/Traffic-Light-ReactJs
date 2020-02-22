import React, {Component} from 'react';
import './App.css';

import TrafficLight from './components/TrafficLight'

class App extends Component {
  render() {
    return (
        <div className="App">
         <TrafficLight />
        </div>
    );
  }
}

export default App;
