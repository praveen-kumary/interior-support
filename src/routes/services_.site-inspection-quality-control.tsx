import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Camera,
  AlertTriangle,
  CheckSquare,
  ShieldCheck,
  Ruler,
  Layers,
  FileCheck,
  MessageSquare,
  Sparkles,
  Activity,
  Sliders,
  Gauge,
  Droplets,
} from "lucide-react";
import { useState } from "react";

import inspectionPhoto from "@/assets/site-inspection.webp";
import mepLaserPhoto from "@/assets/mep-laser-inspection.webp";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services_/site-inspection-quality-control")({
  component: SiteInspectionServicePage,
  head: () => ({
    meta: [
      {
        title: "Interior Site Inspection & Quality Control Bangalore | Interior Support",
      },
      {
        name: "description",
        content:
          "Independent interior site inspection and quality audits — laser tolerance checks, MEP pressure testing, and vendor milestone validation for residential and commercial interiors across Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "interior site inspection Bangalore, interior quality audit Bengaluru, fit-out inspection Indiranagar, snag inspection Whitefield, interior QA QC Koramangala",
      },
      {
        property: "og:title",
        content: "Interior Site Inspection & Quality Control Bangalore | Interior Support",
      },
      {
        property: "og:description",
        content:
          "Independent milestone inspections catching execution defects while they are still cheap and accessible to fix across Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

interface ToleranceItem {
  discipline: string;
  metric: string;
  standard: string;
  instrument: string;
  riskAvoided: string;
}

const toleranceMatrix: ToleranceItem[] = [
  {
    discipline: "Flooring & Cladding",
    metric: "Italian Marble / Vitrified Tile Lippage",
    standard: "≤ 0.5mm tile-to-tile lippage; 0% hollow voids under hammer tap",
    instrument: "Digital depth gauge & acoustic tapping hammer",
    riskAvoided: "Cracked slabs under furniture load, trip hazards, pooling water",
  },
  {
    discipline: "Civil & Partitions",
    metric: "Drywall & Masonry Plumb",
    standard: "≤ 1.5mm vertical deviation across 3.0m height",
    instrument: "Multi-line 360° optical cross-line laser",
    riskAvoided: "Skewed custom wardrobes, gaps behind skirting, binding door jambs",
  },
  {
    discipline: "Carpentry & Joinery",
    metric: "Timber & Plywood Moisture Content",
    standard: "≤ 12% moisture reading before polish or veneer pressing",
    instrument: "Digital pin-type electronic moisture meter",
    riskAvoided: "Post-monsoon wood warping, veneer blistering, fungal rot in wardrobes",
  },
  {
    discipline: "Concealed MEP",
    metric: "Plumbing Line Hydrostatic Pressure",
    standard: "6–10 bar hydrostatic pressure sustained for 24 continuous hours",
    instrument: "Calibrated hydraulic test pump with digital pressure logger",
    riskAvoided: "Catastrophic concealed leaks after expensive Italian marble is cladded",
  },
  {
    discipline: "HVAC & Drainage",
    metric: "Condensate Drain Gravity Slope",
    standard: "Minimum 1:100 continuous fall without sagging pockets",
    instrument: "Digital optical angle level & smoke tracing test",
    riskAvoided: "AC water overflowing into gypsum false ceilings causing mould & ceiling collapse",
  },
];

const inspectionStages = [
  {
    step: "01",
    phase: "Stage 01: Demolition & Marking",
    title: "Bare-Shell & Setting-Out Audit",
    desc: "Verification of civil layout marks on raw slab and walls against approved architectural plans before partition erection begins.",
    tools: "360° laser measure, chalk line checks, slab level surveys",
  },
  {
    step: "02",
    phase: "Stage 02: Framing & First Fix",
    title: "Stud Plumb & Conduit Routing",
    desc: "Laser checking of partition wall metal studs, electrical box cutouts, and concealed plumbing drop points before closing.",
    tools: "Magnetic digital spirit level, conduit route drawings",
  },
  {
    step: "03",
    phase: "Stage 03: Pre-Closing MEP Concealment",
    title: "Pressure & Insulation Testing",
    desc: "Mandatory hydro-testing of all water lines, insulation thickness verification, and HVAC drain slope checks prior to ceiling boarding.",
    tools: "Hydraulic pressure pump, ultrasonic thickness gauge",
  },
  {
    step: "04",
    phase: "Stage 04: Wet Trades & Tiling",
    title: "Substrate & Lippage Audit",
    desc: "Surface flatness inspection of floor screeds, waterproofing flood test in wet areas (48 hrs), and marble joint alignment.",
    tools: "Moisture meter, electronic feeler gauge, water retention test",
  },
  {
    step: "05",
    phase: "Stage 05: Pre-Handover Finishing",
    title: "120-Point Snagging & Actuation",
    desc: "Audit of joinery gaps, soft-close hardware, silicone bead continuity, paint sheen consistency, and socket earthing balance.",
    tools: "Socket tester, lux meter, digital caliper, punch-list matrix",
  },
];

const inclusions = [
  "Drawing-to-site dimensional verification with precision laser leveling",
  "Milestone-based inspections across civil, MEP, joinery, and finishes",
  "Pre-closing inspections: in-wall plumbing, electrical conduits, and ducting",
  "Waterproofing 48-hour flood test validation in all bathrooms and balconies",
  "Material compliance audits: verifying brand specs, ply grades, and stone lots",
  "Itemized defect log with photographic evidence, severity rating, and directives",
  "Re-inspection visits to verify rectification before contractor billing approvals",
  "Direct liaison with your architect, contractor, and client via WhatsApp",
];

const deliverables = [
  {
    title: "Digital Milestone Inspection Report",
    format: "Issued within 24 hours of visit",
    desc: "Comprehensive photographic documentation detailing every verified zone, identified deviation, and compliance status.",
  },
  {
    title: "Corrective Action Notice (CAN)",
    format: "Formal Contractor Directive",
    desc: "Clear itemized technical instructions issued to the general contractor with drawing references and correction deadlines.",
  },
  {
    title: "Milestone Quality Clearance Certificate",
    format: "Fiduciary Payment Gate Sign-Off",
    desc: "Official authorization confirming work complies with architectural drawings before stage payments are released.",
  },
];

const faqs = [
  {
    q: "Can this inspection service run alongside my current general contractor?",
    a: "Yes. In fact, that is how the majority of our clients engage us. We act as your independent third-party technical auditor. Contractors respect our audits because our findings are grounded strictly in objective architectural drawings, laser tolerances, and IS standards, completely eliminating emotional disputes.",
  },
  {
    q: "What happens if an inspection identifies a critical defect?",
    a: "We immediately document the finding with high-resolution photos, measure the exact millimeter deviation from the drawing, notify you via WhatsApp, and issue a formal Corrective Action Notice to the contractor. We then withhold payment sign-off until a re-inspection confirms the issue is 100% rectified.",
  },
  {
    q: "How many site inspection visits does a typical fit-out require?",
    a: "For a standard 3BHK to 5BHK luxury residence (1,800 to 4,500 sq. ft.), we recommend 8 to 14 milestone visits scheduled at critical transition gates (marking, first fix, MEP hydro-testing, pre-tiling, pre-gypsum boarding, joinery alignment, and final snagging).",
  },
  {
    q: "Do I need to be present on site during the inspections?",
    a: "No. You do not need to take time off work or visit dusty construction sites. We conduct the inspection independently, coordinate with the site contractor on the spot, and deliver an executive photo summary directly to your phone within 24 hours.",
  },
];

function SiteInspectionServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <ScrollMotion />
      <SiteHeader />
      <main id="top" className="subpage service-single-page bg-background text-foreground">
        {/* HERO SECTION */}
        <section className="subpage-hero relative overflow-hidden">
          <img
            src={inspectionPhoto}
            alt="Site inspector using optical laser level to verify wall verticality in luxury interior site"
            className="hero-focal-site-inspection"
            width={1600}
            height={1104}
            fetchPriority="high"
          />
          <div className="subpage-hero-overlay" />
          <div className="subpage-hero-content" data-reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-foreground/70 backdrop-blur-md mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="eyebrow text-gold font-medium tracking-widest text-[0.65rem] m-0">
                Discipline 02 • Quality Assurance
              </p>
            </div>

            <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl leading-[1.04] text-primary-foreground max-w-4xl tracking-tight">
              What’s Drawn
              <br />
              <em>Should Match What’s Built.</em>
            </h1>

            <p className="max-w-2xl text-muted-foreground text-sm sm:text-base mt-4 leading-relaxed font-body">
              We physically inspect at the site level to verify that approved architectural drawings
              are translated into millimeter-accurate execution — catching defects while they are
              still accessible and cheap to correct.
            </p>

            {/* KEY METRICS STRIP */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 w-full max-w-3xl pt-6 border-t border-border/30">
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Depth
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  Laser, Moisture, MEP
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Turnaround
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  <AnimatedCounter value={24} suffix="-Hour Report" />
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Laser Plumb
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  ≤ 1.5mm / 3.0m Limit
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Sign-Off
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  Payment Gateway
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button className="hero-button" asChild>
                <Link to="/get-a-quote">
                  Schedule a Site Inspection <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <a
                href="https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20would%20like%20to%20schedule%20a%20Site%20Inspection%20for%20my%20ongoing%20fit-out."
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button-secondary"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" /> Book via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* TECHNICAL DEFECT & TOLERANCE BENCHMARK MATRIX */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-index justify-center">
              <span>01</span>
              <span className="index-rule" /> Objective Tolerance Benchmarks
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
              We Measure in <em>Millimeters, Not Opinions</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
              Every inspection is conducted against codified Indian interior standards (IS codes)
              using calibrated optical and digital instruments.
            </p>
          </div>

          <div className="overflow-x-auto border border-border/80 bg-card rounded-xs shadow-xs">
            <table className="w-full text-left border-collapse min-w-[680px]">
              <thead>
                <tr className="bg-secondary/60 border-b border-border/80 text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground">
                  <th className="p-4 font-semibold">Discipline</th>
                  <th className="p-4 font-semibold">Critical Metric</th>
                  <th className="p-4 font-semibold text-gold">Permissible Tolerance</th>
                  <th className="p-4 font-semibold">Testing Tool</th>
                  <th className="p-4 font-semibold">Failure Risk Prevented</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-xs">
                {toleranceMatrix.map((row) => (
                  <tr key={row.metric} className="hover:bg-background/80 transition-colors">
                    <td className="p-4 font-display font-medium text-foreground whitespace-nowrap">
                      {row.discipline}
                    </td>
                    <td className="p-4 font-medium text-foreground">{row.metric}</td>
                    <td className="p-4 font-mono font-medium text-gold">{row.standard}</td>
                    <td className="p-4 text-muted-foreground">{row.instrument}</td>
                    <td className="p-4 text-muted-foreground leading-relaxed">{row.riskAvoided}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* 5-STAGE MILESTONE INSPECTION GATEWAY */}
        <section className="py-20 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-index justify-center">
                <span>02</span>
                <span className="index-rule" /> Systematic Audit Gates
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
                Our <em>5-Stage Inspection Process</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
                We inspect at key transition gates before subsequent trades cover up previous work.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-4">
              {inspectionStages.map((stg) => (
                <div
                  key={stg.step}
                  className="p-5 bg-background border border-border/80 hover:border-gold/60 transition-all duration-300 rounded-xs flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <span className="text-gold font-display font-bold text-xl block mb-1">
                      {stg.step}
                    </span>
                    <span className="text-[0.62rem] font-mono text-muted-foreground uppercase tracking-wider block mb-2 font-medium">
                      {stg.phase}
                    </span>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-2 group-hover:text-gold transition-colors">
                      {stg.title}
                    </h3>
                    <p className="text-[0.72rem] text-muted-foreground leading-relaxed">
                      {stg.desc}
                    </p>
                  </div>
                  <div className="mt-4 pt-3 border-t border-border/60 text-[0.68rem] text-muted-foreground">
                    <span className="font-semibold text-foreground block">Tools:</span>
                    <span>{stg.tools}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* REAL INSPECTION REPORT SAMPLE FINDING */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-6 space-y-4">
              <span className="section-index">
                <span>03</span>
                <span className="index-rule" /> Audit Evidence
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground leading-tight">
                How We Document <br />
                <em>Deviations in the Field</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                When an issue is flagged on site, verbal complaints achieve nothing. Contractors
                demand photographic evidence, drawing citations, and exact millimeter variance.
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Every Interior Support inspection log provides clear, unambiguous documentation
                specifying the exact defect, code reference, and contractual rectification window
                before milestone payment clearance is granted.
              </p>
            </div>

            <div className="lg:col-span-6">
              <div className="p-6 bg-card border border-border/80 rounded-xs shadow-md space-y-4 font-mono text-xs">
                <div className="flex items-center justify-between pb-3 border-b border-border/60 text-[0.68rem]">
                  <span className="text-gold font-bold">DEFECT LOG: #QC-MUM-084</span>
                  <span className="px-2 py-0.5 bg-destructive/15 text-destructive rounded-full font-semibold">
                    HIGH RISK • PRE-CLOSING
                  </span>
                </div>
                <div className="space-y-2 text-[0.75rem]">
                  <div>
                    <span className="text-muted-foreground block">Location:</span>
                    <span className="text-foreground font-semibold">
                      Master Suite False Ceiling Zone 2 (Above Fluted Wardrobe)
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Discrepancy:</span>
                    <span className="text-foreground">
                      AC condensate drain line installed with negative slope (-0.5°). Violates
                      drawing MEP-HVAC-04 specification (1:100 continuous gravity fall).
                    </span>
                  </div>
                  <div>
                    <span className="text-muted-foreground block">Identified Risk:</span>
                    <span className="text-destructive font-medium">
                      High probability of water overflowing onto custom walnut veneer paneling after
                      gypsum board closure.
                    </span>
                  </div>
                  <div className="pt-2 border-t border-border/60">
                    <span className="text-gold font-semibold block">Directive Issued:</span>
                    <span className="text-foreground">
                      Contractor to lower drop bracket by 25mm to achieve positive gravity fall.
                      Gypsum boarding suspended until re-inspection sign-off.
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OPTICAL & LASER INSPECTION VISUAL SHOWCASE */}
        <section className="py-16 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="relative overflow-hidden border border-border bg-card group shadow-xl rounded-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
                <img
                  src={mepLaserPhoto}
                  alt="MEP engineer auditing optical laser alignment and concealed ceiling HVAC ducting in luxury high-rise apartment"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1400}
                  height={800}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 hidden lg:block" />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 bg-card">
                <span className="eyebrow eyebrow-dark text-gold font-medium tracking-widest text-xs">
                  Field Tolerance Audit
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground leading-tight">
                  Millimeter Precision <br />
                  <em>Before Concealment</em>
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Concealed ducting, copper piping, and conduit tray routes must pass our laser
                  level deflection audit before false ceiling framing is boarded. Once gypsum or
                  acoustic slats are installed, fixing a slope defect costs 10x more and delays
                  occupancy.
                </p>
                <div className="pt-3 border-t border-border/80 flex items-center justify-between text-xs">
                  <span className="text-foreground font-semibold">Laser Plumb Tolerance</span>
                  <span className="text-gold font-mono font-medium">≤ 1.5mm / 3.0m</span>
                </div>
                <div className="border-t border-border/80 flex items-center justify-between text-xs pt-2">
                  <span className="text-foreground font-semibold">HVAC Slope Verification</span>
                  <span className="text-gold font-mono font-medium">1:100 Gravity Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* INCLUSIONS & DELIVERABLES */}
        <section className="py-20 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              <div className="lg:col-span-7">
                <span className="section-index">
                  <span>04</span>
                  <span className="index-rule" /> Audit Scope
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-3 mb-6">
                  What’s Included in <em>Site Inspection</em>
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                  {inclusions.map((item) => (
                    <div
                      key={item}
                      className="flex items-start gap-2.5 p-3.5 bg-background border border-border/70 rounded-xs"
                    >
                      <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                      <span className="text-xs text-foreground leading-snug">{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-5 space-y-4">
                <span className="section-index">
                  <span>05</span>
                  <span className="index-rule" /> Technical Documentation
                </span>
                <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-3 mb-6">
                  Deliverables <em>You Receive</em>
                </h2>
                <div className="space-y-4">
                  {deliverables.map((deliv) => (
                    <div
                      key={deliv.title}
                      className="p-5 bg-background border border-border rounded-xs"
                    >
                      <span className="text-[0.62rem] font-mono text-gold uppercase tracking-wider block mb-1 font-semibold">
                        {deliv.format}
                      </span>
                      <h3 className="text-sm font-display font-semibold text-foreground mb-1 flex items-center gap-2">
                        <Camera className="w-4 h-4 text-gold" /> {deliv.title}
                      </h3>
                      <p className="text-xs text-muted-foreground leading-relaxed">{deliv.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQS */}
        <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto" data-reveal>
          <div className="text-center mb-12">
            <span className="eyebrow eyebrow-dark">Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-2">
              Frequently Asked <em>Inspection Questions</em>
            </h2>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => (
              <div key={faq.q} className="border border-border bg-card rounded-xs overflow-hidden">
                <button
                  type="button"
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full p-4 sm:p-5 text-left flex items-center justify-between gap-4 font-display font-medium text-sm text-foreground hover:text-gold transition-colors"
                >
                  <span>{faq.q}</span>
                  <ChevronDown
                    className={`w-4 h-4 text-gold flex-shrink-0 transition-transform ${openFaq === idx ? "rotate-180" : ""}`}
                  />
                </button>
                {openFaq === idx && (
                  <div className="px-4 sm:px-5 pb-5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section
          className="subpage-cta py-20 px-4 sm:px-6 bg-foreground text-primary-foreground text-center"
          data-reveal
        >
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="eyebrow eyebrow-dark text-gold text-xs tracking-widest font-mono uppercase font-semibold">
              Catch Errors While It’s Cheap
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium max-w-3xl mx-auto mt-3 leading-tight text-center">
              Schedule a Technical Site Inspection
              <br />
              <em className="text-gold italic font-serif">Before Your Finishes Close.</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed text-center">
              Don’t wait until handover day to discover water slope defects or unlevel walls. Book a
              certified milestone inspection for your residence or commercial office.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                className="hero-button bg-gold text-[#141311] hover:bg-gold/90 font-medium px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/get-a-quote">
                  Book a Site Audit <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button
                className="hero-button-secondary border-white/20 text-white hover:bg-white/10 px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/gallery">View Real Site Inspection Photos</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
