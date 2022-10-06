import React from "react";

import { Row, Col, Card, CardText, CardBody, CardTitle, List } from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faCube,
  faStar,
  faDatabase,
  faTerminal,
} from "@fortawesome/free-solid-svg-icons";
import {
  faLinux,
  faPhp,
  faJsSquare,
  faPython,
  faCss3,
  faHtml5,
  faReact,
  faAngular,
  faVuejs,
  faSass,
  faBootstrap,
  faSymfony,
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {
  return (
    <section class="page-section text-color mb-0">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-color">
          About Me
        </h2>
        <div class="divider-custom divider-color">
            <div class="divider-custom-line"></div>
            <div class="divider-custom-icon"><FontAwesomeIcon icon={faCode} /> </div>
            <div class="divider-custom-line"></div>
        </div>
        <div class="row justify-content-center">
          <div class="col-md-4" data-aos="zoom-in">
            <Card className="shadow mb-3 crystal-card">
              <CardBody>
                <CardTitle tag="h5" className="text-center text-color">
                  ME
                </CardTitle>
                <CardText>
                  <p class="lead text-justify text-color">
                    Hello there, I'm Alexis Mora, an enthusiastic software
                    engineer with 3+ years of experience in web development,
                    automatization with Raspberry Pi (Raspbian + Python), and
                    mobile development. In my previous roles, I worked as a
                    Full Stack Web Developer.
                  </p>
                  <p class="lead text-justify text-color">My hobbies are: </p>
                  <List type="unstyled">
                    <li className="text-color">
                      <FontAwesomeIcon icon={faStar} /> Keep me learn about
                      tech, programming and Linux.
                    </li>
                    <li className="text-color">
                      <FontAwesomeIcon icon={faStar} /> Play videogames.
                    </li>
                    <li className="text-color">
                      <FontAwesomeIcon icon={faStar} /> Discover new music.
                    </li>
                  </List>
                </CardText>
              </CardBody>
            </Card>
          </div>
          <div class="col-md-3" data-aos="zoom-in">
            <Card className="shadow mb-3  crystal-card">
              <CardBody>
                <CardTitle tag="h5" className="text-center text-color">
                  SKILLS
                </CardTitle>
                  <List type="unstyled">
                    <li className="text-color">
                      <FontAwesomeIcon icon={faCube} /> Adaptability
                    </li>
                    <li className="text-color">
                      <FontAwesomeIcon icon={faCube} /> Agile processes
                    </li>
                    <li className="text-color">
                      <FontAwesomeIcon icon={faCube} /> Excellent
                      communication skills
                    </li>
                    <li className="text-color">
                      <FontAwesomeIcon icon={faCube} /> Strong collaboration
                      skills
                    </li>
                    <li className="text-color">
                      <FontAwesomeIcon icon={faCube} /> Practical knowledge of
                      SQL and database concepts
                    </li>
                    <li className="text-color">
                      <FontAwesomeIcon icon={faCube} /> Intermediate knowledge
                      of GIT
                    </li>
                    <li className="text-color">
                      <FontAwesomeIcon icon={faCube} /> Intermediate knowledge
                      of Bash/Shell
                    </li>
                  </List>
              </CardBody>
            </Card>
          </div>
          <div class="col-md-5" data-aos="zoom-in">
            <Card className="shadow mb-3 px-2 crystal-card">
              <CardBody>
                <CardTitle tag="h5" className="text-center text-color">
                  STACK
                </CardTitle>
                <Row>
                  <Col md="4" className="text-center">
                  <List type="unstyled">
                    <li className="text-color">
                      <FontAwesomeIcon icon={faJsSquare} size="2x" /> <br /> Javascript
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faPhp} size="2x" /> <br /> PHP
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faPython} size="2x" /> <br /> Python
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faDatabase} size="2x" /> <br /> SQL
                    </li>
                  </List>
                  </Col>
                  <Col md="4" className="text-center">
                    <List type="unstyled">
                    <li className="text-color">
                      <FontAwesomeIcon icon={faReact} size="2x" /> <br /> ReactJS
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faAngular} size="2x" /> <br /> Angular
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faVuejs} size="2x" /> <br /> Vue
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faSymfony} size="2x" /> <br /> Symfony
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faBootstrap} size="2x" /> <br /> Bootstrap
                    </li>
                    </List>
                  </Col>
                  <Col md="4" className="text-center">
                    <List type="unstyled">
                    <li className="text-color">
                      <FontAwesomeIcon icon={faHtml5} size="2x" /> <br /> HTML 5
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faCss3} size="2x" /> <br /> CSS 3
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faSass} size="2x" /> <br /> Sass
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faLinux} size="2x" /> <br /> Linux
                    </li>
                    <br />
                    <li className="text-color">
                      <FontAwesomeIcon icon={faTerminal} size="2x" /> <br /> Terminal
                    </li>
                    </List>
                  </Col>
                </Row>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutMe;
