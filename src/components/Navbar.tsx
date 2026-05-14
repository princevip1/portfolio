"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Moon, Sun } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { useTheme } from "./ThemeProvider";

type NavLink = {
  label: string;
  href: string;
  n: string;
  match?: (path: string) => boolean;
};

const navLinks: NavLink[] = [
  { label: "Work", href: "/work", n: "01", match: (p) => p.startsWith("/work") },
  { label: "Writing", href: "/writing", n: "02", match: (p) => p.startsWith("/writing") },
  { label: "Uses", href: "/uses", n: "03", match: (p) => p === "/uses" },
  { label: "About", href: "/#about", n: "04" },
  { label: "Contact", href: "/#contact", n: "05" },
];

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 12);
    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const isActive = (link: NavLink) => {
    if (link.match) return link.match(pathname);
    return false;
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-background/80 backdrop-blur-md border-b border-border"
          : "bg-transparent border-b border-transparent"
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-16">
          <Link
            href="/"
            className="flex items-center gap-2 text-sm font-medium tracking-tight"
          >
            <span className="w-2 h-2 rounded-full bg-foreground" />
            Prince Mahmud
          </Link>

          <nav className="hidden md:flex items-center gap-7">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm transition-colors ${
                  isActive(link)
                    ? "text-foreground"
                    : "text-muted hover:text-foreground"
                }`}
              >
                <span className="font-mono text-[10px] text-muted mr-1.5 align-top">
                  {link.n}
                </span>
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-1">
            <button
              type="button"
              onClick={toggleTheme}
              className="w-9 h-9 flex items-center justify-center text-muted hover:text-foreground transition-colors cursor-pointer"
              aria-label="Toggle theme"
            >
              {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
            </button>
            <Link
              href="/#contact"
              className="hidden md:inline-flex items-center gap-2 text-sm border border-border px-3.5 py-1.5 rounded-full hover:bg-foreground hover:text-background hover:border-foreground transition-colors ml-2"
            >
              Get in touch
            </Link>
            <button
              type="button"
              className="md:hidden w-9 h-9 flex items-center justify-center text-foreground cursor-pointer"
              onClick={() => setIsOpen(!isOpen)}
              aria-label="Toggle menu"
            >
              {isOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
            className="md:hidden overflow-hidden border-t border-border bg-background"
          >
            <div className="px-6 py-6 flex flex-col">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`flex items-baseline justify-between py-3 border-b border-border/60 ${
                    isActive(link) ? "text-foreground" : "text-muted"
                  }`}
                >
                  <span className="text-base">{link.label}</span>
                  <span className="font-mono text-[10px] text-muted">
                    {link.n}
                  </span>
                </Link>
              ))}
              <Link
                href="/#contact"
                className="mt-6 inline-flex items-center justify-center text-sm border border-foreground px-4 py-3 rounded-full"
              >
                Get in touch →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
