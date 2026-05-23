import React from "react";
import styled from "@emotion/styled";
import { theme } from "../../theme";

const { typography: t } = theme;

const Title = styled.h2`
  font-size: ${t.size.section};
  font-weight: ${t.weight.bold};
  letter-spacing: ${t.letterSpacing.tight};
  line-height: ${t.lineHeight.tight};
  color: ${(p) => p.$color || theme.colors.text};
  margin-top: ${(p) => (p.$topMargin ? p.$topMargin : "0")};
  margin-bottom: ${(p) =>
    p.$compact ? "1rem" : theme.layout.sectionTitleGap};
  text-align: ${(p) => p.$align || "left"};
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: ${theme.layout.sectionTitleDividerOffset};
    ${(p) =>
      p.$align === "center"
        ? "left: 50%; transform: translateX(-50%);"
        : "left: 0;"}
    width: ${(p) => (p.$align === "center" ? "80px" : "60px")};
    height: 4px;
    background: ${theme.colors.accent};
    border-radius: 2px;
  }

  @media (max-width: 768px) {
    margin-bottom: ${(p) =>
      p.$compact ? "0.75rem" : theme.layout.sectionTitleGapMd};

    &::after {
      bottom: ${theme.layout.sectionTitleDividerOffsetMd};
      width: ${(p) => (p.$align === "center" ? "60px" : "50px")};
      height: 3px;
    }
  }

  @media (max-width: 450px) {
    margin-bottom: ${(p) =>
      p.$compact ? "0.5rem" : theme.layout.sectionTitleGapSm};

    &::after {
      bottom: ${theme.layout.sectionTitleDividerOffsetSm};
    }
  }
`;

const Subtitle = styled.p`
  margin: ${(p) => (p.$compact ? "0 0 1.25rem" : `-2.5rem 0 ${theme.layout.sectionTitleGap}`)};
  max-width: 42rem;
  font-size: ${t.size.body};
  line-height: ${t.lineHeight.relaxed};
  color: ${theme.colors.textMuted};
  text-align: ${(p) => p.$align || "left"};

  @media (max-width: 768px) {
    margin-top: ${(p) => (p.$compact ? "0" : "-1.25rem")};
    margin-bottom: ${(p) =>
      p.$compact ? "1rem" : theme.layout.sectionTitleGapMd};
    font-size: ${t.size.bodySm};
  }

  @media (max-width: 450px) {
    font-size: ${t.size.small};
    line-height: ${t.lineHeight.snug};
  }
`;

function SectionHeading({
  title,
  subtitle,
  align = "left",
  color,
  compact = false,
  topMargin,
}) {
  return (
    <header>
      <Title $align={align} $color={color} $compact={compact} $topMargin={topMargin}>
        {title}
      </Title>
      {subtitle && (
        <Subtitle $align={align} $compact={compact}>
          {subtitle}
        </Subtitle>
      )}
    </header>
  );
}

export default SectionHeading;
