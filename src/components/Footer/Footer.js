import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../theme";

const FooterSection = styled.footer`
  width: 100%;
  min-height: 220px;
  position: relative;
  background: ${theme.colors.surfaceMuted};
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  padding-bottom: 2rem;

  svg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    min-width: 100%;
    height: 100%;
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: 180px;
    padding-bottom: 1.5rem;
  }
`;

const Credit = styled.p`
  position: relative;
  z-index: 1;
  font-size: 0.9rem;
  color: ${theme.colors.textMuted};
  text-align: center;
  padding: 0 1rem;
  max-width: 40rem;
  line-height: 1.5;

  strong {
    color: ${theme.colors.textSubtleOnDark};
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMax slice"
        aria-hidden
      >
        <path
          fill="#151418"
          fillOpacity="1"
          d="M0,160L48,152C96,144,192,128,288,112C384,96,480,80,576,88C672,96,768,120,864,130C960,140,1056,136,1152,140C1248,144,1344,160,1392,168L1440,176L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
        />
      </svg>
      <Credit>
        <strong>Jc Miguel Beltran</strong> · Portfolio · {new Date().getFullYear()}
      </Credit>
    </FooterSection>
  );
}

export default Footer;
