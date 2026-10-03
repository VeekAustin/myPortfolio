import type { IconType } from "react-icons";
import { FiLayers, FiMonitor, FiDatabase, FiUploadCloud } from "react-icons/fi";
import Reveal from "./reveal";

interface Service {
  title: string;
  description: string;
  icon: IconType;
}

const services: Service[] = [
  {
    title: "Fullstack web apps",
    description:
      "End-to-end products with a Next.js frontend, an Express API, MongoDB, and user login that works.",
    icon: FiLayers,
  },
  {
    title: "Frontend development",
    description:
      "Responsive, accessible interfaces in React and TypeScript, built from a Figma file or from scratch.",
    icon: FiMonitor,
  },
  {
    title: "APIs and databases",
    description:
      "REST APIs with JWT authentication, schema design, validation, and clear error handling.",
    icon: FiDatabase,
  },
  {
    title: "Deployment and handoff",
    description:
      "Live on Vercel or Docker, with environment setup and a README your team can follow.",
    icon: FiUploadCloud,
  },
];

export default function Services() {
  return (
    <section id="services" className="bg-[#0d1117] px-4 py-20">
      <div className="mx-auto max-w-5xl">
        <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#238636]">
          How I can help
        </p>
        <h2 className="mb-3 text-center text-4xl font-bold text-[#f0f6fc]">
          Services
        </h2>
        <p className="mb-12 text-center text-sm text[#484f58]">
          Work I take on, for teams and clients.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {services.map(({ title, description, icon: Icon }, i) => (
            <Reveal key={title} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-[#1a2e1e] bg-[#0f1a11] p-6 transition-colors hover:border-[#238636]">
                <span className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-[#1a2e1e] text-xl text-[#238636]">
                  <Icon aria-hidden />
                </span>
                <h3 className="mb-2 text-lg font-bold text-[#f0f6fc]">
                  {title}
                </h3>
                <p className="text-sm leading-relaxed text-[#8b949e]">
                  {description}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
        <div className="mt-10 text-center">
          <a
            href="#contact"
            className="inline-block rounded-full border border-[#30363d] px-8 py-3 font-semibold text[#c9d1d9] transition-colors hover:border-[#238636] hover:text-[#f0f6fc]"
          >
            Start a conversation
          </a>
        </div>
      </div>
    </section>
  );
}
