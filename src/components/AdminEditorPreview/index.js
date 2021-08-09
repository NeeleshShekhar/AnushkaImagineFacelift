import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/devibeans.css';
import {withRouter} from 'react-router-dom';
import { withAuthorization } from "../SessionManagement";
const AdminEditorPreview = (props) => 
{
    
    return (
        <div className = "container editorPreview">
            <div className = "row">
                <div style = {{fontFamily:'Ubuntu', fontSize:'60px', fontWeight:'bold'}}>{props.history.location.state.topicName}</div>
                <div style = {{fontSize : '28px'}}  className = "lead">{props.history.location.state.topicDescription}</div>
            </div>
            <br/>
           <div className = "ql-container ql-editor testEditor " style = {{fontFamily : 'Festive'}} 
           dangerouslySetInnerHTML={{__html : props.history.location.state.text}}></div>
        </div>
       
    );
}
const condition = signedInUser => !!signedInUser;
export default withRouter(withAuthorization(condition)(AdminEditorPreview));