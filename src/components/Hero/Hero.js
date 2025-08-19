import React, { useState, useRef } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from 'react-type-animation';
import ScrollAnimation from "react-animate-on-scroll";

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);
  const [isInView, setIsInView] = useState(false);
  const heroRef = useRef(null);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  const handleInView = () => {
    setIsInView(true);
  };

  const handleOutOfView = () => {
    setIsInView(false);
  };

  return (
    <main>
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <HeroContainer ref={heroRef}>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation 
              animateIn="fadeIn"
              afterAnimatedIn={handleInView}
              afterAnimatedOut={handleOutOfView}
            >
             {isInView && (
                <TypeAnimation
                  cursor={false}
                  sequence={["Hello There! I'm Migss.", () => setShowSubtitle(true)]}
                  speed={150}          // simpler, same effect
                  wrapper="h1"
                  repeat={0}
                  style={{ whiteSpace: "normal", wordWrap: "break-word" }}
                />
              )}
              {showSubtitle && isInView && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    // Array of subtitle lines with delays
                    ...[
                      { text: "A Full Stack Developer.", delay: 1000 },
                      { text: "A Computer Science graduate.", delay: 1000 },
                      { text: "A problem solver.", delay: 1000 },
                      { text: "An innovative thinker.", delay: 1000 },
                      { text: "Passionate about creating meaningful experiences.", delay: 1000 },
                      { text: "Always learning and growing.", delay: 1000 },
                      { text: "Let's build something amazing together!", delay: 1000 },
                      { text: "Okay...", delay: 1000 },
                      { text: "Okay... I'm running out of ideas...", delay: 1000 },
                      { text: "Hmm...", delay: 1000 },
                      { text: "Hmm... Why not scroll down to explore my portfolio?", delay: 300, callback: () => setShowScrollDown(true) },
                      { text: "Alright, let's loop this again!", delay: 1000 },
                      { text: "Catch you later! :)", delay: 500 },
                    ].flatMap(item => [item.text, item.delay, item.callback || undefined])
                  ]}
                  speed={50}
                  deletionSpeed={60}
                  wrapper="h5"
                  repeat={Infinity}
                />
              )}
            </ScrollAnimation>
          </HeroLeft>
          <HeroRight>
            <ScrollAnimation animateIn="fadeIn">
              <Image
                src="/myself.png"
                alt="man-svgrepo"
              />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && isInView && (
          <ScrollAnimation animateIn="flipInX" offset={0}>
            <ScrollDown to="about" id="scrollDown">
              <ScrollLink>
                Scroll down
                <img
                  src="/scroll-down.svg"
                  alt="scroll-down"
                />
              </ScrollLink>
            </ScrollDown>
          </ScrollAnimation>
        )}
      </HeroContainer>
    </main>
  );
}

export default Hero;