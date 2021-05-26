import React,{useState} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse,Button, NavItem ,NavLink, Jumbotron, CardGroup, Container } from 'reactstrap';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import {
    Card, CardImg, CardTitle, CardText, CardDeck,
    CardSubtitle, CardBody
} from 'reactstrap';
import { Badge } from 'reactstrap';
const useStyles = makeStyles({
    root: {
        backgroundColor : 'whitesmoke',
        maxWidth: 300,
    },
    media: {
        height: 140,
    },
});

function MainComponent(props) {
    const classes = useStyles();
    const [navOpen, setNavOpen] = useState(false);
    
    const switchNav = () =>
    {
     setNavOpen(!navOpen);  
    }
        return (
            <div  >
            
                <Navbar  nav-fill expand="md" >
                  
                    <div className="container">
                        <NavbarBrand className="mr-auto logo" href="/" ><img src='./images/SkilWil.png' height="30px" width="100px" alt='SKILWIL' /></NavbarBrand>
                     
                        <NavbarToggler style={{ backgroundColor : 'blue', background: 'url("skilwilicon.png")', backgroundSize : '100% 100%'}} onClick={switchNav} className = "mr-2" />
                        <Collapse navbar isOpen = {navOpen} >
                      
                            <Nav navbar className = "justify-content-end" style = {{width :'100%'}}>
                            <NavItem >
                                <NavLink className="nav-link" href = "https://forms.gle/2GyMKybVWRX5h2sF6" > Doubt Clearing <Badge color = "primary" style = {{backgroundColor : 'red'}}>FREE</Badge> </NavLink>
                            </NavItem>
                            <NavItem>
                                <NavLink className="nav-link" href = "#reward">Earn</NavLink>
                            </NavItem>
                                <NavItem >
                                <NavLink className="nav-link" href= "https://forms.gle/vcXEqv1QAg5QsGiTA" >Contact us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" href = "#contribute">Contribute</NavLink>
                                </NavItem>
                               
                            </Nav>
                         
                        </Collapse>

                    
                       
                    </div>
                  
                </Navbar>
            
                <Jumbotron style = {{marginTop:'40px'}}>

                     <div class="container  text-lg-left">
    
    <div class="row">
      <div class="col-lg-8">
          <h1 class="display-4">Earn while you Learn! <br/>$XLM Giveaway. (Upto INR 50,000)</h1>
          <br/>
  <p class="lead"><span style = {{color : '#0066b2', fontWeight : 'bold'}}>SkilWil</span> provides a platform which exposes an individual to brainstorming contests which enables them to explore, asses and deepen their depth of knowledge.
</p>

        
        <span>
         <Button className = "earnButton" outline href = "#reward"> Earn Now !</Button>
         
        <p style = {{color : '#002D62'}}>No sign up required !</p>
        </span>
      </div>
      <div class=" col-sm-12 col-md-12 col-lg-4 align-items-center d-flex">
        <img src="./images/quizsteps-2.png" alt="" class="img-fluid"/>
      </div>
    </div>

 </div>
                </Jumbotron>
                <br/>
                <br/>
            <div className = "container">
            <div className = "row">
                        <div class="col-lg-8">
                            <h2 className = "display-6">Can you solve these ?</h2>
                            </div>
            </div>
            <br/>
            <div className = "row">
                    <CardGroup>
                    <div className = "row">
                    <div className = "col-md-4">
                        <Card>
                         <CardImg top width="100%" src="./images/Ques1.jpeg" alt="Ques1" />
                            <CardBody>
                                <CardTitle tag="h5">Mathematics</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">5 $XLM</CardSubtitle>
                                <CardText>Question posted by Admin. <br/> Submit your answer and hear from us soon.</CardText>
                                <Button className = "earnButton" href = "https://forms.gle/3LikKa6LcStX9cyc8" outline>Submit</Button>
                            </CardBody>
                        </Card>
                        </div>

                       <div className="col-md-4">
                        <Card>
                            <CardImg top width="100%" src="./images/Ques2a.jpeg"  alt="Ques2" />
                            <CardBody>
                                <CardTitle tag="h5">Mathematics</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">3 $XLM</CardSubtitle>
                                <CardText>Question posted by Admin. <br/> Submit your answer and hear from us soon.</CardText>
                                <Button className = "earnButton" href = "https://forms.gle/m7xT7xdvEgRaXccFA" outline>Submit</Button>
                            </CardBody>
                        </Card>
                        </div>
                        <div className = "col-md-4">
                        <Card>
                            <CardImg top width="100%" src="./images/Ques3.jpeg" alt="Ques3" />
                            <CardBody>
                                <CardTitle tag="h5">Mathematics</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">10 $XLM</CardSubtitle>
                                <CardText>Question posted by Admin. <br/> Submit your answer and hear from us soon.</CardText>
                                <Button className = "earnButton" href = "https://forms.gle/1P9NYEiKGt9VGbi3A" outline>Submit</Button>
                            </CardBody>
                        </Card>
                        </div>
                        </div>
                    </CardGroup>
                </div>
                </div>
                <br/>

                <div id = "reward" className = "container">
                <div className="row">
                    <div class="col-lg-8">
                        <h2 className="display-6">Earn your reward !</h2>
                    </div>
                </div>
                </div>
                
                <br/>
                <div>
                    <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSflq9KzJJZnrKahdF2PmXiXLgwsnw7b0vllS1bMq4akAKjnQA/viewform?embedded=true" width="100%" height="900" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
                </div>

                <div id = "contribute" className = "container">

                    <div className = "row">
                        <div class="col-lg-8">
                            <h2 className="display-6">Contribute and help us grow.</h2>
                        </div>
                        <br/>
                        <div className = "row">
                            <div className = "col-md-6">
                            <br/>
                                <Typography style={{ fontSize: "20px" }} variant="body1" gutterBottom>

        We further aim to : <br/>
        <br/>
        <ul >
            <li>Provide you with daily brainstorming quiz on various subject and reward you on successful submission.</li>
            <li>Provide you with various art contests to showcase your skills.</li>
            <li>Solve your doubts in various subject within minutes.</li>
        </ul>

         Share : <a href="https://t.me/share/url?url=https%3A%2F%2Fwww.skilwil.com&text=Earn%20while%20you%20learn%20!%20Join%20your%20friends%20in%20solving%20brainstorming%20question%20from%20various%20subject%20and%20earn%20rewards.%20Also%2C%20ask%20your%20subject%20doubts%20for%20free"
                                    > <TelegramIcon style={{ color: 'black', fontSize: '35px'}} /></a>
                                    &nbsp; &nbsp;
         <a href="whatsapp://send?text= https://www.skilwil.com 
                                        Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards.
                                        Also, ask your subject doubts for free."
                                        data-action="share/whatsapp/share"
                                        target="_blank"><WhatsAppIcon style = {{color : 'black', fontSize : '30px'}}/></a>
                                 
                                       <br/>
                                       <br/>
                                    <Button className="earnButton" href= "https://forms.gle/6pkQi1QXtek4Lw6dA" outline > Donate now !</Button>
      </Typography>
                            </div>
                            <div className = "col-md-6">
                                <img src = "./images/donate.svg" width = "100%" alt = "Contribute"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            
        );
    }
export default MainComponent;
