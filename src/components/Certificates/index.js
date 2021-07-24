import React,{useEffect,useState} from "react";
import { withFirebase } from "../Firebase";
import { useParams } from "react-router";
import {Button} from "reactstrap";
import ReactGA from "react-ga";

function Certificate (props){

const parameters = useParams();

const studentDetail = {name :"" , certificateUrl : "",isLoading : false}
const[studentCertificate,setStudentCertificate] = useState(studentDetail);
const contestName = parameters.contestName;
const groupName = parameters.groupName;
const studentId = parameters.studId;

useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
        const db = props.firebase.db;
const contestRef = db.collection("certificates").doc(contestName).collection(groupName).doc(studentId)
contestRef.get().then((doc) => {
    if (doc.exists) {
        const dataRetrived = doc.data();
        if(dataRetrived.certificateUrl !== "")
        {
            setStudentCertificate({name : dataRetrived.name, certificateUrl:dataRetrived.certificateUrl,isLoading : true});
        }
    }
     else
        {
          alert("Your certicficate does not exist");
        }
        });
    }, [])

return(
    <>
    <div className = "certificates">

       { studentCertificate.isLoading && <> <h2 style = {{textAlign:'center'}}> Hello {studentCertificate.name} from {parameters.groupName} </h2>
        <br/>
        <div className = "container">
        <div className = "row">
       <p>Your certificate is : <a href = {studentCertificate.certificateUrl}> <Button>View your Certificate Here</Button></a> </p>
       </div>
        </div>
        </>
       }
      
    </div>
    </>);
}

export default withFirebase(Certificate);