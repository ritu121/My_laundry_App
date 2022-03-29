import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import { AppBar, Box, Toolbar, Typography } from '@material-ui/core';
import "./styles/comp.css"
const useStyles = makeStyles({
    root: {
        flexGrow: 1,
    },
    abRoot: {
        backgroundColor: "white",
        color: "black"
    },
    tabs: {
        float: 'right',
        color: " #4552C1",
        padding: '20px'

    },
    sname: {
        // textalign:' ',
        // font: 'normal normal medium 32px/60px Avenir',
        // letterspacing:' 1.28px',
        // color:' #4552C1',
        // text-transform: 'uppercase',
        // opacity: 1,
        textAlign: "left",
        color: ' white',
        backgroundColor: '#5861AE'

    },
    flextab: {
        display: 'flex'
    },
    sname2: {
        color: "#4552C1",
        fontWeight: '700',
        fontSize: 25,
    }
});
function Header() {
    const classes = useStyles();
    return (
            <div className={classes.root}>
                <Box sx={{ flexGrow: 1 }} >
                    <AppBar position="static" classes={{ root: classes.abRoot, positionStatic: classes.abStatic }}>
                        <Toolbar>
                            <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                                <span className="colortext">LAUNDRY</span>
                            </Typography>
                            <div className='tabs'>

                                <div className={clsx(classes.tabs, classes.sname)} >SignIn</div>
                                <div className={classes.tabs} >Career</div>
                                <div className={classes.tabs} >Pricing</div>
                                <div className={classes.tabs} >Home</div>
                            </div>
                        </Toolbar>
                    </AppBar>
                </Box>
            </div>
           
        )
}

export default Header;