import React, {Component} from 'react';
import './App.css';
import SimpleAppBar from "./Header/header";

class App extends Component {
  render() {
    return (
      <div className="App">
        <SimpleAppBar/>
      </div>
    );
  }
}

export default App;
