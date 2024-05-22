import { Button, TextField } from '@mui/material'
import React, { useState } from 'react'

const Listmap = () => {
    var[input,setinput]=useState()
var[val,setvalue]=useState(["ICTAK"])

const inputHandler=(e)=>{
    setinput(e.target.value)
}
const submitHandler=()=>{
    setvalue([...val,input])
}

  return (
    <div>
      <TextField variant='outlined' onChange={inputHandler} value={input} label="Enter Your name" />
      <br />
      <br />
      <Button variant='contained' onClick={submitHandler}>Submit</Button>
      <br /><br /><br /><br /><br />
      <ul>
        {val.map((v,i)=>{
            return <li>{v}</li>
        })}
      </ul>
    </div>
  )
}

export default Listmap
