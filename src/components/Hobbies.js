import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png";
import { MiscCard } from "./MiscCard";
import { Container, Row, Col } from "react-bootstrap";
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
      title: "Appreciating classical music:",
      description: "Finding solace and inspiration in classical compositions, enriching my soul with their profound harmonies and expressions.",
    },
    {
      imageSrc: "https://cdni.iconscout.com/illustration/premium/thumb/professional-boxing-competition-illustration-download-in-svg-png-gif-file-formats--fight-fighting-sports-equipment-boxer-sport-part-1-pack-games-illustrations-7402817.png",
      title: "Boxing Enthusiast & Gold Medalist:",
      description: "Passionate about boxing, I earned a gold medal through dedication and skill, demonstrating my commitment to the sport and strategic excellence.",
    },
    {
      imageSrc: "https://cdn-icons-png.flaticon.com/512/3408/3408543.png",
      title: "Trading:",
      description: "Engaging in financial markets, analyzing trends, and making informed decisions to grow my investments and stay ahead in the game.",
    },
    {
      imageSrc: "https://cdni.iconscout.com/illustration/premium/thumb/writer-at-home-illustration-download-in-svg-png-gif-file-formats--freelance-novelist-creative-writing-people-illustrations-3480298.png",
      title: "Writing:",
      description: "Writing very occasionally and sharing my memories in both English and Hindi. I've recently started publishing my stories on my website. Click here to view.",
      url: "https://memories.kaustubhdubey.com/"
    },
  
  ]

  return (
    <section className="project hobbies" id="hobbies">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility once>
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
      <img className="background-image-left" src={colorSharp} alt='hobbies_bg' />
    </section>
  )
}
