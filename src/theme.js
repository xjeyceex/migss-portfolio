/**
 * Single source of design tokens for the portfolio (single-page app).
 * Import in Emotion styled files or components as needed.
 */
export const theme = {
  colors: {
    bgDark: "#0f0f12",
    bgHero: "#151418",
    surface: "#ffffff",
    surfaceMuted: "#f8fafc",
    surfaceAlt: "#f1f5f9",
    text: "#1e293b",
    textMuted: "#64748b",
    textOnDark: "#f6f6f6",
    textSubtleOnDark: "#a1a1aa",
    accent: "#2563eb",
    accentHover: "#1d4ed8",
    accentSoft: "rgba(37, 99, 235, 0.12)",
    border: "rgba(148, 163, 184, 0.35)",
    overlay: "rgba(15, 15, 18, 0.65)",
  },
  radius: {
    sm: "8px",
    md: "12px",
    lg: "16px",
    xl: "20px",
    full: "9999px",
  },
  shadow: {
    sm: "0 1px 2px rgba(15, 23, 42, 0.06)",
    md: "0 4px 16px rgba(15, 23, 42, 0.08)",
    lg: "0 12px 40px rgba(15, 23, 42, 0.12)",
  },
  motion: {
    easeOut: "cubic-bezier(0.22, 1, 0.36, 1)",
    duration: "0.25s",
    durationSlow: "0.45s",
  },
  typography: {
    fontFamily: '"Poppins", sans-serif',
    weight: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
    },
    lineHeight: {
      tight: 1.2,
      snug: 1.3,
      normal: 1.5,
      relaxed: 1.6,
    },
    letterSpacing: {
      tight: "-0.02em",
      normal: "0",
      nav: "0.02em",
    },
    size: {
      display: "clamp(2rem, 4vw, 3.25rem)",
      heroLead: "clamp(1rem, 2vw, 1.6rem)",
      section: "clamp(1.75rem, 4vw, 2.5rem)",
      h3: "1.25rem",
      h3Sm: "1rem",
      lead: "1.125rem",
      body: "1rem",
      bodySm: "0.95rem",
      small: "0.875rem",
      caption: "0.75rem",
      captionSm: "0.6875rem",
      nav: "1rem",
      footer: "0.875rem",
      footerSm: "0.8125rem",
      /** Experience / timeline cards — one step below body */
      cardSubtitle: "0.875rem",
      cardMeta: "0.8125rem",
      cardBody: "0.875rem",
      cardBodyLg: "0.9375rem",
      pill: "0.75rem",
    },
  },
  layout: {
    maxWidth: "1120px",
    headerHeight: "80px",
    /**
     * Space from section heading (including ::after divider) to body content.
     * Matches About / Experiences so the gap below the bar feels consistent.
     */
    sectionTitleGap: "4rem",
    sectionTitleGapMd: "2rem",
    sectionTitleGapSm: "1.5rem",
    sectionTitleDividerOffset: "-12px",
    sectionTitleDividerOffsetMd: "-13px",
    sectionTitleDividerOffsetSm: "-10px",
  },
};
