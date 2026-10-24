import { useEffect } from "react";
import { useRouterState } from "@tanstack/react-router";

export function ScrollMotion() {
  const pathname = useRouterState({ select: (s) => s.location.pathname });

  useEffect(() => {
    if (typeof window === "undefined") return;

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        el.setAttribute("data-revealed", "true");
      });
      return;
    }

    document.documentElement.classList.add("motion-ready");

    const revealElement = (el: HTMLElement) => {
      el.setAttribute("data-revealed", "true");
    };

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            revealElement(entry.target as HTMLElement);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.02, rootMargin: "0px 0px 60px 0px" },
    );

    const observeAll = () => {
      const items = Array.from(
        document.querySelectorAll<HTMLElement>("[data-reveal]:not([data-revealed='true'])"),
      );
      items.forEach((item) => observer.observe(item));
    };

    observeAll();

    // Watch for dynamic DOM updates (e.g. filtering, tab changes)
    const mutationObserver = new MutationObserver(() => {
      observeAll();
    });

    mutationObserver.observe(document.body, { childList: true, subtree: true });

    // Safety fallback: reveal items currently in viewport
    const timer = setTimeout(() => {
      document.querySelectorAll<HTMLElement>("[data-reveal]").forEach((el) => {
        const rect = el.getBoundingClientRect();
        if (rect.top < window.innerHeight * 1.3) {
          revealElement(el);
        }
      });
    }, 350);

    return () => {
      clearTimeout(timer);
      observer.disconnect();
      mutationObserver.disconnect();
    };
  }, [pathname]);

  return null;
}
