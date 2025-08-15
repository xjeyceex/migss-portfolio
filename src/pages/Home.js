import React from "react";
import Hero from "../components/Hero/Hero";
import Experiences from "../components/Experiences/Experiences";
import About from "../components/About/About";
import Contact from "../components/Contact/Contact";
import Footer from "../components/Footer/Footer";
import FixSocialIcon from "../components/SocialIcon/FixSocialIcon";
import ScrollToTop from "../components/SocialIcon/ScrollToTop";

function Home() {
  return (
    <>
      <Hero />
      <About />
      <Experiences />
      <Contact />      
      <FixSocialIcon />
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
