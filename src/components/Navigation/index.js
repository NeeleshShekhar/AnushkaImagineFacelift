import React,{useEffect,useState} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, NavItem, NavLink, Jumbotron } from 'reactstrap';
import { Dropdown, DropdownMenu, DropdownToggle } from 'reactstrap';
import { Badge } from 'reactstrap';
import './nav.css';

import MenuIcon from '@material-ui/icons/Menu';
import { withRouter,Link} from "react-router-dom";
import ReactGA from "react-ga";
import * as ROUTES from "../../constants/routes";
import { withFirebase } from "../Firebase";
import { SignedInUserContext } from "../SessionManagement";
import { withAuthentication  } from "../SessionManagement";
import logo from '../../Assets/logo.png';
const Navigation = (props) =>
{

    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const [navOpen, setNavOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    const switchNav = () => {
        setNavOpen(!navOpen);
    }

    const toggleDropdown = () => setDropdownOpen(!dropdownOpen);

    const doubtClearingClicked = () => {

        ReactGA.event({
            category: 'Navigation',
            action: 'User clicked on doubt clearing !'
        })
    }

    const earnNowClicked = () => {
        ReactGA.event({
            category: 'Button',
            action: 'User clicked on Earn now'
        })
    }
    const courseClicked = () => {
        ReactGA.event({
            category: 'Button',
            action: 'User clicked on courses now'
        })
    }
    const articleClicked = () => {
        ReactGA.event({
            category: 'Button',
            action: 'User clicked on artices now'
        })
    }

    const smrcRegistrationClicked = () =>
    {
        ReactGA.event({
            category: 'Navigation',
            action: 'User clicked on SMRC Registration'
        })
    }

     const signOutAdmin = () =>
    {
      props.firebase.signOutUser().then(() =>
      {
        alert("You have signed out. Thank you")
      }
      ).catch( (error) => {
          console.log(error);
      })
    }
 const AdminNavbar = () => {
    return ( <>
                            {/* <NavItem >
                                <Link className="nav-link" to={ROUTES.SMRC} onClick={switchNav} > <Badge color="primary" style={{ backgroundColor: 'yellow', color : 'black', fontSize : '14px',
                                paddingTop:'2px'
                                 }}> Latest News </Badge> </Link>
                                 
                            </NavItem> */}
                               <NavItem onClick={switchNav}>
                                <Link  className="nav-link" to={ROUTES.ADMIN_DASHBOARD} > Dashboard </Link>
                            </NavItem>
                                <NavItem onClick={switchNav}>
                                <Link  className="nav-link" to={ROUTES.ADMIN_COURSES} > Admin Courses </Link>
                            </NavItem>
                            <NavItem  onClick={switchNav}>
                                <Link className="nav-link" to = {ROUTES.DRAFT_COURSE} >Drafts</Link>
                            </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" onClick = {signOutAdmin} >Sign Out</NavLink>
                                </NavItem>
                
                           </> );
    }
   
    return(
        <>
        
        <Navbar  sticky={'top'} nav-fill expand="md" className="nav-back" >
                    <div className="container">
                        <NavbarBrand className="mr-auto logo" href="/" > <span className="logo-nav">Anushka Imagine</span></NavbarBrand>
                        <NavbarToggler 
                        style = {{outline : 'none'}}
                        onClick={switchNav} 
                        className = "mr-2" >
                        <MenuIcon style = {{fontSize : "30px"}}/>
                        </NavbarToggler>
                        <Collapse navbar isOpen = {navOpen} >
                            <Nav navbar className = "justify-content-end " style = {{width :'100%'}}>
                            <NavItem onClick = {smrcRegistrationClicked}>
                                <NavLink onClick = {toggleDropdown}> <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} size = "sm">
                                <DropdownToggle
                                    tag="span"
                                    data-toggle="dropdown"
                                    aria-expanded={dropdownOpen}
                                >
                                Events
                                </DropdownToggle>
                                <DropdownMenu className="nav-dropdown">
                                <Link className="nav-dropdown-text" to={ROUTES.POSTER} onClick={switchNav} > Poster Making </Link>
                                <Link className="nav-dropdown-text" to={ROUTES.SMRC} onClick={switchNav} > SMRC-VESASC </Link>
                                
                                </DropdownMenu>
                                </Dropdown></NavLink>
                            </NavItem>
                                <NavItem onClick={doubtClearingClicked}>
                                <NavLink  onClick={switchNav} className="nav-link" href = "https://forms.gle/2GyMKybVWRX5h2sF6" > Doubt Clearing <Badge color = "primary" style = {{backgroundColor : 'red'}}>FREE</Badge> </NavLink>
                            </NavItem>

                           
                            <NavItem onClick = {earnNowClicked}>
                                <Link className="nav-link" to = {ROUTES.EARN} onClick={switchNav} >Compete</Link>
                            </NavItem>
                            <NavItem onClick = {courseClicked}>
                                <Link className="nav-link" to = {ROUTES.COURSEHOME} onClick={switchNav} >Courses</Link>
                            </NavItem>
                            <NavItem onClick = {articleClicked}>
                                <Link className="nav-link" to = {ROUTES.ALLARTICLE} onClick={switchNav} >Articles</Link>
                            </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" onClick={switchNav}  href= "https://forms.gle/vcXEqv1QAg5QsGiTA" >Contact us</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink onClick={switchNav} className="nav-link" href = "/#contribute">Contribute</NavLink>
                                </NavItem>
                                  <SignedInUserContext.Consumer>
                                    { signedInUser => signedInUser &&  <AdminNavbar/>  } 
                                  </SignedInUserContext.Consumer>
                              
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        
        </>   
    );
    
   
}

export default withFirebase(Navigation);