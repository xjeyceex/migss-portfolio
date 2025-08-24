import React from "react";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import ProjectCard from "./ProjectCard/ProjectCard";
import ExperienceSection from "./Experiences/ExperienceSection";

const COLORS = {
  primary: "#333",          // dark gray
  background: "#f8fafc",
  textDark: "#1e293b",
  white: "#ffffff"
};

const ExperienceWrapper = styled.section`
  background-color: ${COLORS.white}; 
  color: ${COLORS.textDark};
  min-height: 100vh;
  padding: 4rem 1rem 2rem; 

  @media (min-width: 1000px) {
    padding: 4rem 5rem 2rem;
  }

  @media (max-width: 768px) {
    padding: 3rem 1rem 2rem;
  }

  @media (max-width: 450px) {
    padding: 2.5rem 1rem 1.5rem;
    min-height: auto;
  }
`;

const StyledContainer = styled(Container)`
  && {
    padding-left: 0;
    padding-right: 0;
    max-width: 100%;

    @media (min-width: 1200px) {
      max-width: 1200px;
      padding-left: 1rem;
      padding-right: 1rem;
    }
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: left;
  letter-spacing: 2px;
  color: ${COLORS.textDark};
  position: relative;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -8px;
    left: 0;
    width: 60px;
    height: 4px;
    background: linear-gradient(135deg, #1976d2 0%, #2196f3 100%);
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
    letter-spacing: 1.5px;
    
    &::after {
      width: 50px;
      height: 3px;
      bottom: -6px;
    }
  }

  @media (max-width: 450px) {
    font-size: 1.75rem;
    margin-bottom: 1.25rem;
    letter-spacing: 1px;
    
    &::after {
      width: 40px;
      height: 3px;
      bottom: -5px;
    }
  }

  @media (max-width: 350px) {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    
    &::after {
      width: 35px;
      height: 2px;
    }
  }
`;

const SectionBlock = styled.div`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3.5rem;
  }

  @media (max-width: 450px) {
    margin-bottom: 2.5rem;
  }

  @media (max-width: 350px) {
    margin-bottom: 2rem;
  }
`;

const ProjectCardWrapper = styled.div`
  margin-top: 2rem;

  @media (max-width: 768px) {
    margin-top: 1.5rem;
  }

  @media (max-width: 450px) {
    margin-top: 1rem;
  }
`;

function Experiences() {
  return (
    <ExperienceWrapper id="projects">
      <StyledContainer>
        <SectionBlock>
          <SectionTitle>Experiences</SectionTitle>
          <ExperienceSection />
        </SectionBlock>
        <SectionBlock>
          <SectionTitle>Projects</SectionTitle>
        </SectionBlock>
      </StyledContainer>
      <ProjectCardWrapper>
        <ProjectCard />
      </ProjectCardWrapper>
    </ExperienceWrapper>
  );
}

export default Experiences;