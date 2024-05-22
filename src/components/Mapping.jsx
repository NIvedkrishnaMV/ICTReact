import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material'
import React, { useState } from 'react'

const Mapping = () => {
    var[name,setname]=useState([
        {"sname":"maya","age":25},
        {"sname":"Joseph","age":9},
        {"sname":"Nimith","age":19}
    ])
  return (
    <div>
       <TableContainer >
      <Table>
        <TableHead>
          <TableRow>
            <TableCell >Name</TableCell>
            <TableCell >age</TableCell>
        </TableRow>
        </TableHead>
        <TableBody>
            {name.map((v,i)=>{
                return (
                <TableRow>
                    <TableCell>{v.sname}</TableCell>
                    <TableCell>{v.age}</TableCell>
                </TableRow>
                )
            })}
        </TableBody>
        </Table>
        </TableContainer>
    </div>
  )
}

export default Mapping
