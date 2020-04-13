import React, { Component } from 'react';
import {connect} from "react-redux";
import {Link} from "react-router-dom";
class List extends Component { 
    render() {
        return (
            <div> 
                <h4>快速添加</h4>
                <input value={this.props.value} onChange={(e)=>this.props.getvalue(e)} type="text" />
                <button onClick={()=>this.props.setType("shou",this.props.value)}>收入</button>
                <button onClick={()=>this.props.setType("zhichu",this.props.value)}>支出</button>
                <button onClick={()=>this.props.setType("quxiao")}>取消</button>
                <br />
                <Link to="/bianji">
                <button>+</button> 
                </Link>   
                {this.props.list.map((item,index)=>(
                    <li key={index}>
                    <span style={{display:item.type?"inline-block":"none"}}>类型：{item.type}-----</span> 
                    <span style={{display:item.moneys?"inline-block":"none"}}>金额：{item.moneys}-----</span>
                     <span style={{display:item.names?"inline-block":"none"}}>
                     姓名：{item.names}-----</span>
                     <span style={{display:item.typesName?"inline-block":"none"}}>
                     消费方式：{item.typesName}-----</span><span style={{display:item.eventsName?"inline-block":"none"}}>
                     消费类型：{item.eventsName}-----</span> 
                        <button onClick={()=>this.props.remove(index)}>删除</button>
                    </li>
                ))}
            </div>
        );
    }
}
const setStateProps=state=>(state);
const setDispatchProps=dispatch=>({
    remove(i){ 
        dispatch({
            type:'REMOVE',
            index:i
        })
    },
    getvalue(e){
        let value=e.target.value;
        dispatch({
            type:'SETVALUE',
            value
        })
    },
    setType(type,value){   
        if(type==="shou"){
            dispatch({
                type:'SHOU',
                methods:"收入",
                value 
            })
        }else if(type==="zhichu"){
            dispatch({
                type:'ZHICHU',
                methods:"支出",
                value 
            })
        }else if(type==="quxiao"){
            dispatch({
                type:'QUXIAO', 
                value:''
            })
        }
    }
})
export default connect(setStateProps,setDispatchProps)(List);