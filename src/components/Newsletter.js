import { Col, Row } from "react-bootstrap";

export const Newsletter = () => {

  return (
    <Col lg={12}>
      <div className="newsletter-bx wow slideInUp">
        <Row className="align-items-center">
          <Col lg={12} md={6} xl={5}>
            <h1>Hire me!!</h1>
          </Col>
          <Col md={6} xl={7}>
            <p style={{ color: "black" }}>Unlock boundless potential by adding an exceptional talent to your team! Experience the transformative impact that my skills and expertise bring to the table. Let's connect through the above form and embark on an extraordinary journey of collaboration and success. Your next star performer awaits—reach out and let's make remarkable things happen!</p>
          </Col>
        </Row>
      </div>
    </Col>
  )
}
