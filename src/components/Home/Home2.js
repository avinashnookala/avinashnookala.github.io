import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.png";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiOutlineTwitter,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              What I Am Up to
            </h1>
            <p className="home-about-body">
              I'm currently pursuing a Graduate Certificate in<i><b className="purple"> Mobile Application 
              Development (MAPD) at Cambrian College</b></i>, where I'm expanding my 
              skillset in designing and building innovative mobile applications. 
              This program provides me with the opportunity to delve deeper into 
              cutting-edge technologies and frameworks, and to apply my knowledge 
              in practical projects.

              <br />
              <br />

              In addition to my studies, I'm gaining valuable real-world experience 
              as an <i><b className="purple"> Project Coordinator (Mobile Developer) Intern at Relamco</b></i>, a leading provider of Lean Six Sigma 
              training and consulting services. I'm contributing to various 
              projects, including web development, marketing, and project 
              management, allowing me to further hone my skills and knowledge 
              in a professional setting.

              <br />
              <br />

              To learn more about my skills, interests, and background, please 
              visit the About Me section. 
            </p>  
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/anookala312"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiOutlineTwitter />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/avinash-avi-95b33b240/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="#"
                  onClick={(e) => e.preventDefault()}
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
