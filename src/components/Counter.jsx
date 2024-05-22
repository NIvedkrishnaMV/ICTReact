import { Button, Typography } from '@mui/material'
import React, { useState } from 'react'

const Counter = () => {
    var[val,setval]=useState(0)
    const increment=()=>{
        setval(val+1)
    }
    const decrement=()=>{
        setval(val-1)
    }



  return (
    <div>
      <Button variant='outlined' onClick={increment}>+</Button>
      <Typography variant='h4'>{val}</Typography>
      <Button variant='outlined' onClick={decrement}>-</Button>
    </div>
  )
}

export default Counter
