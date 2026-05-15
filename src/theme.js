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
