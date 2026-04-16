import { Link } from "@tanstack/react-router";
import { ThemeToggle } from "./ThemeToggle";
import profileImg from "@/assets/cerine-profile.jpg";

const links = [
  { to: "/about", label: "About" },
  { to: "/skills", label: "Skills" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/community", label: "Community" },
  { to: "/contact", label: "Contact" },
] as const;

export const Nav = () => (
  <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(95%,900px)]">
    <nav className="glass rounded-full px-3 py-2 flex items-center justify-between shadow-soft">
      <Link to="/" className="flex items-center gap-2 group">
        <span className="relative shrink-0">
          <span className="absolute inset-0 rounded-full bg-gradient-hero opacity-70 blur-md group-hover:opacity-100 transition-opacity" />
          <img
            src={profileImg}
            alt="Cerine Oussedik"
            className="relative w-9 h-9 rounded-full object-cover border-2 border-primary/50 shadow-glow"
          />
        </span>
        <span className="font-serif text-lg text-gradient font-semibold pr-2">Cerine ✦</span>
      </Link>
      <ul className="hidden md:flex items-center gap-6 text-sm">
        {links.map((l) => (
          <li key={l.to}>
            <Link
              to={l.to}
              className="text-muted-foreground hover:text-primary transition-colors"
              activeProps={{ className: "text-primary font-medium" }}
            >
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  </header>
);
