import { Col } from "react-bootstrap";

export const MiscCard = ({ title, description, imageSrc }) => {
  return (
    <Col size={12} sm={6} md={4}>
      <div className="misc-container">
        <div className="misc-image">
            <img src={imageSrc} alt="hobby_img" />
        </div>

        <div className="misc-content">
          <h4>{title}</h4>
          <h6>{description}</h6>
        </div>
      </div>
    </Col>
  )
}
