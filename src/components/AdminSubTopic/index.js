import React, {useState,useEffect} from 'react';
import {Button, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,CardHeader, CardFooter} from "reactstrap";
import {withRouter} from "react-router-dom";
import AdminAddSubTopic from '../AdminAddSubTopic.js';
import * as ROUTES from '../../constants/routes'

const AdminSubTopic = (props) => {
    
    useEffect(() => {

    },[])
    const courseDetails = props.location.state.courseDetails;
    const ADD_SUBTOPIC_STATE = {topicName : "", topicDescription : "", blogId : null, courseId : courseDetails.courseId, error : ""}
    const STATE_BLOG = {topicModal : false, mode : ""}
    const [topicDetails,setTopicDetails] = useState(ADD_SUBTOPIC_STATE);
    const [addOrEditTopic, setaddOrEditTopic] = useState(STATE_BLOG);
    const [topics, setTopic] = useState([])

    useEffect(() => {

    },topics);
    const addSubTopicToCourse = (topic) =>
    {
        setTopic(topics.concat(topic))
    }
    const addNewSubTopic = () => {
       setaddOrEditTopic({topicModal : !addOrEditTopic.topicModal, mode : "ADD_SUB_TOPIC"})
    }
    const editBlog = () => {
        setaddOrEditTopic({topicModal : !addOrEditTopic.topicModal, mode : "EDIT_SUB_TOPIC"})
    }
    const writeBlog = () => {

        props.history.push({pathname : ROUTES.ADMIN_WRITE_ARTICLE, state: {...topicDetails, ...courseDetails}});
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
                           <>
                         <Card>
        <CardHeader>{courseDetails.courseName}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{topicInCourse.topicName}</CardTitle>
          <CardText>{topicInCourse.topicDescription}</CardText>
        </CardBody>
        <CardFooter>
        <Button onClick = {editBlog}>Edit</Button>{' '}
        <Button>Delete</Button> {' '}
        <Button onClick = {writeBlog}>Write</Button>
        </CardFooter>
         </Card>
         <br/>
         </>
                       )
                   } ) }
        </CardDeck>
            </div>

        </p>

       { addOrEditTopic.topicModal && <AdminAddSubTopic topicDetails = {topicDetails} setTopicDetails = {setTopicDetails} addOrEditTopic = {addOrEditTopic} setaddOrEditTopic = {setaddOrEditTopic} topics = {topics} addSubTopicToCourse = {addSubTopicToCourse} setTopic = {setTopic}/>}
    </div>
  
    );
}

export default withRouter(AdminSubTopic);