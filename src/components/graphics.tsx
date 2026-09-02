type CupProps = {
  glaze: string;
  dip: string;
  steam?: boolean;
  /** Warna uap. Default mengikuti `currentColor` dari elemen pemanggil. */
  steamColor?: string;
  className?: string;
};

/**
 * Ilustrasi cangkir bergaya sablon dua-nada.
 * "dip" adalah pita glasir celup di sepertiga bawah, teknik keramik betulan.
 */
export function Cup({
  glaze,
  dip,
  steam = false,
  steamColor = "currentColor",
  className,
}: CupProps) {
  return (
    <svg
      viewBox="0 0 240 210"
      className={className}
      role="img"
      aria-hidden="true"
      fill="none"
    >
      <ellipse cx="112" cy="192" rx="72" ry="10" fill="#211c17" opacity="0.12" />

      {/* gagang di belakang badan */}
      <path
        d="M164 82c30-8 46 8 46 28s-16 36-46 28"
        stroke={dip}
        strokeWidth="15"
        strokeLinecap="round"
      />

      {/* badan */}
      <path d="M42 74h144l-10 88c-1.4 13-12 22-25 22H77c-13 0-23.6-9-25-22L42 74Z" fill={glaze} />
      {/* pita glasir celup */}
      <path
        d="M49 140h130l-3 22c-1.4 13-12 22-25 22H77c-13 0-23.6-9-25-22l-3-22Z"
        fill={dip}
      />
      {/* bibir cangkir */}
      <ellipse cx="114" cy="74" rx="72" ry="15" fill={dip} />
      <ellipse cx="114" cy="72" rx="64" ry="12" fill={glaze} />
      <ellipse cx="114" cy="72" rx="64" ry="12" fill="#211c17" opacity="0.16" />

      {/* kilau */}
      <path
        d="M63 88c1 30 5 56 12 74"
        stroke="#ffffff"
        strokeOpacity="0.24"
        strokeWidth="8"
        strokeLinecap="round"
      />

      {steam && (
        <g stroke={steamColor} strokeWidth="4.5" strokeLinecap="round">
          <path className="steam" d="M92 50c-9-9 9-17 0-28" />
          <path className="steam steam-2" d="M116 47c-9-9 9-17 0-28" />
          <path className="steam steam-3" d="M140 51c-9-9 9-17 0-28" />
        </g>
      )}
    </svg>
  );
}

/** Cap keramik ala stempel pengrajin. */
export function Stamp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 44 44" className={className} aria-hidden="true" fill="none">
      <circle cx="22" cy="22" r="20.5" stroke="currentColor" strokeWidth="1.4" />
      <circle
        cx="22"
        cy="22"
        r="16"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeDasharray="1.5 3.5"
      />
      <text
        x="22"
        y="30"
        textAnchor="middle"
        fill="currentColor"
        style={{ font: "400 20px var(--ff-display, sans-serif)" }}
      >
        J
      </text>
    </svg>
  );
}

/** Guratan tangan sebagai pemisah bagian. */
export function InkRule({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 1200 12"
      className={className}
      preserveAspectRatio="none"
      aria-hidden="true"
      fill="none"
    >
      <path
        d="M0 7C120 3 240 3 360 6s240 4 360 1 240-5 360-3 120 4 120 4"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
      />
    </svg>
  );
}
