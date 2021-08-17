import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import './allarticle.css';
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


const AllArticle = (props)=>{
    const parameters = useParams();
   
    const [subtopics, setsubtopics] = useState([])
    // console.log("the id is: "+subid);
    useEffect(() => {
        const subid = parameters.id;
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log("Hello world, I am called and I am course/subtopic page for users");
   var allSubtopic = [];
   props.firebase.db.collection("subTopics").where("isPublished","==",true).get().then(querySnapshot => {
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
        <div className="head-all">Articles</div>
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

export default withFirebase(withRouter(AllArticle));