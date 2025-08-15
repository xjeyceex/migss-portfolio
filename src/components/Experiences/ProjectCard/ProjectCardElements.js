import styled from "@emotion/styled";

export const Card = styled.div`
  display: grid;
  grid-gap: 2rem;
  margin-bottom: 4rem;
  grid-template-columns: 1fr;
  border-radius: 16px;
  background: #ffffff;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  box-shadow: 0 6px 18px rgba(0, 0, 0, 0.08);
  overflow: hidden;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.15);
  }

  @media (min-width: 992px) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CardLeft = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;

  img {
    width: auto;
    height: 100%;
    border-radius: 12px;
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
    transition: transform 0.3s ease, box-shadow 0.3s ease;

    &:hover {
      transform: scale(1.05);
      box-shadow: 0 10px 20px rgba(0, 0, 0, 0.12);
    }
  }
`;

export const CardRight = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  padding: 2rem;

  h4 {
    font-size: 1.8rem;
    font-weight: 600;
    margin-bottom: 1rem;
    color: #1f2937; // dark text
    position: relative;

    &::after {
      content: '';
      position: absolute;
      bottom: -8px;
      left: 0;
      width: 60px;
      height: 4px;
      background: linear-gradient(90deg, #3b82f6, #60a5fa); // blue accent
      border-radius: 3px;
      transition: width 0.3s ease;
    }
  }

  p {
    font-weight: 400;
    line-height: 1.7;
    margin: 1rem 0;
    color: #1f2937; // dark text
  }

  @media (max-width: 768px) {
    padding: 1.5rem;

    h4 {
      font-size: 1.6rem;
      text-align: center;

      &::after {
        left: 50%;
        transform: translateX(-50%);
      }
    }

    p {
      text-align: center;
    }
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 0; // buttons still close together
  margin-top: 1rem;
  flex-wrap: wrap; // wrap if really tiny screen

  a, button {
    flex: unset; // keep natural size
    min-width: auto;
    padding: 0.5rem 1rem; // slightly bigger padding
    font-size: 0.9375rem; // slightly bigger text (~15px)
  }

  @media (max-width: 480px) {
    flex-direction: row;
    gap: 0.25rem; // tight spacing on mobile
  }
`;

export const TechCardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 0.5rem; // compact spacing
  margin: 0.75rem 0;
`;

export const TechCard = styled.div`
  border-radius: 6px;
  background: #f3f4f6; // light gray background instead of blue
  padding: 0.3rem 0.8rem;
  font-size: 0.75rem;
  font-weight: 500;
  color: #1f2937; // dark text
  border: 1px solid #e5e7eb; // subtle gray border
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.05);
  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-1px);
    box-shadow: 0 2px 6px rgba(0, 0, 0, 0.1); // subtle shadow on hover
  }
`;