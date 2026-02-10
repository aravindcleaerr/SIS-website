interface LogoProps {
  size?: "sm" | "lg";
  className?: string;
}

export function Logo({ size = "sm", className = "" }: LogoProps) {
  const isLarge = size === "lg";
  const iconSize = isLarge ? 44 : 28;
  const textClass = isLarge ? "text-2xl sm:text-3xl" : "text-sm";

  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        width={iconSize}
        height={iconSize}
        viewBox="0 0 44 44"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
      >
        {/* Outer hexagon */}
        <path
          d="M22 2L39.3 11.5V30.5L22 40L4.7 30.5V11.5L22 2Z"
          stroke="url(#sis-logo-gradient)"
          strokeWidth="1.5"
          fill="none"
        />
        {/* Inner circle - knowledge ring */}
        <circle
          cx="22"
          cy="21"
          r="11"
          stroke="#f59e0b"
          strokeWidth="1"
          opacity="0.3"
          fill="none"
        />
        {/* Open book / knowledge symbol */}
        <path
          d="M14 16C14 16 18 18 22 16C26 18 30 16 30 16V28C30 28 26 26 22 28C18 26 14 28 14 28V16Z"
          fill="url(#sis-book-gradient)"
          opacity="0.9"
        />
        {/* Book spine */}
        <line x1="22" y1="16" x2="22" y2="28" stroke="#fbbf24" strokeWidth="0.8" opacity="0.6" />
        {/* Knowledge nodes */}
        <circle cx="11" cy="16" r="1.5" fill="#f59e0b" opacity="0.5" />
        <circle cx="33" cy="16" r="1.5" fill="#3b82f6" opacity="0.5" />
        <circle cx="11" cy="26" r="1.5" fill="#3b82f6" opacity="0.5" />
        <circle cx="33" cy="26" r="1.5" fill="#f59e0b" opacity="0.5" />
        {/* Connection lines */}
        <line x1="11" y1="16" x2="7.5" y2="14" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" />
        <line x1="33" y1="16" x2="36.5" y2="14" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="11" y1="26" x2="7.5" y2="28" stroke="#3b82f6" strokeWidth="0.5" opacity="0.3" />
        <line x1="33" y1="26" x2="36.5" y2="28" stroke="#f59e0b" strokeWidth="0.5" opacity="0.3" />
        <defs>
          <linearGradient id="sis-logo-gradient" x1="4.7" y1="2" x2="39.3" y2="40">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="sis-book-gradient" x1="14" y1="16" x2="30" y2="28">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
        </defs>
      </svg>
      <div className="flex flex-col">
        <span
          className={`font-[family-name:var(--font-playfair)] text-sis-gold tracking-wider font-bold uppercase ${textClass}`}
        >
          Saraswati
        </span>
        {isLarge && (
          <span className="text-xs text-sis-gray-400 tracking-[0.2em] uppercase">
            Industrial Services
          </span>
        )}
      </div>
    </div>
  );
}
