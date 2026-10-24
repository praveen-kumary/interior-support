import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRight, Compass, FileText, FolderKanban, ShieldCheck } from "lucide-react";

import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { articles } from "@/data/articles";

export const Route = createFileRoute("/sitemap")({
  head: () => ({
    meta: [
      {
        title: "HTML Sitemap & Navigation Index | Interior Support Bengaluru",
      },
      {
        name: "description",
        content:
          "Complete index of all disciplines, technical field guides, project audits, and client services provided by Interior Support across Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "interior support sitemap, site index, interior project management Bangalore directory, BOQ audit guides",
      },
      {
        property: "og:title",
        content: "Sitemap | Interior Support — Independent Project Stewardship",
      },
      {
        property: "og:description",
        content:
          "Complete directory of disciplines, inspection frameworks, and technical field articles.",
      },
      { property: "og:type", content: "website" },
    ],
  }),
  component: SitemapPage,
});

function SitemapPage() {
  const mainPages = [
    { label: "Home", to: "/", desc: "Independent Interior PMC & Fiduciary Oversight" },
    { label: "About Our Firm", to: "/about-us", desc: "Zero Kickbacks, Single-Point Accountability" },
    { label: "Services Overview", to: "/services", desc: "4 Core Technical Disciplines" },
    { label: "Project Portfolio", to: "/gallery", desc: "Real On-Site Field Audit Photography" },
    { label: "Pricing & Retainers", to: "/pricing", desc: "Transparent Fixed Monthly & Milestone Rates" },
    { label: "Technical Journal", to: "/blog", desc: "Forensic Field Guides & Contractor Audits" },
    { label: "Enquiry & Quotation", to: "/get-a-quote", desc: "Scope Assessment & Itemized Feasibility" },
    { label: "Contact Us", to: "/contact-us", desc: "Direct Advisory Line & Technical Desk" },
  ];

  const servicePages = [
    {
      label: "Project Management",
      to: "/services/project-management",
      desc: "Architectural alignment, CPM scheduling, contractor accountability & zero delay execution.",
    },
    {
      label: "Site Inspection & Quality Control",
      to: "/services/site-inspection-quality-control",
      desc: "120-point laser tolerance checks, concealed MEP pressure tests & material compliance.",
    },
    {
      label: "BOQ & Cost Verification",
      to: "/services/boq-execution-verification",
      desc: "Independent tender review, measured quantity audits & variation dispute resolution.",
    },
    {
      label: "Handover & Post-Sale Support",
      to: "/services/handover-post-sale-support",
      desc: "Pre-handover snag matrix, retention payment safeguard & warranty enforcement.",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <ScrollMotion />
      <SiteHeader />

      <main className="flex-1">
        {/* BREADCRUMB */}
        <div className="bg-secondary/40 border-b border-border/40 py-2.5">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 text-xs text-muted-foreground flex items-center gap-2">
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <span className="text-foreground">Sitemap</span>
          </div>
        </div>

        {/* HERO */}
        <section className="py-14 sm:py-20 bg-card border-b border-border/60">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <span className="text-xs uppercase tracking-widest font-mono text-gold block mb-2">
              Architecture &amp; Navigation Index
            </span>
            <h1 className="text-3xl sm:text-5xl font-display font-medium text-foreground tracking-tight">
              Site Index &amp; Structure
            </h1>
            <p className="mt-3 text-sm sm:text-base text-muted-foreground max-w-2xl leading-relaxed">
              Explore every discipline, field audit framework, and technical publication published
              by Interior Support across Bengaluru.
            </p>
          </div>
        </section>

        {/* DIRECTORY GRID */}
        <section className="py-16 sm:py-20">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 space-y-16">
            {/* 1. Core Pages & 2. Disciplines */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
              {/* Primary Routes */}
              <div className="p-8 bg-card border border-border/80 space-y-6" data-reveal>
                <div className="flex items-center gap-3 pb-4 border-b border-border/60">
                  <div className="w-9 h-9 bg-gold/10 text-gold flex items-center justify-center rounded-xs">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-display font-medium text-foreground">
                      Core Navigation
                    </h2>
                    <span className="text-xs text-muted-foreground">Primary firm gateways</span>
                  </div>
                </div>

                <div className="space-y-3">
                  {mainPages.map((page) => (
                    <Link
                      key={page.to}
                      to={page.to}
                      className="group block p-3 hover:bg-secondary/60 rounded-xs border border-transparent hover:border-gold/30 transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-medium text-foreground group-hover:text-gold transition-colors">
                          {page.label}
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 text-muted-foreground opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-0.5">{page.desc}</p>
                    </Link>
                  ))}
                </div>
              </div>

              {/* 4 Disciplines */}
              <div className="p-8 bg-card border border-border/80 space-y-6" data-reveal>
                <div className="flex items-center gap-3 pb-4 border-b border-border/60">
                  <div className="w-9 h-9 bg-gold/10 text-gold flex items-center justify-center rounded-xs">
                    <FolderKanban className="w-5 h-5" />
                  </div>
                  <div>
                    <h2 className="text-lg font-display font-medium text-foreground">
                      Dedicated Disciplines
                    </h2>
                    <span className="text-xs text-muted-foreground">
                      Technical project management services
                    </span>
                  </div>
                </div>

                <div className="space-y-4">
                  {servicePages.map((s) => (
                    <Link
                      key={s.to}
                      to={s.to}
                      className="group block p-4 bg-background border border-border/60 hover:border-gold/40 rounded-xs transition-all"
                    >
                      <div className="flex items-center justify-between">
                        <h3 className="text-sm font-display font-semibold text-foreground group-hover:text-gold transition-colors">
                          {s.label}
                        </h3>
                        <ArrowRight className="w-3.5 h-3.5 text-gold opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all" />
                      </div>
                      <p className="text-xs text-muted-foreground mt-1.5 leading-relaxed">
                        {s.desc}
                      </p>
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            {/* 3. Journal & Technical Articles */}
            <div className="p-8 bg-card border border-border/80 space-y-6" data-reveal>
              <div className="flex items-center gap-3 pb-4 border-b border-border/60">
                <div className="w-9 h-9 bg-gold/10 text-gold flex items-center justify-center rounded-xs">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <h2 className="text-lg font-display font-medium text-foreground">
                    Technical Journal &amp; Field Audits ({articles.length} Guides)
                  </h2>
                  <span className="text-xs text-muted-foreground">
                    Forensic cost analysis, contractor verification &amp; quality standards
                  </span>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                {articles.map((art) => (
                  <Link
                    key={art.slug}
                    to="/blog/$slug"
                    params={{ slug: art.slug }}
                    className="p-4 bg-background border border-border/60 hover:border-gold/50 rounded-xs flex flex-col justify-between group transition-all"
                  >
                    <div>
                      <span className="text-[0.65rem] font-mono text-gold uppercase tracking-wider block mb-1">
                        {art.category} • {art.readTime}
                      </span>
                      <h3 className="text-xs font-display font-semibold text-foreground group-hover:text-gold transition-colors line-clamp-2">
                        {art.title}
                      </h3>
                    </div>
                    <div className="pt-3 mt-3 border-t border-border/30 flex items-center justify-between text-[0.7rem] text-muted-foreground">
                      <span>{art.date}</span>
                      <span className="text-gold font-medium group-hover:underline inline-flex items-center gap-1">
                        Read Guide <ArrowRight className="w-3 h-3" />
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>

            {/* 4. Machine Readable Index */}
            <div className="p-6 bg-secondary/30 border border-border/60 flex flex-wrap items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="w-5 h-5 text-gold shrink-0" />
                <p className="text-xs text-muted-foreground">
                  Looking for the machine-readable search engine index? View our live XML sitemap.
                </p>
              </div>
              <a
                href="/sitemap.xml"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs font-mono font-medium text-gold hover:underline inline-flex items-center gap-1"
              >
                Open sitemap.xml <ArrowRight className="w-3 h-3" />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
