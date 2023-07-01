import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { deletedetailes, getdetailes } from '../redux/detailes/action'

export const Detailes = () => {
    const {datas}=useSelector((store)=>store.detailes)
    const dispatch=useDispatch()
    useEffect(()=>{
       getdetailes(dispatch)
    },[])
    console.log(datas)
    let sum=0
    datas.map((e,i)=>(<div key={i}>{sum+=e.qty*e.rate}</div>))
  return (
    <div>
        <h4>detail_table</h4>  
          <table border={"1"}  >
           <tr>
           <th >sr_no</th>
           <th  >item_code</th>
           <th>item_name</th>
           <th>qty</th>
           <th>rate</th>
           <th>amount</th>
           </tr>
        {
            datas.map((e,i)=>( <tr key={i}>
        <td>{e.sr_no}</td>
        <td>{e.item_code}</td>
        <td>{e.item_name}</td>     
        <td>{e.qty}</td>
        <td>{e.rate}</td>
        <td>{e.qty*e.rate}</td>
        <button onClick={()=>deletedetailes(e.qty)}>Delete</button>
    </tr>
    ))
        }
  <tr ><td colSpan="6" style={{textAlign:"end"}}>Total:- {sum} </td></tr>
    </table>
    </div>
  )
}
