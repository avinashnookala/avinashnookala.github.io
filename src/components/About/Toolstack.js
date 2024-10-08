import React from "react";
import { Col, Row } from "react-bootstrap";
import {
    SiVisualstudiocode,
    SiWindows,
    SiLinux,
    SiSplunk,
    SiMicrosoftazure,
    SiFirebase,
    SiGit,
} from "react-icons/si";

function Toolstack() {
    return (
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
            <Col xs={4} md={2} className="tech-icons">
                <SiWindows />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiLinux />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiVisualstudiocode />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiSplunk />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiMicrosoftazure />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiFirebase />
            </Col>
            <Col xs={4} md={2} className="tech-icons">
                <SiGit />
            </Col>
        </Row>
    );
}

export default Toolstack;