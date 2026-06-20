import { useState } from 'react';
import { Link } from 'react-scroll';
import { motion, AnimatePresence } from 'framer-motion';
import { HiMenuAlt3, HiX } from 'react-icons/hi';
import { useActiveSection } from '../hooks/useActiveSection';

const navLinks = [
  { to: 'hero', label: 'Inicio' },
  { to: 'about', label: 'Sobre mí' },
  { to: 'skills', label: 'Skills' },
  { to: 'projects', label: 'Proyectos' },
  { to: 'contact', label: 'Contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const activeSection = useActiveSection(navLinks.map((l) => l.to));

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 right-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-[#334155]/50"
    >
      <div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <Link to="hero" smooth duration={500} className="cursor-pointer">
          <span className="font-mono font-bold text-lg gradient-text">&lt;JD /&gt;</span>
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex items-center gap-8">
          {navLinks.map(({ to, label }) => (
            <li key={to}>
              <Link
                to={to}
                smooth
                duration={500}
                offset={-72}
                className={`relative text-sm font-medium cursor-pointer transition-colors duration-200 pb-1 ${
                  activeSection === to ? 'text-[#a855f7]' : 'text-[#94a3b8] hover:text-[#f1f5f9]'
                }`}
              >
                {label}
                {activeSection === to && (
                  <motion.span
                    layoutId="nav-underline"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-[#a855f7] rounded-full"
                  />
                )}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-[#94a3b8] hover:text-[#a855f7] transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? <HiX size={24} /> : <HiMenuAlt3 size={24} />}
        </button>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-[#0f172a] border-b border-[#334155]/50 overflow-hidden"
          >
            <ul className="flex flex-col px-6 py-4 gap-4">
              {navLinks.map(({ to, label }) => (
                <li key={to}>
                  <Link
                    to={to}
                    smooth
                    duration={500}
                    offset={-72}
                    onClick={() => setMenuOpen(false)}
                    className={`block text-sm font-medium cursor-pointer transition-colors ${
                      activeSection === to ? 'text-[#a855f7]' : 'text-[#94a3b8]'
                    }`}
                  >
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
