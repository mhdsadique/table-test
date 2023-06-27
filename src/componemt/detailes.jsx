import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getdetailes } from '../redux/detailes/action'

export const Detailes = () => {
 
    //  axios.get("http://5.189.180.8:8010/detail").then(e=>console.log(e))
    // const [dat,setdata]=useState([])
    const {datas}=useSelector((store)=>store.detailes)
    const dispatch=useDispatch()
    useEffect(()=>{
       getdetailes(dispatch)
    },[])
    console.log(datas)
  return (
    <div>
          <table border={"1"}  >
        <tr>

        <td>detail_table</td>  
        {
            datas.map((e,i)=>(
                <div key={i}>
    <tr >
        <th >vr_no</th>
        <td>{e.vr_no}</td>
    </tr>
    <tr >
        <th >sr_no</th>
        <td>{e.sr_no}</td>
    </tr>
    <tr>
        <th  >item_code</th>

        <td>{e.item_code}</td>
    </tr>
    <tr>
        <th>item_name</th>

        <td>{e.item_name}</td>
    </tr>
    <tr>
        <th>description</th>
        <td>{e.description}</td>
    </tr>
    <tr>
        <th>qty</th>

        <td>{e.qty}</td>
    </tr>
    <tr>
        <th>rate</th>
        <td>{e.rate}</td>
    </tr>

    
    </div> 
     ))
        }
    
     </tr>
    </table>
    </div>
  )
}
