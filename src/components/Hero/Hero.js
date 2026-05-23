import React, { useState } from "react";
import Dropdown from "../Dropdown/Dropdown";
import Header from "../Header/Header";
import {
  HeroSection,
  HeroContainer,
  HeroWrapper,
  HeroLeft,
  HeroRight,
  Image,
  ScrollDown,
  ScrollLink,
} from "./HeroElements";
import { TypeAnimation } from "react-type-animation";
import ScrollAnimation from "react-animate-on-scroll";

/** Hero is above the fold — must animate on first paint, not only after scroll. */
const heroScrollProps = {
  animateIn: "fadeIn",
  initiallyVisible: true,
  animateOnce: true,
};

function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [showSubtitle, setShowSubtitle] = useState(false);
  const [showScrollDown, setShowScrollDown] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <HeroSection id="hero" aria-label="Introduction">
      <Dropdown isOpen={isOpen} toggle={toggle} />
      <Header toggle={toggle} />
      <div style={{ height: "var(--header-offset, 80px)" }} aria-hidden />
      <HeroContainer>
        <HeroWrapper>
          <HeroLeft>
            <ScrollAnimation {...heroScrollProps}>
              <TypeAnimation
                cursor={false}
                sequence={["Hello There! I'm Migss.", () => setShowSubtitle(true)]}
                speed={150}
                wrapper="h1"
                repeat={0}
                style={{ whiteSpace: "normal", wordWrap: "break-word" }}
              />
              {showSubtitle && (
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
            <ScrollAnimation {...heroScrollProps}>
              <Image src="/myself.png" alt="Portrait of Migss" />
            </ScrollAnimation>
          </HeroRight>
        </HeroWrapper>
        {showScrollDown && (
          <ScrollAnimation
            animateIn="flipInX"
            initiallyVisible
            animateOnce
            offset={0}
          >
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
    </HeroSection>
  );
}

export default Hero;