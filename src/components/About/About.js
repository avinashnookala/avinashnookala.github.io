import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
//import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";
import Toolstack from "./Toolstack";

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
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <span className="purple">Master's in Information Technology Management</span> Campbellsville University
          </li>
          <li>
            <span className="purple">Graduate Certificate in Mobile Application Development</span> Cambrian College
          </li>
          <li>
            <span className="purple">Graduate Certificate in Cybersecurity</span> Cambrian College
          </li>
          <li>
            <span className="purple">Bachelor's in Mechanical Engineering</span> Lovely Professional University
          </li>
        </ul>
        <br />
        <br />

        {/* Work Experience Section */}
        <h2>Work Experience</h2>
        <ul style={{ listStyleType: 'none' }}>
          <li>
            <span className="purple">IT Intern</span> Relamco
          </li>
          <li>
            <span className="purple">Assistant Branch Manager/Customer Relationship Manager</span> UCO Bank, Nagpur, India
          </li>
        </ul>
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
