import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import educard from '../../Images/educard.svg';
import artcard from '../../Images/artcard.svg';
import { withRouter } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { Jumbotron,Container, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, NavItem, NavLink,Badge} from "reactstrap";
import './oops.css';
import error from '../../Images/error.svg';
import MainComponent from '../MainComponent';


const Oops = (props) =>
{    const [quoteOfTheDay, setQuoteOfTheDay] = useState("");
    
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    
        fetch("https://api.quotable.io/random").then(response => response.json()).then((data) => {
            setQuoteOfTheDay(data)
        }
      );
            return (() => {
              setQuoteOfTheDay({})
            })
        },[])

    return (
 <div className="subTopicContainer">
 <br/>
     <div className="container">
        <div className="row">
            <div className="col-12 col-lg-5 col-md-12">
            <h1 className="head-text phone-head-text"> Some <br/>Error <br/> Occured  </h1> <hr/>
            <div fluid>
            <h1 className="quote-head">Quote of the Day</h1>
          <p className="lead">{quoteOfTheDay.content}  -  {quoteOfTheDay.author}</p><hr/>
          <p className="lead">Go to <a href="/">Home Page </a></p>
            </div>
            </div>
            <div className="col-12 col-lg-7 col-md-12 head-left hide-mobile">
           <img src={error} className="image-head" width="90%" alt="error image"/>
            </div>
        </div>

        <h1 className="also_search">View our projects</h1>

        <a href = "/projects" style = {{cursor:'pointer'}}>Course Section</a>

    </div>
 </div>   
    );
}

export default withRouter(Oops);