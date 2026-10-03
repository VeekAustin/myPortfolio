const areas = ["Tech stack selection", "Code architecture reviews", "Performance audits", "Team workflow improvements", "CI/CD setup", "Database design"];

export default function ConsultingPage() {
  return (
    <div>
      <h2 className="font-[Syne,sans-serif] text-2xl font-bold text-[#e8f5ea] mb-4">Consulting</h2>
      <p className="text-[#5a7a60] leading-relaxed mb-8 max-w-lg">
        Sometimes you need a second set of eyes. I offer consulting sessions for teams 
        that want to make better technical decisions — whether it's picking the right stack, 
        refactoring a codebase, or improving engineering processes.
      </p>
      <div className="mb-8">
        <p className="text-xs tracking-[0.15em] uppercase text-[#2a4a2e] mb-4">Areas I cover</p>
        <ul className="flex flex-col gap-2 list-none p-0">
          {areas.map((area) => (
            <li key={area} className="flex items-center gap-3 text-sm text-[#5a7a60]">
              <span className="text-green-500 text-[8px]">●</span> {area}
            </li>
          ))}
        </ul>
      </div>
      <div className="p-6 bg-green-500/5 border border-green-500/15 rounded-xl">
        <p className="text-sm text-[#5a7a60]">
          <strong className="text-green-400">$150 / hour</strong> — Book a free 15-min discovery call first.
        </p>
      </div>
    </div>
  );
}