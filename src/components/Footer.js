import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <MailchimpForm />
          <Col size={12} sm={6}>
            <img src={logo} alt="Logo" />
          </Col>
          <Col size={12} sm={6} className="text-center text-sm-end">
            <div className="social-icon">
              <a href="https://linkedin.com/in/costomato/" target="_blank" rel="noreferrer"><img src={navIcon1} alt="Linkedin icon" /></a>
              <a href="https://github.com/costomato" target="_blank" rel="noreferrer"><img src={navIcon2} alt="Playstore icon" /></a>
              <a href="https://play.google.com/store/apps/dev?id=7639092298347779320" target="_blank" rel="noreferrer"><img src={navIcon3} alt="Github icon" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
