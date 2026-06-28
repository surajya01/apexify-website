interface ApexifyLogoProps {
  variant?: "dark" | "light"; // dark = for white bg, light = for dark bg
  className?: string;
}

export default function ApexifyLogo({ variant = "dark", className = "" }: ApexifyLogoProps) {
  const textColor = variant === "dark" ? "#0f172a" : "#ffffff";
  const accentColor = "#2563eb";

  return (
    <svg
      viewBox="0 0 180 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Apexify"
      role="img"
    >
      {/* A icon mark — left leg (blue) */}
      <polygon points="8,44 24,6 31,6 15,44" fill="url(#aGrad)" />
      {/* A icon mark — right leg (dark/white) */}
      <polygon points="40,44 24,6 31,6 47,44" fill={variant === "dark" ? "#1e293b" : "rgba(255,255,255,0.85)"} />
      {/* Slash / crossbar */}
      <polygon points="11,30 45,20 47,26 13,36" fill="url(#aGrad)" opacity="0.9" />

      {/* Text: apexify */}
      <text
        x="58"
        y="34"
        fontFamily="Sora, Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={textColor}
        letterSpacing="-0.5"
      >
        apex
      </text>
      <text
        x="118"
        y="34"
        fontFamily="Sora, Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={accentColor}
        letterSpacing="-0.5"
      >
        i
      </text>
      <text
        x="126"
        y="34"
        fontFamily="Sora, Inter, system-ui, sans-serif"
        fontWeight="700"
        fontSize="22"
        fill={textColor}
        letterSpacing="-0.5"
      >
        fy
      </text>

      <defs>
        <linearGradient id="aGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#60a5fa" />
          <stop offset="100%" stopColor="#2563eb" />
        </linearGradient>
      </defs>
    </svg>
  );
}
