import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import { Link } from 'react-scroll';
import { FiGithub, FiLinkedin, FiMail, FiArrowDown } from 'react-icons/fi';

const socialLinks = [
  { href: 'https://github.com/Pardo250', icon: FiGithub, label: 'GitHub' },
  { href: 'https://www.linkedin.com/in/juan-diego-pardo-ballesteros-b96a4b2b9', icon: FiLinkedin, label: 'LinkedIn' },
  { href: 'mailto:juandiegopardo05@gmail.com', icon: FiMail, label: 'Email' },
];

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ x: [0, 30, 0], y: [0, -20, 0] }}
          transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-[#a855f7]/10 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, -25, 0], y: [0, 30, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-[#7c3aed]/8 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ x: [0, 20, 0], y: [0, 15, 0] }}
          transition={{ duration: 12, repeat: Infinity, ease: 'easeInOut', delay: 4 }}
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-[#818cf8]/6 rounded-full blur-3xl"
        />
      </div>

      {/* Grid pattern overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: `linear-gradient(#a855f7 1px, transparent 1px), linear-gradient(90deg, #a855f7 1px, transparent 1px)`,
          backgroundSize: '60px 60px',
        }}
      />

      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Greeting */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-[#a855f7] font-mono text-lg mb-4 tracking-widest uppercase"
        >
          {'<'} Hola, mundo {'/>'}
        </motion.p>

        {/* Name */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          className="text-5xl md:text-7xl font-black mb-6 leading-tight"
        >
          <span className="text-[#f1f5f9]">Soy </span>
          <span className="gradient-text">Juan Diego Pardo</span>
        </motion.h1>

        {/* Typewriter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-2xl md:text-3xl font-semibold text-[#94a3b8] mb-8 h-12"
        >
          <TypeAnimation
            sequence={[
              'Ingeniero de Sistemas', 2000,
              'Full Stack Developer', 2000,
              'Problem Solver', 2000,
              'Apasionado por el código', 2000,
            ]}
            wrapper="span"
            repeat={Infinity}
            className="text-[#c084fc]"
          />
        </motion.div>

        {/* Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="text-[#94a3b8] text-lg max-w-2xl mx-auto mb-10 leading-relaxed"
        >
          Construyo experiencias digitales modernas, funcionales y de alto impacto.
          Apasionado por resolver problemas complejos con código limpio y creativo.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="flex flex-wrap items-center justify-center gap-4 mb-12"
        >
          <Link to="projects" smooth duration={600} offset={-72}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 bg-[#a855f7] hover:bg-[#9333ea] text-white font-semibold rounded-xl transition-colors glow-purple cursor-pointer"
            >
              Ver proyectos
            </motion.button>
          </Link>
          <Link to="contact" smooth duration={600} offset={-72}>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="px-8 py-3.5 border border-[#a855f7] text-[#a855f7] hover:bg-[#a855f7]/10 font-semibold rounded-xl transition-colors cursor-pointer"
            >
              Contactar
            </motion.button>
          </Link>
        </motion.div>

        {/* Social links */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 1 }}
          className="flex items-center justify-center gap-5 mb-16"
        >
          {socialLinks.map(({ href, icon: Icon, label }) => (
            <motion.a
              key={label}
              href={href}
              target={href.startsWith('mailto') ? undefined : '_blank'}
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, y: -3 }}
              className="text-[#94a3b8] hover:text-[#a855f7] transition-colors text-xl"
              aria-label={label}
            >
              <Icon />
            </motion.a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="flex flex-col items-center gap-2 text-[#475569]"
        >
          <span className="text-xs font-mono tracking-widest uppercase">Scroll</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <FiArrowDown className="text-[#a855f7]" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
