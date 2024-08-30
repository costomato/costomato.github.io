import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import colorSharp2 from "../assets/img/color-sharp2.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const workExperience = [
  {
    id: "truckit",
    title: "TruckIt App LLC",
    subtitle: "Fullstack Developer (Florida, USA - remote)",
    description: `Maintaining native Android (Kotlin) and iOS (Swift) apps for both drivers and users.
Working on backend in PHP Laravel.
Overseeing MySQL database, and AWS infrastructure.`,
    hoverDescription: "January 2024 - present",
    // hoverTitle: "Click here to explore my experience",
    imgUrl: "https://www.truckit-app.com/img/Logo-Truck-It-.png",
    // src: "/truckit-experience"
  },
  {
    id: "grc",
    title: "Gerontechnology Research Center (SEDA G-Tech)",
    subtitle: "R&D Intern (Taoyuan, Taiwan - onsite): under distinguished Professor Yeh-Liang Hsu 徐業良",
    description: `Focused on WhizPad—a health monitoring system for the elderly.
Migrated infrastructure from AWS to GCP.
Worked on IoT, mobile, and web app integration.`,
    hoverDescription: "September 2023 - February 2024",
    // hoverTitle: "Click here to explore my experience",
    imgUrl: "https://qs-gen.com/wp-content/uploads/2021/01/P1120107-S.jpg",
    // src: "/experience/grc"
  },
  {
    id: "xorvix",
    title: "Xorvix (formerly Flyprosper)",
    subtitle: "Founder & Software Developer (India)",
    description: `Working on various technology-driven projects.
Focusing on software development and system optimization.
Leveraging cutting-edge technologies to deliver solutions.`,
    hoverDescription: "Ongoing",
    // hoverTitle: "Click here to explore my experience",
    imgUrl: "https://xorvix.com/homepage.jpg",
    // src: "/xorvix-experience"
  },
  {
    id: "ripetech",
    title: "Ripetech Solutions",
    subtitle: "Android Developer (New Delhi, India - remote)",
    description: `Worked on Digital Register app, developed in Java with Volley.
Maintained and debugged the app, trained interns in native Android development.`,
    hoverDescription: "October 2021 - December 2021",
    // hoverTitle: "Click here to explore my experience",
    imgUrl: "https://content3.jdmagicbox.com/comp/def_content/computer-software-developers/shutterstock-124888153-computer-software-developers-2-7jljr.jpg",
    // src: "/ripetech-experience"
  },
];

export const Projects = () => {

  const androidProjects = [
    {
      title: "TMS (Tuition Management System)",
      subtitle: "Android app to manage tuition batches/fees",
      description: `XML frontend with JAVA.
SQLite for database.
CRUD operations possible.
Good error handling.
Offline application with 3k+ downloads.`,
      hoverTitle: "Click to download from playstore",
      imgUrl: "https://play-lh.googleusercontent.com/OjjUGjxztFliCij6p0cVEnZ3u536DMIAySqHCOVQ9a2T9Cq9N9AlJe-dhz4d26Pl7Q=w416-h235-rw",
      src: "https://play.google.com/store/apps/details?id=com.tuition.tms"
    },
    {
      title: "NEWS",
      subtitle: "Quite self explanatory",
      description: `XML frontend with Kotlin.
      Fetches news from bing news services.
      News search, select category, news bookmarks.
      RoomDB for storing bookmarked news.
      Caching feature.
      MVVM architecture`,
      hoverTitle: "Download",
      hoverDescription: "Play store link",
      imgUrl: "https://play-lh.googleusercontent.com/QeMgQkEPPIu2LxeeGu6pHqclyW-hKmHV2MxqVHAko2CldUhIUuotZIcz5gLwg2touWEs=w416-h235-rw",
      src: "https://play.google.com/store/apps/details?id=com.flyprosper.news"
    },
    {
      title: "SyncPlay",
      subtitle: "Open source video synchronisation app",
      description: `Kotlin fullstack app.
      Ktor network library for both frontend and backend.
      No lags and latency issues.
      Received 100+ downloads within the first week of launch.`,
      hoverTitle: "Download",
      hoverDescription: "Play store link",
      imgUrl: "https://play-lh.googleusercontent.com/g9pwkCnyU2WG_nHwUyBY5XJ-pkE6O7MjnpqZcj8KJF4CRCCghwuSJXkhb6yEl6PucAKk=w240-h480-rw",
      src: "https://play.google.com/store/apps/details?id=com.flyprosper.syncplay"
    },
  ];

  const gameProjects = [
    {
      title: "Bingo OMP",
      subtitle: "Open source Bingo mobile game for two players",
      description: `C# for frontend logic.
      Made with Unity.
      Golang/Gorilla-websocket for backend.`,
      hoverTitle: "Download",
      hoverDescription: "Play store link",
      imgUrl: "https://play-lh.googleusercontent.com/B4_fX32yA8_RFfPcdmgaUABt884xaEoCGqZqB4YrBqsrbcGLn7U0ZAc6lpqsWV64HBU=w416-h235-rw",
      src: "https://play.google.com/store/apps/details?id=com.Flyprosper.Bingo"
    },
    {
      title: "TicTacToe OMP mobile",
      subtitle: "Open source TicTacToe mobile game for two players",
      description: `Dart for frontend logic.
      Made with Flutter.
      Node.js/socket.io for backend.`,
      hoverTitle: "Download",
      hoverDescription: "Play store link",
      imgUrl: "https://play-lh.googleusercontent.com/00yAjO2hjF6XA1znqwpDveZ0j0tbEOtuJGkYesiUUlqk9BXSrij4LcB8fMlr7GK-Zw=w416-h235-rw",
      src: "https://play.google.com/store/apps/details?id=com.flyprosper.tic_tac_toe"
    },
  ];
  const otherProjects = [
    {
      title: "Stock Price Prediction",
      subtitle: "A machine learning project that predicts stock prices",
      description: `User friendly frontend.
      Uses Facebook’s Prophet library.
      Backend is built using Flask.
      Fast and responsive.`,
      hoverTitle: "View source",
      hoverDescription: "Github link",
      imgUrl: "https://t4.ftcdn.net/jpg/05/39/20/87/360_F_539208762_CYFbH1IMlRZ43hSbBlBWGjaovDBnkC4z.jpg",
      src: "https://hardageri.github.io/Web-Technology-Project/"
    },
    {
      title: "Gesture Rock Paper Scissors",
      subtitle: "A deep learning/computer vision project that plays RPS game by takin inputs from your hand gestures",
      description: `Uses TensorFlow.
      Fast & accurate detection of gestures.`,
      hoverTitle: "Play game",
      hoverDescription: "Live website link",
      imgUrl: "https://t4.ftcdn.net/jpg/05/39/20/87/360_F_539208762_CYFbH1IMlRZ43hSbBlBWGjaovDBnkC4z.jpg",
      src: "https://costomato.github.io/gesture-rock-paper-scissors/"
    },
    {
      title: "Easy certificate automation",
      subtitle: "Canva automation hack for bulk exporting a design without a premium account",
      description: `Download certificates in bulk according to csv data.
      No need to have premium canva account.
      Done using Python and selenium.`,
      hoverTitle: "View source",
      hoverDescription: "Github link",
      imgUrl: "https://t4.ftcdn.net/jpg/05/39/20/87/360_F_539208762_CYFbH1IMlRZ43hSbBlBWGjaovDBnkC4z.jpg",
      src: "https://github.com/costomato/easy-certificate-automation"
    },
    {
      title: "Intercepting NodeMCU data with MITM attack",
      subtitle: "Demonstration of Man-in-the-middle attack on NodeMCU-Esp8266 microcontroller",
      description: `Using mitmproxy and ARP spoofing.
      Intercept data going from NodeMCU to ThingSpeak.`,
      hoverTitle: "View project",
      hoverDescription: "Github link",
      imgUrl: "https://t4.ftcdn.net/jpg/05/39/20/87/360_F_539208762_CYFbH1IMlRZ43hSbBlBWGjaovDBnkC4z.jpg",
      src: "https://github.com/costomato/nodemcu-mitm-attack"
    },
    {
      title: "Others",
      subtitle: "Know more about other awesome projects of mine",
      description: `Follow me on GitHub :)`,
      hoverTitle: "Open",
      hoverDescription: "GitHub link",
      imgUrl: "https://img.freepik.com/free-vector/gradient-dynamic-lines-background_23-2149005728.jpg?t=st=1688287286~exp=1688287886~hmac=5463fa2949435688a01cb589e22d575620a7ee837ca88d21656248c9c814e9fc",
      src: "https://github.com/costomato"
    },
  ];

  const literaryWorks = [
    {
      title: "Research paper",
      subtitle: "Title",
      description: `Enhancing Trust and Security in IoT Architecture for Low-Cost Microcontroller Devices using Elliptic Curve Cryptography`,
      hoverTitle: "View work",
      hoverDescription: "IJSREM link",
      imgUrl: "https://t4.ftcdn.net/jpg/05/39/20/87/360_F_539208762_CYFbH1IMlRZ43hSbBlBWGjaovDBnkC4z.jpg",
      src: "https://ijsrem.com/download/enhancing-trust-and-security-in-iot-architecture-for-low-cost-microcontroller-devices-using-elliptic-curve-cryptography/"
    },
    {
      title: "Research paper",
      subtitle: "Title",
      description: `Implementation and Enhancement of SEDA G.Tech's WhizPad Mattress System`,
      hoverTitle: "View work",
      hoverDescription: "Research gate link",
      imgUrl: "https://t4.ftcdn.net/jpg/05/39/20/87/360_F_539208762_CYFbH1IMlRZ43hSbBlBWGjaovDBnkC4z.jpg",
      src: "https://www.researchgate.net/publication/379021961_Implementation_and_Enhancement_of_SEDA_GTech's_WhizPad_Mattress_System"
    },
    {
      title: "Instructables Publication",
      subtitle: "Smart Mobile-Controlled Motor Pump Starter",
      description: `A guide to transforming a traditional motor pump starter into a smart device controlled via WIFi & a mobile phone, using NodeMCU & a relay module.`,
      hoverTitle: "View Instructable",
      hoverDescription: "Instructables link",
      imgUrl: "https://t4.ftcdn.net/jpg/05/39/20/87/360_F_539208762_CYFbH1IMlRZ43hSbBlBWGjaovDBnkC4z.jpg",
      src: "https://www.instructables.com/Easiest-and-Cheapest-Way-to-Convert-an-Old-DOL-Mot/"
    },
    {
      title: "Experiment ToDo List",
      subtitle: "Simple CLI based ToDo List application",
      description: `Implemented in 16 different languages.
      Compared the performance of each language with 16 test cases for each.`,
      hoverTitle: "View work",
      hoverDescription: "Github link",
      imgUrl: "https://www.dicsinnovatives.com/blog/wp-content/uploads/2024/06/top10lan.jpg",
      src: "https://github.com/costomato/ToDo-List-App-CLI"
    },
  ]

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <h2>My Works</h2>
                  <p>
                    <span>Experience</span>
                    <br /><br />
                    <b>Innovating in the Digital Space</b>
                    <br />
                    Throughout my career, I've been at the forefront of technology, blending creativity and technical expertise to drive impactful projects. My work spans various domains, where I focus on delivering efficient, scalable solutions that meet real-world needs. I thrive in dynamic environments, constantly pushing boundaries to explore new possibilities and deliver meaningful results.
                  </p>
                  <Row className="card-container">
                    {
                      workExperience.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
                          />
                        )
                      })
                    }
                  </Row>
                  <p style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <span>Projects</span>
                    <br /><br />
                    <b>Embarking on a Journey of Innovation: Exploring My Works</b>
                    <br />
                    Welcome to my digital realm, where innovation comes alive through a tapestry of creations. Witness my expertise in Android app development, machine learning, game development, IoT, and cybersecurity. Delve into seamless user experiences, intelligent algorithms, captivating virtual worlds, connected devices, and robust security measures. Join me as we embark on this exhilarating expedition, exploring the frontiers of technology and unveiling new possibilities with every step.</p>
                  <br />
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item className="tab-item">
                        <Nav.Link eventKey="first">Apps</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="tab-item">
                        <Nav.Link eventKey="second">Games</Nav.Link>
                      </Nav.Item>
                      <Nav.Item className="tab-item">
                        <Nav.Link eventKey="third">Others</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "animate__animated animate__slideInUp" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row className="card-container">
                          {
                            androidProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row className="card-container">
                          {
                            gameProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="third">
                        <Row className="card-container">
                          {
                            otherProjects.map((project, index) => {
                              return (
                                <ProjectCard
                                  key={index}
                                  {...project}
                                />
                              )
                            })
                          }
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                  <p style={{ marginTop: "40px", marginBottom: "40px" }}>
                    <span>Literary works</span>
                  </p>
                  <Row className="card-container">
                    {
                      literaryWorks.map((project, index) => {
                        return (
                          <ProjectCard
                            key={index}
                            {...project}
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
      <img className="background-image-right" src={colorSharp2} alt="project_bg"></img>
    </section>
  )
}
