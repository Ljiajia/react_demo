import React from 'react'; 
import './App.css'; 
import Example from "./child"
import JsonView from "./components/ReactJsonView"
import SyntheticEvent from "./components/SyntheticEvent"
import Composition from "./components/ComponsitionEvent"
import From from "./components/From"
import Fancy from "./components/Calculator"
import Context from './components/Context'
import Buttons from "./components/usestate"
import Emits from "./components/emit"
import Demo from "./components/demo"
class App extends React.Component{  
  constructor(){
    super()
    this.state={
      name:'雷佳'
    }
  }
  render(){
    return (
      <div className="App">
        <Example />
        <br />
        <JsonView />
        <br />
        <SyntheticEvent />
        <br />
        <Composition />
        <br />
        <From />
        <br />
        <Fancy />
        <br />
        <Context />
        <Buttons /> */}
        <div onClick={()=>this.setNames()}>
          换名字
          <Emits name={this.state.name}/>
        </div>
     {/* <Demo /> */}
      </div>
    );
  }
  setNames=()=>{
    let name=this.state.name==='雷佳'?"佳佳":'雷佳'
    this.setState({
      name
    })
  }
} 

export default App;
