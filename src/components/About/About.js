import React from "react";
import { stackList } from "../../data/ProjectData";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

// Blue color palette
const BLUE_LIGHT = "#bbdefb";
const TEXT_DARK = "#333333";
const BACKGROUND_LIGHT = "#f8f9fa";

// Styled components with blue accent
const AboutContainer = styled.div`
  padding: 5rem 0;
  background: ${BACKGROUND_LIGHT};
  position: relative;
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2.5rem;
  position: relative;
`;

const BioSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
`;

const ProfileImage = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  box-shadow: 0 10px 30px rgba(25, 118, 210, 0.2);
  margin-bottom: 2rem;
  
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

const AboutBio = styled.div`
  flex: 1;
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: ${TEXT_DARK};
  }
`;

const HighlightText = styled.span`
  font-weight: bold;
`;

const TechSection = styled.div`
  max-width: 800px; /* Reduced max-width for more compact layout */
  margin: 2rem auto 0; /* Reduced top margin */
  padding: 0 1rem; /* Reduced padding */
  text-align: center;
`;

const Tagline = styled.p`
  font-weight: 600; 
  font-size: 1.2rem;
  margin-bottom: 1.5rem; 
`;

const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 1rem; /* Reduced gap between items */
`;

const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 70px; /* Reduced width */
  padding: 0.8rem; /* Reduced padding */
  border-radius: 8px;
  background: #fff;
  box-shadow: 0 3px 10px rgba(25, 118, 210, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-3px); /* Reduced hover effect */
    box-shadow: 0 5px 15px rgba(25, 118, 210, 0.2);
    background: ${BLUE_LIGHT};
  }
`;

const TechImg = styled.img`
  height: 40px; /* Reduced size */
  width: 40px; /* Reduced size */
  margin-bottom: 0.3rem; /* Reduced margin */
  object-fit: contain;
`;

const TechName = styled.div`
  font-size: 0.8rem; /* Reduced font size */
  text-align: center;
  color: ${TEXT_DARK};
`;

function About() {
  return (
    <AboutContainer id="about">
      <SectionTitle>About Me</SectionTitle>
      
      {/* Bio Section with Image and Text */}
      <BioSection>
        <ScrollAnimation animateIn="fadeInLeft" duration={0.8}>
          <ProfileImage
            src="/anime-self.png"
            alt="Profile illustration"
          />
        </ScrollAnimation>
        
        <AboutBio>
          <ScrollAnimation animateIn="fadeInLeft" delay={100}>
            <p>
              Hi there! My name is <HighlightText>Jc Miguel Beltran</HighlightText> from the Philippines, 
              and I currently live in Quezon City.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={200}>
            <p>
              My love for problem-solving led me to study Computer Science. During my freshman year, 
              I found my passion for solving problems and building applications and websites. I was 
              fascinated by how applications work and enjoyed making them better and more user-friendly. 
              Despite the tough times, my determination kept me going, and I made great friends who 
              supported me throughout my studies.
            </p>
          </ScrollAnimation>

          <ScrollAnimation animateIn="fadeInLeft" delay={300}>
            <p>
              As a full stack developer, I really enjoy working with a team to achieve shared goals. 
              I love the excitement of creating both the visible parts of websites and the behind-the-scenes 
              functionality. My skills have grown significantly, and I'm confident in working with various 
              technologies.
            </p>
          </ScrollAnimation>
        </AboutBio>
      </BioSection>
      
      {/* Compact Tech Stack Section */}
      <TechSection>
        <ScrollAnimation animateIn="fadeIn" delay={350}>
          <Tagline>
            I'm proficient with the following technologies:
          </Tagline>
        </ScrollAnimation>

        <Technologies>
          {stackList.map((stack, index) => (
            <ScrollAnimation 
              animateIn="fadeIn" 
              delay={100 * (index % 4)} 
              key={index}
            >
              <Tech>
                <TechImg src={stack.img} alt={stack.name} />
                <TechName>{stack.name}</TechName>
              </Tech>
            </ScrollAnimation>
          ))}
        </Technologies>
      </TechSection>
    </AboutContainer>
  );
}

export default About;