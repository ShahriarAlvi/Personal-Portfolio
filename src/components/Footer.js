import { Container, Row, Col } from "react-bootstrap";
// import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo-shahriar.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";


export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          {/* <MailchimpForm /> */}
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon mt-4">
              <a href="https://www.linkedin.com/in/shahriar-alvi-727961270/"><img src={navIcon1} alt="Icon" /></a>
              <a href="https://www.facebook.com/alvi.73shahriar/"><img src={navIcon2} alt="Icon" /></a>
              <a href="https://www.instagram.com/shahriar.alvi_/"><img src={navIcon3} alt="Icon" /></a>
              <a href="https://github.com/ShahriarAlvi"><img src={navIcon4} alt="Icon" /></a>

            </div>
            <p>2024 Shahriar Alvi. All Rights Reserved</p>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}