import React,{useEffect,useState} from 'react';
import { useParams } from "react-router";
import { withFirebase } from '../Firebase';
import { Table } from 'reactstrap';
import ReactGA from "react-ga";

const CertificateCollege = (props) => {

const [certificates,setCertificates] = useState([]);
const parameters = useParams();
const contestName = parameters.contestName;
const groupName = parameters.groupName;
useEffect(() => {
    
    ReactGA.initialize('UA-198309082-1')
    ReactGA.pageview(window.location.pathname + window.location.search);
    var fetchedCertificates = [];
    const db = props.firebase.db;
    db.collection("certificates").doc(contestName).collection(groupName).get().then(docs => {
            docs.forEach(doc => {
            fetchedCertificates.push({id : doc.id,...doc.data()}); 
            })
            setCertificates(fetchedCertificates)
          }
        ).catch((err => {
            alert("Some error occured ! Contact your administrator" + err)
        }))
    },[]);

    {console.log(certificates)}
    return (
    <div className = "container">
     <Table striped>
      <thead>
        <tr>
          <th>#</th>
          <th>Name</th>
          <th>Certificate</th>
        </tr>
      </thead>
      <tbody>
        {certificates.map(eachCertificate => {
        return(
          <tr key = {eachCertificate.id}>
          <th scope="row">{eachCertificate.id}</th>
          <td>{eachCertificate.name}</td>
          <td><a href = {eachCertificate.certificateUrl}>Link</a></td>
        </tr>
        );
      })}
      </tbody>
    </Table>
    </div>
    )
}
export default withFirebase(CertificateCollege);