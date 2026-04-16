const Butterfly = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 64 64" className={className} style={style} aria-hidden="true">
    <defs>
      <linearGradient id="bf-grad" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0%" stopColor="var(--lavender)" stopOpacity="0.95" />
        <stop offset="60%" stopColor="var(--pink-soft)" stopOpacity="0.85" />
        <stop offset="100%" stopColor="var(--blue-soft)" stopOpacity="0.8" />
      </linearGradient>
    </defs>
    <g fill="url(#bf-grad)">
      <path d="M32 32 C18 14, 4 18, 6 30 C8 42, 22 40, 32 32 Z" />
      <path d="M32 32 C46 14, 60 18, 58 30 C56 42, 42 40, 32 32 Z" />
      <path d="M32 32 C20 38, 10 46, 14 54 C20 60, 28 50, 32 38 Z" opacity="0.85" />
      <path d="M32 32 C44 38, 54 46, 50 54 C44 60, 36 50, 32 38 Z" opacity="0.85" />
    </g>
    <ellipse cx="32" cy="34" rx="1.5" ry="10" fill="oklch(0.3 0.05 305)" />
  </svg>
);

const Sparkle = ({ className = "", style = {} }: { className?: string; style?: React.CSSProperties }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} aria-hidden="true" fill="currentColor">
    <path d="M12 0 L13.5 9 L24 12 L13.5 15 L12 24 L10.5 15 L0 12 L10.5 9 Z" />
  </svg>
);

export const Butterflies = () => (
  <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
    <Butterfly className="absolute w-16 h-16 animate-float opacity-60" style={{ top: "12%", left: "8%", animationDelay: "0s" }} />
    <Butterfly className="absolute w-10 h-10 animate-float-slow opacity-50" style={{ top: "30%", right: "12%", animationDelay: "1.5s" }} />
    <Butterfly className="absolute w-20 h-20 animate-float opacity-40" style={{ top: "65%", left: "5%", animationDelay: "3s" }} />
    <Butterfly className="absolute w-12 h-12 animate-float-slow opacity-55" style={{ top: "80%", right: "20%", animationDelay: "0.8s" }} />
    <Butterfly className="absolute w-8 h-8 animate-float opacity-45" style={{ top: "45%", left: "48%", animationDelay: "2.2s" }} />

    <Sparkle className="absolute w-3 h-3 text-primary/60 animate-glow-pulse" style={{ top: "20%", left: "30%" }} />
    <Sparkle className="absolute w-4 h-4 text-accent/60 animate-glow-pulse" style={{ top: "55%", right: "25%", animationDelay: "1s" }} />
    <Sparkle className="absolute w-2 h-2 text-primary/70 animate-glow-pulse" style={{ top: "75%", left: "60%", animationDelay: "2s" }} />
    <Sparkle className="absolute w-3 h-3 text-accent/50 animate-glow-pulse" style={{ top: "15%", right: "35%", animationDelay: "1.5s" }} />
  </div>
);

export { Butterfly, Sparkle };
