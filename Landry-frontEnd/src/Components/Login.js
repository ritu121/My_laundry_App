import React, {useState} from 'react'
import { makeStyles } from '@material-ui/core/styles';
// import clsx from 'clsx';
import{Grid,TextField,Button} from '@material-ui/core';
import {useNavigate} from "react-router-dom"

import { faLock } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Ref from './Ref'

import "./styles/comp.css"
const useStyles = makeStyles({
  
  sname:{
    textAlign:"left",
    color:'white !important' ,
    backgroundColor:'#5861AE'

},
  sname2:{
    color:"#4552C1",
    fontWeight:'700',
    fontSize:25,
    marginTop:'3rem'
  }
});

function Registration() {
  const navigate = useNavigate();

  const [email,setEmail]=useState('')
  const [password,setPassword]=useState('')

  const loginUser=async(event)=>{
    event.preventDefault();
    const response=await fetch('https://laundryapplication10x.herokuapp.com/login',{
      method:'POST',
      headers:{  
        "Content-Type":'application/json',
      },
      body:JSON.stringify({email,password}),   
    })
    const data =await response.json()  
    if (data.user){
      localStorage.setItem('token',data.user)
      alert('Login Successful')
      navigate('/orders')
    }else{
      alert('wrong User Credentials')
    }
  }

  const classes = useStyles();
  return (
    <div>
      <Grid container>
          <Grid item xs={6}> 
              <div className="floatleft" >
                <div className="leftpart colortext">Laundry Service</div>
                <div className='mt'>Doorstep Wash & Dryclean Service</div><br/>
                <div className='mt'>Don't Have An Account?</div><br/>
                {/* <Button variant="outlined">Register</Button> */}
                <Button variant="outlined" size="medium" className='btn2' onClick={()=>navigate("/register")}> Register</Button>
              </div>  
          </Grid>
          <Grid item xs={6} className='rightSignIn'>
              <Grid >
              <div className={classes.sname2}>Sign In</div>
              <TextField id="standard-basic" label="Mobile/Email" variant="standard" value={email} onChange={(e)=> setEmail(e.target.value)}/><br/>
              <div id="error masg"></div>
              <br></br>
              <div className='pass'>
              <TextField id="outlined-password-input" label="Password" type="password" value={password} 
              onChange={(e)=> setPassword(e.target.value)} />
              
              <div className='lockicon'><FontAwesomeIcon icon={faLock}/></div>
              </div>
              
              
          <div className="colortext">Forget Password?</div>
          <br></br>
          <Button className={classes.sname} onClick={loginUser} >Sign In</Button>
              </Grid>
          </Grid>
        </Grid>
        <Ref/>
    </div>
    

  )
}

export default Registration