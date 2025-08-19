import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { FaBriefcase, FaGraduationCap, FaCode, FaAward } from "react-icons/fa";

const COLORS = {
  text: "#1e293b",     // dark gray
  background: "#f9fafb",
  white: "#ffffff",
  accent: "#3b82f6"    // single blue accent
};

const ExperienceGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1.5rem;
  margin-top: 1.5rem;

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  }
`;

const Card = styled.div`
  background: ${COLORS.white};
  border-radius: 12px;
  border: 1px solid #e5e7eb;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.04);
  padding: 1.5rem;
  transition: all 0.3s ease;
  height: 100%;
  display: flex;
  flex-direction: column;

  &:hover {
    box-shadow: 0 6px 12px rgba(0, 0, 0, 0.08);
    transform: translateY(-3px);
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;

  h3 {
    font-size: 1.1rem;
    font-weight: 700;
    color: ${COLORS.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
  }

  h4 {
    font-size: 0.95rem;
    font-weight: 600;
    color: #475569;  /* muted slate gray */
    margin: 0.25rem 0 0.4rem;
  }

  span {
    font-size: 0.85rem;
    color: #64748b;
  }
`;

const BulletList = styled.ul`
  padding-left: 1rem; 
  margin: 0.5rem 0 0.75rem;

  li {
    list-style: none;
    margin-bottom: 0.5rem;
    font-size: 0.9rem;
    color: ${COLORS.text};
    line-height: 1.5;
    padding-left: 1.25rem;
    position: relative;

    &::before {
      content: "";
      position: absolute;
      left: 0; top: 0.55rem;
      width: 6px; height: 6px;
      border-radius: 50%;
      background: #475569; /* muted slate gray */
    }

    strong {
      color: ${COLORS.text};
    }
  }
`;

const SectionHeader = styled.div`
  padding-top: ${props => (props.withBorder ? "0.6rem" : "0")};
  border-top: ${props => (props.withBorder ? "1px dashed #e5e7eb" : "none")};

  strong {
    color: ${props => (props.primary ? COLORS.accent : COLORS.text)};
    display: flex;
    align-items: center;
    gap: 0.4rem;
    margin-bottom: 0.4rem;
    font-size: 0.95rem;
    font-weight: 600;
  }
`;

const TechList = styled.div` 
  display: flex; 
  flex-wrap: wrap; 
  gap: 0.5rem; 
  margin-top: 0.5rem; 
`;

const Pill = styled.div`
  background: ${COLORS.accent}15;
  color: ${COLORS.accent};
  padding: 0.35rem 0.75rem;
  border-radius: 999px;
  font-size: 0.75rem; 
  font-weight: 500;
  display: flex; 
  align-items: center; 
  gap: 0.3rem;
  border: 1px solid ${COLORS.accent}30;
`;

function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Sta. Clara International Corp.",
      period: "Jan 2025 - Present",
      icon: <FaBriefcase size={16} color={COLORS.accent} />,
      projects: [
        { name: "Canvassly", desc: "Automated canvassing platform with real-time collaboration" },
        { name: "Certify", desc: "Certification management with learning paths" },
      ],
      techStack: ["Supabase", "Next.js", "Mantine", "TypeScript", "Zustand", "Node.js"]
    },
    {
      role: "Full Stack Developer",
      company: "Freelance (US Client)",
      period: "Feb 2023 - Nov 2024",
      icon: <FaCode size={16} color={COLORS.accent} />,
      projects: [
        { name: "HelpYou", desc: "Location-aware U.S. climate data app" },
        { name: "WebHR", desc: "HR management system for records and workflows" },
      ],
      techStack: [
        "PostgreSQL",
        "React",
        "TypeScript",
        "Node.js",
        "Material UI",
        "React.js",
        "Next.js",
        "Express.js",
        "Tailwind CSS",
      ]
    },
    {
      role: "BS Computer Science",
      company: "Our Lady of Fatima University",
      period: "2019 - 2023",
      icon: <FaGraduationCap size={16} color={COLORS.accent} />,
      bullets: [
        "Graduated with honors in Computer Science",
        "Specialized in software development",
        "Coursework in algorithms and database systems"
      ],
      highlights: ["Dean's Lister", "Best in Thesis"]
    }
  ];

  return (
    <ExperienceGrid>
      {experiences.map((exp, i) => (
        <motion.div
          key={i}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: i * 0.1 }}
          viewport={{ once: true }}
        >
          <Card>
            <CardHeader>
              <h3>{exp.icon} {exp.role}</h3>
              <h4>{exp.company}</h4>
              <span>{exp.period}</span>
            </CardHeader>

            {exp.bullets && (
              <BulletList>
                {exp.bullets.map((b, idx) => <li key={idx}>{b}</li>)}
              </BulletList>
            )}

            {exp.projects && (
              <>
                <SectionHeader>
                  <strong>Projects</strong>
                </SectionHeader>
                <BulletList>
                  {exp.projects.map((p, idx) => (
                    <li key={idx}><strong>{p.name}</strong> - {p.desc}</li>
                  ))}
                </BulletList>
              </>
            )}

            {exp.techStack && (
              <>
                <SectionHeader withBorder primary>
                  <strong>Tech Stack</strong>
                </SectionHeader>
                <TechList>
                  {exp.techStack.map((tech, idx) => (
                    <Pill key={idx}>{tech}</Pill>
                  ))}
                </TechList>
              </>
            )}

            {exp.highlights && (
              <>
                <SectionHeader withBorder primary>
                  <strong>Achievements</strong>
                </SectionHeader>
                <TechList>
                  {exp.highlights.map((h, idx) => (
                    <Pill key={idx}><FaAward size={10}/> {h}</Pill>
                  ))}
                </TechList>
              </>
            )}
          </Card>
        </motion.div>
      ))}
    </ExperienceGrid>
  );
}

export default ExperienceSection;
