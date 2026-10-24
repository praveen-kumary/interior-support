import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  Clock,
  FileSpreadsheet,
  ShieldCheck,
  Users,
  Award,
  Calendar,
  Layers,
  FileText,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  BarChart3,
  TrendingDown,
} from "lucide-react";
import { useState } from "react";

import mepLaserPhoto from "@/assets/mep-laser-inspection.jpg";
import projectSite from "@/assets/interior-project-site.jpg";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services_/project-management")({
  component: ProjectManagementServicePage,
  head: () => ({
    meta: [
      {
        title: "End-to-End Interior Project Management | Fiduciary PMC | Interior Support",
      },
      {
        name: "description",
        content:
          "Client-side interior project management with transparent milestone governance, daily site audits, and strict fiduciary quality control for residential and commercial fit-outs.",
      },
      {
        name: "keywords",
        content:
          "interior project management, independent interior PMC, fit-out project manager, interior project coordination, milestone audits, fiduciary quality control",
      },
      {
        property: "og:title",
        content: "Interior Project Management Services | Interior Support",
      },
      {
        property: "og:description",
        content:
          "One fiduciary client-side team coordinating your interior project from site measurement through execution and handover.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

interface ProcessStage {
  step: string;
  duration: string;
  title: string;
  desc: string;
  onSiteVerification: string;
  deliverableIssued: string;
}

const processStages: ProcessStage[] = [
  {
    step: "01",
    duration: "Days 1–7",
    title: "Bare-Shell Laser Audit & Civil Baselines",
    desc: "We physically measure the raw site with high-precision optical laser distance meters, auditing beam drops, floor levels, masonry plumb, and service conduit entries before any design or joinery commitments lock in.",
    onSiteVerification:
      "Masonry verticality check, column offsets, slab floor level variance mapping",
    deliverableIssued: "As-Built Dimension Audit Report & MEP Entry Survey",
  },
  {
    step: "02",
    duration: "Days 8–21",
    title: "Design Constructability & MEP Clash Detection",
    desc: "We cross-reference architectural drawings with actual site geometry. We verify ducting paths, false ceiling drops, plumbing trap slopes, and joinery clearances to eliminate costly site conflicts.",
    onSiteVerification:
      "HVAC return duct clearances, plumbing shaft alignments, structural column reveals",
    deliverableIssued: "Technical Feasibility Matrix & Clash Detection Memo",
  },
  {
    step: "03",
    duration: "Days 22–30",
    title: "Critical Path Scheduling & Procurement Gates",
    desc: "We establish a milestone-based Master Gantt schedule with trade dependencies, lead times for custom stone and imported fittings, and contractor payment clearance gates tied strictly to verified progress.",
    onSiteVerification:
      "Long-lead material availability, sample lot batch approvals, vendor site-readiness",
    deliverableIssued: "Approved Master Execution Gantt & Milestone Payment Protocol",
  },
  {
    step: "04",
    duration: "Days 31–Finishing",
    title: "Active Multi-Trade On-Site Supervision",
    desc: "Our project superintendents maintain a direct presence on site. We coordinate civil modifications, metal stud framing, plumbing pressure tests, electrical conduit runs, and modular carpentry sequencing.",
    onSiteVerification:
      "Daily trade handover audits, safety protocols, dimensional accuracy at framing",
    deliverableIssued: "Weekly Photographic Progress Pack & 14-Day Lookahead Schedule",
  },
  {
    step: "05",
    duration: "Ongoing at Milestones",
    title: "Stage-Gate Quality Audits & Payment Verification",
    desc: "No contractor milestone payment is released without our independent technical sign-off. We verify that billed line items match physical on-site work and approved technical specifications.",
    onSiteVerification:
      "Laser level alignment checks, moisture testing (<12%), contractor running bill audit",
    deliverableIssued: "Signed Milestone Payment Clearance Certificate",
  },
  {
    step: "06",
    duration: "Final 15 Days",
    title: "120-Point Snag Audit & Defect-Free Handover",
    desc: "We conduct exhaustive multi-trade inspections across every surface, shutter, fixture, and circuit. We hold back contractor retention funds until 100% of punch-list items are verified closed.",
    onSiteVerification:
      "Joinery alignment, cove lighting lux levels, plumbing leak check, hardware latching",
    deliverableIssued: "Handover Dossier (As-Built CAD, Warranties, Signed Snag Clearance)",
  },
];

const comparisonData = [
  {
    metric: "Accountability Structure",
    without:
      "Fragmented: Designer, contractor, and vendors blame each other for delays and rework.",
    withSupport:
      "Singular fiduciary accountability: One senior project management team owns the schedule, cost, and quality.",
  },
  {
    metric: "Billing & Variations",
    without:
      "Contractor submits informal verbal change orders and inflated running bills without proof.",
    withSupport:
      "Formal change order gateway: Every variation requires prior written justification and BOQ rate verification.",
  },
  {
    metric: "Schedule Enforcement",
    without: "Estimated dates repeatedly slip by 2–5 months with excuses about trade dependencies.",
    withSupport:
      "Rigorous Critical Path tracking with 14-day lookahead and contractor milestone liquidated damages.",
  },
  {
    metric: "Client Time Commitment",
    without:
      "15–25 hours per week firefighting vendor calls, site disputes, and material confusion.",
    withSupport:
      "30-minute weekly photo briefing: You stay in control without spending weekends on site.",
  },
];

const scopeCategories = [
  {
    title: "Pre-Execution Governance",
    icon: Calendar,
    items: [
      "Bare-shell laser dimension audit and structural column offset mapping",
      "Architectural CAD constructability and MEP clash detection audit",
      "Critical path Master Gantt chart with vendor dependency sequencing",
      "Tender rate comparison and contractor scope demarcation",
    ],
  },
  {
    title: "Active Site Supervision",
    icon: Users,
    items: [
      "Daily on-site superintendent coordination across 7 specialist trades",
      "Weekly trade lookahead alignment meetings preventing site blockages",
      "Material lot inspection: verifying stone batches, veneers, and hardware",
      "Comprehensive weekly photographic executive progress reports",
    ],
  },
  {
    title: "Quality & Payment Governance",
    icon: ShieldCheck,
    items: [
      "Stage-gate milestone inspections before trades close work",
      "Independent contractor running bill verification before fund disbursement",
      "120-point pre-handover punch-list audit and snag rectification tracking",
      "Final handover package collation: As-built drawings, warranties, paint codes",
    ],
  },
];

const deliverables = [
  {
    title: "Approved Master Execution Schedule",
    format: "Interactive Gantt Chart + PDF",
    desc: "Stage-by-stage critical path timeline with vendor commitments, procurement lead times, and milestone payment gates.",
  },
  {
    title: "Weekly Photographic Audit Pack",
    format: "Structured Weekly Digital Dossier",
    desc: "High-resolution photo evidence comparing site progress against milestone targets, flagging risks before delays escalate.",
  },
  {
    title: "Milestone Payment Clearance Certificates",
    format: "Formal Fiduciary Cost Sign-Off",
    desc: "Itemized verification certifying that billed quantities match physically installed work before your funds are disbursed.",
  },
  {
    title: "Comprehensive Handover Binder",
    format: "Physical Leather Dossier + Cloud Vault",
    desc: "Full as-built CAD drawings, warranty cards, fixture operation manuals, paint shade codes, and signed snag certificates.",
  },
];

const faqs = [
  {
    q: "How is interior project management different from hiring a general contractor?",
    a: "A general contractor executes physical labour and inherently benefits financially from variations, material markups, and rushed work. A project manager acts strictly as your independent fiduciary advocate — coordinating the designer, verifying contractor execution against architectural drawings, auditing bills, and holding all trades accountable to strict tolerances.",
  },
  {
    q: "Can Interior Support manage a project alongside my existing designer or architect?",
    a: "Yes. In fact, most architects and interior designers welcome our involvement. They focus on spatial aesthetics, material palettes, and bespoke curation; we ensure their creative drawings are translated accurately on site without contractor substitutions, budget drift, or execution compromises.",
  },
  {
    q: "How frequently will I receive updates on site progress?",
    a: "You receive a comprehensive weekly photographic report detailing completed milestones, current activities, and upcoming trade handoffs. In addition, our site leads communicate real-time site confirmations and immediate queries directly through a dedicated client WhatsApp channel.",
  },
  {
    q: "What is your pricing model for End-to-End Project Management?",
    a: "We offer two transparent pricing structures based on project scale: a predictable monthly management retainer (typically ₹50,000/mo to ₹1,35,000/mo for residential fit-outs) or a percentage of project value (4% to 6% of verified interior scope). We accept zero contractor commissions or vendor kickbacks.",
  },
];

function ProjectManagementServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <ScrollMotion />
      <SiteHeader />
      <main id="top" className="subpage service-single-page bg-background text-foreground">
        {/* HERO SECTION */}
        <section className="subpage-hero relative overflow-hidden">
          <img
            src={projectSite}
            alt="Interior project manager reviewing architectural drawings with site leads in luxury apartment"
            width={1600}
            height={1104}
            fetchPriority="high"
          />
          <div className="subpage-hero-overlay" />
          <div className="subpage-hero-content" data-reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-foreground/70 backdrop-blur-md mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="eyebrow text-gold font-medium tracking-widest text-[0.65rem] m-0">
                Discipline 01 • End-to-End Stewardship
              </p>
            </div>

            <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl leading-[1.04] text-primary-foreground max-w-4xl tracking-tight">
              One Accountable Team,
              <br />
              <em>Start to Finish.</em>
            </h1>

            <p className="max-w-2xl text-muted-foreground text-sm sm:text-base mt-4 leading-relaxed font-body">
              From raw site measurement and drawing coordination to active trade governance,
              milestone billing verification, and defect-free handover. We take complete ownership
              of your timeline, craftsmanship, and budget.
            </p>

            {/* KEY METRICS STRIP */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 w-full max-w-3xl pt-6 border-t border-border/30">
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Model
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  Fiduciary PM
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Timeline
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  <AnimatedCounter value={90} />–<AnimatedCounter value={240} suffix=" Days" />
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Governance
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  <AnimatedCounter value={7} suffix=" Trades Coordinated" />
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Conflict Policy
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  0% Vendor Kickbacks
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button className="hero-button" asChild>
                <Link to="/get-a-quote">
                  Get a Project Management Quote <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <a
                href="https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20am%20interested%20in%20End-to-End%20Project%20Management%20for%20my%20fit-out."
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button-secondary"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" /> Discuss on WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* COMPARISON MATRIX: THE FIDUCIARY DIFFERENCE */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-index justify-center">
              <span>01</span>
              <span className="index-rule" /> Why Engage Independent PM
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
              The Cost of Fragmentation vs <em>Dedicated Stewardship</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
              Traditional interior fit-outs fail in the coordination gaps between designers,
              contractors, and vendors. Here is how independent stewardship protects your capital.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {comparisonData.map((item, idx) => (
              <div
                key={item.metric}
                className="p-6 sm:p-7 bg-card border border-border/80 hover:border-gold/50 transition-all rounded-xs shadow-xs"
              >
                <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                  <h3 className="font-display font-semibold text-base text-foreground flex items-center gap-2">
                    <span className="text-xs font-mono text-gold font-bold">0{idx + 1}.</span>{" "}
                    {item.metric}
                  </h3>
                </div>
                <div className="space-y-4">
                  <div className="p-3.5 bg-background border border-destructive/25 rounded-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider font-semibold text-destructive flex items-center gap-1.5 mb-1">
                      <AlertCircle className="w-3.5 h-3.5" /> Traditional Fragmented Fit-Out
                    </span>
                    <p className="text-xs text-muted-foreground leading-relaxed">{item.without}</p>
                  </div>
                  <div className="p-3.5 bg-background border border-gold/30 rounded-xs">
                    <span className="text-[0.62rem] uppercase tracking-wider font-semibold text-gold flex items-center gap-1.5 mb-1">
                      <CheckCircle2 className="w-3.5 h-3.5" /> With Interior Support Stewardship
                    </span>
                    <p className="text-xs text-foreground font-medium leading-relaxed">
                      {item.withSupport}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 6-STAGE CRITICAL PATH TIMELINE */}
        <section className="py-20 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-index justify-center">
                <span>02</span>
                <span className="index-rule" /> Systematic Execution
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
                Our <em>6-Stage Management Process</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
                Every project runs on a structured critical path timeline with milestone
                verification gates before money is released.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {processStages.map((stg) => (
                <div
                  key={stg.step}
                  className="p-6 bg-background border border-border/80 hover:border-gold/60 transition-all duration-300 rounded-xs flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-gold font-display font-bold text-2xl group-hover:scale-105 transition-transform">
                        {stg.step}
                      </span>
                      <span className="text-[0.68rem] font-mono font-medium px-2.5 py-0.5 rounded-full bg-secondary border border-border text-muted-foreground">
                        {stg.duration}
                      </span>
                    </div>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-gold transition-colors">
                      {stg.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-body">
                      {stg.desc}
                    </p>
                  </div>

                  <div className="mt-6 pt-4 border-t border-border/60 space-y-2 text-[0.72rem]">
                    <div>
                      <span className="text-foreground font-semibold block">On-Site Check:</span>
                      <span className="text-muted-foreground">{stg.onSiteVerification}</span>
                    </div>
                    <div>
                      <span className="text-gold font-semibold block">Deliverable Issued:</span>
                      <span className="text-foreground font-medium">{stg.deliverableIssued}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* STRUCTURED SCOPE LEDGER */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-index justify-center">
              <span>03</span>
              <span className="index-rule" /> Scope Ledger
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
              What’s Included in <em>End-to-End Project Management</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
              Complete administrative, technical, and on-site oversight across the full fit-out
              lifecycle.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {scopeCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-6 bg-card border border-border/80 rounded-xs flex flex-col justify-between"
                >
                  <div>
                    <div className="w-10 h-10 rounded-xs bg-gold/10 border border-gold/30 flex items-center justify-center text-gold mb-4">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-base font-display font-semibold text-foreground mb-4">
                      {cat.title}
                    </h3>
                    <ul className="space-y-3">
                      {cat.items.map((item) => (
                        <li
                          key={item}
                          className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                        >
                          <Check className="w-4 h-4 text-gold flex-shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              );
            })}
          </div>
        </section>

        {/* ACTIVE FIT-OUT COORDINATION & MILLWORK SYNCHRONIZATION SHOWCASE */}
        <section className="py-16 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="relative overflow-hidden border border-border bg-card group shadow-xl rounded-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
                <img
                  src={mepLaserPhoto}
                  alt="Site engineer using precision laser leveling device to audit ceiling joinery and MEP runs in high-rise fit-out"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1400}
                  height={800}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 hidden lg:block" />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 bg-card">
                <span className="eyebrow eyebrow-dark text-gold font-medium tracking-widest text-xs">
                  Active Site Supervision
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground leading-tight">
                  Multi-Trade <br />
                  <em>Synchronization</em>
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  Joinery fabrication, stone cladding, and electrical cabling cannot operate in
                  isolation. Our site superintendents run weekly trade lookahead meetings to ensure
                  carpentry framing accounts for hidden conduit drops, plumbing lines, and appliance
                  clearances before fabrication locks.
                </p>
                <div className="pt-3 border-t border-border/80 flex items-center justify-between text-xs">
                  <span className="text-foreground font-semibold">Critical Path Adherence</span>
                  <span className="text-gold font-mono font-medium">94.8% On-Time Handovers</span>
                </div>
                <div className="border-t border-border/80 flex items-center justify-between text-xs pt-2">
                  <span className="text-foreground font-semibold">Rework Prevention</span>
                  <span className="text-gold font-mono font-medium">
                    Zero Cascading Trade Delays
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CLIENT DELIVERABLES DOSSIER */}
        <section className="py-20 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-index justify-center">
                <span>04</span>
                <span className="index-rule" /> Physical Documentation
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
                Deliverables <em>You Receive in Writing</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
                We never rely on verbal promises. Every milestone yields concrete, audit-grade
                deliverables.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((deliv) => (
                <div
                  key={deliv.title}
                  className="p-6 bg-background border border-border/80 rounded-xs flex flex-col justify-between hover:border-gold/60 transition-colors"
                >
                  <div>
                    <span className="text-[0.62rem] font-mono text-gold uppercase tracking-wider block mb-2 font-semibold">
                      {deliv.format}
                    </span>
                    <h3 className="font-display font-semibold text-sm text-foreground mb-2 leading-snug">
                      {deliv.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed">{deliv.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FREQUENTLY ASKED QUESTIONS */}
        <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto" data-reveal>
          <div className="text-center mb-12">
            <span className="eyebrow eyebrow-dark">Clarifications</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-2">
              Common Questions About <em>Project Management</em>
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

        {/* CLOSING SERVICE CTA */}
        <section
          className="subpage-cta py-20 px-4 sm:px-6 bg-foreground text-primary-foreground text-center"
          data-reveal
        >
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="eyebrow eyebrow-dark text-gold text-xs tracking-widest font-mono uppercase font-semibold">
              Take Ownership of Your Space
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium max-w-3xl mx-auto mt-3 leading-tight text-center">
              Ready for a Project Managed With
              <br />
              <em className="text-gold italic font-serif">Complete Fiduciary Accountability?</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed text-center">
              Whether you are planning a luxury penthouse fit-out or a corporate headquarters, let's
              discuss how independent project management protects your time and capital.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                className="hero-button bg-gold text-[#141311] hover:bg-gold/90 font-medium px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/get-a-quote">
                  Schedule a Consultation <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button
                className="hero-button-secondary border-white/20 text-white hover:bg-white/10 px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/pricing">Calculate Project Retainer</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
