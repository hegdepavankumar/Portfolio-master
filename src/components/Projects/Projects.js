import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import leaf from "../../Assets/Projects/leaf.png";
import emotion from "../../Assets/Projects/emotion.png";
import editor from "../../Assets/Projects/codeEditor.png";
import chatify from "../../Assets/Projects/chatify.png";
import suicide from "../../Assets/Projects/suicide.png";
import bitsOfCode from "../../Assets/Projects/blog.png";

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
              imgPath={chatify}
              isBlog={false}
              title="Dad-Jokes-Chrome-Extension"
              description="This is a chrome extension project, any OS user can adding their chrome extension it can generate a new jokes for user. this project developed by using javascript,html ,css and calling API's to give the real time jokes from server. "
              ghLink="https://github.com/hegdepavankumar/Dad-Jokes-Chrome-Extension-master"
              demoLink="https://github.com/hegdepavankumar/Dad-Jokes-Chrome-Extension-master"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Counter-App"
              description="In this project, we used the fundamentals of HTML, CSS, and JavaScript. this counter app can able to reset the values,Incerment and Decrement the values easily also user friendly."
              ghLink="https://github.com/hegdepavankumar/counter-app-using-javascript"
              demoLink="https://hegdepavankumar.github.io/counter-app-using-javascript/counter"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={editor}
              isBlog={false}
              title="Calculator-using-javascript"
              description="This Project developed by using HTML, CSS and Javascript. this simple calculator which can perform basic arithmetic operations like addition, subtraction, multiplication, or division. this is easy to use and good UI and UX."
              ghLink="https://github.com/hegdepavankumar/Calculator-using-javascript"
              demoLink="https://github.com/hegdepavankumar/Calculator-using-javascript"              
            />
          </Col>       
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
