import React, { useEffect, useState } from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';

import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';


import { makeStyles, useTheme } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Modal from '@material-ui/core/Modal';
import NavBar from './navbar';

import firebase from './../../firebase script';

import {Button,Grid,CardContent,TextField,Table,TableBody,TableCell,TableRow,TableContainer,Paper,TableHead}
 from '@material-ui/core';


const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    width: theme.spacing(7) + 1,
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(9) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    // necessary for content to be below app bar
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(2),
    

  },
    paper: {
    position: 'absolute',
    width: 400,
    backgroundColor: theme.palette.background.paper,
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),

  },
    table: {
    minWidth: 650,
  },


}));

const Products =() => {
  const classes = useStyles();

    const Products = firebase.firestore().collection("Products");

    function Submitlist(){
  // alert('hi');
  let catid = document.getElementById('catid').value;
  let subcatid = document.getElementById('subcatid').value;
  let name = document.getElementById('name').value;
  let brand = document.getElementById('brand').value;
  let qty = document.getElementById('qty').value;
  let type = document.getElementById('type').value;
  let detail = document.getElementById('detail').value;
  let mrp = document.getElementById('mrp').value;
  let price = document.getElementById('price').value;
  let description = document.getElementById('description').value;
  let sellerid = document.getElementById('sellerid').value;
  let stock = document.getElementById('stock').value;
  let datetime = document.getElementById('datetime').value;
  Products.add({
    Cat_id:catid,
    Sub_Cat_id:subcatid,
    Name:name,
    Brand:brand,
    Qty:qty,
    Product_type:type,
    Product_detail:detail,
    MRP:mrp,
    Selling_Price:price,
    Description:description,
    Seller_id:sellerid,
    Stock:stock,
    Datetime:datetime,
    
  }).then(function(success){
    alert('yes');
  }).catch(function(error){
    alert('No');
  })
}
const [products, setProducts] = useState([]);

  function getUsers(){
      Products.onSnapshot((querySnapshot) => {
        const item = [];
        querySnapshot.forEach((doc) =>{
          item.push(doc);
          console.log(doc.data().Name)
        })
        setProducts(item);
      })
  }

  
  function deleteUser(x) {
  Products.doc(x).delete().then(function(success){
      alert('yes');
    }).catch(function(error){
      alert('no');
    })
  }



   useEffect(() => {
      getUsers();
    }, []);


  
  return(

    <div className="body1">
    <div className={classes.root}>
    <NavBar />
    

<main className={classes.content}>
        <div className={classes.toolbar} />
        
<Link Button variant='outlined' className='black' color='primary' to='addproductform'>
    Add Product
</Link>
      <Grid container  spacing={0} className="Gridd1">
     <Grid item xs={12} >
           <TableContainer component={Paper} className="ps">
      <Table className="" aria-label="simple table">
        <TableHead >
          <TableRow>
            <TableCell align="left">Name</TableCell>
            <TableCell align="left">Brand</TableCell>
            <TableCell align="left">Type</TableCell>
            <TableCell align="left">Detail</TableCell>
            <TableCell align="left">Description</TableCell>
            <TableCell align="left">MRP</TableCell>
            <TableCell align="left">Price</TableCell>
            <TableCell align="left">Qty</TableCell>
            <TableCell align="left">Delete</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {products.map((pro) => (  
            <TableRow key={pro.id}>
              <TableCell align="left">{pro.data().Name}</TableCell>
              <TableCell align="left">{pro.data().Brand}</TableCell>
              <TableCell align="left">{pro.data().Product_type}</TableCell>
              <TableCell align="left">{pro.data().Product_detail}</TableCell>
              <TableCell align="left">{pro.data().Description}</TableCell>
              <TableCell align="left">{pro.data().MRP}</TableCell>
              <TableCell align="left">{pro.data().Selling_Price}</TableCell>
              <TableCell align="left">{pro.data().Qty}</TableCell>
              <TableCell align="left"><Button onClick={() => deleteUser(pro.id)}><DeleteIcon /></Button></TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
   
        </Grid>
    </Grid>




      </main>
    </div>
    </div>
    )
}
export default Products;