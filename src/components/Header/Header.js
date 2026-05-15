import React, { useState, useEffect } from "react";
import PDF from '../../assets/resume/Resume.pdf'
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
          <Logo
            to="hero"
            smooth
            duration={500}
            offset={-80}
            href="#hero"
            aria-label="Back to top"
          >
            <img src="/logo.png" alt="" width={72} height={72} />
          </Logo>
          <NavMenu>
            <NavLink
              className="menu-item"
              to="projects"
              scrolled={scrolled}
              smooth
              duration={500}
              offset={-72}
              href="#projects"
            >
              Experiences
            </NavLink>
            <NavLink
              className="menu-item"
              to="about"
              scrolled={scrolled}
              smooth
              duration={500}
              offset={-72}
              href="#about"
            >
              About
            </NavLink>
            <NavLink
              className="menu-item"
              to="contact"
              scrolled={scrolled}
              smooth
              duration={500}
              offset={-72}
              href="#contact"
            >
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