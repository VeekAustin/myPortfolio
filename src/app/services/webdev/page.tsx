
const stack = ["Next.js", "TypeScript", "Tailwind CSS", "Prisma", "PostgreSQL", "Vercel"];

export default function WebDevelopmentPage() {
  return (
    <div>
      <h2 className="font-[Syne,sans-serif] text-2xl font-bold text-[#e8f5ea] mb-4">Web Development</h2>
      <p className="text-[#5a7a60] leading-relaxed mb-8 max-w-lg">
        I build fast, modern web applications from scratch — covering everything from UI design 
        to deployment. Specialized in the Next.js ecosystem with a strong focus on developer 
        experience and performance.
      </p>
      <div className="mb-8">
        <p className="text-xs tracking-[0.15em] uppercase text-[#2a4a2e] mb-4">Stack</p>
        <div className="flex flex-wrap gap-2">
          {stack.map((tech) => (
            <span key={tech} className="px-3 py-1.5 bg-[#0f1a11] border border-[#1a2e1e] rounded-lg text-sm text-[#5a7a60] hover:border-green-500/30 hover:text-green-400 transition-all duration-150">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="p-6 bg-green-500/5 border border-green-500/15 rounded-xl">
        <p className="text-sm text-[#5a7a60] leading-relaxed">
          <strong className="text-green-400">Starting at $2,000</strong> — Includes design, development, and a 30-day support window post-launch.
        </p>
      </div>
    </div>
  );
}