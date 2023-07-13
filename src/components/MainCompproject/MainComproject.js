import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import { withRouter,Route,useLocation } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import ReactReadMoreReadLess from "react-read-more-read-less";

import { Card, Button,Row,Col,Container,Jumbotron } from 'react-bootstrap';
import { Icon, InlineIcon } from '@iconify/react';
import penIcon from '@iconify/icons-emojione/pen';
import playCircleFilled from '@iconify/icons-ant-design/play-circle-filled';

import { withFirebase } from "../Firebase";


const MainComproject = (props) =>
{
    const [courses, setCourses] = useState([])
    const db = props.firebase.db;

    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log("Hello world, I am called and I am course page for users");
   var allCourses = [];
   db.collection("Project").limit(3).get().then(querySnapshot => {
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
     <div>
        <div className="head-all-p"> Latest Projects <a href={'/projects'}  className="viewall">View All</a></div>
        <div></div>
        
        </div>
     
      
    
      {/*<CourseNav/>*/}
      
        <hr/>
       
      <br/>
     
       <div>
       <div className="row">
        
       
       {courses.map((a_course) => (
        <Col md={4}>
        <div key={a_course.id}>
          <Card className='Card'>
            <Card.Img variant="top" src={a_course.primaryImg} />
            <Card.Body>
              <Card.Title>{a_course.projectName}</Card.Title>
              <Card.Text className='card-shortdesc'>{a_course.shortDesc}</Card.Text>
              <a href={'/projects/'+a_course.id} ><Button
                variant="primary"
                
              >
                View More
              </Button></a>
            </Card.Body>
          </Card>
        </div>
        </Col>
        
      ))}
        
        </div>  


                
         </div>

         {/*Mobile View cards*/ }

      

         
        
      <br/>
      
      </div> 
      <br/> 
    </div>  
    );
}

export default withFirebase(withRouter(MainComproject));