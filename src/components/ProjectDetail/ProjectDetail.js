import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import firebase from 'firebase/compat/app';
import {Row,Col,Container} from 'react-bootstrap';
import ImageGallery from 'react-image-gallery';
import 'firebase/compat/firestore';
import './ProjectDetail.css';

// Initialize Firebase (ensure you've set up Firebase in your project)
const firebaseConfig = {
    apiKey: "AIzaSyDxv26dr0PJVqUulJXVoNjvWPxBUtg7NwY",
    authDomain: "anushkaimagine.firebaseapp.com",
    projectId: "anushkaimagine",
    storageBucket: "anushkaimagine.appspot.com",
    messagingSenderId: "463368236524",
    appId: "1:463368236524:web:2dbc6298a7f078f32f24c9",
    measurementId: "G-HF6NT09K3E"
};

firebase.initializeApp(firebaseConfig);
const db = firebase.firestore();

const ProjectDetail = () => {
  const { id } = useParams();
  const [project, setProject] = useState(null);
  const [data, setData] = useState([]);
  
  
  useEffect(() => {
    const fetchProject = async () => {
      try {
        const articleRef = await db.collection('Project').doc(id).get();
        if (articleRef.exists) {
          setProject(articleRef.data());
        } else {
          console.log('Project not found!');
        }
      } catch (error) {
        console.error('Error fetching Project:', error);
      }
    };

    fetchProject();
  }, [id]);
  useEffect(() => {
    if (project) {
      setData([
        
            {
                id:1,
                imgUrl:project.img1
            },
            {
                id:2,
                imgUrl:project.img2
            },
            {
                id:3,
                imgUrl:project.img3
            },
            {
                id:4,
                imgUrl:project.img4
            },
            {
                id:5,
                imgUrl:project.img5
            },
            {
                id:6,
                imgUrl:project.img6
            },
            {
                id:7,
                imgUrl:project.img7
            },
            {
                id:8,
                imgUrl:project.img8
            },
            {
                id:9,
                imgUrl:project.img9
            },
            
         
      ]);
    }
  }, [project]);
  if (!project) {
    return <div>Loading...</div>;
  }
const getImg=(imgUrl)=>{
    document.getElementById('imgUrl')?.requestFullscreen()
}




  return (
    <div>
        <br/>
        <br/>
    <Container>
    
    <Row>

    <Col md={7}>
    <br/><div className='title'>{project.projectName}</div>
    <div className='location'>📍 - {project.location} </div><br/>
      <p className='desc'>{project.desc}</p>
    
      
      
    </Col>
    <Col md={5}>
      <img className='primaryImg' src={project.primaryImg}/>
    </Col>
    </Row>

    <br/>
    <br/>
<Container>
    <div className='title'>
        Gallery
        <br/>
        <div className='gallery'>
        {
        data.map((item,index)=>{return(
            <div className='pics' key={index} onClick={()=>getImg(item.imgUrl)}>
                <img src={item.imgUrl} style={{width:'100%'}} className='imggallery' />

            </div>
        )})
        }

        </div>
    </div>
      </Container>

      </Container>
    </div>
  );
};

export default ProjectDetail;