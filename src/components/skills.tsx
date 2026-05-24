interface SkillCategory {
  category: string;
  items: string[];
}

const skills: SkillCategory[] = [
  { category: "Frontend", items: ["React", "Next.js", "TypeScript", "Tailwind CSS"] },
  { category: "Backend",  items: ["Node.js", "Express", "PostgreSQL", "Prisma"] },
  { category: "Tools",    items: ["Git", "Docker", "Vercel", "Figma", "VS Code"] },
];

export default function Skills() {
  return (
    <section id="skills" className="py-20 px-4 bg-[#0f1a11]">
      <div className="max-w-4xl mx-auto">
        <p className="text-xs tracking-[0.2em] uppercase text-[#238636] font-medium text-center mb-2">
          What I work with
        </p>
        <h2 className="text-4xl font-bold text-center text-[#f0f6fc] mb-12">
          Skills
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {skills.map(({ category, items }) => (
            <div key={category}
              className="border border-[#1a2e1e] bg-[#0d1117] rounded-2xl p-6 hover:border-[#238636] transition-colors"
            >
              <h3 className="font-bold text-[#238636] mb-4 text-lg">{category}</h3>
              <ul className="space-y-3">
                {items.map((skill) => (
                  <li key={skill} className="flex items-center gap-3 text-[#8b949e]">
                    <span className="w-1.5 h-1.5 bg-[#238636] rounded-full shrink-0" />
                    {skill}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
