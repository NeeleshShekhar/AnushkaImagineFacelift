import React, {useEffect,useState} from 'react';
import ReactGA from "react-ga";
import './ArticleView.css';

import { withRouter,useLocation,useParams } from 'react-router-dom';
import * as ROUTES from '../../constants/routes';
import { withFirebase } from "../Firebase";

import { Carousel } from 'react-responsive-carousel';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Breadcrumbs from '@material-ui/core/Breadcrumbs';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import GrainIcon from '@material-ui/icons/Grain';
import Link from '@material-ui/core/Link';
import { FontAwesomeIcon } from 'fontawesome'; 
import { Icon, InlineIcon } from '@iconify/react';
import penIcon from '@iconify/icons-emojione/pen';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';


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
      const whatsappIconClicked = () => {
        ReactGA.event({
            category: 'Social',
            action: 'User shared on Whatsapp from Footer!'
        })
    }
    return (
        <div className="subTopicContainer ">
             
            <div className=" container blue">
                <Breadcrumbs className="bread">
      <Link  className="bread-link" href="/courses" >
        <HomeIcon className={classes.icon} />
        Home
      </Link>
      <Link
        
        href={"/courses/"+subTopic.courseIdentifier}
      > 
        <WhatshotIcon className={classes.icon} />
        {subTopic.courseName}
      </Link>
      <Typography  className={classes.link}>
        <GrainIcon className={classes.icon} />
        Blog
      </Typography>
    </Breadcrumbs></div>
            <div style = {{fontFamily:'Ubuntu', fontSize:'300%', fontWeight:'bold'}} className="center articleHead container">{subTopic.topicName}</div>
            
            <div  className = "lead container author">{subTopic.courseDescription}</div>
            <div className="container author"><h6 className="name"><Icon icon={penIcon} style={{fontSize: '20px'}} /> <i>{subTopic.lastUpdatedBy}</i></h6></div>
           <div className="container author"> <div class="social"><a href={"whatsapp://send?text= https://www.skilwil.com/courses Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards. Also, ask your subject doubts for free."}><WhatsAppIcon onClick={whatsappIconClicked} style={{ fontSize: "35px" }} /></a></div></div>
     <div><div style = {{fontFamily : 'Festive'}}  className = "   ql-editor testEditor viewArticle container center test-image" 
           dangerouslySetInnerHTML={{__html : blog.blogContent}}>
               
           </div>
           <hr />
           <h5 className="container author" >Contribute us at <a href="https://www.buymeacoffee.com/skilwil.com"> Buy me a coffee!</a></h5></div>
           
          
           

          
        </div>
        
    )
}

export default withFirebase(withRouter(ArticleView));