import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import './allarticlehome.css';
import { withRouter,Link,useLocation,useParams } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Button, Badge,
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,CardDeck,CardHeader, CardFooter
} from 'reactstrap';
import { Icon, InlineIcon } from '@iconify/react';
import playCircleFilled from '@iconify/icons-ant-design/play-circle-filled';



import { withFirebase } from "../Firebase";


export const ArticleHomePreview = (props)=>{
  const [courses, setCourses] = useState([])
  const db = props.firebase.db;

  useEffect(() => {
      ReactGA.initialize('UA-198309082-1')
      ReactGA.pageview(window.location.pathname + window.location.search);
      console.log("Hello world, I am called and I am course page for users");
 var allCourses = [];
 db.collection("Project").limit(4).get().then(querySnapshot => {
     querySnapshot.forEach((doc) => {
          allCourses.push({...doc.data(), id : doc.id});
     })
  setCourses(allCourses);
 }).catch((error) => {
     alert("Some error occured! Contact admin" + error);
     console.log(error);
 })
  }, [])

    return(
    <div className="subTopicContainer">
    <div className="container">
                               
        
        <div>
        <div className="head-all-p"> Latest Projects <a href={'/projects'}  className="viewall">View All</a></div>
        <div></div>
        
        </div>
        <br/>
        <div >
       <div className="row">
        
         { courses.map( a_course => {
            return (
        <div className="col-12 col-md-6 col-lg-3 " key = {a_course.id}>
        
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
        <br/>
        </div>
        )
        })}
        
        </div>  
                
         </div>
        </div> 
        <br/>
    </div>
    
    )
};

export default withFirebase(withRouter(ArticleHomePreview));