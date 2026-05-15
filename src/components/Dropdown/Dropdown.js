import React, { useEffect } from "react";
import { FaTimes } from "react-icons/fa";
import styled from "@emotion/styled";
import { Link as ScrollLink } from "react-scroll";
import PDF from "../../assets/resume/Migss_resume.pdf";
import { theme } from "../../theme";

const Overlay = styled.div`
  background: ${theme.colors.bgHero};
  position: fixed;
  inset: 0;
  z-index: 1000;
  transition: opacity 0.35s ${theme.motion.easeOut},
    visibility 0.35s ${theme.motion.easeOut},
    transform 0.35s ${theme.motion.easeOut};
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  opacity: ${({ isOpen }) => (isOpen ? 1 : 0)};
  visibility: ${({ isOpen }) => (isOpen ? "visible" : "hidden")};
  transform: ${({ isOpen }) => (isOpen ? "translateY(0)" : "translateY(-8px)")};
  pointer-events: ${({ isOpen }) => (isOpen ? "auto" : "none")};
`;

const CloseIcon = styled(FaTimes)`
  font-size: 1.75rem;
  color: #fff;
  position: absolute;
  right: 1.5rem;
  top: 1.5rem;
  cursor: pointer;
  padding: 0.35rem;
  transition: color 0.2s ${theme.motion.easeOut}, transform 0.2s ${theme.motion.easeOut};

  &:hover {
    color: ${theme.colors.textSubtleOnDark};
    transform: scale(1.08);
  }
`;

export const NavMenu = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

  .menu-item + .menu-item {
    margin-top: 2rem;
  }
`;

export const NavLink = styled(ScrollLink)`
  color: #fff;
  cursor: pointer;
  font-size: 1.5rem;
  font-weight: 500;
  letter-spacing: 0.02em;
  transition: color 0.2s ${theme.motion.easeOut};

  &:hover {
    color: ${theme.colors.textSubtleOnDark};
  }
`;

export const NavBtn = styled.div`
  display: flex;
  justify-content: center;
  margin-top: 4rem;
`;

function Dropdown({ isOpen, toggle }) {
  useEffect(() => {
    if (!isOpen) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = prev;
    };
  }, [isOpen]);

  const close = (e) => {
    e.stopPropagation();
    toggle();
  };

  return (
    <Overlay
      isOpen={isOpen}
      role="dialog"
      aria-modal="true"
      aria-hidden={!isOpen}
      onClick={toggle}
    >
      <CloseIcon onClick={close} aria-label="Close menu" />
      <NavMenu onClick={(e) => e.stopPropagation()}>
        <NavLink onClick={toggle} className="menu-item" to="projects" smooth duration={500} offset={-72} href="#projects">
          Experiences
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="about" smooth duration={500} offset={-72} href="#about">
          About
        </NavLink>
        <NavLink onClick={toggle} className="menu-item" to="contact" smooth duration={500} offset={-72} href="#contact">
          Contact
        </NavLink>
      </NavMenu>
      <NavBtn onClick={(e) => e.stopPropagation()}>
        <a className="btn PrimaryBtn" href={PDF} target="_blank" rel="noopener noreferrer">
          Download Resume
        </a>
      </NavBtn>
    </Overlay>
  );
}

export default Dropdown;
