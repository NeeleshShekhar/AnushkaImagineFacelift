import React,{useEffect} from 'react';
import ReactGA from "react-ga";
import Header from './Header';
import PostQuestion from './PostQuestion';
import EducationAndArt from './EducationAndArt';
import Testimonial from './Testimonial';
import Contribute from './Contribute';
import ArticleHomePreview from './ArticleHomePreview';
import Home from './Home/home';

function MainComponent(props) {
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
        return (
            <div className = "main-body">
            <Home/>
                <br/>
                {/* <EducationAndArt/> */}
                {/* <ArticleHomePreview/> */}
                <Testimonial/>
                <br/>
               <PostQuestion/>
               <br/>
               {/* <Contribute/> */}
               
            </div>
        );
    }

export default MainComponent;
