import React from 'react';
import { Timeline, Events, UrlButton, ImageEvent } from "@merc/react-timeline";
import Accordion from 'react-bootstrap/Accordion';
import Card from "react-bootstrap/Card";

// projects logo
import L_My_Portfolio from "../../assets/img/projects/my-portfolio.webp";
import L_Mera_Dost from "../../assets/img/projects/meradost.webp";
import L_Memories_Project from "../../assets/img/projects/memoriesProject.webp";
import L_Gmail_Clone from "../../assets/img/projects/Gmailclone.webp";
import L_Tinder_Clone from "../../assets/img/projects/tinderClone.webp";

// skills
import L_REACT from "../../assets/img/skills/react.svg";
import L_NODE_JS from "../../assets/img/skills/nodejs.svg";
import L_EXPRESS from "../../assets/img/skills/express.svg";
import L_POSTGRESQL from "../../assets/img/skills/postgresql.svg";
import L_MONGODB from "../../assets/img/skills/mongodb.svg";
import Image from "react-bootstrap/Image";
import L_REDUX from "../../assets/img/skills/redux.svg";
import L_HTML5 from "../../assets/img/skills/html-5.svg";
import L_CSS3 from "../../assets/img/skills/css3.svg";
import L_BOOTSTRAP4 from "../../assets/img/skills/bootstrap-4.svg";
import L_DJANGO from "../../assets/img/skills/django.svg";
import L_DIGITAL_OCEAN from "../../assets/img/skills/digital-ocean.svg";
import L_GIT from "../../assets/img/skills/github-api.svg";
import L_MATERIALUI from "../../assets/img/skills/material-ui-1.svg";
import L_REACT_BOOTSTRAP from "../../assets/img/skills/react-bootstrap.svg";
import L_SPRING_BOOT from "../../assets/img/skills/springboot.svg";
import L_JAVA from "../../assets/img/skills/java.svg";
import L_HEROKU from "../../assets/img/skills/heroku.svg";
import L_NETLIFY from "../../assets/img/skills/netlify.svg";
import L_Firebase from "../../assets/img/skills/firebase.svg";

import "./projects-timeline.style.css";

const ProjectTimeline = () => {
    return (
        <div id="projects">
            <h1 className="pt-3 text-center font-details-b pb-3">PROJECTS</h1>
            <Timeline>
                <Events>
                    {/* Project: My-Portfolio */}
                    <ImageEvent date="20/06/2021" className="text-center" text="My Portfolio" src={L_My_Portfolio} alt="My Portfolio">
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This is mine web portfolio created with React and React-Bootstrap.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>About me</li>
                                    <li>Skill sets</li>
                                    <li>Work experience</li>
                                    <li>Projects timeline</li>
                                    <li>Contact info</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_REACT}
                                            alt="React"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_REACT_BOOTSTRAP}
                                            alt="React-Bootstrap"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        React-Bootstrap
                                        </span>
                                    </li>
                                    
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://siddharthpaul20.github.io/my-portfolio/"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://github.com/siddharthpaul20/my-portfolio/"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Mera Dost */}
                    <ImageEvent date="16/05/2021" className="text-center" text="Mera Dost" src={L_Mera_Dost} alt="Mera Dost">
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> Mera Dost" is a web application made by me, that provide services of ⭐Converting various documents of formats - .docx, .doc, .pptx, .ppt, .odt, .jpeg/.jpg, .png to .pdf format. ⭐Compressing pdf document consisting of images, compressing .jpeg/.jpg image
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Convert doc/docx to pdf</li>
                                    <li>Convert ppt/pptx to pdf</li>
                                    <li>Convert jpeg/jpg to pdf</li>
                                    <li>Convert png to pdf</li>
                                    <li>Convert odt to pdf</li>
                                    <li>Compress pdf doc</li>
                                    <li>Compress jpeg/jpg image</li>
                                    <li>Compress png image</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_REACT}
                                            alt="React"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_SPRING_BOOT}
                                            alt="SpringBoot"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        SpringBoot
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_JAVA}
                                            alt="Express"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Java Open Source APIs
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_MATERIALUI}
                                            alt="Material-UI"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Material-UI
                                        </span>
                                    </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://mera-dost.netlify.app/"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://github.com/siddharthpaul20/mera-dost-backend"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Memories-Point */}
                    <ImageEvent date="20/04/2021" className="text-center" text="Memories-Point" src={L_Memories_Project} alt="Memories-Point">
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> Memories Point" is a social media web application, which have below mentioned features.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>user can register and sign in using their email-Id or they can also sign in through Google.</li>
                                    <li>Signed In user can create Memories of their own - consisting of an image file, title, message and tags.</li>
                                    <li>Signed In user can like the Memories of other users.</li>
                                    <li>Signed In user can Edit/Delete the memories created by him/her.</li>
                                    <li>Non-signed In user can view the memories of other users but cannot like them unless he/she signs in.</li>
                                    <li>Signed In user remains sign in for an hour once signed in unless user logout before.</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_REACT}
                                            alt="React"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_NODE_JS}
                                            alt="Node.js"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Node.js
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_MONGODB}
                                            alt="MongoDB"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        MongoDB
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HEROKU}
                                            alt="Heroku"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Heroku
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_NETLIFY}
                                            alt="Netlify"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Netlify
                                        </span>
                                    </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://memoriespoint.netlify.app/"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://github.com/siddharthpaul20/Memories_Project"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Tinder Clone */}
                    <ImageEvent date="14/04/2021" className="text-center" text="Basic Front End Clone of Tinder" src={L_Tinder_Clone} alt="Basic Front End Clone of Tinder">
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This project is a very basic clone of front-end of Tinder.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>This project has the functionality of Left/Right swipe on UI.</li>
                                    <li>Fetching user profile details from MongoDB at the backend.</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_REACT}
                                            alt="React"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_NODE_JS}
                                            alt="Node.js"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Node.js
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_EXPRESS}
                                            alt="Express"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Express
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_MONGODB}
                                            alt="MongoDB"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        MongoDB
                                        </span>
                                    </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://tinder-clone-87aad.web.app/"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://github.com/siddharthpaul20/tinder-clone-front-end"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                        </div>
                    </ImageEvent>

                    {/* Project: Gmail Clone */}
                    <ImageEvent date="12/04/2021" className="text-center" text="Basic Front End Clone of Gmail" src={L_Gmail_Clone} alt="Basic Front End Clone of Gmail">
                        <div className="d-flex justify-content-between flex-column mt-1">
                        <div>
                            <Accordion>
                            <Card>
                                <Accordion.Toggle
                                as={Card.Header}
                                eventKey="0"
                                className="p-2 text-center accordian-main"
                                >
                                PROJECT DETAILS
                                </Accordion.Toggle>

                                <Accordion.Collapse eventKey="0" className="text-left">
                                <Card.Body>
                                    <strong>Description:</strong> This project is a basic clone of front-end of Gmail.
                                    <hr />
                                    <strong>Features:</strong>
                                    <ul className="list-styles pt-1">
                                    <li>Allows user to sign in through Google.</li>
                                    <li>Have client-side routing to allow a user to navigate across different emails in inbox.</li>
                                    <li>On clicking on Compose button a form opens up for sending mail. Though sent mail feature is not implemented.</li>
                                    </ul>
                                    <hr />
                                    <strong>Tech used:</strong>
                                    <ul>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_HTML5}
                                            alt="HTML 5"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        HTML5
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_CSS3}
                                            alt="CSS 3"
                                            rounded
                                            className="image-style m-1"
                                        ></Image>{" "}
                                        CSS3
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_REACT}
                                            alt="React"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        React
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_MONGODB}
                                            alt="MongoDB"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        MongoDB
                                        </span>
                                    </li>
                                    <li>
                                        <span className="p-2">
                                        <Image
                                            src={L_Firebase}
                                            alt="Firebase"
                                            rounded
                                            className="image-style1 m-1"
                                        ></Image>{" "}
                                        Firebase
                                        </span>
                                    </li>
                                    </ul>
                                </Card.Body>
                                </Accordion.Collapse>
                            </Card>
                            </Accordion>
                        </div>
                        <div className="d-flex justify-content-between flex-nowrap text-center">
                            <UrlButton
                            href="https://clone-98436.web.app/"
                            target="_blank"
                            >
                            SEE LIVE
                            </UrlButton>
                            <UrlButton
                            href="https://github.com/siddharthpaul20/gmail-clone"
                            target="_blank"
                            >
                            SOURCE CODE
                            </UrlButton>
                        </div>
                        </div>
                    </ImageEvent>

                </Events>
            </Timeline>
        </div>
    )
}

export default ProjectTimeline
