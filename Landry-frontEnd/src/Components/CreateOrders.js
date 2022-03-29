import React, { useState } from "react";
// import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from 'axios'

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

import "./styles/createOrder.css"

import shirt from "./images/shirts.jpg"
import t_shirt from "./images/t-shirts.jpg"
import trousers from "./images/trousers.jpg"
import jeans from "./images/jeans.jpg"
import boxer from "./images/boxers.jpg"

import iron1 from "./images/ironing_blur.jpg"
import iron from "./images/iron.png"
import towel1 from "./images/towel_blur.png"
import towel from "./images/btowel.svg"
import bleach1 from "./images/bleach_blur.png"
import bleach from "./images/bleach.jpg"
import wash1 from "./images/wash_blur.jpg"
import wash from "./images/wash.png"
import "./styles/order.css";
import { faCircleCheck, faHome ,faCirclePlus ,faBars} from "@fortawesome/free-solid-svg-icons";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import  {useNavigate ,Link } from "react-router-dom"
const style = {
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
  position: 'absolute',
  top: '50% !important' ,
  left: '50% !important',
  transform: 'translate(-50%, -50%) !important',
  width: 350,
  height: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius:'10px'
};

// import { faBars, faCirclePlus, faHome } from "@fortawesome/free-solid-svg-icons";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";



function CreateOrders() {
  const navigate=useNavigate();
  const [item, setitem] = useState({ name: "", quantity: 0, actions: [], price: 0 });
  const [action, setaction] = useState([])
  // console.log(item)
  const bill = {
    "Washing": 20,
    "Pressing": 15, "Folding": 10, "Chemical-washing": 25
  }
  const [product, setproduct] = useState([]);

  const [expression, setexpression] = useState(["-", "-", "-", "-", "-", "-", "-"])
  const [cost, setcost] = useState(0);
  const [reset, setreset] = useState(false)
  // const [icon, seticon] = useState(0)
  const [color, setcolor] = useState([false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false, false])

  function change(e) {
    setaction([])
    setcost(0)
    setitem({ ...item, name: e.target.id, quantity: e.target.value })

  }
  function selectaction(e) {
    const arr = e.target.id.split(' ')
    const changecolor = [...color]
    changecolor[parseInt(arr[1]) - 1] = !changecolor[parseInt(arr[1]) - 1]
    setcolor(changecolor)
    // console.log(e.target.id)
    const res = [...action]
    //  console.log(res)
    res.push(arr[0])
    // console.log(res)


    setaction(res)
    let washcost = cost
    washcost = washcost + bill[arr[0]]
    setcost(washcost)

    // console.log(cost)
    // console.log(action)
  }
  function calculate(e) {
    item.actions = action;
    setitem(item)
    const totalprice = item.quantity * cost
    // console.log(totalprice)
    item.price = totalprice
    setitem(item)
    // console.log(item)
    const express = (item.quantity).toString() + "X" + (cost).toString() + " =  " + (item.quantity * cost).toString()
    expression[parseInt(e.target.id)] = express
    console.log(express)
    setexpression(expression)
    console.log(expression)

    const demoproduct = [...product]
    demoproduct.push(item)
    
    setproduct(demoproduct)
    console.log(product)
    setreset(true)



  }

  function resetbutton(e) {
    const changecolor = [...color]
    changecolor[parseInt(e.target.id)] = false
    changecolor[parseInt(e.target.id) + 1] = false
    changecolor[parseInt(e.target.id) + 2] = false
    changecolor[parseInt(e.target.id) + 3] = false
    setcolor(changecolor)


    const demoproduct = [...product]
    demoproduct.pop(item)
    setproduct(demoproduct)
    item.quantity = 0
    expression[e.target.id] = "-";
    setexpression(expression)
    setitem(item)

  }

  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [value, setvalue] = useState(false);
  // const confirmOpen = () =>  setvalue(true);
  const confirmClose = () =>  setvalue(false);
  
  // const Create=async(event)=>{
  //   setvalue(true)
  //   event.preventDefault();
  //   const response=await fetch('http://localhost:5000/order',{
  //     method: 'POST', // *GET, POST, PUT, DELETE, etc.
  //     mode: 'cors', // no-cors, *cors, same-origin
  //     cache: 'no-cache', // *default, no-cache, reload, force-cache, only-if-cached
  //     credentials: 'same-origin', // include, *same-origin, omit
  //     headers:{  
  //       "Content-Type":'application/json',

  //     },
  //     body:JSON.stringify({products:product}),

  //   })
    
    
  //   const data =await response.json()
  //   console.log('products are:= ',data)
  //   if (data.products){  
  //     localStorage.setItem('token',data.products)
  //     alert('order created')
  //     navigate('/orders')
  //   }else{
  //     alert('please place the order')
  //   }
   
// } 

const Create = () => {
  setvalue(true)
  // console.log("order palce clicked");
  const token = localStorage.getItem("token")
  
  let config = {
      headers: {
          Authorization: 'Bearer ' + token
      }
    }
  axios.post("https://laundryapplication10x.herokuapp.com/orders",config, {data:product})
    .then(res => {
      console.log(res);
      
    })
    .catch(err => console.log(err)
    );

}



  return (
    <div>
      <div>
        <div className='ordersdiv'>
          <div className='sidetabs'>
            <div className='divicon'>
              <FontAwesomeIcon className='icons' icon={faHome} />
            </div>
            <div className='divicon active'>
              <FontAwesomeIcon className='icons' icon={faCirclePlus}  />
            </div>
            <div className='divicon'>
              <FontAwesomeIcon className='icons' icon={faBars} onClick={()=> navigate("./PastOrders")} />
            </div>

          </div>
          <div className='maindiv'>
            <h2> Create Orders</h2><br></br>
            <TableContainer component={Paper}>
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead class="tableHead">
                  <TableRow>
                    <TableCell >Product Type</TableCell>
                    <TableCell >Quantity</TableCell>
                    <TableCell >Wash Type</TableCell>
                    <TableCell >Price</TableCell>
                    <TableCell ></TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={shirt} alt="shirt" />
                        <div> <b>Shirt</b><br />
                          lorem10hd dsdsi jdz skjdk
                        </div>
                      </div>
                    </TableCell>
                    <TableCell >
                      <input className="counter" type="number" id="Shirts" name="Shirts" onChange={(e) => { change(e) }} />
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img id="Washing 1" src={color[0] ? wash : wash1} alt="Wash" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Pressing 2" src={color[1] ? iron : iron1} alt="Press" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Folding 3" src={color[2] ? towel : towel1} alt="Fold" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Chemical-washing 4" src={color[3] ? bleach : bleach1} alt="Pack" onClick={(e) => { selectaction(e) }} /></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" className="btn4" id="0" onClick={(e) => { calculate(e) }}>{expression[0]}</button></TableCell>
                    <TableCell >
                      {reset ? <button type="submit" className="btn3" id="0" onClick={(e) => { resetbutton(e) }}>reset</button> : null}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={t_shirt} alt="shirt" />
                        <div> <b>T-Shirt</b><br />
                          lorem10hd dsdsi jdz skjdk
                        </div>
                      </div>
                    </TableCell>
                    <TableCell >
                      <input className="counter" type="number" id="T-Shirt" onChange={(e) => { change(e) }} />
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img id="Washing 5" src={color[4] ? wash : wash1} alt="Wash" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Pressing 6" src={color[5] ? iron : iron1} alt="Press" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Folding 7" src={color[6] ? towel : towel1} alt="Fold" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Chemical-washing 8" src={color[7] ? bleach : bleach1} alt="Pack" onClick={(e) => { selectaction(e) }} /></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" className="btn4" id="1" onClick={(e) => { calculate(e) }}>{expression[1]}</button></TableCell>
                    <TableCell >
                      {reset ? <button type="submit" className="btn3" id="1" onClick={(e) => { resetbutton(e) }}>reset</button> : null}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={trousers} alt="shirt" />
                        <div><b>Trousers</b><br />
                          lorem10hd dsdsi jdz skjdk</div>
                      </div>

                    </TableCell>
                    <TableCell >
                      <input className="counter" type="number" id="Trousers" onChange={(e) => { change(e) }} />
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img id="Washing 9" src={color[8] ? wash : wash1} alt="Wash" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Pressing 10" src={color[9] ? iron : iron1} alt="Press" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Folding 11" src={color[10] ? towel : towel1} alt="Fold" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Chemical-washing 12" src={color[11] ? bleach : bleach1} alt="Pack" onClick={(e) => { selectaction(e) }} /></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" className="btn4" id="2" onClick={(e) => { calculate(e) }}>{expression[2]}</button></TableCell>
                    <TableCell >
                      {reset ? <button type="submit" className="btn3" id="2" onClick={(e) => { resetbutton(e) }}>reset</button> : null}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={jeans} alt="shirt" />
                        <div><b>Jeans</b><br />
                          lorem10hd dsdsi jdz skjdk</div></div>

                    </TableCell>
                    <TableCell >
                      <input className="counter" type="number" id="Jeans" onChange={(e) => { change(e) }} />
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div className="imgdiv">
                          <div><img id="Washing 13" src={color[12] ? wash : wash1} alt="Wash" onClick={(e) => { selectaction(e) }} /></div>
                          <div><img id="Pressing 14" src={color[13] ? iron : iron1} alt="Press" onClick={(e) => { selectaction(e) }} /></div>
                          <div><img id="Folding 15" src={color[14] ? towel : towel1} alt="Fold" onClick={(e) => { selectaction(e) }} /></div>
                          <div><img id="Chemical-washing 16" src={color[15] ? bleach : bleach1} alt="Pack" onClick={(e) => { selectaction(e) }} /></div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" className="btn4" id="3" onClick={(e) => { calculate(e) }}>{expression[3]}</button></TableCell>
                    <TableCell >
                      {reset ? <button type="submit" className="btn3" id="3" onClick={(e) => { resetbutton(e) }}>reset</button> : null}
                    </TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell >
                      <div className="cell"><img src={boxer} alt="shirt" />
                        <div><b>Boxers</b><br />
                          lorem10hd dsdsi jdz skjdk
                        </div>
                      </div>

                    </TableCell>
                    <TableCell >
                      <input className="counter" type="number" id="Boxers" name="Boxers" onChange={(e) => { change(e) }} />
                    </TableCell>
                    <TableCell >
                      <div className="imgdiv">
                        <div><img id="Washing 17" src={color[16] ? wash : wash1} alt="Wash" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Pressing 18" src={color[17] ? iron : iron1} alt="Press" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Folding 19" src={color[18] ? towel : towel1} alt="Fold" onClick={(e) => { selectaction(e) }} /></div>
                        <div><img id="Chemical-washing 20" src={color[19] ? bleach : bleach1} alt="Pack" onClick={(e) => { selectaction(e) }} /></div>
                      </div>
                    </TableCell>
                    <TableCell><button type="submit" className="btn4" id="4" onClick={(e) => { calculate(e) }}>{expression[4]}</button></TableCell>
                    <TableCell >
                      {reset ? <button type="submit" className="btn3" id="4" onClick={(e) => { resetbutton(e) }}>reset</button> : null}
                    </TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </TableContainer>

            <div className="cancelPro">
              <Button  onClick={()=> navigate("./PastOrders")} >Cancel</Button>
              <Button className="bt2" onClick={handleOpen}>Proceed</Button>
            </div>
            {/* -------------Modal box 1------------- */}
            <Modal
              open={open}
              onClose={handleClose}
              aria-labelledby="modal-modal-title"
              aria-describedby="modal-modal-description"
            >
              <Box sx={style}>
                <Typography id="modal-modal-title" variant="h6" component="h2">
                  <div className="heading" >Summary</div>
                </Typography>
                <div className="store">
                  <div className='storeloc location'>Store Location<br />Jp Nagar</div>
                  <div className='storeadd location'>Store Address<br />Near phone booth, 10th road</div>
                  <div className='storephone location'>Phone<br />91 97856123356</div>
                </div>
                <div className='details'>
                  <small className='orderdetails'>Order details</small>
                  {product.map((prod, index) =>
                    <div className='eachitems' key={index}><div className='solo1'>{prod.name}</div>
                      <div className='solo2'>{prod.actions.map(action => <i>{action},</i>)}</div>
                      <div className='solo3'>{prod.quantity} X {parseInt(prod.price / prod.quantity)} = <b Style="color:#5861AE">{prod.price}</b> </div> <hr></hr> </div>)}
                       <div className="totalPrice">
                       <div className='subtotal'>Sub total: <b className='numbers'>{product.reduce((acc,curr)=> acc+parseInt(curr.price),0)-90}</b></div>
                  <div className='charges' >Pickup charges: <b className='numbers'>90</b></div>
                  <div className='total' Style="padding-top: 13px;"><b className='final'>Total:   Rs {product.reduce((acc, curr) => acc + parseInt(curr.price), 0)}</b></div>
                       </div>
                </div>
                <div className='addressbar'><small className='orderdetails'>Address</small>
                  <div className='address1'>
                    <b className='numbers'>Home</b><br />
                    #223, 10th road, Jp Nagar,
                    Bangalore
                  </div>
                </div>
                <div className="footer"><Button onClick={Create}>Confirm</Button></div>
              </Box>
            </Modal>
            {/*-------------- Modal box 2 -------------*/}
            <Modal
              open={value}
              onClose={confirmClose}
              
            >
              <Box sx={style2}  >
                <Typography className="confirmheader" >
                <FontAwesomeIcon className='checkicon' icon={faCircleCheck} />
                <h3>Your order is <br/>successfully.</h3>
                <h4>You can track the delivery in the<br/> "Orders" section.</h4>
                </Typography>
                
                 <div className="gottoOrder"><Link to="./PastOrders">Go to orders</Link></div>
              </Box>
            </Modal>



          </div>

          <div>
          </div>
        </div>
      </div>

    </div>
  );
}
export default CreateOrders