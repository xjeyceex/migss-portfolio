import React from "react";
import { motion } from "framer-motion";
import styled from "@emotion/styled";
import { FaBriefcase, FaGraduationCap, FaCode, FaAward } from "react-icons/fa";

const COLORS = {
  text: "#1e293b",     // dark gray
  background: "#f9fafb",
  white: "#ffffff",
  accent: "#3b82f6",   // blue accent
  muted: "#64748b"     // muted text
};

const ExperienceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
  margin-top: 1rem;

  @media (min-width: 500px) {
    gap: 1.25rem;
    margin-top: 1.25rem;
  }

  @media (min-width: 768px) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 1.5rem;
    margin-top: 1.5rem;
  }
`;

const Card = styled(motion.article)`
  background: ${COLORS.white};
  border-radius: 12px;
  padding: 1.25rem;
  transition: all 0.3s ease;
  display: flex;
  flex-direction: column;
  position: relative;
  overflow: hidden;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  border: 1px solid rgba(0, 0, 0, 0.05);

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 20px rgba(59, 130, 246, 0.12);
  }

  @media (min-width: 500px) {
    border-radius: 14px;
    padding: 1.5rem;
    box-shadow: 0 3px 16px rgba(0, 0, 0, 0.04);
  }

  @media (min-width: 768px) {
    border-radius: 16px;
    box-shadow: 0 3px 20px rgba(0, 0, 0, 0.04);
    
    &:hover {
      transform: translateY(-4px);
      box-shadow: 0 8px 28px rgba(59, 130, 246, 0.12);
    }
  }
`;

const CardHeader = styled.div`
  margin-bottom: 1rem;
  padding-bottom: 0.6rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.05);

  h3 {
    font-size: 1rem;
    font-weight: 700;
    color: ${COLORS.text};
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0;
  }

  h4 {
    font-size: 0.85rem;
    font-weight: 600;
    color: ${COLORS.muted};
    margin: 0.25rem 0 0.15rem;
  }

  span {
    font-size: 0.75rem;
    color: ${COLORS.muted};
    font-weight: 500;
  }

  @media (min-width: 500px) {
    margin-bottom: 1.1rem;
    padding-bottom: 0.7rem;

    h3 {
      font-size: 1.05rem;
      gap: 0.6rem;
    }

    h4 {
      font-size: 0.9rem;
      margin: 0.3rem 0 0.2rem;
    }

    span {
      font-size: 0.8rem;
    }
  }

  @media (min-width: 768px) {
    margin-bottom: 1.25rem;
    padding-bottom: 0.75rem;

    h3 {
      font-size: 1.1rem;
    }
  }
`;

const BulletList = styled.ul`
  margin: 0.4rem 0;
  padding-left: 0;

  li {
    list-style: none;
    margin-bottom: 0.4rem;
    font-size: 0.8rem;
    color: ${COLORS.text};
    line-height: 1.4;
    padding-left: 1.1rem;
    position: relative;

    &::before {
      content: "•";
      position: absolute;
      left: 0.3rem;
      color: ${COLORS.accent};
      font-weight: bold;
    }

    strong {
      color: ${COLORS.text};
      font-weight: 600;
    }
  }

  @media (min-width: 500px) {
    margin: 0.45rem 0;

    li {
      margin-bottom: 0.45rem;
      font-size: 0.82rem;
      padding-left: 1.2rem;
      line-height: 1.45;
    }
  }

  @media (min-width: 768px) {
    margin: 0.5rem 0;

    li {
      font-size: 0.85rem;
      padding-left: 1.3rem;
    }
  }
`;

const SectionHeader = styled.div`
  margin: 0.8rem 0 0.4rem;
  padding-top: ${({ withBorder }) => (withBorder ? "0.6rem" : "0")};
  border-top: ${({ withBorder }) =>
    withBorder ? "1px solid rgba(0, 0, 0, 0.05)" : "none"};

  strong {
    color: ${COLORS.text};
    display: flex;
    align-items: center;
    gap: 0.35rem;
    font-size: 0.85rem;
    font-weight: 600;
  }

  @media (min-width: 500px) {
    margin: 0.9rem 0 0.5rem;
    padding-top: ${({ withBorder }) => (withBorder ? "0.7rem" : "0")};

    strong {
      font-size: 0.88rem;
      gap: 0.4rem;
    }
  }

  @media (min-width: 768px) {
    margin: 1rem 0 0.5rem;
    padding-top: ${({ withBorder }) => (withBorder ? "0.75rem" : "0")};

    strong {
      font-size: 0.9rem;
    }
  }
`;

const TechList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.4rem;

  @media (min-width: 500px) {
    gap: 0.45rem;
    margin-top: 0.45rem;
  }

  @media (min-width: 768px) {
    gap: 0.5rem;
    margin-top: 0.5rem;
  }
`;

const Pill = styled(motion.div)`
  background: ${COLORS.accent}12;
  color: ${COLORS.accent};
  padding: 0.3rem 0.55rem;
  border-radius: 8px;
  font-size: 0.68rem;
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 0.2rem;
  border: 1px solid ${COLORS.accent}25;
  cursor: default;

  @media (min-width: 500px) {
    padding: 0.32rem 0.6rem;
    font-size: 0.7rem;
    border-radius: 9px;
    gap: 0.25rem;
  }

  @media (min-width: 768px) {
    padding: 0.35rem 0.65rem;
    font-size: 0.72rem;
    border-radius: 10px;
  }
`;

const IconWrapper = styled(motion.div)`
  background: ${COLORS.accent}18;
  border-radius: 7px;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 30px;
  height: 30px;

  @media (min-width: 500px) {
    border-radius: 8px;
    padding: 0.42rem;
    width: 32px;
    height: 32px;
  }

  @media (min-width: 768px) {
    border-radius: 8px;
    padding: 0.45rem;
    width: 34px;
    height: 34px;
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15 } }
};

const itemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.97 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { type: "spring", damping: 15, stiffness: 120 }
  }
};

const techItemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 220 }
  }
};

function ExperienceCard({ exp }) {
  return (
    <Card variants={itemVariants} whileHover={{ y: -5 }}>
      <CardHeader>
        <h3>
          <IconWrapper whileHover={{ scale: 1.08 }}>{exp.icon}</IconWrapper>{" "}
          {exp.role}
        </h3>
        <h4>{exp.company}</h4>
        <span>{exp.period}</span>
      </CardHeader>

      {exp.bullets && (
        <>
          <SectionHeader>
            <strong>Academic Achievements</strong>
          </SectionHeader>
          <BulletList>
            {exp.bullets.map((b, idx) => (
              <li key={idx}>{b}</li>
            ))}
          </BulletList>
        </>
      )}

      {exp.projects && (
        <>
          <SectionHeader>
            <strong>Projects</strong>
          </SectionHeader>
          <BulletList>
            {exp.projects.map((p, idx) => (
              <li key={idx}>
                <strong>{p.name}</strong> – {p.desc}
              </li>
            ))}
          </BulletList>
        </>
      )}

      {exp.techStack && (
        <>
          <SectionHeader withBorder>
            <strong>Tech Stack</strong>
          </SectionHeader>
          <TechList variants={containerVariants} initial="hidden" whileInView="visible">
            {exp.techStack.map((tech, idx) => (
              <Pill
                key={idx}
                variants={techItemVariants}
                whileHover={{
                  scale: 1.06,
                  backgroundColor: `${COLORS.accent}25`
                }}
              >
                {tech}
              </Pill>
            ))}
          </TechList>
        </>
      )}

      {exp.highlights && (
        <>
          <SectionHeader withBorder>
            <strong>
              <FaAward size={11} /> Achievements
            </strong>
          </SectionHeader>
          <TechList variants={containerVariants} initial="hidden" whileInView="visible">
            {exp.highlights.map((h, idx) => (
              <Pill
                key={idx}
                variants={techItemVariants}
                whileHover={{ scale: 1.06, backgroundColor: `${COLORS.accent}25` }}
              >
                {h}
              </Pill>
            ))}
          </TechList>
        </>
      )}
    </Card>
  );
}

function ExperienceSection() {
  const experiences = [
    {
      role: "Full Stack Developer",
      company: "Sta. Clara International Corp.",
      period: "Jan 2025 - Present",
      icon: <FaBriefcase size={13} color={COLORS.accent} />,
      projects: [
        { name: "Canvassly", desc: "Automated canvassing platform with real-time collaboration" },
        { name: "Certify", desc: "Certification management with learning paths" }
      ],
      techStack: ["Supabase", "Next.js", "Jest", "Mantine", "TypeScript", "Zustand", "Node.js"]
    },
    {
      role: "Full Stack Developer",
      company: "Freelance (US Client)",
      period: "Feb 2023 - Nov 2024",
      icon: <FaCode size={13} color={COLORS.accent} />,
      projects: [
        { name: "HelpYou", desc: "Location-aware U.S. climate data app" },
        { name: "WebHR", desc: "HR management system for records and workflows" }
      ],
      techStack: ["PostgreSQL", "React", "TypeScript", "Node.js", "Material UI", "Next.js", "Express.js", "Tailwind CSS"]
    },
    {
      role: "BS Computer Science",
      company: "Our Lady of Fatima University",
      period: "2019 - 2023",
      icon: <FaGraduationCap size={13} color={COLORS.accent} />,
      bullets: [
        "Graduated with honors in Computer Science",
        "Specialized in software development",
        "Coursework in algorithms and database systems"
      ],
      highlights: ["Dean's Lister", "Best in Thesis"]
    }
  ];

  return (
    <ExperienceGrid variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }}>
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} exp={exp} />
      ))}
    </ExperienceGrid>
  );
}

export default ExperienceSection;