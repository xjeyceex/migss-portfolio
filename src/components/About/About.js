import React from "react";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";
import { stackList } from "../../data/ProjectData";

// Unified color palette
const COLORS = {
  primary: "#3b82f6",
  background: "#f8fafc",
  textDark: "#1e293b",
  textLight: "#64748b",
  white: "#ffffff"
};

const AboutContainer = styled.div`
  padding: 2rem 1rem 4rem 1rem; /* symmetric left/right padding */
  background: ${COLORS.background};
  
  @media (min-width: 1000px) {
    padding-left: 5rem;
     padding-right: 5rem; /* add right padding too */
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  font-weight: 700;
  margin-top: 2rem;
  margin-bottom: 4rem;
  color: ${COLORS.textDark};
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 50%;
    transform: translateX(-50%);
    width: 80px;
    height: 4px;
    background: ${COLORS.primary};
    border-radius: 2px;

    @media (max-width: 768px) {
        bottom: -16px;
    }
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
  max-width: 1000px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const AboutBio = styled.div`
  flex: 1;
  
  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.2rem;
    color: ${COLORS.textDark};
    text-align: left;
    
    @media (max-width: 768px) {
      font-size: 1rem;
      margin-top: 2rem;
      text-align: left;
      line-height: 1.5;
      max-width: 100%;
      word-break: break-word;
    }
  }
`;

const HighlightText = styled.span`
  color: ${COLORS.textDark};
  font-weight: 600;
`;

const TechSection = styled.div`
  max-width: 1200px;
  margin: 4rem auto 0;
  padding: 2rem 0; /* only vertical padding */
`;

const Tagline = styled.p`
  font-weight: 500;
  font-size: 1.2rem;
  margin-bottom: 2rem;
  color: ${COLORS.textLight};
  text-align: center;
  position: relative;
  padding-bottom: 0.5rem;
v
  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

const TechCardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 1.5rem;
  padding: 0 1rem;
  margin: 0 auto;
`;

const TechCard = styled.div`
  background: ${COLORS.white};
  border-radius: 12px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.06);
  padding: 1.5rem;
  transition: all 0.3s ease;
  border: 1px solid rgba(229, 231, 235, 0.8);
  position: relative;
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 28px rgba(0, 0, 0, 0.1);
  }
`;

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 1.5rem;
  padding-bottom: 0.8rem;
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: ${COLORS.textDark};
  margin: 0;
  position: relative;
  display: inline-block;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -0.8rem;
    left: 50%;
    transform: translateX(-50%);
    width: 30px;
    height: 2px;
    background: ${COLORS.primary};
    border-radius: 2px;
  }
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
  gap: 0.8rem;
  justify-items: center;
`;

const TechItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0.8rem 0.6rem;
  background: ${COLORS.background};
  border-radius: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(229, 231, 235, 0.8);
  transition: all 0.2s ease;
  width: 100%;
  cursor: pointer;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(59, 130, 246, 0.15);
    background: ${COLORS.white};
    
    div:first-of-type {
      transform: scale(1.08);
      box-shadow: 0 4px 10px rgba(59, 130, 246, 0.2);
    }
  }

  @media (max-width: 768px) {
    padding: 0.7rem 0.5rem;
  }
`;

const TechIcon = styled.div`
  margin-bottom: 0.5rem;
  padding: 0.5rem;
  background: ${COLORS.white};
  border-radius: 50%;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.06);
  transition: all 0.2s ease;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const TechImg = styled.img`
  height: 24px;
  width: 24px;
  object-fit: contain;

  @media (max-width: 768px) {
    height: 22px;
    width: 22px;
  }
`;

const TechName = styled.div`
  font-size: 0.75rem;
  font-weight: 500;
  text-align: center;
  color: ${COLORS.textDark};
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 0.7rem;
  }
`;

const StyledSVG = styled.svg`
  display: block;
  width: 100%;
  height: auto;
  margin-bottom: -4rem;

  @media (max-width: 768px) {
    margin-bottom: -2rem;
  }
`;

function About() {
  return (
    <>
      <StyledSVG
        viewBox="0 0 1440 300"
        xmlns="http://www.w3.org/2000/svg"
        preserveAspectRatio="none"
      >
        <path
          d="M 0,300 C 0,300 0,150 0,150 C 114.35714285714289,156.53571428571428 228.71428571428578,113.07142857142858 351,131 C 473.2857142857142,148.92857142857142 603.4999999999998,228.25 713,248 C 822.5000000000002,267.75 911.2857142857144,227.92857142857142 1029,210 C 1146.7142857142856,192.07142857142858 1293.3571428571427,196.03571428571428 1440,200 C 1440,200 1440,300 1440,300 Z"
          stroke="none"
          strokeWidth="0"
          fill="#151418ff"
          transform="rotate(-180 720 150)"
        ></path>
      </StyledSVG>
      
      <AboutContainer id="about">
        <SectionTitle>About Me</SectionTitle>
        
        <BioSection>
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
                I discovered how much I enjoyed turning ideas into real projects, and that's when I found 
                my passion for solving problems and building applications and websites that make a difference. 
              </p>
            </ScrollAnimation>

            <ScrollAnimation animateIn="fadeInRight" delay={300}>
              <p>
                As a full stack developer, I really enjoy working with a team to achieve shared goals. 
                I love the excitement of creating both the visible parts of websites and the behind-the-scenes 
                functionality, and I find great satisfaction in seeing how everything comes together 
                into a product that people can actually use and enjoy.
              </p>
            </ScrollAnimation>

          </AboutBio>
        </BioSection>
        
        <TechSection>
          <ScrollAnimation animateIn="fadeIn" delay={350}>
            <Tagline>
              Technologies & Tools I Work With
            </Tagline>
          </ScrollAnimation>

          <TechCardsContainer>
            {stackList && stackList.length > 0 ? stackList.map((group, groupIndex) => (
              <ScrollAnimation
                animateIn="fadeInUp"
                delay={200 * groupIndex}
                key={groupIndex}
              >
                <TechCard className="tech-card">
                  <CardHeader>
                    <CardTitle>{group.category.name}</CardTitle>
                  </CardHeader>
                  
                  <TechGrid>
                    {group.items.map((stack, index) => (
                      <TechItem key={stack.name}>
                        <TechIcon>
                          <TechImg src={stack.img} alt={stack.name} />
                        </TechIcon>
                        <TechName>{stack.name}</TechName>
                      </TechItem>
                    ))}
                  </TechGrid>
                </TechCard>
              </ScrollAnimation>
            )) : (
              <div style={{ textAlign: 'center', color: '#64748b', fontStyle: 'italic' }}>
                No tech stack data available
              </div>
            )}
          </TechCardsContainer>
        </TechSection>
      </AboutContainer>
    </>
  );
}

export default About;