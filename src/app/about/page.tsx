const timeline = [
  { year: "2024", event: "Learned Next.js App Router and TypeScript deeply" },
  { year: "2023", event: "Built first full-stack app with React and a REST API" },
  { year: "2022", event: "Started learning web development with HTML, CSS & JavaScript" },
  { year: "2021", event: "Discovered programming — wrote my first Python script" },
];

const facts = [
  ["Focus", "React & Next.js"],
  ["Language", "TypeScript"],
  ["Styling", "Tailwind CSS"],
  ["Learning style", "Project-based"],
];

export default function AboutPage() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-16">
      <p className="text-xs tracking-[0.2em] uppercase text-green-500 font-medium mb-3">The person behind the code</p>
      <h1 className="font-[Syne,sans-serif] text-[clamp(2rem,5vw,3.5rem)] font-extrabold tracking-tight text-[#e8f5ea] mb-12">
        About Me
      </h1>

      {/* Bio + quick facts */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
        <div>
          <p className="text-base text-[#5a7a60] leading-[1.85] mb-5">
            I'm Victor, a software developer passionate about building things for the web. 
            I learn best by doing — which means real projects, real problems, and real solutions.
          </p>
          <p className="text-base text-[#3a5a3e] leading-[1.85]">
            Right now I'm focused on the Next.js ecosystem: App Router, server components, 
            TypeScript, and Tailwind CSS. This very site is one of my learning projects.
          </p>
        </div>

        <div className="bg-[#0f1a11] border border-[#1a2e1e] rounded-xl p-6">
          <p className="text-xs tracking-[0.15em] uppercase text-[#2a4a2e] mb-4">Quick facts</p>
          {facts.map(([label, value]) => (
            <div key={label} className="flex justify-between py-2.5 border-b border-[#1a2e1e] last:border-0">
              <span className="text-sm text-[#2a4a2e]">{label}</span>
              <span className="text-sm text-[#5a7a60] font-medium">{value}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Timeline */}
      <div>
        <p className="text-xs tracking-[0.15em] uppercase text-[#2a4a2e] mb-6">Journey</p>
        <div className="flex flex-col">
          {timeline.map((item) => (
            <div key={item.year} className="grid grid-cols-[72px_1fr] gap-6 pb-7">
              <span className="font-[Syne,sans-serif] text-sm font-bold text-green-400 pt-0.5">
                {item.year}
              </span>
              <p className="text-sm text-[#5a7a60] leading-relaxed border-l border-[#1a2e1e] pl-6">
                {item.event}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}