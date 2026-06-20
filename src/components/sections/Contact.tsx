import { useState, type FormEvent } from 'react';
import { motion } from 'framer-motion';
import emailjs from '@emailjs/browser';
import SectionTitle from '../ui/SectionTitle';
import { FiGithub, FiLinkedin, FiMail, FiDownload, FiSend, FiCheckCircle } from 'react-icons/fi';

const socials = [
  { href: 'https://github.com/Pardo250', icon: FiGithub, label: 'GitHub', user: '@Pardo250' },
  { href: 'https://www.linkedin.com/in/juan-diego-pardo-ballesteros-b96a4b2b9', icon: FiLinkedin, label: 'LinkedIn', user: 'Juan Diego Pardo Ballesteros' },
  { href: 'mailto:juandiegopardo05@gmail.com', icon: FiMail, label: 'Email', user: 'juandiegopardo05@gmail.com' },
];

const EMAILJS_SERVICE_ID = 'YOUR_SERVICE_ID';
const EMAILJS_TEMPLATE_ID = 'YOUR_TEMPLATE_ID';
const EMAILJS_PUBLIC_KEY = 'YOUR_PUBLIC_KEY';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    try {
      await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        { from_name: form.name, from_email: form.email, message: form.message },
        EMAILJS_PUBLIC_KEY
      );
      setStatus('sent');
      setForm({ name: '', email: '', message: '' });
    } catch {
      setStatus('error');
    }
  };

  const inputStyle: React.CSSProperties = {
    width: '100%',
    background: '#1e293b',
    border: '1px solid #334155',
    borderRadius: '12px',
    padding: '0.75rem 1rem',
    color: '#f1f5f9',
    fontSize: '0.875rem',
    outline: 'none',
    transition: 'border-color 0.2s',
    boxSizing: 'border-box',
  };

  const labelStyle: React.CSSProperties = {
    display: 'block',
    fontSize: '0.7rem',
    fontFamily: 'monospace',
    color: '#64748b',
    textTransform: 'uppercase',
    letterSpacing: '0.1em',
    marginBottom: '0.5rem',
  };

  return (
    <section id="contact" className="content-section section-alt">
      <div className="section-inner">
        <SectionTitle
          title="Contacto"
          subtitle="¿Tienes un proyecto en mente? Hablemos."
        />

        {/* Two-column grid centered */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))',
          gap: '3rem',
          maxWidth: '900px',
          margin: '0 auto',
          textAlign: 'left',
        }}>

          {/* Left: Info + socials */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}
          >
            <p style={{ color: '#94a3b8', fontSize: '1rem', lineHeight: '1.8' }}>
              Estoy disponible para proyectos freelance, oportunidades laborales
              o simplemente charlar sobre tecnología. ¡No dudes en escribirme!
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {socials.map(({ href, icon: Icon, label, user }) => (
                <motion.a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  whileHover={{ x: 6 }}
                  className="glass-card"
                  style={{
                    display: 'flex', alignItems: 'center', gap: '1rem',
                    borderRadius: '12px', padding: '1rem',
                    textDecoration: 'none', transition: 'border-color 0.2s',
                  }}
                >
                  <div style={{
                    width: '40px', height: '40px', borderRadius: '8px',
                    background: 'rgba(168,85,247,0.1)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#a855f7', flexShrink: 0,
                  }}>
                    <Icon size={18} />
                  </div>
                  <div>
                    <p style={{ fontSize: '0.7rem', color: '#64748b', fontFamily: 'monospace', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                      {label}
                    </p>
                    <p style={{ color: '#f1f5f9', fontSize: '0.875rem', fontWeight: '500' }}>
                      {user}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* CV Download */}
            <motion.a
              href="/cv.pdf"
              download="JuanDiego_Pardo_CV.pdf"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.97 }}
              style={{
                display: 'flex', alignItems: 'center', justifyContent: 'center',
                gap: '0.5rem', padding: '0.875rem',
                border: '2px solid #a855f7', color: '#a855f7',
                fontWeight: '600', borderRadius: '12px',
                textDecoration: 'none', transition: 'all 0.2s',
              }}
            >
              <FiDownload /> Descargar CV
            </motion.a>
          </motion.div>

          {/* Right: Form */}
          <motion.form
            onSubmit={handleSubmit}
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}
          >
            <div>
              <label style={labelStyle}>Nombre</label>
              <input
                type="text"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
                placeholder="Tu nombre"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Email</label>
              <input
                type="email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
                placeholder="tu@email.com"
                style={inputStyle}
              />
            </div>

            <div>
              <label style={labelStyle}>Mensaje</label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                required
                rows={5}
                placeholder="Cuéntame sobre tu proyecto..."
                style={{ ...inputStyle, resize: 'none' }}
              />
            </div>

            <motion.button
              type="submit"
              disabled={status === 'sending' || status === 'sent'}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.97 }}
              className="glow-purple"
              style={{
                padding: '0.875rem',
                background: '#a855f7',
                color: '#fff',
                fontWeight: '600',
                borderRadius: '12px',
                border: 'none',
                cursor: 'pointer',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                gap: '0.5rem',
                fontSize: '1rem',
                opacity: status === 'sending' || status === 'sent' ? 0.6 : 1,
                transition: 'background 0.2s',
              }}
            >
              {status === 'sending' && (
                <span style={{
                  width: '16px', height: '16px', borderRadius: '50%',
                  border: '2px solid #fff', borderTopColor: 'transparent',
                  animation: 'spin 0.8s linear infinite',
                }} />
              )}
              {status === 'sent' ? <><FiCheckCircle /> ¡Mensaje enviado!</>
                : status === 'sending' ? 'Enviando...'
                : <><FiSend /> Enviar mensaje</>}
            </motion.button>

            {status === 'error' && (
              <p style={{ color: '#f87171', fontSize: '0.875rem', textAlign: 'center' }}>
                Hubo un error. Por favor escríbeme directamente al email.
              </p>
            )}
          </motion.form>
        </div>
      </div>
    </section>
  );
}
