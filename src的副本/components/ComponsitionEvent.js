import React, { Component } from 'react'
class Composition extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isCompositionEnd:false
          }
    } 
    render() { 
        return (
            <input ref="inputTest" type="text" placeholder="测试" 
              onCompositionStart={this.handlingComposition} 
              onCompositionUpdate={this.handlingComposition} 
              onCompositionEnd={this.handleComposition} 
              onChange={this.inputValue}/> 
        );
    }
    handlingComposition=()=>{
        this.setState({
            isCompositionEnd :false
        }) 
    }
    handleComposition=()=>{
        this.setState({
            isCompositionEnd:true
        }) 
        this.inputValue()
    }
    inputValue=(e)=>{
        if(this.isCompositionEnd){
            this.setState({
                val:e.target.value
            },()=>{
                console.log(this.state.val,'val.....')
            })
        }
    }
}
 
export default Composition;