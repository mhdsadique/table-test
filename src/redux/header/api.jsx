import axios from 'axios'


export const headerapipost=async(header)=>{
    try{
     let daa= axios.post("http://5.189.180.8:8010/header/",header)
     return daa
    }catch(e){
        console.log(e)
    }
 }
    
