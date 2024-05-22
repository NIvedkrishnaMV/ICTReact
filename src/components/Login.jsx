import { TextField, Typography } from '@mui/material'
import React from 'react'

const Login = () => {
  return (
    <div>
        <br /><br /><br /><br /><br />
        <Typography variant='h2'>Login</Typography>
      <TextField label='Username' variant='outlined'/>
      <TextField label='Password' variant='outlined'/>
    </div>
  )
}

export default Login
