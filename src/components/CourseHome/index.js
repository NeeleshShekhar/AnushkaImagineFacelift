import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import './courseHome.css';
import { withRouter,Route,useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Button, CardGroup} from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,CardDeck,CardHeader
} from 'reactstrap';
import CourseNav from '../CourseNav';
import { withFirebase } from "../Firebase";
import { WhereToVote } from '@material-ui/icons';
import courseimage from '../../Images/courseimage.jpg';
import { Carousel } from 'react-responsive-carousel';
import ReactHover, {Hover } from "react-hover";

const CourseHome = (props) =>
{
    const [courses, setCourses] = useState([])
    const db = props.firebase.db;

    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log("Hello world, I am called and I am course page for users");
   var allCourses = [];
   db.collection("courses").where("isPublished","==",true).get().then(querySnapshot => {
       querySnapshot.forEach((doc) => {
            allCourses.push({...doc.data(), id : doc.id});
       })
    setCourses(allCourses);
   }).catch((error) => {
       alert("Some error occured! Contact admin" + error);
   })
    }, [])

    

    return (
 <div>
 <br/>
     <div className="container main-body">
        <div className=" row course-header">
          <div className="col-12 col-md-12 col-lg-8 head-back">
        <h2 className="course-header-title">Its time to learn!</h2>
    
        <h5 className="course-header-content" style={{fontWeight:'10px'}}>Browse through all these exciting courses in multiple domains to stengthen your intellect.</h5>
        <h5 className="course-header-content">SkilWil provides a platform which exposes an individual to brainstorming contests which enables them to explore, assess and deepen their depth of knowledge.</h5>
    
    
    </div>
    </div> 
     
      <br/>
    
      {/*<CourseNav/>*/}
      <br/>
        <hr/>
       
      <br/>
      
       <div>
       <div className="row">
        
       
         { courses.map( a_course => {
            return (
        
        <div className="col-12 col-md-6 col-lg-3 " key = {a_course.id}>
        <a href={'/courses/'+a_course.id} target="_self" style={{textDecoration:"none"}}>
        <Card id = {a_course.id} onClick = {()=>this.goToSubtopic(a_course.courseName)} className="card-course">
        <CardImg className="card-course-img" top width="100%" src={a_course.imgUrl} alt="Ques2" ></CardImg>
        <CardTitle className="card-course-title">{a_course.courseName}</CardTitle>
        <CardBody className="card-course-body">
          <CardText>
          {a_course.courseDescription}
            <br/>
            

          <p className="card-author">Author :{a_course.createdBy} </p>
          </CardText>
        </CardBody>
        </Card>
        
        <br/></a>
        </div>
        )
        })}
        
        </div>  


                
         </div>

         {/*Mobile View cards*/ }

      

         
        
      <br/>
      
      </div> 
      <br/> 
    </div>  
    );
}

export default withFirebase(withRouter(CourseHome));