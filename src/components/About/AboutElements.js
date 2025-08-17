import styled from "@emotion/styled";
import { keyframes } from "@emotion/react";

export const fadeIn = keyframes`
  from {
    opacity: 0;
    transform: translateY(20px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

export const AboutContainer = styled.div`
  padding: 5rem 0;
  background: ${props => props.theme.colors.background2};
  position: relative;
`;

export const SectionTitle = styled.h2`
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 3rem;
  color: ${props => props.theme.colors.primary1};
  position: relative;
  
  &::after {
    content: '';
    display: block;
    width: 80px;
    height: 4px;
    background: ${props => props.theme.colors.accent1};
    margin: 1rem auto 0;
  }
`;

export const BigCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
  
  @media (min-width: 992px) {
    flex-direction: row;
    align-items: flex-start;
    gap: 3rem;
  }
`;

export const Image = styled.img`
  width: 250px;
  height: 250px;
  border-radius: 50%;
  object-fit: cover;
  border: 5px solid ${props => props.theme.colors.accent1};
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  margin-bottom: 2rem;
  
  @media (min-width: 992px) {
    margin-bottom: 0;
  }
`;

export const AboutBio = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center; // center everything horizontally

  p {
    font-size: 1.1rem;
    line-height: 1.6;
    margin-bottom: 1.5rem;
    color: #333;
    text-align: center; // optional: center paragraphs too
  }
`;

export const HighlightText = styled.span`
  color: #444;              /* softer than #333 */
  font-weight: 600;         /* gives subtle emphasis */
  letter-spacing: 0.3px;    /* touch of refinement */
`;

export const Tagline = styled.p`
  font-weight: bold;
  margin-top: 2rem !important;
  font-size: 1.2rem !important;
  color: #333 !important;
  text-align: center;
`;

export const Technologies = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; // center the tech cards
  gap: 1.5rem;
  margin-top: 2rem;
`;

export const Tech = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 90px;
  padding: 1rem;
  border-radius: 10px;
  background: ${props => props.theme.colors.background1};
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.15);
  }
`;

export const TechImg = styled.img`
  height: 50px;
  width: 50px;
  margin-bottom: 0.5rem;
  object-fit: contain;
`;

export const TechName = styled.div`
  font-size: 0.9rem;
  text-align: center;
  color: ${props => props.theme.colors.text1};
`;