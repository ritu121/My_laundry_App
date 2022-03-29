import React, { useState} from 'react'
// import * as React from 'react';
// import { getToken } from "../utils/authOperation";
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Button from '@mui/material/Button';
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import CloseIcon from '@mui/icons-material/Close';
import {useNavigate } from "react-router-dom"

import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

import ReportProblemIcon from '@mui/icons-material/ReportProblem';

import "./styles/pastorder.css"
import InputWithIcon from "./Inputwithicon";

import { faBars,faCirclePlus, faHome } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const style = {
  padding: '0px',
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

const style2 = {
  padding: '0px',
  display: 'inline',
  align: 'left',
  color:'#FFFFFF'
}



export default function PastOrdersTable() {
  // const [status, setStatus] = useState("Ready To PickUp")
  const navigate = useNavigate();

  const [open, setOpen] = useState(false);
  let [Id, setId] = useState(null)
  const [alid, setalid] = useState(null)

  const handleClickOpen = (event) => {
    event.preventDefault()
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };


  // const orders = []
  const orders = [{
    "status": "ready to pickup",
    "date": Date.now(),
    "products": ["washing","Ironing", "something", "something"],
    "totalPrice" : 900,
    "totalQuantity" : 23,
    "user": "jshdisjksm9spdl4452",
  },
  {
    "status": "Work in Progress",
    "date": Date.now(),
    "products": ["washing","Ironing", "something", "something"],
    "totalPrice" : 900,
    "totalQuantity" : 23,
    "user": "jshdisjksm9spdl4452",
  },//fake data
  {
    "status": "Finished",
    "date": Date.now(),
    "products": ["washing","Ironing", "something", "something"],
    "totalPrice" : 900,
    "totalQuantity" : 23,
    "user": "jshdisjksm9spdl4452",
  },{
    "status": "ready to pickup",
    "date": Date.now(),
    "products": ["washing","Ironing", "something", "something"],
    "totalPrice" : 900,
    "totalQuantity" : 23,
    "user": "jshdisjksm9spdl4452",
  },{
    "status": "Finished",
    "date": Date.now(),
    "products": ["washing","Ironing", "something", "something"],
    "totalPrice" : 900,
    "totalQuantity" : 23,
    "user": "jshdisjksm9spdl4452"
  }]


      // const cancelClick = (e) => {
      //   setOpen(false);
      //   orders.map((order,index) => {
      //     index + 1 === Id ? order.status = "cancelled" : console.log(order.status)
          
      //   })
      // }

      

    // const AlertWord = () => "Alert";
    // function homeClick() {
    //   navigate("/")   
    // }
    // function createClick() {
    //   navigate('/createOrders')   
    // }
    // function ordersClick() {
    //   // if(orders.length === 0){navigate('/orders')} else{navigate('pastorders')}
    //   navigate('/')
    // }


  return (
    <div className="PastOrdersContent">
      <div className='sidetabs'>
          <div className='divicon'>
            <FontAwesomeIcon className='icons' icon={faHome}/>
          </div>
          <div className='divicon'>
           <FontAwesomeIcon className='icons' icon={faCirclePlus}  onClick={()=>navigate(-1)}/>
          </div>
          <div className='divicon active'>
            <FontAwesomeIcon className='icons' icon={faBars} />
          </div>   
        </div>
      {orders.length === 0 &&        
        <div className='maindivOrder'>
          <Button variant="outlined" size="medium" className='btn2' onClick={() => navigate("/createOrders")}> Create</Button>
        </div>
      }
      {orders.length > 0 && 
      <TableContainer className="TableContainer" component={Paper} >
        <div className="Toppart">
          <div className="TopLeft">
            <strong className="cntHead">Orders | {orders.length}</strong>
          </div>
          <div className="TopRight">
            <div className="btncomponent">
              <Button variant="outlined" className="outlinebtn" onClick={() => navigate("/createOrders")} >Create</Button>
            </div>
            <div className="InputComponent">
              <InputWithIcon />
            </div>
          </div>
        </div>
        <Table sx={{ minWidth: 650 }} aria-label="simple table" className="table">
          <TableHead className="TableHeader">
            <TableRow>
              <TableCell >Order Id</TableCell>
              <TableCell >Order Date & Time</TableCell>
              <TableCell >Store Location</TableCell>
              <TableCell >City</TableCell>
              <TableCell >Store Phone</TableCell>
              <TableCell >Total Items</TableCell>
              <TableCell >Price</TableCell>
              <TableCell >Status</TableCell>
              <TableCell ></TableCell>
              <TableCell >View</TableCell>
            </TableRow>
          </TableHead>
          <TableBody className="tableBody">
            {orders && orders.map((order,index) => {
              return (
                <TableRow hover className="dataTable">
                  
                  {/* Row should have a on clickevent should redirect to summary */}
                  <TableCell >{<th scope="row">{"OR000"+(index+1).toString()}</th>}</TableCell>
                  <TableCell >{Date.now()}</TableCell>
                  <TableCell >Dilshuknagar</TableCell>
                  <TableCell >Banglore</TableCell>
                  <TableCell >9898989898</TableCell>
                  <TableCell >{order.totalQuantity}</TableCell>
                  <TableCell >{order.totalPrice}</TableCell>
                  <TableCell >{order.status==='cancelled' ? <i style={{color:'red'}}>cancelled</i> : order.status}</TableCell>
                  <TableCell component="th" scope="row" className="btncell">
                    <div>{order.status === "ready to pickup" ? <Button variant="text" className="CancelBtn" onClick={handleClickOpen}>cancel order</Button> : ""}</div>
                  </TableCell>
                  <TableCell className="viewcell"><Button className="vwBtn"><RemoveRedEyeOutlinedIcon /></Button></TableCell>
                  {/* button should also have a onclickevent which should redirect to summary */}
                </TableRow>
              )
            })
            }
          </TableBody>

        </Table>
      </TableContainer> }
      <Modal
        className="ModalContainer"
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style} className="Alert-container">
          <div className="Alert-Header" style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#4552C1', color: '#FFFFFF' }}>
            <Typography id="modal-modal-title" variant="h6" component="h2" className="Alert-Heading" sx={style2}>
              Alert
            </Typography>
            <Button onClick={handleClose} className="Alert-CloseIcon" style={{ backgroundColor: 'transparent', border: 'transparent', color: 'white' }} ><CloseIcon /></Button>
          </div>
          <div className="content-below">
          <div className="content-inbetween">
            <ReportProblemIcon className="dangerbtn" style={{color:'#F40808'}}/>
            <Typography id="modal-modal-description" sx={{ mt: 2 }} className="Content">
              Are You Sure You Want To Cancel the Order No {alid}
            </Typography>
          </div>
          <div style={{ textAlign: 'center' }} className='danger-next'>
            <Button className="popupProceed" >Proceed</Button>
          </div>
          </div>
          {/* the onclick event should contain deletefunction */}
        </Box>
      </Modal>

    </div>
  );

}

/** 
 -> add a row event on select ->
-> add a alert
​
​
​
*/


  // ----------------------------------------------------------------------------

  // const [orders, setOrders] = useState([]);
  // const [currindex, setcurrindex] = useState(0)
  // const [cancelid, setcancelid] = useState('')


  // const month = { '01': 'Jan', '02': 'Feb', '03': 'Mar', '04': 'Apr', '05': 'May', '06': 'Jun', '07': 'Jul', '08': 'Aug', '09': 'Sep', '10': 'Oct', '11': 'Nov', '12': 'Dec' }
  // async function getOrders() {
  //   try {
  //     const response = await fetch("http://localhost:3000/orders/pastorders", {
  //       method: 'GET', // *GET, POST, PUT, DELETE, etc.
  //       mode: 'cors', // no-cors, *cors, same-origin
  //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //       credentials: 'same-origin', // include, *same-origin, omit
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //         'Authorization': `Bearer ${getToken()}`,
  //       },
  //       redirect: 'follow', // manual, *follow, error
  //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-ur
  //     });
  //     const { data } = await response.json();
  //     console.log(data.orders);
  //     setOrders(data.orders.reverse());
  //     const l = data.orders.length
  //     console.log(l)
  //     if (l === 0) {
  //       window.location.href = '/preorders'
  //     }
  //   } catch (e) {
  //     console.log(e)
  //   };

  // }
  // useEffect(() => { getOrders(); }, [orders.status]); //component did mount

  // async function cancelOrder(id) {
  //   try {
  //     const response = await fetch(`http://localhost:5000/order/cancelorder/${id}`, {
  //       method: 'PUT', // *GET, POST, PUT, DELETE, etc.
  //       mode: 'cors', // no-cors, *cors, same-origin
  //       cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //       credentials: 'same-origin', // include, *same-origin, omit
  //       headers: {
  //         'Content-Type': 'application/json',
  //         // 'Content-Type': 'application/x-www-form-urlencoded',
  //         'Authorization': `Bearer ${getToken()}`,
  //       },
  //       redirect: 'follow', // manual, *follow, error
  //       referrerPolicy: 'no-referrer', // no-referrer, *no-referrer-when-downgrade, origin, origin-when-cross-origin, same-origin, strict-origin, strict-origin-when-cross-origin, unsafe-ur
  //     });
  //     window.location.href = '/orders';
  //   } catch (e) {
  //     console.log(e)
  //   };
  // }

    // function changestate(e) {
  //   setcurrindex(parseInt((e.target.id).split('|')[1]) - 1)
  //   setcancelid((e.target.id).split('|')[0])  
  // }
  // function altcolor(index) {
  //   if (index % 2 === 1) {
  //     return 'alt'
  //   }
  //   else {
  //     return
  //   }
  // }
    //----------------------------------------------------------------------------------