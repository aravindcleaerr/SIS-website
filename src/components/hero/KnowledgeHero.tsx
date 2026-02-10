"use client";

import { FloatingParticles } from "./FloatingParticles";

const SKILL_NODES = [
  { label: "Quality", angle: 0 },
  { label: "Purchase", angle: 51.4 },
  { label: "Leadership", angle: 102.8 },
  { label: "Engineering", angle: 154.3 },
  { label: "Soft Skills", angle: 205.7 },
  { label: "Strategy", angle: 257.1 },
  { label: "Mentoring", angle: 308.6 },
];

const OUTER_RADIUS = 155;
const CENTER = 200;

function nodePos(angleDeg: number, radius: number) {
  const rad = ((angleDeg - 90) * Math.PI) / 180;
  return { x: CENTER + radius * Math.cos(rad), y: CENTER + radius * Math.sin(rad) };
}

export function KnowledgeHero() {
  return (
    <div className="relative w-full h-full flex items-center justify-center">
      <FloatingParticles />

      <svg
        viewBox="0 0 400 400"
        className="w-full h-full max-w-[400px]"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label="Knowledge network visualization showing 7 training domains: Quality, Purchase, Leadership, Engineering, Soft Skills, Strategy, and Mentoring"
      >
        <defs>
          <linearGradient id="hero-gold" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#fbbf24" />
            <stop offset="100%" stopColor="#f59e0b" />
          </linearGradient>
          <linearGradient id="hero-blue" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#60a5fa" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <linearGradient id="hero-grad-mix" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#f59e0b" />
            <stop offset="100%" stopColor="#3b82f6" />
          </linearGradient>
          <radialGradient id="center-glow" cx="50%" cy="50%" r="50%">
            <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.2" />
            <stop offset="60%" stopColor="#f59e0b" stopOpacity="0.05" />
            <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
          </radialGradient>
          <filter id="glow-sm">
            <feGaussianBlur stdDeviation="2" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
          <filter id="glow-md">
            <feGaussianBlur stdDeviation="4" result="blur" />
            <feMerge>
              <feMergeNode in="blur" />
              <feMergeNode in="SourceGraphic" />
            </feMerge>
          </filter>
        </defs>

        {/* Background glow */}
        <circle cx={CENTER} cy={CENTER} r="190" fill="url(#center-glow)" />

        {/* Outer dashed orbit ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={OUTER_RADIUS + 15}
          fill="none"
          stroke="#f59e0b"
          strokeWidth="0.5"
          strokeDasharray="4 8"
          opacity="0.2"
        />

        {/* Middle subtle ring */}
        <circle
          cx={CENTER}
          cy={CENTER}
          r={OUTER_RADIUS - 20}
          fill="none"
          stroke="#3b82f6"
          strokeWidth="0.5"
          strokeDasharray="2 10"
          opacity="0.15"
        />

        {/* Connection lines from center to each skill node */}
        {SKILL_NODES.map((node, i) => {
          const pos = nodePos(node.angle, OUTER_RADIUS);
          return (
            <g key={`conn-${i}`}>
              {/* Static connection line */}
              <line
                x1={CENTER}
                y1={CENTER}
                x2={pos.x}
                y2={pos.y}
                stroke="url(#hero-grad-mix)"
                strokeWidth="1"
                opacity="0.2"
              />
              {/* Animated pulse traveling along the line */}
              <circle r="2.5" fill="#f59e0b" opacity="0.7" filter="url(#glow-sm)">
                <animateMotion
                  dur={`${2.5 + i * 0.3}s`}
                  repeatCount="indefinite"
                  path={`M${CENTER},${CENTER} L${pos.x},${pos.y}`}
                />
              </circle>
            </g>
          );
        })}

        {/* Inter-node arc connections (every other pair) */}
        {SKILL_NODES.map((node, i) => {
          const next = SKILL_NODES[(i + 1) % SKILL_NODES.length];
          const p1 = nodePos(node.angle, OUTER_RADIUS);
          const p2 = nodePos(next.angle, OUTER_RADIUS);
          return (
            <line
              key={`arc-${i}`}
              x1={p1.x}
              y1={p1.y}
              x2={p2.x}
              y2={p2.y}
              stroke="#3b82f6"
              strokeWidth="0.5"
              opacity="0.15"
              strokeDasharray="3 6"
            />
          );
        })}

        {/* Skill nodes */}
        {SKILL_NODES.map((node, i) => {
          const pos = nodePos(node.angle, OUTER_RADIUS);
          const isGold = i % 2 === 0;
          return (
            <g key={`node-${i}`}>
              {/* Node outer ring */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r="22"
                fill="none"
                stroke={isGold ? "#f59e0b" : "#3b82f6"}
                strokeWidth="1"
                opacity="0.3"
              />
              {/* Node filled circle */}
              <circle
                cx={pos.x}
                cy={pos.y}
                r="16"
                fill={isGold ? "#f59e0b" : "#3b82f6"}
                opacity="0.12"
                className="animate-node-pulse"
                style={{ animationDelay: `${i * 0.4}s`, transformOrigin: `${pos.x}px ${pos.y}px` }}
              />
              <circle
                cx={pos.x}
                cy={pos.y}
                r="5"
                fill={isGold ? "#f59e0b" : "#3b82f6"}
                opacity="0.8"
                filter="url(#glow-sm)"
              />
              {/* Label */}
              <text
                x={pos.x}
                y={pos.y + 30}
                textAnchor="middle"
                fill={isGold ? "#fbbf24" : "#93c5fd"}
                fontSize="9"
                fontWeight="600"
                opacity="0.9"
              >
                {node.label}
              </text>
            </g>
          );
        })}

        {/* Central hexagonal frame */}
        <path
          d="M200 155 L239 177.5 L239 222.5 L200 245 L161 222.5 L161 177.5 Z"
          fill="none"
          stroke="url(#hero-gold)"
          strokeWidth="1.5"
          opacity="0.6"
        />
        <path
          d="M200 155 L239 177.5 L239 222.5 L200 245 L161 222.5 L161 177.5 Z"
          fill="#f59e0b"
          opacity="0.04"
        />

        {/* Central open book with knowledge flame */}
        <g>
          {/* Open book - left page */}
          <path
            d="M200 228 C192 224 172 220 168 214 L168 230 C172 236 192 232 200 236 Z"
            fill="url(#hero-gold)"
            opacity="0.85"
          />
          {/* Open book - right page */}
          <path
            d="M200 228 C208 224 228 220 232 214 L232 230 C228 236 208 232 200 236 Z"
            fill="url(#hero-gold)"
            opacity="0.85"
          />
          {/* Book spine line */}
          <line x1="200" y1="228" x2="200" y2="236" stroke="#fbbf24" strokeWidth="1" opacity="0.6" />
          {/* Page lines - left */}
          <line x1="176" y1="222" x2="196" y2="229" stroke="#0f172a" strokeWidth="0.5" opacity="0.3" />
          <line x1="174" y1="226" x2="196" y2="232" stroke="#0f172a" strokeWidth="0.5" opacity="0.3" />
          {/* Page lines - right */}
          <line x1="224" y1="222" x2="204" y2="229" stroke="#0f172a" strokeWidth="0.5" opacity="0.3" />
          <line x1="226" y1="226" x2="204" y2="232" stroke="#0f172a" strokeWidth="0.5" opacity="0.3" />

          {/* Flame - outer shape */}
          <path
            d="M200 168 C195 178 186 190 186 202 C186 210 192 216 200 216 C208 216 214 210 214 202 C214 190 205 178 200 168 Z"
            fill="url(#hero-gold)"
            opacity="0.9"
            filter="url(#glow-sm)"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1 1;1.02 1.04;1 1;0.98 1.02;1 1"
              dur="3s"
              repeatCount="indefinite"
              additive="sum"
            />
          </path>
          {/* Flame - inner bright core */}
          <path
            d="M200 180 C197 187 192 194 192 202 C192 207 196 210 200 210 C204 210 208 207 208 202 C208 194 203 187 200 180 Z"
            fill="#fef3c7"
            opacity="0.7"
          >
            <animateTransform
              attributeName="transform"
              type="scale"
              values="1 1;0.97 1.05;1 1;1.03 0.97;1 1"
              dur="2.5s"
              repeatCount="indefinite"
              additive="sum"
            />
          </path>
          {/* Flame tip wisp */}
          <path
            d="M200 168 C199 164 197 160 200 155 C203 160 201 164 200 168 Z"
            fill="#fbbf24"
            opacity="0.6"
          >
            <animateTransform
              attributeName="transform"
              type="translate"
              values="0 0;-1 -2;0 0;1 -1;0 0"
              dur="2s"
              repeatCount="indefinite"
            />
          </path>
        </g>

        {/* Knowledge rays radiating from flame */}
        {[20, 65, 115, 245, 295, 340].map((deg, i) => {
          const rad = (deg * Math.PI) / 180;
          const x1 = CENTER + 48 * Math.cos(rad);
          const y1 = CENTER + 48 * Math.sin(rad);
          const x2 = CENTER + 57 * Math.cos(rad);
          const y2 = CENTER + 57 * Math.sin(rad);
          return (
            <line
              key={`ray-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="#fbbf24"
              strokeWidth="1.5"
              opacity="0.3"
              strokeLinecap="round"
              className="animate-node-pulse"
              style={{ animationDelay: `${i * 0.3}s` }}
            />
          );
        })}

        {/* Floating stat badges */}
        {/* Top-left badge */}
        <g filter="url(#glow-sm)" className="animate-float" style={{ animationDelay: "0s" }}>
          <rect x="28" y="55" rx="10" ry="10" width="68" height="28" fill="#0f172a" stroke="#f59e0b" strokeWidth="0.8" opacity="0.8" />
          <text x="62" y="68" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">39+ Yrs</text>
          <text x="62" y="78" textAnchor="middle" fill="#e2e8f0" fontSize="6.5">Experience</text>
        </g>

        {/* Top-right badge */}
        <g filter="url(#glow-sm)" className="animate-float" style={{ animationDelay: "1s" }}>
          <rect x="305" y="55" rx="10" ry="10" width="68" height="28" fill="#0f172a" stroke="#3b82f6" strokeWidth="0.8" opacity="0.8" />
          <text x="339" y="68" textAnchor="middle" fill="#93c5fd" fontSize="9" fontWeight="700">55+ Prog</text>
          <text x="339" y="78" textAnchor="middle" fill="#e2e8f0" fontSize="6.5">Modules</text>
        </g>

        {/* Bottom badge */}
        <g filter="url(#glow-sm)" className="animate-float" style={{ animationDelay: "2s" }}>
          <rect x="152" y="340" rx="10" ry="10" width="96" height="28" fill="#0f172a" stroke="#f59e0b" strokeWidth="0.8" opacity="0.8" />
          <text x="200" y="353" textAnchor="middle" fill="#fbbf24" fontSize="9" fontWeight="700">18,000+ Trained</text>
          <text x="200" y="363" textAnchor="middle" fill="#e2e8f0" fontSize="6.5">Professionals</text>
        </g>

        {/* Small orbital decoration dots on middle ring */}
        {[0, 45, 90, 135, 180, 225, 270, 315].map((deg, i) => {
          const rad = ((deg - 90) * Math.PI) / 180;
          const cx = CENTER + (OUTER_RADIUS - 20) * Math.cos(rad);
          const cy = CENTER + (OUTER_RADIUS - 20) * Math.sin(rad);
          return (
            <circle
              key={`orbit-dot-${i}`}
              cx={cx}
              cy={cy}
              r="1.5"
              fill={i % 2 === 0 ? "#f59e0b" : "#3b82f6"}
              opacity="0.25"
              className="animate-node-pulse"
              style={{ animationDelay: `${i * 0.25}s` }}
            />
          );
        })}
      </svg>
    </div>
  );
}
