import React,{useEffect,useState} from "react";
import { Jumbotron,Container, Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, NavItem, NavLink,Badge} from "reactstrap";
import {Link,withRouter} from "react-router-dom";
import { withAuthorization } from "../SessionManagement";
import { withFirebase } from "../Firebase";
import AdminAddCourse from "../AdminAddCourse";
import MenuIcon from '@material-ui/icons/Menu';
import * as ROUTES from "../../constants/routes";


const AdminDashboard = (props) =>
{
 const [quoteOfTheDay, setQuoteOfTheDay] = useState("");
const [navOpen, setNavOpen] = useState(false);

    const switchNav = () => {
        setNavOpen(!navOpen);
    }

    useEffect(() => {
    fetch("https://api.quotable.io/random").then(response => response.json()).then((data) => {
        setQuoteOfTheDay(data)
    }
  );
        return (() => {
          setQuoteOfTheDay({})
        })
    },[])

    return (
        <div className = "container adminDashboardContainer">
   
        <Jumbotron fluid>
        <Container fluid>
          <p className="lead">{quoteOfTheDay.content}  -  {quoteOfTheDay.author}</p>
        </Container>
      </Jumbotron>

      <div className = "container">
      <div className = "row">
      <div className = "col" sm = {12} md = {6}>
      </div>
      <div className = "col" sm = {12} md ={6}>
       <h3>Recent Activities</h3>
      </div>
      </div>
      </div>
      </div>
    );

  
    }

const condition = signedInUser => !!signedInUser;
export default withRouter(withFirebase(withAuthorization(condition)(AdminDashboard)));