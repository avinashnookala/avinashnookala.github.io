import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    DiJavascript1,
    DiReact,
    DiNodejs,
    DiGit,
    DiJava,
    DiRust,
} from "react-icons/di";
import {
    SiFirebase,
    SiNextdotjs,
    SiPostgresql,
    SiHtml5,
    SiAngular,
    SiBootstrap,
    SiCsharp,
} from "react-icons/si";


function Techstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <DiJavascript1 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiNodejs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiReact />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiNextdotjs />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiGit />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiPostgresql />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiJava />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiCsharp />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <DiRust />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiHtml5 />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiAngular />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiBootstrap />
            </Col>
        </Row>
    );
}

export default Techstack;
