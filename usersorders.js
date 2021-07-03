import React, {Component} from 'react';
import {Link} from 'react-router-dom';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { TextField, Grid, Container } from '@material-ui/core';
import NavBar from './navbar';
import image1 from './../images/top4.jpg';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import firebase from './../../firebase script';

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



const Orderplaced = () => {
  const classes = useStyles();
  const bull = <span className=""></span>;
  const [open, setOpen] = React.useState(false);


  firebase.firestore().collection("Order").onSnapshot(function(query){
    var total = '';
    query.forEach(function(docc){
        var a = '';
          a = "<div class='col-lg-12'><div class='col-lg-3'><img src='"+docc.data().image+"' class='img-responsive'></div><div class='col-lg-5'>"+docc.data().Name+"<br>"+docc.data().Brand+"<br>"+docc.data().Product_type+"<br>Amount "+docc.data().Selling_Price+" X "+docc.data().quantity+" = "+docc.data().Selling_Price*docc.data().quantity+"</div><div class='col-lg-4'>Order On<br>"+docc.data().Datetime.toDate().toDateString()+"</div></div>";
          total += a;
      })
      document.getElementById('box').innerHTML = total;
    })
  



  return (
    <div className="blockbg">
    
     <NavBar />

     <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} /> 
     <Container>
    <Grid container className="">



    <Grid item xs={9} className="padding1">
    <Card className="shopping">
    <Grid container>

    <Grid item xs={12}>
    <hr />
    <div className="amazon">

    <Typography className="flip">My Orders</Typography>
    </div>
    </Grid>
        <div id='box'></div>


    </Grid>
    </Card>
   </Grid>
   </Grid>


   
  </Container>
  </main>
    </div>
  );
}

export default Orderplaced;