import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";
import { Butterflies } from "@/components/Butterflies";
import { Nav } from "@/components/Nav";

import appCss from "../styles.css?url";

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Page not found</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { title: "Cerine Oussedik" },
      { name: "description", content: "A modern, elegant portfolio website showcasing the skills and projects of software engineer Cerine Oussedik." },
      { name: "author", content: "Lovable" },
      { property: "og:title", content: "Cerine Oussedik" },
      { property: "og:description", content: "A modern, elegant portfolio website showcasing the skills and projects of software engineer Cerine Oussedik." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
      { name: "twitter:site", content: "@Lovable" },
      { name: "twitter:title", content: "Cerine Oussedik" },
      { name: "twitter:description", content: "A modern, elegant portfolio website showcasing the skills and projects of software engineer Cerine Oussedik." },
    ],
    links: [
      {
        rel: "stylesheet",
        href: appCss,
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return (
    <div id="top" className="relative min-h-screen">
      <Butterflies />
      <Nav />
      <Outlet />
      <footer className="px-6 py-10 text-center text-sm text-muted-foreground">
        <p>© {new Date().getFullYear()} Cerine Oussedik · Crafted with 💜, butterflies & late-night curiosity</p>
      </footer>
    </div>
  );
}
