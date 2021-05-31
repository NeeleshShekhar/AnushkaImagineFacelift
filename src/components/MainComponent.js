import React,{useState} from 'react';
import { Nav, Navbar, NavbarBrand, NavbarToggler, Collapse, Button, NavItem, NavLink, Jumbotron, CardGroup, Modal, ModalHeader, ModalBody, ModalFooter} from 'reactstrap';
import Typography from '@material-ui/core/Typography';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TelegramIcon from '@material-ui/icons/Telegram';
import MenuIcon from '@material-ui/icons/Menu';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import Helmet from "react-helmet";
import { Badge } from 'reactstrap';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#0066b2',
        color: theme.palette.common.white,
        border : 'none'
    },
    body: {
        fontSize: 14,
        border:'none',
    },
}))(TableCell);

const StyledTableRow = withStyles((theme) => ({
    root: {
        '&:nth-of-type(odd)': {

            backgroundColor: '#6699CC',
        },
        '&:nth-of-type(even)': {
            backgroundColor: '#F0F8FF',
        },
    },
}))(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

function MainComponent(props) {
    const classes = useStyles();
    const [navOpen, setNavOpen] = useState(false);
    const [openModal, toggleModal] = useState(false);

    const openForm = () => {
        toggleModal(!openModal);
    }
    const switchNav = () =>
    {
     setNavOpen(!navOpen);  
    }
        return (
            <div  >
            
                <Navbar  nav-fill expand="md" >
                  
                    <div className="container">
                        <NavbarBrand className="mr-auto logo" href="/" ><img src='./images/SkilWil.png' height="30px" width="100px" alt='SKILWIL' /></NavbarBrand>
                     
                        <NavbarToggler 
                        // style={{ backgroundColor : 'blue', background: 'url("skilwilicon.png")', backgroundSize : '100% 100%'}} 
                        onClick={switchNav} 
                        className = "mr-2" >
                        <MenuIcon style = {{fontSize : "30px"}}/>
                        </NavbarToggler>
                        <Collapse navbar isOpen = {navOpen} >
                      
                            <Nav navbar className = "justify-content-end" style = {{width :'100%'}}>
                            <NavItem >
                                <NavLink onClick={switchNav} className="nav-link" href = "https://forms.gle/2GyMKybVWRX5h2sF6" > Doubt Clearing <Badge color = "primary" style = {{backgroundColor : 'red'}}>FREE</Badge> </NavLink>
                            </NavItem>
                            <NavItem>
                                    <NavLink className="nav-link" onClick={switchNav}  href = "#reward">Earn</NavLink>
                            </NavItem>
                                <NavItem >
                                    <NavLink className="nav-link" onClick={switchNav}  href= "https://forms.gle/vcXEqv1QAg5QsGiTA" >Contact us</NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink onClick={switchNav} className="nav-link" href = "#contribute">Contribute</NavLink>
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
  <p class="lead"><span style = {{color : '#0066b2', fontWeight : 'bold'}}>SkilWil</span> provides a platform which exposes an individual to brainstorming contests which enables them to explore, assess and deepen their depth of knowledge.
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
                         <CardImg top width="100%" src="./images/Ques1.png" alt="Ques1" />
                            <CardBody>
                                <CardTitle tag="h5">Mathematics <Badge style={{ color: 'black' , background : 'yellow'}}>Solved</Badge></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Rewarded</CardSubtitle>
                                <CardText>Question posted by Admin. <br/> Submit your answer and hear from us soon.</CardText>
                               <div className = "buttonGroup">
                                <Button disabled className = "earnButton" href = "https://forms.gle/3LikKa6LcStX9cyc8" outline>Submit</Button>
                                                <Button className="earnButton" href="https://drive.google.com/file/d/14dR28ByEHQQJ-TcMrpnslVDctKqKMMb9/view?usp=sharing" outline>Solution</Button>
                                 </div>
                            </CardBody>
                        </Card>
                        </div>

                       <div className="col-md-4">
                        <Card>
                            <CardImg top width="100%" src="./images/Ques2a.png"  alt="Ques2" />
                            <CardBody>
                                <CardTitle tag="h5">Mathematics <Badge style={{ color: 'black' , background : 'yellow'}}>Solved</Badge></CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Rewarded</CardSubtitle>
                                <CardText>Question posted by Admin. <br/> Submit your answer and hear from us soon.</CardText>
                                            <div className="buttonGroup">
                                                <Button disabled className="earnButton" href="https://forms.gle/3LikKa6LcStX9cyc8" outline>Submit</Button>
                                                <Button className="earnButton" href="https://drive.google.com/file/d/196V7m67swnNRplloW_x6rKy0HJwHejJU/view?usp=sharing" outline>Solution</Button>
                                            </div>
                            </CardBody>
                        </Card>
                        </div>
                        <div className = "col-md-4">
                        <Card>
                            <CardImg top width="100%" src="./images/Ques3.png" alt="Ques3" />
                            <CardBody>
                                <CardTitle tag="h5">Mathematics</CardTitle>
                                <CardSubtitle tag="h6" className="mb-2 text-muted">Eligible for Reward</CardSubtitle>
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
                <div className = "container">
                    <TableContainer component={Paper}>
                        <Table className={classes.table} aria-label="customized table">
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Quiz Type</StyledTableCell>
                                    <StyledTableCell align="right">Reward</StyledTableCell>
                                    <StyledTableCell align="right">Status</StyledTableCell>
                                    <StyledTableCell align="right">Winners</StyledTableCell>
                                    <StyledTableCell align="right">Solution</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>

                                <StyledTableRow >
                                    <StyledTableCell onClick={openForm} style={{ cursor: 'pointer' }} component="th" scope="row">
                                        SkilWil Mathematics Quiz <Badge style={{ color: 'black', background: 'red' }}>Running</Badge>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">Eligible</StyledTableCell>
                                    <StyledTableCell align="right"> <Button onClick={openForm} color="success" size="sm"> Attempt </Button></StyledTableCell>
                                    <StyledTableCell align="right">TBA</StyledTableCell>
                                    <StyledTableCell align="right">TBA</StyledTableCell>
                                </StyledTableRow>

                                <StyledTableRow >
                                    <StyledTableCell component="th" scope="row">
                                        SkilWil Mathematics Quiz <Badge style={{ color: 'black', background: 'grey' }}> Expired</Badge>
                                    </StyledTableCell>
                                    <StyledTableCell align="right">Ineligible</StyledTableCell>
                                    <StyledTableCell align="right"> <Button href="https://forms.gle/GkzqzcboV3FPSaS46" color="warning" size="sm"> Practice </Button></StyledTableCell>
                                    <StyledTableCell align="right">2</StyledTableCell>
                                    <StyledTableCell align="right">TBA</StyledTableCell>
                                </StyledTableRow>

                            </TableBody>
                        </Table>
                    </TableContainer>
                </div>

                <Modal style={{ backgroundColor: '#88C0EB' }} className="modal-container modal-fullscreen" isOpen={openModal} toggle={openForm}>
                    <ModalHeader style={{ backgroundColor: '#88C0EB', border: 'none' }}>Welcome ! All the best.</ModalHeader>
                    <ModalBody style={{ backgroundColor: '#88C0EB' }}>
                        <div class="involveme_embed" data-project="mega-quiz-maths">
                            <Helmet>
                                <script src="https://skilwil.involve.me/embed"></script>
                            </Helmet>
                        </div>
                    </ModalBody>
                    <ModalFooter style={{ backgroundColor: '#88C0EB', border: 'none', paddingRight: '30px' }}>
                        <Button color="primary" href="https://forms.gle/x54pCrPRHPQwy18x8">Contact Us</Button>{' '}
                        <Button color="secondary" onClick={openForm}>Leave</Button>
                    </ModalFooter>
                </Modal>
                <br />

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

                <br />
                <div class="footer-basic">
                    <footer>
                        <div class="social"><a href="whatsapp://send?text= https://www.skilwil.com
                                        Earn while you learn ! Join your friends in solving brainstorming question from various subject and earn rewards.
                                        Also, ask your subject doubts for free."><WhatsAppIcon style={{ fontSize: "35px" }} /></a><a href="https://twitter.com/skilwilbusiness?s=08"><TwitterIcon style={{ fontSize: "35px" }} /></a><a href="https://t.me/share/url?url=https%3A%2F%2Fwww.skilwil.com&text=Earn%20while%20you%20learn%20!%20Join%20your%20friends%20in%20solving%20brainstorming%20question%20from%20various%20subject%20and%20earn%20rewards.%20Also%2C%20ask%20your%20subject%20doubts%20for%20free"><TelegramIcon style={{ fontSize: "35px" }} /></a><a href="https://www.instagram.com/skilwil/"><InstagramIcon style={{ fontSize: "35px" }} /></a></div>
                        <ul class="list-inline">
                            <li class="list-inline-item"><a href="#">Home</a></li>
                            <li class="list-inline-item"><a href="https://forms.gle/vcXEqv1QAg5QsGiTA">Contact Us</a></li>
                            <li class="list-inline-item"><a href="https://forms.gle/6pkQi1QXtek4Lw6dA">Donate</a></li>
                        </ul>
                        <p class="copyright">SkilWil © 2020</p>
                    </footer>
                </div>
            </div>

            
        );
    }
export default MainComponent;
