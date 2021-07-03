
import clsx from 'clsx';
import React, { useEffect, useState } from 'react';

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
import firebase from './../../firebase script';
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';

import {Table, TableCell, TableHead,TableRow,TableBody,TableContainer} from '@material-ui/core';

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



const Sellerslist =()=>{
   const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

const [users, setUsers] = useState([]);

    const Register = firebase.firestore().collection("Register");
   

    

  function getUsers(){
      Register.onSnapshot((querySnapshot) => {
        const item = [];
        querySnapshot.forEach((doc) =>{
          item.push(doc);
        })
        setUsers(item);
      })
    }

  
  function deleteUser(x) {
    Register.doc(x).delete().then(function(success){
      alert('yes');
    }).catch(function(error){
      alert('no');
    })
  }



   useEffect(() => {
      getUsers();
    }, []);


  return(
      <div className="bg">
      <NavBar />

      <main
        className={clsx(classes.content, {
          [classes.contentShift]: open,
        })}
      >
        <div className={classes.drawerHeader} /> 

        <Grid container  spacing={0} className="Gridd1">
     <Grid item xs={12} >
           <TableContainer component={Paper} className="ps">
      <Table className="" aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Email</TableCell>
            <TableCell align="left">Password</TableCell>
            <TableCell align="left">Contact</TableCell>
            <TableCell align="left">Edit</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.map((userss) => (  
            <TableRow key={users.name}>
              
              <TableCell align="left">{userss.data().Name}</TableCell>
              <TableCell align="left">{userss.data().Email}</TableCell>
              <TableCell align="left">{userss.data().Password}</TableCell>
              <TableCell align="left">{userss.data().Contact}</TableCell>
              <TableCell align="left"><Button onClick={() => deleteUser(userss.id)}><DeleteIcon /></Button></TableCell>
              <TableCell align="left"><Button ><EditIcon /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
        </Grid>
    </Grid>



      
       </main>
       </div>
    );
}

   
export default Sellerslist;