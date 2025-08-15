import React, { useState, useEffect } from "react";
import { ProjectList } from "../../../data/ProjectData";
import {
  Card,
  CardLeft,
  CardRight,
  BtnGroup,
  ProjectGrid,
  MobileBtnGroup,
  DescriptionText,
} from "./ProjectCardElements";
import { motion, AnimatePresence } from "framer-motion";
import styled from "@emotion/styled";

const ModalOverlay = styled(motion.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.7);
  backdrop-filter: blur(4px);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
  padding: 1rem;
`;

const ModalContent = styled(motion.div)`
  background: #fff;
  padding: 2.5rem;
  max-width: 900px;
  width: 100%;
  border-radius: 20px;
  overflow-y: auto;
  max-height: 90vh;
  position: relative;
  box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04);

  @media (max-width: 768px) {
    padding: 1.5rem;
  }
`;

const CloseBtn = styled.button`
  position: absolute;
  top: 1.5rem;
  right: 1.5rem;
  background: #f3f4f6;
  color: #6b7280;
  border: none;
  border-radius: 50%;
  width: 36px;
  height: 36px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  font-size: 1.2rem;
  transition: all 0.2s ease;

  &:hover {
    background: #e5e7eb;
    color: #4b5563;
  }
`;

function ProjectCard() {
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === "Escape") setSelectedProject(null);
    };
    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, []);

  return (
   <>
      <ProjectGrid>
        {ProjectList.map((project, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
            whileHover={{ scale: isMobile ? 1 : 1.03 }}
            whileTap={{ scale: 0.98 }}
          >
            <Card onClick={() => !isMobile && setSelectedProject(project)}>
              <CardLeft>
                <img 
                  src={project.img} 
                  alt={project.title} 
                  loading="lazy"
                  onClick={(e) => {
                    if (isMobile) {
                      e.stopPropagation();
                      setSelectedProject(project);
                    }
                  }}
                />
              </CardLeft>
              <CardRight>
                <h4>{project.title}</h4>
                <DescriptionText>
                  {project.description.substring(0, 100)}...
                </DescriptionText>
                
                {isMobile && (
                  <MobileBtnGroup>
                    {project.github_url && (
                      <a
                        href={project.github_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn SecondaryBtn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Code
                      </a>
                    )}
                    {project.demo_url && (
                      <a
                        href={project.demo_url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn PrimaryBtn"
                        onClick={(e) => e.stopPropagation()}
                      >
                        Demo
                      </a>
                    )}
                    <button 
                      className="btn TertiaryBtn"
                      onClick={(e) => {
                        e.stopPropagation();
                        setSelectedProject(project);
                      }}
                    >
                      More
                    </button>
                  </MobileBtnGroup>
                )}
              </CardRight>
            </Card>
          </motion.div>
        ))}
      </ProjectGrid>

      <AnimatePresence>
        {selectedProject && (
          <ModalOverlay
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setSelectedProject(null)}
          >
            <ModalContent
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 20 }}
              onClick={(e) => e.stopPropagation()}
            >
              <CloseBtn onClick={() => setSelectedProject(null)}>
                ×
              </CloseBtn>

              <img
                src={selectedProject.img}
                alt={selectedProject.title}
                style={{
                  width: "100%",
                  borderRadius: "12px",
                  marginBottom: "1.5rem",
                  objectFit: "cover",
                  maxHeight: "300px",
                }}
              />

              <h2 style={{ fontSize: "1.8rem", fontWeight: 700, marginBottom: "1rem" }}>
                {selectedProject.title}
              </h2>

              <p style={{ fontSize: "1.05rem", lineHeight: 1.7, color: "#4b5563", marginBottom: "1.5rem" }}>
                {selectedProject.description}
              </p>

              <div style={{ marginBottom: "1.5rem" }}>
                <h3 style={{ fontSize: "1.1rem", fontWeight: 600, marginBottom: "0.5rem" }}>Technologies Used:</h3>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {selectedProject.tech_stack.map((tech, idx) => (
                    <span key={idx} style={{
                      background: "#e0f2fe",
                      color: "#0369a1",
                      fontSize: "0.8rem",
                      padding: "0.3rem 0.7rem",
                      borderRadius: "6px",
                    }}>
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <BtnGroup>
                {selectedProject.github_url && (
                  <a
                    href={selectedProject.github_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn SecondaryBtn"
                  >
                    View Code
                  </a>
                )}
                {selectedProject.demo_url && (
                  <a
                    href={selectedProject.demo_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn PrimaryBtn"
                  >
                    Live Demo ➜
                  </a>
                )}
              </BtnGroup>
            </ModalContent>
          </ModalOverlay>
        )}
      </AnimatePresence>
    </>
  );
}

export default ProjectCard;