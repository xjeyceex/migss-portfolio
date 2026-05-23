import React from "react";
import styled from "@emotion/styled";
import { Container } from "@mui/material";
import SectionHeading from "../ui/SectionHeading";
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

const SectionBlock = styled.div`
  margin-bottom: 3.25rem;

  @media (max-width: 768px) {
    margin-bottom: 2.75rem;
  }

  @media (max-width: 450px) {
    margin-bottom: 2rem;
  }

  @media (max-width: 350px) {
    margin-bottom: 1.75rem;
  }
`;

const ProjectCardWrapper = styled.div`
  margin-top: 0;
`;

function Experiences() {
  return (
    <ExperienceWrapper id="projects">
      <StyledContainer>
        <SectionBlock>
          <SectionHeading title="Experiences" />
          <ExperienceSection />
        </SectionBlock>
        <SectionBlock>
          <SectionHeading title="Projects" />
        </SectionBlock>
      </StyledContainer>
      <ProjectCardWrapper>
        <ProjectCard />
      </ProjectCardWrapper>
    </ExperienceWrapper>
  );
}

export default Experiences;