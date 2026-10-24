import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  ShieldCheck,
  ClipboardList,
  AlertTriangle,
  FileCheck,
  Award,
  Layers,
  Sparkles,
  HelpCircle,
  FileText,
  CheckCircle2,
  Lock,
  MessageSquare,
  Wrench,
  Droplets,
  Zap,
} from "lucide-react";
import { useState } from "react";

import handoverPhoto from "@/assets/project-handover.webp";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services_/handover-post-sale-support")({
  component: HandoverSupportPage,
  head: () => ({
    meta: [
      {
        title: "Interior Handover & Snag List Inspection | Interior Support",
      },
      {
        name: "description",
        content:
          "Independent pre-handover snag list inspection across Bengaluru. 120-point defect audit, hollow tile checks, and contractor defect closure before final payment.",
      },
      {
        name: "keywords",
        content:
          "interior handover snag list, pre-handover snag inspection, snagging audit Bangalore, apartment handover check, villa handover audit, snag inspection Whitefield",
      },
      {
        property: "og:title",
        content: "Handover & Post-Sale Support | Interior Support",
      },
      {
        property: "og:description",
        content:
          "Don’t sign off on your handover with unresolved snags. We verify every finish, shutter, and fixture before you release final payment.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

interface SnagCategory {
  title: string;
  pointsCount: string;
  icon: typeof Wrench;
  description: string;
  checkpoints: string[];
}

const snagCategories: SnagCategory[] = [
  {
    title: "Civil, Stone & Marble Cladding",
    pointsCount: "36 Checkpoints",
    icon: Layers,
    description:
      "Inspection of tile flatness, marble polish consistency, and perimeter grout sealing.",
    checkpoints: [
      "Tile-to-tile lippage tolerance verified to ≤ 0.5mm across all rooms",
      "Marble surface inspected under oblique light for buffer swirl marks and scratches",
      "100% hollow-sound tap testing to detect unbonded floor and wall tiles",
      "Perimeter skirting expansion joints sealed with color-matched flexible silicone",
    ],
  },
  {
    title: "Carpentry, Joinery & Millwork",
    pointsCount: "34 Checkpoints",
    icon: Wrench,
    description: "Audit of cabinet alignment, edge-banding adhesion, and hardware actuation.",
    checkpoints: [
      "Wardrobe and kitchen shutters verified for consistent 2mm reveal margins",
      "Soft-close damping pistons tested on every drawer and door hinge",
      "Zero bubbling, peeling, or rough edges on 1mm/2mm PVC edge-banding",
      "Veneer and laminate grain continuity cross-checked across adjacent panels",
    ],
  },
  {
    title: "MEP, Electrical & Automation",
    pointsCount: "28 Checkpoints",
    icon: Zap,
    description:
      "Verification of electrical polarity, load balance, dimmer balance, and HVAC cooling.",
    checkpoints: [
      "Live polarity, neutral, and ground resistance tested across every power outlet",
      "Cove lighting LED strips verified for color temperature uniformity and zero dark spots",
      "HVAC airflow balance and digital thermostat temperature drops verified in all zones",
      "Switch plates, touch panels, and sensor faceplates laser-leveled and flush-fitted",
    ],
  },
  {
    title: "Plumbing, Fixtures & Wet Areas",
    pointsCount: "22 Checkpoints",
    icon: Droplets,
    description: "Testing gravity drainage slopes, water pressure balance, and sanitary seals.",
    checkpoints: [
      "Shower drain gravity fall tested with water flood to ensure zero standing puddles",
      "Concealed bottle traps and basin waste couplings pressure-tested for zero weeping",
      "Anti-fungal sanitary silicone seals verified around vanity basins and shower enclosures",
      "Hot/cold water mixer orientation and diverter switch mechanisms tested under load",
    ],
  },
];

const retentionProtocol = [
  {
    step: "01",
    title: "Contractual Retention Fund (5%–10%)",
    desc: "From project initiation, we ensure your contractor contract includes a mandatory 5% to 10% retention holdback, payable only after comprehensive snag clearance.",
  },
  {
    step: "02",
    title: "Independent Pre-Handover Audit",
    desc: "Our technical inspectors spend a full day auditing every room with our 120-point protocol, logging all defects into an itemized visual matrix with closure dates.",
  },
  {
    step: "03",
    title: "14-Day Mandatory Rectification Window",
    desc: "The general contractor is issued our official Corrective Action Notice and given a strict 10–14 day window to rectify all snags before final move-in.",
  },
  {
    step: "04",
    title: "Signed Clearance & Final Fund Release",
    desc: "We conduct a re-inspection walkthrough. Final retention funds are authorized for disbursement only after 100% of snags are certified closed.",
  },
];

const deliverables = [
  {
    title: "Itemized Pre-Handover Snagging Matrix",
    format: "Structured Priority Matrix + Photos",
    desc: "Room-by-room, trade-by-trade defect log categorized by severity (Critical, Functional, Cosmetic) with contractor resolution deadlines.",
  },
  {
    title: "As-Built Drawing & Conduit Vault",
    format: "Digital CAD & Cloud Archive",
    desc: "Accurate as-built drawings detailing the exact physical coordinates of concealed electrical conduits, plumbing valves, and structural beams.",
  },
  {
    title: "Warranty & Appliance Master Registry",
    format: "Collated Physical Dossier + PDF",
    desc: "All equipment warranties, pump manuals, stone care guidelines, hardware serial numbers, and exact paint shade codes filed in one binder.",
  },
  {
    title: "Signed Snag Clearance Certificate",
    format: "Fiduciary Final Release Document",
    desc: "Formal technical sign-off enabling safe, dispute-free release of final contractor retention funds.",
  },
];

const faqs = [
  {
    q: "Why is a pre-handover snag audit so critical?",
    a: "Handover is the single moment where clients lose all commercial leverage. Once the final 10% or 15% settlement is disbursed, contractors have virtually zero incentive to return for minor paint touch-ups, misaligned drawers, or slow shower drains. Holding retention until our independent snag clearance certificate is signed guarantees accountability.",
  },
  {
    q: "What is the difference between a cosmetic defect and a functional snag?",
    a: "A cosmetic defect (minor paint scuff, polish swirl mark) impacts aesthetics but doesn’t prevent occupancy. A functional snag (reversed drain slope, ungrounded power socket, binding wardrobe slider, leaking diverter) directly threatens long-term safety, durability, and convenience. We categorize each snag so critical issues take immediate priority.",
  },
  {
    q: "Can you help if my interior project is already stalled in a contractor dispute?",
    a: "Yes. We offer specialized Escalation & Mediation Audits. We conduct an objective forensic assessment of completed work, verify unapproved variations, establish root-cause responsibility, and chair a structured handover resolution meeting to close the project cleanly without court proceedings.",
  },
  {
    q: "How long does a pre-handover snag inspection take?",
    a: "For an average 2,000 to 4,500 sq. ft. luxury residence, our senior engineers spend 6 to 8 hours on site inspecting every single fixture, circuit, and surface. The complete photographic snag list is compiled and delivered within 24 hours.",
  },
];

function HandoverSupportPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <ScrollMotion />
      <SiteHeader />
      <main id="top" className="subpage service-single-page bg-background text-foreground">
        {/* HERO SECTION */}
        <section className="subpage-hero relative overflow-hidden">
          <img
            src={handoverPhoto}
            alt="Interior project manager reviewing final handover documentation and snag clearance with homeowner"
            className="hero-focal-handover"
            width={1600}
            height={1104}
            fetchPriority="high"
          />
          <div className="subpage-hero-overlay" />
          <div className="subpage-hero-content" data-reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-foreground/70 backdrop-blur-md mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="eyebrow text-gold font-medium tracking-widest text-[0.65rem] m-0">
                Discipline 04 • Handover & Post-Sale
              </p>
            </div>

            <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl leading-[1.04] text-primary-foreground max-w-4xl tracking-tight">
              The Standard of a True Handover:
              <br />
              <em>Defect-Free Peace of Mind.</em>
            </h1>

            <p className="max-w-2xl text-muted-foreground text-sm sm:text-base mt-4 leading-relaxed font-body">
              Move into your finished space with complete confidence. We systematically inspect over
              120 points across civil, carpentry, plumbing, and electrical before you release final
              payment to your contractor.
            </p>

            {/* KEY METRICS STRIP */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 w-full max-w-3xl pt-6 border-t border-border/30">
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Protocol
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  <AnimatedCounter value={120} suffix="+ Point Multi-Trade" />
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Leverage
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  5%–10% Retention Guard
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Dossier
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  As-Built CAD &amp; Warranties
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Coverage
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  <AnimatedCounter value={90} suffix="-Day Snag Closure" />
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button className="hero-button" asChild>
                <Link to="/get-a-quote">
                  Book a Pre-Handover Snag Audit <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <a
                href="https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20am%20approaching%20handover%20and%20need%20an%20independent%20Snag%20List%20audit."
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button-secondary"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" /> Inquire via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* 120-POINT MULTI-TRADE SNAG AUDIT BREAKDOWN */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-index justify-center">
              <span>01</span>
              <span className="index-rule" /> Comprehensive Inspection Scope
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
              What We Audit Before You <em>Release Final Payment</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
              Our 120-point protocol covers every millimeter of visible finishes, mechanical
              systems, and functional hardware.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {snagCategories.map((cat) => {
              const Icon = cat.icon;
              return (
                <div
                  key={cat.title}
                  className="p-6 sm:p-7 bg-card border border-border/80 hover:border-gold/60 transition-all rounded-xs shadow-xs"
                >
                  <div className="flex items-center justify-between mb-4 pb-3 border-b border-border/60">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xs bg-gold/10 border border-gold/30 flex items-center justify-center text-gold">
                        <Icon className="w-4 h-4" />
                      </div>
                      <h3 className="font-display font-semibold text-base text-foreground">
                        {cat.title}
                      </h3>
                    </div>
                    <span className="text-[0.68rem] font-mono font-medium px-2.5 py-0.5 rounded-full bg-secondary border border-border text-gold">
                      {cat.pointsCount}
                    </span>
                  </div>

                  <p className="text-xs text-muted-foreground mb-4 leading-relaxed font-body">
                    {cat.description}
                  </p>

                  <ul className="space-y-2.5">
                    {cat.checkpoints.map((pt) => (
                      <li
                        key={pt}
                        className="flex items-start gap-2.5 text-xs text-foreground/90 leading-snug"
                      >
                        <Check className="w-3.5 h-3.5 text-gold flex-shrink-0 mt-0.5" />
                        <span>{pt}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              );
            })}
          </div>
        </section>

        {/* THE RETENTION PROTOCOL */}
        <section className="py-20 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-index justify-center">
                <span>02</span>
                <span className="index-rule" /> Financial Protection
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
                How Retention Keeps You <em>In Complete Control</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
                A structured four-step methodology ensuring contractors take snag rectification
                seriously.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {retentionProtocol.map((item) => (
                <div
                  key={item.step}
                  className="p-6 bg-background border border-border/80 hover:border-gold/60 transition-colors rounded-xs flex flex-col justify-between group shadow-xs"
                >
                  <div>
                    <span className="text-gold font-display font-bold text-2xl block mb-2 group-hover:scale-105 transition-transform">
                      {item.step}
                    </span>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2 group-hover:text-gold transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-muted-foreground leading-relaxed font-body">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* COMPLETED LUXURY RESIDENCE SHOWCASE */}
        <section className="py-16 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="relative overflow-hidden border border-border bg-card group shadow-xl rounded-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
                <img
                  src={handoverPhoto}
                  alt="Interior Support project manager conducting final handover walkthrough and warranty dossier delivery with homeowner"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1400}
                  height={800}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 hidden lg:block" />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 bg-card">
                <span className="eyebrow eyebrow-dark text-gold font-medium tracking-widest text-xs">
                  The Handover Standard
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground leading-tight">
                  Move In With <br />
                  <em>Zero Unresolved Defects</em>
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  A successful interior handover isn’t just getting keys from a builder. It’s
                  walking into a space where every shutter closes flush, cove lighting is balanced
                  to architectural specifications, electrical load points are verified, and
                  warranties are filed in your hands.
                </p>
                <div className="pt-3 border-t border-border/80 flex items-center justify-between text-xs">
                  <span className="text-foreground font-semibold">Snag Rectification Rate</span>
                  <span className="text-gold font-mono font-medium">
                    100% Pre-Settlement Closure
                  </span>
                </div>
                <div className="border-t border-border/80 flex items-center justify-between text-xs pt-2">
                  <span className="text-foreground font-semibold">Retention Protection</span>
                  <span className="text-gold font-mono font-medium">5–10% Held Until Verified</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* ESCALATION RESOLUTION BANNER */}
        <section className="py-14 bg-foreground text-primary-foreground border-y border-border/20">
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row items-center justify-between gap-8">
              <div className="space-y-2 max-w-2xl">
                <span className="text-xs uppercase font-semibold tracking-widest text-gold flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> Dispute &amp; Escalation Support
                </span>
                <h3 className="text-2xl font-display font-medium text-primary-foreground">
                  Is your project currently stalled, delayed, or in conflict?
                </h3>
                <p className="text-xs md:text-sm text-primary-foreground/75 leading-relaxed">
                  We conduct unbiased technical forensic audits to establish root-cause
                  responsibility, audit unapproved works, and mediate structured closure so you can
                  conclude your fit-out without endless legal friction.
                </p>
              </div>
              <Button
                className="bg-gold text-foreground hover:bg-gold/90 shrink-0 font-medium"
                asChild
              >
                <Link to="/contact">Request Escalation Audit</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-20 bg-card border-b border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-index justify-center">
                <span>03</span>
                <span className="index-rule" /> Your Physical Dossier
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
                Deliverables <em>You Receive at Handover</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
                Everything required for long-term home maintenance, warranty enforcement, and peace
                of mind.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {deliverables.map((deliv) => (
                <div
                  key={deliv.title}
                  className="p-6 bg-background border border-border/80 rounded-xs flex flex-col justify-between hover:border-gold/60 transition-colors shadow-xs"
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

        {/* FAQS */}
        <section className="py-20 px-4 sm:px-6 max-w-4xl mx-auto" data-reveal>
          <div className="text-center mb-12">
            <span className="eyebrow eyebrow-dark">Clarity</span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-2">
              Common Questions on Handover &amp; Snags
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
              Don’t Accept Verbal Promises
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium max-w-3xl mx-auto mt-3 leading-tight text-center">
              Schedule a Pre-Handover Snag Audit
              <br />
              <em className="text-gold italic font-serif">Before Your Final Settlement.</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed text-center">
              Our certified technical inspectors will audit your space from corner to corner,
              ensuring every defect is documented, logged, and resolved before move-in across
              Bengaluru.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                className="hero-button bg-gold text-[#141311] hover:bg-gold/90 font-medium px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/get-a-quote">
                  Book a Pre-Handover Audit <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button
                className="hero-button-secondary border-white/20 text-white hover:bg-white/10 px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/contact">Discuss with Technical Lead</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
