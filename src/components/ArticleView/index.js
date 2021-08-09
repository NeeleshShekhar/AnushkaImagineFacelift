import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import './ArticleView.css';

import { withRouter,useLocation,useParams } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import {Button, CardGroup,Badge} from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody,CardDeck,CardHeader
} from 'reactstrap';
import CourseNav from '../CourseNav';
import courseimage from '../../Images/courseimage.jpg';
import { withFirebase } from "../Firebase";
import { TrendingUpRounded, WhereToVote } from '@material-ui/icons';
import subtopicfirst from '../../Images/subtopic1.jpg';
import insta from '../../Images/instagram.png';
import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Link from '@material-ui/core/Link';


const ArticleView = (props)=>{
    const parameters = useParams();
    const subid = parameters.id;
    const [blog,setBlog] = useState([]);
    const [subTopic,setSubtopic] = useState([]);
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
        console.log("Hello world, I am called and I am course/subtopic page for users");
   props.firebase.db.collection("blogs").where("isPublished","==",true).where("subTopic","==",subid).get().then(querySnapshot => {
       querySnapshot.forEach( (doc) => {
        setBlog({...doc.data(),id : doc.id})
       })}).catch((error) => {
       alert("Some error occured! Contact admin:"+error);
   })
   props.firebase.db.collection("subTopics").doc(subid).get().then((doc1) => {
    if (doc1.exists) {
        console.log("Document data:", doc1.data());
        setSubtopic({...doc1.data(),id : doc1.id})

    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch((error) => {
    console.log("Error getting document:", error);
});

   
    }, []);
    const useStyles = makeStyles((theme) => ({
        link: {
          display: 'flex',
        },
        icon: {
          marginRight: theme.spacing(0.5),
          width: 20,
          height: 20,
        },
      }));
      const classes = useStyles();
    return (
        <div className="subTopicContainer ">
            
            <div className=" container blue">
                <Breadcrumbs aria-label="breadcrumb" className="bread">
      <Link  href="/courses" >
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      <Link
        
        href={"/courses/"+subTopic.courseIdentifier}
      >
        <WhatshotIcon className={classes.icon} />
        {subTopic.courseName}
      </Link>
      <Typography color="textPrimary" className={classes.link}>
        <GrainIcon className={classes.icon} />
        Blog
      </Typography>
    </Breadcrumbs></div>
            <div className="center articleHead container">{subTopic.topicName}</div><hr className="container" />
            <div className="container author"><h6 className="name">Author: <i>{subTopic.lastUpdatedBy}</i></h6></div>
     <div><div className = "   ql-editor testEditor viewArticle container center" 
           dangerouslySetInnerHTML={{__html : blog.blogContent}}>
               
           </div>
           <hr />
           <h5 className="container author" >Contribute us at <a href="https://www.buymeacoffee.com/skilwil.com"> Buy me a coffee!</a></h5></div>
           
          
           

          
        </div>
        
    )
}

export default withFirebase(withRouter(ArticleView));