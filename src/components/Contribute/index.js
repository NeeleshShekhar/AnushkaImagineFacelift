import React from "react";
import {Button} from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import ReactGA from "react-ga";
import { Helmet } from "react-helmet";


const Contribute = (props) => {

    const donateNowClicked = () => {

        ReactGA.event({
            category: 'Button',
            action: 'User clicked on Donate Now !'
        })


    }

    const whatsappIconClicked = () => {
        ReactGA.event({
            category: 'Social',
            action: 'User shared on Whatsapp!'
        })
    }
    const telegramIconClicked = () => {
        ReactGA.event({
            category: 'Social',
            action: 'User shared on Telegram from Contribute!'
        })
    }
    return(
         <div id = "contribute" className = " container endsection">

                    <div className = "row">
                      <div className = "col-md-8 head-content">
                            <h2 className="display-8" >Contribute and help us grow.</h2>
                            <br/>
                                <Typography style={{ fontSize: "20px" },{color:"white"}} variant="body1" gutterBottom>

        We further aim to : <br/>
        <br/>
        <ul >
            <li>Provide you with daily brainstorming quiz on various subject and reward you on successful submission.</li>
            <li>Provide you with various art contests to showcase your skills.</li>
            <li>Solve your doubts in various subject within minutes.</li>
        </ul>

         Share : <a href="https://t.me/share/url?url=https%3A%2F%2Fwww.skilwil.com&text=Earn%20while%20you%20learn%20!%20Join%20your%20friends%20in%20solving%20brainstorming%20question%20from%20various%20subject%20and%20earn%20rewards.%20Also%2C%20ask%20your%20subject%20doubts%20for%20free"
                                    > <TelegramIcon onClick={telegramIconClicked} style={{ color: 'black', fontSize: '35px'}} /></a>
                                    &nbsp; &nbsp;
         <a href="whatsapp://send?text= https://www.skilwil.com 
                                        Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards.
                                        Also, ask your subject doubts for free."
                                        data-action="share/whatsapp/share"
                                        target="_blank"><WhatsAppIcon onClick={whatsappIconClicked} style = {{color : 'black', fontSize : '30px'}}/></a>
                                 
                                       <br/>
                                       <br/>
                                    <Button onClick={donateNowClicked} className="earnButton" href= "https://www.buymeacoffee.com/skilwil.com" outline > Donate now !</Button>
      </Typography>
                            </div>
                            <div className = "col-md-4">
                                <img src = "./images/donate.svg" width = "100%" alt = "Contribute"/>
                            </div>
                        </div>
                    
                </div>


    );
}

export default Contribute;