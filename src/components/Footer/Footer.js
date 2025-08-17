import React from "react";
import styled from "@emotion/styled";

const FooterSection = styled.div`
  background-image: url(/footer_wave.svg);
  background-repeat: no-repeat;
  background-size: cover;
  width: 100%;
  height: 300px;
  position: relative;

  span {
    position: absolute;
    bottom: 4rem;
    color: #fff;

    a {
      text-decoration: underline;
    }
  }

  @media (max-width: 768px) {
    background-size: 180% 100%; 
    background-position: top center; 
  }
`;
function Footer() {
  return (
    <FooterSection>
      <div style={{ display: 'flex', alignItems: 'center', columnGap: '20px', rowGap: '10px', flexWrap: 'wrap', justifyContent: 'center' }} >
      <p style={{ textAlign: 'center', maxWidth: '600px' }}>
      <br />
      Thank you for Viewing my Portfolio!
      </p>
      </div>
    </FooterSection>
  );
}

export default Footer;
