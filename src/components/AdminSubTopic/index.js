import React, {useState,useEffect} from 'react';
import {Button, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,CardHeader, CardFooter} from "reactstrap";
import {withRouter} from "react-router-dom";
import AdminAddSubTopic from '../AdminAddSubTopic.js';
import { withFirebase } from '../Firebase/context.js';
import { withAuthorization } from "../SessionManagement";
import * as ROUTES from '../../constants/routes'
import { FormatListNumberedRtlOutlined } from '@material-ui/icons';

const AdminSubTopic = (props) => {
    const courseDetails = JSON.parse(props.location.state.courseDetails);
    const ADD_SUBTOPIC_STATE = {topicKey : "", topicName : "", topicDescription : "", blogId : null, courseIdentifier : courseDetails.id, errorTopic : "",isDraft : false, courseName: "",topicImgUrl:""}
    const STATE_BLOG = {topicModal : false, mode : ""}
    const [topicDetails,setTopicDetails] = useState(ADD_SUBTOPIC_STATE);
    const [addOrEditTopic, setaddOrEditTopic] = useState(STATE_BLOG);
    const [topics, setTopic] = useState([])

    useEffect(() => {
       
        var allTopics = [];
        props.firebase.subTopics().where("courseIdentifier","==",courseDetails.id).get().then(docs => {
            docs.forEach((doc) => {
                allTopics.push({id : doc.id, ...doc.data()})
            })
          setTopic(allTopics);
        }
            ).catch(error => {
                alert("Some error occured ! Contact your administration");
            });
    },[]);
    const addSubTopicToCourse = (topic) =>
    {
        setTopic(topics.concat(topic))
    }
    const addNewSubTopic = () => {

       setaddOrEditTopic({topicModal : !addOrEditTopic.topicModal, mode : "ADD_SUB_TOPIC"})
 
    }
    const editTopic = (event) => {
        props.firebase.subTopic(event.target.id).get().then(doc => {
            setTopicDetails({...doc.data(),topicKey:doc.id});
        }).catch(error => {
            alert("Some error occured! Contact your administrator");
        })
        setaddOrEditTopic({topicModal : !addOrEditTopic.topicModal, mode : "EDIT_SUB_TOPIC"})
    }
    const getBlog = async (event) =>
    {
        let DATA = {}
        await props.firebase.db.collection("subTopics").doc(event.target.id).get().then(doc => {
              DATA = doc.data();
          }).catch(error => {
              alert(error + "Occured in getBlog");
          })
        return await DATA;
    }

    const sendToOtherPage = async (event) =>
    {
    const DATA = await getBlog(event).then((data) => {
        return data;
    }
    );
    if(!DATA.blog){
        const blogId = await props.firebase.db.collection("blogs").doc().id;
        await props.firebase.db.collection("subTopics").doc(event.target.id).update({
                    "blog" : await blogId,
         }).then(() => {
             alert("New blog created !"); 
             DATA.blog = blogId;
        }).then(() => { 
        }).catch(() => {
             alert("Something went wrong! Please contact your admin.")
         })
       } 
       
       return await function temp (){
           props.history.push({pathname : ROUTES.ADMIN_WRITE_ARTICLE, state: {topicId : event.target.id,...DATA, ...courseDetails}}); 
       };
    }
    const writeBlog = async (event) => {
         sendToOtherPage(event).then((temp) => {
            temp();
         })
    }
    return(
    <div className = "container subTopicContainer">
    <div className = "row">
        <p>Course Details : </p>
        <ul>
        <li>Course Name : {courseDetails.courseName}</li>
        <li>Course Id : {courseDetails.courseId} </li>
        <li>Course Subject : {courseDetails.subject} </li>
        <li>Course Description : {courseDetails.courseDescription} </li>
        </ul>
<div></div></div>
        <Button color = "primary" onClick = {addNewSubTopic}> Add new SubTopic</Button>
        <br/>
        <br/>
        <p>
            The SubTopics in the course are : 
        </p>
            <br/>
            <br/>
            <div className = "row">
                
                   { topics.map( topicInCourse => {
                       return (
        <div className="col-12 col-lg-4 col-md-6" key = {topicInCourse.id}>
        <Card >
        <CardImg src = {topicInCourse.topicImgUrl} />
        <CardHeader>{courseDetails.courseName}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{topicInCourse.topicName}</CardTitle>
          <CardText>{topicInCourse.topicDescription}</CardText>
        </CardBody>
        <CardFooter>
        <Button id = {topicInCourse.id} onClick = {editTopic}>Edit</Button>{' '}
        <Button id = {topicInCourse.id} onClick = {writeBlog}>Write</Button>
        </CardFooter>
         </Card>
         <br/>
         </div>
                       )
                   } ) }
        
            </div>

       { addOrEditTopic.topicModal && <AdminAddSubTopic topicDetails = {{...topicDetails, ...courseDetails}} setTopicDetails = {setTopicDetails} addOrEditTopic = {addOrEditTopic} setaddOrEditTopic = {setaddOrEditTopic} topics = {topics} addSubTopicToCourse = {addSubTopicToCourse} setTopic = {setTopic}/>}
    </div>
  
    );
}

const condition = signedInUser => !!signedInUser;
export default withFirebase(withRouter(withAuthorization(condition)(AdminSubTopic)));