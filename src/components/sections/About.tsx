import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import SectionTitle from '../ui/SectionTitle';
import { FiCode, FiBriefcase, FiAward, FiCoffee } from 'react-icons/fi';

const stats = [
  { icon: FiCode, value: '10+', label: 'Proyectos' },
  { icon: FiBriefcase, value: '2+', label: 'Años de experiencia' },
  { icon: FiAward, value: '100%', label: 'Dedicación' },
  { icon: FiCoffee, value: '∞', label: 'Cafés tomados' },
];

export default function About() {
  const { ref, inView } = useInView({ triggerOnce: true, threshold: 0.2 });

  return (
    <section id="about" className="content-section">
      <div className="section-inner">
        <SectionTitle
          title="Sobre mí"
          subtitle="Un poco de quién soy y qué me apasiona"
        />

        <div ref={ref} style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem', alignItems: 'center' }}>
          {/* Photo / Avatar */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
            style={{ display: 'flex', justifyContent: 'center' }}
          >
            <div style={{ position: 'relative' }}>
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 20, repeat: Infinity, ease: 'linear' }}
                style={{
                  position: 'absolute', inset: 0, borderRadius: '50%',
                  border: '2px dashed rgba(168,85,247,0.4)', transform: 'scale(1.1)',
                }}
              />
              <div className="glow-purple" style={{
                width: '280px', height: '280px', borderRadius: '50%',
                background: 'linear-gradient(135deg, #1e293b, #0f172a)',
                border: '2px solid rgba(168,85,247,0.3)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                overflow: 'hidden',
              }}>
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '4rem', marginBottom: '0.5rem' }}>👨‍💻</div>
                  <p style={{ color: '#94a3b8', fontSize: '0.75rem', fontFamily: 'monospace' }}>Tu foto aquí</p>
                </div>
              </div>
              <motion.div
                animate={{ y: [-4, 4, -4] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="glass-card"
                style={{
                  position: 'absolute', bottom: '-16px', right: '-16px',
                  borderRadius: '12px', padding: '8px 16px',
                  fontSize: '0.875rem', fontWeight: '600', color: '#a855f7',
                }}
              >
                Ing. Sistemas 🎓
              </motion.div>
            </div>
          </motion.div>

          {/* Text content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', textAlign: 'left' }}
          >
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Soy <span style={{ color: '#c084fc', fontWeight: '600' }}>Juan Diego Pardo Ballesteros</span>, Ingeniero de Sistemas
              apasionado por el desarrollo de software y la tecnología. Me gusta construir soluciones
              que impacten de forma positiva y que sean eficientes, escalables y bien diseñadas.
            </p>
            <p style={{ color: '#94a3b8', fontSize: '1.1rem', lineHeight: '1.8' }}>
              Disfruto trabajar tanto en el <span style={{ color: '#f1f5f9' }}>frontend</span> como en el{' '}
              <span style={{ color: '#f1f5f9' }}>backend</span>, siempre buscando aprender nuevas
              tecnologías y mejorar mis habilidades. Cuando no estoy programando, estoy explorando
              nuevas ideas o tomando café ☕.
            </p>

            {/* Stats */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem', paddingTop: '1rem' }}>
              {stats.map(({ icon: Icon, value, label }) => (
                <motion.div
                  key={label}
                  whileHover={{ scale: 1.04 }}
                  className="glass-card"
                  style={{
                    borderRadius: '12px', padding: '1rem',
                    display: 'flex', alignItems: 'center', gap: '0.75rem',
                  }}
                >
                  <Icon style={{ color: '#a855f7', fontSize: '1.25rem', flexShrink: 0 }} />
                  <div>
                    <p style={{ color: '#f1f5f9', fontWeight: '700', fontSize: '1.25rem' }}>{value}</p>
                    <p style={{ color: '#94a3b8', fontSize: '0.75rem' }}>{label}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
