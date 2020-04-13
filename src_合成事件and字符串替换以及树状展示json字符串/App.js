import React from 'react'; 
import './App.css'; 
import SyntheticEvent from "./components/SyntheticEvent"
import JsonView from "./components/ReactJsonView" 
class App extends React.Component{  
  render(){
    return (
      <div className="App"> 
        <SyntheticEvent /> 
        <JsonView /> 
      </div>
    );
  } 
} 

export default App;
