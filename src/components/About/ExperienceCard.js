import React from "react";
import Card from "react-bootstrap/Card";
//import Button from "react-bootstrap/Button";

function ExperienceCards(props) {
  return (
    <a href={props.link} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'inherit' }}>
      <Card className="experience-card-view" href={props.Link} target="_blank">
        <Card.Img variant="top" src={props.imgPath} alt="card-img"/>
        <Card.Body>
          <Card.Title style={{ height: '4rem' }}>{props.title}</Card.Title>
          <hr />
          <Card.Text style={{ textAlign: "center" }}>
            {props.description}
          </Card.Text>
        </Card.Body>
      </Card>
    </a>
  );
}
export default ExperienceCards;
