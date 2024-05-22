import { AppBar, Button, Toolbar, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      <AppBar>
        <Toolbar>
            <Typography variant='h5'>Joseph</Typography>&nbsp;&nbsp;&nbsp;
            <Button variant="contained" color='success'><Link style={{color:"white"}} to='/login'>Login</Link></Button>&nbsp;&nbsp;
            <Button variant="contained" color='error'><Link style={{color:"white"}} to='/sign' >Sign up</Link></Button>&nbsp;&nbsp;
            <Button variant="contained" color='secondary'><Link style={{color:"white"}} to='/s' >State Basics</Link></Button>&nbsp;&nbsp;
            <Button variant="contained" color='info'><Link style={{color:"white"}} to='/counter' >counter</Link></Button>&nbsp;&nbsp;
            <Button variant="contained" color='secondary'><Link style={{color:"white"}} to='/list' >List</Link></Button>&nbsp;&nbsp;
            <Button variant="contained" color='secondary'><Link style={{color:"white"}} to='/map' >Map</Link></Button>&nbsp;&nbsp;
            <Button variant="contained" color='info'><Link style={{color:"white"}} to='/buttons' >BUtton</Link></Button>&nbsp;&nbsp;
            <Button variant="contained" color='secondary'><Link style={{color:"white"}} to='/a' >Api</Link></Button>&nbsp;&nbsp;
            <Button variant="contained" color='secondary'><Link style={{color:"white"}} to='/card' >card</Link></Button>&nbsp;&nbsp;
        </Toolbar>
      </AppBar>
      <br /><br /><br /><br /><br />
    </div>
  )
}

export default Navbar
