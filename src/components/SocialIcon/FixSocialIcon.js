import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import styled from "@emotion/styled";
import ScrollAnimation from "react-animate-on-scroll";

const SocialContainer = styled.div`
  position: fixed;
  top: 48%;
  left: 1.5rem;
  transform: translateY(-50%);
  z-index: 100;

  ul {
    display: block;
    list-style: none;
    margin: 0;
    padding: 0;
  }

  .item + .item {
    margin-top: 2rem;
  }

  a {
    font-size: 2.3rem;
    color: rgb(119, 119, 121);
    transition: all 0.3s ease;
    display: flex;
    align-items: center;
    justify-content: center;
    
    &:hover {
      color: rgb(57, 134, 250);
      transform: scale(1.1);
    }
  }

  /* Tablet breakpoint */
  @media screen and (max-width: 1000px) {
    margin-top: 2rem;
    position: relative;
    top: 0;
    left: 0;
    transform: none;
    
    ul {
      display: flex;
      justify-content: center;
      align-items: center;
    }

    a {
      font-size: 2.5rem;
      color: #151418;
      
      &:hover {
        color: rgb(57, 134, 250);
      }
    }

    .item + .item {
      margin-top: 0;
      margin-left: 2rem;
    }
  }

  /* Mobile breakpoint */
  @media screen and (max-width: 768px) {
    margin-top: 1.5rem;

    a {
      font-size: 2.2rem;
    }

    .item + .item {
      margin-left: 1.5rem;
    }
  }

  /* Small mobile breakpoint */
  @media screen and (max-width: 450px) {
    margin-top: 1rem;
    padding: 0 1rem;

    ul {
      flex-wrap: wrap;
      gap: 1rem;
    }

    a {
      font-size: 2rem;
      padding: 0.5rem;
      border-radius: 50%;
      background: rgba(255, 255, 255, 0.1);
      backdrop-filter: blur(10px);
      border: 1px solid rgba(255, 255, 255, 0.2);
      
      &:hover {
        background: rgba(57, 134, 250, 0.1);
        border-color: rgba(57, 134, 250, 0.3);
        transform: scale(1.05);
      }
    }

    .item + .item {
      margin-left: 0;
    }
  }

  /* Very small screens */
  @media screen and (max-width: 350px) {
    ul {
      gap: 0.8rem;
    }

    a {
      font-size: 1.8rem;
      padding: 0.4rem;
    }
  }
`;

function FixSocialIcon() {
  return (
    <SocialContainer>
      <ScrollAnimation animateIn="fadeIn" animateOnce={true}>
        <ul>
          <li className="item">
            <a
              href="https://www.linkedin.com/in/jc-miguel-beltran/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
            >
              <FaLinkedin />
            </a>
          </li>
          {/* <li className="item">
            <a
              href="https://www.instagram.com/migelgugel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Instagram Profile"
            >
              <FaInstagram />
            </a>
          </li>
          <li className="item">
            <a
              href="https://www.facebook.com/migelgugel/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Facebook Profile"
            >
              <FaFacebook />
            </a>
          </li> */}
          <li className="item">
            <a
              href="https://github.com/xjeyceex/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
            >
              <FaGithub />
            </a>
          </li>
        </ul>
      </ScrollAnimation>
    </SocialContainer>
  );
}

export default FixSocialIcon;