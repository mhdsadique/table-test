import axios from 'axios'

export const Dataapi=()=>{

return axios.get("http://5.189.180.8:8010/header")
.then(e=>e.data)
}
export const headerapipost=async(header)=>{
    try{
    //    let daa= axios.post("http://5.189.180.8:8010/detail/",detailes)
        //    http://5.189.180.8:8010/header/multiple

    //    let daa= axios.post("http://localhost:8000/comments",header)
     let daa=   axios.post("http://5.189.180.8:8010/header",header)
     return daa
//    let data= fetch("http://5.189.180.8:8010/header/",{
//         method:"POST",
//         headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify(header)
//     })
//     return data
    }catch(e){
        console.log(e)
    }
    }