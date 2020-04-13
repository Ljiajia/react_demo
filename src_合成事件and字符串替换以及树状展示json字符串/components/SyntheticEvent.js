import React, { Component } from 'react'
class SyntheticEvent extends Component {
    constructor(props) {
        super(props); 
        this.state = { 
            counter: 0,
        }; 
    } 
    render() { 
        return (
            <div>
                <p onCopy={this.handlerCopy}>Copy me!</p>
                <p>Copy count: {this.state.counter}</p>
                <input onCut={this.handlerCut} type='text' value='cup'/>
                <p>Cut count: {this.state.counter}</p>
                <input onPaste={this.handlerPaste} type='text' value='Paste'/>
                <p>Paste count: {this.state.counter}</p>
            </div>
        );
    }
    handlerCopy=(e)=> { 
        e.preventDefault(); // must prevent the current event 
        this.setState(prevState => ({
          counter: prevState.counter + 1
        })); 
        alert('Don\'t copy it!');
    }
    handlerCut=(e)=> { 
        e.preventDefault(); // must prevent the current event 
        this.setState(prevState => ({
          counter: prevState.counter + 1
        })); 
        alert('Don\'t Cut it!');
    }
    handlerPaste=(e)=> { 
        // e.preventDefault(); // must prevent the current event 
        this.setState(prevState => ({
          counter: prevState.counter + 1
        })); 
        console.log(e,'e////')
        // alert('Don\'t Paste it!');
    }
}
 
export default SyntheticEvent;