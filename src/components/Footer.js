import { Container, Row, Col } from "react-bootstrap";
import { MailchimpForm } from "./MailchimpForm";
import logo from "../assets/img/logo.svg";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";
import navIcon4 from "../assets/img/nav-icon4.svg";
import navIcon5 from "../assets/img/nav-icon5.svg";
import navIcon6 from "../assets/img/nav-icon6.svg";

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
              <a href="https://linkedin.com/in/costomato/" target="_blank" rel="noreferrer" title="LinkedIn"><img src={navIcon1} alt="Linkedin icon" /></a>
              <a href="https://github.com/costomato" target="_blank" rel="noreferrer" title="GitHub"><img src={navIcon2} alt="GitHub icon" /></a>
              <a href="https://play.google.com/store/apps/dev?id=7639092298347779320" target="_blank" rel="noreferrer" title="Play Store"><img src={navIcon3} alt="Play Store icon" /></a>
              <a href="https://costomato.com" target="_blank" rel="noreferrer" title="Our company"><img src={navIcon4} alt="Web" /></a>
              <a href="https://memories.kaustubhdubey.com/" target="_blank" rel="noreferrer" title="My blog"><img src={navIcon5} alt="Memories blog" /></a>
              <a href="https://youtube.com/@costomato" target="_blank" rel="noreferrer" title="YouTube Channel"><img src={navIcon6} alt="Youtube channel" /></a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  )
}
