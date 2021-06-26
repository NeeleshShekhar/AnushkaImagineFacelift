import React, { useEffect } from "react";
import ReactGA from "react-ga";

const SMRC = (props) => {
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])

    return ( 
    <div className = "smrc">
         <br / >
        <h2 style = {{ textAlign: "center" }}>

        SMRC - Registration--Coming Soon </h2> 
        <br/>
   </div>

    );
}

export default SMRC;