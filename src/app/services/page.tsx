const services = [
  { icon: "⬡", title: "Web Development", description: "Full-stack web apps built with Next.js, TypeScript, and Tailwind CSS. Fast, accessible, and built to scale." },
  { icon: "◈", title: "Consulting", description: "Architecture reviews, tech stack decisions, and dev process improvements for early-stage startups." },
  { icon: "◎", title: "Mentorship", description: "1-on-1 mentorship sessions for junior developers learning React and Next.js through real projects." },
];

export default function ServicesOverview() {
  return (
    <div>
      <p className="text-[#5a7a60] text-base leading-relaxed mb-10 max-w-lg">
        I offer a focused set of services built around modern web development.
        Use the navigation above to explore each one in detail.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-3 gap-px bg-[#1a2e1e]">
        {services.map((s) => (
          <div key={s.title} className="bg-[#0a0f0b] p-8 hover:bg-[#0f1a11] transition-colors duration-150">
            <div className="text-3xl mb-4 opacity-60">{s.icon}</div>
            <h3 className="font-[Syne,sans-serif] text-base font-bold text-[#e8f5ea] mb-2">{s.title}</h3>
            <p className="text-sm text-[#5a7a60] leading-relaxed">{s.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
}