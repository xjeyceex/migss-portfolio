import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdContentCopy, MdEmail, MdDownload } from "react-icons/md";
import { IconButton, Tooltip } from "@mui/material";
import Zoom from '@mui/material/Zoom';
import { keyframes } from "@emotion/react";
import PDF from '../../assets/resume/Migss_resume.pdf';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

const pulse = keyframes`
  0% { transform: scale(1); }
  50% { transform: scale(1.03); }
  100% { transform: scale(1); }
`;

// Styled Components
const ContactWrapper = styled.section`
  padding: 2rem 0;
  background: #fafafa;
  position: relative;

`;

const BigCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 2rem 1rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  max-width: 95%;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out forwards;
  border: 1px solid #eee;

  @media (min-width: 576px) {
    padding: 2.5rem 1.5rem;
    max-width: 90%;
  }

  @media (min-width: 768px) {
    padding: 3rem 2rem;
    max-width: 800px;
  }
`;

// Email + Copy container
const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  flex-wrap: nowrap;
  margin-bottom: 2rem;
  width: 100%;
  overflow-x: hidden;

  @media (min-width: 576px) {
    gap: 0.75rem;
    margin-bottom: 2.5rem;
  }
`;

const EmailText = styled.span`
  font-size: 0.9rem;
  font-weight: 500;
  color: #333;
  background: #f5f5f5;
  padding: 0.6rem 1rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  word-break: break-all;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0, 100, 255, 0.1);
  }

  @media (min-width: 400px) {
    font-size: 1rem;
    padding: 0.8rem 1.2rem;
    word-break: normal;
  }

  @media (min-width: 576px) {
    font-size: 1.1rem;
    padding: 0.8rem 1.5rem;
  }

  @media (min-width: 768px) {
    font-size: 1.3rem;
  }
`;

// Container for buttons
const ActionButtons = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: nowrap;
  gap: 0.75rem; /* spacing between buttons */
  width: 100%;
  overflow: hidden;
  box-sizing: border-box;

  @media (max-width: 576px) {
    gap: 0.5rem; /* slightly smaller gap on mobile */
  }
`;

// Button styles
const StyledButton = styled.a`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.5rem 1rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 0.85rem;
  text-decoration: none;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  transition: all 0.3s ease;
  flex-shrink: 1;
  min-width: 0;
  box-sizing: border-box;
  border: 2px solid transparent;

  &:hover {
    transform: translateY(-2px);
    animation: ${pulse} 0.5s ease;
  }

  &.PrimaryBtn {
    background: #1976d2;
    color: white;
    border-color: #1976d2;

    &:hover {
      background: #1565c0;
      border-color: #1565c0;
      box-shadow: 0 4px 12px rgba(25, 118, 210, 0.3);
    }
  }

  &.SecondaryBtn {
    background: white;
    color: #1976d2;
    border-color: #e0e0e0; /* visible border */
  }

  @media (max-width: 450px) {
    flex: 1 1 0;
    padding: 0.4rem 0.6rem;
    font-size: 0.75rem;
  }

  @media (min-width: 450px) {
    padding: 0.5rem 1rem;
    font-size: 0.85rem;
  }

  @media (min-width: 768px) {
    padding: 0.6rem 1.2rem;
    font-size: 0.9rem;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 2rem;
  font-size: 1.5rem;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    bottom: -8px;
    left: 50%;
    transform: translateX(-50%);
    width: 50px;
    height: 2px;
    background: #333;
    border-radius: 3px;
  }

  @media (min-width: 576px) {
    font-size: 1.75rem;
    margin-bottom: 2.5rem;
    &::after {
      bottom: -10px;
      height: 3px;
    }
  }

  @media (min-width: 768px) {
    font-size: 2rem;
  }
`;

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "jcmiguel.beltran@gmail.com";

  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowTooltip(true);
    setTimeout(() => setShowTooltip(false), 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <SectionTitle>Get In Touch</SectionTitle>
        <BigCard>
          {/* Email + Copy */}
          <EmailContainer>
            <EmailText>{email}</EmailText>
            <Tooltip
              PopperProps={{ disablePortal: true }}
              open={showTooltip}
              onClose={() => setShowTooltip(false)}
              title="Copied!"
              TransitionComponent={Zoom}
              disableFocusListener
              disableHoverListener
              disableTouchListener
              placement="bottom"
              arrow
            >
              <IconButton
                onClick={copyToClipboard}
                aria-label="Copy email"
                sx={{
                  color: '#1976d2',
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease',
                  padding: '8px'
                }}
              >
                <MdContentCopy size={20} color="black" />
              </IconButton>
            </Tooltip>
          </EmailContainer>

          {/* Action Buttons */}
          <ActionButtons>
            <StyledButton
              className="PrimaryBtn"
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email"
            >
              <MdEmail style={{ marginRight: '8px', fontSize: '1rem' }} />
              Send Email
            </StyledButton>

            <StyledButton
              className="SecondaryBtn"
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Download resume"
              download="Miguel_Beltran_Resume.pdf"
            >
              <MdDownload style={{ marginRight: '8px', fontSize: '1rem' }} />
              View Resume
            </StyledButton>
          </ActionButtons>
        </BigCard>
      </div>
    </ContactWrapper>
  );
}

export default Contact;