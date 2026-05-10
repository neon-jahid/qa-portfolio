import { useState } from "react";
import Container from "../common/Container";
import { navItems, portfolio } from "../../data/portfolioData";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-white/10 bg-slate-950/80 backdrop-blur-xl">
      <Container className="flex items-center justify-between py-4">
        <a href="#home" className="text-lg font-bold tracking-tight text-white">
          {portfolio.name}
        </a>
        <div className="hidden gap-6 text-sm text-slate-300 lg:flex">
          {navItems.map((item) => (
            <a key={item.href} href={item.href} className="hover:text-cyan-300">
              {item.label}
            </a>
          ))}
        </div>
        <button
          className="lg:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <svg
            className="h-6 w-6 text-white"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            {isMenuOpen ? (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M6 18L18 6M6 6l12 12"
              />
            ) : (
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            )}
          </svg>
        </button>
      </Container>
      {isMenuOpen && (
        <div className="border-t border-white/10 bg-slate-950/95 lg:hidden">
          <Container className="py-4">
            <div className="flex flex-col gap-4 text-sm text-slate-300">
              {navItems.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  className="hover:text-cyan-300"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {item.label}
                </a>
              ))}
            </div>
          </Container>
        </div>
      )}
    </nav>
  );
}
