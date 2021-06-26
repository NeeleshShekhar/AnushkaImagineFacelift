import React, { useEffect } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, NavItem, NavLink, Jumbotron } from 'reactstrap';
import ReactGA from "react-ga";
import * as ROUTES from '../../constants/routes';
import smrc1 from '../../Images/smrc1.png';
import { LaptopWindowsTwoTone } from "@material-ui/icons";



const SMRC = (props) => {
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const earnNowClicked = () => {
        ReactGA.event({
            category: 'Button',
            action: 'User clicked on Earn now'
        })
    
        props.history.push(ROUTES.EARN);
    }
    return ( 
    <div className = "smrc">
         <br / >
         <div className="container ">
        <div className="row">
        <div className="col-lg-7 col-sm-12">
        <h1 className="smrc-head1">SMRC</h1>
        <h2 style={{color:"#064c5f"}}>Skilwil Mathematics Reward Contest </h2>
        <div className="smrc-content">A splendid annual quiz contest – Previously known as M³, 
        which signifies a competition for the title of Math Muscle Man, 
        is an hour long Math quiz contest organized by the department of VESAC.
        
        </div>
        <div className="button-smrc">
        <a  href="https://docs.google.com/forms/d/e/1FAIpQLScnbl6zGfoUPCTIexdjc5r_xzJRsiCET37RWHSS4nWiEB55Ug/viewform?usp=sf_link" target="_blank"><Button className = "Register-smrchome"  outline style={{marginLeft:"2px"}}> Register for SMRC </Button>
        </a></div></div>
        <div className="col-lg-5  col-sm-12">
        <img src={smrc1} className="imagetop" alt="Marketing"/>
        </div>
        </div>
        </div>
        <br/>
   </div>

    );
}

export default SMRC;