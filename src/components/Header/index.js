import React, { useEffect } from "react";
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, NavItem, NavLink, Jumbotron } from 'reactstrap';
import { withRouter } from 'react-router-dom';
import ReactGA from "react-ga";
import * as ROUTES from '../../constants/routes';

function Header(props) {
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
    <>
        <Jumbotron style = {{ marginTop: '2px' }} >
        <div className = "container text-lg-left head" >
        <div className = "row" >
        <div className = "col-lg-8  head-content" >
        <h2 style = {{ color: 'white' }} > Earn while you Learn! < br / > Win Rewards!(Upto INR 50, 000) </h2> 
        <br/>
        <p className = "lead" style = {
            { color: 'white' }
        } > <span style = {{ color: '#96D2FF', fontWeight: 'bold' }}> SkilWil </span> provides a platform which exposes an individual to brainstorming contests which enables them to explore, assess and deepen their depth of knowledge. </p>
        <span>
        <Button className = "earnButton" onClick = { earnNowClicked } outline > Earn Now! </Button>
        <p style = {{ color: '#D2ECFF' }} > No sign up required! </p> </span> 
        </div>
        </div> 
        </div>
        </Jumbotron> 
        </>
    );

}
export default withRouter(Header);