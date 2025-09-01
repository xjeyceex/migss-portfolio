import React, { useState, useEffect } from "react";
import PDF from '../../assets/resume/Migss_resume.pdf'
import { Nav, NavContent, Logo, NavLink, Bars, NavMenu, NavBtn } from "./HeaderElements";

const Header = ({ toggle }) => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Adjust this value based on your hero section height
      // You can also use a ref to get the exact hero height
      const heroHeight = window.innerHeight; // Assuming hero is full viewport height
      const scrollPosition = window.scrollY;
      
      setScrolled(scrollPosition > heroHeight * 0.8); // Trigger when 80% past hero
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="Container" style={{padding: 0}}>
      <Nav scrolled={scrolled}>
        <NavContent>
          <Logo to="/">
            <img
              src="/logo.png"
              alt="logo"
            />
          </Logo>
          <NavMenu>
            <NavLink className="menu-item" to="projects" scrolled={scrolled}>
              Experiences
            </NavLink>
            <NavLink className="menu-item" to="about" scrolled={scrolled}>
              About
            </NavLink>
            <NavLink className="menu-item" to="contact" scrolled={scrolled}>
              Contact
            </NavLink>
          </NavMenu>
          <NavBtn>
            <a
              className="btn PrimaryBtn"
              href= {PDF}
              target="_blank"
              rel="noopener noreferrer"
            >
              Download Resume
            </a>
          </NavBtn>
          <Bars onClick={toggle} />
        </NavContent>
      </Nav>
    </div>
  );
};

export default Header;