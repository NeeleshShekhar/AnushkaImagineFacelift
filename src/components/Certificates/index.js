import React,{useEffect,useState} from "react";
import { withFirebase } from "../Firebase";
import { useParams } from "react-router";
import {Button} from "reactstrap";
import ReactGA from "react-ga";

function Certificate (props){

const parameters = useParams();

const studentDetail = {name :"" , certificateUrl : ""}
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
            setStudentCertificate({name : dataRetrived.name, certificateUrl:dataRetrived.certificateUrl});
        }
        else
        {
            const fileName = "smrc-vesasc-"+studentId
            const storage = props.firebase.storage;
            console.log(storage);
            const storageRef = storage.ref();
            const path = "certificates/"+fileName+".pdf";
            storageRef.child(path).getDownloadURL().then((url) => {
               
                    contestRef.update({certificateUrl : url});
                    setStudentCertificate({name : dataRetrived.name,certificateUrl : url})
          
            }).catch((error) => {
                switch (error.code) {

                   case 'storage/object-not-found':
                    console.log("File not found")
                    break;
                    case 'storage/unauthorized':
                     alert("You cant access the file")
                    break;
                    case 'storage/canceled':
                    alert("Storage canceled")
                    break;
      case 'storage/unknown':
        alert("Some error occured")
        break;
    }
        });
}
    }
});
      
    }, [])

return(

    <div className = "certificates">

        <h2 style = {{textAlign:'center'}}> Hello {studentCertificate.name} from {parameters.groupName} </h2>
        <br/>
        <div className = "container">
        <div className = "row">
       <p>Your certificate is : <a href = {studentCertificate.certificateUrl}> <Button>View your Certificate Here</Button></a> </p>
       </div>
        </div>
      
    </div>);
}

export default withFirebase(Certificate);