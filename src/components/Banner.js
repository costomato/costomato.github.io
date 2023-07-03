import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import TrackVisibility from 'react-on-screen';
import Typewriter from 'typewriter-effect';

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const [index, setIndex] = useState(1);
  const toRotate = ["Android Developer", "Back-end Developer", "Machine Learning Enthusiast", "Occasional Game Developer", "Blockchain Enthusiast"];
  const period = 1500;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);

    return () => { clearInterval(ticker) };
  }, [text])

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);

    setText(updatedText);

    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }

    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setIndex(prevIndex => prevIndex - 1);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setIndex(1);
      setDelta(500);
    } else {
      setIndex(prevIndex => prevIndex + 1);
    }
  }

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <span className="tagline">Welcome to my Portfolio</span>
                  <h1>{`Hi! I'm Kaustubh;`}</h1>
                  <h2>
                  <Typewriter
                    options={{
                      strings: toRotate,
                      autoStart: true,
                      loop: true,
                      delay: 75,
                      pauseFor: 1200,
                      deleteSpeed: 30,
                    }}
                  /></h2>
                  <p>Tech Visionary: Kaustubh, Unleashing Innovation.
                    Kaustubh: a dynamic software engineer redefining the realm of technology. With unparalleled adaptability and a thirst for knowledge, he effortlessly navigates diverse programming languages, frameworks, and cutting-edge advancements. From machine learning and computer vision to cybersecurity, cryptography and IoT, Kaustubh's technical brilliance knows no bounds. Join him on an extraordinary journey where innovation meets determination, shaping the future of technology.</p>

                  <a href="#connect" style={{ textDecoration: 'none' }}>
                    <button>Let’s Connect <ArrowRightCircle size={25} /></button>
                  </a>
                </div>}
            </TrackVisibility>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
                  <img src={headerImg} alt="Header Img" />
                </div>}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
