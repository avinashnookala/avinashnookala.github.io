import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todoapi from "../../Assets/Projects/todoapi.png";
import resturant from "../../Assets/Projects/resturant.png";
import cybersecuritytools from "../../Assets/Projects/cybersecuritytools.png";
import cambrian from "../../Assets/Projects/cambrianeats.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={resturant}
              isBlog={false}
              title="Resturant App"
              description="Developed a cross-platform mobile and desktop food ordering application using .NET MAUI that allows users to browse African, Caribbean, and Asian cuisines, place orders for pickup or delivery, and receive real-time SMS notifications."
              ghLink="https://github.com/anookala312/RestaurantApp" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todoapi}
              isBlog={false}
              title="Todo API Project"
              description="Developed a RESTful API for managing a to-do list using .NET, designed with clean architecture principles. Implemented a class library for the data models, an API project for CRUD operations, and unit tests to ensure functionality."
              ghLink="https://github.com/anookala312/Api/tree/main/TodoListProject" 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cambrian}
              isBlog={false}
              title="Cambrian Eats App"
              description="Developed a cloud-based food ordering app using Microsoft PowerApps, allowing users to order food on campus."
              ghLink="https://apps.powerapps.com/play/e/0dd4687a-8b46-e3ff-bb60-fa4765ad111c/a/c2253ab9-6ba3-4ce9-99e6-b5c06281fd69?tenantId=a6a78d6c-799a-43ba-821a-d5a1f5f0f767&hint=ba599b90-7fa9-4c99-9b79-e7c65e07e9f5&source=sharebutton&sourcetime=1729004721576"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={cybersecuritytools}
              isBlog={false}
              title="Cybersecurity Tools Development"
              description="Developed various cybersecurity tools in Rust, including a network security tool for network scanning and port scanning, an FTP worm simulation to demonstrate potential security risks, and a folder encryption tool to protect sensitive data."
              ghLink="https://github.com/anookala312/cybersecurityProjects" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
