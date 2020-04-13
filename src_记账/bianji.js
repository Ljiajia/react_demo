import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
class Bianji extends Component { 
    render() {
        return (
            <div>  
                <Link to="/home"><button>Back</button></Link><span>编辑页面</span>
                <div>
                    金额：<input value={this.props.money} onChange={(e)=>this.props.change(e,'money')} type="text" placeholder="请输入金额"/><br />
                    姓名：<input value={this.props.names} onChange={(e)=>this.props.change(e,'names')} type="text" placeholder="请输入姓名"/><br />
                    事件：<span>{this.props.eventsName}</span>
                    <div>
                        {this.props.events ?this.props.events.map((item,index)=>(
                            <button style={{background:this.props.eventindex===index ? "pink" :"" }} onClick={()=>this.props.eventslist(index,item)} key={item.id}>{item.title}</button>
                        )):''}
                    </div>
                    付款方式：<span>{this.props.typesName}</span> 
                    <div>
                        {this.props.types?this.props.types.map((item,index)=>(
                            <button style={{background:this.props.typeindex===index ? "pink" :"" }} onClick={()=>this.props.typeslist(index,item)} key={item.id}>{item.title}</button>
                        )):''}
                    </div>
                    <button onClick={()=>this.props.submits("in")} style={{background:"lime"}}>收入</button>
                    <button onClick={()=>this.props.submits("out")} style={{background:"red"}}>支出</button> 
                </div>  
            </div>
        );
    }  
}

const setStateProps=state=>(state);
const setDispatchProps=dispatch=>({
    change(e,type){
        if(type==="money"){
            dispatch({
                type:"MONEY",
                value: e.target.value
            }) 
        }else if(type==="names"){
            dispatch({
                type:"NAMES",
                value: e.target.value
            }) 
        } 
    },
    eventslist(i,item){  
        dispatch({
            type:"EVENTS",
            index:i,
            value:item.title
        })
    },
    typeslist(i,item){  
        dispatch({
            type:"TYPES",
            index:i,
            value:item.title 
        }) 
    },
    submits(type){
        if(type==="in"){ 
            dispatch({
                type:"IN",
                method:"收入",
                eventsName:this.eventsName,
                names:this.names,
                money:this.money,
                typesName:this.typesName
            }) 
        }else if(type==="out"){ 
            dispatch({
                type:"IN",
                method:"支出",
                eventsName:this.eventsName,
                names:this.names,
                money:this.money,
                typesName:this.typesName
            }) 
        }
    }
})
export default connect(setStateProps,setDispatchProps)(Bianji);