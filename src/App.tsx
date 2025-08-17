import React, { useEffect } from "react";
import Navigation from "./components/Navigation";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import RetroGrid from "./components/RetroGrid";

function App() {
  useEffect(() => {
    // Плавная прокрутка для якорных ссылок
    document.documentElement.style.scrollBehavior = "smooth";

    return () => {
      document.documentElement.style.scrollBehavior = "auto";
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden">
      {/* Background Elements */}
      <RetroGrid />

      {/* Animated Background Gradient */}
      <div className="fixed inset-0 pointer-events-none">
        <div
          className="absolute inset-0 bg-gradient-to-br from-purple-900/20 via-black to-cyan-900/20 animate-pulse"
          style={{ animationDuration: "8s" }}
        />
      </div>

      {/* Navigation */}
      <Navigation />

      {/* Main Content */}
      <main className="relative z-10">
        <div id="home">
          <Hero />
        </div>
        <Skills />
        <Projects />
        <Contact />
      </main>

      {/* Footer */}
      <footer className="relative z-10 bg-gradient-to-r from-gray-900 to-black border-t border-cyan-400/20 py-8">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <div className="mb-4">
            <span className="font-black text-2xl bg-gradient-to-r from-cyan-400 to-magenta-400 bg-clip-text text-transparent">
              &lt;DEV/&gt;
            </span>
          </div>
          <p className="text-gray-400 font-mono text-sm">
            © 2025 Sergey Veselov. Made with React + TypeScript
          </p>
          <p className="text-gray-500 font-mono text-xs mt-2">
            Ретро дизайн с любовью к 80-м ✨
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;
