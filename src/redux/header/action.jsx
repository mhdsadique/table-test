import { Dataapi, headerapipost } from "./api"
import { PRODUCT_GET, PRODUCT_POST } from "./types"


export const getdatas=(dispatch)=>{

 Dataapi().then(e=>dispatch({type:PRODUCT_GET,payload:e},console.log(e)))
 .catch(e=>console.log(e))
// console.log(da)
}

export const postheader=async(dispatch,header)=>{
try{

  let data=await  headerapipost(header)
  dispatch({type:PRODUCT_POST,payload:data})
}catch(e){
  console.log(e)
}
}