import { Container, Row, Col, Nav, Tab } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project-img1.png";
import projImg2 from "../assets/img/project-img2.png";
import projImg3 from "../assets/img/project-img3.jpg";
import colorSharp2 from "../assets/img/color-sharp2.png";

export const Projects = () => {
  const projects = [
    {
      title: "Mentorship",
      description:
        "This is a platform for users to connect and learn programming together.It provides a mentor-mentee network where a user can seek guidance as a mentee or act as a guide.\nTools used: React.js, Node.js, Mysql, VsCode, Postman",
      imgUrl: projImg1,
      gitUrl: "https://github.com/ShahriarAlvi/Mentorship"
    },

    {
      title: "connectSWE",
      description: "ajkshdajk",
      imgUrl: projImg2,
      gitUrl: "https://github.com/ShahriarAlvi/connectSWE"
    },

    {
      title: "Wandering Paw",
      description: "ajkshdajk",
      imgUrl: projImg3,
      gitUrl: "https://github.com/ShahriarAlvi/Wandering-Paw"
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col>
            <h2>Projects</h2>
            <p>
              This section contains my Personal Projects, my Photography, and my
              Extracurricular Activity details
            </p>
            <Tab.Container id="projects-tabs" defaultActiveKey="first">
              <Nav
                variant="pills"
                className="nav-pills mb-5 justify-content-center align-items-center"
                id="pills-tab"
              >
                <Nav.Item>
                  <Nav.Link eventKey="first">Personal Projects</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="second">Photography</Nav.Link>
                </Nav.Item>

                <Nav.Item>
                  <Nav.Link eventKey="third">
                    Extracurricular Activites
                  </Nav.Link>
                </Nav.Item>
              </Nav>

              <Tab.Content>
                <Tab.Pane eventKey="first">
                  <Row>
                    {projects.map((project, index) => {
                      return <ProjectCard key={index} {...project} />;
                    })}
                  </Row>
                </Tab.Pane>
                <Tab.Pane eventKey="second"> Photos will be added</Tab.Pane>
                <Tab.Pane eventKey="third">
                  {" "}
                  ECA pictures and descriptions will be added
                </Tab.Pane>
              </Tab.Content>
            </Tab.Container>
          </Col>
        </Row>
      </Container>
      <img className="background-image-right" src={colorSharp2} alt="" />
    </section>
  );
};
