import React, {Component} from 'react';
import clsx from 'clsx';

import { makeStyles, useTheme } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import { Typography ,TextField, Link, Grid, Paper } from '@material-ui/core';
import SettingsIcon from '@material-ui/icons/Settings';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import PersonIcon from '@material-ui/icons/Person';
import NavBar from './navbar';


const drawerWidth = 50;

const useStyles = makeStyles((theme) => ({
 
  
  drawerHeader: {
    display: 'flex',
    alignItems: 'center',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
    justifyContent: 'flex-end',
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(0),
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    marginLeft: -drawerWidth,
  },
  contentShift: {
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen,
    }),
    marginLeft: 0,
  },
}));



const Dashboard =()=>{
   const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);
  return(
      <div className="bg">
      <NavBar />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} /> 

      <p> Dashboard  </p>
       <Grid container spacing={2}>
         <Grid item xs={3}>
         <Grid className="Gridm" container spacing={0}>
         <Grid xs={4} className="iconp"><SettingsIcon className="icon" fontSize="large" /></Grid>
         <Grid xs={8} className="iconp"><p>CPU TRAFFIC </p><span>90%</span></Grid>
       </Grid>
       </Grid>
       <Grid item xs={3}>
       <Grid className="Gridm" container spacing={0}>
       <Grid xs={4} className="iconp"><ThumbUpIcon className="icon1" fontSize="large" /></Grid>
       <Grid xs={8} className="iconp"><p>LIKES</p><span>41,410</span> </Grid>
       </Grid>
       </Grid>
       <Grid item xs={3}>
        <Grid className="Gridm" container spacing={0}>
     <Grid xs={4} className="iconp"><ShoppingCartIcon className="icon2" fontSize="large" /></Grid>
       <Grid xs={8} className="iconp"><p>SALES </p><span>760</span> </Grid>
       </Grid>
       </Grid>
       <Grid item xs={3}>
       <Grid className="Gridm" container spacing={0}>
     <Grid xs={4} className="iconp"><PersonIcon className="icon3" fontSize="large" /></Grid>
       <Grid xs={8} className="iconp"><p>NEW MEMBERS </p><span>2,000</span> </Grid>
       </Grid>
       </Grid>
       </Grid>
       </main>
       </div>
    );
}

   
export default Dashboard;