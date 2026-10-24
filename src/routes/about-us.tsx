import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  CheckCircle2,
  ShieldCheck,
  Target,
  Eye,
  Wrench,
  FileCheck,
  Award,
} from "lucide-react";

import projectSite from "@/assets/interior-project-site.webp";
import inspectionPhoto from "@/assets/site-inspection.webp";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { AnimatedCounter } from "@/components/animated-counter";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/about-us")({
  component: AboutPage,
  head: () => ({
    meta: [
      {
        title:
          "About Interior Support | Independent Interior Project Management Bangalore",
      },
      {
        name: "description",
        content:
          "Learn how Interior Support acts as your independent client-side fiduciary team for interior project management, BOQ audits, and quality inspection across Bengaluru.",
      },
      {
        property: "og:title",
        content:
          "About Interior Support | Independent Interior Project Stewardship Bangalore",
      },
      {
        property: "og:description",
        content:
          "Single point of technical fiduciary accountability for luxury residential and commercial interior fit-outs across Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "interior project management Bangalore, independent interior consultant Bengaluru, interior PMC Indiranagar, luxury fit-out project management Whitefield, interior quality audit Koramangala",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

const commitments = [
  {
    icon: Target,
    number: "01",
    title: "Accuracy in Measurement",
    description:
      "Every millimeter matters. We laser-verify raw site dimensions before drawings or joinery fabrication begin.",
  },
  {
    icon: FileCheck,
    title: "Clarity in Drawings",
    description:
      "No ambiguous notes or conflicting trade details. We audit architectural CAD layouts for constructability.",
  },
  {
    icon: Wrench,
    title: "Control in Execution",
    description:
      "Daily milestone tracking, MEP coordination, and proactive vendor management to prevent cascading site delays.",
  },
  {
    icon: ShieldCheck,
    title: "Discipline in Management",
    description:
      "Rigorous schedule enforcement, transparent weekly progress reporting, and milestone-linked payment approvals.",
  },
  {
    icon: Eye,
    title: "Confidence in Quality",
    description:
      "Multi-stage technical site inspections with laser leveling, moisture testing, and joinery tolerance checks.",
  },
  {
    icon: Award,
    title: "Accountability in Delivery",
    description:
      "We don’t abandon you at the ribbon cutting. Comprehensive snag closure and post-handover advocacy.",
  },
];

const approachSteps = [
  {
    title: "We verify before we approve",
    desc: "Every architectural drawing, every line item on the contractor’s BOQ, and every completed milestone is independently inspected prior to cost sign-off.",
  },
  {
    title: "We inspect at the site, not from a report",
    desc: "Desk reviews are useless when tiles are uneven or pipes are improperly routed. Our specialists physically audit the work where it happens.",
  },
  {
    title: "We flag problems early, not at handover",
    desc: "A misaligned conduit discovered during framing costs nothing to correct. The same issue discovered after Italian marble is laid causes disaster.",
  },
  {
    title: "We stay accountable after handover too",
    desc: "Our responsibility extends past move-in day. We hold contractors accountable to their warranties and track lingering snag rectification.",
  },
];

function AboutPage() {
  return (
    <>
      <ScrollMotion />
      <SiteHeader />
      <main id="top" className="subpage about-page">
        {/* HERO SECTION */}
        <section className="subpage-hero about-hero">
          <img
            src={projectSite}
            alt="Interior Support project management team reviewing site drawings"
            width={1600}
            height={1104}
            fetchPriority="high"
          />
          <div className="subpage-hero-overlay" />
          <div className="subpage-hero-content" data-reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-gold/30 bg-foreground/60 backdrop-blur-md mb-4">
              <span className="w-2 h-2 rounded-full bg-gold" />
              <p className="eyebrow text-gold font-medium tracking-widest text-[0.65rem] m-0">
                Single Point of Accountability
              </p>
            </div>
            <h1 className="font-display font-medium text-4xl sm:text-6xl lg:text-7xl leading-[0.95] text-primary-foreground max-w-4xl">
              We Don’t Just Manage Interiors.
              <br />
              <em>We Take Ownership of the Outcome.</em>
            </h1>
            <p className="max-w-2xl text-muted-foreground text-sm sm:text-base mt-4 leading-relaxed">
              Most interior projects involve disconnected parties — a designer, a contractor,
              vendors, and a client trying to track it all. When something goes wrong, no one is
              fully accountable. We exist to solve that structural flaw.
            </p>
            <div className="flex flex-wrap items-center gap-4 mt-8">
              <Button className="hero-button" asChild>
                <Link to="/get-a-quote">
                  Work With Us <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button className="hero-button-secondary" asChild>
                <Link to="/services">Explore Our Disciplines</Link>
              </Button>
            </div>
          </div>
        </section>

        {/* THE CORE PROBLEM & OUR ROLE */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-7 space-y-6">
              <span className="section-index">
                <span>01</span>
                <span className="index-rule" /> Why Interior Support Exists
              </span>
              <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground leading-tight">
                The Fragmentation Trap in <em>Modern Fit-Outs</em>
              </h2>
              <p className="text-muted-foreground text-sm leading-relaxed">
                When an interior project begins, everyone promises seamless execution. But within
                weeks, the classic blame game emerges:
              </p>
              <div className="p-5 bg-card border border-border/80 rounded-xs space-y-3 text-xs sm:text-sm text-muted-foreground italic">
                <p>“The designer says the contractor misunderstood the drawing.”</p>
                <p>“The contractor says the site dimensions differed from the architect’s plan.”</p>
                <p>“The vendors claim the site wasn’t ready for installation.”</p>
              </div>
              <p className="text-foreground text-sm leading-relaxed font-medium">
                Meanwhile, the homeowner or commercial client is caught in the middle, footing the
                bill for rework and bearing the cost of delayed handovers.
              </p>
              <p className="text-muted-foreground text-sm leading-relaxed">
                <strong>
                  Interior Support serves as your dedicated fiduciary representative on site.
                </strong>{" "}
                We coordinate the designer, contractor, and specialist trades under a singular,
                transparent execution plan where every milestone requires verified sign-off before
                funds are disbursed.
              </p>
            </div>

            <div className="lg:col-span-5 relative">
              <div className="relative overflow-hidden aspect-[4/5] border border-border bg-card shadow-xl group">
                <img
                  src={inspectionPhoto}
                  alt="Quality inspector auditing laser level alignment on site"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={912}
                  height={1104}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-foreground/90 backdrop-blur-md border border-gold/30 text-primary-foreground">
                  <span className="text-[0.62rem] text-gold uppercase tracking-widest font-semibold block mb-1">
                    On-Site Stewardship
                  </span>
                  <p className="text-xs leading-snug font-display">
                    “We inspect at the site, not from a spreadsheet.”
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR SYSTEMATIC APPROACH */}
        <section className="py-20 bg-card border-y border-border" data-reveal>
          <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="section-index justify-center">
                <span>02</span>
                <span className="index-rule" /> Methodology
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-foreground mt-3">
                Our <em>Operating Standard</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
                How we eliminate blind spots, budget overruns, and unapproved substitutions across
                your project lifecycle.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {approachSteps.map((step, idx) => (
                <div
                  key={step.title}
                  className="p-8 bg-background border border-border/70 hover:border-gold/60 transition-all duration-300 rounded-xs shadow-sm hover:shadow-md relative group"
                >
                  <span className="text-gold font-display font-bold text-2xl mb-3 block opacity-80 group-hover:opacity-100">
                    0{idx + 1}
                  </span>
                  <h3 className="text-lg font-display font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* FIDUCIARY ON-SITE STEWARDSHIP VISUAL SHOWCASE */}
        <section className="py-20 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-6 relative">
              <div className="relative overflow-hidden aspect-[4/3] border border-border bg-card shadow-2xl group rounded-xs">
                <img
                  src={projectSite}
                  alt="Interior Support project management team reviewing site drawings and material specifications on active site"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  width={1200}
                  height={900}
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 left-4 right-4 p-4 bg-foreground/90 backdrop-blur-md border border-gold/30 text-primary-foreground">
                  <span className="text-[0.62rem] text-gold uppercase tracking-widest font-semibold block mb-1">
                    Zero Commercial Bias
                  </span>
                  <p className="text-xs leading-snug font-display">
                    “100% fiduciary loyalty to you. We take zero vendor commissions or contractor
                    rebates.”
                  </p>
                </div>
              </div>
            </div>

            <div className="lg:col-span-6 space-y-6">
              <span className="section-index">
                <span>03</span>
                <span className="index-rule" /> Fiduciary Representation
              </span>
              <h2 className="text-3xl sm:text-4xl font-display font-medium text-foreground leading-tight">
                When We Sit at the Table, <br />
                <em>We Only Work for You</em>
              </h2>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Most interior site disputes drag on because traditional supervisors or designers
                have informal commercial ties to contractors, carpenters, or stone suppliers.
              </p>
              <p className="text-muted-foreground text-xs sm:text-sm leading-relaxed">
                Interior Support operates under a strict conflict-of-interest policy: we never
                accept referral fees, kickbacks, or supplier rebates. When we reject an uneven
                marble slab or flag an unapproved change order, our only obligation is protecting
                your capital and standards.
              </p>

              <div className="grid grid-cols-2 gap-4 pt-2">
                <div className="p-4 bg-card border border-border/80 rounded-xs premium-card-hover group">
                  <div className="text-2xl font-display font-bold text-gold">
                    <AnimatedCounter value={140} suffix="+" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 group-hover:text-foreground transition-colors">
                    Projects Coordinated
                  </div>
                </div>
                <div className="p-4 bg-card border border-border/80 rounded-xs premium-card-hover group">
                  <div className="text-2xl font-display font-bold text-gold">
                    <AnimatedCounter value={4.8} prefix="₹" suffix=" Cr+" decimals={1} />
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 group-hover:text-foreground transition-colors">
                    Verified Leakage Prevented
                  </div>
                </div>
                <div className="p-4 bg-card border border-border/80 rounded-xs premium-card-hover group">
                  <div className="text-2xl font-display font-bold text-gold">
                    <span className="inline-block tabular-nums">0%</span>
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 group-hover:text-foreground transition-colors">
                    Vendor Kickbacks Accepted
                  </div>
                </div>
                <div className="p-4 bg-card border border-border/80 rounded-xs premium-card-hover group">
                  <div className="text-2xl font-display font-bold text-gold">
                    <AnimatedCounter value={24} suffix=" hrs" />
                  </div>
                  <div className="text-xs text-muted-foreground mt-0.5 group-hover:text-foreground transition-colors">
                    Written Audit Turnaround
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* OUR 6 COMMITMENTS */}
        <section className="py-24 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8" data-reveal>
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="section-index justify-center">
              <span>04</span>
              <span className="index-rule" /> Core Values
            </span>
            <h2 className="text-3xl sm:text-5xl font-display font-medium text-foreground mt-3">
              Our <em>Commitment to You</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm mt-3 leading-relaxed">
              Six uncompromising pillars governing every site inspection, drawing review, and
              project handover.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {commitments.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="p-6 bg-card border border-border/70 hover:border-gold/60 transition-all duration-300 rounded-xs relative group"
                >
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-10 h-10 rounded-xs bg-gold/10 border border-gold/30 flex items-center justify-center text-gold group-hover:bg-gold group-hover:text-foreground transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[0.62rem] font-mono text-muted-foreground">
                      {item.number}
                    </span>
                  </div>
                  <h3 className="text-base font-display font-semibold text-foreground mb-2 group-hover:text-gold transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs text-muted-foreground leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </section>

        {/* CLOSING CALL TO ACTION */}
        <section
          className="subpage-cta py-20 px-4 sm:px-6 bg-foreground text-primary-foreground text-center"
          data-reveal
        >
          <div className="w-full max-w-4xl mx-auto flex flex-col items-center text-center">
            <span className="eyebrow eyebrow-dark text-gold font-medium tracking-widest text-xs font-mono uppercase">
              Start With Confidence
            </span>
            <h2 className="text-2xl sm:text-4xl md:text-5xl font-display font-medium max-w-3xl mx-auto mt-3 leading-tight text-center">
              Ready for a Project Managed With
              <br />
              <em className="text-gold italic font-serif">Complete Accountability?</em>
            </h2>
            <p className="text-muted-foreground text-xs sm:text-sm md:text-base max-w-2xl mx-auto mt-4 leading-relaxed text-center">
              Whether you are evaluating architectural drawings or need independent verification of
              an ongoing fit-out in Bengaluru, let’s have a candid discussion about your
              space.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 mt-8">
              <Button
                className="hero-button bg-gold text-[#141311] hover:bg-gold/90 font-medium px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/get-a-quote">
                  Book a Site Consultation <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button
                className="hero-button-secondary border-white/20 text-white hover:bg-white/10 px-6 py-2.5 rounded-full"
                asChild
              >
                <Link to="/contact">Direct Contact Details</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
