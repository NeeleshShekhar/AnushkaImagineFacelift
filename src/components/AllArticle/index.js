import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import './allarticle.css';
import { withRouter,Link,useLocation,useParams } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import ReactReadMoreReadLess from "react-read-more-read-less";
import {Button, Badge, Jumbotron,
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
    <div className="container">
    <Jumbotron style = {{ marginTop: '2px' }} >
        <div className = "container text-lg-left header-all" >
        <div className = "row" >
        <div className = "col-lg-8  header-content-all" >
        <h1 className="head-all">Articles</h1>
        <br/>
        <p className = "lead" style = {
            { color: 'white' }
        } > <span style = {{ color:'#01324e', fontWeight: 'bold' }}> SkilWil </span> provides a platform which exposes an individual to brainstorming contests which enables them to explore, assess and deepen their depth of knowledge. </p>
        
        </div>
        </div> 
        </div>
        </Jumbotron>                       
        <br/>
        
        <br/>
        <div >
       <div className="row">
        
         { subtopics.map( a_course => {
            return (
        <div className="col-12 col-md-6 col-lg-3 " key = {a_course.id}>
        
        <Card id = {a_course.id} className="card-course-all">
        <CardImg className="card-course-img-all" top width="100%" src={a_course.topicImgUrl} alt="Ques2" ></CardImg>
        <CardTitle className="card-course-title-all">{a_course.topicName}</CardTitle>
        <CardBody className="card-course-body-all">
          <CardText><ReactReadMoreReadLess 
          charLimit={100}
          readMoreText={"Read more ▼"}
          readLessText={"Read less ▲"}
          >{a_course.topicDescription}</ReactReadMoreReadLess>
          
            <br/>
          </CardText>
        </CardBody>
        <div className="card-author-all">
          <a href={'/blogs/'+a_course.id}  style={{textDecoration:"none"}}>
            <div className="openSubtopcic-all"><Icon icon={playCircleFilled} style={{fontSize: '27px'}} /> {' '} Preview</div>
            </a>
            </div >
        
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