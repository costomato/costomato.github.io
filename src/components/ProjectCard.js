import { Col } from "react-bootstrap";

export const ProjectCard = ({ title, subtitle, description, hoverTitle, hoverDescription, imgUrl, src }) => {

  const descriptionLines = description.split('\n').map((line, index) => (
    <li key={index}>{line.trim()}</li>
  ));

  const openSrc = () => {
    if (src)
      window.open(src, "_blank");
  };

  return (
    <Col size={12} sm={6} md={4}>
      <div className="proj-imgbx" onClick={openSrc}>
        <div className="bg-image"
          style={{ backgroundImage: `url(${imgUrl})` }}
        ></div>
        <div className="blur-overlay"></div>

        <div className="proj-info">
          <h4>{title}</h4>
          <h6>{subtitle}</h6>
          <span>
            <ul>
              {descriptionLines}
            </ul>
          </span>
        </div>

        <div className="proj-txtx">
          <h4>{hoverTitle}</h4>
          <span>{hoverDescription}</span>
        </div>
      </div>
    </Col>
  )
}
