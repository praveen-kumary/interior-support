import { useState, useEffect } from "react";
import {
  ArrowRight,
  Menu,
  MessageSquare,
  X,
  ChevronDown,
  ChevronRight,
  Sparkles,
  Phone,
  Mail,
  MapPin,
  Clock,
  ShieldCheck,
  ArrowUp,
  CheckCircle2,
} from "lucide-react";
import { Link } from "@tanstack/react-router";

import { BrandLogo } from "@/components/brand-logo";
import { Button } from "@/components/ui/button";

const navLinks = [
  { label: "Home", to: "/" as const },
  { label: "About", to: "/about-us" as const },
  { label: "Services", to: "/services" as const, hasDropdown: true },
  { label: "Gallery", to: "/gallery" as const },
  { label: "Pricing", to: "/pricing" as const },
  { label: "Journal", to: "/blog" as const },
  { label: "Contact", to: "/contact-us" as const },
];

const serviceSublinks = [
  {
    number: "01",
    label: "Project Management",
    to: "/services/project-management" as const,
    description: "End-to-end client stewardship, vendor alignment & site milestones",
    tag: "Total Oversight",
  },
  {
    number: "02",
    label: "Site Inspection & QC",
    to: "/services/site-inspection-quality-control" as const,
    description: "Laser plumb, squareness, and MEP concealed pressure hold audits",
    tag: "Laser Audited",
  },
  {
    number: "03",
    label: "BOQ & Cost Verification",
    to: "/services/boq-execution-verification" as const,
    description: "Forensic IS 1200 line-by-line deduction review & cost protection",
    tag: "Cost Protection",
  },
  {
    number: "04",
    label: "Handover & Snags",
    to: "/services/handover-post-sale-support" as const,
    description: "120-point tactile snag audit & complete verified warranty dossier",
    tag: "Zero-Defect Handover",
  },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [showFloatingDock, setShowFloatingDock] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // Lock background body scroll when mobile menu drawer is open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  // Handle ESC key to dismiss menus smoothly
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setMenuOpen(false);
        setDropdownOpen(false);
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, []);

  useEffect(() => {
    let rafId: number | null = null;
    let lastScrolled = false;
    let lastDock = false;

    const handleScroll = () => {
      if (rafId) return;

      rafId = requestAnimationFrame(() => {
        const scrollY = window.scrollY;
        const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
        const progress =
          totalHeight > 0 ? Math.min(Math.max((scrollY / totalHeight) * 100, 0), 100) : 0;

        // Smooth Hysteresis to eliminate toggle struggle / flutter
        if (!lastScrolled && scrollY > 25) {
          lastScrolled = true;
          setIsScrolled(true);
        } else if (lastScrolled && scrollY < 10) {
          lastScrolled = false;
          setIsScrolled(false);
        }

        const nextDock = scrollY > 350;
        if (nextDock !== lastDock) {
          lastDock = nextDock;
          setShowFloatingDock(nextDock);
        }

        setScrollProgress(progress);
        rafId = null;
      });
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, []);

  return (
    <>
      <header
        className={`site-header transition-all duration-300 ${
          isScrolled ? "is-scrolled" : ""
        }`}
      >
        <div className="header-inner flex items-center justify-between">
          <BrandLogo onClick={() => setMenuOpen(false)} />

          <nav
            className="main-nav hidden lg:flex items-center gap-1 xl:gap-1.5"
            aria-label="Main navigation"
          >
            {navLinks.map((item) => {
              if (item.hasDropdown) {
                return (
                  <div
                    key={item.to}
                    className="relative group/dropdown"
                    onMouseEnter={() => setDropdownOpen(true)}
                    onMouseLeave={() => setDropdownOpen(false)}
                  >
                    <Link
                      to={item.to}
                      activeProps={{
                        className:
                          "bg-gold/15 text-gold font-semibold border-gold/40 shadow-[0_0_12px_rgba(197,168,128,0.2)]",
                      }}
                      inactiveProps={{
                        className:
                          "text-white/80 hover:text-white hover:bg-white/[0.08] border-transparent",
                      }}
                      className="relative px-3.5 py-1.5 rounded-full text-[0.80rem] font-medium tracking-wide transition-all duration-200 inline-flex items-center gap-1.5 border"
                    >
                      <span>{item.label}</span>
                      <ChevronDown
                        className={`w-3.5 h-3.5 transition-transform duration-200 ${
                          dropdownOpen ? "rotate-180 text-gold" : "opacity-60"
                        }`}
                      />
                    </Link>

                    {/* DESKTOP SERVICES ARCHITECTURAL MEGA FLYOUT */}
                    <div
                      className={`absolute left-1/2 -translate-x-1/2 top-full pt-3 w-[430px] transition-all duration-200 z-50 ${
                        dropdownOpen
                          ? "opacity-100 visible translate-y-0"
                          : "opacity-0 invisible -translate-y-2 pointer-events-none"
                      }`}
                    >
                      <div className="bg-[#12110e]/98 border border-gold/40 shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_24px_-4px_rgba(197,168,128,0.2)] p-2.5 text-left backdrop-blur-2xl rounded-2xl">
                        <div className="px-3 py-1.5 mb-1 flex items-center justify-between border-b border-white/10">
                          <span className="text-[0.62rem] font-mono tracking-widest text-gold uppercase font-medium">
                            Core Disciplines // Fiduciary PMC
                          </span>
                          <span className="text-[0.6rem] text-white/50 font-mono">Bengaluru</span>
                        </div>

                        <div className="space-y-1">
                          {serviceSublinks.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              onClick={() => setDropdownOpen(false)}
                              className="group flex items-start gap-3 p-2.5 rounded-xl hover:bg-white/[0.08] border border-transparent hover:border-gold/30 transition-all duration-200"
                            >
                              <span className="text-xs font-mono text-gold/80 group-hover:text-gold mt-0.5 font-bold">
                                {s.number}
                              </span>
                              <div className="flex-1 min-w-0">
                                <div className="flex items-center justify-between gap-2">
                                  <span className="text-[0.82rem] font-display font-medium text-white/95 group-hover:text-gold transition-colors">
                                    {s.label}
                                  </span>
                                  <span className="text-[0.58rem] px-2 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 font-mono font-medium shrink-0">
                                    {s.tag}
                                  </span>
                                </div>
                                <p className="text-[0.69rem] text-white/60 leading-snug mt-0.5 group-hover:text-white/85 transition-colors line-clamp-1">
                                  {s.description}
                                </p>
                              </div>
                            </Link>
                          ))}
                        </div>

                        <div className="mt-1.5 pt-2 border-t border-white/10 px-3 py-1 flex items-center justify-between text-[0.68rem] text-white/60">
                          <span className="flex items-center gap-1.5 text-gold font-medium">
                            <ShieldCheck className="w-3.5 h-3.5" /> 100% Zero Contractor Margins
                          </span>
                          <Link
                            to="/services"
                            onClick={() => setDropdownOpen(false)}
                            className="text-white hover:text-gold underline underline-offset-2 flex items-center gap-1 transition-colors"
                          >
                            All Disciplines <ArrowRight className="w-3 h-3" />
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              }

              return (
                <Link
                  key={item.to}
                  to={item.to}
                  activeProps={{
                    className:
                      "bg-gold/15 text-gold font-semibold border-gold/40 shadow-[0_0_12px_rgba(197,168,128,0.2)]",
                  }}
                  inactiveProps={{
                    className:
                      "text-white/80 hover:text-white hover:bg-white/[0.08] border-transparent",
                  }}
                  className="relative px-3.5 py-1.5 rounded-full text-[0.80rem] font-medium tracking-wide transition-all duration-200 border"
                >
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>

          <div className="header-actions hidden sm:flex items-center gap-2.5">
            <a
              href="tel:+919820184729"
              className="hidden xl:inline-flex items-center gap-1.5 text-[0.72rem] text-white/75 hover:text-gold transition-colors font-mono tracking-wide px-3 py-1.5 rounded-full border border-white/10 hover:border-gold/30 bg-white/[0.04]"
              aria-label="Call Direct Client Advisory Line"
            >
              <Phone className="w-3 h-3 text-gold" />
              <span>+91 98201 84729</span>
            </a>

            <Button
              className="header-cta bg-gold hover:bg-[#d8c09a] text-[#12110e] font-semibold text-xs tracking-wide px-4 py-2 rounded-full shadow-md hover:shadow-gold/25 transition-all duration-200 active:scale-95 group"
              asChild
            >
              <Link to="/get-a-quote">
                <span>Get a Quote</span>
                <ArrowRight
                  className="w-3.5 h-3.5 ml-1 transition-transform group-hover:translate-x-0.5"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>

          <Button
            className="mobile-menu-toggle lg:hidden w-10 h-10 rounded-full bg-white/[0.08] hover:bg-white/[0.16] border border-white/15 text-white flex items-center justify-center transition-all duration-200 active:scale-95 p-0"
            variant="ghost"
            size="icon"
            aria-label={menuOpen ? "Close navigation" : "Open navigation"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? (
              <X aria-hidden="true" className="w-5 h-5 text-gold" />
            ) : (
              <Menu aria-hidden="true" className="w-5 h-5" />
            )}
          </Button>
        </div>

        {/* MOBILE NAVIGATION DRAWER & BACKDROP */}
        {menuOpen && (
          <div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm lg:hidden transition-opacity duration-300 pointer-events-auto"
            onClick={() => setMenuOpen(false)}
            aria-hidden="true"
          />
        )}

        <nav
          id="mobile-navigation"
          className={`mobile-nav fixed top-[70px] sm:top-[74px] inset-x-3 sm:inset-x-6 z-50 lg:hidden rounded-2xl bg-[#12110e]/98 border border-gold/40 shadow-[0_24px_50px_-10px_rgba(0,0,0,0.95),0_0_24px_rgba(197,168,128,0.2)] backdrop-blur-2xl transition-all duration-300 overflow-hidden ${
            menuOpen
              ? "opacity-100 translate-y-0 visible pointer-events-auto"
              : "opacity-0 -translate-y-4 invisible pointer-events-none"
          }`}
          aria-label="Mobile navigation"
        >
          <div className="mobile-nav-inner p-5 max-h-[calc(100svh-95px)] overflow-y-auto space-y-4">
            <div className="divide-y divide-white/10">
              {navLinks.map((item, index) => {
                if (item.hasDropdown) {
                  return (
                    <div key={item.to} className="py-1">
                      <button
                        type="button"
                        onClick={() => setMobileServicesOpen((prev) => !prev)}
                        className="w-full flex items-center justify-between py-2.5 text-left text-white/95 hover:text-gold transition-colors"
                      >
                        <div className="flex items-center gap-3">
                          <span className="text-xs text-gold/80 font-mono font-semibold">{`0${index + 1}`}</span>
                          <span className="font-display font-medium text-base tracking-wide">{item.label}</span>
                        </div>
                        <ChevronDown
                          className={`w-4 h-4 text-gold transition-transform duration-200 ${
                            mobileServicesOpen ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {mobileServicesOpen && (
                        <div className="pl-3 pr-1 py-2 space-y-1.5 border-l-2 border-gold/40 my-1 bg-white/[0.03] rounded-r-xl">
                          {serviceSublinks.map((s) => (
                            <Link
                              key={s.to}
                              to={s.to}
                              onClick={() => setMenuOpen(false)}
                              className="flex items-start justify-between p-2 rounded-lg hover:bg-white/[0.08] transition-colors group"
                            >
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="text-[0.65rem] font-mono text-gold font-bold">{s.number}</span>
                                  <span className="text-xs font-display font-medium text-white group-hover:text-gold transition-colors">
                                    {s.label}
                                  </span>
                                </div>
                                <p className="text-[0.68rem] text-white/60 mt-0.5 line-clamp-1">{s.description}</p>
                              </div>
                              <span className="text-[0.58rem] px-1.5 py-0.5 rounded-full bg-gold/15 text-gold border border-gold/30 font-mono shrink-0 ml-2">
                                {s.tag}
                              </span>
                            </Link>
                          ))}
                          <div className="pt-1 pl-2">
                            <Link
                              to="/services"
                              onClick={() => setMenuOpen(false)}
                              className="text-[0.72rem] text-gold font-medium hover:underline inline-flex items-center gap-1"
                            >
                              All Disciplines Overview <ArrowRight className="w-3 h-3" />
                            </Link>
                          </div>
                        </div>
                      )}
                    </div>
                  );
                }

                return (
                  <div key={item.to} className="py-1">
                    <Link
                      to={item.to}
                      activeProps={{ className: "text-gold font-semibold" }}
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center py-2.5 text-white/90 hover:text-gold transition-colors group"
                    >
                      <span className="text-xs text-gold/80 mr-3 font-mono font-semibold">{`0${index + 1}`}</span>
                      <span className="font-display font-medium text-base tracking-wide">{item.label}</span>
                      <ArrowRight aria-hidden="true" className="w-4 h-4 ml-auto text-white/40 group-hover:text-gold group-hover:translate-x-0.5 transition-all" />
                    </Link>
                  </div>
                );
              })}
            </div>

            <div className="pt-3 border-t border-white/10 space-y-2.5">
              <Button
                className="w-full bg-gold text-[#12110e] hover:bg-[#d8c09a] font-semibold text-xs py-3 rounded-full shadow-md"
                asChild
                onClick={() => setMenuOpen(false)}
              >
                <Link to="/get-a-quote">
                  Get a Project Quote <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                </Link>
              </Button>

              <a
                href="tel:+919820184729"
                className="w-full flex items-center justify-center gap-2 py-2 px-3 rounded-full border border-white/15 bg-white/[0.04] text-white/90 hover:text-gold hover:border-gold/40 text-xs font-mono transition-colors"
              >
                <Phone className="w-3.5 h-3.5 text-gold" />
                <span>Direct Advisory: +91 98201 84729</span>
              </a>

              <p className="text-[0.62rem] text-white/50 text-center font-mono tracking-wider uppercase pt-1">
                Bengaluru • 100% Client-Side Independent PMC
              </p>
            </div>
          </div>
        </nav>
      </header>

      {/* ALWAYS-VISIBLE MEDIUM FLOATING WHATSAPP BUTTON */}
      <aside
        aria-label="Contact options"
        className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-40 flex items-center group"
      >
        <a
          href="https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20would%20like%20to%20inquire%20about%20interior%20project%20management%20services."
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Direct WhatsApp Consultation with Senior Project Consultant (+91 98201 84729)"
          className="relative flex items-center group cursor-pointer focus:outline-none"
        >
          {/* Hover Pill Label */}
          <span className="hidden sm:inline-flex items-center gap-1.5 mr-3 px-3.5 py-1.5 rounded-full bg-[#141311]/90 backdrop-blur-md border border-white/15 text-white text-xs font-medium shadow-xl opacity-0 group-hover:opacity-100 translate-x-2 group-hover:translate-x-0 transition-all duration-200 pointer-events-none">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
            Chat with Consultant
          </span>

          {/* Medium Circular WhatsApp Floating Button */}
          <div className="relative w-13 h-13 sm:w-14 sm:h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-lg hover:shadow-[0_10px_25px_-5px_rgba(37,211,102,0.5)] hover:scale-105 active:scale-95 transition-all duration-200 border-2 border-white/20 hover:border-white/50">
            {/* Live Presence Pulse Indicator */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-[#141311]" />
            </span>

            {/* Official WhatsApp SVG Vector Icon */}
            <svg
              className="w-7 h-7 fill-white"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
              aria-hidden="true"
            >
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
            </svg>
          </div>
        </a>
      </aside>

      {/* CIRCULAR SCROLL PROGRESS & BACK TO TOP BUTTON (Appears when scrolled > 350px) */}
      <button
        type="button"
        onClick={scrollToTop}
        aria-label="Scroll back to top"
        className={`fixed bottom-20 right-5 sm:bottom-23 sm:right-7 z-30 w-11 h-11 rounded-full bg-[#181715]/95 hover:bg-[#22201d] text-gold border border-gold/40 hover:border-gold shadow-xl backdrop-blur-md flex items-center justify-center transition-all duration-300 cursor-pointer ${
          showFloatingDock
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-4 pointer-events-none"
        }`}
      >
        <svg
          className="w-11 h-11 -rotate-90 absolute inset-0 pointer-events-none"
          viewBox="0 0 44 44"
        >
          <circle
            cx="22"
            cy="22"
            r="18"
            className="stroke-white/10"
            strokeWidth="2.5"
            fill="transparent"
          />
          <circle
            cx="22"
            cy="22"
            r="18"
            className="stroke-gold"
            strokeWidth="2.5"
            strokeDasharray={2 * Math.PI * 18}
            strokeDashoffset={2 * Math.PI * 18 * (1 - scrollProgress / 100)}
            strokeLinecap="round"
            fill="transparent"
            style={{ transition: "stroke-dashoffset 100ms linear" }}
          />
        </svg>
        <ArrowUp className="w-4 h-4 text-gold group-hover:-translate-y-0.5 transition-transform" />
      </button>
    </>
  );
}

export function SiteFooter() {
  const scrollToTop = (e: React.MouseEvent) => {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="site-footer bg-[#141311] text-[#f4efe8] border-t border-white/10 relative overflow-hidden">
      {/* Subtle luxury ambient background glow */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 bg-[radial-gradient(ellipse_70%_40%_at_50%_-10%,rgba(197,168,128,0.22),transparent)]"
        aria-hidden="true"
      />
      {/* MAIN FOOTER CONTENT GRID */}
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 pt-14 pb-12 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8">
          {/* COLUMN 1: BRAND IDENTITY & PHYSICAL HEADQUARTERS (5 cols on lg) */}
          <div className="lg:col-span-5 space-y-5">
            <div>
              <BrandLogo variant="footer" />
              <p className="mt-3 text-xs sm:text-sm text-white/80 font-display leading-relaxed max-w-sm">
                Independent Interior Project Management, Laser-Tolerance Site Audits, Forensic BOQ
                Audits &amp; Handover Stewardship.
              </p>
            </div>

            <div className="space-y-3 text-xs text-white/70 border-t border-white/10 pt-4 max-w-md">
              <div className="flex items-start gap-2.5">
                <MapPin className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <div className="leading-relaxed space-y-1.5">
                  <div>
                    <strong className="text-white font-medium">Bengaluru Headquarters:</strong> 2nd Floor,
                    100 Feet Road, Indiranagar / The Executive Centre, UB City, Bengaluru, Karnataka
                    560038
                  </div>
                </div>
              </div>

              <div className="flex items-start gap-2.5">
                <Clock className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                <span>
                  <strong className="text-white font-medium">Hours:</strong> Monday – Saturday, 9:00
                  AM – 7:30 PM IST (Site inspections 7 days across all Bengaluru zones)
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-1 border-t border-white/5">
                <div className="flex items-center gap-1.5">
                  <Phone className="w-3.5 h-3.5 text-gold shrink-0" />
                  <a
                    href="tel:+919820184729"
                    className="text-white hover:text-gold transition-colors font-medium"
                  >
                    +91 98201 84729
                  </a>
                </div>

                <div className="flex items-center gap-1.5">
                  <Mail className="w-3.5 h-3.5 text-gold shrink-0" />
                  <a
                    href="mailto:enquiry@interiorsupport.in"
                    className="text-white/80 hover:text-gold transition-colors"
                  >
                    enquiry@interiorsupport.in
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* COLUMN 2: SITE DIRECTORY (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-white/10 pb-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gold font-mono">
                Site Directory
              </h2>
            </div>
            <nav
              aria-label="Footer navigation"
              className="flex flex-col space-y-2 text-xs text-white/75 font-sans"
            >
              <Link to="/" className="hover:text-gold hover:translate-x-0.5 transition-all">
                Home
              </Link>
              <Link to="/about-us" className="hover:text-gold hover:translate-x-0.5 transition-all">
                About Our Firm
              </Link>
              <Link to="/services" className="hover:text-gold hover:translate-x-0.5 transition-all">
                Services Overview
              </Link>
              <Link to="/gallery" className="hover:text-gold hover:translate-x-0.5 transition-all">
                Project Portfolio
              </Link>
              <Link to="/pricing" className="hover:text-gold hover:translate-x-0.5 transition-all">
                Pricing &amp; Rates
              </Link>
              <Link to="/blog" className="hover:text-gold hover:translate-x-0.5 transition-all">
                Journal &amp; Field Guides
              </Link>
              <Link
                to="/get-a-quote"
                className="hover:text-gold hover:translate-x-0.5 transition-all"
              >
                Instant Quote
              </Link>
              <Link
                to="/contact-us"
                className="hover:text-gold hover:translate-x-0.5 transition-all"
              >
                Contact Us
              </Link>
              <Link
                to="/sitemap"
                className="hover:text-gold hover:translate-x-0.5 transition-all"
              >
                Site Index &amp; Map
              </Link>
            </nav>
          </div>

          {/* COLUMN 3: 4 DEDICATED SERVICE PAGES (2 cols on lg) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="border-b border-white/10 pb-2">
              <h2 className="text-xs font-semibold uppercase tracking-widest text-gold font-mono">
                Dedicated Services
              </h2>
            </div>
            <nav
              aria-label="Footer dedicated services"
              className="flex flex-col space-y-2 text-xs text-white/75 font-sans"
            >
              <Link
                to="/services/project-management"
                className="hover:text-gold hover:translate-x-0.5 transition-all"
              >
                Project Management
              </Link>
              <Link
                to="/services/site-inspection-quality-control"
                className="hover:text-gold hover:translate-x-0.5 transition-all"
              >
                Site Inspection &amp; QC
              </Link>
              <Link
                to="/services/boq-execution-verification"
                className="hover:text-gold hover:translate-x-0.5 transition-all"
              >
                BOQ Verification
              </Link>
              <Link
                to="/services/handover-post-sale-support"
                className="hover:text-gold hover:translate-x-0.5 transition-all"
              >
                Handover &amp; Snags
              </Link>
            </nav>
          </div>

          {/* COLUMN 4: ADVISORY CTA (3 cols on lg) */}
          <div className="lg:col-span-3 space-y-4 bg-white/[0.03] p-5 rounded-xs border border-white/10">
            <div>
              <span className="text-[0.68rem] font-mono uppercase tracking-widest text-gold block font-semibold">
                Planning a Fit-out?
              </span>
              <h3 className="font-display text-sm text-white font-medium mt-1">
                Protect Your Budget Before Commencing
              </h3>
              <p className="text-xs text-white/70 leading-relaxed mt-2">
                One technical consultation prevents contractor disputes, unapproved substitutions,
                and inflated variation bills.
              </p>
            </div>

            <div className="flex flex-col gap-2.5 pt-1">
              <Button
                className="w-full bg-gold text-[#141311] hover:bg-gold/90 font-medium text-xs py-2 h-9 shadow-md transition-all justify-center"
                asChild
              >
                <Link to="/get-a-quote">
                  Get an Instant Quote <ArrowRight className="w-3.5 h-3.5 ml-1" />
                </Link>
              </Button>

              <Button
                variant="outline"
                className="w-full bg-transparent border-gold/40 text-gold hover:bg-gold/10 hover:text-white text-xs py-2 h-9 transition-all justify-center"
                asChild
              >
                <Link to="/contact-us">Speak with a Consultant</Link>
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER BOTTOM BAR */}
      <div className="border-t border-white/10 py-5 relative z-10 bg-[#0e0d0c]">
        <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-white/50">
          <div>
            <span>
              © {new Date().getFullYear()} Interior Support Private Limited. All rights reserved.
            </span>
          </div>

          <div className="hidden md:block font-serif italic text-white/40 text-[0.72rem]">
            Right quality. Right execution. Right timeline.
          </div>
        </div>
      </div>
    </footer>
  );
}
