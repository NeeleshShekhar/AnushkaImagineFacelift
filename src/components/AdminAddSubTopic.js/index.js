import React from "react";
import {Button,Modal, ModalHeader, ModalBody, ModalFooter, Form,FormGroup,Label,Input} from "reactstrap";

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
        console.log(validatedData.message + " " + validatedData.hasErrors);
        if(!validatedData.hasErrors)
        { 
            alert("Wow! Topic Created");
            props.addSubTopicToCourse(props.topicDetails);

        }
        else
        props.setTopicDetails({...props.topicDetails, error : validatedData.message})
    }
    const editTopic = (event) =>
    {
         event.preventDefault();
        const validatedData = validate();
        if(!validatedData.hasErrors)
        { 
            alert("Topic modified");
            console.log(props.topicDetails);
        props.setTopic(props.topics.map(eachTopic => {
            if(props.topicDetails.topicName === eachTopic.topicName)
                {
                    eachTopic.topicName = props.topicDetails.topicName;
                    eachTopic.topicDescription = props.topicDetails.topicDescription;
                }
            return eachTopic;
        }))
            console.log(props.topics)

        }
        else
        props.setTopicDetails({...props.topicDetails, error : validatedData.message})
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
        {  props.topicDetails.error &&  <p style = {{color : 'red', textAlign : 'center'}}> <br/> {props.topicDetails.error}</p>}
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

export default AdminAddSubTopic;