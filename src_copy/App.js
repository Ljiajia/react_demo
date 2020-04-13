import React, { Component } from 'react';
import './App.css';

import Clipboard from './component/react_copy_to_clipboard';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header"> 
         <Clipboard />
        </header>
      </div>
    );
  }
}

export default App;
