import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  Check,
  CheckCircle2,
  FileSpreadsheet,
  HelpCircle,
  Info,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/pricing")({
  component: PricingPage,
  head: () => ({
    meta: [
      {
        title:
          "Interior Project Management Pricing Bangalore | Transparent Retainers | Interior Support",
      },
      {
        name: "description",
        content:
          "Transparent, milestone-based pricing for independent interior project management, site inspection audits, and BOQ verification across Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "interior project management pricing Bangalore, interior inspection cost Bengaluru, BOQ verification fee Whitefield, snag list cost Indiranagar, interior PMC rates Bangalore",
      },
      {
        property: "og:title",
        content: "Service Pricing & Quotation Template Bangalore | Interior Support",
      },
      {
        property: "og:description",
        content:
          "Transparent pricing structured by project size and service depth across Bengaluru. 100% independent with zero contractor commissions.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

interface ServiceTier {
  name: string;
  price: string;
  basis: string;
  notes: string;
  features: string[];
  recommended?: boolean;
}

const pmTiers: ServiceTier[] = [
  {
    name: "Small Fit-Out",
    price: "₹45,000 – ₹75,000 / mo",
    basis: "or 5% – 7% of project value",
    notes: "Single-site residential up to 1,500 sq. ft.",
    features: [
      "Dedicated Project Manager assigned",
      "Full design & drawing coordination",
      "Weekly milestone Gantt schedule tracking",
      "Weekly photo + written executive updates",
      "Ongoing quality control & vendor liaison",
      "Pre-handover snag closure included",
    ],
  },
  {
    name: "Mid-Sized Space",
    price: "₹75,000 – ₹1,35,000 / mo",
    basis: "or 4% – 6% of project value",
    notes: "Larger residential / small commercial (1,500 – 4,000 sq. ft.)",
    features: [
      "Senior Project Engineer on-site 3x/week",
      "Multi-vendor MEP & carpentry synchronization",
      "Bi-weekly contractor payment certification",
      "Continuous laser tolerance verification",
      "Change-order impact auditing",
      "Complete as-built warranty binder",
    ],
    recommended: true,
  },
  {
    name: "Large / Commercial",
    price: "Custom Quotation",
    basis: "Scoped to project complexity & schedule",
    notes: "Commercial fit-outs, villas & penthouses (4,000+ sq. ft.)",
    features: [
      "Full-time resident site management engineer",
      "Multi-trade critical path master scheduling",
      "Tender document preparation & contractor vetting",
      "Commercial contract delay penalty tracking",
      "Comprehensive acoustic, HVAC & electrical commissioning",
      "Post-handover defect tracking (90 days)",
    ],
  },
];

const inspectionTiers: ServiceTier[] = [
  {
    name: "Single Inspection Visit",
    price: "₹8,500 – ₹12,000",
    basis: "Flat fee per site visit",
    notes: "One-time independent quality or civil audit",
    features: [
      "Pre-visit drawing compliance review",
      "Laser dimension & alignment measurement",
      "Marking, masking & conduit verification",
      "Itemized deviation report with photos (within 24h)",
      "Risk assessment & rectification recommendations",
    ],
  },
  {
    name: "4-Milestone Package",
    price: "₹32,000 – ₹45,000",
    basis: "Flat package covering entire project lifecycle",
    notes: "Framing, first fix, finishing & final handover — Most Popular",
    features: [
      "Milestone 1: Civil framing & bare-shell audit",
      "Milestone 2: First-fix electrical & plumbing pressure test",
      "Milestone 3: Carpentry, joinery & false ceiling review",
      "Milestone 4: Pre-handover snag inspection",
      "Closure re-verification for all flagged deviations",
    ],
    recommended: true,
  },
  {
    name: "Ongoing Weekly Inspection",
    price: "₹38,000 – ₹58,000 / mo",
    basis: "Monthly retainer for ongoing projects",
    notes: "For high-complexity projects or overseas clients",
    features: [
      "Weekly scheduled site inspection (4 visits/mo)",
      "Continuous drawing-to-site deviation tracking",
      "Contractor rectification compliance follow-ups",
      "Weekly video walkthrough & photographic dossier",
      "Advisory before monthly contractor billing release",
    ],
  },
];

const boqTiers: ServiceTier[] = [
  {
    name: "Single BOQ Review",
    price: "₹18,000 – ₹25,000",
    basis: "Up to 50 line items",
    notes: "One BOQ version + one physical site measurement visit",
    features: [
      "Line-by-line cross-check against architectural drawings",
      "Physical measurement of on-site installed quantities",
      "Detection of duplicate or vague allowance items",
      "Discrepancy report with rupee-value variance",
      "Client walkthrough of findings prior to contractor payment",
    ],
  },
  {
    name: "Full-Project BOQ Tracking",
    price: "₹45,000 – ₹85,000",
    basis: "or 1.5% of verified BOQ value",
    notes: "Covers all revision cycles and variation claims start-to-finish",
    features: [
      "Baseline BOQ validation before contractor contract signing",
      "Audit of all mid-project variation and change-order claims",
      "Running account (RA) bill certification at each stage",
      "Identification of unapproved material grade swaps",
      "Final settlement audit protecting against overbilling",
    ],
    recommended: true,
  },
];

const handoverTiers: ServiceTier[] = [
  {
    name: "Pre-Handover + Snag List",
    price: "₹20,000 – ₹32,000",
    basis: "One-time comprehensive audit",
    notes: "Includes active closure tracking until snags are cleared",
    features: [
      "Room-by-room architectural, MEP & joinery walkthrough",
      "Photo-documented snag registry with severity ratings",
      "Written contractor notification with closure deadlines",
      "Re-inspection visit to verify physical rectifications",
      "Final sign-off certificate for retention release",
    ],
    recommended: true,
  },
  {
    name: "Extended Post-Handover (3–6 mo)",
    price: "₹28,000 – ₹48,000",
    basis: "Per warranty period",
    notes: "Ongoing point of contact after moving in",
    features: [
      "Settlement & hairline crack audits at 30/60/90 days",
      "Hardware, drawer runner & hinge recalibration checks",
      "Direct coordination with contractor under warranty terms",
      "Preventive maintenance advisory package",
    ],
  },
  {
    name: "Escalation & Dispute Audit",
    price: "Custom Scoped Quote",
    basis: "Based on complexity of delay or dispute",
    notes: "For stalled projects or contentious contractor pushback",
    features: [
      "Forensic root-cause delay analysis",
      "Independent audit of unapproved or defective work",
      "Rupee evaluation of contractor liabilities vs. works done",
      "Neutral mediation roadmap for amicable handover",
    ],
  },
];

export function PricingPage() {
  const [calculatorService, setCalculatorService] = useState("pm");
  const [calculatorArea, setCalculatorArea] = useState(2000);
  const [calculatorType, setCalculatorType] = useState<"residential" | "commercial">("residential");

  const calculateEstimate = () => {
    // Realistic Indian Metro Fit-Out Benchmarks (₹/sq ft)
    const ratePerSqFt = calculatorType === "residential" ? 2200 : 2750;
    const estFitoutValue = calculatorArea * ratePerSqFt;
    const estSavings = Math.round(estFitoutValue * 0.092); // ~9.2% historical leakage caught in BOQs & variation orders

    const estTimeline =
      calculatorArea <= 1500
        ? "90 – 120 Days (3–4 Mos)"
        : calculatorArea <= 3500
          ? "120 – 165 Days (4–5.5 Mos)"
          : "180 – 270 Days (6–9 Mos)";

    if (calculatorService === "pm") {
      if (calculatorArea <= 1500) {
        return {
          range: "₹50,000 – ₹72,000 / mo",
          tier: "Small Fit-Out Tier (Up to 1,500 sq ft)",
          basis: "4.5% – 6.0% of verified fit-out value",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: estTimeline,
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions: "Dedicated PM • Weekly Milestones • Defect-free sign-off",
        };
      } else if (calculatorArea <= 4000) {
        return {
          range: "₹85,000 – ₹1,25,000 / mo",
          tier: "Mid-Sized Space Tier (1,500 – 4,000 sq ft)",
          basis: "4.0% – 5.5% of verified fit-out value",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: estTimeline,
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions: "Senior Engineer on-site 3x/wk • MEP coordination • Vendor audits",
        };
      } else {
        return {
          range: "₹1,45,000 – ₹2,10,000 / mo",
          tier: "Large / Commercial Fit-Out (4,000+ sq ft)",
          basis: "Resident site management engineer deployed full-time",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: estTimeline,
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions: "Full-time resident engineer • Critical path Gantt • Daily logs",
        };
      }
    } else if (calculatorService === "inspection") {
      if (calculatorArea <= 2000) {
        return {
          range: "₹34,000 flat",
          tier: "4-Milestone Quality Package",
          basis: "Framing, first-fix MEP, false ceiling & final handover",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: estTimeline,
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions: "Laser plumb check • Hydrostatic test • Photographic deviation log",
        };
      } else {
        return {
          range: "₹45,000 – ₹58,000 flat",
          tier: "5-to-6 Milestone Comprehensive Audit",
          basis: "Multi-zone framing, MEP pressure, joinery, and pre-handover",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: estTimeline,
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions: "Multi-zone laser leveling • Acoustic check • Re-inspection verification",
        };
      }
    } else if (calculatorService === "boq") {
      if (calculatorArea <= 2000) {
        return {
          range: "₹18,500 – ₹24,000 flat",
          tier: "Baseline BOQ & Site Measurement Review",
          basis: "Up to 50 line items + on-site laser measurement check",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: "Delivered within 3 business days",
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions: "CAD drawing reconciliation • Net vs gross area audit • Overbilling report",
        };
      } else {
        return {
          range: "₹48,000 – ₹78,000 flat",
          tier: "Full-Project BOQ Tracking & Change-Order Audit",
          basis: "1.25% – 1.50% of verified BOQ value",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: "Throughout full project duration",
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions: "Running account certification • Unapproved scope filter • Final settlement",
        };
      }
    } else {
      if (calculatorArea <= 2000) {
        return {
          range: "₹22,000 – ₹28,000 flat",
          tier: "Pre-Handover Snag Audit & Closure Tracking",
          basis: "120-point walkthrough + re-inspection sign-off visit",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: "Final 2–3 weeks of fit-out",
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions: "Room-by-room snag registry • Retention hold protection • Warranty collation",
        };
      } else {
        return {
          range: "₹34,000 – ₹48,000 flat",
          tier: "Large Space Pre-Handover & Extended Snagging",
          basis: "Multi-day walkthrough + 60-day post-move-in check",
          estFitout: `₹${(estFitoutValue / 100000).toFixed(1)} Lakhs`,
          timeline: "Pre-handover + 60 days post occupancy",
          leakagePrevented: `₹${(estSavings / 100000).toFixed(1)} Lakhs`,
          inclusions:
            "Architectural & MEP commissioning • As-built CAD check • Latent defect audit",
        };
      }
    }
  };

  const estimate = calculateEstimate();

  return (
    <div className="page-shell bg-background text-foreground min-h-screen flex flex-col">
      <SiteHeader />
      <ScrollMotion />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-foreground text-primary-foreground pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/20">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="breadcrumb flex items-center gap-2 text-xs text-gold uppercase tracking-wider mb-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span>Pricing &amp; Quotation Template</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest font-semibold px-2.5 py-1 bg-gold/15 text-gold border border-gold/30">
                Transparent Fee Structure • Zero Vendor Kickbacks
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-primary-foreground">
                Service Pricing &amp; Quotation Template
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed font-body">
                Predictable, milestone-linked retainers tailored to project scale and technical
                complexity. Our rates apply identically across all zones in Bengaluru with zero hidden
                margins, zero supplier kickbacks, and total fiduciary transparency.
              </p>
            </div>
          </div>
        </section>

        {/* INTERACTIVE ESTIMATOR WIDGET */}
        <section className="py-12 bg-secondary/40 border-b border-border/60">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="p-6 md:p-8 bg-card border border-gold/40 shadow-sm" data-reveal>
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 pb-6 border-b border-border/60">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-gold flex items-center gap-1.5">
                    <Calculator className="w-4 h-4" /> Interactive Fee Estimator
                  </span>
                  <h2 className="text-xl md:text-2xl font-display font-medium mt-1">
                    Calculate Indicative Scope &amp; Investment
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-muted-foreground">Property:</span>
                  <div className="inline-flex border border-border">
                    <button
                      type="button"
                      onClick={() => setCalculatorType("residential")}
                      className={`px-3 py-1 text-xs ${
                        calculatorType === "residential"
                          ? "bg-gold text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Residential
                    </button>
                    <button
                      type="button"
                      onClick={() => setCalculatorType("commercial")}
                      className={`px-3 py-1 text-xs ${
                        calculatorType === "commercial"
                          ? "bg-gold text-foreground font-semibold"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      Commercial
                    </button>
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-12 gap-8 pt-6 items-center">
                <div className="md:col-span-7 space-y-5">
                  <div>
                    <label className="block text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      Select Service Discipline
                    </label>
                    <div className="grid grid-cols-2 gap-2">
                      {[
                        { id: "pm", label: "01 / Project Management" },
                        { id: "inspection", label: "02 / Site Inspection" },
                        { id: "boq", label: "03 / BOQ Verification" },
                        { id: "handover", label: "04 / Handover Support" },
                      ].map((item) => (
                        <button
                          key={item.id}
                          type="button"
                          onClick={() => setCalculatorService(item.id)}
                          className={`p-2.5 text-xs text-left border transition-colors ${
                            calculatorService === item.id
                              ? "bg-gold/15 text-foreground border-gold font-medium"
                              : "bg-background text-muted-foreground border-border hover:border-gold/50"
                          }`}
                        >
                          {item.label}
                        </button>
                      ))}
                    </div>
                  </div>

                  <div>
                    <div className="flex items-center justify-between text-xs font-semibold uppercase tracking-wider text-foreground mb-2">
                      <span>Approximate Carpet Area</span>
                      <span className="font-mono text-gold font-bold">
                        {calculatorArea.toLocaleString()} sq. ft.
                      </span>
                    </div>
                    <input
                      type="range"
                      min={600}
                      max={10000}
                      step={100}
                      value={calculatorArea}
                      onChange={(e) => setCalculatorArea(Number(e.target.value))}
                      className="w-full accent-gold cursor-pointer"
                    />
                    <div className="flex flex-wrap justify-between gap-1 text-[0.68rem] text-muted-foreground mt-1">
                      <span>600 sq ft (Studio)</span>
                      <span className="hidden sm:inline">3,500 sq ft (Large Apt)</span>
                      <span>10,000+ sq ft (Villa)</span>
                    </div>
                  </div>
                </div>

                <div className="md:col-span-5 bg-background p-5 sm:p-6 border border-border/80 text-left space-y-4 shadow-xs">
                  <div>
                    <span className="text-[0.66rem] uppercase font-semibold text-gold tracking-widest block mb-1">
                      {estimate.tier}
                    </span>
                    <div className="text-2xl font-display font-bold text-foreground">
                      {estimate.range}
                    </div>
                    <p className="text-[0.72rem] text-muted-foreground mt-0.5">{estimate.basis}</p>
                  </div>

                  <div className="pt-3 border-t border-border/60 space-y-2 text-xs">
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-0.5 text-muted-foreground">
                      <span>Est. Turnkey Fit-Out Value:</span>
                      <strong className="text-foreground font-mono">{estimate.estFitout}</strong>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-0.5 text-muted-foreground">
                      <span>Typical Project Duration:</span>
                      <span className="text-foreground">{estimate.timeline}</span>
                    </div>
                    <div className="flex flex-col sm:flex-row sm:justify-between items-start sm:items-center gap-1 text-emerald-600 bg-emerald-500/10 p-2 border border-emerald-500/20 text-[0.72rem]">
                      <span>Est. Overbilling/Leakage Prevented:</span>
                      <strong className="font-mono">{estimate.leakagePrevented}</strong>
                    </div>
                  </div>

                  <div className="text-[0.68rem] text-muted-foreground pt-1">
                    <strong className="text-foreground block">Key Inclusions:</strong>
                    {estimate.inclusions}
                  </div>

                  <div className="pt-2">
                    <Button
                      className="w-full bg-gold text-foreground hover:bg-gold/90 text-xs font-medium"
                      asChild
                    >
                      <Link to="/get-a-quote">
                        Request Formal Scope Breakdown <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 4 DISCIPLINE PRICING MATRICES */}
        <section className="py-16 md:py-24 bg-background border-b border-border/60">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-20">
            {/* 1. Project Management */}
            <div className="space-y-6" data-reveal>
              <div className="border-b border-border/60 pb-4">
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Discipline 01
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  End-to-End Project Management
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong>Pricing Basis:</strong> Priced as a % of total project value, or a fixed
                  monthly retainer for ongoing turnkey management.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {pmTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`p-6 bg-card border flex flex-col justify-between h-full relative rounded-xs premium-card-hover ${
                      tier.recommended
                        ? "border-gold shadow-md ring-1 ring-gold/40"
                        : "border-border/80"
                    }`}
                  >
                    {tier.recommended && (
                      <span className="absolute -top-3 left-6 bg-gold text-[#141311] text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-0.5 shadow-xs">
                        Most Popular
                      </span>
                    )}
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-base font-display font-semibold text-foreground">
                          {tier.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{tier.notes}</p>
                      </div>

                      <div className="py-2 border-y border-border/40">
                        <div className="text-xl font-display font-bold text-foreground">
                          {tier.price}
                        </div>
                        <span className="text-[0.68rem] text-muted-foreground">{tier.basis}</span>
                      </div>

                      <ul className="space-y-2 text-xs text-muted-foreground flex-1 pt-1">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-4 border-t border-border/40">
                      <Link
                        to="/get-a-quote"
                        className={
                          tier.recommended
                            ? "btn-gold w-full text-xs font-semibold"
                            : "btn-gold-outline w-full text-xs font-semibold"
                        }
                      >
                        Select Package
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Site Inspection & Quality Control */}
            <div className="space-y-6" data-reveal>
              <div className="border-b border-border/60 pb-4">
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Discipline 02
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  Site Inspection &amp; Quality Control
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong>Pricing Basis:</strong> Priced per inspection visit, or as a
                  milestone-based package (framing + first fix + finishing + final).
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {inspectionTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`p-6 bg-card border flex flex-col justify-between h-full relative rounded-xs premium-card-hover ${
                      tier.recommended
                        ? "border-gold shadow-md ring-1 ring-gold/40"
                        : "border-border/80"
                    }`}
                  >
                    {tier.recommended && (
                      <span className="absolute -top-3 left-6 bg-gold text-[#141311] text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-0.5 shadow-xs">
                        Recommended Package
                      </span>
                    )}
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-base font-display font-semibold text-foreground">
                          {tier.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{tier.notes}</p>
                      </div>

                      <div className="py-2 border-y border-border/40">
                        <div className="text-xl font-display font-bold text-foreground">
                          {tier.price}
                        </div>
                        <span className="text-[0.68rem] text-muted-foreground">{tier.basis}</span>
                      </div>

                      <ul className="space-y-2 text-xs text-muted-foreground flex-1 pt-1">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-4 border-t border-border/40">
                      <Link
                        to="/get-a-quote"
                        className={
                          tier.recommended
                            ? "btn-gold w-full text-xs font-semibold"
                            : "btn-gold-outline w-full text-xs font-semibold"
                        }
                      >
                        Book Inspection
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. BOQ & Execution Verification */}
            <div className="space-y-6" data-reveal>
              <div className="border-b border-border/60 pb-4">
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Discipline 03
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  BOQ &amp; Execution Verification
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong>Pricing Basis:</strong> Priced per BOQ review, scaled by BOQ value or
                  number of line items audited.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-stretch">
                {boqTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`p-6 bg-card border flex flex-col justify-between h-full relative rounded-xs premium-card-hover ${
                      tier.recommended
                        ? "border-gold shadow-md ring-1 ring-gold/40"
                        : "border-border/80"
                    }`}
                  >
                    {tier.recommended && (
                      <span className="absolute -top-3 left-6 bg-gold text-[#141311] text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-0.5 shadow-xs">
                        High ROI Protection
                      </span>
                    )}
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-base font-display font-semibold text-foreground">
                          {tier.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{tier.notes}</p>
                      </div>

                      <div className="py-2 border-y border-border/40">
                        <div className="text-xl font-display font-bold text-foreground">
                          {tier.price}
                        </div>
                        <span className="text-[0.68rem] text-muted-foreground">{tier.basis}</span>
                      </div>

                      <ul className="space-y-2 text-xs text-muted-foreground flex-1 pt-1">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-4 border-t border-border/40">
                      <Link
                        to="/get-a-quote"
                        className={
                          tier.recommended
                            ? "btn-gold w-full text-xs font-semibold"
                            : "btn-gold-outline w-full text-xs font-semibold"
                        }
                      >
                        Request BOQ Review
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 4. Handover & Post-Sale Support */}
            <div className="space-y-6" data-reveal>
              <div className="border-b border-border/60 pb-4">
                <span className="text-xs uppercase font-semibold tracking-widest text-gold">
                  Discipline 04
                </span>
                <h2 className="text-2xl md:text-3xl font-display font-medium text-foreground">
                  Handover &amp; Post-Sale Support
                </h2>
                <p className="text-xs text-muted-foreground mt-1">
                  <strong>Pricing Basis:</strong> Priced per handover engagement, with optional
                  extended post-handover support.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
                {handoverTiers.map((tier) => (
                  <div
                    key={tier.name}
                    className={`p-6 bg-card border flex flex-col justify-between h-full relative rounded-xs premium-card-hover ${
                      tier.recommended
                        ? "border-gold shadow-md ring-1 ring-gold/40"
                        : "border-border/80"
                    }`}
                  >
                    {tier.recommended && (
                      <span className="absolute -top-3 left-6 bg-gold text-[#141311] text-[0.65rem] font-bold uppercase tracking-wider px-2.5 py-0.5 shadow-xs">
                        Essential Before Sign-off
                      </span>
                    )}
                    <div className="space-y-4 flex-1 flex flex-col">
                      <div>
                        <h3 className="text-base font-display font-semibold text-foreground">
                          {tier.name}
                        </h3>
                        <p className="text-xs text-muted-foreground mt-0.5">{tier.notes}</p>
                      </div>

                      <div className="py-2 border-y border-border/40">
                        <div className="text-xl font-display font-bold text-foreground">
                          {tier.price}
                        </div>
                        <span className="text-[0.68rem] text-muted-foreground">{tier.basis}</span>
                      </div>

                      <ul className="space-y-2 text-xs text-muted-foreground flex-1 pt-1">
                        {tier.features.map((f) => (
                          <li key={f} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                            <span>{f}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="pt-6 mt-4 border-t border-border/40">
                      <Link
                        to="/get-a-quote"
                        className={
                          tier.recommended
                            ? "btn-gold w-full text-xs font-semibold"
                            : "btn-gold-outline w-full text-xs font-semibold"
                        }
                      >
                        Book Handover Support
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* TERMS & CONDITIONS (PART 3) */}
        <section className="py-16 md:py-20 bg-secondary/40 border-b border-border/60">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="bg-card border border-border/80 p-8 space-y-6" data-reveal>
              <div className="flex items-center gap-2 text-gold">
                <Info className="w-5 h-5" />
                <h3 className="text-lg font-display font-medium text-foreground">
                  Quotation Terms &amp; Commercial Conditions
                </h3>
              </div>

              <div className="space-y-3.5 text-xs text-muted-foreground leading-relaxed">
                <p>
                  <strong className="text-foreground">1. Quotation Validity:</strong> All issued
                  quotations and scope assessments remain valid for <strong>30 days</strong> from
                  the date of formal issuance.
                </p>
                <p>
                  <strong className="text-foreground">2. Payment Terms:</strong> Standard engagement
                  requires a <strong>50% advance</strong> upon contract signing, with the remaining
                  balance payable in agreed milestone tranches (e.g. upon delivery of milestone
                  audit reports or final handover closure sign-off).
                </p>
                <p>
                  <strong className="text-foreground">3. Service Area &amp; Travel:</strong> Base
                  rates cover metro city limits. Outstation travel, overnight accommodations, and
                  transportation beyond the base service area are billed separately at actuals with
                  prior client approval.
                </p>
                <p>
                  <strong className="text-foreground">4. Out-of-Scope Advisory:</strong> Any scope
                  beyond technical project management, inspection, and verification (such as formal
                  legal arbitration or court expert-witness representation) is quoted separately.
                </p>
                <p>
                  <strong className="text-foreground">5. Commercial Independence:</strong> Interior
                  Support maintains strict commercial independence. We receive no commissions,
                  discounts, or referral incentives from contractors or material vendors.
                </p>
              </div>

              <div className="pt-4 border-t border-border/60 flex flex-col sm:flex-row items-center justify-between gap-4">
                <span className="text-xs text-muted-foreground">
                  Need a tailored formal proposal for a tender or board review?
                </span>
                <Button
                  className="bg-gold text-foreground hover:bg-gold/90 text-xs shrink-0"
                  asChild
                >
                  <Link to="/get-a-quote">Request Custom Quotation</Link>
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
