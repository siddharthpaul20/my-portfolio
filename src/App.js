import './App.css';
import MyNavbar from "./components/my-navbar/mynavbar.component";
import MyCarousal from './components/my-carousal/my-carousal.component';
import TitleMessage from './components/title-message/title-message.component';
import About from './pages/about/about.component';
import Container from "react-bootstrap/Container";
import Skills from './pages/skills/skills.component';

import Fade from "react-reveal/Fade";
import Slide from "react-reveal/Slide";
import { Parallax } from "react-parallax";
import backgroundImg from "./assets/img/parallex/background.webp";
import Experience from './pages/experience/experience.component';
import ProjectTimeline from './components/projects-timeline/projects-timeline.component';
import ContactForm from './pages/contact-form/contact-form.component';
import FooterPanel from './components/footer/footer.component';

import Particles from 'react-particles-js';
import { particlesOptions } from "./particlesOptions";

function App() {
  return (
    <div className="App" style={{ position: "relative" }}>
      <MyNavbar />
      <MyCarousal />
      <TitleMessage />
      <Particles className="particles particles-box" params={particlesOptions} />
      <div>
        <Parallax blur={{ min: -30, max: 30 }} bgImage={backgroundImg} bgImageAlt="Background image" strength={-200}>
          <Container className="container-box rounded">
            <Fade duration={500}>
              <About />
            </Fade>
          </Container>
        </Parallax>
      </div>
      {/* Skills section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <Skills />
          </Slide>
        </Container>
      </div>
      {/* Experience section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <Experience />
          </Fade>
        </Container>
      </div>
      {/* Projects Timeline section */}
      <div>
        <Container className="container-box rounded">
          <Slide bottom duration={500}>
            <hr />
            <ProjectTimeline />
          </Slide>
        </Container>
      </div>
      {/* Contact Me section */}
      <div>
        <Container className="container-box rounded">
          <Fade duration={500}>
            <hr />
            <ContactForm />
          </Fade>
        </Container>
      </div>
      <hr />
      <FooterPanel />
    </div>
  );
}

export default App;
