import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form,FormGroup,Label,Input,Col } from 'reactstrap';
import {withRouter} from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from '../../constants/routes';
import { withAuthorization } from "../SessionManagement";
const AdminAddCourse = (props) => {

  const db = props.firebase.db;
    const toggle = () =>
    {
        props.setaddOrEditCourse({...props.addOrEditCourse, courseModal : !props.addOrEditCourse.courseModal})
    }
   
    const onChange = (event) => {
        props.setCourseDetails({...props.courseDetails,[event.target.name] : event.target.value})
    }
    const editCourse = (event) => {
        const validatedData = validate();
        if(!validatedData.hasErrors)
        { 
          props.firebase.course(props.courseDetails.courseKey).update(
            {
              courseName : props.courseDetails.courseName,
              courseDescription : props.courseDetails.courseDescription,
              subject : props.courseDetails.subject,
              imgUrl : props.courseDetails.imgUrl

            }
          ).then(() => {
            props.setCourses(props.courses.map(eachCourse => {
            if(props.courseDetails.courseKey === eachCourse.id)
                {
                    eachCourse.courseName = props.courseDetails.courseName;
                    eachCourse.courseDescription = props.courseDetails.courseDescription;
                    eachCourse.subject = props.courseDetails.subject;
                }

              return eachCourse;
        }))
        }).catch(error => {
          alert("Error Occured ! Contact your administrator");
        })
        toggle();
        }
        else
        props.setCourseDetails({...props.courseDetails, error : validatedData.message})
    }

    const addCourse = async (event) => {
        event.preventDefault();
        const validatedData = await validate();
        if(!validatedData.hasErrors)
        { 
         var userName; 
         await props.firebase.db.collection("users").doc(props.signedInUser.uid).get().then(user => {
          userName = user.data().name;
          const id = db.collection("courses").doc().id;
          const ref = db.collection("subject").doc(props.courseDetails.subject);
          const DATA_TO_BE_ADDED = {
            "projectName" : props.courseDetails.projectName,
            "projectId" : props.courseDetails.projectId,
            "projectDescription" : props.courseDetails.projectDescription,
            "subjectRef" : ref,
            "imgUrl" : props.courseDetails.imgUrl,
            "isPublished" : false,
            "isTrending" : false,
            "subject" : props.courseDetails.project,
            "ratings" : 1,
            "tags" : [],
            "createdAt": Date.now(),
            "createdBy" : userName
          }
          db.collection("courses").doc(id).set(DATA_TO_BE_ADDED).then(() => 
          {
            alert("Course has been created ");
            props.addCourse({...props.courseDetails,createdBy : userName, id : id});
            
          }).catch((error) =>
          {
            alert(error);
          })
           toggle();
          }).catch(error => {
            alert("Username cannot be fetched !" + error);
          })
        }
        else
        props.setCourseDetails({...props.courseDetails, error : validatedData.message})
      
    }
    

    const validate = async () =>
    {
         let message = ""
         //For CourseName
        if(!props.courseDetails.projectName)
         message = "Project Name cannot be blanked";
        else if(!props.courseDetails.projectDescription)
        message = "Project Description cannot be blank. Please provide some important details on what this Project is all about"
        
       
        return {"hasErrors" : message, "message" : message};
       
    }

    //    console.log(props.courseDetails.courseName + 
    //         " course sub =  " + props.courseDetails.subject + " course des =  " + props.courseDetails.courseDescription + "course Id=  " + props.courseDetails.courseId + " error " + props.courseDetails.error);
    return (
    <div>
      <Modal className = "addCourseModal" isOpen={true} toggle={toggle} backdrop = {false}>
        <ModalHeader toggle={toggle}>{props.addOrEditCourse.mode === "ADD_COURSE" ? "Add a Project" : "Edit Project"}</ModalHeader>
        {  props.courseDetails.error &&  <p style = {{color : 'red', textAlign : 'center'}}> <br/> {props.courseDetails.error}</p>}
        <ModalBody>
        <Form>
         <FormGroup>
        <Label for="project">Select Project Type</Label>
          <Input type="select" value = {props.courseDetails.project || "Residential"} onChange = {onChange} name="project" id="project">
            <option value = "Residential">Residential</option>
            <option value = "Commercial">Commercial</option>
            <option value = "Social">Social</option>
            <option value = "Landscape">Landscape</option>
          </Input>
      </FormGroup>
       { props.addOrEditCourse.mode === "ADD_COURSE" && <FormGroup>
        <Label for="projectId">Project Id</Label>
        <Input type="text" value = {props.courseDetails.projectId}  onChange = {onChange} name="projectId" id="projectId" placeholder="Enter projectId"/>
      </FormGroup>}
       <FormGroup>
        <Label for="projectName">Project Name</Label>
        <Input type="text" value = {props.courseDetails.projectName}  onChange = {onChange}  name="projectName" id="projectName" placeholder="Enter Name of Project"/>
      </FormGroup>
      <FormGroup>
        <Label for="projectDescription">Project Description</Label>
        <Input type="textarea" value = {props.courseDetails.projectDescription}  onChange = {onChange} name="projectDescription" id="projectDescription"  placeholder = "Enter few lines about the Project"/>
      </FormGroup>

      <FormGroup>
        <Label for="imgUrl">Image URL</Label>
        <Input type="textarea" value = {props.courseDetails.imgUrl}  onChange = {onChange} name="imgUrl" id="imgUrl"  placeholder = "Enter Image URL"/>
      </FormGroup>

        </Form>
        </ModalBody>
        <ModalFooter>
         {props.addOrEditCourse.mode === "ADD_COURSE" && <Button color="primary" onClick={addCourse}>Add</Button> } {'  '}
          {props.addOrEditCourse.mode === "EDIT_COURSE" && <Button color="primary" onClick={editCourse} >Modify</Button> }{'  '}
          <Button color="secondary" onClick={toggle}>Cancel</Button>
        </ModalFooter>
      </Modal>
    </div>
    );
}
const condition = signedInUser => !!signedInUser;
export default  withFirebase(withRouter(withAuthorization(condition)(AdminAddCourse)))