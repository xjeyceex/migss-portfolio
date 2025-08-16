import React from "react";
import { motion } from "framer-motion";
import { ProjectList } from "../../../data/ProjectData";
import styled from "@emotion/styled";

// Styled Components
const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(350px, 1fr));
  gap: 2rem;
  width: 100%;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled.div`
  background: white;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  height: 100%;

  &:hover {
    box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
    transform: translateY(-5px);
  }

  @media (max-width: 768px) {
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    &:hover {
      transform: none;
    }
  }
`;

const CardImage = styled.div`
  width: 100%;
  height: 200px;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;
  }

  &:hover img {
    transform: scale(1.05);
  }

  @media (max-width: 768px) {
    height: 180px;
  }
`;

const CardContent = styled.div`
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  flex-grow: 1;

  @media (max-width: 768px) {
    padding: 1.2rem;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.3rem;
  font-weight: 600;
  margin-bottom: 0.8rem;
  color: #1e293b;

  @media (max-width: 768px) {
    font-size: 1.2rem;
  }
`;

const CardDescription = styled.p`
  color: #64748b;
  line-height: 1.6;
  margin-bottom: 1.2rem;
  flex-grow: 1;
  font-size: 0.95rem;
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem;
  margin-bottom: 1.5rem;

  @media (max-width: 768px) {
    margin-bottom: 1.2rem;
  }
`;

const TechItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: #f5f5f5;
  padding: 0.3rem 0.6rem;
  border-radius: 4px;
  font-size: 0.8rem;
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: auto;

  @media (max-width: 768px) {
    flex-direction: row;
    gap: 0.6rem;
  }
`;

const Button = styled.a`
  padding: 0.6rem 1rem;
  border-radius: 6px;
  font-size: 0.9rem;
  font-weight: 500;
  text-align: center;
  transition: all 0.2s ease;
  cursor: pointer;
  text-decoration: none;
  flex: 1;

  &.primary {
    background: #3b82f6;
    color: white;
    &:hover {
      background: #2563eb;
    }
  }

  &.secondary {
    background: #e0f2fe;
    color: #0369a1;
    &:hover {
      background: #bae6fd;
    }
  }

  @media (max-width: 768px) {
    padding: 0.7rem;
    font-size: 0.85rem;
  }
`;

const CardMeta = styled.div`
  display: flex;
  gap: 1rem;
  margin-bottom: 0.5rem;
  color: #666;
  font-size: 0.9rem;
`;

const TechIcon = styled.img`
  width: 16px;
  height: 16px;
  object-fit: contain;
`;

function ProjectCard() {
  return (
    <ProjectGrid>
    {ProjectList.map((project, index) => (
      <motion.div
        key={index}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3, delay: index * 0.1 }}
      >
        <Card>
          <CardImage>
            <img 
              src={project.img} 
              alt={project.title}
              loading="lazy"
            />
          </CardImage>
          <CardContent>
            <CardTitle>{project.title}</CardTitle>
            <CardMeta>
              <span>{project.role}</span>
              <span>{project.year}</span>
            </CardMeta>
            <CardDescription>
              {project.description}
            </CardDescription>
            
            {/* Tech stack with icons */}
            <TechStack>
              {project.tech_stack.map((tech, idx) => (
                <TechItem key={idx}>
                  <TechIcon src={tech.icon} alt={tech.name} />
                  <span>{tech.name}</span>
                </TechItem>
              ))}
            </TechStack>
            
            <ButtonGroup>
              {project.github_url && (
                <Button
                  className="secondary"
                  href={project.github_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  View Code
                </Button>
              )}
              {project.demo_url && (
                <Button
                  className="primary"
                  href={project.demo_url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Live Demo
                </Button>
              )}
            </ButtonGroup>
          </CardContent>
        </Card>
      </motion.div>
    ))}
    </ProjectGrid>
  );
}

export default ProjectCard;