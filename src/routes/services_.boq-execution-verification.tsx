import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Check,
  ChevronDown,
  FileSpreadsheet,
  ShieldAlert,
  AlertOctagon,
  TrendingDown,
  Layers,
  Calculator,
  FileText,
  DollarSign,
  CheckCircle2,
  AlertCircle,
  MessageSquare,
  Sparkles,
  Scale,
} from "lucide-react";
import { useState } from "react";

import boqPhoto from "@/assets/boq-verification.jpg";
import boqMaterialsPhoto from "@/assets/boq-material-specifications.jpg";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/services_/boq-execution-verification")({
  component: BoqVerificationServicePage,
  head: () => ({
    meta: [
      {
        title:
          "Interior BOQ Verification & Cost Audit Services | Interior Support",
      },
      {
        name: "description",
        content:
          "Independent BOQ verification and fit-out bill auditing across Bengaluru. Stop contractor overbilling, material downgrades, and inflated variation claims.",
      },
      {
        name: "keywords",
        content:
          "interior BOQ verification, interior bill auditing, contractor overbilling check, interior cost control, fit-out estimation audit, variation bill dispute resolution",
      },
      {
        property: "og:title",
        content: "BOQ & Execution Verification | Interior Support",
      },
      {
        property: "og:description",
        content:
          "Stop budget leakage. We independently verify that billed quantities match physically installed work across Bengaluru fit-outs.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

interface DiscrepancyRow {
  trade: string;
  item: string;
  billedClaim: string;
  verifiedActual: string;
  method: string;
  savedAmount: string;
}

const forensicLedger: DiscrepancyRow[] = [
  {
    trade: "Flooring",
    item: "Italian Statuario Marble Supply & Installation",
    billedClaim: "3,450 sq. ft. (billed with 35% arbitrary wastage factor)",
    verifiedActual: "2,820 sq. ft. (actual physical measurement + 10% net wastage)",
    method: "Physical laser grid measuring wheel + cut-piece stock audit",
    savedAmount: "₹4,72,500",
  },
  {
    trade: "False Ceiling",
    item: "Perimeter Gypsum Coves & Vertical Drop Paneling",
    billedClaim: "Double-counted vertical drop surface area on top of flat ceiling",
    verifiedActual: "Standard Indian Standard (IS 1200) measurement rules applied",
    method: "CAD section cross-check against physical hung framing",
    savedAmount: "₹1,18,000",
  },
  {
    trade: "Electrical",
    item: "Concealed FRLS Copper Wiring & Flexible Conduit",
    billedClaim: "420 linear meters estimated on running lump-sum basis",
    verifiedActual: "310 linear meters verified between distribution boards & switch points",
    method: "Point-to-point conduit route verification prior to plastering",
    savedAmount: "₹68,200",
  },
  {
    trade: "Variations",
    item: "Plumbing Shaft Realignment 'Site Variation Claim'",
    billedClaim: "₹1,85,000 submitted as unexpected extra site work",
    verifiedActual: "₹0 approved (already explicitly covered under Tender Scope clause 4.2)",
    method: "Tender contract clause cross-examination against variation memo",
    savedAmount: "₹1,85,000",
  },
];

const caughtIssues = [
  {
    title: "Arbitrary Wastage Inflation",
    desc: "Contractors routinely bill 25%–35% wastage on high-value stone, tiles, and veneer when standard professional practice accounts for 8%–12%. We audit physical slabs and cut-pieces to hold billing to true consumption.",
  },
  {
    title: "Scope Duplication across Revisions",
    desc: "Work included in the baseline quotation is quietly re-entered under 'variation' line items with slightly altered descriptions. We cross-reference every revised bill against the original signed contract.",
  },
  {
    title: "Unapproved Material Grade Downgrades",
    desc: "Billed for marine-grade BWP (IS 710) plywood or top-tier hardware, but standard commercial moisture-resistant (MR) ply is delivered to the site. We inspect physical batch codes and manufacturer invoices.",
  },
  {
    title: "Premature Milestone Demands",
    desc: "Contractors demanding 85% stage payments when visible on-site completion stands at barely 55%. We tie fund clearance strictly to independently verified milestone completion gates.",
  },
  {
    title: "Measurement Violations (IS 1200)",
    desc: "Failure to deduct openings for large doors and windows when measuring painting, plastering, or cladding surface area. We apply rigorous national measurement standards to eliminate fictitious square footage.",
  },
  {
    title: "Verbal Change Order Exploitation",
    desc: "Informal conversations on site converted into massive, unjustified variation invoices at final billing. We enforce a zero-verbal-change policy where all scope modifications require prior written sign-off.",
  },
];

const boqSteps = [
  {
    step: "01",
    title: "Baseline Tender & Drawing Reconciliation",
    desc: "We analyze the original contractor quotation against approved architectural drawings, flagging ambiguities, missing specifications, and rate anomalies before execution accelerates.",
  },
  {
    step: "02",
    title: "On-Site Physical Measurement Audit",
    desc: "Our engineers visit the site with laser distance meters and measuring wheels, physically measuring installed square footage, linear runs, and item counts against submitted running bills.",
  },
  {
    step: "03",
    title: "Material Grade & Certificate Verification",
    desc: "We audit physical materials on site: checking plywood ISI stamps, marble thickness, veneer lot consistency, and electrical conduit ratings against approved specifications.",
  },
  {
    step: "04",
    title: "Forensic Discrepancy Report Compilation",
    desc: "We assemble a line-by-line variance ledger detailing billed vs verified quantities, unapproved rate jumps, and unjustified variation claims with photographic site proof.",
  },
  {
    step: "05",
    title: "Contractor Reconciliation Mediation",
    desc: "We present our objective technical findings directly to the contractor on your behalf, achieving amicable, evidence-backed bill reductions without litigation or project stalls.",
  },
];

const deliverables = [
  {
    title: "Itemized BOQ Discrepancy Ledger",
    format: "Excel Matrix + Executive PDF",
    desc: "Line-by-line comparison showing contractor billed quantity, verified site measurement, rate adjustment, and exact capital protected.",
  },
  {
    title: "Photographic Measurement Proof Dossier",
    format: "Audit-Grade Visual Proof",
    desc: "High-resolution photos documenting on-site laser measurements, physical counts, and material grade stamps substantiating every deduction.",
  },
  {
    title: "Certified Payment Clearance Certificate",
    format: "Formal Fiduciary Authorization",
    desc: "Official sign-off stating the exact reconciled amount you should pay your contractor, protecting your capital before funds leave your account.",
  },
];

const faqs = [
  {
    q: "How much money does a BOQ verification typically save?",
    a: "On a standard interior fit-out (₹40 Lakhs to ₹1.5 Crores), our forensic verification typically uncovers ₹3.8 Lakhs to ₹9.5 Lakhs in unjustified claims, inflated wastage, duplicate line items, and unapproved variations — representing an immediate 8% to 14% net savings on the total contract value.",
  },
  {
    q: "Will an independent BOQ audit create hostility with my interior contractor?",
    a: "No. In fact, contractors generally cooperate because our audit is grounded in objective mathematical measurements, approved CAD drawings, and national measurement standards (IS 1200). We present itemized facts rather than accusations, turning subjective arguments into professional, evidence-based reconciliations.",
  },
  {
    q: "Can I bring in Interior Support mid-project if my budget is already drifting?",
    a: "Yes. Many of our clients contact us precisely when they notice running bills escalating unexpectedly or when a contractor submits a large surprise variation invoice. We can audit cumulative past bills as well as ongoing work immediately.",
  },
  {
    q: "What documents do you require to begin a BOQ verification?",
    a: "We require the contractor’s current quotation or running bills, approved architectural floor plans and elevations, and access to the physical site for on-site measurement.",
  },
];

function BoqVerificationServicePage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <>
      <ScrollMotion />
      <SiteHeader />
      <main id="top" className="subpage service-single-page bg-background text-foreground">
        {/* HERO SECTION */}
        <section className="subpage-hero relative overflow-hidden">
          <img
            src={boqPhoto}
            alt="Interior technical specialist cross-checking contractor BOQ line items against architectural drawings on site"
            width={1600}
            height={1104}
            fetchPriority="high"
          />
          <div className="subpage-hero-overlay" />
          <div className="subpage-hero-content" data-reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-foreground/70 backdrop-blur-md mb-3">
              <span className="w-2 h-2 rounded-full bg-gold animate-pulse" />
              <p className="eyebrow text-gold font-medium tracking-widest text-[0.65rem] m-0">
                Discipline 03 • Cost Protection
              </p>
            </div>

            <h1 className="font-display font-medium text-3xl sm:text-5xl lg:text-6xl leading-[1.04] text-primary-foreground max-w-4xl tracking-tight">
              Pay Only for What’s
              <br />
              <em>Actually Built.</em>
            </h1>

            <p className="max-w-2xl text-muted-foreground text-sm sm:text-base mt-4 leading-relaxed font-body">
              Interior budgets rarely balloon through intentional malice — they drift through
              unverified quantities, inflated wastage, duplicate line items, and unapproved
              variations. We independently audit your contractor’s bill against actual site reality.
            </p>

            {/* KEY METRICS STRIP */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 mt-8 w-full max-w-3xl pt-6 border-t border-border/30">
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Average Recovery
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  <AnimatedCounter value={3.8} prefix="₹" suffix="L" decimals={1} /> –{" "}
                  <AnimatedCounter value={9.5} prefix="₹" suffix="L" decimals={1} /> / Project
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Audit Standard
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  IS 1200 Code Compliance
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Method
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  On-Site Physical Measure
                </span>
              </div>
              <div className="p-3 bg-foreground/60 backdrop-blur-md border border-border/40 rounded-xs premium-card-hover group">
                <span className="text-[0.62rem] uppercase tracking-wider text-gold block font-mono font-medium">
                  Conflict Policy
                </span>
                <span className="text-xs sm:text-sm font-display font-medium text-primary-foreground group-hover:text-gold transition-colors">
                  0% Contractor Kickbacks
                </span>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button className="hero-button" asChild>
                <Link to="/get-a-quote">
                  Audit Your Contractor Bill <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <a
                href="https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20would%20like%20to%20get%20my%20Contractor%20BOQ%20and%20running%20bills%20independently%20audited."
                target="_blank"
                rel="noopener noreferrer"
                className="hero-button-secondary"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400" /> Verify via WhatsApp
              </a>
            </div>
          </div>
        </section>

        {/* FORENSIC CASE LEDGER: REAL VERIFIED DISCREPANCIES */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="section-index justify-center">
              <span>01</span>
              <span className="index-rule" /> Audit Evidence
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
              Real Discrepancies <em>We Regularly Expose</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
              An itemized audit ledger of contractor claims vs physically verified measurements on a
              recent luxury residential fit-out, audited using the same institutional verification
              standard we deploy across Bengaluru.
            </p>
          </div>

          <div className="overflow-x-auto border border-border/80 bg-card rounded-xs shadow-xs mb-6">
            <table className="w-full text-left border-collapse min-w-[700px]">
              <thead>
                <tr className="bg-secondary/60 border-b border-border/80 text-[0.68rem] font-mono uppercase tracking-wider text-muted-foreground">
                  <th className="p-4 font-semibold">Trade</th>
                  <th className="p-4 font-semibold">BOQ Line Item</th>
                  <th className="p-4 font-semibold text-destructive">Contractor Claim</th>
                  <th className="p-4 font-semibold text-foreground">Verified On-Site</th>
                  <th className="p-4 font-semibold text-gold text-right">Capital Protected</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border/60 text-xs">
                {forensicLedger.map((row) => (
                  <tr key={row.item} className="hover:bg-background/80 transition-colors">
                    <td className="p-4 font-display font-medium text-foreground whitespace-nowrap">
                      {row.trade}
                    </td>
                    <td className="p-4 font-medium text-foreground max-w-[200px] leading-snug">
                      {row.item}
                      <span className="block text-[0.68rem] text-muted-foreground mt-0.5">
                        {row.method}
                      </span>
                    </td>
                    <td className="p-4 text-destructive/90 font-mono text-[0.72rem] leading-relaxed">
                      {row.billedClaim}
                    </td>
                    <td className="p-4 text-foreground/90 font-mono text-[0.72rem] leading-relaxed">
                      {row.verifiedActual}
                    </td>
                    <td className="p-4 font-mono font-bold text-gold text-right text-sm">
                      {row.savedAmount}
                    </td>
                  </tr>
                ))}
                <tr className="bg-secondary/40 font-semibold border-t-2 border-gold/40">
                  <td colSpan={4} className="p-4 text-right uppercase tracking-wider text-xs">
                    Total Direct Capital Protected on Single Fit-Out:
                  </td>
                  <td className="p-4 text-right font-mono text-base text-gold font-bold">
                    ₹8,43,700
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-right text-[0.72rem] text-muted-foreground italic">
            * Case study based on an audited 3,850 sq. ft. duplex in Sadashivanagar, Bengaluru. All figures
            verified via physical on-site measurement.
          </p>
        </section>

        {/* 6 COMMON DISCREPANCY TYPES */}
        <section className="py-20 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-index justify-center">
                <span>02</span>
                <span className="index-rule" /> Forensic Scope
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
                Where Budgets <em>Actually Leak</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
                Contractors rely on the fact that busy homeowners lack the time, scaffolding access,
                and technical measuring tools to verify invoices line by line.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {caughtIssues.map((item) => (
                <div
                  key={item.title}
                  className="p-6 bg-background border border-border/80 rounded-xs hover:border-gold/60 transition-colors shadow-xs"
                >
                  <div className="flex items-center gap-2 mb-2">
                    <AlertOctagon className="w-4 h-4 text-gold flex-shrink-0" />
                    <h3 className="font-display font-semibold text-sm text-foreground">
                      {item.title}
                    </h3>
                  </div>
                  <p className="text-xs text-muted-foreground leading-relaxed font-body">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5-STEP FORENSIC VERIFICATION METHODOLOGY */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-index justify-center">
              <span>03</span>
              <span className="index-rule" /> Audit Framework
            </span>
            <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
              Our <em>5-Step Verification Process</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
              How we transform suspicion into certified mathematical proof that contractors must
              respect.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
            {boqSteps.map((stg) => (
              <div
                key={stg.step}
                className="p-6 bg-card border border-border/80 hover:border-gold/60 transition-colors rounded-xs flex flex-col justify-between shadow-xs"
              >
                <div>
                  <span className="text-gold font-display font-bold text-xl block mb-2">
                    {stg.step}
                  </span>
                  <h3 className="font-display font-semibold text-sm text-foreground mb-2">
                    {stg.title}
                  </h3>
                  <p className="text-[0.72rem] text-muted-foreground leading-relaxed">{stg.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* MATERIAL SPECIFICATION & FORENSIC CROSS-VERIFICATION SHOWCASE */}
        <section className="py-16 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="relative overflow-hidden border border-border bg-card group shadow-xl rounded-xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 items-stretch">
              <div className="lg:col-span-7 relative min-h-[300px] sm:min-h-[380px] lg:min-h-[440px]">
                <img
                  src={boqMaterialsPhoto}
                  alt="Architectural master suite layout drawings, tablet cost breakdown, Calacatta marble slab, and fluted walnut joinery samples"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1400}
                  height={800}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-card/90 hidden lg:block" />
              </div>
              <div className="lg:col-span-5 p-6 sm:p-8 lg:p-10 flex flex-col justify-center space-y-4 bg-card">
                <span className="eyebrow eyebrow-dark text-gold font-medium tracking-widest text-xs">
                  Physical vs Document Audit
                </span>
                <h3 className="text-2xl sm:text-3xl font-display font-medium text-foreground leading-tight">
                  Spec-for-Spec <br />
                  <em>Material Reconciliation</em>
                </h3>
                <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                  We don’t review invoices from an armchair. We bring approved tender schedules and
                  finish palettes to the site — cross-checking imported stone lot certificates,
                  veneer grain specifications, and concealed hardware against every running bill
                  item.
                </p>
                <div className="pt-3 border-t border-border/80 flex items-center justify-between text-xs">
                  <span className="text-foreground font-semibold">Average Identified Leakage</span>
                  <span className="text-gold font-mono font-medium">₹3.8L – ₹9.5L / Project</span>
                </div>
                <div className="border-t border-border/80 flex items-center justify-between text-xs pt-2">
                  <span className="text-foreground font-semibold">Verification Accuracy</span>
                  <span className="text-gold font-mono font-medium">100% Itemized Audit</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="py-20 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-14">
              <span className="section-index justify-center">
                <span>04</span>
                <span className="index-rule" /> Tangible Output
              </span>
              <h2 className="text-2xl sm:text-4xl font-display font-medium text-foreground mt-3">
                Deliverables <em>You Receive</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
                Objective, audit-grade documentation ready to present to your contractor.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {deliverables.map((deliv) => (
                <div
                  key={deliv.title}
                  className="p-6 bg-background border border-border/80 rounded-xs flex flex-col justify-between hover:border-gold/60 transition-colors"
                >
                  <div>
                    <span className="text-[0.62rem] font-mono text-gold uppercase tracking-wider block mb-2 font-semibold">
                      {deliv.format}
                    </span>
                    <h3 className="font-display font-semibold text-base text-foreground mb-2">
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
              Frequently Asked <em>BOQ Questions</em>
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
              Protect your investment
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium max-w-3xl mx-auto mt-3 leading-tight text-center">
              Audit Your Project Bill
              <br />
              <em className="text-gold italic font-serif">Before Your Next Payment.</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed text-center">
              Send us your contractor’s BOQ and architectural drawings. We will identify preliminary
              risk areas and provide a clear forensic verification roadmap within 24 hours across
              Bengaluru.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                className="hero-button bg-gold text-[#141311] hover:bg-gold/90 font-medium px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/get-a-quote">
                  Request a BOQ Verification <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button
                className="hero-button-secondary border-white/20 text-white hover:bg-white/10 px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/pricing">Calculate Fit-Out Budget</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
