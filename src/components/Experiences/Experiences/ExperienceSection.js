import React, { useRef } from "react";
import { motion, useInView } from "framer-motion";
import styled from "@emotion/styled";
import { FaGraduationCap, FaCode, FaStore } from "react-icons/fa";
import { theme } from "../../../theme";
import { CardTitle } from "../../ui/typography";

const { typography: t } = theme;

const COLORS = {
  text: "#1e293b",
  background: "#f9fafb",
  white: "#ffffff",
  accent: "#3b82f6",
  muted: "#64748b",
};

const ExperienceGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: 1fr;
  gap: 0.75rem;
  margin-top: 0;

  @media (min-width: 700px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 0.85rem;
  }

  @media (min-width: 1080px) {
    grid-template-columns: repeat(3, 1fr);
    gap: 0.9rem;
  }
`;

const Card = styled(motion.article)`
  height: 100%;
  margin: 0;
  padding: 0;
  background: transparent;
  border: none;
  box-shadow: none;
`;

const CardSurface = styled(motion.div)`
  height: 100%;
  display: flex;
  flex-direction: column;
  background: ${COLORS.white};
  border-radius: 10px;
  padding: 1rem 1.05rem;
  border: 1px solid rgba(0, 0, 0, 0.06);
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.05);
  transition:
    transform ${theme.motion.duration} ${theme.motion.easeOut},
    box-shadow ${theme.motion.duration} ${theme.motion.easeOut};

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 8px 22px rgba(59, 130, 246, 0.12);
  }

  @media (min-width: 700px) {
    border-radius: 11px;
    padding: 1.1rem 1.15rem;
  }

  @media (min-width: 1080px) {
    padding: 1.15rem 1.2rem;
  }
`;

const CardHeader = styled(motion.div)`
  display: flex;
  align-items: flex-start;
  gap: 0.5rem;
  margin-bottom: 0.65rem;
  padding-bottom: 0.55rem;
  border-bottom: 1px solid rgba(0, 0, 0, 0.06);

  .meta {
    flex: 1;
    min-width: 0;
  }

  h4 {
    font-size: ${t.size.cardSubtitle};
    font-weight: ${t.weight.semibold};
    color: ${COLORS.muted};
    margin: 0.25rem 0 0;
    line-height: ${t.lineHeight.normal};
  }

  span {
    font-size: ${t.size.cardMeta};
    color: ${COLORS.muted};
    font-weight: ${t.weight.medium};
    display: block;
    margin-top: 0.2rem;
    line-height: ${t.lineHeight.normal};
  }
`;

const Summary = styled(motion.p)`
  margin: 0 0 0.6rem;
  font-size: ${t.size.cardBody};
  color: ${COLORS.text};
  line-height: ${t.lineHeight.relaxed};

  @media (min-width: 700px) {
    font-size: ${t.size.cardBodyLg};
  }

  @media (min-width: 1080px) {
    font-size: ${t.size.bodySm};
  }
`;

const BulletList = styled(motion.ul)`
  margin: 0 0 0.5rem;
  padding-left: 0;

  li {
    list-style: none;
    margin-bottom: 0.35rem;
    font-size: ${t.size.cardBody};
    color: ${COLORS.text};
    line-height: ${t.lineHeight.relaxed};
    padding-left: 0.9rem;
    position: relative;

    @media (min-width: 700px) {
      font-size: ${t.size.cardBodyLg};
    }

    @media (min-width: 1080px) {
      font-size: ${t.size.bodySm};
    }

    &::before {
      content: "•";
      position: absolute;
      left: 0.2rem;
      color: ${COLORS.accent};
      font-weight: ${t.weight.bold};
    }

    strong {
      font-weight: ${t.weight.semibold};
    }
  }
`;

const TechList = styled(motion.div)`
  display: flex;
  flex-wrap: wrap;
  gap: 0.32rem;
  margin-top: 0.35rem;
`;

const Pill = styled(motion.span)`
  background: ${COLORS.accent}12;
  color: ${COLORS.accent};
  padding: 0.28rem 0.5rem;
  border-radius: 6px;
  font-size: ${t.size.pill};
  font-weight: ${t.weight.medium};
  line-height: ${t.lineHeight.snug};
  display: inline-flex;
  align-items: center;
  border: 1px solid ${COLORS.accent}22;
  cursor: default;
  transition:
    background-color ${theme.motion.duration} ${theme.motion.easeOut},
    box-shadow ${theme.motion.duration} ${theme.motion.easeOut},
    border-color ${theme.motion.duration} ${theme.motion.easeOut};

  &:hover {
    background-color: ${COLORS.accent}22;
    box-shadow: 0 4px 14px rgba(59, 130, 246, 0.14);
    border-color: ${COLORS.accent}55;
  }
`;

const IconWrapper = styled.div`
  background: ${COLORS.accent}18;
  border-radius: 8px;
  padding: 0.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 34px;
  height: 34px;
  flex-shrink: 0;
  transition: transform ${theme.motion.duration} ${theme.motion.easeOut};

  &:hover {
    transform: scale(1.05);
  }
`;

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { staggerChildren: 0.07, delayChildren: 0.04 },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 18, scale: 0.98 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      type: "spring",
      damping: 16,
      stiffness: 130,
    },
  },
};

/** Stagger inner blocks; lives on CardSurface so variant tree stays connected. */
const cardContentVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.06,
    },
  },
};

const sectionVariants = {
  hidden: { opacity: 0, y: 6 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { type: "spring", stiffness: 200, damping: 22 },
  },
};

const techContainerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.06, delayChildren: 0.02 },
  },
};

const techItemVariants = {
  hidden: { opacity: 0, scale: 0.85 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { type: "spring", stiffness: 220, damping: 18 },
  },
};

function ExperienceCard({ exp }) {
  return (
    <Card variants={cardVariants}>
      <CardSurface variants={cardContentVariants}>
        <CardHeader variants={sectionVariants}>
          <IconWrapper>{exp.icon}</IconWrapper>
          <div className="meta">
            <CardTitle>{exp.role}</CardTitle>
            <h4>{exp.company}</h4>
            <span>{exp.period}</span>
          </div>
        </CardHeader>

        {exp.summary && (
          <Summary variants={sectionVariants}>{exp.summary}</Summary>
        )}

        {exp.lines && (
          <BulletList variants={sectionVariants}>
            {exp.lines.map((line, idx) => (
              <li key={idx}>{line}</li>
            ))}
          </BulletList>
        )}

        {exp.techStack && exp.techStack.length > 0 && (
          <TechList variants={techContainerVariants}>
            {exp.techStack.map((tech, idx) => (
              <Pill key={idx} variants={techItemVariants}>
                {tech}
              </Pill>
            ))}
          </TechList>
        )}
      </CardSurface>
    </Card>
  );
}

function ExperienceSection() {
  const gridRef = useRef(null);
  const gridInView = useInView(gridRef, {
    once: true,
    amount: 0.06,
    margin: "0px 0px -24px 0px",
  });

  const experiences = [
    {
      role: "BS Computer Science",
      company: "Our Lady of Fatima University",
      period: "2019 – 2023",
      icon: <FaGraduationCap size={15} color={COLORS.accent} />,
      summary: "Honors graduate focused on software engineering, algorithms, and databases.",
      techStack: ["Honors", "Dean's Lister", "Best Thesis"],
    },
    {
      role: "SMB & retail software",
      company: "Freelance — local clients",
      period: "2023 – Present",
      icon: <FaStore size={15} color={COLORS.accent} />,
      summary:
        "Tailored web apps for day-to-day operations: inventory and sales for computer shops, cafe menus and loyalty, propane cylinder tracking and delivery scheduling.",
      techStack: ["Next.js", "React", "PostgreSQL", "TypeScript", "Tailwind CSS"],
    },
    {
      role: "Full Stack Developer",
      company: "Jeonsoft Corporation",
      period: "Jan 2024 – Jun 2024",
      icon: <FaCode size={15} color={COLORS.accent} />,
      lines: [
        <>Support Central — ticketing and workflows</>,
        <>WebHR — HR records and internal tools</>,
      ],
      techStack: [
        "PostgreSQL",
        "React",
        "TypeScript",
        "Node.js",
        "MUI",
        "Next.js",
        "Express",
      ],
    },
    {
      role: "Full Stack Developer",
      company: "Freelance (Brian Atwood / Azr)",
      period: "Jun 2024 – Feb 2025",
      icon: <FaCode size={15} color={COLORS.accent} />,
      lines: [
        <>
          <strong>Help You</strong> — U.S. climate data by location
        </>,
      ],
      techStack: ["React", "TypeScript", "Node.js", "Prisma", "Next.js", "Tailwind"],
    },
    {
      role: "Full Stack Developer",
      company: "Sta. Clara International Corp",
      period: "Jan 2025 – Nov 2025",
      icon: <FaCode size={15} color={COLORS.accent} />,
      summary:
        "Shipped full-stack platforms, responsive UI, and maintainable REST APIs.",
      techStack: [
        "Supabase",
        "TypeScript",
        "Node.js",
        "Next.js",
        "Tailwind",
        "PostgreSQL",
        "Mantine",
      ],
    },
    {
      role: "Frontend-focused Full Stack",
      company: "The Digital Room AU",
      period: "Nov 2025 – Present",
      icon: <FaCode size={15} color={COLORS.accent} />,
      lines: [
        <>
          <strong>The Inspection Nest</strong> — Figma to animated Next.js UI
        </>,
        <>
          <strong>The Digital Room</strong> — marketing site, motion, WordPress
        </>,
      ],
      techStack: [
        "TypeScript",
        "Framer Motion",
        "Next.js",
        "GSAP",
        "WordPress",
        "Tailwind",
      ],
    },
  ];

  return (
    <ExperienceGrid
      ref={gridRef}
      variants={containerVariants}
      initial="hidden"
      animate={gridInView ? "visible" : "hidden"}
    >
      {experiences.map((exp, i) => (
        <ExperienceCard key={i} exp={exp} />
      ))}
    </ExperienceGrid>
  );
}

export default ExperienceSection;
