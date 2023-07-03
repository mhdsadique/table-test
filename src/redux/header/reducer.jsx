import { PRODUCT_GET, PRODUCT_POST } from "./types"


const inisdata={
    datas:[]
}
export const datareducer=(state=inisdata,{type,payload})=>{
     switch(type){
        case PRODUCT_GET:{
            return{
                ...state,
                datas:payload
            } }
        case PRODUCT_POST:{
            return{
                ...state
            } }
        default:{
           return state}
     }
}