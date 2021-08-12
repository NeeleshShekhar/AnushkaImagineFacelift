import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import './subtopic.css';
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


const Subtopic = (props)=>{
    const parameters = useParams();
   
    const [subtopics, setsubtopics] = useState([])
    // console.log("the id is: "+subid);
    useEffect(() => {
        const subid = parameters.id;
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log("Hello world, I am called and I am course/subtopic page for users");
   var allSubtopic = [];
   props.firebase.db.collection("subTopics").where("isPublished","==",true).where("courseIdentifier","==",subid.trim()).get().then(querySnapshot => {
       querySnapshot.forEach( (doc) => {
        allSubtopic.push({...doc.data(), id : doc.id});
       })
     setsubtopics(allSubtopic);  
   
   }).catch((error) => {
       alert("Some error occured! Contact admin"+error);
   })
    },[])

    return(
    <div className="subTopicContainer">
    <div className=" container ">
        <br/>
       <div className="row">
            <div className="col-12 col-md-12 col-lg-7 subtopic-head-image">
            <div className="subtopic-image-body">
            <div className="subtopic-head-title">
            <Badge color="primary" style={{ backgroundColor: 'rgb(0, 35, 63)', color: 'aliceblue', fontSize : '14px',
                                padding:'1%'
                                 }}>  {subtopics && subtopics.length > 0 && subtopics[0].subject}</Badge>
                <h1>
                 {subtopics && subtopics.length > 0 && subtopics[0].courseName}  
                </h1>
                <h6>{subtopics && subtopics.length > 0 && subtopics[0].courseDescription}</h6>
            </div>
            </div>
            </div>
            <div className="col-12 col-md-12 col-lg-5 notmobile">
                <div className="recent-main">
                    <div className="row recent-title">
                        <h6 className="recent-heading"></h6>
                    </div>
                </div>
            </div>
        </div>
        <br/>
        <br/>
        <div >
       <div className="row">
        
         { subtopics.map( a_course => {
            return (
        <div className="col-12 col-md-6 col-lg-3 " key = {a_course.id}>
        
        <Card id = {a_course.id} className="card-course">
        <CardImg className="card-course-img" top width="100%" src={a_course.topicImgUrl} alt="Ques2" ></CardImg>
        <CardTitle className="card-course-title">{a_course.topicName}</CardTitle>
        <CardBody className="card-course-body">
          <CardText><ReactReadMoreReadLess 
          charLimit={100}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
          >{a_course.topicDescription}</ReactReadMoreReadLess>
          
            <br/>
          </CardText>
        </CardBody>
        <CardFooter className="card-author"><a href={'/blogs/'+a_course.id}  style={{textDecoration:"none"}}><Button className="openSubtopcic"><Icon icon={playCircleFilled} style={{color: '#083e4f', fontSize: '27px'}} /> {' '} Start</Button></a></CardFooter>
        
        </Card>
        <br/>
        </div>
        )
        })}
        
        </div>  


                
         </div>
        </div> 
    </div>
    
    )
};

export default withFirebase(withRouter(Subtopic));