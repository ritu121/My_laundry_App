

import React from 'react'

import "./Components/styles/comp.css"
import Order from './Components/Order';
import Header from './Components/Header';
import Login from './Components/Login';
import Registration from './Components/Registration';
import Footer from './Components/Footer';
import {BrowserRouter,Routes,Route} from "react-router-dom";
import CreateOrders from './Components/CreateOrders';
import PastOrders from './Components/PastOrders'


function App() {
  // const classes = useStyles();
  return ( 
    <>    
      <Header/>  
      <BrowserRouter>
      <Routes>
        <Route exact path="/" element={ <Login/>}/>
        <Route exact path="/login" element={ <Login/>}/>
        <Route exact path="/orders" element={<Order/>}/>
        <Route exact path="/register" element={<Registration/>}/>
        <Route exact path="/createOrders" element={<CreateOrders/>}/>
        <Route exact path="/createOrders/Pastorders" element={<PastOrders/>}/>
      </Routes>   
      </BrowserRouter>    
      <Footer/>
    </>
  )
}

export default App