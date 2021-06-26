import React, { useState, useEffect } from 'react';
import {Button, CardGroup} from 'reactstrap';
import {
    Card, CardImg, CardTitle, CardText,
    CardSubtitle, CardBody
} from 'reactstrap';
import { Badge } from 'reactstrap';
const PostQuestion = () =>
{
    return (
<div>
            <div className="section2">
                <div className="container">
                    <h2 className="display-6" >Can you solve these ?</h2>
                    <br />
                    <div className="row">
                        <CardGroup>
                            <div className="row">
                                <div className="col-md-4">
                                    <Card className="seccard">
                                        <CardImg top width="100%" src="./images/Ques1.png" alt="Ques1" />
                                        <CardBody>
                                            <CardTitle tag="h5">Mathematics <Badge style={{ color: 'black', background: 'yellow' }}>Solved</Badge></CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Rewarded</CardSubtitle>
                                            <CardText>Question posted by Admin. <br /> Submit your answer and hear from us soon.</CardText>
                                            <div className="buttonGroup">
                                                <Button disabled className="earnButton" href="https://forms.gle/3LikKa6LcStX9cyc8" outline>Submit</Button>
                                                <Button className="earnButton" href="https://drive.google.com/file/d/14dR28ByEHQQJ-TcMrpnslVDctKqKMMb9/view?usp=sharing" outline>Solution</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>

                                <div className="col-md-4">
                                    <Card className="seccard">
                                        <CardImg top width="100%" src="./images/Ques2a.png" alt="Ques2" />
                                        <CardBody>
                                            <CardTitle tag="h5">Mathematics <Badge style={{ color: 'black', background: 'yellow' }}>Solved</Badge></CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Rewarded</CardSubtitle>
                                            <CardText>Question posted by Admin. <br /> Submit your answer and hear from us soon.</CardText>
                                            <div className="buttonGroup">
                                                <Button disabled className="earnButton" href="https://forms.gle/3LikKa6LcStX9cyc8" outline>Submit</Button>
                                                <Button className="earnButton" href="https://drive.google.com/file/d/196V7m67swnNRplloW_x6rKy0HJwHejJU/view?usp=sharing" outline>Solution</Button>
                                            </div>
                                        </CardBody>
                                    </Card>
                                </div>
                                <div className="col-md-4">
                                    <Card className="seccard">
                                        <CardImg top width="100%" src="./images/Ques3.png" alt="Ques3" />
                                        <CardBody>
                                            <CardTitle tag="h5">Mathematics</CardTitle>
                                            <CardSubtitle tag="h6" className="mb-2 text-muted">Eligible for Reward</CardSubtitle>
                                            <CardText>Question posted by Admin. <br /> Submit your answer and hear from us soon.</CardText>
                                            <Button className="earnButton" href="https://forms.gle/1P9NYEiKGt9VGbi3A" outline>Submit</Button>
                                        </CardBody>
                                    </Card>
                                </div>
                            </div>
                        </CardGroup>
                    </div>
                </div>
            </div>
</div>
    );
}
export default PostQuestion;