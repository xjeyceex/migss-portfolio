import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  width: 100%;
  height: 300px;
  position: relative;
  background: #f9f9f9;
  overflow: hidden;

  svg {
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: auto;
    min-width: 100%;
    height: 100%;
  }

  @media (max-width: 768px) {
    height: 200px;
  }
`;

function Footer() {
  return (
    <FooterSection>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 200"
        preserveAspectRatio="xMidYMax slice"
      >
        <path
          fill="#141419"
          fillOpacity="1"
          d="M0,160L48,152C96,144,192,128,288,112C384,96,480,80,576,88C672,96,768,120,864,130C960,140,1056,136,1152,140C1248,144,1344,160,1392,168L1440,176L1440,200L1392,200C1344,200,1248,200,1152,200C1056,200,960,200,864,200C768,200,672,200,576,200C480,200,384,200,288,200C192,200,96,200,48,200L0,200Z"
        ></path>
      </svg>
    </FooterSection>
  );
}

export default Footer;
