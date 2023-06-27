import React, { useState } from 'react'
import { postdetailes } from '../redux/detailes/action'
import { useDispatch } from 'react-redux'
import { postheader } from '../redux/header/action'

export const Post = () => {
 const dispatch=useDispatch()
//  const [data,setdata]=useState("")
 const [vr_no,setvr_no]=useState("")
 const [sr_no,setsr_no]=useState("")
 const [item_code,setitem_code]=useState("")
 const [item_name,setitem_name]=useState("")
 const [description,setdescription]=useState("")
 const [qty,setqty]=useState("")
 const [rate,setrate]=useState("")
 const [status,setstatus]=useState("")

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
    ac_amt:qty*rate,
    status:status
 }
    const formsubmit=(event)=>{
       event.preventDefault()

       dispatch(postdetailes(detailes))
       postheader(dispatch,header)
       console.log(header)
    }
  return (
    <div>
        <form action="" onSubmit={formsubmit}>
            <input type="text" placeholder='vr_no'value={vr_no} onChange={(e)=>setvr_no(e.target.value)}/>
            <input type="text" placeholder='sr_no'value={sr_no} onChange={(e)=>setsr_no(e.target.value)}/>
            <input type="text" placeholder='item_code'value={item_code} onChange={(e)=>setitem_code(e.target.value)}/>
            <input type="text" placeholder='item_name'value={item_name} onChange={(e)=>setitem_name(e.target.value)}/>
            <input type="text" placeholder='description'value={description} onChange={(e)=>setdescription(e.target.value)}/>
            <input type="text" placeholder='qty'value={qty} onChange={(e)=>setqty(e.target.value)}/>
            <input type="text" placeholder='rate'value={rate} onChange={(e)=>setrate(e.target.value)}/>
            <input type="text" placeholder='status'value={status} onChange={(e)=>setstatus(e.target.value)}/>
            <input type="submit" />
        </form>
    </div>
  )
}
/*
// "{""header_table"" : 
//         {""vr_no"": 5,
//         ""vr_date"": ""2023-01-01T00:00:00.000Z"",
//         ""ac_name"": ""UNPLUGAPPS"",
//         ""ac_amt"": 40,
//         ""status"": ""A""    },

// ""detail_table"": [
//     {
//         ""vr_no"": 5,
//         ""sr_no"": 1,
//         ""item_code"": ""ITEM 111"",
//         ""item_name"": ""ITEM NAME 111"",
//         ""description"": ""This Item ITEM ITEM ITEM.............."",
//         ""qty"": 4,
//         ""rate"": 5
//     },
//     {
//         ""vr_no"": 5,
//         ""sr_no"": 2,
//         ""item_code"": ""ITEM 2"",
//         ""item_name"": ""ITEM NAME 2"",
//         ""description"": ""ITEM ITEM ITEM.............."",
//         ""qty"": 2,
//         ""rate"": 10
//     }
//   ]
// }"
*/