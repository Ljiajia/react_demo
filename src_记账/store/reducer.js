const defaultState={
    events:[{
        title:"吃饭",
        id:0
    },{
        title:"上礼",
        id:1
    },{
        title:"结婚",
        id:2
    },{
        title:"生孩子",
        id:3
    }],
    types:[{
        title:"银行卡",
        id:0
    },{
        title:"微信",
        id:1
    },{
        title:"QQ",
        id:2
    },{
        title:"支付宝",
        id:3
    }]
    ,money:'',
    value:"",  
    names:'',
    eventindex:0,
    typeindex:0, 
    eventsName:'',
    typesName:"",
    list:[]
}
const reducer=(state=defaultState,action)=>{
    switch(action.type){
        case "MONEY": 
        return {...state,money:action.value};
        case "NAMES": 
        return {...state,names:action.value};
        case "EVENTS":
        return {...state,eventsName:action.value,eventindex:action.index};
        case "TYPES":
        return {...state,typesName:action.value,typeindex:action.index};
        case "IN":   
        state.list.push({type:action.method,eventsName:action.eventsName,names:action.names,money:action.money,typesName:action.typesName}) 
        return {...state,list:[...state.list]}; 
        case "out":   
        state.list.push({type:action.method,eventsName:action.eventsName,names:action.names,money:action.money,typesName:action.typesName}) 
        return {...state,list:[...state.list]}; 
        case 'REMOVE':
        state.list.splice(action.index,1); 
        return {...state,list:[...state.list]};
        case "SETVALUE":
        return {...state,value:action.value};
        case "SHOU": 
        return {...state,list:[...state.list,{moneys:action.value,eventsName:action.methods}]}; 
        case "ZHICHU":
        return {...state,list:[...state.list,{moneys:action.value,eventsName:action.methods}]};
        case "QUXIAO":
        return {...state,value:action.value};
        default:
        return state;
    }
}
export default reducer;