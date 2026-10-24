import { useState, useEffect, useCallback } from "react";
import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Ruler,
  ClipboardCheck,
  Layers,
  FileCheck,
  BadgeCheck,
} from "lucide-react";

import projectSite from "@/assets/interior-project-site.webp";
import mepLaserPhoto from "@/assets/mep-laser-inspection.webp";
import inspectionPhoto from "@/assets/site-inspection.webp";
import boqPhoto from "@/assets/boq-verification.webp";
import handoverPhoto from "@/assets/project-handover.webp";
import { AnimatedCounter } from "@/components/animated-counter";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

const heroSlides = [
  {
    id: "mep-laser-alignment-site",
    image: mepLaserPhoto,
    alt: "Client-side site engineer in hard hat using precision laser leveling device to audit ceiling ducting and MEP runs on active fit-out site",
    focalClass: "hero-focal-mep-laser",
  },
  {
    id: "survey-drawing-coordination",
    image: projectSite,
    alt: "Interior project managers and engineers in safety hard hats reviewing architectural drawings and joinery on active site",
    focalClass: "hero-focal-drawing-review",
  },
  {
    id: "site-tolerance-inspection",
    image: inspectionPhoto,
    alt: "Technical quality inspector auditing partition wall plumb and masonry alignment with spirit level and laser distance measure on site",
    focalClass: "hero-focal-site-inspection",
  },
];

const services = [
  {
    id: "project-management",
    number: "01",
    title: "End-to-End Project Management",
    dedicatedUrl: "/services/project-management" as const,
    tagline: "Total Project Stewardship",
    description:
      "Complete client-side representation coordinating architectural constructability, critical path timelines, and contractor accountability from raw site to handover.",
    image: projectSite,
    alt: "Interior project manager reviewing drawings with the site team",
    features: ["Drawing Coordination", "Vendor Alignment", "Weekly Milestones"],
  },
  {
    id: "site-inspection",
    number: "02",
    title: "Site Inspection & Quality Control",
    dedicatedUrl: "/services/site-inspection-quality-control" as const,
    tagline: "Independent Verification",
    description:
      "Laser-calibrated dimensional audits, MEP pressure checks, and finish inspections that catch hidden defects before they get permanently sealed.",
    image: inspectionPhoto,
    alt: "Site inspector checks a finished wall against the project drawings",
    features: ["Dimension Audits", "Laser Leveling", "Tolerance Checks"],
  },
  {
    id: "boq-verification",
    number: "03",
    title: "BOQ & Execution Verification",
    dedicatedUrl: "/services/boq-execution-verification" as const,
    tagline: "Financial & Scope Control",
    description:
      "Forensic line-by-line auditing against Indian Standard (IS 1200) deduction rules, eliminating inflated variation claims and unapproved material downgrades.",
    image: boqPhoto,
    alt: "A project manager checks the bill of quantities against architectural plans",
    features: ["Line-by-Line Review", "Measured Quantities", "Zero Hidden Costs"],
  },
  {
    id: "handover-support",
    number: "04",
    title: "Handover & Post-Sale Support",
    dedicatedUrl: "/services/handover-post-sale-support" as const,
    tagline: "Defect-Free Closure",
    description:
      "120-point tactile snag audit, photo-documented defect resolution tracking, and complete as-built warranty dossier compilation before final retention release.",
    image: handoverPhoto,
    alt: "A project manager reviews completion documents with a homeowner at handover",
    features: ["Comprehensive Snag List", "Sign-Off Checklist", "Warranty Follow-up"],
  },
];

const pillars = [
  {
    icon: ShieldCheck,
    title: "100% Independent Representation",
    description:
      "Zero contractor margins or vendor referral fees. We protect exclusively your capital and standards.",
  },
  {
    icon: Ruler,
    title: "Sub-Millimeter Site Audits",
    description:
      "Laser-calibrated drawing verification and concealed MEP pressure testing at every critical milestone.",
  },
  {
    icon: ClipboardCheck,
    title: "Zero-Compromise Handover",
    description:
      "Photo-documented defect tracking under raking light. No retention released without verified rectification.",
  },
];

const auditStages = [
  {
    step: "01",
    title: "Civil & Architectural Reconciliation",
    timeline: "Stage 01 • Mobilization & Framing",
    description:
      "Laser verification of structural wall plumblines, 90° corner squareness, and CAD-to-site variance audits before materials are cut.",
    deliverable: "CAD Tolerance & BOQ Variance Audit",
    checks: [
      "Laser plumbline & floor screed level verification",
      "Architectural drawing discrepancy cross-checks",
      "Contractor line-item BOQ quantity verification",
    ],
  },
  {
    step: "02",
    title: "Concealed MEP Infrastructure QA",
    timeline: "Stage 02 • Prior to Ceiling Closure",
    description:
      "Non-destructive testing of hidden electrical, plumbing, and HVAC systems before they are permanently sealed behind drywall or tiles.",
    deliverable: "Concealed MEP Sign-Off Certificate",
    checks: [
      "10-bar hydrostatic plumbing pressure hold test",
      "Electrical conduit depth & circuit load balance",
      "AC refrigerant pressure & trap-door access audit",
    ],
  },
  {
    step: "03",
    title: "Joinery, Stone & Wet-Area Quality",
    timeline: "Stage 03 • Fit-Out Execution",
    description:
      "Physical inspection of raw plywood grades, Italian marble dry-lays, edge-banding adhesion, and multi-day waterproofing flood testing.",
    deliverable: "Mid-Flight Milestone Gate Approval",
    checks: [
      "IS 710 marine plywood cross-section grade audit",
      "Italian marble bookmatching & adhesive bed coverage",
      "72-hour bathroom & balcony waterproofing flood tests",
    ],
  },
  {
    step: "04",
    title: "120-Point Snag-Free Handover",
    timeline: "Stage 04 • Final Defect Resolution",
    description:
      "Exhaustive tactile walkthrough under high-lux raking light. Every blemish, scratch, or hardware misalignment is tracked to 100% resolution.",
    deliverable: "Defect-Free Handover Dossier & Warranties",
    checks: [
      "Raking light paint finish & shadow-line inspection",
      "Sub-millimeter shutter reveals & hardware torque",
      "100% photo-verified contractor snag rectification",
    ],
  },
];

const auditMetrics = [
  { numericValue: 120, suffix: "+", label: "Audit Checkpoints", sub: "Verified across all trades on site" },
  { numericValue: 0, suffix: "%", label: "Contractor Kickbacks", sub: "Strict fiduciary client representation" },
  {
    prefix: "±",
    numericValue: 1.5,
    suffix: "mm",
    decimals: 1,
    label: "Max Allowable Tolerance",
    sub: "Sub-millimeter joinery & level standards",
  },
  { numericValue: 100, suffix: "%", label: "Defect Rectification", sub: "No payments approved until snags close" },
];

export const Route = createFileRoute("/")({
  component: HomePage,
  head: () => ({
    meta: [
      {
        title: "Independent Interior Project Management | Fiduciary PMC | Interior Support",
      },
      {
        name: "description",
        content:
          "Independent client-side interior project management, laser-tolerance site inspections, forensic BOQ verification, and snag-free handover audits in Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "interior project management, independent interior PMC, BOQ verification, site quality inspection, snag list inspection, handover audit, interior fit-out management",
      },
      {
        property: "og:title",
        content: "Independent Interior Project Management | Interior Support",
      },
      {
        property: "og:description",
        content:
          "One fiduciary client-side team coordinating your interior project from site measurement through execution and handover.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify({
          "@context": "https://schema.org",
          "@type": "ProfessionalService",
          name: "Interior Support",
          description:
            "Independent client-side interior project management, site quality inspection, and BOQ auditing.",
          url: "https://interiorsupport.in",
          telephone: "+919820184729",
          address: {
            "@type": "PostalAddress",
            streetAddress: "2nd Floor, 100 Feet Road, Indiranagar",
            addressLocality: "Bengaluru",
            addressRegion: "Karnataka",
            postalCode: "560038",
            addressCountry: "IN",
          },
          areaServed: [
            "Bengaluru",
            "Bangalore",
            "Indiranagar",
            "Whitefield",
            "Koramangala",
            "HSR Layout",
            "Sarjapur Road",
            "Hebbal",
            "Lavelle Road",
            "Sadashivanagar",
            "Bellandur",
            "JP Nagar",
          ],
          priceRange: "₹₹₹",
        }),
      },
    ],
  }),
});

function HomePage() {
  const [activeSlide, setActiveSlide] = useState(0);

  const nextSlide = useCallback(() => {
    setActiveSlide((prev) => (prev + 1) % heroSlides.length);
  }, []);

  useEffect(() => {
    const interval = setInterval(nextSlide, 6500);
    return () => clearInterval(interval);
  }, [nextSlide]);

  return (
    <>
      <ScrollMotion />
      <a className="skip-link" href="#main-content">
        Skip to content
      </a>
      <SiteHeader />

      <main>
        {/* HERO SECTION */}
        <section id="top" className="hero relative overflow-hidden" aria-labelledby="hero-title">
          {/* MULTI-IMAGE WIDE ARCHITECTURAL BACKGROUND ROTATOR */}
          {heroSlides.map((slide, index) => {
            const isActive = index === activeSlide;
            return (
              <img
                key={slide.id}
                className={`hero-image ${slide.focalClass} transition-all duration-1000 ease-out ${
                  isActive
                    ? "opacity-100 scale-100 z-[-2]"
                    : "opacity-0 scale-105 z-[-3] pointer-events-none"
                }`}
                src={slide.image}
                alt={slide.alt}
                width={1600}
                height={1104}
                fetchPriority={index === 0 ? "high" : "low"}
                loading={index === 0 ? "eager" : "lazy"}
              />
            );
          })}
          <div className="hero-shade" aria-hidden="true" />

          <div className="hero-inner" id="main-content" data-reveal>
            <p className="hero-eyebrow flex items-center gap-2">
              <span className="relative flex h-2 w-2" aria-hidden="true">
                <span className="live-pulse-ring absolute inline-flex h-full w-full rounded-full bg-gold opacity-75" />
                <span className="relative inline-flex rounded-full h-2 w-2 bg-gold" />
              </span>
              Independent Interior Project Management
            </p>

            <h1 id="hero-title">
              From measurement
              <br />
              to <em>handover.</em>
            </h1>
            <span className="hero-title-rule" aria-hidden="true" />
            <p className="hero-subtitle">Your Dedicated Client-Side Fiduciary Team.</p>
            <p className="hero-description">
              We protect your capital, design fidelity, and move-in timeline through independent
              site audits, laser-calibrated quality control, and forensic BOQ verification.
            </p>

            <div className="hero-actions">
              <Button className="hero-button group" asChild>
                <Link to="/contact">
                  <span>Book a site consultation</span>
                  <ArrowRight className="w-4 h-4 ml-1.5 arrow-spring" aria-hidden="true" />
                </Link>
              </Button>
              <Button className="hero-button-secondary group" asChild>
                <Link to="/services">
                  <span>Explore our disciplines</span>
                  <ArrowDownRight className="w-4 h-4 ml-1.5 text-gold arrow-spring-down" aria-hidden="true" />
                </Link>
              </Button>
            </div>

            {/* Credibility Pillars Bar */}
            <div className="hero-pillars-grid mt-10 pt-6 border-t border-border/20 grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-3xl">
              {pillars.map((pillar) => {
                const Icon = pillar.icon;
                return (
                  <div
                    key={pillar.title}
                    className="flex items-start gap-3 p-2 rounded-xs hover:bg-white/[0.04] transition-all duration-300 group cursor-default"
                  >
                    <Icon className="w-5 h-5 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 group-hover:text-gold transition-all duration-300" />
                    <div>
                      <h4 className="text-xs font-semibold text-primary-foreground font-display tracking-wide group-hover:text-gold transition-colors duration-200">
                        {pillar.title}
                      </h4>
                      <p className="text-[0.72rem] text-muted-foreground mt-0.5 leading-snug">
                        {pillar.description}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          <a className="hero-scroll" href="#approach">
            <span>Scroll to explore</span>
            <ArrowDownRight aria-hidden="true" />
          </a>

          {/* Minimal Architectural Slide Indicators */}
          <div
            className="hero-slide-indicators absolute bottom-6 right-6 sm:right-8 lg:right-12 z-20 flex items-center gap-2"
            aria-label="Hero background slides"
          >
            {heroSlides.map((slide, idx) => (
              <button
                key={slide.id}
                type="button"
                onClick={() => setActiveSlide(idx)}
                className={`h-1 transition-all duration-500 cursor-pointer rounded-full ${
                  idx === activeSlide
                    ? "w-8 bg-gold shadow-xs"
                    : "w-3 bg-white/30 hover:bg-white/60"
                }`}
                aria-label={`Slide ${idx + 1}`}
              />
            ))}
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section className="approach-section" id="approach" aria-labelledby="approach-title">
          <div className="approach-inner" data-reveal>
            <div className="section-index">
              <span>01</span>
              <span className="index-rule" /> The reason we’re here
            </div>

            <div className="approach-copy">
              <p className="eyebrow eyebrow-dark">Good interiors are built on good oversight.</p>
              <h2 id="approach-title">
                The gaps between
                <br />
                plan and <em>reality</em>
                <br />
                are where projects falter.
              </h2>
              <div className="approach-detail">
                <span className="gold-rule" aria-hidden="true" />
                <p>
                  Interiors rarely falter because of the architectural vision. They break down in
                  the execution void between drawings and site workmanship — where unapproved
                  substitutions occur, variation claims swell, and finish quality degrades. We stand
                  in that gap as your independent fiduciary advocate.
                </p>
              </div>

              {/* Comparison Matrix Teaser */}
              <div className="approach-matrix mt-4 p-5 bg-card border border-border/70 rounded-xs">
                <h4 className="text-xs font-display font-semibold uppercase tracking-wider text-foreground mb-3">
                  Why Independent Oversight Matters
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
                  <div className="p-3.5 bg-secondary/60 rounded-xs border-l-2 border-muted-foreground/40">
                    <span className="text-[0.66rem] font-bold text-muted-foreground uppercase tracking-wider block mb-1">
                      Without Interior Support
                    </span>
                    <p className="text-muted-foreground text-[0.74rem] leading-relaxed">
                      Contractors self-certify their own work. Budget creep goes unnoticed. Defects
                      get plastered over until handover.
                    </p>
                  </div>
                  <div className="p-3.5 bg-gold/10 rounded-xs border-l-2 border-gold">
                    <span className="text-[0.66rem] font-bold text-gold uppercase tracking-wider block mb-1">
                      With Interior Support
                    </span>
                    <p className="text-foreground text-[0.74rem] leading-relaxed">
                      Every milestone requires drawing compliance verification before payment
                      release. Snags are resolved mid-flight.
                    </p>
                  </div>
                </div>
              </div>

              <div className="approach-note-box mt-4 p-4 bg-secondary/40 border-l-2 border-gold rounded-xs">
                <p className="m-0 text-foreground font-display text-sm sm:text-base leading-snug">
                  We verify before we approve. We inspect at the site, not from a report.
                </p>
              </div>
            </div>

            <figure className="approach-image-wrap group">
              <img
                src={inspectionPhoto}
                alt="An inspector carefully checks site work against the project drawings"
                width={912}
                height={1104}
                loading="lazy"
                className="transition-transform duration-500 group-hover:scale-[1.01]"
              />
              <figcaption>
                <span>On-site. At every stage.</span>
                <span>IS — 01</span>
              </figcaption>
            </figure>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section
          className="services-section"
          id="services"
          aria-labelledby="services-title"
          data-reveal
        >
          <div className="services-heading">
            <div>
              <div className="section-index">
                <span>02</span>
                <span className="index-rule" /> A complete view
              </div>
              <h2 id="services-title">
                One team.
                <br />
                <em>Every stage.</em>
              </h2>
            </div>
            <p>
              Four disciplines, brought together under one accountable team — for a more considered
              path from the first measurement to the final walkthrough.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, idx) => (
              <Link
                key={service.number}
                to={service.dedicatedUrl}
                data-reveal
                data-reveal-delay={(idx + 1) * 100}
                className="service-item group relative bg-card/60 p-4 border border-border/60 hover:border-gold/70 transition-all duration-300 shadow-sm hover:shadow-md block cursor-pointer flex flex-col justify-between premium-card-hover"
              >
                <div>
                  <div className="service-image overflow-hidden aspect-[1.45] relative">
                    <img
                      src={service.image}
                      alt={service.alt}
                      width={service.number === "01" ? 1600 : 912}
                      height={1104}
                      loading="lazy"
                      className="transition-transform duration-700 group-hover:scale-105"
                    />
                    <span className="service-number font-display font-semibold group-hover:text-gold transition-colors">
                      {service.number}
                    </span>
                    <div className="absolute bottom-2 right-2 px-2.5 py-1 bg-foreground/80 backdrop-blur-sm text-gold text-[0.62rem] font-medium tracking-wider uppercase border border-gold/30">
                      {service.tagline}
                    </div>
                  </div>

                  <div className="service-copy">
                    <h3 className="group-hover:text-gold transition-colors duration-200">
                      {service.title}
                    </h3>
                    <p>{service.description}</p>

                    <div className="service-features-list flex flex-wrap gap-2 mt-3">
                      {service.features.map((feat) => (
                        <span
                          key={feat}
                          className="inline-flex items-center gap-1 text-[0.62rem] text-muted-foreground bg-secondary px-2 py-0.5 rounded-xs"
                        >
                          <CheckCircle2 className="w-3 h-3 text-gold" /> {feat}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-border/40 flex items-center justify-between">
                  <span className="text-xs font-semibold text-foreground group-hover:text-gold inline-flex items-center gap-1.5 transition-colors">
                    Explore Dedicated Page{" "}
                    <ArrowRight className="w-3.5 h-3.5 text-gold arrow-spring" />
                  </span>
                  <span className="text-[0.66rem] text-muted-foreground font-mono">
                    0{service.number} / 04
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* SECTION 03: FIELD QUALITY GOVERNANCE & 120-POINT AUDIT PROTOCOL */}
        <section
          className="audit-framework-section"
          id="audit-framework"
          aria-labelledby="audit-framework-title"
          data-reveal
        >
          <div className="audit-framework-inner max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="section-index">
              <span>03</span>
              <span className="index-rule" /> Quality Governance Protocol
            </div>

            <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mt-4 mb-10">
              <div>
                <p className="eyebrow eyebrow-dark">Objective Technical Enforcement</p>
                <h2
                  id="audit-framework-title"
                  className="text-3xl sm:text-4xl lg:text-5xl font-display font-medium text-foreground mt-2 leading-[1.08]"
                >
                  The 120-Point Multi-Stage
                  <br />
                  <em className="text-gold italic font-serif">Field Audit Framework</em>
                </h2>
              </div>
              <p className="text-muted-foreground text-xs sm:text-sm max-w-md leading-relaxed">
                We eliminate contractor self-certification. Every milestone requires physical
                cross-verification against approved architectural drawings, IS codes, and
                sub-millimeter tolerances before billing sign-off.
              </p>
            </div>

            {/* 4-Stage Governance Cards Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
              {auditStages.map((stage, idx) => (
                <div
                  key={stage.step}
                  data-reveal
                  data-reveal-delay={(idx + 1) * 100}
                  className="bg-card/70 border border-border/70 hover:border-gold/60 transition-all duration-300 p-5 rounded-xs flex flex-col justify-between shadow-xs hover:shadow-md group premium-card-hover"
                >
                  <div>
                    <div className="flex items-center justify-between pb-3 border-b border-border/40">
                      <span className="text-gold font-display font-bold text-lg group-hover:scale-105 transition-transform inline-block">
                        {stage.step}
                      </span>
                      <span className="text-[0.62rem] font-mono tracking-wider text-muted-foreground uppercase">
                        {stage.timeline}
                      </span>
                    </div>

                    <h3 className="font-display font-semibold text-foreground group-hover:text-gold transition-colors text-base mt-3 leading-snug">
                      {stage.title}
                    </h3>
                    <p className="text-xs text-muted-foreground mt-2 leading-relaxed">
                      {stage.description}
                    </p>

                    <div className="mt-4 pt-3 border-t border-border/30 space-y-1.5">
                      {stage.checks.map((chk) => (
                        <div
                          key={chk}
                          className="flex items-start gap-1.5 text-[0.68rem] text-muted-foreground"
                        >
                          <CheckCircle2 className="w-3 h-3 text-gold flex-shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                          <span>{chk}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-5 pt-3 border-t border-border/50 bg-secondary/30 -mx-5 -mb-5 p-3 px-4 rounded-b-xs">
                    <span className="text-[0.58rem] font-bold uppercase tracking-wider text-muted-foreground block">
                      Gate Deliverable Issued
                    </span>
                    <span className="text-[0.68rem] font-medium text-foreground mt-0.5 block leading-tight">
                      {stage.deliverable}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Field Assurance Metrics Strip with Animated Counter on scroll */}
            <div className="mt-8 p-6 bg-card border border-border/80 rounded-xs grid grid-cols-2 lg:grid-cols-4 gap-6 ambient-card-glow">
              {auditMetrics.map((metric) => (
                <div key={metric.label} className="border-l-2 border-gold/60 pl-4 group">
                  <div className="text-2xl sm:text-3xl font-display font-bold text-foreground group-hover:text-gold transition-colors">
                    {metric.prefix}
                    <AnimatedCounter
                      value={metric.numericValue}
                      suffix={metric.suffix}
                      decimals={metric.decimals || 0}
                      duration={1400}
                    />
                  </div>
                  <div className="text-xs font-semibold text-gold uppercase tracking-wider mt-0.5">
                    {metric.label}
                  </div>
                  <div className="text-[0.68rem] text-muted-foreground mt-0.5">{metric.sub}</div>
                </div>
              ))}
            </div>

            {/* Quick Action Band */}
            <div className="mt-8 flex flex-wrap items-center justify-between gap-4 p-5 bg-secondary/40 border border-border/60 rounded-xs">
              <div className="flex items-center gap-3">
                <BadgeCheck className="w-5 h-5 text-gold flex-shrink-0" />
                <span className="text-xs sm:text-sm text-foreground">
                  Ready to audit an upcoming fit-out or inspect an active site in progress?
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Button
                  variant="outline"
                  size="sm"
                  className="text-xs h-9 border-border hover:border-gold"
                  asChild
                >
                  <Link to="/pricing">Calculate Project Fee</Link>
                </Button>
                <Button
                  size="sm"
                  className="text-xs h-9 bg-gold text-charcoal hover:bg-gold-light"
                  asChild
                >
                  <Link to="/contact">
                    Book Site Consultation <ArrowRight className="w-3.5 h-3.5 ml-1" />
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* PROMISE SECTION */}
        <section className="promise-section" aria-label="Interior Support promise" data-reveal>
          <div className="promise-mark" aria-hidden="true">
            IS<span>.</span>
          </div>
          <p className="promise-label">The standard at every stage</p>
          <h2>
            Right quality.
            <br />
            <em>Right execution.</em>
            <br />
            Right timeline.
          </h2>
          <span className="promise-rule" aria-hidden="true" />
          <p className="promise-support">
            Accuracy in measurement. Clarity in drawings.
            <br />
            Control in execution. Confidence in quality.
          </p>

          <div className="promise-cards-row grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mt-12 w-full text-left">
            <div className="p-6 bg-card/10 backdrop-blur-sm border border-border/20 rounded-xs">
              <span className="text-gold font-display text-lg font-bold">01</span>
              <h4 className="text-primary-foreground font-display font-medium text-base mt-2">
                Drawing-to-Site Rigor
              </h4>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                We confirm that electrical conduit drops, wall alignments, and cabinetry clearances
                match the approved architectural CAD layouts.
              </p>
            </div>

            <div className="p-6 bg-card/10 backdrop-blur-sm border border-border/20 rounded-xs">
              <span className="text-gold font-display text-lg font-bold">02</span>
              <h4 className="text-primary-foreground font-display font-medium text-base mt-2">
                BOQ Quantity Audit
              </h4>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                Before authorizing vendor milestone payouts, our engineers laser-measure installed
                quantities and verify physical material grade stamps against contract
                specifications.
              </p>
            </div>

            <div className="p-6 bg-card/10 backdrop-blur-sm border border-border/20 rounded-xs">
              <span className="text-gold font-display text-lg font-bold">03</span>
              <h4 className="text-primary-foreground font-display font-medium text-base mt-2">
                Uncompromising Snagging
              </h4>
              <p className="text-muted-foreground text-xs mt-1 leading-relaxed">
                We enforce a 120-point tactile snag audit under high-lux raking light. No contractor
                retention payment is released until every micro-defect is verified and closed.
              </p>
            </div>
          </div>
        </section>

        {/* CONTACT TEASER SECTION */}
        <section
          className="contact-section"
          id="contact"
          aria-labelledby="contact-title"
          data-reveal
        >
          <div className="contact-image">
            <img
              src={handoverPhoto}
              alt="Homeowner and project manager walk through the handover documents together"
              width={912}
              height={1104}
              loading="lazy"
            />
          </div>
          <div className="contact-copy">
            <div className="section-index">
              <span>04</span>
              <span className="index-rule" /> Start a conversation
            </div>
            <p className="eyebrow eyebrow-dark">Your interior. Our responsibility.</p>
            <h2 id="contact-title">
              Planning a project —<br />
              or <em>stuck in the middle?</em>
            </h2>
            <p>
              A single 20-minute consultation provides immediate clarity on your drawing tolerances,
              vendor contracts, and budget exposure. We provide decisive fiduciary direction at
              every stage of your fit-out.
            </p>

            <div className="flex flex-wrap items-center gap-4 mt-6">
              <Button className="contact-button" asChild>
                <Link to="/contact">
                  Get in touch <ArrowRight className="w-4 h-4 ml-1.5" aria-hidden="true" />
                </Link>
              </Button>
              <a
                href="https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20would%20like%20to%20discuss%20my%20interior%20project."
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-foreground hover:text-gold transition-colors py-3 px-4 border border-border hover:border-gold"
              >
                Chat on WhatsApp <ArrowRight className="w-3.5 h-3.5 text-gold" />
              </a>
            </div>

            <p className="contact-disclaimer">
              Reach out to begin a confidential consultation with Interior Support.
            </p>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
