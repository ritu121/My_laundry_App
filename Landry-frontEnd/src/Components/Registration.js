import React, { useState } from 'react'
import { Grid, TextField, Button, Checkbox } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import "./styles/comp.css"

import { useNavigate } from "react-router-dom"

import Ref from "./Ref"
const useStyles = makeStyles({

  sname: {
    textAlign: "left",
    color: ' white !important',
    backgroundColor: '#5861AE'

  }

});
function Registration() {




  const navigate = useNavigate();

  const [name, setName] = useState("")
  const [phone, setPhone] = useState("")
  const [district, setDistrict] = useState("")
  const [pincode, setPin] = useState("")
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  const [state, setState] = useState("")
  const [address, setAddress] = useState("")

  const handleChange = async (event) => {
    event.preventDefault()

    const response = await fetch('https://laundryapplication10x.herokuapp.com/register', {
      method: "POST",
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name, email, password, state, phone, district, address, pincode
      }),
    })
    const data = await response.json()
    if (data.status === "OK") {
      alert('register successfully')
      navigate('/login')

    }

  }



  const classes = useStyles();
  return (
   <div>
      <Grid container>
      <Grid item xs={4}>
        <div className="floatleft2" >
          <div className="leftpart-1 colortext">Laundry Service</div>
          <div className='lg-1'>Doorstep Wash & Dryclean Service</div><br />
          <br /><br />
          <div className='lg'>Already Have Account?</div><br></br>
          <Button variant="outlined" size="medium" className='btn2' onClick={() => navigate("/login")}> Sign In</Button>
        </div>
      </Grid>
      <Grid item xs={8} className='rightSignIn'>
        <Grid >

          <div className='regFields'>
            <Grid item xs={6} className='col1'>
              <div className='sname3'>Register</div>
              <TextField id="standard-basic1" label="Name" variant="standard" name="name" value={name} onChange={(e) => setName(e.target.value)} /><br />
              <TextField label="Phone Number" name="phoneno" value={phone} onChange={(e) => setPhone(e.target.value)} variant="standard" />
              <TextField label="District" name="district" value={district} onChange={(e) => setDistrict(e.target.value)} variant="standard" />
              <TextField label="Pin Code" variant="standard" value={pincode} onChange={(e) => setPin(e.target.value)} name="pincode" />

            </Grid>
            <Grid item xs={6} className='col2' >
              <TextField id="standard-basic2" label="Email" variant="standard" name="email" value={email} onChange={(e) => setEmail(e.target.value)} />
              <TextField id="outlined-password-input" label="Password" type="password" autoComplete="current-password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} />
              <TextField label="State" variant="standard" name="state" value={state} onChange={(e) => setState(e.target.value)} />
              <TextField label="Address" variant="standard" name="address" value={address} onChange={(e) => setAddress(e.target.value)} />
            </Grid>
          </div>

          <div className='chek'>
            <Checkbox />I agree to Terms & Condition receiving marketing and promotional materials.
          </div>

          <div className="RegBtn">
            <Button className={classes.sname} onClick={handleChange} >Register</Button>
          </div>
        </Grid>
      </Grid>
    </Grid>
    <Ref/>
   </div>
  )
}

export default Registration  