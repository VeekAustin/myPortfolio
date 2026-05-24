interface Project {
  title: string;
  description: string;
  what: string;
  tech: string[];
  liveUrl: string;
  repoUrl: string;
}

const projects: Project[] = [
  {
    title: "Static Landing Page",
    description: "Cloned a real SaaS marketing page from scratch as a learning exercise.",
    what:
      "Built every section — hero, testimonials, integrations grid, and footer — without a UI kit. Focused on pixel-accurate layout, responsive breakpoints, and component reuse with .map().",
    tech: ["Next.js", "TypeScript", "Tailwind CSS"],
    liveUrl: "https://next-js-static-clone-page.vercel.app/",
    repoUrl: "https://github.com/VeekAustin/nextJsStaticClonePage",
  },
  {
    title: "Counter App",
    description: "A focused React project built to understand state management hands-on.",
    what:
      "Simple on the surface, but the point was mastering useState, controlled components, and how React re-renders — not the feature count.",
    tech: ["React", "JavaScript", "Next.js", "Tailwind CSS"],
    liveUrl: "https://next-assignment-ochre-seven.vercel.app/",
    repoUrl: "https://github.com/VeekAustin/nextAssignment",
  },
];

export default function Projects() {
  return (
    <section id="projects" className="py-20 px-4 bg-[#0d1117]">
      <div className="max-w-6xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#238636] font-medium text-center mb-2">
          What I have built
        </p>
        <h2 className="text-4xl font-bold text-center text-[#f0f6fc] mb-3">
          Projects
        </h2>
        <p className="text-center text-[#484f58] text-sm mb-12">
          Early projects — but every one taught me something specific.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <div
              key={project.title}
              className="border border-[#1a2e1e] bg-[#0f1a11] rounded-2xl p-6 hover:border-[#238636] transition-colors flex flex-col"
            >
              <h3 className="text-xl font-bold text-[#f0f6fc] mb-1">
                {project.title}
              </h3>

              {/* One-liner hook */}
              <p className="text-[#238636] text-sm font-medium mb-3">
                {project.description}
              </p>

              {/* What I actually learned */}
              <p className="text-[#8b949e] text-sm leading-relaxed mb-5">
                {project.what}
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {project.tech.map((t) => (
                  <span
                    key={t}
                    className="bg-[#1a2e1e] text-[#238636] text-xs px-3 py-1 rounded-full font-medium"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex gap-4 mt-auto">
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#238636] hover:text-[#2ea043] text-sm font-medium transition-colors"
                >
                  Live Demo →
                </a>
                <a
                  href={project.repoUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#8b949e] hover:text-[#c9d1d9] text-sm font-medium transition-colors"
                >
                  GitHub →
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}