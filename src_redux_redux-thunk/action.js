import axios from "axios";
let value='';
export const Changes=(e)=>dispatch=>{
    console.log(e)
    //   value=e.target.value;
        axios.get("./data.json").then(res=>{ 
            dispatch({
                type:"SET1",
                value,
                data:res.data
            })
        }) }
 