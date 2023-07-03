import axios from 'axios'


export const headerapipost=async(header)=>{
    try{
        // return axios.post("http://localhost:8000/comments",header)
        return axios.post("http://5.189.180.8:8010/header",header)

    }catch(e){
        console.log(e)
}
 }
    
