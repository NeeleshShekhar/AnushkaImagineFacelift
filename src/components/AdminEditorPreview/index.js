import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css';
import 'highlight.js/styles/devibeans.css';
import {withRouter} from 'react-router-dom';
import { withAuthorization } from "../SessionManagement";
const AdminEditorPreview = (props) => 
{
    console.log(props.history.location.state)

    return (
        <div className = "container editorPreview">
           <div className = "ql-container ql-editor testEditor" style = {{fontFamily : 'Festive'}} dangerouslySetInnerHTML={{__html : props.history.location.state.text}}></div>
        </div>
       
    );
}

const condition = signedInUser => !!signedInUser;
export default withRouter(withAuthorization(condition)(AdminEditorPreview));