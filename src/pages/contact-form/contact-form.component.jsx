import React from 'react';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";

import "./contact-form.style.css";

const ContactForm = () => {
    return (
        <div id="contact">
            <h1 className="pt-3 text-center font-details-b pb-3">CONTACT ME</h1>
            <Jumbotron className="contact-jumbotron">
                <Row>
                    <Col className="d-flex justify-content-center flex-wrap">
                        {/* Buttons */}
                        <div className="m-2">
                            <a href="mailto:siddharthpaul2015@gmail.com" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-danger" title="siddharthpaul2015@gmail.com">
                                <i className="fas fa-envelope-square"></i> Email Me
                                </Button>
                            </a>
                            </div>
                            <div className="m-2">
                            <a href="https://www.linkedin.com/in/siddharth-paul/" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Visit my LinkenIn">
                                <i className="fab fa-linkedin"></i> LinkedIn
                                </Button>
                            </a>
                            </div>
                            
                            <div className="m-2">
                            <a href="https://github.com/siddharthpaul20" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-dark" title="My other projects">
                                <i className="fab fa-github-square"></i> GitHub
                                </Button>
                            </a>
                            </div>
                            <div className="m-2">
                            <a href="https://twitter.com/siddharthpaul21" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-info" title="Tweets are welcomed!">
                                <i className="fab fa-twitter"></i> Twitter
                                </Button>
                            </a>
                            </div>
                            <div className="m-2">
                            <a href="https://www.facebook.com/siddharth.paul.18" target="_blank" rel="noopener noreferrer">
                                <Button variant="outline-primary" title="Say hello on FB">
                                <i className="fab fa-facebook-square"></i> FaceBook
                                </Button>
                            </a>
                            </div>
                    </Col>
                </Row>
            </Jumbotron>
            
        </div>
    )
}

export default ContactForm
