import axios from 'axios'


export const Dataapi=()=>{

return axios.get("http://5.189.180.8:8010/detail")
.then(e=>e.data)

}

export const Dataapipost=async(detailes)=>{

    try{
       let daa= axios.post("http://5.189.180.8:8010/detail/",detailes)
    //    let daa= axios.post("http://localhost:8000/posts",detailes)
     return daa
    }catch(e){
        console.log(e)
    }
    }
  