import React from "react";
import { withFirebase } from "../Firebase";
import {Button,Modal, ModalHeader, ModalBody, ModalFooter, Form,FormGroup,Label,Input} from "reactstrap";
import { withAuthorization } from "../SessionManagement";

const AdminAddSubTopic = (props) => {
    const onChange = (event) => {
        props.setTopicDetails({...props.topicDetails,[event.target.name] : event.target.value})
    }
    const toggle = () =>
    {
        props.setaddOrEditTopic({...props.addOrEditTopic.mode , topicModal : !props.addOrEditTopic.topicModal})
    }
    const addTopic = (event) =>
    {
        event.preventDefault();
        const validatedData = validate();
        if(!validatedData.hasErrors)
        { 
          const id = props.firebase.subTopics().doc().id;
          const DATA_TO_BE_ADDED = {
              "topicName" : props.topicDetails.topicName,
              "topicDescription" : props.topicDetails.topicDescription,
              "courseIdentifier" : props.topicDetails.courseIdentifier,
              "lastUpdatedBy" : null,
              "blog" : null,
              "isDraft" : false,
              "courseName" : props.topicDetails.courseName
            
          }
            props.firebase.db.collection("subTopics").doc(id).set(DATA_TO_BE_ADDED).then (() => 
            {
                props.addSubTopicToCourse({id : id, ...props.topicDetails});
            }
            ).catch(error => {
                  alert("Some error occured ! Contact your administration");
            })
            toggle();
        }
        else
        props.setTopicDetails({...props.topicDetails, errorTopic : validatedData.message})
     
    }
    const editTopic = (event) =>
    {
         event.preventDefault();
        const validatedData = validate();
        if(!validatedData.hasErrors)
        { 
        props.firebase.subTopic(props.topicDetails.topicKey).update(
            {
                "topicName" : props.topicDetails.topicName,
                "topicDescription" : props.topicDetails.topicDescription
            }
        ).then(() => {
            props.setTopic(props.topics.map(eachTopic => {
            if(props.topicDetails.topicKey === eachTopic.id)
                {
                    eachTopic.topicName = props.topicDetails.topicName;
                    eachTopic.topicDescription = props.topicDetails.topicDescription;
                }
            return eachTopic;
        }))    
        }).catch(error => {
            alert("Some error occurred! Contact your administrator")
        })
        toggle();
        }
        else
        props.setTopicDetails({...props.topicDetails, errorTopic : validatedData.message})
    }
     const validate = () =>
    {
         let message = ""
        //For CourseName
        if(!props.topicDetails.topicName)
        message = "Topic Name cannot be blank"
        else if(!props.topicDetails.topicDescription)
        message = "Topic Description cannot be blank. Please provide some important details on what this course is all about"
        const validationData = {'hasErrors' : message, 'message' : message};
        
        return validationData;
    }
    return (
        <Modal className = "addTopicModal" isOpen={true} toggle={toggle} backdrop = {false}>
        <ModalHeader toggle={toggle}>Add a SubTopic to course</ModalHeader>
        {  props.topicDetails.errorTopic &&  <p style = {{color : 'red', textAlign : 'center'}}> <br/> {props.topicDetails.errorTopic}</p>}
        <ModalBody>
        <Form>
       <FormGroup>
        <Label for="topicName">Topic Name</Label>
        <Input type="text" value = {props.topicDetails.topicName}  onChange = {onChange}  name="topicName" id="topicName" placeholder="Enter topic name"/>
      </FormGroup>
      <FormGroup>
        <Label for="topicDescription">Topic Description</Label>
        <Input type="textarea" value = {props.topicDetails.topicDescription}  onChange = {onChange} name="topicDescription" id="topicDescription"  placeholder = "Enter few lines about the topic"/>
      </FormGroup>
        </Form>
        </ModalBody>
        <ModalFooter>
        {props.addOrEditTopic.mode === 'ADD_SUB_TOPIC' && <Button onClick = {addTopic} color = "primary">ADD</Button>}
        {props.addOrEditTopic.mode === 'EDIT_SUB_TOPIC' && <Button onClick = {editTopic}  color = "primary">Modify</Button>}
          
          {' '} <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    );
}

const condition = signedInUser => !!signedInUser;
export default withFirebase(withAuthorization(condition)(AdminAddSubTopic));