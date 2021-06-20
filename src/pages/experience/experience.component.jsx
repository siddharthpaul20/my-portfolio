import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Tilt from "react-tilt";
import L_CLEAR_TRAIL from "../../assets/img/experience/cleartrail-logo.svg";

import "./experience.style.css";

const Experience = () => {
    return (
        <div id="experience">
             <h1 className="pt-3 text-center font-details-b pb-3">EXPERIENCE</h1>
             <Jumbotron className="jumbo-style">
                <Container>
                    <Tilt options={{ max: 25 }}>
                        <Card>
                            <Card.Header as="h5" className="d-flex justify-content-center flex-wrap">
                                <Card.Img variant="top" className="img-resize" src={L_CLEAR_TRAIL} alt="Clear Trail logo" />
                            </Card.Header>
                            <Card.Body className="d-flex justify-content-center flex-column">
                                <div>
                                <Card.Title className="text-center">Associate Software Engineer</Card.Title>
                                </div>
                                <div>
                                <Card.Text className="text-center style">
                                    <strong className="body-title-style ">Backend Developer</strong>
                                    <br />
                                    <strong>Technology:</strong> Java, Springboot, Hibernate, HSQL
                                    <br />
                                    <strong>Duration:</strong> Aug 2020 - Present
                                    <br/>
                                    <strong> Description </strong>
                                    <ul className="text-left">
                                        ⭐Working on a Business Intelligence tool, <strong>"Klera"</strong> that access data from across multiple data silos, compute insights, and write-back to end systems.
                                        <br />🚩Identified and discussed product features with business stakeholders and product owners, performed feasibility analysis, and created high-level and low-level designs for features to be implemented.
                                        <br />🚩Work on improving the existing services and developing new ones to provide users with a better product experience.
                                        <br />🚩Improved performance of query execution in the database that is being used so as to improve the loading time of data on the frontEnd from 8min time to under 1min time.
                                        <br />🚩In a short span of time became an important contributor to the Team's progress and helped in the load balancing of the team.
                                    {/* <li><strong>Co-created</strong> React Document used as a guide for new developers.</li> */}
                                    </ul>
                                </Card.Text>
                                </div>
                            </Card.Body>
                        </Card>
                    </Tilt>
                </Container>
             </Jumbotron>
            
        </div>
    )
}

export default Experience
