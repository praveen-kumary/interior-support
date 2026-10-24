import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowDownRight,
  ArrowRight,
  Clock3,
  Search,
  Sparkles,
  ShieldCheck,
  Calendar,
  Layers,
} from "lucide-react";
import { useState } from "react";

import projectSite from "@/assets/interior-project-site.webp";
import { articles, type Article } from "@/data/articles";
import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";

const categories = [
  "All",
  "Budget & Verification",
  "Project Management",
  "Quality & Inspection",
  "Drawings & Planning",
  "Handover",
];

export const Route = createFileRoute("/blog")({
  component: BlogPage,
  head: () => ({
    meta: [
      {
        title: "Interior Project Journal & Technical Guides Bangalore | Interior Support",
      },
      {
        name: "description",
        content:
          "Authoritative, SEO-rich guides on interior contractor overbilling, BOQ verification, BESCOM load approvals, laser site audits, and snag checklists in Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "interior project management Bangalore blog, BOQ verification guide Bengaluru, interior site inspection checklist Whitefield, fitout guide Indiranagar, apartment handover Koramangala",
      },
      {
        property: "og:title",
        content:
          "Interior Project Journal & Technical Guides Bangalore | Interior Support",
      },
      {
        property: "og:description",
        content:
          "Independent technical field guides for residential and commercial interior fit-outs across Bengaluru.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

function BlogPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredArticles = articles.filter((article) => {
    const matchesCategory =
      selectedCategory === "All" ||
      article.category.toLowerCase() === selectedCategory.toLowerCase();
    const matchesSearch =
      article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.metaDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.targetKeyword.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.quickAnswer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <>
      <ScrollMotion />
      <SiteHeader />
      <main id="top" className="subpage journal-page bg-background text-foreground min-h-screen">
        {/* JOURNAL HERO */}
        <section className="journal-hero" aria-labelledby="journal-heading">
          <div className="journal-hero-image">
            <img
              src={projectSite}
              alt="Project team reviewing architectural plans on site"
              width={1600}
              height={1104}
              fetchPriority="high"
            />
          </div>
          <div className="journal-hero-panel" data-reveal>
            <p className="eyebrow eyebrow-dark">Interior Support / Technical Field Notes</p>
            <h1 id="journal-heading">
              A clearer view
              <br />
              of <em>the work.</em>
            </h1>
            <p>
              Independent thinking on project coordination, on-site checks, BOQ verification, and
              the critical details worth catching before they become costly disputes.
            </p>
            <a className="journal-scroll" href="#journal-list">
              Browse the guides{" "}
              <ArrowDownRight className="w-4 h-4 text-gold" aria-hidden="true" />
            </a>
          </div>
          <span className="journal-edition">TECHNICAL JOURNAL</span>
        </section>

        {/* SEARCH & FILTER CONTROLS */}
        <section className="journal-intro" id="journal-list">
          <div className="section-index">
            <span>THE JOURNAL</span>
            <span className="index-rule" /> Practical Guides &amp; AI Quick Answers
          </div>
          <div>
            <div className="relative mb-6">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search topics (e.g., contractor overbilling, BOQ verification, site inspections, snags)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-card border border-border text-foreground placeholder:text-muted-foreground text-xs font-sans focus:outline-none focus:border-gold"
              />
              {searchQuery && (
                <button
                  type="button"
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground text-xs"
                >
                  Clear
                </button>
              )}
            </div>

            <div className="flex flex-wrap gap-2">
              {categories.map((cat) => (
                <button
                  key={cat}
                  type="button"
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all rounded-none border ${
                    selectedCategory.toLowerCase() === cat.toLowerCase()
                      ? "bg-gold text-foreground border-gold font-semibold"
                      : "bg-card text-muted-foreground border-border hover:border-gold hover:text-foreground"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </section>

        {/* ARTICLES GRID */}
        <section
          className="journal-grid max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-12"
          aria-label="Interior Support articles"
        >
          {filteredArticles.length === 0 ? (
            <div className="col-span-full py-16 text-center">
              <p className="text-muted-foreground text-sm">
                No articles match your search criteria.
              </p>
              <Button
                variant="outline"
                className="mt-4 rounded-none border-border"
                onClick={() => {
                  setSearchQuery("");
                  setSelectedCategory("All");
                }}
              >
                Reset filters
              </Button>
            </div>
          ) : (
            filteredArticles.map((article, index) => (
              <article
                className={`journal-card ambient-card-glow group bg-card/60 border border-border/70 p-5 hover:border-gold/60 transition-all duration-300 shadow-xs hover:shadow-md flex flex-col justify-between ${
                  index === 0 && selectedCategory === "All" && !searchQuery
                    ? "journal-card-featured"
                    : ""
                }`}
                key={article.slug}
                data-reveal
              >
                <div>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: article.slug }}
                    className="journal-card-image relative overflow-hidden aspect-video mb-3.5 block"
                  >
                    <img
                      src={article.image}
                      alt={article.alt}
                      width={index === 0 ? 912 : 1600}
                      height={1104}
                      loading="lazy"
                      className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-cover"
                    />
                  </Link>

                  <div className="journal-card-meta mb-2 flex items-center justify-between">
                    <span className="font-semibold text-xs text-gold uppercase tracking-wider font-mono">
                      {article.category}
                    </span>
                    <span className="text-[0.68rem] text-muted-foreground inline-flex items-center gap-1 font-mono">
                      <Clock3 className="w-3 h-3 text-gold" aria-hidden="true" /> {article.readTime}
                    </span>
                  </div>

                  <h2 className="text-base sm:text-lg font-display font-medium text-foreground group-hover:text-gold transition-colors duration-200 leading-snug">
                    <Link to="/blog/$slug" params={{ slug: article.slug }}>
                      {article.title}
                    </Link>
                  </h2>
                  <p className="text-xs text-muted-foreground mt-2 line-clamp-2 leading-relaxed">
                    {article.metaDescription}
                  </p>

                  {/* Quick Answer Snippet Teaser */}
                  <div className="mt-3.5 p-3 bg-gold/10 border-l-2 border-gold text-[0.68rem] text-foreground/90 leading-relaxed font-body">
                    <strong className="text-gold uppercase tracking-wider block text-[0.6rem] mb-0.5 font-mono">
                      Quick Answer:
                    </strong>
                    <span className="line-clamp-2">{article.quickAnswer}</span>
                  </div>
                </div>

                <div className="mt-5 pt-3.5 border-t border-border/40 flex items-center justify-between">
                  <span className="text-[0.68rem] text-muted-foreground font-mono">
                    {article.date}
                  </span>
                  <Link
                    to="/blog/$slug"
                    params={{ slug: article.slug }}
                    className="article-read inline-flex items-center gap-1 text-xs font-semibold text-foreground group-hover:text-gold transition-colors"
                  >
                    Read full guide{" "}
                    <ArrowRight
                      className="w-3.5 h-3.5 text-gold group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </div>
              </article>
            ))
          )}
        </section>

        {/* JOURNAL CTA */}
        <section
          className="journal-cta py-20 bg-card text-center border-t border-border"
          data-reveal
        >
          <div className="shell-container max-w-3xl mx-auto px-4 md:px-8 space-y-4">
            <span className="eyebrow eyebrow-dark text-xs uppercase tracking-widest font-semibold text-gold font-mono">
              In the middle of an active fit-out?
            </span>
            <h2 className="text-3xl md:text-4xl font-display font-medium">
              Get independent clarity on <em>your next milestone.</em>
            </h2>
            <p className="text-xs sm:text-sm text-muted-foreground max-w-xl mx-auto leading-relaxed">
              Interiors go wrong not because of bad design, but because of gaps between drawing,
              site, and billing. Interior Support closes those gaps.
            </p>
            <div className="pt-2 flex justify-center gap-3">
              <Button className="hero-button" asChild>
                <Link to="/contact">
                  Start a confidential conversation{" "}
                  <ArrowRight className="w-3.5 h-3.5 ml-1" aria-hidden="true" />
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </>
  );
}
