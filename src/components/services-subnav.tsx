import { Link, useRouterState } from "@tanstack/react-router";
import { ArrowRight, Layers } from "lucide-react";

export const servicesDirectory = [
  {
    number: "00",
    id: "overview",
    label: "Services Overview",
    shortLabel: "Overview",
    to: "/services" as const,
    description: "Executive summary of our 4 core technical disciplines.",
  },
  {
    number: "01",
    id: "project-management",
    label: "End-to-End Project Management",
    shortLabel: "Project Management",
    to: "/services/project-management" as const,
    description: "Turnkey stewardship from initial site measurement to handover.",
  },
  {
    number: "02",
    id: "site-inspection",
    label: "Site Inspection & Quality Control",
    shortLabel: "Site Inspection & QC",
    to: "/services/site-inspection-quality-control" as const,
    description: "Drawing-to-site validation and milestone checks before finishes close.",
  },
  {
    number: "03",
    id: "boq-verification",
    label: "BOQ & Execution Verification",
    shortLabel: "BOQ Verification",
    to: "/services/boq-execution-verification" as const,
    description: "Line-by-line cross-check of quantities, scope, and billed amounts.",
  },
  {
    number: "04",
    id: "handover-support",
    label: "Handover & Post-Sale Support",
    shortLabel: "Handover & Snags",
    to: "/services/handover-post-sale-support" as const,
    description: "120-point snag list, closure tracking, and handover documentation.",
  },
];

export function ServicesSubnav({ className = "" }: { className?: string }) {
  const routerState = useRouterState();
  const currentPath = routerState.location.pathname;

  return (
    <nav
      className={`services-subnav bg-card/90 backdrop-blur-md border-y border-border/80 sticky top-[64px] md:top-[80px] z-40 ${className}`}
      aria-label="Services dedicated sub-pages"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-2.5 flex flex-col md:flex-row md:items-center justify-between gap-3">
        <div className="flex items-center gap-2 text-xs text-muted-foreground shrink-0">
          <Layers className="w-4 h-4 text-gold" />
          <span className="font-semibold uppercase tracking-wider text-foreground text-[0.7rem]">
            Dedicated Service Pages:
          </span>
        </div>

        <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar py-0.5">
          {servicesDirectory.map((item) => {
            const isActive =
              item.to === "/services"
                ? currentPath === "/services"
                : currentPath.startsWith(item.to);

            return (
              <Link
                key={item.to}
                to={item.to}
                className={`whitespace-nowrap px-3 py-1.5 text-xs font-medium tracking-wide transition-all border ${
                  isActive
                    ? "bg-gold text-foreground border-gold font-semibold shadow-xs"
                    : "bg-background/80 text-muted-foreground border-border hover:border-gold hover:text-foreground"
                }`}
              >
                {item.shortLabel}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
