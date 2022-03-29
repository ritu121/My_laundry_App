import React from 'react';
import "./styles/order.css";

import { faBars,faCirclePlus, faHome } from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import { useNavigate } from "react-router-dom"
import {Button } from '@material-ui/core';

function CreateOrders() {
  
  const navigate = useNavigate();
  // function homeClick() {
  //   navigate("/register")   
  // }
  // function createClick() {
  //   navigate('/createOrders')   
  // }
  // function ordersClick() {
  //   navigate('createOrders/pastOrders')
  // }

  // useEffect(()=>{
  //   const token =localStorage.getItem('token')
  //   if (token){
  //     const authUser = jwt.decode(token)
  //     console.log(authUser)
  //     if(!authUser){
  //       localStorage.removeItem('token')
  //       navigate.replace('.login')   
  //     }else{
  //       SpeechSynthesisUtterance(authUser)
  //     }
  //   }else{
  //     alert('Please Login')
  //     navigate('/login')
  //   }
  // })

  return (
    <>
      <div className='ordersdiv'>
        <div className='sidetabs'>
          <div className='divicon'>
            <FontAwesomeIcon className='icons' icon={faHome} />
          </div>
          <div className='divicon'>
            <FontAwesomeIcon className='icons' icon={faCirclePlus} />
          </div>
          <div className='divicon'>
            <FontAwesomeIcon className='icons' icon={faBars}/>
          </div>

        </div>
        <div className='maindivOrder'>
          <h3>No Orders available</h3>
          <Button variant="outlined" size="medium" className='btn2' onClick={() => navigate("/createOrders")}> Create</Button>
        </div>

        <div>


        </div>
      </div>


    </>
  )
}




// import React from "react";
// // import * as React from 'react';
// import Table from '@mui/material/Table';
// import TableBody from '@mui/material/TableBody';
// import TableCell from '@mui/material/TableCell';
// import TableContainer from '@mui/material/TableContainer';
// import TableHead from '@mui/material/TableHead';
// import TableRow from '@mui/material/TableRow';
// import Paper from '@mui/material/Paper';
// import Button from '@mui/material/Button';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
// import { faEye } from '@fortawesome/free-solid-svg-icons'
// function CreateOrders(){
//     const orders = [{
//         "status": "Work in Progress",
//         "products": ["washing","Ironing", "something", "something"],
//         "totalPrice" : 900,
//         "totalQuantity" : 23,
//         "user": "jshdisjksm9spdl4452",
//       },
//       {
//         "status": "Work in Progress",
//         "products": ["washing","Ironing", "something", "something"],
//         "totalPrice" : 900,
//         "totalQuantity" : 23,
//         "user": "jshdisjksm9spdl4452",
//       },//fake data
//       {
//         "status": "Finished",
//         "products": ["washing","Ironing", "something", "something"],
//         "totalPrice" : 900,
//         "totalQuantity" : 23,
//         "user": "jshdisjksm9spdl4452",
//       },{
//         "status": "Work in Progress",
//         "products": ["washing","Ironing", "something", "something"],
//         "totalPrice" : 900,
//         "totalQuantity" : 23,
//         "user": "jshdisjksm9spdl4452",
//       },{
//         "status": "Finished",
//         "products": ["washing","Ironing", "something", "something"],
//         "totalPrice" : 900,
//         "totalQuantity" : 23,
//         "user": "jshdisjksm9spdl4452"
//       }]
//     return (
//         <TableContainer component={Paper}>
//             <Table sx={{ minWidth: 650 }} aria-label="simple table">
//                 <TableHead>
//                     <TableRow>
//                         <TableCell >Order Id</TableCell>
//                         <TableCell >Order Date & Time</TableCell>
//                         <TableCell >Store Location</TableCell>
//                         <TableCell >City</TableCell>
//                         <TableCell >Store Phone</TableCell>
//                         <TableCell >Total Items</TableCell>
//                         <TableCell >Price</TableCell>
//                         <TableCell >Status</TableCell>
//                         <TableCell >Button</TableCell>
//                         <TableCell >View</TableCell>
//                     </TableRow>
//                 </TableHead>
//                 <TableBody>
//                     {orders && orders.map((order) => {
//                         return (
//                             <TableRow>
//                                 <TableCell >{order.user}</TableCell>
//                                 <TableCell >01/4/22</TableCell>
//                                 <TableCell >Banglore</TableCell>
//                                 <TableCell >Banglore</TableCell>
//                                 <TableCell >9898989898</TableCell>
//                                 <TableCell >{order.totalQuantity}</TableCell>
//                                 <TableCell >{order.totalPrice}</TableCell>
//                                 <TableCell >{order.status}</TableCell>
//                                 <TableCell ><Button variant="contained">Cancel Order</Button></TableCell>
//                                 <TableCell ><FontAwesomeIcon icon={faEye} /></TableCell>
//                             </TableRow>
//                         )
//                     })
//                     }
//                 </TableBody>
//             </Table>
//         </TableContainer>
//     );
// }
export default CreateOrders