import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
      <blockquote className="blockquote mb-0">
        <p style={{ textAlign: "justify" }}>
          I am <span className="purple">Avinash Nookala </span>
          from <span className="purple"> Visakhapatnam, India.</span>
          <br />
          I'm a tech enthusiast with a background in Mechanical Engineering 
          who transitioned into the exciting world of IT. I'm passionate about 
          developing innovative solutions and continuously expanding my skillset.
          <br />
          <br />
          I'm currently pursuing a Graduate Certificate in Mobile Application 
          Development at Cambrian College while also gaining practical experience 
          as an IT Intern at Relamco.
          <br />
          <br />
          In my free time, I enjoy:
        </p>
        <ul>
          <li className="about-activity">
            <ImPointRight /> Playing Games
          </li>
          <li className="about-activity">
            <ImPointRight /> Listening to music
          </li>
          <li className="about-activity">
            <ImPointRight   
            /> Travelling
          </li>
        </ul>   
      </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
