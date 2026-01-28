import Scene from "@/components/3d/Scene";
import Hero from "@/components/sections/Hero";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene />

      <div className="relative z-10">
        <Hero />
        <Experience />
        <Skills />

        <footer className="py-20 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Pradeep K. Built with React Three Fiber.</p>
        </footer>
      </div>
    </main>
  );
}
