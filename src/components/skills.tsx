import { SiReact, SiNextdotjs, SiTypescript, SiTailwindcss, SiNodedotjs, SiExpress, SiPrisma, SiGit, SiDocker, SiVercel, SiFigma, SiMongodb, SiPostman, } from "react-icons/si";
import { VscVscode } from "react-icons/vsc";
import Reveal from "./reveal";

interface SkillCategory {
  category: string;
  items: { name: string; icon: React.ReactNode }[];
}

const skills: SkillCategory[] = [
  {
    category: "Frontend",
    items: [
      { name: "React", icon: <SiReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      { name: "Tailwind CSS", icon: <SiTailwindcss /> },
    ],
  },
  {
    category: "Backend",
    items: [
      { name: "Node.js", icon: <SiNodedotjs /> },
      { name: "Express", icon: <SiExpress /> },
      { name: "Prisma", icon: <SiPrisma /> },
      { name: "mongodb", icon: <SiMongodb /> },
    ],
  },
  {
    category: "Tools",
    items: [
      { name: "Git", icon: <SiGit /> },
      { name: "Postman", icon: <SiPostman /> },
      { name: "Docker", icon: <SiDocker /> },
      { name: "Vercel", icon: <SiVercel /> },
      { name: "Figma", icon: <SiFigma /> },
      { name: "VS Code", icon: <VscVscode /> },
    ],
  },
];

export default function Skills() {
  return (
    <section id="skills" className="bg-[#0f1a11] px-4 py-20">
      <div className="mx-auto max-w-4xl">
        <p className="mb-2 text-center text-xs font-medium uppercase tracking-[0.2em] text-[#238636]">
          What I work with
        </p>
        <h2 className="mb-12 text-center text-4xl font-bold text-[#f0f6fc]">
          Skills
        </h2>
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {skills.map(({ category, items }, i) => (
            <Reveal key={category} delay={i * 0.08} className="h-full">
              <div className="h-full rounded-2xl border border-[#1a2e1e] bg-[#0d1117] p-6 transition-colors hover:border-[#238636]">
                <h3 className="mb-4 text-lg font-bold text-[#238636]">
                  {category}
                </h3>
                <ul className="space-y-3">
                  {items.map(({ name, icon }) => (
                    <li
                      key={name}
                      className="flex items-center gap-3 text-[#8b949e]"
                    >
                      <span className="text-lg text[#238636]">{icon}</span>
                      {name}
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
