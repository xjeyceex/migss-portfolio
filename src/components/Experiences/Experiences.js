import React from "react";
import ProjectCard from "./ProjectCard/ProjectCard";
import styled from "@emotion/styled";

// Using the same color palette
const COLORS = {
  primary: "#3b82f6",
  background: "#f8fafc",
  textDark: "#1e293b",
  white: "#ffffff"
};

const ExperienceWrapper = styled.div`
  padding: 6rem 2rem;
  background: ${COLORS.white};
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 4rem 1rem;
  }
`;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  position: relative;
`;

const SectionTitle = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  margin-bottom: 4rem;
  color: ${COLORS.textDark};
  position: relative;
  display: inline-block;
  
  &::after {
    content: "";
    position: absolute;
    bottom: -12px;
    left: 0;
    width: 80px;
    height: 4px;
    background: ${COLORS.primary};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    margin-bottom: 3rem;
  }
`;

function Experiences() {
  return (
    <ExperienceWrapper id="projects">
      <Container>
        <SectionTitle>Projects & Experiences</SectionTitle>
        <ProjectCard />
      </Container>
    </ExperienceWrapper>
  );
}

export default Experiences;