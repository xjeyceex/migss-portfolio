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
                  sequence={[
                    'Hello There! I\'m Migss.',
                    () => setShowSubtitle(true)
                  ]}
                  speed={{ type: "keyStrokeDelayInMs", value: 150 }}
                  wrapper="h1"
                  repeat={0}
                />
              )}
              
              {showSubtitle && isInView && (
                <TypeAnimation
                  cursor={true}
                  sequence={[
                    500,
                    'A Full Stack Developer.',
                    1000,
                    'A Computer Science graduate.',
                    1000,
                    'A problem solver.',
                    1000,
                    'An innovative thinker.',
                    1000,
                    'Passionate about creating meaningful experiences.',
                    1000,
                    'Always learning and growing.',
                    1000,
                    "Let's build something amazing together!",
                    1000,
                    "Okay...",
                    1000,
                    "Okay... I'm running out of ideas...",
                    1000,
                    "Hmm...",
                    1000,
                    "Hmm... Why not scroll down to explore my portfolio?",
                    300,
                    () => setShowScrollDown(true),
                    1000,
                    "Alright, let's loop this again!",
                    1000,
                    "Catch you later! :)",
                    500,
                  ]}                
                  speed={50}
                  deletionSpeed={65}
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