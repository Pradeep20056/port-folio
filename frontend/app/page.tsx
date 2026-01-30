import Scene from "@/components/3d/Scene";
import Hero from "@/components/sections/Hero";

export default function Home() {
  return (
    <main className="relative min-h-screen">
      <Scene />

      <div className="relative z-10">
        <Hero />

        <footer className="py-20 text-center text-zinc-500">
          <p>© {new Date().getFullYear()} Pradeep K. Built with React Three Fiber.</p>
        </footer>
      </div>
    </main>
  );
}
