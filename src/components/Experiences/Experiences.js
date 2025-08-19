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
  padding: 4rem 0 2rem; 

  @media (max-width: 768px) {
    padding: 3rem 1.5rem 2rem; /* top 3rem, sides 1.5rem, bottom 2rem */
  }
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: bold;
  margin-bottom: 2rem;
  text-align: left;      /* 👈 aligned to the left */
  letter-spacing: 2px;
  color: ${COLORS.textDark};

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 1.5rem;
  }
`;

const SectionBlock = styled.div`
  margin-bottom: 5rem;

  @media (max-width: 768px) {
    margin-bottom: 3rem;
  }
`;

function Experiences() {
  return (
    <ExperienceWrapper id="projects">
      <Container>
        <SectionBlock>
          <SectionTitle>Experiences</SectionTitle>
          <ExperienceSection />
        </SectionBlock>
        <SectionBlock>
          <SectionTitle>Projects</SectionTitle>
        </SectionBlock>
      </Container>
                <ProjectCard />

    </ExperienceWrapper>
  );
}

export default Experiences;
