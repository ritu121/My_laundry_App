import React from 'react'
import { Grid } from '@material-ui/core';
import "./styles/comp.css"
function FooterPartOne() {
    return (
        <div className='footerpart'>
            <Grid container className='center refer'>
                <Grid item xs={12}>
                    <div className='colortext footerh1'>Now Refer & Earn ₹500 for every referral*</div>
                    <div className='terms'>* Terms and conditions will be applied</div>
                </Grid>
            </Grid>
            <Grid container className='center '>
                <Grid item xs={4}>
                    <h2>ABOUT US</h2>
                    <h4>Doorstep Wash & Dryclean Service</h4>
                </Grid>
                <Grid item xs={1}>
                    <h3>Home</h3>
                    <h4>Sign In</h4>
                    <h4>Register</h4>
                </Grid>
                <Grid item xs={1}>
                    <h3>Pricing</h3>
                </Grid>
                <Grid item xs={1}>
                    <h3>Career</h3>
                    <h4>Blogs</h4>
                    <h4>Create</h4>
                </Grid>
                <Grid item xs={1}>
                    <h3>Contact</h3>
                </Grid>
                <Grid item xs={4}>
                    <h2>SOCIAL MEDIA</h2>
                    <div className='icons'>
                        <div className='fb'></div>
                        <div className='insta'></div>
                        <div className='lkd'></div>
                    </div>
                </Grid>
            </Grid>
        </div>
    )
}
export default FooterPartOne;