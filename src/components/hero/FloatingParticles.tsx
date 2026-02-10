"use client";

const PARTICLES = Array.from({ length: 15 }, (_, i) => {
  const seed = (i * 7 + 3) % 17;
  return {
    id: i,
    left: `${(seed * 6.25) % 100}%`,
    top: `${((i * 13 + 5) % 17) * 6.25}%`,
    size: 2 + (seed % 3),
    color: i % 3 === 0 ? "#f59e0b" : i % 3 === 1 ? "#3b82f6" : "#60a5fa",
    opacity: 0.15 + (seed % 5) * 0.05,
    driftX: `${-30 + (seed * 4)}px`,
    driftY: `${-40 + (i * 5)}px`,
    delay: `${i * 0.5}s`,
    duration: `${6 + (seed % 5)}s`,
  };
});

export function FloatingParticles() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {PARTICLES.map((p) => (
        <div
          key={p.id}
          className="absolute rounded-full animate-particle-drift"
          style={{
            left: p.left,
            top: p.top,
            width: p.size,
            height: p.size,
            backgroundColor: p.color,
            "--particle-opacity": p.opacity,
            "--drift-x": p.driftX,
            "--drift-y": p.driftY,
            animationDelay: p.delay,
            animationDuration: p.duration,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
}
