import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.svg";
import { ArrowRightCircle } from 'react-bootstrap-icons';
import 'animate.css';
import Typewriter from 'typewriter-effect';
import { useEffect, useState } from 'react';

export const Banner = () => {
  const toRotate = ["Android Developer", "iOS Developer", "Machine Learning Enthusiast", "Proficient Full Stack Developer", "Occasional Game Developer", "Blockchain Aficionado", "Inquisitive IoT Researcher", "Cybersecurity Explorer"];

  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleVisibilityChange = (visible) => {
      setIsVisible(visible);
    };

    const bannerElement = document.getElementById("home");
    const observer = new IntersectionObserver((entries) => {
      const isVisible = entries[0].isIntersecting;
      handleVisibilityChange(isVisible);
    });

    observer.observe(bannerElement);

    return () => {
      observer.unobserve(bannerElement);
    };
  }, []);

  return (
    <section className="banner" id="home" ref={ref => ref && setIsVisible(true)}>
      <Container>
        <Row className="aligh-items-center">
          <Col xs={12} md={6} xl={7}>
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
                />
              </h2>
              <p>Tech Visionary: Kaustubh, Unleashing Innovation.
                Kaustubh: a dynamic software engineer redefining the realm of technology. With unparalleled adaptability and a thirst for knowledge, he effortlessly navigates diverse programming languages, frameworks, and cutting-edge advancements. From machine learning and computer vision to cybersecurity, cryptography and IoT, Kaustubh's technical brilliance knows no bounds. Join him on an extraordinary journey where innovation meets determination, shaping the future of technology.</p>

              <a href="#connect" style={{ textDecoration: 'none' }}>
                <button>Let’s Connect <ArrowRightCircle size={25} /></button>
              </a>
            </div>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <div className={isVisible ? "animate__animated animate__zoomIn" : ""}>
              <img src={headerImg} alt="Header Img" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}
