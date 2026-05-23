import styled from "@emotion/styled";
import { css } from "@emotion/react";
import { theme } from "../../theme";

const { typography: t } = theme;

/** Section h2 — prefer <SectionHeading /> when the accent bar is needed */
export const SectionTitleText = styled.h2`
  font-size: ${t.size.section};
  font-weight: ${t.weight.bold};
  letter-spacing: ${t.letterSpacing.tight};
  line-height: ${t.lineHeight.tight};
  color: ${(p) => p.$color || theme.colors.text};
`;

export const LeadText = styled.p`
  font-size: ${t.size.lead};
  font-weight: ${t.weight.medium};
  line-height: ${t.lineHeight.relaxed};
  color: ${(p) => p.$color || theme.colors.textMuted};
`;

export const BodyText = styled.p`
  font-size: ${t.size.body};
  line-height: ${t.lineHeight.relaxed};
  color: ${(p) => p.$color || theme.colors.text};

  @media (max-width: 768px) {
    font-size: ${t.size.bodySm};
    line-height: ${t.lineHeight.normal};
  }

  @media (max-width: 450px) {
    font-size: ${t.size.small};
    line-height: ${t.lineHeight.snug};
  }
`;

export const LabelText = styled.span`
  font-size: ${t.size.small};
  font-weight: ${t.weight.semibold};
  line-height: ${t.lineHeight.normal};
  color: ${(p) => p.$color || theme.colors.textMuted};

  @media (max-width: 450px) {
    font-size: ${t.size.caption};
  }
`;

export const CaptionText = styled.span`
  font-size: ${t.size.caption};
  font-weight: ${t.weight.medium};
  line-height: ${t.lineHeight.snug};
  color: ${(p) => p.$color || theme.colors.text};
`;

/** Shared h3 for in-card headings (tech categories, experience roles, etc.) */
export const CardTitle = styled.h3`
  font-size: ${t.size.h3};
  font-weight: ${t.weight.semibold};
  line-height: ${t.lineHeight.snug};
  color: ${(p) => p.$color || theme.colors.text};
  margin: 0;

  @media (max-width: 450px) {
    font-size: ${t.size.h3Sm};
  }

  ${(p) =>
    p.$decorated &&
    css`
      position: relative;
      display: inline-block;

      &::after {
        content: "";
        position: absolute;
        bottom: -0.8rem;
        left: 50%;
        transform: translateX(-50%);
        width: 30px;
        height: 2px;
        background: ${theme.colors.accent};
        border-radius: 2px;

        @media (max-width: 450px) {
          width: 25px;
          bottom: -0.6rem;
        }
      }
    `}
`;

/** @deprecated Use CardTitle */
export const CardTitleText = CardTitle;
