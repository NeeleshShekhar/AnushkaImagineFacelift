import React, {useState} from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter , Form,FormGroup,Label,Input,Col } from 'reactstrap';
import {withRouter} from "react-router-dom";
import { withFirebase } from "../Firebase";
import * as ROUTES from '../../constants/routes';
import { RemoveFromQueue } from "@material-ui/icons";
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
      event.preventDefault();
        const validatedData = validate();
        console.log(validatedData.message + " " + validatedData.hasErrors);
        if(!validatedData.hasErrors)
        { 
            props.setCourses(props.courses.map(eachCourse => {
            if(props.courseDetails.courseId === eachCourse.courseId)
                {
                    eachCourse.courseName = props.courseDetails.courseName;
                    eachCourse.courseDescription = props.courseDetails.courseDescription;
                    eachCourse.subject = props.courseDetails.subject;
                }

              return eachCourse;
        }))
        toggle();
        }
        else
        props.setCourseDetails({...props.courseDetails, error : validatedData.message})
    }

    const addCourse = (event) => {
        event.preventDefault();
        const validatedData = validate();
        console.log(validatedData.message + " " + validatedData.hasErrors);
        if(!validatedData.hasErrors)
        { 
          //Call to Firebase
          const id = db.collection("courses").doc().id;
          const ref = db.collection("subject").doc(props.courseDetails.subject);
          const DATA_TO_BE_ADDED = {
            "courseName" : props.courseDetails.courseName,
            "courseId" : props.courseDetails.courseId,
            "courseDescription" : props.courseDetails.courseDescription,
            "subjectRef" : ref,
            "imageUrl" : null,
            "isPublished" : false,
            "isTrending" : false,
            "subject" : props.courseDetails.subject,
            "ratings" : 1,
            "tags" : [],
            "createdAt": Date.now(),
            "createdBy" : "Admin"
          }
          db.collection("courses").doc(id).set(DATA_TO_BE_ADDED).then(() => 
          {
            alert("Course has been created ");
          }).catch((error) =>
          {
            alert(error);
          })
             props.addCourse(props.courseDetails);
             toggle();
        }
        else
        props.setCourseDetails({...props.courseDetails, error : validatedData.message})

        toggle();
    }
    const validate = () =>
    {
         let message = ""
        //For CourseName
        if(!props.courseDetails.courseId)
        message = "You don't have access to create this course. Please contact Aditya Deo Ojha to have the access"
        else if(!props.courseDetails.courseName)
         message = "Course Name cannot be blanked";
        else if(!props.courseDetails.courseDescription)
        message = "Course Description cannot be blank. Please provide some important details on what this course is all about"

        const validationData = {'hasErrors' : message, 'message' : message};
        
        return validationData;
    }

    //    console.log(props.courseDetails.courseName + 
    //         " course sub =  " + props.courseDetails.subject + " course des =  " + props.courseDetails.courseDescription + "course Id=  " + props.courseDetails.courseId + " error " + props.courseDetails.error);

    return (
    <div>
      <Modal className = "addCourseModal" isOpen={true} toggle={toggle} backdrop = {false}>
        <ModalHeader toggle={toggle}>Add a course</ModalHeader>
        {  props.courseDetails.error &&  <p style = {{color : 'red', textAlign : 'center'}}> <br/> {props.courseDetails.error}</p>}
        <ModalBody>
        <Form>
         <FormGroup>
        <Label for="subject">Select Subject</Label>
          <Input type="select" value = {props.courseDetails.subject || "Mathematics"} onChange = {onChange} name="subject" id="subject">
            <option value = "Mathematics">Mathematics</option>
            <option value = "Physics">Physics</option>
          </Input>
      </FormGroup>
        <FormGroup>
        <Label for="courseId">Course Id</Label>
        <Input type="text" value = {props.courseDetails.courseId}  onChange = {onChange} name="courseId" id="courseId" placeholder="Enter CourseId"/>
      </FormGroup>
       <FormGroup>
        <Label for="courseName">Course Name</Label>
        <Input type="text" value = {props.courseDetails.courseName}  onChange = {onChange}  name="courseName" id="courseName" placeholder="Enter Name of Course"/>
      </FormGroup>
      <FormGroup>
        <Label for="courseDescription">Course Description</Label>
        <Input type="textarea" value = {props.courseDetails.courseDescription}  onChange = {onChange} name="courseDescription" id="courseDescription"  placeholder = "Enter few lines about the course"/>
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

export default withFirebase(withRouter(AdminAddCourse));