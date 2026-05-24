export default function Contact() {
  return (
    <section id="contact" className="py-20 px-4 bg-[#0d1117]">
      <div className="max-w-2xl mx-auto text-center">
        <p className="text-xs tracking-[0.2em] uppercase text-[#238636] font-medium mb-2">
          Let's talk
        </p>
        <h2 className="text-4xl font-bold text-[#f0f6fc] mb-4">Get In Touch</h2>
        <p className="text-[#8b949e] mb-10 leading-relaxed">
          I am currently open to new opportunities. Whether you have a project,
          a question, or just want to say hi — my inbox is open.
        </p>

        <a
          href="mailto:iniekevictor@gmail.com"
          className="inline-block bg-[#238636] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#2ea043] transition-colors"
        >
          Say Hello
        </a>

        <div className="flex justify-center gap-8 mt-10">
          <a
            href="https://github.com/VeekAustin"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-[#238636] transition-colors font-medium"
          >
            GitHub
          </a>
          <a
            href="https://linkedin.com/in/victoraugustine"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-[#238636] transition-colors font-medium"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/Austin486295292"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[#8b949e] hover:text-[#238636] transition-colors font-medium"
          >
            Twitter / X
          </a>
        </div>
      </div>
    </section>
  );
}