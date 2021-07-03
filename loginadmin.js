import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import {TextField,Link} from '@material-ui/core';
import firebase from './../../firebase script';



const Loginadmin =() => {
  const [users, setUsers] = useState([]);
  const Admin = firebase.firestore().collection("admin");
 
  function getUsers(){
    Admin.onSnapshot((querySnapshot) => {
      const item = [];
      querySnapshot.forEach((doc) =>{
        item.push(doc);
      })
      setUsers(item);
    })
  }

   useEffect(() =>{
    getUsers();
   }, []);

   function Submitlogin(){

    let email = document.getElementById('UserId').value;
    let password = document.getElementById('Password').value;

    if(email == '')
    {
      alert('Please Fill Email');
      document.getElementById("UserId").focus();
    }else if(password == ''){
      alert('Please Fill Password');
      document.getElementById("Password").focus();
    }else{

    Admin.where("Email","==",email).where("Password","==",password).get().then(function(querySnapshot){
      if(querySnapshot.size == 0){
        alert('Wrong Email and Password');
      }
      querySnapshot.forEach(function(docc){
        if (docc.exists) {
          window.location.href='/Dashboard';        
        }else{
          alert('Wrong Email and Password');
        }
      })
    })
  }
}

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

  const classes = useStyles();
  const bull = <span className="">•</span>;

  return (
  	<div className="loginadmin">
    <Card className="loginbg">
      <CardContent>
      
        <Typography className="root2" color="textSecondary" gutterBottom>
          Admin Login form
        </Typography>
        </CardContent>
         <form className="" noValidate autoComplete="off">
         <CardContent>
      <TextField className="TextField" id="UserId" label="Admin Id" />
      </CardContent>
       <CardContent>
      <TextField className="TextField" id="Password" label="Password" />
      </CardContent>
      <CardContent>
        <Button onClick={Submitlogin} className="btnadminlogin" variant="contained" color="primary">Login</Button>
      </CardContent>
      
    </form>
    </Card>
    </div>
  );
}

export default Loginadmin;