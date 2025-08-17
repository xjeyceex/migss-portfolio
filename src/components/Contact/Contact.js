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
  margin: 6rem 0;
  padding: 4rem 0;
  background: #fafafa;
  position: relative;
`;

const BigCard = styled.div`
  background: white;
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 5px 20px rgba(0, 0, 0, 0.05);
  max-width: 800px;
  margin: 0 auto;
  animation: ${fadeIn} 0.6s ease-out forwards;
  border: 1px solid #eee;
`;

const EmailContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  flex-wrap: wrap;
  margin-bottom: 2.5rem;
`;

const EmailText = styled.span`
  font-size: clamp(1rem, 3vw, 1.5rem);
  font-weight: 500;
  color: #333;
  background: #f5f5f5;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  border: 1px solid #e0e0e0;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 3px 10px rgba(0, 100, 255, 0.1);
  }
`;

const ActionButtons = styled.div`
  display: flex;
  gap: 1.5rem;
  justify-content: center;
  flex-wrap: wrap;
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  padding: 0.9rem 2rem;
  border-radius: 8px;
  font-weight: 600;
  transition: all 0.3s ease;
  text-decoration: none;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  
  &:hover {
    transform: translateY(-3px);
    animation: ${pulse} 0.6s ease;
  }

  &.PrimaryBtn {
    background: #1976d2;  // Primary blue accent
    color: white;
    
    &:hover {
      background: #1565c0;
      box-shadow: 0 4px 15px rgba(25, 118, 210, 0.3);
    }
  }
  
  &.SecondaryBtn {
    background: white;
    color: #1976d2;  // Blue text for consistency
    border: 2px solid #e0e0e0;
    
    &:hover {
      border-color: #1976d2;
      box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
    }
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #333;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  position: relative;
  
  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 3px;
    background: #333;  
    border-radius: 3px;
  }
`;

function Contact() {
  const [showTooltip, setShowTooltip] = useState(false);
  const email = "jcmiguel.beltran@gmail.com";
  
  const copyToClipboard = () => {
    navigator.clipboard.writeText(email);
    setShowTooltip(true);
    setTimeout(() => {
      setShowTooltip(false);
    }, 700);
  };

  return (
    <ContactWrapper id="contact">
      <div className="Container">
        <SectionTitle>Get In Touch</SectionTitle>
        <BigCard>
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
                aria-label="Copy email to clipboard"
                sx={{
                  color: '#1976d2',  // Blue accent
                  '&:hover': {
                    backgroundColor: 'rgba(25, 118, 210, 0.1)',
                    transform: 'scale(1.1)'
                  },
                  transition: 'all 0.3s ease'
                }}
              >
                <MdContentCopy size={25} color="black" />
              </IconButton>
            </Tooltip>
          </EmailContainer>

          <ActionButtons>
            <StyledButton
              className="PrimaryBtn"
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Send email"
            >
              <MdEmail style={{ marginRight: '10px', fontSize: '1.2rem' }} />
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
              <MdDownload style={{ marginRight: '10px', fontSize: '1.2rem' }} />
              Download Resume
            </StyledButton>
          </ActionButtons>
        </BigCard>
      </div>
    </ContactWrapper>
  );
}

export default Contact;