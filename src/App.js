import logo from './logo.svg';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Navigation from './components/Navigation';
import Footer from './components/Footer';
import MainComponent from './components/MainComponent';
import Contribute  from './components/Contribute';
import Earn from './components/Earn';
import SMRC from './components/SMRC';
import * as ROUTES from "./constants/routes";
import './App.css';
import { Helmet } from 'react-helmet';

function App() {
  return (
    <div className="main">
      <Helmet>
      <title>SkilWil: Earn and learn</title>
      <meta name="description" content="Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards. Also, ask your subject doubts for free." />
      <meta name="theme-color" content="#008f68" />
    </Helmet>

    <Router>
      <Navigation />
     <Route exact path = {ROUTES.LANDING} component = {MainComponent}/>
     <Route exact path = {ROUTES.EARN} component = {Earn}/>
     <Route exact path = {ROUTES.SMRC} component = {SMRC}/>
    </Router>
    <Footer/>
    </div>
  );
}

export default App;
