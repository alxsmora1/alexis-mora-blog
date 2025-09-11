import React from "react";

import {
  Row,
  Col,
  Card,
  CardText,
  CardBody,
  CardTitle,
  List
} from "reactstrap";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCube,
  faStar,
  faPenToSquare,
  faDatabase,
  faTerminal,
  faBriefcase,
  faCalendar,
  faMapMarkerAlt
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
  faSass,
  faBootstrap,
  faSymfony,
  faDocker,
  faGithub
} from "@fortawesome/free-brands-svg-icons";

const AboutMe = () => {

  const skills = [
    { name: 'Web Development', icon: faCube, color: '#007bff' },
    { name: 'Mobile Development', icon: faCube, color: '#28a745' },
    { name: 'Agile and Scrum', icon: faCube, color: '#ffc107' },
    { name: 'DevOps - CI/CD', icon: faCube, color: '#dc3545' },
    { name: 'GIT Version Control', icon: faCube, color: '#fd7e14' },
    { name: 'Bash/Shell Scripting', icon: faTerminal, color: '#20c997' },
    { name: 'SQL and Database Concepts', icon: faCube, color: '#6f42c1' },
    { name: 'Containerization Concepts', icon: faCube, color: '#007bff' },
    { name: 'Problem Solving', icon: faStar, color: '#fd7e14' },
    { name: 'Critical Thinking', icon: faStar, color: '#ffc107' },
    { name: 'Effective Communication', icon: faStar, color: '#28a745' },
    { name: 'Team Collaboration', icon: faStar, color: '#007bff' }
  ];

  const technologies = {
    languages: [
      { name: 'JavaScript', icon: faJsSquare, color: '#f7df1e' },
      { name: 'TypeScript', icon: faJsSquare, color: '#007acc' },
      { name: 'PHP', icon: faPhp, color: '#777bb4' },
      { name: 'Python', icon: faPython, color: '#3776ab' },
      { name: 'SQL', icon: faDatabase, color: '#336791' }
    ],
    frameworks: [
      { name: 'React', icon: faReact, color: '#61dafb' },
      { name: 'Angular', icon: faAngular, color: '#dd0031' },
      { name: 'Symfony', icon: faSymfony, color: '#000000' },
      { name: 'Bootstrap', icon: faBootstrap, color: '#7952b3' },
      { name: 'TailwindCSS', icon: faCss3, color: '#38bdf8' },
    ],
    tools: [
      { name: 'HTML5', icon: faHtml5, color: '#e34f26' },
      { name: 'CSS3', icon: faCss3, color: '#1572b6' },
      { name: 'Sass', icon: faSass, color: '#cc6699' },
      { name: 'Linux', icon: faLinux, color: '#000' },
      { name: 'Terminal', icon: faTerminal, color: '#4ec5e7' },
      { name: 'Docker', icon: faDocker, color: '#2496ed' },
      { name: 'Postman', icon: faCube, color: '#ff6c37' },
      { name: 'GitHub Actions', icon: faGithub, color: '#181717' },
    ]
  };

  const workExperience = [
    {
      title: "Full Stack Web Developer",
      company: "Intekra",
      location: "Tabasco, Mexico (Remote)",
      period: "Jan 2018 - March 2021",
      description: "Developed and maintained web applications using React, PHP and MySQL. Collaborated with cross-functional teams to deliver high-quality software solutions.Helped implement automation solutions using Raspberry Pi and Python scripts.",
      technologies: ["React", "TypeScript", "Python", "Automation", "PHP", "Raspberry Pi", "Linux", "MySQL"]
    },
    {
      title: "SoftwareConsultant",
      company: "Minsait (Indra Group)",
      location: "Mexico City, Mexico (Remote)",
      period: "Apr 2021 - Present",
      description: "Built responsive web applications. Implemented automated testing and CI/CD pipelines to improve development workflow. Work with IA agents to enhance applications and accelerate development.",
      technologies: ["Angular", "React", "Python", "Github Actions", "IA", "Azure"]
    }
  ];

  const listItems = skills.map((skill, idx) => (
    <div className="col-md-4 my-2 align-items-center justify-content-center" key={idx}>
      <li className="text-color d-flex">
        <FontAwesomeIcon
          icon={skill.icon}
          style={{ color: skill.color, marginRight: '10px' }}
        />
        {skill.name}
      </li>
    </div>
  ));

  return (
    <section class="page-section text-color mb-0">
      <div class="container">
        <h2 class="page-section-heading text-center text-uppercase text-color mb-3">
          Resume
        </h2>
        <small class="text-right text-color mb-2 d-block">
          <strong>Last Updated: </strong> September 2025
        </small>
        <div class="row justify-content-center">
          <div class="col-md-12" data-aos="zoom-in">
            <Card className="mb-3 crystal-card shadow">
              <CardBody>
                <CardTitle tag="h5" className="text-center text-color mb-4">
                  About Me
                </CardTitle>
                <CardText>
                  <p class="text-justify text-color mb-4">
                    Hello there, I'm <strong>Alexis Mora</strong>, an enthusiastic software
                    engineer with <strong>7+ years of experience</strong> in web development,
                    automation with Raspberry Pi (Raspbian + Python), and
                    mobile development. In my previous roles, I worked as a Full
                    Stack Web Developer and software consultant.
                  </p>
                  <div class="row">
                    <div class="col-md-6">
                      <h6 class="text-color mb-3">Interests & Hobbies:</h6>
                  <List type="unstyled">
                    <li className="text-color mb-2 d-flex align-items-center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: '#ffd700', marginRight: '10px' }}
                      />
                      Keep learning new technologies, programming and Linux
                    </li>
                    <li className="text-color mb-2 d-flex align-items-center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: '#ffd700', marginRight: '10px' }}
                      />
                      Play videogames (RPGs and RTS)
                    </li>
                    <li className="text-color mb-2 d-flex align-items-center">
                      <FontAwesomeIcon
                        icon={faStar}
                        style={{ color: '#ffd700', marginRight: '10px' }}
                      />
                      Discover new music and artists on Spotify
                    </li>
                  </List>
                    </div>
                    <div class="col-md-6">
                      <h6 class="text-color mb-3">Currently learning</h6>
                      <List type="unstyled">
                        <li className="text-color mb-2 d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: '#007acc', marginRight: '10px' }}
                          />
                          React Native
                        </li>
                        <li className="text-color mb-2 d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: '#007acc', marginRight: '10px' }}
                          />
                          IA, LLMs and Chatbots
                        </li>
                        <li className="text-color mb-2 d-flex align-items-center">
                          <FontAwesomeIcon
                            icon={faPenToSquare}
                            style={{ color: '#007acc', marginRight: '10px' }}
                          />
                          Cloud Computing (AWS and Azure)
                        </li>
                      </List>
                    </div>
                  </div>
                </CardText>
              </CardBody>
            </Card>
          </div>

          {/* Work Experience Card */}
          <div class="col-md-12" data-aos="zoom-in">
            <Card className="mb-3 crystal-card shadow">
              <CardBody>
                <CardTitle tag="h5" className="text-center text-color mb-4">
                  <FontAwesomeIcon
                    icon={faBriefcase}
                    style={{ color: '#007bff', marginRight: '10px' }}
                  />
                  Work Experience
                </CardTitle>
                <div className="row">
                  {workExperience.map((job, idx) => (
                    <div className="col-md-6 mb-4" key={idx}>
                      <div className="border-left pl-3" style={{ borderLeftColor: '#007bff', borderLeftWidth: '3px' }}>
                        <h6 className="text-color font-weight-bold mb-2">{job.title}</h6>
                        <p className="text-color mb-1">
                          <FontAwesomeIcon
                            icon={faBriefcase}
                            style={{ color: '#6c757d', marginRight: '8px' }}
                          />
                          <strong>{job.company}</strong>
                        </p>
                        <p className="text-color mb-1">
                          <FontAwesomeIcon
                            icon={faMapMarkerAlt}
                            style={{ color: '#6c757d', marginRight: '8px' }}
                          />
                          {job.location}
                        </p>
                        <p className="text-color mb-2">
                          <FontAwesomeIcon
                            icon={faCalendar}
                            style={{ color: '#6c757d', marginRight: '8px' }}
                          />
                          {job.period}
                        </p>
                        <p className="text-color mb-3 text-justify">
                          {job.description}
                        </p>
                        <div className="d-flex flex-wrap">
                          {job.technologies.map((tech, techIdx) => (
                            <span
                              key={techIdx}
                              className="badge badge-secondary mr-1 mb-1"
                              style={{
                                backgroundColor: '#007bff',
                                color: 'white',
                                fontSize: '0.75rem'
                              }}
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>
          </div>

          <div class="col-md-6" data-aos="zoom-in">
            <Card className="shadow mb-3 crystal-card">
              <CardBody>
                <CardTitle tag="h5" className="text-center text-color mb-4">
                  Professional Skills
                </CardTitle>
                <div class="row">
                    {listItems}
                </div>
              </CardBody>
            </Card>
          </div>
          <div class="col-md-6" data-aos="zoom-in">
            <Card className="shadow mb-3 px-2 crystal-card">
              <CardBody>
                <CardTitle tag="h5" className="text-center text-color mb-4">
                  Technologies & Tools
                </CardTitle>

                {/* Programming Languages */}
                <Row className="mb-4">
                  <Col md="12">
                    <h6 className="text-color mb-3 text-center">Programming Languages</h6>
                  </Col>
                  {technologies.languages.map((tech, idx) => (
                    <Col md="3" className="text-center mb-3" key={idx}>
                      <div className="d-flex flex-column align-items-center">
                        <FontAwesomeIcon
                          icon={tech.icon}
                          size="3x"
                          style={{ color: tech.color, marginBottom: '10px' }}
                        />
                        <span className="text-color small">{tech.name}</span>
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* Frameworks & Libraries */}
                <Row className="mb-4">
                  <Col md="12">
                    <h6 className="text-color mb-3 text-center">Frameworks & Libraries</h6>
                  </Col>
                  {technologies.frameworks.map((tech, idx) => (
                    <Col md="3" className="text-center mb-3" key={idx}>
                      <div className="d-flex flex-column align-items-center" style={{ minHeight: '80px' }}>
                        <FontAwesomeIcon
                          icon={tech.icon}
                          size="3x"
                          style={{ color: tech.color, marginBottom: '10px' }}
                        />
                        <span className="text-color small">{tech.name}</span>
                      </div>
                    </Col>
                  ))}
                </Row>

                {/* Tools & Technologies */}
                <Row>
                  <Col md="12">
                    <h6 className="text-color mb-3 text-center">Tools & Technologies</h6>
                  </Col>
                  {technologies.tools.map((tech, idx) => (
                    <Col md="3" className="text-center mb-3" key={idx}>
                      <div className="d-flex flex-column align-items-center">
                        <FontAwesomeIcon
                          icon={tech.icon}
                          size="3x"
                          style={{ color: tech.color, marginBottom: '10px' }}
                        />
                        <span className="text-color small">{tech.name}</span>
                      </div>
                    </Col>
                  ))}
                </Row>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
