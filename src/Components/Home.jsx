import React, { useEffect, useState } from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios';


// const rows = [
//     { id: 1, name: 'John Doe', department: 'Engineering', location: 'New York' },
//     { id: 2, name: 'Jane Smith', department: 'Marketing', location: 'London' },
//     { id: 3, name: 'Michael Brown', department: 'HR', location: 'Berlin' },
//     { id: 4, name: 'Emily White', department: 'Finance', location: 'Paris' },
//     { id: 5, name: 'Chris Green', department: 'Sales', location: 'Tokyo' },
//   ];
export const Home = () => {
   
     const [rows,setRows]=useState([]);//external connection is possible with  axios install npm i axios
     // Connecting external axios ,rows is a variable
     useEffect(()=>{
        axios.get('https://dummyjson.com/users').then((res)=>{
          setRows(res.data.users);
        }) //path of the dummy API
     },[])

        return (
          <TableContainer component={Paper}>
            <Table sx={{ minWidth: 650 }} aria-label="simple table">
              <TableHead>
                <TableRow>
                  {/* <TableCell>Dessert (100g serving)</TableCell> */}
                  <TableCell align="right">First Name</TableCell>
                  <TableCell align="right">Last Name&nbsp;(g)</TableCell>
                  <TableCell align="right">Gender&nbsp;(g)</TableCell>
                  <TableCell align="right">Email&nbsp;(g)</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {rows.map((row) => (
                  <TableRow
                    key={row.firstName}
                    sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                  >
                    <TableCell component="th" scope="row">
                      {row.firstName}
                    </TableCell>
                    <TableCell align="right">{row.firstName}</TableCell>
                    <TableCell align="right">{row.lastName}</TableCell>
                    <TableCell align="right">{row.gender}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
  )
}

export default Home
