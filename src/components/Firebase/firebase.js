import firebase from "firebase/app"
import "firebase/storage"
import "firebase/firestore";
import "firebase/auth"
const config = {
  apiKey: process.env.REACT_APP_API_KEY,
  authDomain: process.env.REACT_APP_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_PROJECT_ID,
  storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_MESSAGING_SENDER_ID,
  appId : process.env.REACT_APP_APP_ID
};

class Firebase {
constructor() {
firebase.initializeApp(config)
 this.storage = firebase.storage();
 this.db = firebase.firestore();
 this.auth = firebase.auth();
}

signInAdminWithEmailAndPassword = (email,password) => this.auth.signInWithEmailAndPassword(email,password);

signOutUser = () => this.auth.signOut();

// user = userId => this.db.collection("user").doc(userId);
// users = this.db.collection("users");
// blog = blogId => this.db.collection("blogs").doc(blogId);
blogs = () => this.db.collection("blogs");
course = courseId => this.db.collection("courses").doc(courseId);
courses = () => this.db.collection("courses");
// subject = subjectId => this.db.collection("subjects").doc(subjectId);
// subjects = this.db.collection("subjects");
subTopics = () => this.db.collection("subTopics")
subTopic = subTopicId => this.db.collection("subTopics").doc(subTopicId)

}
export default Firebase;
