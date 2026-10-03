const topics = ["React fundamentals", "Next.js App Router", "TypeScript basics", "Tailwind CSS", "Git & version control", "Building real projects"];

export default function MentorshipPage() {
  return (
    <div>
      <h2 className="font-[Syne,sans-serif] text-2xl font-bold text-[#e8f5ea] mb-4">Mentorship</h2>
      <p className="text-[#5a7a60] leading-relaxed mb-8 max-w-lg">
        Learning to code is hard when you're doing it alone. I offer 1-on-1 mentorship 
        sessions designed around your actual projects — not abstract exercises. We figure 
        out where you're stuck and unblock you, together.
      </p>
      <div className="mb-8">
        <p className="text-xs tracking-[0.15em] uppercase text-[#2a4a2e] mb-4">Topics covered</p>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
          {topics.map((topic) => (
            <div key={topic} className="px-4 py-2.5 bg-[#0f1a11] border border-[#1a2e1e] rounded-lg text-sm text-[#5a7a60] hover:border-green-500/30 hover:text-green-400 transition-all duration-150">
              {topic}
            </div>
          ))}
        </div>
      </div>
      <div className="p-6 bg-green-500/5 border border-green-500/15 rounded-xl">
        <p className="text-sm text-[#5a7a60]">
          <strong className="text-green-400">$80 / session</strong> — Weekly sessions available. First session is free.
        </p>
      </div>
    </div>
  );
}