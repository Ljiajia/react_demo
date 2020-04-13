import React, { Component } from 'react';
import axios from "axios"; 
import {connect} from "react-redux";
class List extends Component {  
    render() {
        return (
            <div>
                <h3>我发起的</h3> 
                <select value={this.props.value} onChange={(e)=>this.props.change(e)}>
                    <option value="全部">全部</option> 
                    <option value="外出开会">外出开会</option>
                    <option value="公司开会">公司开会</option>
                    <option value="外出培训">外出培训</option>
                    <option value="打扫卫生">打扫卫生</option>
                    <option value="旅游">旅游</option>
                    <option value="聚餐">聚餐</option>  
                </select>    
                <select value={this.props.value2} onChange={(e)=>this.props.change2(e)}>
                    <option value="请选择类型">请选择类型</option> 
                    <option value="业务科审核">业务科审核</option>
                    <option value="局长签审">局长签审</option>
                    <option value="待办">待办</option>
                    <option value="归档">归档</option>
                    <option value="待审核">待审核</option>
                    <option value="局长驳回">局长驳回</option> 
                </select> 
                <ol>
                    {this.props.list.map(item=>(
                        <li key={item.id}>要去：{item.title}-------类型：{item.type}</li>
                    ))}
                </ol>
            </div>
        );
    } 
}
const setState=state=>{
    return { 
        value:state.value,
        list:state.list,
        value2:state.value2
    } 
};
const setdispatch=dispatch=>({  
    change(e){ 
        let value=e.target.value;
        axios.get("./data.json").then(res=>{ 
            dispatch({
                type:"SET1",
                value,
                data:res.data
            })
        }) 
    },
    change2(e){ 
        let value=e.target.value;
        axios.get("./data.json").then(res=>{ 
            dispatch({
                type:"SET",
                value,
                data:res.data
            })
        }) 
    }
    
})

export default connect(setState,setdispatch)(List) ;