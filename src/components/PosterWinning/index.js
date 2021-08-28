import React, { useEffect,useRef,useState } from "react";
import { Nav, Navbar, Badge, NavbarBrand, NavbarToggler, Collapse, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
import ReactGA from "react-ga";
import * as ROUTES from '../../constants/routes';
import { withFirebase } from '../Firebase';
import { withRouter } from "react-router-dom";
import './posterwinning.css';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import first from '../../Images/first.png'
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import adeeba from '../../Images/Adeeba.png';
import pooja from '../../Images/Pooja.png';
import shayaru from '../../Images/shayaru.png';
import anushka from '../../Images/anushka.png';
import jump from '../../Images/jump.png';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';





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
  function createData(name, calories, fat, carbs, protein) {
    return { name, calories, fat, carbs, protein };
  }
  const rows = [
    createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
    createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
    createData('Eclair', 262, 16.0, 24, 6.0),
    createData('Cupcake', 305, 3.7, 67, 4.3),
    createData('Gingerbread', 356, 16.0, 49, 3.9),
  ];
const PosterMaking = (props) => {
   
    const [openModal, toggleModal] = useState(false);
    // const instance = useRef(null);
     const classes = useStyles();
  const bull = <span className={classes.bullet}>•</span>;
    
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
         ReactGA.pageview(window.location.pathname + window.location.search);
        //  const scriptTag = document.createElement("script");
        //  scriptTag.setAttribute("src", "https://checkout.razorpay.com/v1/payment-button.js");
        //  scriptTag.setAttribute("data-payment_button_id", "pl_HfWSUdSA8wTUcs")
        //  scriptTag.setAttribute("async",true);
        //  instance.current.appendChild(scriptTag);
        
    },[])

    let url="https://drive.google.com/file/d/1Cwk25SVzCPGCpBnrbBYrWVVmM4JEUGn0/view";
 
   
     return (
    <div className="container subTopicContainer">
       
        {/* <h2 className="poster-head1">Independence Day</h2>
         <h1 className="poster-head-2">Poster Making Competition</h1>
         <hr/>
       
        <div>*/} 

<div className=" row win-header">
          <div className="col-12 col-md-12 col-lg-8 head-back">
          <div className="win-head-1">
            Winners List
        </div>
    
        
        <h5 className="course-header-content">SkilWil provides a platform which exposes an individual to brainstorming contests which enables them to explore, assess and deepen their depth of knowledge.</h5>
    
    
    </div>
    </div> 
        <br />
        <div className="row">
        <div className="col-12 col-md-12 col-lg-3 card-winner"> 
        <Card className="card-back" style={{background:'#51c5df'}}>
            <CardContent>
                <div className="row">
                <div className="col-3 col-md-3 col-lg-3">
                <div className="icon-1">
                <div className="icon-2">
      	          1
                  </div>
                </div>
                </div>

                <div className="col-9 col-md-9 col-lg-9 win-title-card">
                    Adeeba Sayyed
                </div>

                </div>
               
      </CardContent>
      <CardActions>
      <a href="https://drive.google.com/file/d/1HYsXhlFO7-i7MemSIPNNjJDPM7fReTsw/view" target ="_blank"><img src={adeeba} width="100%" className="card-disp-image"/></a>
      
      </CardActions>
    </Card >
    </div>   
    <div className="col-12 col-md-12 col-lg-3 card-winner">
    <Card className="card-back" style={{background:'#edd2ff'}}>
            <CardContent>
                <div className="row">
                <div className="col-3 col-md-2 col-lg-3">
                <div className="icon-1">
                <div className="icon-2">
      	          2
                  </div>
                </div>
      
                </div>

                <div className="col-9 col-md-10 col-lg-9 win-title-card">
                    Pooja Gupta
                </div>

                </div>
               
      </CardContent>
      <CardActions>
      <a href ="https://drive.google.com/file/d/1u7fb-F8ManSR2RmZZFfC5Sh4NSnD9vMI/view" target ="_blank"><img src={pooja}  width="100%" className="card-disp-image card-disp-image-mobile"/></a>
      </CardActions>
    </Card>
    </div>
        <div className="col-12 col-md-12 col-lg-3 card-winner">
        <Card className="card-back" style={{background:'#a7c3ff'}}>
            <CardContent>
                <div className="row">
                <div className="col-3 col-md-2 col-lg-3">
                <div className="icon-1">
                <div className="icon-2">
      	          3
                  </div>
                </div>
      
                </div>

                <div className="col-9 col-md-10 col-lg-9 win-title-card">
                    Sharayu Kadam
                </div>

                </div>
               
      </CardContent>
      <CardActions>
      <a href="https://drive.google.com/file/d/1NSEdym5u49H25qGBXAoJYPUIqTmmn5LQ/view" target ="_blank"><img src={shayaru}  width="100%" className="card-disp-image card-disp-image-mobile"/></a>
      </CardActions>
    </Card>
    </div>

    <div className="col-12 col-md-12 col-lg-3 card-winner">
        <Card className="card-back" style={{background:'#63e0f7'}}>
            <CardContent>
                <div className="row">
                <div className="col-3 col-md-2 col-lg-3">
                <div className="icon-1">
                <div className="icon-2">
      	          3
                  </div>
                </div>
      
                </div>

                <div className="col-9 col-md-10 col-lg-9 win-title-card">
                Arya pandey
                </div>

                </div>
               
      </CardContent>
      <CardActions>
      <a href ="https://drive.google.com/file/d/1Cwk25SVzCPGCpBnrbBYrWVVmM4JEUGn0/view" target ="_blank"><img src={anushka}  width="100%" className="card-disp-image card-disp-image-mobile"/> </a>
      </CardActions>
    </Card>
    </div>
    </div>

    <div className="row">
      <div className="col-12 col-md-12 col-lg-8" >
      <TableContainer component={Paper}>
      <Table className={classes.table} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>S. No</TableCell>
            <TableCell align="right">Name </TableCell>
            <TableCell align="right">Entry</TableCell>
            <TableCell align="right">College</TableCell>
            
          </TableRow>
        </TableHead>
        <TableBody>
            <TableRow >
              
              <TableCell align="right">1</TableCell>
              <TableCell align="right">Jagruti Chandramohan Ahire</TableCell>
              <TableCell align="right"><a href ="https://drive.google.com/file/d/1sol_7W2j7TekYgZhOUPO9QpRMSaGFyoQ/view" target="_blank">Click</a></TableCell>
              <TableCell align="right">V. E. S College of Arts Science And Commerce</TableCell>
            </TableRow>
            <TableRow >
              
              <TableCell align="right">2</TableCell>
              <TableCell align="right">Pooja jagatlal Gupta</TableCell>
              <TableCell align="right"><a href ="https://drive.google.com/file/d/1u7fb-F8ManSR2RmZZFfC5Sh4NSnD9vMI/view" target="_blank">Click</a></TableCell>
              <TableCell align="right">Ves college</TableCell>
            </TableRow>
            <TableRow >
              
              <TableCell align="right">3</TableCell>
              <TableCell align="right">Adeeba Akhlaque Sayyed</TableCell>
              <TableCell align="right"><a href ="https://drive.google.com/file/d/1HYsXhlFO7-i7MemSIPNNjJDPM7fReTsw/view" target="_blank">Click</a></TableCell>
              <TableCell align="right">None</TableCell>
            </TableRow>
            
            <TableRow >
              
              <TableCell align="right">4</TableCell>
              <TableCell align="right">Divya Kumari Harendra Prasad Prajapati</TableCell>
              <TableCell align="right"><a href ="https://drive.google.com/file/d/1sRzjkUtM5cTs4BEZvA9rX5nN6Z7ypOs1/view" target="_blank">Click</a></TableCell>
              <TableCell align="right">Vivekanand Education Society of Arts, Science and Commerce</TableCell>
            </TableRow>
            <TableRow >
              
              <TableCell align="right">5</TableCell>
              <TableCell align="right">Babita gupta</TableCell>
              <TableCell align="right"><a href ="https://drive.google.com/file/d/16CFxG3cFgfONn-AEmPKhXn6QQtfCO4vx/view" target="_blank">Click</a></TableCell>
              <TableCell align="right">Ves</TableCell>
            </TableRow>
            <TableRow >
              
              <TableCell align="right">6</TableCell>
              <TableCell align="right">Sharayu kadam</TableCell>
              <TableCell align="right"><a href ="https://drive.google.com/file/d/1NSEdym5u49H25qGBXAoJYPUIqTmmn5LQ/view" target="_blank">Click</a></TableCell>
              <TableCell align="right">NES Ratnam</TableCell>
            </TableRow>
            <TableRow >
              
              <TableCell align="right">7</TableCell>
              <TableCell align="right">Arya pandey</TableCell>
              <TableCell align="right"><a href ="https://drive.google.com/file/d/1Cwk25SVzCPGCpBnrbBYrWVVmM4JEUGn0/view" target="_blank">Click</a></TableCell>
              <TableCell align="right">Little flower school, gida gorakhpur</TableCell>
            </TableRow>

          
        </TableBody>
      </Table>
    </TableContainer>
    <br />
   </div> 
   <div className="col-12 col-md-12 col-lg-4 hide-mobile"><img src={jump} width="100%" className="card-disp-image"/></div>
   </div>
   </div>  
   
     )};

     export default withRouter(withFirebase(PosterMaking));
