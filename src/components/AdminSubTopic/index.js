import React, {useState,useEffect} from 'react';
import {Button, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,CardHeader, CardFooter} from "reactstrap";
import {withRouter} from "react-router-dom";
import AdminAddSubTopic from '../AdminAddSubTopic.js';
import { withFirebase } from '../Firebase/context.js';
import * as ROUTES from '../../constants/routes'

const AdminSubTopic = (props) => {

    const courseDetails = JSON.parse(props.location.state.courseDetails);
    const ADD_SUBTOPIC_STATE = {topicKey : "", topicName : "", topicDescription : "", blogId : null, courseId : courseDetails.id, error : "",isDraft : false}
    const STATE_BLOG = {topicModal : false, mode : ""}
    const [topicDetails,setTopicDetails] = useState(ADD_SUBTOPIC_STATE);
    const [addOrEditTopic, setaddOrEditTopic] = useState(STATE_BLOG);
    const [topics, setTopic] = useState([])

    useEffect(() => {
        var allTopics = [];
        props.firebase.subTopics().where("courseKey","==",courseDetails.id).get().then(docs => {
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
    const writeBlog = (event) => {
            console.log("Your id is" + event.target.id);
             props.firebase.subTopic(event.target.id).get().then(doc => {
                const DATA = doc.data()
            setTimeout(() => {
                if(!DATA.blog)
                {
                const blogId = props.firebase.blogs().doc().id;
                 props.firebase.subTopic(event.target.id).update({
                    "blog" : blogId,
                 }).then(() => {
                        alert("New blog created !" + blogId)
                 }).catch(() => {
                     alert("Something went wrong! Please contact your admin.")
                 })
                }
             props.history.push({pathname : ROUTES.ADMIN_WRITE_ARTICLE, state: {topicId : event.target.id,...DATA, ...courseDetails}});
             }, 1000);
        }).catch(error => {
            alert("Some error occured! Contact your administrator");
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
            <br/>
            <br/>
            <div className = "row">
                <CardDeck>
                   { topics.map( topicInCourse => {
                       return (
        <div key = {topicInCourse.id}>
        <Card >
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
        </CardDeck>
            </div>

        </p>

       { addOrEditTopic.topicModal && <AdminAddSubTopic topicDetails = {topicDetails} setTopicDetails = {setTopicDetails} addOrEditTopic = {addOrEditTopic} setaddOrEditTopic = {setaddOrEditTopic} topics = {topics} addSubTopicToCourse = {addSubTopicToCourse} setTopic = {setTopic}/>}
    </div>
  
    );
}

export default withFirebase(withRouter(AdminSubTopic));