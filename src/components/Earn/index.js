import React, { useState, useEffect } from 'react';
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap';
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
import ReactGA from "react-ga";
import manread from '../../Images/manreading.png';

const StyledTableCell = withStyles((theme) => ({
    head: {
        backgroundColor: '#0066b2',
        color: theme.palette.common.white,
        border: 'none'
    },
    body: {
        fontSize: 14,
        border: 'none',
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
const Earn = (props) => {
    useEffect(() => {
        ReactGA.initialize('UA-198309082-1')
        ReactGA.pageview(window.location.pathname + window.location.search);
    }, [])
    const classes = useStyles();
    const [openModal, toggleModal] = useState(false);
    const openForm = () => {
        ReactGA.event({
            category: 'Button',
            action: 'User clicked on Attempt Quiz'
        })
        toggleModal(!openModal);
    }

    const practiceButtonClicked = () => {
        ReactGA.event({
            category: 'Button',
            action: 'User clicked on Practice Quiz'
        })
    }
    return(
        <div className = "earnContainer">
        <br/>
            <div id="reward" className="container">
                <div className="row">
                    <div class="col-lg-8">
                        <h2 className="display-7">Earn your reward !</h2>
                    </div>
                </div>
            </div>
            <br/>
            <div className="container">
                <div className=" row">
                    <div className="col-lg-8 cold-sm-12">
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
                                        <StyledTableCell align="right"> <Button onClick={openForm} color="success" target="_blank" size="sm"> Attempt </Button></StyledTableCell>
                                        <StyledTableCell align="right">TBA</StyledTableCell>
                                        <StyledTableCell align="right">TBA</StyledTableCell>
                                    </StyledTableRow>

                                    <StyledTableRow >
                                        <StyledTableCell component="th" scope="row">
                                            SkilWil Mathematics Quiz <Badge style={{ color: 'black', background: 'grey' }}> Expired</Badge>
                                        </StyledTableCell>
                                        <StyledTableCell align="right">Ineligible</StyledTableCell>
                                        <StyledTableCell align="right"> <Button onClick={practiceButtonClicked} href="https://forms.gle/GkzqzcboV3FPSaS46" target="_blank" color="warning" size="sm"> Practice </Button></StyledTableCell>
                                        <StyledTableCell align="right">2</StyledTableCell>
                                        <StyledTableCell align="right">TBA</StyledTableCell>
                                    </StyledTableRow>
                                </TableBody>
                            </Table>
                        </TableContainer>
                    </div>
                    <div className="col-lg-4 col-sm-12">
                        <img src={manread} className="tableimage" alt="BigCo Inc. logo" />
                    </div>
                </div>
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
        </div> );
}
export default Earn;