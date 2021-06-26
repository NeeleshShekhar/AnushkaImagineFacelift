import React,{useEffect,useState} from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, NavItem, NavLink, Jumbotron } from 'reactstrap';
import { Badge } from 'reactstrap';
import MenuIcon from '@material-ui/icons/Menu';
import { withRouter,Link} from "react-router-dom";
import ReactGA from "react-ga";
import * as ROUTES from "../../constants/routes";

const Navigation = (props) =>
{

    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    const [navOpen, setNavOpen] = useState(false);

    const switchNav = () => {
        setNavOpen(!navOpen);
    }

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

    const smrcRegistrationClicked = () =>
    {
        ReactGA.event({
            category: 'Navigation',
            action: 'User clicked on SMRC Registration'
        })
    }
    return(
    <div>
        <Navbar  nav-fill expand="md" >
                    <div className="container">
                        <NavbarBrand className="mr-auto logo" href="/" ><span className="logo-nav">SkilWil</span></NavbarBrand>
                        <NavbarToggler 
                        style = {{outline : 'none'}}
                        onClick={switchNav} 
                        className = "mr-2" >
                        <MenuIcon style = {{fontSize : "30px"}}/>
                        </NavbarToggler>
                        <Collapse navbar isOpen = {navOpen} >
                            <Nav navbar className = "justify-content-end" style = {{width :'100%'}}>
                                
                            <NavItem onClick = {smrcRegistrationClicked}>
                                <Link className="nav-link" to={ROUTES.SMRC} onClick={switchNav} > <Badge color="primary" style={{ backgroundColor: '#DD571C', fontSize : '14px',
                                paddingTop:'2px'
                                 }}> Registration-SMRC </Badge> </Link>
                            </NavItem>

                                <NavItem onClick={doubtClearingClicked}>
                                <NavLink  onClick={switchNav} className="nav-link" href = "https://forms.gle/2GyMKybVWRX5h2sF6" > Doubt Clearing <Badge color = "primary" style = {{backgroundColor : 'red'}}>FREE</Badge> </NavLink>
                            </NavItem>

                           
                            <NavItem onClick = {earnNowClicked}>
                                <Link className="nav-link" to = {ROUTES.EARN} onClick={switchNav} >Earn</Link>
                            </NavItem>

                                <NavItem>
                                    <NavLink className="nav-link" onClick={switchNav}  href= "https://forms.gle/vcXEqv1QAg5QsGiTA" >Contact us</NavLink>
                                </NavItem>
                                <NavItem>
                                <NavLink onClick={switchNav} className="nav-link" href = "/#contribute">Contribute</NavLink>
                                </NavItem>
                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
        </div>      
    );
}

export default Navigation;