import Link from "next/link";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { GITHUB_URL, LINKEDIN_URL, X_URL } from "../utils/links";
// "/#id" so these also work when you are on /about
const navLinks = [
{ label: "About", href: "/about" },
{ label: "Projects", href: "/#projects" },
{ label: "Skills", href: "/#skills" },
{ label: "Services", href: "/#services" },
{ label: "Contact", href: "/#contact" },
];
const socialLinks = [
  { label: "GitHub", href: GITHUB_URL, icon: <FaGithub size={18} /> },
  { label: "LinkedIn", href: LINKEDIN_URL, icon: <FaLinkedin size={18} /> },
  { label: "Twitter / X", href: X_URL, icon: <FaXTwitter size={18} /> },
];
export default function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <footer className="border-t border-[#1a2e1e] bg[#0d1117]">
      <div className="mx-auto max-w-5xl px-6 py-12">
        <div className="flex flex-col gap-8 sm:flexrow sm:items-start sm:justify-between">
          <div className="space-y-2">
            <p className="text-lg font-semibold tracking-tight text-[#f0f6fc]">
              Victor Augustine
            </p>
            <p className="text-sm text-[#8b949e]">
              Fullstack developer building for the web.
            </p>
          </div>
          <nav aria-label="Footer navigation">
            <ul className="flex flex-wrap gap-x-6 gapy-2">
              {navLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-sm text-[#8b949e] transition-colors hover:text-[#238636]"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <div className="my-8 border-t border[#1a2e1e]" />
        <div className="flex flex-col gap-4 sm:flexrow sm:items-center sm:justify-between">
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
                className="text-[#484f58] transition colors hover:text-[#238636]"
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