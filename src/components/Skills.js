import outline from "../assets/img/outline.svg";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import colorSharp from "../assets/img/color-sharp.png"

export const Skills = () => {
  const responsive = {
    superLargeDesktop: {
      // the naming can be any, depends on you.
      breakpoint: { max: 4000, min: 3000 },
      items: 5
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const programming = [
    { text: "Java", innerImg: "https://devicons.railway.app/i/java.svg" },
    { text: "Python", innerImg: "https://user-images.githubusercontent.com/25181517/183423507-c056a6f9-1ba8-4312-a350-19bcbc5a8697.png" },
    { text: "C/C++", innerImg: "https://user-images.githubusercontent.com/25181517/192106073-90fffafe-3562-4ff9-a37e-c77a2da0ff58.png" },
    { text: "Javascript", innerImg: "https://user-images.githubusercontent.com/25181517/117447155-6a868a00-af3d-11eb-9cfe-245df15c9f3f.png" },
    { text: "Kotlin", innerImg: "https://user-images.githubusercontent.com/25181517/185062810-7ee0c3d2-17f2-4a98-9d8a-a9576947692b.png" },
    { text: "Go", innerImg: "https://raw.githubusercontent.com/gilbarbara/logos/main/logos/go.svg" },
    { text: "MySQL", innerImg: "https://user-images.githubusercontent.com/25181517/183896128-ec99105a-ec1a-4d85-b08b-1aa1620b2046.png" },
    { text: "HTML", innerImg: "https://devicons.railway.app/i/html5.svg" },
    { text: "CSS", innerImg: "https://devicons.railway.app/i/css3.svg" },
    { text: "Rust", innerImg: "https://devicons.railway.app/i/rust-light.svg" },
    { text: "PHP", innerImg: "https://user-images.githubusercontent.com/25181517/183570228-6a040b9f-3ddf-47a2-a201-743121dac664.png" },
    { text: "C#", innerImg: "https://user-images.githubusercontent.com/25181517/121405384-444d7300-c95d-11eb-959f-913020d3bf90.png" },
    { text: "Dart", innerImg: "https://user-images.githubusercontent.com/25181517/186150304-1568ffdf-4c62-4bdc-9cf1-8d8efcea7c5b.png" },
    { text: "Ruby", innerImg: "https://user-images.githubusercontent.com/25181517/192603745-7d34df9e-7756-4756-a539-6a61badf7a80.png" },
    { text: "Typescript", innerImg: "https://devicons.railway.app/i/typescript.svg" },
    { text: "Elixir", innerImg: "https://devicons.railway.app/i/elixir.svg" },
  ];

  const technologies = [
    { text: "Android", innerImg: "https://user-images.githubusercontent.com/25181517/192108895-20dc3343-43e3-4a54-a90e-13a4abbc57b9.png" },
    { text: "TensorFlow", innerImg: "https://user-images.githubusercontent.com/25181517/223639822-2a01e63a-a7f9-4a39-8930-61431541bc06.png" },
    { text: "MS Azure", innerImg: "https://user-images.githubusercontent.com/25181517/183911544-95ad6ba7-09bf-4040-ac44-0adafedb9616.png" },
    { text: "Node.js", innerImg: "https://user-images.githubusercontent.com/25181517/183568594-85e280a7-0d7e-4d1a-9028-c8c2209e073c.png" },
    { text: "Mongo DB", innerImg: "https://devicons.railway.app/i/mongodb.svg" },
    { text: "Express.js", innerImg: "https://user-images.githubusercontent.com/25181517/183859966-a3462d8d-1bc7-4880-b353-e2cbed900ed6.png" },
    { text: "React.js", innerImg: "https://user-images.githubusercontent.com/25181517/183897015-94a058a6-b86e-4e42-a37f-bf92061753e5.png" },
    { text: "Linux", innerImg: "https://devicons.railway.app/i/tux.svg" },
    { text: "Docker", innerImg: "https://user-images.githubusercontent.com/25181517/117207330-263ba280-adf4-11eb-9b97-0ac5b40bc3be.png" },
    { text: "Flask", innerImg: "https://devicons.railway.app/i/flask-light.svg" },
    { text: "Django", innerImg: "https://devicons.railway.app/i/django.svg" },
    { text: "Unity", innerImg: "https://user-images.githubusercontent.com/25181517/193427941-9437dbbe-376f-40dc-9573-0ef5c02a26a7.png" },
    { text: "Arduino", innerImg: "https://devicons.railway.app/i/arduino.svg" },
    { text: "Flutter", innerImg: "https://user-images.githubusercontent.com/25181517/186150365-da1eccce-6201-487c-8649-45e9e99435fd.png" },
    { text: "REST", innerImg: "https://user-images.githubusercontent.com/25181517/192107858-fe19f043-c502-4009-8c47-476fc89718ad.png" },
    { text: "WebSockets", innerImg: "https://user-images.githubusercontent.com/25181517/187070862-03888f18-2e63-4332-95fb-3ba4f2708e59.png" },
    { text: "Selenium", innerImg: "https://user-images.githubusercontent.com/25181517/184103699-d1b83c07-2d83-4d99-9a1e-83bd89e08117.png" },
    { text: "Figma", innerImg: "https://devicons.railway.app/i/figma.svg" },
    { text: "Git", innerImg: "https://devicons.railway.app/i/git.svg" },
    { text: "Firebase", innerImg: "https://devicons.railway.app/i/firebase.svg" },
  ];

  return (
    <section className="skill" id="skills">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="skill-bx wow zoomIn">
              <h2>Skills</h2>
              <p className="p1">Programming Languages</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {programming.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="outer-image">
                      <img src={outline} alt="Outer Image" />
                      <img src={item.innerImg} alt="Inner Image" className="inner-image" />
                    </div>
                    <h5>{item.text}</h5>
                  </div>
                ))}
              </Carousel>
              <p className="p2">Technologies</p>
              <Carousel responsive={responsive} infinite={true} className="owl-carousel owl-theme skill-slider">
                {technologies.map((item, index) => (
                  <div className="item" key={index}>
                    <div className="outer-image">
                      <img src={outline} alt="Outer Image" />
                      <img src={item.innerImg} alt="Inner Image" className="inner-image" />
                    </div>
                    <h5>{item.text}</h5>
                  </div>
                ))}
              </Carousel>
            </div>
          </div>
        </div>
      </div>
      <img className="background-image-left" src={colorSharp} alt="Image" />
    </section>
  )
}
