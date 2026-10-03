import Image from "next/image";
import Reveal from "./reveal";

interface Project {
  title: string;
  description: string;
  what: string;
  highlights?: string[];
  tech: string[];
  liveUrl?: string;
  repoUrl?: string;
  image?: string; 
  featured?: boolean;
}

const projects: Project[] = [
  {
    title: "Trackr",
    description: "A private log of what you have actually done, across teaching, coding, trading, or a course.",
    what: 
      "Create your own categories, each with a name and color, then log entries with a title, optional notes, and a date, including days you forgot to record. Unlike a to-do app, it records completed effort, so over time it becomes a history of your work.",
    highlights: [
      "Signup and login with JWT authentication and bcrypt-hashed passwords",
      "Each user's data is private, enforced by protect middleware and role-based access",
      "Deleting a category cascades to its entries",
      "Global error handling, with the API tested end to end in Postman",
    ],
    tech: ["Next.js", "TypeScript", "Node.js", "Express", "MongoDB", "JWT"],
    liveUrl: "https://trackr-web-sigma.vercel.app/", 
    repoUrl: "https://github.com/VeekAustin/trackr-web, https://github.com/VeekAustin/trackr-api", 
    image: "/trackr.png",
    featured: true,
  },
  {
    title: "Static Landing Page",
    description: "A pixel-accurate rebuild of a SaaS marketing page.",
    what: "Built every section, including the hero, testimonials, integrations grid, and footer, without a UI kit. Focused on responsive breakpoints and reusable components.",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://next-js-static-clone page.vercel.app/",
    repoUrl: "https://github.com/VeekAustin/nextJsStaticClonePage",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="bg-[#0d1117] px-4 py-20">
      <div className="mx-auto max-w-6xl">
        <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#238636]">
          What I have built
        </p>
        <h2 className="mb-3 text-center text-4xl font-bold text-[#f0f6fc]">
          Projects
        </h2>
        <p className="mb-12 text-center text-sm text[#484f58]">
          A full-stack app and a frontend build, each with a live demo and source.
        </p>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal
              key={project.title}
              delay={i * 0.1}
              className={project.featured ? "h-full md:col-span-2" : "h-full"}
            >
              <div className="flex h-full flex-col rounded-2xl border border-[#1a2e1e] bg-[#0f1a11] p-6 transition-colors hover:border-[#238636]">
                {project.image && (
                  <div className="relative mb-5 aspect-video overflow-hidden rounded-xl border border[#1a2e1e]">
                    <Image
                      src={project.image}
                      alt={`${project.title} screenshot`}
                      fill
                      sizes="(min-width: 768px) 1100px, 100vw"
                      className="object-cover object-top"
                    />
                  </div>
                )}
                <h3 className="mb-1 text-xl font-bold text-[#f0f6fc]">
                  {project.title}
                </h3>
                <p className="mb-3 text-sm font-medium text-[#238636]">
                  {project.description}
                </p>
                <p className="mb-5 text-sm leading-relaxed text-[#8b949e]">
                  {project.what}
                </p>
                {project.highlights && (
                  <ul className="mb-5 space-y-1.5 text-sm text-[#8b949e]">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2">
                        <span className="text[#238636]" aria-hidden>
                          ✓
                        </span>
                        {h}
                      </li>
                    ))}
                  </ul>
                )}
                <div className="mb-6 flex flex-wrap gap-2">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="rounded-full bg[#1a2e1e] px-3 py-1 text-xs font-medium text[#238636]"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="mt-auto flex gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#238636] transition-colors hover:text-[#2ea043]"
                    >
                      Live Demo →
                    </a>
                  )}
                  {project.repoUrl && (
                    <a
                      href={project.repoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-sm font-medium text-[#8b949e] transition-colors hover:text-[#c9d1d9]"
                    >
                      GitHub →
                    </a>
                  )}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}