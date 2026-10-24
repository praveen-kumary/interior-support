import { Link } from "@tanstack/react-router";

interface BrandLogoProps {
  className?: string;
  variant?: "header" | "footer" | "full";
  onClick?: () => void;
}

export function BrandLogo({ className = "", variant = "header", onClick }: BrandLogoProps) {
  return (
    <Link
      to="/"
      aria-label="Interior Support — Your Interior. Our Responsibility."
      className={`brand brand-lockup group flex items-center gap-2 sm:gap-2.5 no-underline shrink-0 whitespace-nowrap ${className}`}
      onClick={onClick}
    >
      {/* Architectural IS Monogram */}
      <div className="relative flex-shrink-0 w-8 h-8 rounded-xs overflow-hidden border border-gold/40 bg-card/90 shadow-xs transition-transform duration-300 group-hover:scale-105">
        <img
          src="/favicon.png"
          alt="Interior Support IS monogram emblem"
          className="w-full h-full object-contain p-0.5"
          width={32}
          height={32}
        />
        <div className="absolute inset-0 bg-gradient-to-tr from-gold/15 to-transparent pointer-events-none" />
      </div>

      {/* Brand Wordmark & Tagline: strictly 2 lines */}
      <div className="flex flex-col justify-center leading-none whitespace-nowrap select-none shrink-0">
        {/* Line 1: INTERIOR SUPPORT */}
        <div className="flex items-baseline whitespace-nowrap font-display font-semibold text-xs sm:text-[0.8rem] text-primary-foreground tracking-[0.14em] sm:tracking-[0.18em] leading-tight">
          <span>INTERIOR</span>{" "}
          <span className="text-gold ml-1 font-normal tracking-[0.16em] sm:tracking-[0.20em]">
            SUPPORT
          </span>
        </div>
        {/* Line 2: Your Interior. Our Responsibility. */}
        <span className="block whitespace-nowrap text-[0.48rem] sm:text-[0.52rem] tracking-[0.06em] sm:tracking-[0.08em] text-white/70 uppercase font-sans mt-0.5 leading-tight transition-colors duration-200 group-hover:text-gold/90">
          Your Interior. Our Responsibility.
        </span>
      </div>
    </Link>
  );
}
