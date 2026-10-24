import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import {
  Outlet,
  Link,
  createRootRouteWithContext,
  useRouter,
  HeadContent,
  Scripts,
  type ErrorComponentProps,
} from "@tanstack/react-router";
import { useEffect, type ReactNode } from "react";
import { Home } from "lucide-react";

import appCss from "../styles.css?url";
import { reportLovableError } from "../lib/lovable-error-reporting";
import { SiteHeader, SiteFooter } from "../components/site-chrome";
import { Button } from "../components/ui/button";

function NotFoundComponent() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <SiteHeader />
      <main className="flex-1 flex items-center justify-center py-24 px-4 sm:px-6">
        <div className="max-w-md w-full text-center space-y-4">
          <p className="text-7xl sm:text-8xl font-bold tracking-tight text-foreground font-mono">
            404
          </p>

          <h1 className="text-2xl sm:text-3xl font-display font-semibold text-foreground">
            Page Not Found
          </h1>

          <p className="text-sm text-muted-foreground leading-relaxed">
            The page you are looking for doesn&apos;t exist, has been removed, or is temporarily
            unavailable.
          </p>

          <div className="pt-4 flex flex-wrap items-center justify-center gap-3">
            <Button
              className="bg-gold text-foreground hover:bg-gold/90 font-medium px-6 py-2.5"
              asChild
            >
              <Link to="/">
                <Home className="w-4 h-4 mr-1.5" /> Back to Home
              </Link>
            </Button>
            <Button
              variant="outline"
              className="border-border text-foreground hover:border-gold hover:text-gold px-6 py-2.5"
              asChild
            >
              <Link to="/contact-us">Contact Us</Link>
            </Button>
          </div>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}

function ErrorComponent({ error, reset }: ErrorComponentProps) {
  console.error(error);
  const router = useRouter();
  useEffect(() => {
    reportLovableError(error, { boundary: "tanstack_root_error_component" });
  }, [error]);

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-xl font-semibold tracking-tight text-foreground">
          This page didn't load
        </h1>
        <p className="mt-2 text-sm text-muted-foreground">
          Something went wrong on our end. You can try refreshing or head back home.
        </p>
        <div className="mt-6 flex flex-wrap justify-center gap-2">
          <button
            onClick={() => {
              router.invalidate();
              reset();
            }}
            className="inline-flex items-center justify-center rounded-md bg-gold px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-gold/90"
          >
            Try again
          </button>
          <a
            href="/"
            className="inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent"
          >
            Go home
          </a>
        </div>
      </div>
    </div>
  );
}

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Interior Support",
  url: "https://interiorsupport.in",
  logo: "https://interiorsupport.in/favicon.png",
  image: "https://interiorsupport.in/favicon.png",
  description:
    "Independent client-side interior project management, BOQ verification, and quality inspection across Bengaluru.",
  telephone: "+919820184729",
  email: "enquiry@interiorsupport.in",
  priceRange: "₹₹₹",
  address: {
    "@type": "PostalAddress",
    addressLocality: "Bengaluru",
    addressRegion: "Karnataka",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: 12.9716,
    longitude: 77.5946,
  },
  openingHoursSpecification: [
    {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
      opens: "09:00",
      closes: "19:30",
    },
  ],
  areaServed: [
    "Indiranagar",
    "Koramangala",
    "Whitefield",
    "HSR Layout",
    "Sarjapur Road",
    "Lavelle Road",
    "Sadashivanagar",
    "Hebbal",
    "Bengaluru",
  ],
};

export const Route = createRootRouteWithContext<{ queryClient: QueryClient }>()({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#C9A84C" },
      { name: "msapplication-TileColor", content: "#141311" },
      { name: "apple-mobile-web-app-capable", content: "yes" },
      { name: "apple-mobile-web-app-status-bar-style", content: "black-translucent" },
      {
        title: "Interior Support | Independent Interior Project Management & Quality Audits",
      },
      {
        name: "description",
        content:
          "Independent client-side interior project management, site quality inspection, BOQ verification, and snag-free handover audits. Serving Bengaluru.",
      },
      {
        name: "keywords",
        content:
          "interior project management, independent interior PMC, BOQ verification, site inspection, interior quality audit, snag list inspection, handover audit, Bangalore interior consultant",
      },
      { name: "author", content: "Interior Support" },
      {
        name: "robots",
        content: "index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1",
      },
      { property: "og:site_name", content: "Interior Support" },
      { property: "og:type", content: "website" },
      { property: "og:locale", content: "en_IN" },
      {
        property: "og:title",
        content: "Interior Support | Independent Interior Project Management Bengaluru",
      },
      {
        property: "og:description",
        content:
          "Fiduciary client representation for luxury residential and commercial interior fit-outs across Bengaluru.",
      },
      { property: "og:image", content: "https://interiorsupport.in/favicon.png" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Interior Support | Independent Interior PMC Bengaluru",
      },
      {
        name: "twitter:description",
        content:
          "Fiduciary client-side interior project management, quality inspection, and BOQ audits.",
      },
      { name: "twitter:image", content: "https://interiorsupport.in/favicon.png" },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Epilogue:wght@400;500;600;700&family=Urbanist:wght@400;500;600;700&display=swap",
      },
      { rel: "icon", type: "image/png", href: "/favicon.png" },
      { rel: "apple-touch-icon", href: "/apple-touch-icon.png" },
      { rel: "manifest", href: "/site.webmanifest" },
      { rel: "canonical", href: "https://interiorsupport.in" },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
  errorComponent: ErrorComponent,
});

function RootShell({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  const { queryClient } = Route.useRouteContext();

  return (
    <QueryClientProvider client={queryClient}>
      {/* Required: nested routes render here. Removing <Outlet /> breaks all child routes. */}
      <Outlet />
    </QueryClientProvider>
  );
}
