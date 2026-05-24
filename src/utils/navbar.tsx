"use client";

import Link from "next/link";
import { useState } from "react";

const navLinks = [
  { href: "/about",    label: "About" },
  { href: "#projects", label: "Projects" },
  { href: "#skills",   label: "Skills" },
  { href: "#contact",  label: "Contact" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full border-b border-[#1a2e1e] bg-[#0d1117]/90 backdrop-blur-sm z-50">
      <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <span className="text-xl font-bold text-[#238636]">Austin.vic</span>
        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {navLinks.map(({ href, label }) => (
            <li key={href}>
              <Link
                href={href}
                className="text-[#8b949e] hover:text-[#238636] transition-colors font-medium"
              >
                {label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger button */}
        <button
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          className="md:hidden flex flex-col gap-1.5 p-2"
        >
          <span className={`block w-6 h-0.5 bg-[#c9d1d9] transition-transform duration-300 ${open ? "rotate-45 translate-y-2" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#c9d1d9] transition-opacity duration-300 ${open ? "opacity-0" : ""}`} />
          <span className={`block w-6 h-0.5 bg-[#c9d1d9] transition-transform duration-300 ${open ? "-rotate-45 -translate-y-2" : ""}`} />
        </button>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div className="md:hidden border-t border-[#1a2e1e] bg-[#0d1117] px-4 pb-4">
          <ul className="flex flex-col gap-4 pt-4">
            {navLinks.map(({ href, label }) => (
              <li key={href}>
                <Link
                  href={href}
                  onClick={() => setOpen(false)}
                  className="text-[#8b949e] hover:text-[#238636] transition-colors font-medium text-lg"
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
