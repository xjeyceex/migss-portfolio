import React, { useState } from "react";
import styled from "@emotion/styled";
import { MdContentCopy, MdEmail, MdDescription, MdPhone, MdLocationOn } from "react-icons/md";
import { IconButton, Tooltip, Zoom } from "@mui/material";
import { motion } from "framer-motion";
import PDF from "../../assets/resume/Migss_resume.pdf";

const ContactWrapper = styled.section`
  padding: 2.5rem 1.5rem;
  background: #f9f9f9;
  display: flex;
  justify-content: center;
  position: relative;
  overflow: hidden;

  @media (min-width: 1000px) {
    padding-left: 5rem;
    padding-right: 5rem;
  }
`;

const Container = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2rem;
  width: 100%;
  max-width: 1000px;
  position: relative;

  @media (max-width: 478px) {
    gap: 1rem;
  }
`;

const BigCard = styled(motion.div)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  background: rgba(255, 255, 255, 0.95);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  padding: 2.5rem 2rem;
  box-shadow: 
    0 10px 30px rgba(0, 0, 0, 0.08),
    0 6px 10px rgba(0, 0, 0, 0.03);
  width: 100%;

  @media (max-width: 478px) {
    padding: 1.5rem 1rem;
    gap: 1rem;
  }
`;

const SectionTitle = styled.h2`
  color: #333;
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 0.5rem;

  @media (max-width: 478px) {
    font-size: 1.5rem;
  }
`;

const Subtitle = styled.p`
  color: #666;
  font-size: 1rem;
  line-height: 1.5;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 478px) {
    font-size: 0.875rem;
  }
`;

const InfoRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: #f8f9fa;
  padding: 0.8rem 1rem;
  border-radius: 10px;
  border: 1px solid #e9ecef;
  transition: all 0.3s ease;

  &:hover {
    background: #f1f5f9;
  }

  @media (max-width: 478px) {
    padding: 0.6rem 0.8rem;
  }
`;

const InfoText = styled.span`
  font-size: 1rem;
  color: #333;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  @media (max-width: 478px) {
    font-size: 0.875rem;
  }
`;

const StyledButton = styled(motion.a)`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  border-radius: 10px;
  font-weight: 500;
  font-size: 1rem;
  text-decoration: none;
  border: 2px solid transparent;
  min-height: 44px;
  transition: all 0.3s ease;
  cursor: pointer;

  &.primary {
    background: linear-gradient(135deg, #1976d2 0%, #2196f3 100%);
    color: #fff;
    box-shadow: 0 4px 10px rgba(25, 118, 210, 0.25);
    
    &:hover {
      transform: translateY(-2px);
      box-shadow: 0 6px 14px rgba(25, 118, 210, 0.35);
    }
  }

  &.secondary {
    background: #fff;
    color: #1976d2;
    border: 2px solid #e0e0e0;
    
    &:hover {
      background: #f8f9fa;
      border-color: #1976d2;
      transform: translateY(-2px);
    }
  }

  @media (max-width: 478px) {
    padding: 0.5rem 1rem;
    font-size: 0.875rem;
    min-height: 36px;
  }
`;

const CardHeader = styled.div`
  text-align: center;
  margin-bottom: 0.75rem;
`;

const ContactInfoContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  width: 100%;
  max-width: 600px;
`;

const InfoGroup = styled(motion.div)`
  display: flex;
  flex-direction: column;
  gap: 0.6rem;
  width: 100%;
`;

const InfoLabel = styled.span`
  font-size: 0.95rem;
  font-weight: 600;
  color: #555;
  display: flex;
  align-items: center;
  gap: 0.4rem;
`;

const CopyButton = styled(IconButton)`
  color: #1976d2;
  padding: 0.4rem;
  transition: all 0.2s ease;

  &:hover {
    background-color: rgba(25, 118, 210, 0.1);
  }

  & svg {
    font-size: 1.1rem;
  }
`;

const Actions = styled(motion.div)`
  display: flex;
  gap: 1rem;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-top: 0.75rem;
`;

// Animations
const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const pulseAnimation = {
  scale: [1, 1.05, 1],
  transition: { duration: 2, repeat: Infinity, ease: "easeInOut" },
};

function Contact() {
  const [tooltip, setTooltip] = useState(null);

  const email = "jcmiguel.beltran@gmail.com";
  const phone = "+63 981 396 5068"; 

  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text);
    setTooltip(type);

    setTimeout(() => {
      setTooltip(null);
    }, 1000);
  };

  return (
    <ContactWrapper id="contact">
      <Container 
        initial="hidden" 
        whileInView="visible" 
        viewport={{ once: true, amount: 0.3 }}
        variants={fadeUp}
      >
        <SectionTitle>Get In Touch</SectionTitle>
        
        <BigCard variants={fadeUp}>
          <CardHeader>
            <Subtitle>
              I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              Feel free to reach out through any of the channels below.
            </Subtitle>
          </CardHeader>

          <ContactInfoContainer>
            {/* Email */}
            <InfoGroup variants={fadeUp}>
              <InfoLabel>
                <MdEmail /> Email Address
              </InfoLabel>
              <InfoRow>
                <InfoText>{email}</InfoText>
                <Tooltip
                  open={tooltip === "email"}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  placement="top"
                  arrow
                >
                  <CopyButton
                    onClick={() => copyToClipboard(email, "email")}
                    aria-label="Copy email address"
                  >
                    <MdContentCopy />
                  </CopyButton>
                </Tooltip>
              </InfoRow>
            </InfoGroup>

            {/* Phone */}
            <InfoGroup variants={fadeUp}>
              <InfoLabel>
                <MdPhone /> Phone Number
              </InfoLabel>
              <InfoRow>
                <InfoText>{phone}</InfoText>
                <Tooltip
                  open={tooltip === "phone"}
                  title="Copied!"
                  TransitionComponent={Zoom}
                  placement="top"
                  arrow
                >
                  <CopyButton
                    onClick={() => copyToClipboard(phone, "phone")}
                    aria-label="Copy phone number"
                  >
                    <MdContentCopy />
                  </CopyButton>
                </Tooltip>
              </InfoRow>
            </InfoGroup>

            <InfoGroup variants={fadeUp}>
              <InfoLabel>
                <MdLocationOn /> Location
              </InfoLabel>
              <InfoRow>
                <InfoText>Quezon City, Philippines</InfoText>
              </InfoRow>
            </InfoGroup>
          </ContactInfoContainer>


          {/* Actions */}
          <Actions variants={fadeUp}>
            <StyledButton
              className="primary"
              href={`mailto:${email}`}
              target="_blank"
              rel="noopener noreferrer"
              animate={pulseAnimation}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <MdEmail /> Send Email
            </StyledButton>
            <StyledButton
              className="secondary"
              href={PDF}
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
            >
              <MdDescription /> View Resume
            </StyledButton>
          </Actions>
        </BigCard>
      </Container>
    </ContactWrapper>
  );
}

export default Contact;