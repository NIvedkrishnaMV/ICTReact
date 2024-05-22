import { Button, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'

const Bottons = () => {
    var[input,setInput]=useState()
    const input1=()=>{
        setInput("Welcome to React")
    }
    const input2=()=>{
        setInput("Welcome to Angular")
    }
    const input3=()=>{
        setInput("Next")
    }
    useEffect(()=>{
        input3()
    },[])
  return (
    <div>
        <Typography variant='h3' >{input}</Typography>
      <Button variant='outlined' onClick={input1}>React</Button>
      <Button variant='text' onClick={input2}>Angular</Button>
      <Button variant='contained' onClick={input3}>Next</Button>
    </div>
  )
}

export default Bottons
