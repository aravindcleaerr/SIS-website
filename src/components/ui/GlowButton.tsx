interface GlowButtonProps {
  children: React.ReactNode;
  href: string;
  className?: string;
}

export function GlowButton({ children, href, className = "" }: GlowButtonProps) {
  return (
    <a
      href={href}
      className={`inline-flex items-center gap-2 px-8 py-3 bg-sis-gold text-[#0f172a] font-semibold text-sm rounded-full transition-all duration-300 hover:shadow-[0_0_30px_rgba(245,158,11,0.4)] hover:scale-[1.02] ${className}`}
    >
      {children}
    </a>
  );
}
