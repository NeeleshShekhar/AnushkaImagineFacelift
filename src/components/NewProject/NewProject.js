import React, { useRef } from 'react';
import { withFirebase } from "../Firebase";
import { withAuthorization } from "../SessionManagement";
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './NewProject.css';
import Button from 'react-bootstrap/Button';

import {withRouter} from "react-router-dom";

export const NewProject = (props) => {
  const form = useRef(null);

  

  const AddData = async (event) => {
    event.preventDefault();

    const formData = new FormData(form.current);
    const projectName = formData.get('ProjectName');
    const shortDesc = formData.get('ShortDesc');
    const desc = formData.get('Desc');
    const location = formData.get('Location');

    try {
      // Initialize Firebase app 
      
      
      

      // Get Firestore and Storage instances
      const firestore = props.firebase.db;
      const storage = props.firebase.storage;

      // Array to store the image URLs
      const imageUrls = [];

      // Upload primary image to Firebase Storage and store URL
      const primaryImage = formData.get('PrimaryImage');
      if (primaryImage) {
        const primaryImageRef = storage.ref().child(`images/${primaryImage.name}`);
        await primaryImageRef.put(primaryImage);
        const primaryImageUrl = await primaryImageRef.getDownloadURL();
        imageUrls.push(primaryImageUrl);
      } else {
        imageUrls.push(null);
      }

      // Upload images to Firebase Storage and store URLs
      for (let i = 1; i <= 9; i++) {
        const image = formData.get(`Image${i}`);
        if (image) {
          const imageRef = storage.ref().child(`images/${image.name}`);
          await imageRef.put(image);
          const imageUrl = await imageRef.getDownloadURL();
          imageUrls.push(imageUrl);
        } else {
          imageUrls.push(null);
        }
      }

      // Add a new document to the "Project" collection
      await props.firebase.db.collection('Project').add({
        projectName,
        shortDesc,
        desc,
        location,
        primaryImg: imageUrls[0],
        img1: imageUrls[1],
        img2: imageUrls[2],
        img3: imageUrls[3],
        img4: imageUrls[4],
        img5: imageUrls[5],
        img6: imageUrls[6],
        img7: imageUrls[7],
        img8: imageUrls[8],
        img9: imageUrls[9]
      });

      
      alert("Project Added")

      // Clear the form after successful submission
      form.current.reset();
    } catch (error) {
      console.error('Error adding project:', error);
    }
  };

  return (
    <div>
      <Container>
        <br />
        <br />
        <Row>
          <Col md={6}>
            <div className='contact-us-title'>Add <span className='dream'>Your</span> Project <span className='reality'></span></div>
            <div className='contact-us-description'>Great work! Kudos for your new achievement</div>
            <br />

            <Container>
              <form ref={form} onSubmit={AddData}>
                <div className='form-head'>Project Name</div>
                <input className='text-box' type="text" name="ProjectName" />

                <br />
                <br />

                <div className='form-head'>Short description</div>
                <textarea className='text-box' type="text-box" name="ShortDesc" />
                <br />
                <br />
                <br />
                <div className='form-head'>Description</div>
                <textarea className='text-box' name="Desc" />
                <br />
                <br />
                <br />
                <div className='form-head'>Location</div>
                <textarea className='text-box' name="Location" />
                <br />
                <br />
                <br />

                {/* Primary Image upload option */}
                <div className='form-head'>Primary Image</div>
                <input
                  className='text-box'
                  type="file"
                  name="PrimaryImage"
                  accept="image/*"
                />

                {/* Image upload options */}
                {[...Array(9)].map((_, i) => (
                  <Container><div key={i} className='form-head'>Image {i + 1}</div>
                  <input
                    className='text-box'
                    type="file"
                    name={`Image${i + 1}`}
                    accept="image/*"
                  /></Container>
                ))}

                <Button className='text-box-button' type="submit" value="Send">Submit</Button>
              </form>
            </Container>

          </Col>
          <Col md={6}>
            {/* Placeholder image */}
            <img src="https://static.vecteezy.com/system/resources/previews/003/195/859/large_2x/construction-or-builder-man-vector.jpg" width={400} style={{ padding: 10 }} alt="Project" />
          </Col>

        </Row>
      </Container>
    </div>
  );
}
const condition = signedInUser => !!signedInUser;
export default withFirebase(withRouter(withAuthorization(condition)(NewProject)))