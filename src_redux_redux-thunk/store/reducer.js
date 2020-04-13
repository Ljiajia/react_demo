const defaultState={
    value:"全部",
    value2:"状态",
    list:[],
    allList:[]
}
const reducer=(state=defaultState,action)=>{
    let newState=JSON.parse(JSON.stringify(defaultState)); 
    switch(true){ 
        case action.type==="SET":
        newState.allList=action.data; 
        newState.value2=action.value;  
        newState.list=newState.allList.filter(item=>item.type.includes(action.value))    
        return newState;
        case action.type==="SET1"&& action.value!=="全部":
        newState.allList=action.data; 
        newState.value=action.value;  
        newState.list=newState.allList.filter(item=>item.title.includes(action.value))    
        return newState;
        case action.type==="SET1"&& action.value==="全部": 
        newState.list=action.data;  
        return newState;
        default:
        return newState
    }
}
export default reducer;