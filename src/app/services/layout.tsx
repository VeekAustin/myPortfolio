"use client";

import Link from "next/link";

const subLinks = [
  { href: "/services", label: "Overview" },
  { href: "/services/webdev", label: "Web Development" },
  { href: "/services/consulting", label: "Consulting" },
  { href: "/services/mentorship", label: "Mentorship" },
];

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-5xl mx-auto px-6 py-16">

      <div className="mb-10">
        <p className="text-xs tracking-[0.2em] uppercase text-green-500 font-medium mb-2">
          What I offer
        </p>
        <h1 className="font-[Syne,sans-serif] text-[clamp(2rem,5vw,3rem)] font-extrabold tracking-tight text-[#e8f5ea]">
          Services
        </h1>
      </div>

      <nav className="flex gap-1 bg-[#0f1a11] border border-[#1a2e1e] rounded-xl p-1.5 w-fit mb-10">
        {subLinks.map(({ href, label }) => (
          <Link
            key={href}
            href={href}
            className="px-4 py-2 rounded-lg text-sm no-underline transition-all duration-150 text-[#5a7a60] hover:text-[#e8f5ea] hover:bg-green-500/10"
          >
            {label}
          </Link>
        ))}
      </nav>

      {children}

    </div>
  );
}