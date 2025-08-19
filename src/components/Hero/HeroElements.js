import styled, { keyframes } from "styled-components";
import { Link as LinkScroll } from "react-scroll";

export const HeroContainer = styled.div`
  padding: 4rem 1rem 2rem 1rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  max-width: 1200px; /* increased from 1000px */
  
  @media (min-width: 1000px) {
    padding-left: 5rem;
  }
`;

export const HeroWrapper = styled.div`
  display: flex;
  flex-direction: row;

  @media screen and (max-width: 992px) {
    flex-direction: column;
  }
`;

export const HeroLeft = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  text-align: left;
  flex: 1.3; /* increased from 1 to give more space */

  h1 {
    font-size: clamp(2.5rem, 4vw, 3.5rem); /* responsive font size */
    color: #f6f6f6;
    opacity: 0.98;
    font-weight: 400;
    white-space: nowrap; /* prevent wrapping */
    overflow: hidden;
    text-overflow: ellipsis;
  }

  h5 {
    font-size: clamp(1rem, 2vw, 1.6rem);
    color: rgb(119, 119, 121);
    margin-bottom: 1rem;
    font-weight: 400;
  }

  p {
    font-size: 17px;
    color: #f6f6f6;
    opacity: 0.85;
  }

  @media screen and (max-width: 992px) {
    text-align: center;
    align-items: center;
    margin-bottom: 2rem;

    h5 {
      min-height: 5rem;
    }
  }
`;

export const HeroRight = styled.div`
  flex: 1;
  justify-content: center;
  display: flex;

  @media (min-width: 1200px) {
    flex: 0.8; /* shrink the image container relative to HeroLeft */
    max-width: 500px; /* optional limit so image doesn't grow too much */
  }

  @media (max-width: 992px) {
    margin-bottom: 2rem;
  }
`;

export const Image = styled.img`
  width: 100%;       /* make it fill its container */
  max-width: 100%;   /* prevent overflow */
  height: auto;      /* keep aspect ratio */
  object-fit: cover;

  animation: animate 8s ease-in-out infinite;
  transition: all 1s ease-in-out;
  background-image: linear-gradient(to bottom, #666666, #888085, #b09b9c, #d3b9ab, #e7debe);
  border-radius: 47% 53% 34% 66% / 45% 14% 86% 55%;

  @keyframes animate {
    0% {}
    25% { border-radius: 87% 13% 70% 30% / 30% 30% 70% 70%; }
    50% { border-radius: 41% 59% 26% 74% / 75% 30% 70% 25%; }
    75% { border-radius: 60% 40% 30% 70% / 60% 30% 70% 40%; }
    100% { border-radius: 47% 53% 34% 66% / 45% 14% 86% 55%; }
  }
`;

const ScrollAnimation = keyframes`
  0%,
  20%,
  50%,
  80%,
  100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-20px);
  }
  60% {
    transform: translateY(-10px);
  }
`;

export const ScrollDown = styled(LinkScroll)`
  display: flex;
  justify-content: flex-start;
  cursor: pointer;
  position: absolute;

  animation: ${ScrollAnimation} 2s linear 0s infinite;
  @media screen and (max-width: 992px) {
    position: relative;
    justify-content: center;
    margin-top: 2rem;
  }
`;

export const ScrollLink = styled.div`
  display: flex;
  align-items: center;
  font-size: 1.3rem;
  color: #f6f6f6;

  img {
    height: 35px;
    width: 35px;
    margin-left: 6px;
  }
`;
