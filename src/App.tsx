import Navbar from './components/Navbar';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Contact from './components/sections/Contact';

function Divider() {
  return (
    <div className="flex items-center justify-center px-6">
      <div className="w-full max-w-6xl h-px bg-gradient-to-r from-transparent via-[#a855f7]/20 to-transparent" />
    </div>
  );
}

function App() {
  return (
    <div className="bg-[#0f172a] text-[#f1f5f9] min-h-screen">
      <Navbar />
      <main>
        <Hero />
        <Divider />
        <About />
        <Divider />
        <Skills />
        <Divider />
        <Projects />
        <Divider />
        <Contact />
      </main>
      <footer className="text-center py-8 text-[#475569] text-sm font-mono border-t border-[#1e293b] mt-0">
        <span>{'<'}</span>
        <span className="text-[#a855f7]"> Juan Diego Pardo Ballesteros </span>
        <span>{'/>'}</span>
        {' '}&mdash; Hecho con React + Vite + Tailwind
      </footer>
    </div>
  );
}

export default App;
