import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdContentCopy, MdEmail, MdDownload } from "react-icons/md";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import PDF from '../../assets/resume/Migss_resume.pdf';

const ContactWrapper = styled.section`
  padding: 4rem;
  background: #fafafa;
  display: flex;
  justify-content: center;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
`;

const BigCard = styled.div`
  display: flex;
  flex-wrap: wrap; /* allow groups to wrap on small screens */
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: white;
  border-radius: 12px;
  padding: 3rem 2rem;
  box-shadow: 0 5px 20px rgba(0,0,0,0.05);
  max-width: 900px;
  border: 1px solid #eee;
`;

const EmailGroup = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: nowrap; /* keep email + copy together */
  align-items: center;
`;

const EmailText = styled.span`
  font-size: 1.2rem;
  font-weight: 500;
  color: #333;
  background: #f5f5f5;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  border: 1px solid #e0e0e0;
  display: flex;
  align-items: center;
`;

const Actions = styled.div`
  display: flex;
  gap: 1rem;
  flex-wrap: nowrap; /* keep buttons together */
  align-items: center;
`;

const StyledButton = styled.a`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.8rem 1.5rem;
  border-radius: 8px;
  font-weight: 600;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid transparent;
  transition: all 0.3s ease;

  &.primary {
    background: #1976d2;
    color: #fff;
    border-color: #1976d2;
    &:hover {
      background: #1565c0;
      box-shadow: 0 4px 12px rgba(25,118,210,0.3);
    }
  }

  &.secondary {
    background: #fff;
    color: #1976d2;
    border: 1px solid #e0e0e0;
  }
`;

const SectionTitle = styled.h2`
  text-align: center;
  color: #333;
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
  const [tooltip, setTooltip] = useState(false);
  const email = "jcmiguel.beltran@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    setTooltip(true);
    setTimeout(() => setTooltip(false), 700);
  };

  return (
    <ContactWrapper id="contact">
      <Container>
        <SectionTitle>Get In Touch</SectionTitle>
        <BigCard>
          <EmailGroup>
            <EmailText>{email}</EmailText>
            <Tooltip
              open={tooltip}
              onClose={() => setTooltip(false)}
              title="Copied!"
              TransitionComponent={Zoom}
              placement="bottom"
              arrow
            >
              <IconButton onClick={copyEmail} sx={{ color: '#1976d2' }}>
                <MdContentCopy size={25} />
              </IconButton>
            </Tooltip>
          </EmailGroup>

          <Actions>
            <StyledButton className="primary" href={`mailto:${email}`}>
              <MdEmail /> Send Email
            </StyledButton>
            <StyledButton className="secondary" href={PDF} download="Miguel_Beltran_Resume.pdf">
              <MdDownload /> View Resume
            </StyledButton>
          </Actions>
        </BigCard>
      </Container>
    </ContactWrapper>
  );
}

export default Contact;
