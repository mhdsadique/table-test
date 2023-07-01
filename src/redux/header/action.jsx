import { Dataapi, headerapipost } from "./api"
import { PRODUCT_GET, PRODUCT_POST } from "./types"


export const postheader=async(dispatch,header)=>{
try{
  let data=await  headerapipost(header)
  dispatch({type:PRODUCT_POST,payload:data})
}catch(e){
  console.log(e)
}
}