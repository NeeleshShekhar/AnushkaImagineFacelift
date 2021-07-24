import React,{useEffect,useState} from "react";
import { withAuthorization } from "../SessionManagement";
import {Button, Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,CardHeader, CardFooter} from "reactstrap";
import {withRouter} from "react-router-dom";
import { withFirebase } from '../Firebase/context.js';
import * as ROUTES from '../../constants/routes';
import AdminSubTopic from "../AdminSubTopic";

const AdminDraftCourse = (props) => {
    const [draftSubTopic,setDraftSubTopic] = useState([])
    useEffect(() => {
        var allSubTopics = []
        props.firebase.subTopics().where("isDraft", "==", true).get().then(docs => {
            docs.forEach(doc => {
                allSubTopics.push({id : doc.id, ...doc.data()})
            })
            setDraftSubTopic(allSubTopics);
        })
    },[]) 
    const writeBlog = (event) => {
        var topicData;
        props.firebase.subTopic(event.target.id).get().then(doc => {
            topicData = {...doc.data()};
            props.history.push({pathname : ROUTES.ADMIN_WRITE_ARTICLE, state: {topicId : event.target.id, ...topicData}});
        })
    }
    return (<>
    <div className = "container draftCourse">
    <h2>Drafts : </h2>
         <p>
            The SubTopics in the course are : 
        </p>
        <br/>
        <br/>
        <div className = "row">
        <CardDeck>
        { draftSubTopic.map( topicInCourse => {
        return (
        <div key = {topicInCourse.id}>
        <Card >
        <CardHeader>{topicInCourse.courseName}</CardHeader>
        <CardBody>
          <CardTitle tag="h5">{topicInCourse.topicName}</CardTitle>
          <CardText>{topicInCourse.topicDescription}
          <br/>
          Last Edited by : {topicInCourse.lastUpdatedBy}
          </CardText>
        </CardBody>
        <CardFooter>
        <Button id = {topicInCourse.id} onClick = {writeBlog}>Continue Writing</Button>
        </CardFooter>
         </Card>
         <br/>
         </div>
        ) } ) }
        </CardDeck>
            </div>
            </div>
    </>)
}

const condition = signedInUser => !!signedInUser;
export default withFirebase(withRouter(withAuthorization(condition)(AdminDraftCourse)));