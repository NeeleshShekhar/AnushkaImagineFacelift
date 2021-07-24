import React, {useState} from "react";
import { withFirebase } from "../Firebase";
import {withRouter} from "react-router-dom";
import {Form,FormGroup,Label,Input,Button} from "reactstrap";
import * as ROUTES from '../../constants/routes';

const SignIn = (props) => {
const INITIAL_STATE = {email : "", password : "", error : ""}
const [userDetail, setUserDetail] = useState(INITIAL_STATE);
 const onChange = (event) => {
     setUserDetail({...userDetail, [event.target.name] : event.target.value})
 }
 const onSubmit = () => {
     props.firebase.signInAdminWithEmailAndPassword(userDetail.email, userDetail.password).then(() => {
        props.history.push(ROUTES.ADMIN_DASHBOARD);
      }
     ).catch(error => setUserDetail({email : '', password : '' , error : error}))
  
 }
 const isInvalid = userDetail.email === '' || userDetail.password === '';
    return(
        <>
    <div className = "container signInContainer">
    <div className = "row">
    {userDetail.error &&  <p>{userDetail.error.message}</p>}
    <Form>
      <FormGroup>
        <Label for="emailSignIn">Email</Label>
        <br/>
        <Input type="email" name="email" id="emailSignIn" value = {userDetail.email} onChange = {onChange} placeholder="Hello Admin ! Enter your Email" />
      </FormGroup>
      <FormGroup>
        <Label for="emailPassword">Password</Label>
        <Input type="password" name="password" value = {userDetail.password} id="emailPassword" onChange = {onChange} placeholder="Enter your password" />
      </FormGroup>
        <br/>
     <Button onClick = {onSubmit} disabled = {isInvalid} color="primary">
                    Sign In
    </Button>

    </Form>
    </div>

    </div>
        </>
    );
}

export default withRouter(withFirebase(SignIn));