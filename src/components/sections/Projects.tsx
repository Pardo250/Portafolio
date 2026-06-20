import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import ProjectCard from '../ui/ProjectCard';
import { projects, allTags } from '../../data/projects';

export default function Projects() {
  const [activeFilter, setActiveFilter] = useState<string>('Todos');

  const filtered =
    activeFilter === 'Todos'
      ? projects
      : projects.filter((p) => p.tags.includes(activeFilter));

  return (
    <section id="projects" className="content-section">
      <div className="section-inner">
        <SectionTitle
          title="Proyectos"
          subtitle="Lo que he construido — click en GitHub para ver el código"
        />

        {/* Filter buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '0.75rem', marginTop: '2.5rem', marginBottom: '3rem',
          }}
        >
          {['Todos', ...allTags].map((tag) => (
            <motion.button
              key={tag}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveFilter(tag)}
              style={{
                padding: '0.5rem 1.25rem',
                borderRadius: '9999px',
                fontSize: '0.875rem',
                fontWeight: '500',
                cursor: 'pointer',
                transition: 'all 0.2s',
                background: activeFilter === tag ? '#a855f7' : 'transparent',
                color: activeFilter === tag ? '#fff' : '#94a3b8',
                border: activeFilter === tag ? 'none' : '1px solid #334155',
                boxShadow: activeFilter === tag ? '0 4px 20px rgba(168,85,247,0.3)' : 'none',
              }}
            >
              {tag}
            </motion.button>
          ))}
        </motion.div>

        {/* Project grid */}
        <motion.div
          layout
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'center',
            gap: '1.5rem',
          }}
        >
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3 }}
                style={{ width: '340px', minWidth: '280px', flex: '0 1 340px' }}
              >
                <ProjectCard project={project} index={i} />
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {filtered.length === 0 && (
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            style={{ textAlign: 'center', color: '#64748b', marginTop: '3rem' }}
          >
            No hay proyectos con este filtro aún.
          </motion.p>
        )}
      </div>
    </section>
  );
}
