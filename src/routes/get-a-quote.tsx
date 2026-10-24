import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Calculator,
  CheckCircle2,
  Clock,
  HelpCircle,
  MessageSquare,
  Phone,
  Send,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import { useState } from "react";

import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/get-a-quote")({
  component: GetAQuotePage,
  head: () => ({
    meta: [
      { title: "Get a Quote | Interior Support" },
      {
        title: "Get an Interior Project Management Quote Bangalore | Interior Support",
      },
      {
        name: "description",
        content:
          "Request a transparent fee proposal for independent interior project management, BOQ verification, and quality audits across Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "interior project management quote Bangalore, fit-out PMC cost Bengaluru, BOQ verification fee Whitefield, interior inspection quote Indiranagar, snag list pricing Bangalore",
      },
      {
        property: "og:title",
        content: "Get an Interior Project Quote Bangalore | Interior Support",
      },
      {
        property: "og:description",
        content:
          "Get an accurate, transparent scope review and quotation for your residential or commercial interior fit-out in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

export function GetAQuotePage() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    location: "",
    projectType: "Residential",
    projectStage: "Planning",
    area: "",
    serviceNeeded: "End-to-End Project Management",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getWhatsAppLink = () => {
    const text = `Hello Interior Support,
I would like to request an Interior Support quote:
• Name: ${formData.name || "Client"}
• Phone: ${formData.phone || "Not specified"}
• Email: ${formData.email || "Not specified"}
• Location: ${formData.location || "Not specified"}
• Project Type: ${formData.projectType}
• Stage: ${formData.projectStage}
• Approx Area: ${formData.area ? formData.area + " sq ft" : "Not specified"}
• Service Needed: ${formData.serviceNeeded}
• Notes: ${formData.message || "None"}`;
    return `https://wa.me/?text=${encodeURIComponent(text)}`;
  };

  return (
    <div className="page-shell bg-background text-foreground min-h-screen flex flex-col">
      <SiteHeader />
      <ScrollMotion />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-foreground text-primary-foreground pt-28 pb-16 md:pt-36 md:pb-20 border-b border-border/20">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="breadcrumb flex items-center gap-2 text-xs text-gold uppercase tracking-wider mb-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span>Enquiry &amp; Quotation</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest font-semibold px-2.5 py-1 bg-gold/15 text-gold border border-gold/30">
                Transparent Scope &amp; Estimation
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-primary-foreground">
                Tell Us About Your Project.
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed font-body">
                Whether you need turnkey oversight from bare shell to handover, independent
                milestone inspections, or an urgent BOQ forensic review, we provide clear, itemized
                proposals without guesswork.
              </p>
            </div>
          </div>
        </section>

        {/* MAIN FORM & SIDEBAR SECTION */}
        <section className="py-16 md:py-24 bg-background border-b border-border/60">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
              {/* FORM (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bg-card border border-border/80 p-8 md:p-10 shadow-xs">
                  {submitted ? (
                    <div className="text-center py-12 space-y-6">
                      <div className="w-16 h-16 bg-gold/10 text-gold border border-gold/30 mx-auto flex items-center justify-center">
                        <CheckCircle2 className="w-8 h-8" />
                      </div>
                      <h2 className="text-2xl font-display font-medium text-foreground">
                        Enquiry Received Successfully
                      </h2>
                      <p className="text-sm text-muted-foreground max-w-md mx-auto leading-relaxed">
                        Thank you, <strong className="text-foreground">{formData.name}</strong>. A
                        senior project engineer will review your project parameters and respond
                        within 4 business hours with an indicative scope assessment.
                      </p>

                      <div className="pt-4 flex flex-col sm:flex-row justify-center gap-3">
                        <a
                          href={getWhatsAppLink()}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-gold text-foreground font-medium text-xs hover:bg-gold/90 transition-colors"
                        >
                          <MessageSquare className="w-4 h-4" /> Send Direct Copy via WhatsApp
                        </a>
                        <Button
                          variant="outline"
                          size="sm"
                          onClick={() => {
                            setSubmitted(false);
                            setFormData({
                              name: "",
                              phone: "",
                              email: "",
                              location: "",
                              projectType: "Residential",
                              projectStage: "Planning",
                              area: "",
                              serviceNeeded: "End-to-End Project Management",
                              message: "",
                            });
                          }}
                        >
                          Submit Another Inquiry
                        </Button>
                      </div>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6">
                      <div className="space-y-1 border-b border-border/40 pb-4">
                        <h2 className="text-xl font-display font-medium text-foreground">
                          Project Scope Intake Form
                        </h2>
                        <p className="text-xs text-muted-foreground">
                          Fill out the details below to receive a customized quotation and scope
                          breakdown.
                        </p>
                      </div>

                      {/* Name & Contact */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="name"
                            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
                          >
                            Full Name <span className="text-gold">*</span>
                          </label>
                          <input
                            id="name"
                            type="text"
                            required
                            placeholder="e.g. Vikram Singhania"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="phone"
                            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
                          >
                            Phone / WhatsApp <span className="text-gold">*</span>
                          </label>
                          <input
                            id="phone"
                            type="tel"
                            required
                            placeholder="+91 98201 84729"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>

                      {/* Email & Location */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label
                            htmlFor="email"
                            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
                          >
                            Email Address <span className="text-gold">*</span>
                          </label>
                          <input
                            id="email"
                            type="email"
                            required
                            placeholder="vikram.s@outlook.com"
                            value={formData.email}
                            onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold"
                          />
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="location"
                            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
                          >
                            Project Location / City <span className="text-gold">*</span>
                          </label>
                          <input
                            id="location"
                            type="text"
                            required
                            placeholder="e.g. Indiranagar, Whitefield, or Koramangala, Bengaluru"
                            value={formData.location}
                            onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>

                      {/* Project Type & Stage */}
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                        <div className="space-y-2">
                          <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                            Project Type <span className="text-gold">*</span>
                          </label>
                          <div className="grid grid-cols-2 gap-2">
                            {["Residential", "Commercial"].map((type) => (
                              <button
                                key={type}
                                type="button"
                                onClick={() => setFormData({ ...formData, projectType: type })}
                                className={`py-2 px-3 text-xs border text-center transition-colors ${
                                  formData.projectType === type
                                    ? "bg-gold text-foreground border-gold font-semibold"
                                    : "bg-background text-muted-foreground border-border hover:border-gold/60"
                                }`}
                              >
                                {type}
                              </button>
                            ))}
                          </div>
                        </div>

                        <div className="space-y-2">
                          <label
                            htmlFor="area"
                            className="block text-xs font-semibold uppercase tracking-wider text-foreground"
                          >
                            Approx Area (sq. ft.)
                          </label>
                          <input
                            id="area"
                            type="number"
                            placeholder="e.g. 2400"
                            value={formData.area}
                            onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                            className="w-full px-3.5 py-2.5 text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold"
                          />
                        </div>
                      </div>

                      {/* Project Stage */}
                      <div className="space-y-2">
                        <label className="block text-xs font-semibold uppercase tracking-wider text-foreground">
                          Current Project Stage <span className="text-gold">*</span>
                        </label>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {[
                            "Planning",
                            "Mid-execution",
                            "Stuck or escalated",
                            "Near handover",
                            "Post-handover query",
                          ].map((stage) => (
                            <button
                              key={stage}
                              type="button"
                              onClick={() => setFormData({ ...formData, projectStage: stage })}
                              className={`py-2 px-2.5 text-[0.72rem] border text-center transition-colors ${
                                formData.projectStage === stage
                                  ? "bg-gold text-foreground border-gold font-semibold"
                                  : "bg-background text-muted-foreground border-border hover:border-gold/60"
                              }`}
                            >
                              {stage}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Service Needed */}
                      <div className="space-y-2">
                        <label
                          htmlFor="service"
                          className="block text-xs font-semibold uppercase tracking-wider text-foreground"
                        >
                          Primary Service Needed <span className="text-gold">*</span>
                        </label>
                        <select
                          id="service"
                          value={formData.serviceNeeded}
                          onChange={(e) =>
                            setFormData({ ...formData, serviceNeeded: e.target.value })
                          }
                          className="w-full px-3.5 py-2.5 text-xs bg-background border border-border text-foreground focus:outline-none focus:border-gold"
                        >
                          <option value="End-to-End Project Management">
                            End-to-End Project Management (Planning to Handover)
                          </option>
                          <option value="Site Inspection & Quality Control">
                            Site Inspection &amp; Quality Control (Milestone / Ad-hoc)
                          </option>
                          <option value="BOQ & Execution Verification">
                            BOQ &amp; Execution Verification (Billing &amp; Quantity Audit)
                          </option>
                          <option value="Handover & Post-Sale Support">
                            Handover &amp; Post-Sale Support (Snag Closure &amp; Sign-off)
                          </option>
                          <option value="Dispute & Escalation Resolution">
                            Dispute &amp; Escalation Resolution (Delayed / Disputed Site)
                          </option>
                        </select>
                      </div>

                      {/* Message */}
                      <div className="space-y-2">
                        <label
                          htmlFor="message"
                          className="block text-xs font-semibold uppercase tracking-wider text-foreground"
                        >
                          Message / What you need help with
                        </label>
                        <textarea
                          id="message"
                          rows={4}
                          placeholder="Provide details about your project timeline, specific concerns with your contractor, or scope requirements..."
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          className="w-full px-3.5 py-2.5 text-xs bg-background border border-border text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:border-gold resize-none"
                        />
                      </div>

                      {/* Supporting copy */}
                      <div className="p-3 bg-secondary/50 border border-border/80 text-xs text-muted-foreground leading-relaxed">
                        <strong className="text-foreground">Commitment:</strong> One conversation is
                        usually enough to tell you whether we&apos;re the right fit — no obligation,
                        no high-pressure sales.
                      </div>

                      <div className="pt-2">
                        <Button
                          type="submit"
                          className="btn-gold w-full h-11 text-xs tracking-wider uppercase flex items-center justify-center gap-2"
                        >
                          <Send className="w-4 h-4" /> Submit Enquiry
                        </Button>
                      </div>
                    </form>
                  )}
                </div>
              </div>

              {/* SIDEBAR & GUARANTEES (5 cols) */}
              <div className="lg:col-span-5 space-y-6">
                <div className="bg-card border border-border/80 p-6 md:p-8 space-y-5">
                  <h3 className="text-lg font-display font-medium text-foreground flex items-center gap-2">
                    <ShieldCheck className="w-5 h-5 text-gold" /> Why Interior Support
                  </h3>
                  <ul className="space-y-3.5 text-xs text-muted-foreground">
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                      <span>
                        <strong className="text-foreground">100% Commercial Independence:</strong>{" "}
                        We take no vendor kickbacks, material margins, or contractor commissions.
                        Our only fiduciary duty is to you.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                      <span>
                        <strong className="text-foreground">Laser &amp; Forensic Auditing:</strong>{" "}
                        We verify at the site, with millimeters and physical tape, not armchair
                        guesses from a remote office.
                      </span>
                    </li>
                    <li className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-gold shrink-0 mt-1.5" />
                      <span>
                        <strong className="text-foreground">Rapid Response Protocol:</strong> Every
                        inquiry receives a written response within 4 hours and on-site deployment
                        within 24–48 hours.
                      </span>
                    </li>
                  </ul>

                  <div className="pt-4 border-t border-border/60">
                    <Link
                      to="/pricing"
                      className="text-xs text-gold font-medium hover:underline inline-flex items-center gap-1.5"
                    >
                      <Calculator className="w-3.5 h-3.5" /> View standard pricing packages &amp;
                      tiers <ArrowRight className="w-3 h-3" />
                    </Link>
                  </div>
                </div>

                {/* DIRECT REACH-OUT CARD */}
                <div className="bg-foreground text-primary-foreground p-6 md:p-8 border border-border/30 space-y-4">
                  <span className="text-[0.68rem] uppercase tracking-widest font-semibold text-gold">
                    Need Immediate Advice?
                  </span>
                  <h3 className="text-xl font-display font-medium">Talk to a Senior Consultant</h3>
                  <p className="text-xs text-primary-foreground/75 leading-relaxed font-body">
                    If your contractor has stopped work or an unapproved invoice deadline is
                    looming, call or WhatsApp directly for triage guidance.
                  </p>

                  <div className="pt-2 flex flex-col gap-2.5">
                    <a
                      href="https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20have%20an%20urgent%20interior%20project%20query."
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gold h-11 text-xs"
                    >
                      <MessageSquare className="w-4 h-4" /> Message on WhatsApp
                    </a>
                    <Link to="/contact" className="hero-button-secondary h-11 text-xs">
                      <Phone className="w-4 h-4" /> View Office &amp; Phone Details
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
