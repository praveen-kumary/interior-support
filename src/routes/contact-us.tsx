import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Clock,
  Mail,
  MapPin,
  MessageSquare,
  Phone,
  ShieldCheck,
  CheckCircle2,
  Calendar,
} from "lucide-react";

import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/contact-us")({
  component: ContactUsPage,
  head: () => ({
    meta: [
      {
        title: "Contact Interior Project Management Bangalore | Interior Support",
      },
      {
        name: "description",
        content:
          "Contact Interior Support for independent interior project management, site quality inspection, and BOQ audits across Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "contact interior project management Bangalore, interior project manager Bengaluru, site inspection booking Indiranagar, BOQ audit phone number Whitefield, interior consultant Koramangala",
      },
      {
        property: "og:title",
        content: "Contact Interior Support | Interior Project Management Bangalore",
      },
      {
        property: "og:description",
        content:
          "Let's Talk. Reach out directly via Phone, WhatsApp, or Email to discuss your residential or commercial fit-out in Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

export function ContactUsPage() {
  return (
    <div className="page-shell bg-background text-foreground min-h-screen flex flex-col">
      <SiteHeader />
      <ScrollMotion />

      <main className="flex-grow">
        {/* HERO */}
        <section className="bg-foreground text-primary-foreground py-16 md:py-24 border-b border-border/20">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="breadcrumb flex items-center gap-2 text-xs text-gold uppercase tracking-wider mb-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span>Contact</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="inline-block text-xs uppercase tracking-widest font-semibold px-2.5 py-1 bg-gold/15 text-gold border border-gold/30">
                Direct Project Advisory
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-primary-foreground">
                Let&apos;s Talk.
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed font-body">
                Reach out directly, or use our detailed Enquiry form if you&apos;d rather share
                project blueprints and specifications upfront. We respond promptly to every inquiry.
              </p>

              <div className="flex flex-wrap gap-4 pt-2">
                <a
                  href="tel:+919820184729"
                  className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-foreground font-medium text-xs hover:bg-gold/90 transition-colors shadow-sm"
                >
                  <Phone className="w-4 h-4" /> Call Now: +91 98201 84729
                </a>
                <Link
                  to="/get-a-quote"
                  className="inline-flex items-center gap-2 px-5 py-2.5 border border-primary-foreground/30 text-primary-foreground font-medium text-xs hover:border-gold hover:text-gold transition-colors"
                >
                  Submit Scope Details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT CARDS GRID */}
        <section className="py-16 md:py-20 bg-background border-b border-border/60">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {/* Phone */}
              <div
                className="p-6 bg-card border border-border/80 hover:border-gold/50 transition-colors flex flex-col justify-between"
                data-reveal
              >
                <div>
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center mb-4">
                    <Phone className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-display font-medium text-foreground">Phone</h2>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">
                    Direct line to project technical leads.
                  </p>
                  <div className="space-y-1">
                    <a
                      href="tel:+919820184729"
                      className="text-xs font-mono font-medium text-foreground hover:text-gold block"
                    >
                      +91 98201 84729
                    </a>
                    <span className="text-xs text-muted-foreground block">
                      Direct Client Advisory Line
                    </span>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/40 mt-4">
                  <a
                    href="tel:+919820184729"
                    className="text-xs text-gold font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Call now <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* WhatsApp */}
              <div
                className="p-6 bg-card border border-border/80 hover:border-gold/50 transition-colors flex flex-col justify-between"
                data-reveal
              >
                <div>
                  <div className="w-10 h-10 bg-emerald-500/10 text-emerald-600 flex items-center justify-center mb-4">
                    <MessageSquare className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-display font-medium text-foreground">WhatsApp</h2>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">
                    Instant chat for drawings, photos &amp; scope queries.
                  </p>
                  <p className="text-xs font-mono text-foreground">+91 98201 84729</p>
                  <span className="text-[0.68rem] text-emerald-600 block mt-1 font-medium">
                    Typical reply: &lt; 15 mins
                  </span>
                </div>
                <div className="pt-4 border-t border-border/40 mt-4">
                  <a
                    href="https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20would%20like%20to%20discuss%20my%20interior%20project."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-gold font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Open WhatsApp <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Email */}
              <div
                className="p-6 bg-card border border-border/80 hover:border-gold/50 transition-colors flex flex-col justify-between"
                data-reveal
              >
                <div>
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center mb-4">
                    <Mail className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-display font-medium text-foreground">Email</h2>
                  <p className="text-xs text-muted-foreground mt-1 mb-4">
                    Send drawings, BOQs, or tender documents.
                  </p>
                  <div className="space-y-1">
                    <a
                      href="mailto:enquiry@interiorsupport.in"
                      className="text-xs font-mono text-foreground hover:text-gold block"
                    >
                      enquiry@interiorsupport.in
                    </a>
                  </div>
                </div>
                <div className="pt-4 border-t border-border/40 mt-4">
                  <a
                    href="mailto:enquiry@interiorsupport.in"
                    className="text-xs text-gold font-medium hover:underline inline-flex items-center gap-1"
                  >
                    Send email <ArrowRight className="w-3 h-3" />
                  </a>
                </div>
              </div>

              {/* Office Address & Hours */}
              <div
                className="p-6 bg-card border border-border/80 hover:border-gold/50 transition-colors flex flex-col justify-between"
                data-reveal
              >
                <div>
                  <div className="w-10 h-10 bg-gold/10 text-gold flex items-center justify-center mb-4">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-display font-medium text-foreground">
                    Bengaluru Headquarters &amp; Hours
                  </h2>
                  <div className="text-xs text-muted-foreground mt-2 leading-relaxed space-y-2">
                    <div>
                      <strong className="text-gold font-medium block">Bengaluru Hub:</strong>
                      2nd Floor, 100 Feet Rd, Indiranagar / The Executive Centre, UB City, Bengaluru 560038
                    </div>
                  </div>
                  <div className="mt-3 text-[0.68rem] text-muted-foreground">
                    <strong className="text-foreground">Hours:</strong> Mon – Sat, 9:00 AM – 7:30 PM
                  </div>
                </div>
                <div className="pt-4 border-t border-border/40 mt-4">
                  <span className="text-xs text-muted-foreground">
                    Site audits active 7 days/week across all Bengaluru zones
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TWO PATHWAYS: ENQUIRY FORM VS DIRECT WALK-IN */}
        <section className="py-16 md:py-20 bg-secondary/30 border-b border-border/60">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <div className="p-8 bg-card border border-border/80 space-y-4" data-reveal>
                <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                  Option 1: Structured Scope Review
                </span>
                <h3 className="text-xl font-display font-medium text-foreground">
                  Prefer to share square footage, drawings &amp; stage upfront?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  Use our comprehensive Enquiry &amp; Quotation form to provide project parameters.
                  We review your details and send an itemized scope assessment within 4 hours.
                </p>
                <div className="pt-2">
                  <Button className="bg-gold text-foreground hover:bg-gold/90" asChild>
                    <Link to="/get-a-quote">
                      Open Enquiry Form <ArrowRight className="w-4 h-4 ml-1.5" />
                    </Link>
                  </Button>
                </div>
              </div>

              <div className="p-8 bg-card border border-border/80 space-y-4" data-reveal>
                <span className="text-xs uppercase tracking-widest font-semibold text-gold">
                  Option 2: Direct Consultation
                </span>
                <h3 className="text-xl font-display font-medium text-foreground">
                  Need immediate clarity on an active site problem?
                </h3>
                <p className="text-xs text-muted-foreground leading-relaxed">
                  A direct phone call is usually enough to diagnose the issue and
                  determine whether an independent audit or project manager is right for your space.
                </p>
                <div className="pt-2 flex flex-wrap gap-3">
                  <a
                    href="tel:+919820184729"
                    className="inline-flex items-center gap-2 px-5 py-2.5 bg-gold text-foreground font-semibold text-xs hover:bg-gold/90 transition-colors shadow-xs"
                  >
                    <Phone className="w-3.5 h-3.5" /> Call +91 98201 84729
                  </a>
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
