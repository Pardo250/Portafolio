import { motion } from 'framer-motion';

interface SectionTitleProps {
  title: string;
  subtitle?: string;
}

export default function SectionTitle({ title, subtitle }: SectionTitleProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ textAlign: 'center', marginBottom: '1rem' }}
    >
      <h2 style={{ fontSize: 'clamp(2rem, 5vw, 3.2rem)', fontWeight: '800', marginBottom: '1rem' }}>
        <span className="gradient-text">{title}</span>
      </h2>
      {subtitle && (
        <p style={{ color: '#94a3b8', fontSize: '1.05rem', maxWidth: '520px', margin: '0 auto' }}>
          {subtitle}
        </p>
      )}
      <div style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '0.5rem', marginTop: '1.25rem',
      }}>
        <div style={{ height: '1px', width: '64px', background: 'linear-gradient(to right, transparent, #a855f7)' }} />
        <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#a855f7' }} />
        <div style={{ height: '1px', width: '64px', background: 'linear-gradient(to left, transparent, #a855f7)' }} />
      </div>
    </motion.div>
  );
}
