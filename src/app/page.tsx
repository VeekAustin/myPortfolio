import Hero from "../components/hero";
import Projects from "../components/projects";
import Skills from "../components/skills";
import Services from "../components/services";
import Contact from "../utils/contact";

export default function Home() {
  return (
    <div className="bg-[#0d1117]">
      <Hero />
      <Projects />
      <Skills />
      <Services />
      <Contact />
    </div>
  );
}
