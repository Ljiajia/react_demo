import React, { Component } from 'react';
import {HashRouter,BrowserRouter ,Switch,Route,Redirect} from "react-router-dom";
import List from "./List";
import Bianji from "./bianji";
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">  
         <BrowserRouter >
           <Switch>
             <Redirect exact from="/" to="/home"></Redirect>
           <Route path="/home" component={List}></Route>
           <Route path="/bianji" component={Bianji}></Route>
           </Switch>
         </BrowserRouter >
      </div>
    );
  }
}

export default App;
