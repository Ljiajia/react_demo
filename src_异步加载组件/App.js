import React from 'react'; 
import './App.css'; 
import asyncComponent from "./components/asyncComponent"
const Buttons = asyncComponent(() => import("./components/button"));
class App extends React.Component{   
  render(){
    return (
      <div className="App">
        <br />
        <br /> 
        <br /> 
        <Buttons name="张三"/>
      </div>
    );
  }
} 

export default App
