import { Dataapi, headerapipost } from "./api"
import { PRODUCT_GET, PRODUCT_POST } from "./types"


export const getdatas=(dispatch)=>{

 let da=Dataapi().then(e=>dispatch({type:PRODUCT_GET,payload:e},console.log(e)))
 .catch(e=>console.log(e))
// console.log(da)
}

export const postheader=(dispatch,header)=>{

  let data=  headerapipost(header)
  dispatch({type:PRODUCT_POST,payload:data})
}