import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Fondee from "../components/Fondee";
import About from "../components/About";
import Experience from "../components/Experience";
import Certifications from "../components/Certifications";
import Contact from "../components/Contact";
import Formation from "../components/Formation";
import Projects from "../components/Projects";
import Image from "next/image";
import Skills from "../components/Skills";
import Research from "../components/Research";

export default function Home() {
  return (
    <main id="home">
      <Navbar />
      <Hero />
      <Fondee />
      <About />
      <Formation />
      <Skills />
      <Projects />
      <Research />
      <Experience />
      <Certifications />
      <Contact />

      <footer className="border-t border-slate-200 bg-white">
        <div className="mx-auto max-w-6xl px-6 py-10 text-sm text-slate-500 flex items-center gap-2">
          <span>© {new Date().getFullYear()} Sarah Mahmoudi —</span>

          <span className="relative h-9 w-9 overflow-hidden rounded-lg bg-white ring-1 ring-slate-200">
            <Image
              src="/logo.png"
              alt="Fondée logo"
              fill
              className="object-cover object-center scale-[1.9]"
            />
          </span>

          <span>Fondée.</span>
        </div>
      </footer>
    </main>
  );
}