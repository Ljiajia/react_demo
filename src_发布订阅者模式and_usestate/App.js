import React from 'react'; 
import './App.css';  
import Emits from "./components/emit"
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
        <br />
        <div onClick={()=>this.setNames()}>
          换名字
          <Emits name={this.state.name}/>
        </div>
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
