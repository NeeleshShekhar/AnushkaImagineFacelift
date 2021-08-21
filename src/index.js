import React from 'react';
import ReactDOM from 'react-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import reportWebVitals from './reportWebVitals';
import Firebase, {FirebaseContext} from './components/Firebase';
import 'highlight.js/styles/atom-one-dark.css';

ReactDOM.render(
<FirebaseContext.Provider value = {new Firebase()}>
<BrowserRouter> 
<App/>  
</BrowserRouter>
</FirebaseContext.Provider>
  ,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
