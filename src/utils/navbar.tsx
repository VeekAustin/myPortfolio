"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

interface NavLink {
  href: string;
  label: string;
  section?: string;
}

const navLinks: NavLink[] = [
  { href: "/about", label: "About" },
  { href: "/#projects", label: "Projects", section: "projects" },
  { href: "/#skills", label: "Skills", section: "skills" },
  { href: "/#services", label: "Services", section: "services" },
  { href: "/#contact", label: "Contact", section: "contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");
  const pathname = usePathname();
  useEffect(() => {
    if (pathname !== "/") {
      setActive("");
      return;
    }
    const ids = [
      "home",
      ...navLinks.flatMap((l) => (l.section ? [l.section] : [])),
    ];
    const els = ids
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id);
        });
      },
      { rootMargin: "-40% 0px -55% 0px" },
    );
    els.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [pathname]);
  const isActive = (link: NavLink) =>
    link.section ? active === link.section : pathname === link.href;
  return (
    <nav className="fixed top-0 z-50 w-full border-b border-[#1a2e1e] bg-[#0d1117]/90 backdrop-blur-sm">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-3">
        {/* Logo */}
        <Link
          href="/"
          onClick={() => setOpen(false)}
          className="flex items-center gap-2"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#238636] text-sm font-bold text-white">
            VA
          </span>
          <span className="hidden text-lg font-semibold text-[#f0f6fc] sm:block">
            Victor Augustine
          </span>
        </Link>
        {/* Desktop links */}
        <ul className="hidden gap-8 md:flex">
          {navLinks.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                aria-current={isActive(link) ? "page" : undefined}
                className={`font-medium transition-colors hover:text-[#238636] ${
                  isActive(link) ? "text-[#238636]" : "text-[#8b949e]"
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
        {/* Mobile hamburger */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
          className="flex flex-col gap-1.5 p-2 md:hidden"
        >
          <span className={`block h-0.5 w-6 bg[#c9d1d9] transition-transform duration-300 ${open ? "translate-y-2 rotate-45" : ""}`}/>
          <span className={`block h-0.5 w-6 bg[#c9d1d9] transition-opacity duration-300 ${open ? "opacity-0" : ""}`}/>
          <span className={`block h-0.5 w-6 bg[#c9d1d9] transition-transform duration-300 ${open ? "-translate-y-2 -rotate-45" : ""}`}/>
        </button>
      </div>
      {/* Mobile drawer */}
      <AnimatePresence>
        {open && (
          <motion.div
            key="drawer"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.2 }}
            className="overflow-hidden border-t border-[#1a2e1e] bg-[#0d1117] md:hidden"
          >
            <ul className="flex flex-col gap-4 px-4 pb-4 pt-4">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className={`text-lg font-medium transition-colors hover:text-[#238636] ${
                      isActive(link) ? "text[#238636]" : "text-[#8b949e]"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}