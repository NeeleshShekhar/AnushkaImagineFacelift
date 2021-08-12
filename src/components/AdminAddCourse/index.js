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
          //Call to Firebase
          var userName; 
          props.firebase.db.collection("users").doc(props.signedInUser.uid).get().then(user => {
            userName = user.data().name;
               const id = db.collection("courses").doc().id;
          const ref = db.collection("subject").doc(props.courseDetails.subject);
          const DATA_TO_BE_ADDED = {
            "courseName" : props.courseDetails.courseName,
            "courseId" : props.courseDetails.courseId,
            "courseDescription" : props.courseDetails.courseDescription,
            "subjectRef" : ref,
            "imgUrl" : props.courseDetails.imgUrl,
            "isPublished" : false,
            "isTrending" : false,
            "subject" : props.courseDetails.subject,
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
            alert("Username cannot be fetched !");
          })
        }
        else
        props.setCourseDetails({...props.courseDetails, error : validatedData.message})
      
    }
    const  checkAndUpdate = async () => {
      let message = ""
      await props.firebase.db.collection("validCourses").doc(props.courseDetails.courseId).get().then(doc => {
            if(!doc.exists || (doc.exists && doc.data().isUsed == true) )
            {
               message = "You dont have permission to access the course. Please contact Aditya Deo Ojha to have the access"
            }
            else
            {
              props.firebase.db.collection("validCourses").doc(props.courseDetails.courseId).update({
                "isUsed" : true
              }).then(
                message = ""
              ).catch(error => {
                 alert("Something Went Wrong! Please contact the administration. Error is " + error);
              })
            }
    }).catch(error => {
            alert("Something Went Wrong! Please contact the administration. The error is " + error);
          });

          return message;
  }

    const validate = async () =>
    {
         let message = ""
         //For CourseName
        if(!props.courseDetails.courseName)
         message = "Course Name cannot be blanked";
        else if(!props.courseDetails.courseDescription)
        message = "Course Description cannot be blank. Please provide some important details on what this course is all about"
        else if(props.addOrEditCourse.mode === "ADD_COURSE")
        {
          if(props.courseDetails.courseId)
          {
           
           message = await checkAndUpdate();

          }
          else
         message = "Course Id cannot be blank";
         
        }
       
        return {"hasErrors" : message, "message" : message};
       
    }

    //    console.log(props.courseDetails.courseName + 
    //         " course sub =  " + props.courseDetails.subject + " course des =  " + props.courseDetails.courseDescription + "course Id=  " + props.courseDetails.courseId + " error " + props.courseDetails.error);
    return (
    <div>
      <Modal className = "addCourseModal" isOpen={true} toggle={toggle} backdrop = {false}>
        <ModalHeader toggle={toggle}>{props.addOrEditCourse === "ADD_COURSE" ? "Add a course" : "Edit Course"}</ModalHeader>
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
       { props.addOrEditCourse.mode === "ADD_COURSE" && <FormGroup>
        <Label for="courseId">Course Id</Label>
        <Input type="text" value = {props.courseDetails.courseId}  onChange = {onChange} name="courseId" id="courseId" placeholder="Enter CourseId"/>
      </FormGroup>}
       <FormGroup>
        <Label for="courseName">Course Name</Label>
        <Input type="text" value = {props.courseDetails.courseName}  onChange = {onChange}  name="courseName" id="courseName" placeholder="Enter Name of Course"/>
      </FormGroup>
      <FormGroup>
        <Label for="courseDescription">Course Description</Label>
        <Input type="textarea" value = {props.courseDetails.courseDescription}  onChange = {onChange} name="courseDescription" id="courseDescription"  placeholder = "Enter few lines about the course"/>
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