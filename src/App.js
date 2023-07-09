import logo from './logo.svg';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import Contribute  from './components/Contribute';
import Earn from './components/Earn';
import SMRC from './components/SMRC';
import Certificate from './components/Certificates';
import SignIn from './components/SignIn';
import AdminDashboard from './components/AdminDashboard';
import AdminSubTopic from './components/AdminSubTopic';
import AdminCourses from './components/AdminCourses';
import AdminDraftCourses from './components/AdminDraftCourses';
import { withAuthentication } from './components/SessionManagement';
import CertificateCollege from './components/Certificates/CertificateCollege';
import * as ROUTES from "./constants/routes";
import './App.css';
import { Helmet } from 'react-helmet';
import PosterMaking from './components/PosterMaking';
import oops from './components/oops';
import CourseHome from './components/CourseHome';
import Subtopic from './components/SubTopics';
import ArticleView from './components/ArticleView';
import AllArticle from './components/AllArticle';
import PosterWinning from './components/PosterWinning';

function App() {
  return (
    <div className="main">
      <Helmet>
      <title>Anushka Imagine</title>
      <meta name="description" content="Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards. Also, ask your subject doubts for free." />
      <meta name="theme-color" content="#008f68" />
    </Helmet>
    <Router>
     <Navigation />
    <Switch>
     <Route exact path = {ROUTES.EARN} component = {Earn}/>
     <Route exact path = {ROUTES.SMRC} component = {SMRC}/>
     <Route exact path = {ROUTES.CERTIFICATE} component = {Certificate}/>
     <Route exact path = {ROUTES.SIGN_IN} component = {SignIn}/>
    <Route exact path = {ROUTES.LANDING} component = {MainComponent}/>
    <Route exact path = {ROUTES.ADMIN_DASHBOARD} component = {AdminDashboard}/>
    <Route exact path = {ROUTES.ADMIN_COURSES} component = {AdminCourses}/>
    <Route exact path = {ROUTES.ADMIN_ADD_SUBTOPIC_TO_COURSE} component = {AdminSubTopic}/>
    <Route exact path = {ROUTES.DRAFT_COURSE} component = {AdminDraftCourses}/>
     {/* <Route exact path = {ROUTES.CERTIFICATE} component = {Certificate}/> */}
     <Route exact path = {ROUTES.CERTIFICATE_COLLEGE} component = {CertificateCollege}/>
     <Route exact path = {ROUTES.POSTER} component = {PosterMaking}/>
     <Route exact path = {ROUTES.COURSEHOME} component = {CourseHome}/>
     <Route exact path = {ROUTES.SUBTOPICS} component = {Subtopic}/>
     <Route exact path = {ROUTES.BLOGS} component = {ArticleView}/>
     <Route exact path = {ROUTES.ALLARTICLE} component = {AllArticle}/>
     <Route exact path = {ROUTES.POSTERWINNING} component = {PosterWinning}/>

     <Route  component = {oops}/>
     </Switch>
    </Router>
    
    <Footer/>
    </div>
  );
}

export default withAuthentication(App);
// export default App;
