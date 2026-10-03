import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import Reveal from "../components/reveal";
import { CV_PATH, EMAIL, GITHUB_URL, LINKEDIN_URL, X_URL } from "./links";

const socials = [
  { label: "GitHub", href: GITHUB_URL, icon: <FaGithub   size={24} /> },
  { label: "LinkedIn", href: LINKEDIN_URL, icon:   <FaLinkedin size={24} /> },
  { label: "Twitter / X", href: X_URL, icon:   <FaXTwitter size={24} /> },
];

export default function Contact() {
  return (
    <section id="contact" className="bg-[#0d1117] px-4 py-20">
      <Reveal className="mx-auto max-w-2xl text center">
        <p className="mb-2 text-xs font-medium uppercase tracking-[0.2em] text-[#238636]">
          Let&apos;s talk
        </p>
        <h2 className="mb-4 text-4xl font-bold text[#f0f6fc]">Get In Touch</h2>
        <p className="mb-10 leading-relaxed text[#8b949e]">
          I am open to fullstack and frontend roles. If you have a role, a
          project, or a question, send me a message.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href={`mailto:${EMAIL}`}
            className="inline-block rounded-full bg
            [#238636] px-10 py-4 text-lg font-semibold text-white 
            transition-colors hover:bg-[#2ea043]"
          >
            Email me
          </a>
          <a
            href={CV_PATH}
            download
            className="inline-block rounded-full border border-[#30363d] px-10 py-4 text-lg fontsemibold text-[#c9d1d9] transition-colors hover:border-[#238636] hover:text-[#f0f6fc]"
          >
            Download CV
          </a>
        </div>
        <p className="mt-6 text-sm text-[#8b949e]">
          {EMAIL}
        </p>
        <div className="mt-8 flex justify-center gap-8">
          {socials.map((s) => (
            <a
              key={s.label}
              href={s.href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={s.label}
              className="text-[#8b949e] transition-colors hover:text-[#238636]"
            >
              {s.icon}
            </a>
          ))}
        </div>
      </Reveal>
    </section>
  );
}