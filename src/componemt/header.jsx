import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  postheader } from '../redux/header/action'
import { postdetailes } from '../redux/detailes/action'

export const Header = () => {
    const dispatch=useDispatch()
     const [ac_amt,setac_amt]=useState("")
     const [vr_no,setvr_no]=useState("")
     const [sr_no,setsr_no]=useState("")
     const [item_code,setitem_code]=useState("")
     const [item_name,setitem_name]=useState("")
     const [description,setdescription]=useState("")
     const [qty,setqty]=useState("")
     const [rate,setrate]=useState("")
     const [status,setstatus]=useState("")
    const {datas}=useSelector((store)=>store.header)
 
    const detailes={
        vr_no:vr_no,
        sr_no:sr_no,
        item_code:item_code,
        item_name:item_name,
        description:description,
        qty:qty,
        rate:rate
       }
       const header={
          vr_no:vr_no,
          vr_date:new Date(),
          item_name:item_name,
          ac_amt:ac_amt,
          status:status
       }
       const formsubmit=(event)=>{
                   event.preventDefault()
                dispatch(postdetailes(detailes))
                postheader(dispatch,header)
                console.log(header)
                console.log(detailes)
                console.log(datas)
             }
    const styles={
       display:"grid",
       gridTemplateColumns:"repeat(3,1fr)"
    }
    const printer=()=>{
     window.print()
   }
  return (
    <>
    <h3>Header</h3>
    <button onClick={printer}>Print</button>
   <form action="" onSubmit={formsubmit}>
   <div style={styles}>
   <div >
   <h4>Vr No</h4>
   <input type="text" placeholder='vr_no'value={vr_no} onChange={(e)=>setvr_no(e.target.value)}/>
   </div>
   <div>
   <h4>Status</h4>
   <input type="text" placeholder='status'value={status} onChange={(e)=>setstatus(e.target.value)}/>
   </div>
   <div>
   <h4>Ac Name</h4>
   <input type="text" placeholder='item_name'value={item_name} onChange={(e)=>setitem_name(e.target.value)}/>
   </div>
   <div>
   <h4>Ac Amt</h4>
    <input type="text" placeholder='ac amt'value={ac_amt} onChange={(e)=>setac_amt(e.target.value)}/>
   </div>
   </div>
            <input type="text" placeholder='sr_no'value={sr_no} onChange={(e)=>setsr_no(e.target.value)}/>
            <input type="text" placeholder='item_code'value={item_code} onChange={(e)=>setitem_code(e.target.value)}/>
            <input type="text" placeholder='description'value={description} onChange={(e)=>setdescription(e.target.value)}/>
            <input type="text" placeholder='qty'value={qty} onChange={(e)=>setqty(e.target.value)}/>
            <input type="text" placeholder='rate'value={rate} onChange={(e)=>setrate(e.target.value)}/>
            <input type="submit" />
   </form>
   </>
  )
}
