import React,{useState,useEffect,useMemo,createContext,useRef} from "react";
import {Button,ButtonGroup} from 'reactstrap';
import hljs from 'highlight.js'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css'
import ReactQuill,{Quill} from 'react-quill'
import { withRouter } from "react-router-dom";
import 'katex/dist/katex.min.css'
import * as ROUTES from '../../constants/routes'
import { withAuthorization } from "../SessionManagement";
import { withFirebase } from "../Firebase";

import katex from 'katex';


window.katex = katex;

export const EditorContext = createContext("");
const AdminEditor = (props) => {

 const[text,setText] = useState("Start Typing Here!");
 const [topicAndCourseDetails, setTopicAndCourseDetails] = useState(props.location.state);
 let quillRef = useRef(null);
 useEffect(() => {
    fetchBlogs();

 },[])
 const fetchBlogs = async() => {
  try{
  await props.firebase.db.collection("blogs").doc(topicAndCourseDetails.blog).get().then((doc) =>
  {
     if(!doc.exists)
     {
      props.firebase.db.collection("blogs").doc(topicAndCourseDetails.blog).set({
        "isPublished" : false,
        "subTopic" : topicAndCourseDetails.topicId,
        "blogContent" : text
      }).then(() => {
      }).catch(error => {
        alert("Some error occured ! Contact your administrator + error");
      })
     }
     else
     {
       setText(doc.data().blogContent);
     }
   }
   ).catch(error => {
     alert("Some error Occured!")
   })
  }
  catch(error)
  {
    alert(error)
  }
 }
hljs.configure({
    languages: ['javascript', 'java', 'python'],
  });
 const handleChange = (value) =>
 {
    setText(value)
 }

 const update = () => {
       var userName = ""
       
       props.firebase.db.collection("users").doc(props.signedInUser.uid).get().then(doc => {
            userName = doc.data().name;
            
           
            props.firebase.subTopic(topicAndCourseDetails.topicId).update({
     "isDraft" : true,
     "lastUpdatedBy" : userName,
     
   }).then(() => {
      props.firebase.blog(topicAndCourseDetails.blog).update({
        "blogContent" : text,
        
      }).then(() => {

      }).catch(error => {
        alert("Cannot update blog! Please contact your administrator" + error);
      })
   }).catch(error => {
     alert("Cannot update SubTopic! Please contact your administrator" + error);
   })
            
          }).catch(error => {
            alert("Username cannot be fetched !")
          });
  
 }
 const sendForPreview = () =>
 {
    update();
    props.history.push({pathname : ROUTES.ADMIN_PREVIEW_ARTICLE, state: {text : text,...topicAndCourseDetails}});
 }

 const postBlogAdmin = () => {
      props.firebase.db.collection("users").doc(props.signedInUser.uid).get().then(doc => {
      props.firebase.subTopic(topicAndCourseDetails.topicId).update({
     "isDraft" : false,
     "lastUpdatedBy" : doc.data().name,
     "isPublished" : true,
   }).then(() => {
      props.firebase.blog(topicAndCourseDetails.blog).update({
        "blogContent" : text,
        "isPublished" : true,
        
        
      }).then(() => {
        alert("Sub Topic successfully Published !")
      }).catch(error => {
        alert("Cannot update blog! Please contact your administrator" + error);
      })
   }).catch(error => {
     alert("Cannot update SubTopic! Please contact your administrator" + error);
   })
          }).catch(error => {
            alert("Username cannot be fetched !");
          })
   

 }
 const saveAsDraft = () => {
  update();
 }
var Font = Quill.import('formats/font');
Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto'];
Quill.register(Font, true);

const formats = [
  'header',
  'font',
  'size',
  'color',
  'bold',
  'italic',
  'underline',
  'strike',
  'blockquote',
  'list',
  'bullet',
  'indent',
  'align',
  'direction',
  'link',
  'image',
  'video',
  'formula',
  'code-block',
]
const imageHandler = useMemo(() => {
return () => {
  const link = prompt("Enter Public Gdrive url")
      const quills = quillRef.current.getEditor();
      const range = quills.getSelection();
      quills.insertEmbed(range.index, 'image', link); 
}
});
const toolbarOptions = [
          [{ header: [3,2] }, { 'font': Font.whitelist},{ size: ["small", false, "large", "huge"] },{ color: [] }],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" },
            { align: [] }
          ],
          ["link", "image"],
          ["formula"],
          ["clean"],

        ];
 const modules = useMemo(() => ({
    toolbar: {
      container:toolbarOptions,
      handlers: {
        image: imageHandler
      },
    },
    formula : true,
     syntax: {
    highlight: text => hljs.highlightAuto(text).value,
  },
     clipboard: {
    matchVisual: false,
  }
  }), [])
 return (
  <div className = "articles container">
  <p className = "lead"> You are an writing an article for {topicAndCourseDetails.topicName} under the Course : {topicAndCourseDetails.courseName}</p>
  <ButtonGroup size="lg" >
  <Button onClick = {saveAsDraft}>Save as Draft</Button> {' '}
  <Button onClick = {postBlogAdmin}>Post</Button> {' '}
  <Button onClick = {sendForPreview}>Preview</Button>
</ButtonGroup>
<br/>
<br/>
        <div className = "row editor-wrapper" >
         <ReactQuill  value = {text} ref={quillRef} theme = "snow" onChange={handleChange} modules={modules} formats = {formats}/>
        </div>  

        <br/>
        <br/>
    </div>
 )
}

const condition = signedInUser => !!signedInUser;

export default withFirebase(withRouter(withAuthorization(condition)(AdminEditor)));