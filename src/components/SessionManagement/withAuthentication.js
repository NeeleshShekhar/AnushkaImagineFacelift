import {useEffect,useState} from "react";
import SignedInUserContext from './context';
import { withFirebase } from '../Firebase';

const withAuthentication = (Component) => {
    const WithAuthentication = (props) =>
    {
    const [signedInUser,setSignedInUser] = useState(null);
    useEffect(() => {
        const listener = props.firebase.auth.onAuthStateChanged(
                user => {
                    user
                        ? setSignedInUser(user)
                        : setSignedInUser(null)
                },
            );
            return () => {
                listener();
            }
       },[])
            return (
                <SignedInUserContext.Provider value={signedInUser}>
                    <Component {...props} />
                </SignedInUserContext.Provider>
            );
        }
    return withFirebase(WithAuthentication);
};
export default withAuthentication;