import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { MiscCard } from "./MiscCard";
import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import 'animate.css';
import TrackVisibility from 'react-on-screen';


export const Hobbies = () => {

  const hobbies = [
    {
      imageSrc: "https://avatars.githubusercontent.com/u/85684597?v=4",
      title: "Playing the violin:",
      description: "Devoting daily practice sessions to honing my skills and expressing my creativity through the beautiful melodies of the instrument.",
    },
    {
      imageSrc: "https://cdn.dribbble.com/users/3768006/screenshots/11274674/media/aa6cf562dcdf51cb408b41ae4dcc3915.png?compress=1&resize=400x300&vertical=center",
      title: "Classical music:",
      description: "Finding solace and inspiration in classical compositions, enriching my soul with their profound harmonies and expressions.",
    },
  ]

  return (
    <section className="project hobbies" id="hobbies">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Hobbies</h2>
                  <br />
                  <br />
                  <Row className="card-container">
                    {
                      hobbies.map((hobby, index) => {
                        return (
                          <MiscCard
                            key={index}
                            {...hobby}
                          />
                        )
                      })
                    }
                  </Row>
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
