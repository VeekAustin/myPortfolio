import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: "About",    href: "/about" },
  { label: "Projects", href: "#projects" },
  { label: "Skills",   href: "#skills" },
  { label: "Contact",  href: "#contact" },
];

const socialLinks = [
  { label: "GitHub",     href: "https://github.com/VeekAustin",          icon: <FaGithub size={18} /> },
  { label: "LinkedIn",   href: "https://linkedin.com/in/VictorAugustine", icon: <FaLinkedin size={18} /> },
  { label: "Twitter / X", href: "https://x.com/Austin486295292",          icon: <FaXTwitter size={18} /> },
];
export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-[#1a2e1e] bg-[#0d1117]">
      <div className="max-w-5xl mx-auto px-6 py-12">

        {/* Top row */}
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-8">
          <div className="space-y-2">
            <p className="text-lg font-semibold tracking-tight text-[#f0f6fc]">
              Victor Augustine
            </p>
            <p className="text-sm text-[#8b949e]">
              Frontend Developer · Building things for the web.
            </p>
          </div>

          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gap-y-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8b949e] hover:text-[#238636] transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-[#1a2e1e]" />

        {/* Bottom row */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
          <p className="text-xs text-[#484f58]">
            &copy; {currentYear} Victor Augustine. All rights reserved.
          </p>

          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={social.label}
                className="text-[#484f58] hover:text-[#238636] transition-colors"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
