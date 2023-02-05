import { Fragment } from "react";
import { Container } from "@mui/material";

import Header from "./components/Header";
import AboutCopyfi from "./components/AboutCopyfi";
import HeroSection from "./components/HeroSection";
import { HeroBackgroundimage } from "./components/common";
import CopyFiUtilities from "./components/CopyFiUtilities";
import Tokenomics from "./components/Tokenomics";
import Team from "./components/Team";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import { Element } from "react-scroll";

function App() {
  return (
    <Fragment>
      <HeroBackgroundimage>
        <Container>
          <Header />
          <HeroSection />
        </Container>
      </HeroBackgroundimage>
      <Element name="about-copyfi">
        <AboutCopyfi />
      </Element>
      <Element name="utilities">
        <CopyFiUtilities />
      </Element>
      <Element name="tokenomics">
        <Tokenomics />
      </Element>
      <Element name="our-team">
        <Team />
      </Element>
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
