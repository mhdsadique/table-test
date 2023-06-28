import { Dataapi, Dataapipost } from "./api"
import { DETAILE_GET, DETAILE_POST } from "./types"


export const getdetailes=(dispatch)=>{

Dataapi().then(e=>dispatch({type:DETAILE_GET,payload:e},console.log(e)))
 .catch(e=>console.log(e))
// console.log(da)
}

export const postdetailes=(detailes)=>async(dispatch)=>{
    try{
        let dat=await  Dataapipost(detailes)
        dispatch({type:DETAILE_POST,payload:dat})
          console.log(dat)
    }catch(da){

        console.log(da)
    }
    }