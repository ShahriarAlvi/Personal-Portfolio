import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, description, imgUrl, gitUrl }) => {
  return (
    <Col sm={6} md={4}>
      <div className="proj-imgbx">
        <img src={imgUrl} alt="" />
        <div className="proj-txtx" >
          <h4><a href={gitUrl}>{title}</a></h4>
          <span style={{whiteSpace:"break-spaces"}}>{description}</span>
        </div>
      </div>
    </Col>
  );
};
