import React,{useState,useEffect} from "react";
import {Button,Card, CardImg, CardTitle, CardText, CardDeck,
  CardSubtitle, CardBody,CardHeader, CardFooter}  from "reactstrap";
import AdminAddCourse from "../AdminAddCourse";
import {withRouter} from "react-router-dom";
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../SessionManagement";
import * as ROUTES from "../../constants/routes"
const AdminCourses = (props) => {
const ADD_COURSE_STATE = {courseKey : "",courseId : "", courseName : "", courseDescription : "", isPublished : false ,subject : "Mathematics", error : "",createdBy : ""}
const COURSE_MODAL_MODE = {courseModal : false, mode : "ADD_COURSE"}
const [courseDetails, setCourseDetails] = useState(ADD_COURSE_STATE);
const [addOrEditCourse, setaddOrEditCourse] = useState(COURSE_MODAL_MODE);
const [courses, setCourses] = useState([])
const db = props.firebase.db;
useEffect(() => {
   var allCourses = [];
   db.collection("courses").get().then(querySnapshot => {
       querySnapshot.forEach( (doc) => {
            allCourses.push({...doc.data(), id : doc.id});
       })
    setCourses(allCourses);
   }).catch((error) => {
       alert("Some error occured! Contact admin");
   })
},[])
   const addCourse = (course) =>
    { 
        setCourses(courses.concat(course))
    }
     const adminStartCourse = () =>
    {
      setaddOrEditCourse({...addOrEditCourse,courseModal : true})
    }
    const editCourse = (event) =>
    {
        props.firebase.course(event.target.id).get().then(doc => {
            const retrievedData = doc.data();
            setCourseDetails({courseKey : doc.id,...retrievedData })
        }).catch(error => {
            alert("Some error occured! Contact your Administrator")
        })
        setaddOrEditCourse({mode : "EDIT_COURSE",courseModal : true});
    }
     const sendToAddSubTopics = (event) =>{
        var selectedTopic = courses.filter(temp => temp.id === event.target.id)[0]
        props.history.push({pathname : ROUTES.ADMIN_ADD_SUBTOPIC_TO_COURSE,state : {courseDetails :JSON.stringify(selectedTopic) } })
    }
    return(
        <div className = "container courses">
             <Button onClick = {adminStartCourse} color = "primary">Add Course</Button>
            {addOrEditCourse.courseModal && <AdminAddCourse addOrEditCourse = {addOrEditCourse} setaddOrEditCourse = {setaddOrEditCourse} courseDetails = {courseDetails} setCourseDetails = {setCourseDetails} courses = {courses} setCourses = {setCourses} addCourse = {addCourse} />}
            <p>Current Courses are : </p>
            <br/>
         <CardDeck> 
         { courses.map( a_course => {
            return (
        <div key = {a_course.id}>
        <Card >
        <CardHeader>{a_course.courseName}</CardHeader>
        <CardBody>
          <CardText>
          {a_course.courseDescription}
            <br/>
            <br/>
          <p>Course Published Status : {a_course.isPublished.toString()}</p>
          <p> Course Created By : {a_course.createdBy} </p>
          </CardText>
        </CardBody>
        <CardFooter>
        <Button color = "primary">Publish</Button>
        {' '}
        <Button id = {a_course.id} color = "primary" onClick = {sendToAddSubTopics}>Sub-Topics</Button>
        {' '}
        <Button id = {a_course.id} color = "primary" onClick = {editCourse}>Edit</Button>{' '}
        </CardFooter>
        </Card>
        <br/>
        </div>)
        })}
        </CardDeck>
        </div>
    );
}
const condition = signedInUser => !!signedInUser;
export default withFirebase(withRouter(withAuthorization(condition)(AdminCourses)));