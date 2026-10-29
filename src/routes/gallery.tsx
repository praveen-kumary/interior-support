import { createFileRoute, Link } from "@tanstack/react-router";
import {
  ArrowRight,
  Filter,
  Maximize2,
  X,
  CheckCircle2,
  ShieldCheck,
  MapPin,
  ChevronLeft,
  ChevronRight,
  Layers,
  Sparkles,
  Building2,
  Check,
} from "lucide-react";
import { useState, useEffect, useMemo } from "react";

import { ScrollMotion } from "@/components/scroll-motion";
import { SiteFooter, SiteHeader } from "@/components/site-chrome";
import { Button } from "@/components/ui/button";
import { galleryItems, type GalleryItem } from "@/data/gallery-items";

export const Route = createFileRoute("/gallery")({
  component: GalleryPage,
  head: () => ({
    meta: [
      {
        title: "Real Interior Project Gallery | Fit-Out Audits & Execution | Interior Support",
      },
      {
        name: "description",
        content:
          "Explore 60+ authentic residential and commercial interior fit-out projects audited and managed by Interior Support across Bengaluru — modular kitchens, wardrobes, boiserie wall paneling, and site quality audits.",
      },
      {
        name: "keywords",
        content:
          "interior execution gallery, modular kitchen site photos, wardrobe installation Bengaluru, interior quality audit Bangalore, interior fit-out proof, real interior site work",
      },
      {
        property: "og:title",
        content: "Real Interior Project Gallery | Interior Support",
      },
      {
        property: "og:description",
        content:
          "Real Sites. Real Fit-Outs. 100% authentic site execution photography covering modular kitchens, bespoke wardrobes, wall joinery, and technical site audits.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
});

type FilterCategory =
  | "all"
  | "modular-kitchens"
  | "wardrobes-storage"
  | "wall-paneling-joinery"
  | "living-tv-units"
  | "site-quality-audits";

interface FilterTab {
  id: FilterCategory;
  label: string;
}

const filterTabs: readonly FilterTab[] = [
  { id: "all", label: "All Works" },
  { id: "modular-kitchens", label: "Modular Kitchens" },
  { id: "wardrobes-storage", label: "Wardrobes & Storage" },
  { id: "wall-paneling-joinery", label: "Wall Paneling & Joinery" },
  { id: "living-tv-units", label: "TV & Living Consoles" },
  { id: "site-quality-audits", label: "Site Quality Audits" },
] as const;

export function GalleryPage() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>("all");
  const [selectedItem, setSelectedItem] = useState<GalleryItem | null>(null);

  // Filter items
  const filteredItems = useMemo(() => {
    if (activeFilter === "all") return galleryItems;
    return galleryItems.filter((item) => item.category === activeFilter);
  }, [activeFilter]);

  // Counts for each tab
  const categoryCounts = useMemo(() => {
    const counts: Record<string, number> = { all: galleryItems.length };
    galleryItems.forEach((item) => {
      counts[item.category] = (counts[item.category] || 0) + 1;
    });
    return counts;
  }, []);

  // Modal navigation indices
  const currentIndex = useMemo(() => {
    if (!selectedItem) return -1;
    return filteredItems.findIndex((it) => it.id === selectedItem.id);
  }, [selectedItem, filteredItems]);

  const handlePrev = () => {
    if (filteredItems.length === 0) return;
    if (currentIndex > 0) {
      setSelectedItem(filteredItems[currentIndex - 1]);
    } else {
      setSelectedItem(filteredItems[filteredItems.length - 1]);
    }
  };

  const handleNext = () => {
    if (filteredItems.length === 0) return;
    if (currentIndex < filteredItems.length - 1) {
      setSelectedItem(filteredItems[currentIndex + 1]);
    } else {
      setSelectedItem(filteredItems[0]);
    }
  };

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!selectedItem) return;
      if (e.key === "Escape") setSelectedItem(null);
      if (e.key === "ArrowLeft") handlePrev();
      if (e.key === "ArrowRight") handleNext();
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [selectedItem, currentIndex, filteredItems]);

  return (
    <div className="page-shell bg-background text-foreground min-h-screen flex flex-col">
      <SiteHeader />
      <ScrollMotion />

      <main className="flex-grow">
        {/* HERO SECTION */}
        <section className="bg-foreground text-primary-foreground pt-28 pb-16 md:pt-36 md:pb-24 border-b border-border/20">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            <div className="breadcrumb flex items-center gap-2 text-xs text-gold uppercase tracking-wider mb-4">
              <Link to="/" className="hover:underline">
                Home
              </Link>
              <span>/</span>
              <span>Portfolio</span>
            </div>

            <div className="max-w-3xl space-y-4">
              <span className="inline-flex items-center gap-1.5 text-xs uppercase tracking-widest font-semibold px-2.5 py-1 bg-gold/15 text-gold border border-gold/30">
                <ShieldCheck className="w-3.5 h-3.5" />
                Verified Site Execution Portfolio
              </span>
              <h1 className="text-3xl md:text-5xl font-display font-medium tracking-tight text-primary-foreground">
                Project Portfolio &amp; Site Archives
              </h1>
              <p className="text-base md:text-lg text-primary-foreground/80 leading-relaxed font-body">
                Field documentation from completed residential and commercial fit-outs
                managed, inspected, and verified across Bengaluru. Covering bespoke millwork,
                modular joinery, and technical milestone audits.
              </p>
            </div>
          </div>
        </section>

        {/* FILTER BAR (STICKY) */}
        <section className="bg-card border-b border-border/60 sticky top-[69px] z-30 backdrop-blur-md shadow-xs">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-3.5">
            <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-3">
              <div className="flex items-center gap-2">
                <Filter className="w-4 h-4 text-gold shrink-0" />
                <span className="text-xs uppercase font-semibold tracking-wider text-muted-foreground">
                  Filter by Trade:
                </span>
              </div>

              <div className="flex flex-wrap items-center gap-2 w-full md:w-auto">
                {filterTabs.map((tab) => {
                  const count = categoryCounts[tab.id] || 0;
                  const isActive = activeFilter === tab.id;
                  return (
                    <button
                      key={tab.id}
                      type="button"
                      onClick={() => setActiveFilter(tab.id)}
                      className={`px-3 py-1.5 text-xs font-medium tracking-wide transition-all border flex items-center gap-1.5 interactive-pill ${
                        isActive
                          ? "bg-gold text-foreground border-gold font-semibold shadow-xs"
                          : "bg-background text-muted-foreground border-border hover:border-gold hover:text-foreground"
                      }`}
                    >
                      <span>{tab.label}</span>
                      <span
                        className={`text-[0.65rem] px-1.5 py-0.2 rounded-full font-mono ${
                          isActive
                            ? "bg-foreground/20 text-foreground"
                            : "bg-muted text-muted-foreground"
                        }`}
                      >
                        {count}
                      </span>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* GALLERY GRID */}
        <section className="py-12 md:py-16 bg-background border-b border-border/60">
          <div className="shell-container max-w-7xl mx-auto px-5 sm:px-6 lg:px-8">
            {/* Active Category Header */}
            <div className="flex items-center justify-between mb-8 pb-3 border-b border-border/40">
              <div>
                <h2 className="text-lg md:text-xl font-display font-medium text-foreground capitalize">
                  {filterTabs.find((t) => t.id === activeFilter)?.label || "Portfolio"}
                </h2>
                <p className="text-xs text-muted-foreground">
                  Showing {filteredItems.length} verified project site installations
                </p>
              </div>
            </div>

            {/* Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-7">
              {filteredItems.map((item, index) => (
                <article
                  key={item.id}
                  className="group bg-card border border-border/80 overflow-hidden hover:border-gold/60 transition-all duration-300 shadow-xs flex flex-col"
                  data-reveal
                >
                  {/* Photo Container */}
                  <div
                    className="relative aspect-[4/3] overflow-hidden bg-muted/40 cursor-pointer"
                    onClick={() => setSelectedItem(item)}
                  >
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                      loading="lazy"
                      width={640}
                      height={480}
                    />

                    {/* Gradient Overlay for badges */}
                    <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-black/20 opacity-60 group-hover:opacity-40 transition-opacity" />

                    {/* Top Category Badge */}
                    <div className="absolute top-3 left-3 pointer-events-none">
                      <span className="bg-foreground/90 backdrop-blur-xs text-primary-foreground text-[0.65rem] font-semibold uppercase tracking-wider px-2 py-0.5 border border-border/40">
                        {item.categoryLabel}
                      </span>
                    </div>

                    {/* Hover Inspect Overlay */}
                    <div className="absolute inset-0 bg-foreground/30 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center pointer-events-none">
                      <span className="bg-gold text-foreground text-xs font-semibold px-3 py-1.5 shadow-lg inline-flex items-center gap-1.5">
                        <Maximize2 className="w-3.5 h-3.5" /> Inspect Technical Notes
                      </span>
                    </div>

                    {/* Bottom Image Sub-strip */}
                    <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-[0.7rem] text-primary-foreground/90 drop-shadow-sm pointer-events-none">
                      <span className="flex items-center gap-1 font-medium">
                        <MapPin className="w-3 h-3 text-gold" /> {item.location}
                      </span>
                      <span className="font-mono text-[0.68rem] bg-black/40 px-1.5 py-0.2 backdrop-blur-xs">
                        {item.area}
                      </span>
                    </div>
                  </div>

                  {/* Body Content */}
                  <div className="p-5 flex-grow flex flex-col justify-between space-y-3">
                    <div>
                      <div className="text-[0.68rem] font-mono text-muted-foreground uppercase tracking-wider mb-1">
                        {item.type}
                      </div>
                      <h3
                        onClick={() => setSelectedItem(item)}
                        className="text-base font-display font-medium text-foreground group-hover:text-gold transition-colors cursor-pointer line-clamp-1"
                        title={item.title}
                      >
                        {item.title}
                      </h3>
                      <p className="text-xs text-muted-foreground mt-1 line-clamp-2">
                        {item.caption}
                      </p>
                    </div>

                    {/* Quick highlight snippet */}
                    <div className="pt-3 border-t border-border/60">
                      <div className="text-[0.68rem] text-muted-foreground flex items-center gap-1.5 mb-2">
                        <span className="inline-block w-1.5 h-1.5 bg-gold rounded-full" />
                        <span className="font-semibold text-foreground">Stage:</span>
                        <span className="truncate">{item.stage}</span>
                      </div>

                      <div className="flex items-center justify-between">
                        <span className="text-[0.65rem] text-muted-foreground/80 font-mono">
                          {item.highlights.length} Technical Audits
                        </span>
                        <button
                          type="button"
                          onClick={() => setSelectedItem(item)}
                          className="text-xs text-gold font-medium hover:underline inline-flex items-center gap-1"
                        >
                          View Checklist <ArrowRight className="w-3 h-3" />
                        </button>
                      </div>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* LIGHTBOX MODAL WITH FULL TECHNICAL AUDIT REPORT */}
        {selectedItem && (
          <div
            className="fixed inset-0 z-50 bg-foreground/85 backdrop-blur-sm flex items-center justify-center p-3 sm:p-5 overflow-y-auto"
            onClick={() => setSelectedItem(null)}
          >
            <div
              className="bg-card border border-gold/40 max-w-4xl w-full my-auto overflow-hidden shadow-2xl relative animate-in fade-in zoom-in-95 duration-200"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Modal Top Bar */}
              <div className="bg-muted/70 px-4 py-2.5 border-b border-border/80 flex items-center justify-between text-xs">
                <div className="flex items-center gap-2">
                  <span className="bg-gold text-foreground font-mono font-bold px-1.5 py-0.5 text-[0.68rem]">
                    Item #{String(selectedItem.idx).padStart(2, "0")}
                  </span>
                  <span className="font-semibold text-foreground uppercase tracking-wider">
                    {selectedItem.categoryLabel}
                  </span>
                  <span className="text-muted-foreground hidden sm:inline">•</span>
                  <span className="text-muted-foreground hidden sm:inline">
                    {selectedItem.type}
                  </span>
                </div>

                <div className="flex items-center gap-1">
                  <span className="text-muted-foreground font-mono text-[0.68rem] mr-2">
                    {currentIndex + 1} of {filteredItems.length}
                  </span>
                  <button
                    type="button"
                    onClick={handlePrev}
                    className="p-1 hover:bg-background text-foreground transition-colors border border-border/60"
                    title="Previous (Left Arrow)"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={handleNext}
                    className="p-1 hover:bg-background text-foreground transition-colors border border-border/60"
                    title="Next (Right Arrow)"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => setSelectedItem(null)}
                    className="p-1 hover:bg-destructive hover:text-white text-muted-foreground transition-colors ml-2 border border-border/60"
                    title="Close (Esc)"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              {/* Photo View with natural aspect preservation */}
              <div className="relative bg-black flex items-center justify-center max-h-[55vh] min-h-[300px] overflow-hidden group">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  className="max-h-[55vh] w-auto max-w-full object-contain mx-auto"
                />

                {/* Left/Right Over-image Navigation Buttons */}
                <button
                  type="button"
                  onClick={handlePrev}
                  className="absolute left-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-gold hover:text-foreground text-white p-2 rounded-full backdrop-blur-xs transition-colors opacity-70 group-hover:opacity-100"
                  aria-label="Previous photo"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  type="button"
                  onClick={handleNext}
                  className="absolute right-3 top-1/2 -translate-y-1/2 bg-black/60 hover:bg-gold hover:text-foreground text-white p-2 rounded-full backdrop-blur-xs transition-colors opacity-70 group-hover:opacity-100"
                  aria-label="Next photo"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Technical Audit Dossier Details */}
              <div className="p-5 md:p-6 space-y-4 max-h-[35vh] overflow-y-auto">
                {/* Header info */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-border/60 pb-3">
                  <div>
                    <h3 className="text-lg md:text-xl font-display font-medium text-foreground">
                      {selectedItem.title}
                    </h3>
                    <div className="flex items-center gap-3 text-xs text-muted-foreground mt-0.5">
                      <span className="flex items-center gap-1 font-medium text-gold">
                        <MapPin className="w-3.5 h-3.5" /> {selectedItem.location}
                      </span>
                      <span>•</span>
                      <span>Area: {selectedItem.area}</span>
                      <span>•</span>
                      <span>Scope: {selectedItem.stage}</span>
                    </div>
                  </div>
                </div>

                {/* Caption description */}
                <p className="text-xs md:text-sm text-foreground/80 leading-relaxed font-body">
                  {selectedItem.caption}
                </p>

                {/* Verification Checkpoints Box */}
                <div className="p-4 bg-muted/40 border border-gold/30 space-y-2">
                  <h4 className="text-xs font-semibold uppercase tracking-wider text-foreground flex items-center gap-1.5">
                    <ShieldCheck className="w-4 h-4 text-gold" /> Key Technical Verification Checkpoints
                  </h4>
                  <ul className="grid grid-cols-1 md:grid-cols-3 gap-2.5 pt-1">
                    {selectedItem.highlights.map((point) => (
                      <li
                        key={point}
                        className="bg-background/80 p-2.5 border border-border/60 flex items-start gap-2 text-xs text-muted-foreground"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-gold shrink-0 mt-0.5" />
                        <span className="leading-tight">{point}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Modal Action Footer */}
                <div className="pt-2 flex flex-col sm:flex-row items-center justify-between gap-3">
                  <div className="text-[0.7rem] text-muted-foreground font-mono">
                    Project Ref: IS-{selectedItem.category.toUpperCase().slice(0, 4)}-
                    {String(selectedItem.idx).padStart(3, "0")}
                  </div>

                  <div className="flex items-center gap-2.5 w-full sm:w-auto">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSelectedItem(null)}
                      className="text-xs w-full sm:w-auto"
                    >
                      Close Window
                    </Button>
                    <Button
                      size="sm"
                      className="bg-gold text-foreground hover:bg-gold/90 text-xs w-full sm:w-auto"
                      asChild
                    >
                      <Link to="/contact">
                        Inquire for Similar Project <ArrowRight className="w-3.5 h-3.5 ml-1" />
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* CLOSING TECHNICAL ADVANTAGE & CTA */}
        <section className="py-16 md:py-20 bg-card text-center border-t border-border/40">
          <div className="shell-container max-w-4xl mx-auto px-5 sm:px-6 lg:px-8 space-y-6" data-reveal>
            <div className="inline-flex items-center gap-2 px-3 py-1 bg-gold/10 text-gold text-xs font-semibold uppercase tracking-wider border border-gold/30">
              <Sparkles className="w-3.5 h-3.5" />
              Independent Quality Assurance
            </div>

            <h2 className="text-2xl md:text-4xl font-display font-medium text-foreground">
              Want This Level of Precision on Your Site?
            </h2>

            <p className="text-sm md:text-base text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Whether you are commissioning a bespoke modular kitchen, sliding glass wardrobes, or
              an entire duplex fit-out in Bengaluru, our independent engineers ensure every
              millimeter, joint, and billing line matches your exact specifications.
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4 pt-3">
              <Button className="btn-gold" asChild>
                <Link to="/get-a-quote">
                  Request a Site Audit <ArrowRight className="w-4 h-4 ml-1.5" />
                </Link>
              </Button>
              <Button className="btn-gold-outline" asChild>
                <Link to="/services">View All 6 Core Services</Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
