import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Apibasics = () => {
    var[inputs,setinputs]=useState([])
    useEffect(()=>{
        axios.get("https://jsonplaceholder.typicode.com/users")
    .then((response)=>{
        console.log(response.data);
        setinputs(response.data)
    })

    },[])
    
  return (
    <div>
      <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >id</TableCell>
            <TableCell >name</TableCell>
            <TableCell >city</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
            {inputs.map((v,i)=>{
                return (
                <TableRow>
                    <TableCell>{v.id}</TableCell>
                    <TableCell>{v.name}</TableCell>
                    <TableCell>{v.address.city}</TableCell>
                </TableRow>
                )
            })}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default Apibasics
