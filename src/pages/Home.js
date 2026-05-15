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
      <a className="skip-link" href="#about">
        Skip to content
      </a>
      <main>
        <Hero />
        <About />
        <Experiences />
        <Contact />
        {/* In-flow on tablet/mobile (≤1000px); fixed rail on desktop — must stay after
            page sections or it incorrectly appears above the hero */}
        <FixSocialIcon />
      </main>
      <Footer />
      <ScrollToTop />
    </>
  );
}

export default Home;
