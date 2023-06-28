import axios from 'axios'

export const Dataapi=()=>{

return axios.get("http://5.189.180.8:8010/header")
.then(e=>e.data)
}
export const headerapipost=async(header)=>{
    try{
    //    let daa= axios.post("http://localhost:8000/comments",header)
     let daa= axios.post("http://5.189.180.8:8010/header/",header)
     return daa
    }catch(e){
        console.log(e)
    }
    }