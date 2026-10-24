import { createFileRoute, Link, notFound } from "@tanstack/react-router";
import {
  ArrowLeft,
  ArrowRight,
  Clock3,
  Calendar,
  ShieldCheck,
  Sparkles,
  CheckCircle2,
  FileSpreadsheet,
  HelpCircle,
  ChevronDown,
  MessageSquare,
  Share2,
  Check,
  Send,
  Building2,
  MapPin,
  Layers,
} from "lucide-react";
import { useState, useEffect } from "react";

import { articles, type Article } from "@/data/articles";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

export const Route = createFileRoute("/blog_/$slug")({
  loader: ({ params }) => {
    const article = articles.find((a) => a.slug === params.slug);
    if (!article) {
      throw notFound();
    }
    return { article };
  },
  component: BlogPostPage,
  head: ({ loaderData }) => {
    const article = loaderData?.article;
    if (!article) return {};

    const schemaData = {
      "@context": "https://schema.org",
      "@graph": [
        {
          "@type": "TechArticle",
          headline: article.title,
          description: article.metaDescription,
          image: article.image,
          datePublished: "2026-01-15T09:00:00+05:30",
          dateModified: "2026-10-23T09:00:00+05:30",
          author: {
            "@type": "Organization",
            name: "Interior Support Engineering & Quality Team",
            url: "https://interiorsupport.in",
          },
          publisher: {
            "@type": "Organization",
            name: "Interior Support Private Limited",
            logo: {
              "@type": "ImageObject",
              url: "https://interiorsupport.in/logo.png",
            },
          },
        },
        {
          "@type": "FAQPage",
          mainEntity: article.faqs.map((f) => ({
            "@type": "Question",
            name: f.q,
            acceptedAnswer: {
              "@type": "Answer",
              text: f.a,
            },
          })),
        },
      ],
    };

    return {
      meta: [
        { title: `${article.title} | Interior Support Field Guides` },
        { name: "description", content: article.metaDescription },
        { name: "keywords", content: article.targetKeyword },
        { property: "og:title", content: `${article.title} | Interior Support` },
        { property: "og:description", content: article.metaDescription },
        { property: "og:type", content: "article" },
        { property: "og:image", content: article.image },
        { name: "twitter:card", content: "summary_large_image" },
        { name: "twitter:title", content: article.title },
        { name: "twitter:description", content: article.metaDescription },
      ],
      scripts: [
        {
          type: "application/ld+json",
          children: JSON.stringify(schemaData),
        },
      ],
    };
  },
});

function BlogPostPage() {
  const { article } = Route.useLoaderData();
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);
  const [readingProgress, setReadingProgress] = useState(0);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    location: "Bengaluru (Indiranagar / Koramangala / CBD)",
    stage: "In Execution",
    estimatedDiscrepancy: "",
    notes: "",
  });

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const totalHeight = document.documentElement.scrollHeight - window.innerHeight;
      const progress = totalHeight > 0 ? (scrollY / totalHeight) * 100 : 0;
      setReadingProgress(Math.min(Math.max(progress, 0), 100));
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormSubmitted(true);
  };

  // Find related articles
  const otherArticles = articles.filter((a) => a.slug !== article.slug).slice(0, 3);

  return (
    <>
      {/* READING PROGRESS BAR */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-gold z-[60] transition-all duration-100 ease-out"
        style={{ width: `${readingProgress}%` }}
        aria-hidden="true"
      />

      <ScrollMotion />
      <SiteHeader />

      <main className="bg-background text-foreground pt-28 sm:pt-32 pb-24">
        {/* ARTICLE EDITORIAL HEADER */}
        <article className="max-w-4xl mx-auto px-5 sm:px-6 lg:px-8">
          {/* Breadcrumb Navigation */}
          <nav
            aria-label="Breadcrumb"
            className="mb-6 flex items-center gap-2 text-xs text-muted-foreground font-mono"
          >
            <Link to="/" className="hover:text-gold transition-colors">
              Home
            </Link>
            <span>/</span>
            <Link to="/blog" className="hover:text-gold transition-colors">
              Journal &amp; Field Guides
            </Link>
            <span>/</span>
            <span className="text-gold font-medium truncate max-w-[200px] sm:max-w-xs">
              {article.category}
            </span>
          </nav>

          {/* Meta Badges */}
          <div className="flex flex-wrap items-center gap-2.5 text-xs text-muted-foreground font-mono mb-4">
            <span className="bg-gold/15 text-gold border border-gold/40 px-2.5 py-0.5 font-semibold uppercase tracking-wider text-[0.68rem]">
              {article.category}
            </span>
            <span className="flex items-center gap-1">
              <Clock3 className="w-3.5 h-3.5 text-gold" /> {article.readTime}
            </span>
            <span>•</span>
            <span className="flex items-center gap-1">
              <Calendar className="w-3.5 h-3.5 text-gold" /> {article.date}
            </span>
          </div>

          {/* H1 Heading */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-display font-medium tracking-tight text-foreground leading-[1.12] mb-6">
            {article.title}
          </h1>

          {/* Subheading / Summary */}
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed font-body mb-8">
            {article.metaDescription}
          </p>

          {/* Peer Reviewer Credential Badge */}
          <div className="flex items-center gap-3 p-3.5 bg-card border border-border/80 rounded-xs text-xs text-muted-foreground mb-8">
            <div className="w-8 h-8 rounded-full bg-gold/15 border border-gold/40 flex items-center justify-center text-gold shrink-0">
              <ShieldCheck className="w-4 h-4" />
            </div>
            <div>
              <span className="text-foreground font-medium block">{article.reviewer}</span>
              <span className="text-[0.68rem] text-muted-foreground">
                Independent Quality &amp; Cost Advisory • Zero Vendor Commissions
              </span>
            </div>
          </div>

          {/* Featured Cover Photography */}
          <div className="relative aspect-[16/9] overflow-hidden rounded-xs border border-border shadow-md mb-10 group">
            <img
              src={article.image}
              alt={article.alt}
              className="w-full h-full object-cover group-hover:scale-102 transition-transform duration-700"
              width={1600}
              height={900}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-60 pointer-events-none" />
            <span className="absolute bottom-3 left-4 text-[0.68rem] font-mono text-white/80 bg-black/50 px-2 py-0.5 rounded-xs backdrop-blur-xs">
              {article.alt}
            </span>
          </div>

          {/* EXECUTIVE BRIEFING / AI QUICK ANSWER */}
          <div className="p-6 bg-gold/10 border-l-4 border-gold shadow-xs mb-10">
            <div className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-gold mb-2 font-mono">
              <Sparkles className="w-4 h-4" /> Executive Briefing &amp; AI Quick Answer
            </div>
            <p className="text-sm sm:text-base text-foreground leading-relaxed font-medium">
              {article.quickAnswer}
            </p>
          </div>

          {/* KEY TAKEAWAYS GRID */}
          <div className="p-6 bg-card border border-border shadow-xs mb-12">
            <h2 className="text-sm font-semibold uppercase tracking-wider font-mono text-gold mb-4 flex items-center gap-2">
              <CheckCircle2 className="w-4 h-4" /> Key Technical Takeaways
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
              {article.keyTakeaways.map((point) => (
                <div
                  key={point}
                  className="flex items-start gap-2.5 text-xs text-muted-foreground leading-relaxed"
                >
                  <Check className="w-4 h-4 text-gold shrink-0 mt-0.5" />
                  <span>{point}</span>
                </div>
              ))}
            </div>
          </div>

          {/* ARTICLE BODY SECTIONS */}
          <div className="space-y-12 border-b border-border pb-12">
            {article.sections.map((section, idx) => (
              <section key={section.title} className="space-y-4">
                <h2 className="text-xl sm:text-2xl font-display font-medium text-foreground flex items-baseline gap-2.5 leading-snug">
                  <span className="text-gold font-mono text-sm sm:text-base font-bold">
                    0{idx + 1}.
                  </span>
                  <span>{section.title}</span>
                </h2>
                <p className="text-sm sm:text-base text-muted-foreground leading-relaxed font-body">
                  {section.content}
                </p>

                {section.bulletPoints && (
                  <div className="mt-3 pl-4 border-l-2 border-gold/40 space-y-2">
                    {section.bulletPoints.map((bp) => (
                      <p key={bp} className="text-xs sm:text-sm text-foreground/90 font-medium">
                        • {bp}
                      </p>
                    ))}
                  </div>
                )}
              </section>
            ))}
          </div>

          {/* REAL-WORLD SITE INSPECTION FINDING EVIDENCE */}
          <div
            className="my-12 p-6 bg-card border border-gold/40 shadow-sm rounded-none"
            data-reveal
          >
            <div className="flex items-center gap-2 text-xs font-mono font-semibold uppercase tracking-wider text-gold mb-3">
              <FileSpreadsheet className="w-4 h-4" /> Live Case Evidence from an Active Project
              Audit
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              <div className="p-3.5 bg-background border border-border/80">
                <span className="text-[0.68rem] text-muted-foreground uppercase font-mono block mb-1">
                  Checkpoint
                </span>
                <span className="font-medium text-foreground">
                  {article.fieldAuditSample.checkpoint}
                </span>
              </div>
              <div className="p-3.5 bg-background border border-border/80">
                <span className="text-[0.68rem] text-muted-foreground uppercase font-mono block mb-1">
                  Architectural Drawing Spec
                </span>
                <span className="text-muted-foreground">
                  {article.fieldAuditSample.architecturalSpec}
                </span>
              </div>
              <div className="p-3.5 bg-amber-500/10 border border-amber-500/30 text-amber-900 dark:text-amber-200">
                <span className="text-[0.68rem] uppercase font-mono block mb-1 font-semibold">
                  Actual Site Finding
                </span>
                <span>{article.fieldAuditSample.siteFinding}</span>
              </div>
              <div className="p-3.5 bg-emerald-500/10 border border-emerald-500/30 text-emerald-900 dark:text-emerald-200">
                <span className="text-[0.68rem] uppercase font-mono block mb-1 font-semibold">
                  Resolution &amp; Cost Impact
                </span>
                <span className="font-medium">{article.fieldAuditSample.costImpact}</span>
              </div>
            </div>
          </div>

          {/* FREQUENTLY ASKED QUESTIONS */}
          <section className="my-14" data-reveal>
            <h2 className="text-2xl font-display font-medium text-foreground mb-6 flex items-center gap-2">
              <HelpCircle className="w-5 h-5 text-gold" /> Frequently Asked Questions
            </h2>
            <div className="space-y-3">
              {article.faqs.map((faq, idx) => (
                <div key={faq.q} className="border border-border bg-card">
                  <button
                    type="button"
                    onClick={() => setOpenFaqIndex(openFaqIndex === idx ? null : idx)}
                    className="w-full text-left p-4.5 font-display text-sm font-medium text-foreground hover:text-gold flex justify-between items-center gap-3 transition-colors"
                  >
                    <span>{faq.q}</span>
                    <ChevronDown
                      className={`w-4 h-4 text-gold shrink-0 transition-transform duration-200 ${
                        openFaqIndex === idx ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                  {openFaqIndex === idx && (
                    <div className="px-4.5 pb-4.5 pt-1 text-xs sm:text-sm text-muted-foreground leading-relaxed border-t border-border/40 font-body">
                      {faq.a}
                    </div>
                  )}
                </div>
              ))}
            </div>
          </section>

          {/* CONTEXTUAL PROBLEM-SOLVING CONSULTATION INTAKE CARD */}
          <section
            className="my-16 p-6 sm:p-10 bg-card border-2 border-gold/60 shadow-xl rounded-none relative overflow-hidden"
            data-reveal
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/10 rounded-full blur-2xl pointer-events-none" />

            <div className="max-w-2xl mb-8">
              <span className="text-xs uppercase font-semibold tracking-widest text-gold font-mono flex items-center gap-1.5 mb-2">
                <ShieldCheck className="w-4 h-4" /> Technical Problem Resolution
              </span>
              <h2 className="text-2xl sm:text-3xl font-display font-medium text-foreground leading-tight">
                {article.problemIntake.problemHeadline}
              </h2>
              <p className="text-xs sm:text-sm text-muted-foreground mt-2 leading-relaxed font-body">
                {article.problemIntake.problemSubtitle}
              </p>
              <div className="mt-3 inline-flex items-center gap-2 text-xs font-mono text-gold bg-gold/10 px-3 py-1 border border-gold/30">
                <span>Outcome:</span>
                <span className="font-semibold text-foreground">
                  {article.problemIntake.estimatedSavingMetric}
                </span>
              </div>
            </div>

            {formSubmitted ? (
              <div className="p-8 bg-emerald-500/10 border border-emerald-500/40 text-center space-y-3">
                <CheckCircle2 className="w-10 h-10 text-emerald-600 mx-auto" />
                <h3 className="text-lg font-display font-medium text-foreground">
                  Inquiry Received. A Senior Engineer Will Review Your Case.
                </h3>
                <p className="text-xs text-muted-foreground max-w-md mx-auto">
                  We maintain strict client confidentiality. You will receive a direct callback or
                  WhatsApp advisory within 4 business hours.
                </p>
                <div className="pt-2">
                  <a
                    href={`https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20just%20submitted%20an%20audit%20request%20regarding:%20${encodeURIComponent(
                      article.title,
                    )}.`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-medium rounded-xs shadow-xs"
                  >
                    <MessageSquare className="w-4 h-4" /> Chat Directly with Engineer on WhatsApp
                  </a>
                </div>
              </div>
            ) : (
              <form onSubmit={handleFormSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
                      Your Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Vikram Singhania"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border text-foreground text-xs focus:outline-none focus:border-gold"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
                      Contact Phone / WhatsApp *
                    </label>
                    <input
                      type="tel"
                      required
                      placeholder="+91 98200 00000"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border text-foreground text-xs focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
                      Project Location
                    </label>
                    <select
                      value={formData.location}
                      onChange={(e) => setFormData({ ...formData, location: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border text-foreground text-xs focus:outline-none focus:border-gold"
                    >
                      <option value="Bengaluru (Indiranagar / Koramangala / CBD)">
                        Bengaluru (Indiranagar / Koramangala / CBD)
                      </option>
                      <option value="Bengaluru (Whitefield / Bellandur / ORR)">
                        Bengaluru (Whitefield / Bellandur / ORR)
                      </option>
                      <option value="Bengaluru (HSR / Sarjapur / South Blr)">
                        Bengaluru (HSR / Sarjapur / South Blr)
                      </option>
                      <option value="Bengaluru (North Blr / Hebbal / Villas)">
                        Bengaluru (North Blr / Hebbal / Villas)
                      </option>
                      <option value="Bengaluru Central (Lavelle Rd / Sadashivanagar / CBD)">
                        Bengaluru Central (Lavelle Rd / Sadashivanagar / CBD)
                      </option>
                      <option value="Bengaluru South & West (JP Nagar / Jayanagar / Malleshwaram)">
                        Bengaluru South & West (JP Nagar / Jayanagar / Malleshwaram)
                      </option>
                      <option value="Other">Other Region / NRI Investor</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
                      Current Stage
                    </label>
                    <select
                      value={formData.stage}
                      onChange={(e) => setFormData({ ...formData, stage: e.target.value })}
                      className="w-full px-3.5 py-2.5 bg-background border border-border text-foreground text-xs focus:outline-none focus:border-gold"
                    >
                      <option value="Pre-Execution / Tender">Pre-Execution / Tender</option>
                      <option value="In Execution (Concealed/MEP)">
                        In Execution (Concealed/MEP)
                      </option>
                      <option value="Finishing & Carpentry">Finishing &amp; Carpentry</option>
                      <option value="Pre-Handover Snagging">Pre-Handover Snagging</option>
                      <option value="Contractor Billing Dispute">Contractor Billing Dispute</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
                      Disputed / Project Value
                    </label>
                    <input
                      type="text"
                      placeholder="e.g. ₹5 Lakhs Disputed"
                      value={formData.estimatedDiscrepancy}
                      onChange={(e) =>
                        setFormData({ ...formData, estimatedDiscrepancy: e.target.value })
                      }
                      className="w-full px-3.5 py-2.5 bg-background border border-border text-foreground text-xs focus:outline-none focus:border-gold"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-mono uppercase text-muted-foreground mb-1.5">
                    Describe Your Current Site Situation or Concern
                  </label>
                  <textarea
                    rows={3}
                    placeholder="Provide details on contractor claims, missing specifications, or specific quality concerns..."
                    value={formData.notes}
                    onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                    className="w-full px-3.5 py-2.5 bg-background border border-border text-foreground text-xs focus:outline-none focus:border-gold resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-2">
                  <Button
                    type="submit"
                    className="w-full sm:w-auto bg-gold text-[#141311] hover:bg-gold/90 font-semibold text-xs px-6 py-3 h-11 btn-gold-sheen shadow-sm"
                  >
                    <span>Request Confidential Technical Audit</span>
                    <Send className="w-3.5 h-3.5 ml-2" />
                  </Button>

                  <div className="text-center sm:text-right text-xs text-muted-foreground">
                    <span>Or direct technical escalation: </span>
                    <a
                      href={`https://wa.me/919820184729?text=Hello%20Interior%20Support,%20I%20need%20urgent%20advisory%20regarding:%20${encodeURIComponent(
                        article.title,
                      )}.`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold font-medium hover:underline inline-flex items-center gap-1"
                    >
                      <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Consultant
                    </a>
                  </div>
                </div>
              </form>
            )}

            <div className="mt-8 pt-4 border-t border-border/40 flex flex-wrap items-center justify-between gap-2 text-xs text-muted-foreground">
              <span>Related Dedicated Discipline:</span>
              <Link
                to={article.problemIntake.serviceLink}
                className="text-gold hover:underline font-mono inline-flex items-center gap-1"
              >
                {article.problemIntake.serviceName} <ArrowRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </section>

          {/* RELATED FIELD GUIDES */}
          <section className="mt-16 pt-12 border-t border-border" data-reveal>
            <div className="flex items-center justify-between mb-8">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-gold">
                  Further Reading
                </span>
                <h3 className="text-xl sm:text-2xl font-display font-medium text-foreground">
                  Related Articles &amp; Insights
                </h3>
              </div>
              <Button variant="outline" className="text-xs" asChild>
                <Link to="/blog">View All Articles</Link>
              </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {otherArticles.map((rel) => (
                <Link
                  key={rel.slug}
                  to="/blog/$slug"
                  params={{ slug: rel.slug }}
                  className="bg-card border border-border/80 hover:border-gold/60 p-4 transition-all group flex flex-col justify-between"
                >
                  <div>
                    <div className="aspect-video overflow-hidden mb-3">
                      <img
                        src={rel.image}
                        alt={rel.alt}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <span className="text-[0.65rem] font-mono text-gold uppercase tracking-wider block mb-1">
                      {rel.category}
                    </span>
                    <h4 className="text-sm font-display font-medium text-foreground group-hover:text-gold transition-colors leading-snug">
                      {rel.title}
                    </h4>
                  </div>
                  <span className="text-xs text-gold inline-flex items-center gap-1 mt-4 font-medium">
                    Read Guide{" "}
                    <ArrowRight className="w-3 h-3 group-hover:translate-x-1 transition-transform" />
                  </span>
                </Link>
              ))}
            </div>
          </section>
        </article>
      </main>

      <SiteFooter />
    </>
  );
}
