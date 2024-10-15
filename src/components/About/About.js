import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import ExperienceCard from "./ExperienceCard";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";
import Campbellsville  from "../../Assets/experience/campbellsville-university.png";
import Cambrian  from "../../Assets/experience/cambrian.png";
import Lpu  from "../../Assets/experience/LPU_logo.png";
import UCO  from "../../Assets/experience/UCO.png";
import Relamco  from "../../Assets/experience/LOGO-_RELAMCO.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              Hello <strong className="purple">Everyone</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        {/* Education Section */}
        <h2>Education</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="experience-card">
              <ExperienceCard
                imgPath={Cambrian}
                title="Mobile Application Development - 2024"
                description="Cambrian College: Developed skills in designing and building multi-platform mobile applications using modern software development techniques and cloud technologies."
                link="https://cambriancollege.ca/programs/mobile-application-development"
              />
          </Col>
          <Col md={3} className="experience-card">
              <ExperienceCard
                imgPath={Campbellsville}
                title="Master's in Information Technology Management -2024"
                description="Campbellsville University: Covered a wide range of IT management topics, including management information systems, team management, project management, information systems security, and emerging technologies."
                link="https://www.campbellsville.edu/"
              />
          </Col>
          <Col md={3} className="experience-card">
              <ExperienceCard
                imgPath={Cambrian}
                title="Cybersecurity - 2023"
                description="Cambrian College: Focused on protecting information systems from cyberattacks, covering topics like infrastructure security, risk management, and legal/ethical aspects."
                link="https://cambriancollege.ca/programs/cybersecurity"
              />
          </Col>
          <Col md={3} className="experience-card">
              <ExperienceCard
                imgPath={Lpu}
                title="Mechanical Engineering -2014"
                description="Lovely Professional University: Gained a strong foundation in design, materials, manufacturing, automation, and robotics through a multidisciplinary curriculum."
                link="https://www.lpu.in/"
              />
          </Col>
        </Row>
        <br />
        <br />

        {/* Work Experience Section */}
        <h2>Work Experience</h2>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={3} className="experience-card">
              <ExperienceCard
                imgPath={Relamco}
                title="Project Coordinator(Web Developer) Internship - Present"
                description="Redesigned company website, implemented Google Workspace tools, created marketing materials, and recommended mobile app development to enhance training accessibility and user engagement."
                link="https://relamco.com/"
              />
          </Col>
          <Col md={3} className="experience-card">
              <ExperienceCard
                imgPath={UCO}
                title="Assistant Branch Manager 2020 - 2023"
                description="Managed branch operations, led and supported the branch team, developed customer retention strategies, and provided technical support, resulting in increased customer base, improved customer retention, and enhanced branch profitability"
                link="https://www.ucobank.com/en/"
              />
          </Col>
        </Row>
        <br />
        <br />
        <h1 className="project-heading">
          My <strong className="purple">Skillset </strong>
        </h1>

        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />
      </Container>
    </Container>
  );
}

export default About;
