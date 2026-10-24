import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, AlertCircle, CheckCircle2, FileSpreadsheet, Layers } from "lucide-react";

import boqPhoto from "@/assets/boq-verification.webp";
import handoverPhoto from "@/assets/project-handover.webp";
import projectSite from "@/assets/interior-project-site.webp";
import inspectionPhoto from "@/assets/site-inspection.webp";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

const offerings = [
  {
    id: "project-management",
    number: "01",
    title: "End-to-End Project Management",
    dedicatedUrl: "/services/project-management" as const,
    statement: "One accountable team, start to finish.",
    duration: "Full Project Duration",
    idealFor: "Homeowners, NRI investors & commercial enterprises managing whole-space fit-outs",
    description:
      "From raw laser measurement and architectural CAD coordination through MEP rough-ins, finish execution, and final snag closure, we govern the project as one continuous fiduciary process. No contractor finger-pointing. No scope buck-passing.",
    audience:
      "For property owners who refuse to navigate contractor conflicts, design ambiguities, and billing disputes alone — and require institutional accountability.",
    inclusions: [
      "Site measurement and initial assessment",
      "Design and drawing coordination",
      "Execution planning and scheduling",
      "Vendor and team coordination",
      "Ongoing milestone quality control",
      "Weekly photo and written progress updates",
      "Final handover documentation",
    ],
    deliverables: [
      "Weekly Executive Progress Reports",
      "Critical Path Milestone Schedule",
      "Defect-Free Handover Certificate",
    ],
    image: projectSite,
    alt: "An interior project manager and site supervisor review plans at an active fit-out",
  },
  {
    id: "site-inspection",
    number: "02",
    title: "Site Inspection & Quality Control",
    dedicatedUrl: "/services/site-inspection-quality-control" as const,
    statement: "What’s drawn should match what’s built.",
    duration: "Milestone-based or Ad-hoc",
    idealFor:
      "Property owners with active general contractors requiring rigorous third-party quality control",
    description:
      "Independent on-site technical audits validating physical execution against approved drawings, building codes, and laser tolerances. We inspect concealed MEP infrastructure, waterproofing integrity, and joinery substructures while defects are accessible and inexpensive to correct.",
    audience:
      "For clients who already have an interior designer or contractor and need an uncompromising client-side engineer to enforce quality standards on site.",
    inclusions: [
      "Pre-visit drawing review",
      "On-site dimension and placement checks",
      "Execution-stage milestone inspections",
      "Photo-documented deviation reports",
      "Follow-up until flagged items are corrected",
    ],
    deliverables: [
      "Detailed Photographic Deviation Audit",
      "Laser-tolerance Compliance Log",
      "Corrective Action Notices for Contractor",
    ],
    image: inspectionPhoto,
    alt: "A site inspector checks wall alignment against interior drawings",
  },
  {
    id: "boq-verification",
    number: "03",
    title: "BOQ & Execution Verification",
    dedicatedUrl: "/services/boq-execution-verification" as const,
    statement: "Know what you’re actually paying for.",
    duration: "Pre-payment & Milestone Audits",
    idealFor:
      "Clients facing expanding contractor invoices, unapproved variation claims, or ambiguous scopes",
    description:
      "Forensic line-by-line cross-checking of contractor bills against approved drawings and physically installed site measurements. Applying Indian Standard (IS 1200) deduction rules, we eliminate artificial area inflation, duplicate scopes, and unapproved material substitutions.",
    audience:
      "For clients evaluating initial contractor tenders, disputing mid-flight variation bills, or auditing final contractor settlement claims.",
    inclusions: [
      "Original and revised BOQ review",
      "Line-by-line drawing cross-check",
      "Physical verification of installed or in-progress quantities",
      "Itemized discrepancy report",
      "Client walkthrough of findings",
    ],
    deliverables: [
      "Line-by-line Variance Spreadsheet",
      "Quantity Deduction Recommendations",
      "Overbilling Dispute Dossier",
    ],
    image: boqPhoto,
    alt: "A project specialist cross-checks a BOQ against project plans at the site",
  },
  {
    id: "handover-support",
    number: "04",
    title: "Handover & Post-Sale Support",
    dedicatedUrl: "/services/handover-post-sale-support" as const,
    statement: "The project isn’t done until you say it’s done.",
    duration: "Final 2-4 Weeks of Execution",
    idealFor: "Projects approaching move-in or paralyzed by contentious finish disputes",
    description:
      "A comprehensive 120-point tactile snag audit conducted under raking light, coupled with photo-documented defect closure tracking. We ensure every scratch, misaligned reveal, and mechanical defect is resolved before you release final contractor retention funds.",
    audience:
      "For clients preparing for final handover sign-off or navigating pushback on unfulfilled contractor commitments.",
    inclusions: [
      "Pre-handover walkthrough against drawing and BOQ",
      "Photo-documented snag list",
      "Closure tracking until work is completed",
      "Handover documentation and sign-off",
      "Post-handover point of contact",
    ],
    deliverables: [
      "Official Snag Closure Matrix",
      "As-Built Drawing Verification",
      "Warranty & Maintenance Handover Binder",
    ],
    image: handoverPhoto,
    alt: "A project manager reviews completion documents with a homeowner",
  },
];

const sampleSnags = [
  {
    item: "Living Room False Ceiling",
    spec: "450mm Grid Center Spec",
    site: "Discovered 600mm span, causing sag risk",
    status: "Flagged & Rectified",
  },
  {
    item: "Master Bedroom Wardrobe Drop",
    spec: "Drawing Plan: 2400mm H",
    site: "Executed 2340mm (60mm gap below soffit)",
    status: "Contractor Reworked",
  },
  {
    item: "Bathroom Concealed Plumbing",
    spec: "Pressure Test 10 bar / 24h",
    site: "Tested on-site: 10.2 bar held with zero drop",
    status: "Verified & Passed",
  },
  {
    item: "Flooring Tile Lippage",
    spec: "<0.5mm allowable tolerance",
    site: "Laser audit: 1.8mm step in entry hallway",
    status: "Flagged for Re-lay",
  },
];

export const Route = createFileRoute("/services")({
  component: ServicesPage,
  head: () => ({
    meta: [
      {
        title: "Interior Project Management Services | Independent PMC | Interior Support",
      },
      {
        name: "description",
        content:
          "Independent client-side interior project management, site quality inspection, forensic BOQ verification, and pre-handover snag audits for residential and commercial spaces.",
      },
      {
        name: "keywords",
        content:
          "interior project management services, site inspection, BOQ verification, interior quality audit, snag list inspection, interior PMC, handover audit",
      },
      {
        property: "og:title",
        content: "Interior Project Management Services | Interior Support",
      },
      {
        property: "og:description",
        content:
          "Four dedicated disciplines of independent interior project oversight — from drawing coordination to snag-free handover.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function ServicesPage() {
  return (
    <>
      <ScrollMotion />
      <SiteHeader />
      <main id="top" className="subpage services-page">
        {/* SUBPAGE HERO */}
        <section className="subpage-hero service-page-hero">
          <img
            src={projectSite}
            alt="Interior project team reviewing architectural plans on an active fit-out site"
            width={1600}
            height={1104}
            fetchPriority="high"
          />
          <div className="subpage-hero-overlay" />
          <div className="subpage-hero-content" data-reveal>
            <p className="eyebrow hero-eyebrow">
              <span /> Technical Oversight &amp; Quality Governance
            </p>
            <h1>
              One team.
              <br />
              <em>Every stage.</em>
            </h1>
            <p>
              From the initial drawing verification to the final defect-free handover, we provide
              independent, uncompromising fiduciary representation on your interior fit-out.
            </p>
            <a className="subpage-scroll" href="#disciplines">
              Explore the 4 disciplines <ArrowRight className="w-3.5 h-3.5" aria-hidden="true" />
            </a>
          </div>
        </section>

        {/* 4 DEDICATED DISCIPLINES EDITORIAL MATRIX */}
        <section
          id="disciplines"
          className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
          data-reveal
        >
          <div className="max-w-3xl mb-12">
            <span className="text-xs uppercase font-semibold tracking-widest text-gold flex items-center gap-1.5 font-mono">
              <Layers className="w-4 h-4" /> 4 Core Technical Disciplines
            </span>
            <h2 className="text-3xl sm:text-4xl font-display font-medium text-foreground mt-2">
              Independent Representation at <em>Every Critical Phase</em>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
              Interiors rarely fail all at once. Failures begin with subtle drawing discrepancies,
              unapproved material substitutions, and unchecked contractor bills. Select a dedicated
              discipline below to review its complete operational scope.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {offerings.map((svc) => (
              <div
                key={svc.id}
                className="ambient-card-glow bg-card border border-border/80 hover:border-gold/60 p-6 sm:p-8 flex flex-col justify-between transition-all group shadow-sm rounded-none"
              >
                <div>
                  <div className="flex items-center justify-between text-xs text-muted-foreground font-mono pb-4 border-b border-border/40">
                    <span className="text-gold font-bold text-base">{svc.number}</span>
                    <span className="text-[0.68rem] bg-secondary/80 text-foreground px-2.5 py-1 border border-border/60">
                      {svc.duration}
                    </span>
                  </div>

                  <div className="mt-5 space-y-2">
                    <span className="text-[0.68rem] uppercase tracking-wider text-gold/90 font-mono block">
                      {svc.statement}
                    </span>
                    <h3 className="text-xl sm:text-2xl font-display font-medium text-foreground group-hover:text-gold transition-colors leading-snug">
                      {svc.title}
                    </h3>
                  </div>

                  <p className="text-xs sm:text-sm text-muted-foreground mt-3 leading-relaxed">
                    {svc.description}
                  </p>

                  <div className="mt-5 pt-4 border-t border-border/30 space-y-2.5">
                    <div className="text-xs text-muted-foreground">
                      <strong className="text-foreground block text-[0.72rem] uppercase tracking-wider font-mono mb-1">
                        Primary Client Deliverable:
                      </strong>
                      <span className="inline-flex items-center gap-1.5 text-foreground/90 font-medium bg-secondary/40 px-2.5 py-1 border border-border/50 text-[0.75rem]">
                        <FileSpreadsheet className="w-3.5 h-3.5 text-gold" /> {svc.deliverables[0]}
                      </span>
                    </div>

                    <div className="text-xs text-muted-foreground pt-1">
                      <strong className="text-foreground block text-[0.72rem] uppercase tracking-wider font-mono mb-1">
                        Target Fit-Out:
                      </strong>
                      <p className="text-[0.75rem] text-muted-foreground leading-relaxed">
                        {svc.idealFor}
                      </p>
                    </div>
                  </div>
                </div>

                <div className="pt-6 mt-6 border-t border-border/40 flex items-center justify-between gap-3">
                  <Button
                    className="w-full bg-gold text-[#141311] hover:bg-gold/90 text-xs font-semibold py-2.5 h-10 shadow-xs justify-between group-hover:translate-x-0.5 transition-all"
                    asChild
                  >
                    <Link to={svc.dedicatedUrl}>
                      <span>Explore In-Depth Scope &amp; Deliverables</span>
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Link>
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* 3-STEP FIDUCIARY GOVERNANCE FRAMEWORK */}
        <section className="py-16 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-12">
              <span className="eyebrow eyebrow-dark font-mono text-gold">Governance Protocol</span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground mt-2">
                How We Safeguard <em>Your Capital &amp; Timeline</em>
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="p-6 bg-background border border-border/80 space-y-3">
                <span className="text-xs font-mono text-gold font-bold">STAGE 01</span>
                <h4 className="font-display font-medium text-base text-foreground">
                  Pre-Commencement Audit
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  We cross-examine the approved architectural drawings against the contractor's BOQ
                  to eliminate ambiguous line items, unpriced variations, and measurement inflation.
                </p>
              </div>

              <div className="p-6 bg-background border border-border/80 space-y-3">
                <span className="text-xs font-mono text-gold font-bold">STAGE 02</span>
                <h4 className="font-display font-medium text-base text-foreground">
                  Laser Tolerance Site Checks
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  During framing, MEP conduit runs, and wet works, our engineers conduct independent
                  field checks using optical laser instruments, logging defects before finishes
                  cover them.
                </p>
              </div>

              <div className="p-6 bg-background border border-border/80 space-y-3">
                <span className="text-xs font-mono text-gold font-bold">STAGE 03</span>
                <h4 className="font-display font-medium text-base text-foreground">
                  Verified Snag Clearance
                </h4>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Before your final payment is released, we execute a line-by-line snag closure
                  audit to ensure all defects are physically rectified to trade tolerances.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* SAMPLE AUDIT REPORT EVIDENCE SECTION */}
        <section
          className="sample-audit-section py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8"
          data-reveal
        >
          <div className="text-center max-w-2xl mx-auto mb-10">
            <span className="eyebrow eyebrow-dark font-mono text-gold">
              Methodology in practice
            </span>
            <h2 className="text-2xl sm:text-3xl font-display font-medium mt-2">
              Inside an Interior Support <em>Field Snag Audit</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-2 leading-relaxed">
              Every inspection item is checked against architectural shop drawings with laser
              instruments, categorized by severity, and tracked until contractor rectification.
            </p>
          </div>

          <div className="overflow-x-auto border border-border bg-card shadow-xs">
            <table className="w-full text-left text-xs border-collapse">
              <thead>
                <tr className="bg-foreground text-primary-foreground border-b border-border/20">
                  <th className="p-3.5 font-display tracking-wider uppercase text-[0.65rem]">
                    Inspection Checkpoint
                  </th>
                  <th className="p-3.5 font-display tracking-wider uppercase text-[0.65rem]">
                    Architectural Drawing Spec
                  </th>
                  <th className="p-3.5 font-display tracking-wider uppercase text-[0.65rem]">
                    Actual Site Finding
                  </th>
                  <th className="p-3.5 font-display tracking-wider uppercase text-[0.65rem]">
                    Action &amp; Status
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {sampleSnags.map((snag) => (
                  <tr key={snag.item} className="hover:bg-secondary/40 transition-colors">
                    <td className="p-3.5 font-semibold text-foreground font-sans">{snag.item}</td>
                    <td className="p-3.5 text-muted-foreground">{snag.spec}</td>
                    <td className="p-3.5 text-foreground">{snag.site}</td>
                    <td className="p-3.5">
                      <span
                        className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-xs text-[0.68rem] font-medium ${
                          snag.status.includes("Passed")
                            ? "bg-emerald-500/10 text-emerald-700 dark:text-emerald-400"
                            : "bg-amber-500/10 text-amber-700 dark:text-amber-400"
                        }`}
                      >
                        {snag.status.includes("Passed") ? (
                          <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        ) : (
                          <AlertCircle className="w-3 h-3 text-amber-600" />
                        )}
                        {snag.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* SUBPAGE CTA */}
        <section
          className="subpage-cta py-20 px-4 sm:px-6 bg-foreground text-primary-foreground text-center"
          data-reveal
        >
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="eyebrow eyebrow-dark text-gold text-xs tracking-widest font-mono uppercase font-semibold">
              The next step starts with a conversation
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium max-w-3xl mx-auto mt-3 leading-tight text-center">
              Planning a project —<br />
              <em className="text-gold italic font-serif">or already in one?</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed text-center">
              One technical discussion is usually enough to understand where your project stands and
              how independent project management protects your fit-out.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                className="hero-button bg-gold text-[#141311] hover:bg-gold/90 font-medium px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/contact">
                  Talk through your project{" "}
                  <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                </Link>
              </Button>
              <Button
                className="hero-button-secondary border-white/20 text-white hover:bg-white/10 px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/get-a-quote">Get an Instant Quote</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
