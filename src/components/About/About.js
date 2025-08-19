import React from "react";
import { stackList } from "../../data/ProjectData";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

// Unified color palette
const COLORS = {
  primary: "#3b82f6",
  primaryLight: "#93c5fd",
  primaryDark: "#1d4ed8",
  background: "#f8fafc",
  textDark: "#1e293b",
  textLight: "#64748b",
  accent: "#6366f1",
  white: "#ffffff"
};

const AboutContainer = styled.div`
  padding: 0 2rem 6rem 2rem;
  background: ${COLORS.background};
  padding-top: 2rem;

  /* default for mobile + tablets */
  padding-left: 1rem;

  /* for desktops */
  @media (min-width: 1000px) {
    padding-left: 5rem;
  }
`;



const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: #111; /* solid black */
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: #555; /* subtle grey underline */
    border-radius: 2px;
    opacity: 0.6; /* softer look */
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1rem;
  }
`;

const BioSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  gap: 3rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const ProfileImage = styled.img`
  width: 280px;
  height: 280px;
  border-radius: 50%;
  object-fit: cover;
  
  @media (max-width: 992px) {
    display: none;
  }
`;

const AboutBio = styled.div`
  flex: 1;
  
  p {
    font-size: 1.1rem;
    line-height: 1.7;
    margin-bottom: 1.5rem;
    color: ${COLORS.textDark};
    text-align: left; /* Default to left-aligned */
    
    @media (max-width: 768px) {
      font-size: 1rem;
      text-align: left; /* Changed from center to left for mobile */
      line-height: 1.6;
      max-width: 100%;
      word-break: break-word;
    }
  }
`;

const HighlightText = styled.span`
  color: #333; /* dark grey for subtle highlight */
  font-weight: 600;
`;

const TechSection = styled.div`
  max-width: 1000px;
  margin: 4rem auto 0;
  padding: 0 1rem;
  text-align: center;

  @media (max-width: 768px) {
    margin: 3rem auto 0;
  }
`;

const Tagline = styled.p`
  font-weight: 600;
  font-size: 1.3rem;
  margin-bottom: 2rem;
  color: ${COLORS.textDark};
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.1rem;
    margin-bottom: 1.5rem;
  }
`;

const Category = styled.div`
  width: 100%;
`;

const CategoryTitle = styled.h3`
  font-weight: 600;
  font-size: 1.1rem;
  color: #333;  
  text-align: center;
  text-transform: none;
  letter-spacing: 0.02em;
  margin-bottom: 0.75rem;

  &::after {
    content: "";
    display: block;
    width: 24px;
    height: 2px;
    background: #000; /* black underline */
    margin: 0.4rem auto 0;
    border-radius: 2px;
    opacity: 0.5; /* subtle */
  }
`;

const CategoryHeader = styled.div`
  margin-bottom: 1rem;
`;



const Technologies = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(100px, 1fr));
  gap: 1.2rem;
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
  }
`;

const CategoryGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(85px, 1fr)); /* moderate min-width */
  gap: 0.8rem; /* enough breathing space */
  width: 100%;

  @media (max-width: 768px) {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 0.6rem;
  }
`;

const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.7rem; /* slightly smaller padding */
  border-radius: 10px; /* slightly smaller rounding */
  background: ${COLORS.white};
  box-shadow: 0 3px 5px rgba(0,0,0,0.05);
  transition: all 0.3s ease;
  min-width: 85px; /* match grid min-width */
  
  &:hover {
    transform: translateY(-4px);
    box-shadow: 0 8px 12px rgba(59, 130, 246, 0.1);
    background: ${COLORS.primaryLight};
  }

  @media (max-width: 768px) {
    padding: 0.6rem;
    min-width: 70px;
  }
`;

const TechImg = styled.img`
  height: 35px; /* slightly smaller */
  width: 35px;
  margin-bottom: 0.4rem;

  @media (max-width: 768px) {
    height: 28px;
    width: 28px;
  }
`;

const TechName = styled.div`
  font-size: 0.8rem; /* slightly smaller */
  font-weight: 500;
  text-align: center;
  color: ${COLORS.textDark};

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;


const StyledSVG = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: -6rem;

  @media (max-width: 768px) {
    margin-bottom: -3rem;
  }
`;

function About() {
  return (
    <>
      <StyledSVG
        viewBox="0 0 1440 400"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,400 C 0,400 0,200 0,200 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,400 1440,400 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 200)"
        ></path>
      </StyledSVG>
      
      <AboutContainer id="about">
        <SectionTitle>About Me</SectionTitle>
        
        <BioSection>
          <ScrollAnimation animateIn="fadeInLeft" duration={0.8}>
            <ProfileImage
              src="/anime-self.png"
              alt="Profile illustration"
            />
          </ScrollAnimation>
          
          <AboutBio>
            <ScrollAnimation animateIn="fadeInRight" delay={100}>
              <p>
                Hi there! My name is <HighlightText>Jc Miguel Beltran</HighlightText> from the Philippines, 
                and I currently live in Quezon City.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={200}>
              <p>
                My love for problem-solving led me to study Computer Science. During my freshman year, 
                I found my passion for solving problems and building applications and websites.
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={300}>
              <p>
                As a full stack developer, I really enjoy working with a team to achieve shared goals. 
                I love the excitement of creating both the visible parts of websites and the behind-the-scenes 
                functionality.
              </p>
            </ScrollAnimation>
          </AboutBio>
        </BioSection>
        
        <TechSection>
          <ScrollAnimation animateIn="fadeIn" delay={350}>
            <Tagline>
              I'm proficient with the following technologies:
            </Tagline>
          </ScrollAnimation>

          <Technologies>
            {stackList.map((group, groupIndex) => (
              <Category key={groupIndex}>
                <CategoryHeader>
                  <CategoryTitle>{group.category.name}</CategoryTitle>
                </CategoryHeader>
                <CategoryGrid>
                  {group.items.map((stack, index) => (
                    <ScrollAnimation
                      animateIn="fadeIn"
                      delay={100 * (index % 4)}
                      key={stack.name}
                    >
                      <Tech>
                        <TechImg src={stack.img} alt={stack.name} />
                        <TechName>{stack.name}</TechName>
                      </Tech>
                    </ScrollAnimation>
                  ))}
                </CategoryGrid>
              </Category>
            ))}
          </Technologies>
        </TechSection>
      </AboutContainer>
    </>
  );
}

export default About;