import styled from "@emotion/styled";

export const ProjectGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  margin-top: 1rem;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

export const Card = styled.div`
  display: flex;
  flex-direction: column;
  border-radius: 12px;
  background: #fff;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.05), 0 1px 3px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1);
  border: 1px solid #e5e7eb;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);
  }

  @media (min-width: 768px) {
    flex-direction: row;
    height: 180px;
  }
`;

export const CardLeft = styled.div`
  flex: 1;
  min-height: 180px;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f8fafc;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.5s ease;

    &:hover {
      transform: scale(1.05);
    }
  }

  @media (min-width: 768px) {
    min-height: auto;
  }
`;

export const CardRight = styled.div`
  flex: 1;
  padding: 1.2rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  h4 {
    font-size: 1.1rem;
    font-weight: 600;
    margin-bottom: 0.5rem;
    color: #1f2937;
    line-height: 1.4;
  }
`;

export const DescriptionText = styled.p`
  font-size: 0.9rem;
  color: #6b7280;
  line-height: 1.5;
  margin: 0.5rem 0;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    -webkit-line-clamp: 4;
  }
`;

export const BtnGroup = styled.div`
  display: flex;
  gap: 0.8rem;
  margin-top: 1rem;

  .btn {
    padding: 0.6rem 1.2rem;
    border-radius: 8px;
    font-size: 0.9rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }

  .PrimaryBtn {
    background: #3b82f6;
    color: white;
    border: 1px solid #3b82f6;

    &:hover {
      background: #2563eb;
      border-color: #2563eb;
      transform: translateY(-2px);
    }
  }

  .SecondaryBtn {
    background: white;
    color: #3b82f6;
    border: 1px solid #d1d5db;

    &:hover {
      background: #f3f4f6;
      border-color: #9ca3af;
      transform: translateY(-2px);
    }
  }
`;

export const MobileBtnGroup = styled.div`
  display: flex;
  gap: 0.6rem;
  margin-top: 0.8rem;
  flex-wrap: wrap;

  .btn {
    padding: 0.4rem 0.8rem;
    border-radius: 6px;
    font-size: 0.75rem;
    font-weight: 500;
    text-decoration: none;
    transition: all 0.2s ease;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    border: 1px solid transparent;
  }

  .PrimaryBtn {
    background: #3b82f6;
    color: white;
    border-color: #3b82f6;

    &:hover {
      background: #2563eb;
    }
  }

  .SecondaryBtn {
    background: white;
    color: #3b82f6;
    border-color: #d1d5db;

    &:hover {
      background: #f3f4f6;
    }
  }

  .TertiaryBtn {
    background: #f3f4f6;
    color: #4b5563;
    border-color: #e5e7eb;

    &:hover {
      background: #e5e7eb;
    }
  }
`;