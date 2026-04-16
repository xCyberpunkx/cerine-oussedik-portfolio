import { ThemeToggle } from "./ThemeToggle";

const links = [
  { href: "#about", label: "About" },
  { href: "#skills", label: "Skills" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#community", label: "Community" },
  { href: "#contact", label: "Contact" },
];

export const Nav = () => (
  <header className="fixed top-4 left-1/2 -translate-x-1/2 z-50 w-[min(95%,900px)]">
    <nav className="glass rounded-full px-5 py-3 flex items-center justify-between shadow-soft">
      <a href="#top" className="font-serif text-lg text-gradient font-semibold">Cerine ✦</a>
      <ul className="hidden md:flex items-center gap-6 text-sm">
        {links.map((l) => (
          <li key={l.href}>
            <a href={l.href} className="text-muted-foreground hover:text-primary transition-colors">
              {l.label}
            </a>
          </li>
        ))}
      </ul>
      <ThemeToggle />
    </nav>
  </header>
);
