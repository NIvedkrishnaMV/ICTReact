import { Button, TextField, Typography } from '@mui/material'
import React, { useState } from 'react'

const Statebasics = () => {
    // var name="Nived"
    // var[fname,setfname]=useState("nived")
    var[fname,setfname]=useState()
    var[val,setval]=useState()
    const handleInput=(e)=>{
        setfname(e.target.value)
    }

    const submitHandler=()=>{
        setval(fname)
    }
  return (
    <div>
      <Typography variant='h4'>Welcome {val}</Typography>
      <TextField variant='standard' label='Enter Your name' onChange={handleInput}/>
      <Button onClick={submitHandler}>Submit</Button>
    </div>
  )
}

export default Statebasics
