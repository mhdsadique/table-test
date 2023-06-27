import { DETAILE_GET, DETAILE_POST,  } from "./types"


const inisdata={
    datas:[]
}
export const detailereducer=(state=inisdata,{type,payload})=>{

     switch(type){
        case DETAILE_GET:{
            return{
                ...state,
                datas:payload
            }
        }
        case DETAILE_POST:{
            return{
                ...state,
            }

        }
        default:{
           return state}
     }
}