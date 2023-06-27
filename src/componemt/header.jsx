import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdatas } from '../redux/header/action'

export const Header = () => {
 
    //  axios.get("http://5.189.180.8:8010/header").then(e=>console.log(e))
    const [dat,setdata]=useState([])
    const {datas}=useSelector((store)=>store.header)
    const dispatch=useDispatch()
    useEffect(()=>{
        getdatas(dispatch)
    },[])
    console.log(datas)
  return (
    <div>
          <table border={"1"}  >
        <tr>

        <td>header_table</td>  
        {
            datas.map((e,i)=>(
                <div key={i}>
    <tr >
        <th >vr_no</th>
        <td>{e.vr_no}</td>
    </tr>
    <tr>
        <th  >vr_date</th>

        <td>{e.vr_date}</td>
    </tr>
    <tr>
        <th>ac_name</th>

        <td>{e.ac_name}</td>
    </tr>
    <tr>
        <th>ac_amt</th>

        <td>{e.ac_amt}</td>
    </tr>
    <tr>
        <th>status</th>
        <td>{e.status}</td>
    </tr>
   
    
    </div> 
     ))
        }
    
     </tr>
    </table>
    </div>
  )
}
