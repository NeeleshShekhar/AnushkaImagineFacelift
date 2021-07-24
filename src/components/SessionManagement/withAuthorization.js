import React,{useEffect} from 'react';
import { withRouter } from 'react-router-dom';
import SignedInUserContext from './context';
import { withFirebase } from '../Firebase';
import * as ROUTES from '../../constants/routes';

const withAuthorization = condition => Component => {
    const  WithAuthorization = (props) => {
    useEffect(() => {
        const listener = props.firebase.auth.onAuthStateChanged(
                authUser => {
                    if (!condition(authUser)) {
                        props.history.push(ROUTES.SIGN_IN);
                    }
                },
            );
            return () => {
                listener();
            }
       },[])
            return (
                <SignedInUserContext.Consumer>
                    {
                        signedInUser => condition(signedInUser) ? <Component  signedInUser = {signedInUser} {...props} /> : null
                    }
                </SignedInUserContext.Consumer>
            );
    }

    return withRouter(withFirebase(WithAuthorization));
};

export default withAuthorization;