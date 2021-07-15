import React,{useState,useEffect,useMemo,createContext} from "react";
import {Button,ButtonGroup} from 'reactstrap';
import hljs from 'highlight.js'
import 'react-quill/dist/quill.core.css'
import 'react-quill/dist/quill.snow.css'
import 'highlight.js/styles/devibeans.css'
import ReactQuill,{Quill} from 'react-quill'
import { withRouter } from "react-router-dom";
import 'katex/dist/katex.min.css'
import * as ROUTES from '../../constants/routes'
import { withAuthorization } from "../SessionManagement";

import katex from 'katex';

window.katex = katex;

export const EditorContext = createContext("");
const AdminEditor = (props) => {
 
 const[text,setText] = useState("");

 useEffect(() => {
  
 },[])


hljs.configure({
    languages: ['javascript', 'java', 'python'],
  });
 const handleChange = (value) =>
 {
    console.log("tHE TEXT IS " + text);
    setText(value)
 }

 const sendForPreview = () =>
 {
    props.history.push({pathname : ROUTES.ADMIN_PREVIEW_ARTICLE, state: {text}});
 }

 const postBlogAdmin = () => {

 }

var Font = Quill.import('formats/font');
Font.whitelist = ['Ubuntu', 'Raleway', 'Roboto'];
Quill.register(Font, true);

const formats = [
  'header',
  'font',
  'size',
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
const imageHandler = (event) => {
  console.log("Hello from image handler");
}
const toolbarOptions = [
          [{ header: [3,2] }, { 'font': Font.whitelist}],
          ["bold", "italic", "underline", "strike", "blockquote", "code-block"],
          [
            { list: "ordered" },
            { list: "bullet" },
            { indent: "-1" },
            { indent: "+1" }
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
console.log(JSON.stringify(props.location.state))
const topicAndCourseDetails = props.location.state
 return (
    <div className = "articles container">
  <p className = "lead"> You are an writing an article for {topicAndCourseDetails.topicName} under the Course : {topicAndCourseDetails.courseName}</p>
  <ButtonGroup size="lg" >
  <Button>Save as Draft</Button>
  <Button onClick = {postBlogAdmin}>Post</Button>
  <Button onClick = {sendForPreview}>Preview</Button>
</ButtonGroup>

<br/>
<br/>
        <div className = "row">
         <ReactQuill value = {text} theme = "snow" onChange={handleChange} modules={modules} formats = {formats}/>
        </div>  
    </div>
 )
}

const condition = signedInUser => !!signedInUser;

export default withRouter(withAuthorization(condition)(AdminEditor));