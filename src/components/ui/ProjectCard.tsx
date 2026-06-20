import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink } from 'react-icons/fi';
import type { Project } from '../../data/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

export default function ProjectCard({ project, index }: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      whileHover={{ y: -6 }}
      className="glass-card"
      style={{
        borderRadius: '16px',
        overflow: 'hidden',
        display: 'flex',
        flexDirection: 'column',
        height: '100%',
      }}
    >
      {/* Image */}
      <div style={{
        position: 'relative',
        height: '220px',
        flexShrink: 0,
        backgroundImage: project.image ? `url(${project.image})` : 'none',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: '#1e293b',
      }}>
        {!project.image && (
          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            height: '100%', opacity: 0.4,
          }}>
            <div style={{
              width: '64px', height: '64px', borderRadius: '50%',
              border: '2px solid #a855f7',
              display: 'flex', alignItems: 'center', justifyContent: 'center',
            }}>
              <span className="gradient-text" style={{ fontSize: '1.5rem', fontWeight: '700' }}>
                {project.title[0]}
              </span>
            </div>
          </div>
        )}
        {project.featured && (
          <span style={{
            position: 'absolute', top: '12px', right: '12px',
            fontSize: '0.7rem', background: '#a855f7', color: '#fff',
            padding: '2px 10px', borderRadius: '9999px', fontWeight: '600',
          }}>
            Featured
          </span>
        )}
      </div>

      {/* Content */}
      <div style={{ padding: '1.5rem', display: 'flex', flexDirection: 'column', flex: 1 }}>
        <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#f1f5f9', marginBottom: '0.5rem' }}>
          {project.title}
        </h3>
        <p style={{ color: '#94a3b8', fontSize: '0.875rem', lineHeight: '1.6', marginBottom: '1rem', flex: 1 }}>
          {project.description}
        </p>

        <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginBottom: '1.25rem' }}>
          {project.tags.map((tag) => (
            <span key={tag} style={{
              fontSize: '0.7rem', padding: '3px 10px', borderRadius: '9999px',
              border: '1px solid rgba(168,85,247,0.4)',
              color: '#c084fc', background: 'rgba(168,85,247,0.1)',
            }}>
              {tag}
            </span>
          ))}
        </div>

        <div style={{ display: 'flex', gap: '1rem', marginTop: 'auto' }}>
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              display: 'flex', alignItems: 'center', gap: '0.4rem',
              fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none',
              transition: 'color 0.2s',
            }}
            onMouseEnter={e => (e.currentTarget.style.color = '#a855f7')}
            onMouseLeave={e => (e.currentTarget.style.color = '#94a3b8')}
          >
            <FiGithub /> GitHub
          </a>
          {project.demo && (
            <a
              href={project.demo}
              target="_blank"
              rel="noopener noreferrer"
              style={{
                display: 'flex', alignItems: 'center', gap: '0.4rem',
                fontSize: '0.875rem', color: '#94a3b8', textDecoration: 'none',
              }}
            >
              <FiExternalLink /> Demo
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
