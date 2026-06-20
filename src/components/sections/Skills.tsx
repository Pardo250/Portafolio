import { motion } from 'framer-motion';
import SectionTitle from '../ui/SectionTitle';
import SkillBadge from '../ui/SkillBadge';
import { skills } from '../../data/skills';

const languages  = skills.filter((s) => s.category === 'language');
const frameworks = skills.filter((s) => s.category === 'framework');
const databases  = skills.filter((s) => s.category === 'database');
const devops     = skills.filter((s) => s.category === 'devops');
const tools      = skills.filter((s) => s.category === 'tool');

const extras = [
  'POO', 'Algoritmos', 'Estructuras de Datos', 'REST APIs',
  'Scrum / Agile', 'CI/CD', 'Linux',
];

interface CategorySectionProps {
  label: string;
  items: typeof skills;
  columns?: number;
}

function SubsectionTitle({ label }: { label: string }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        gap: '1rem', marginBottom: '1.75rem',
      }}
    >
      <span style={{ height: '1px', width: '60px', background: 'linear-gradient(to right, transparent, rgba(168,85,247,0.6))' }} />
      <span style={{ fontSize: '0.7rem', fontFamily: 'monospace', color: '#a855f7', letterSpacing: '0.2em', textTransform: 'uppercase' }}>
        {label}
      </span>
      <span style={{ height: '1px', width: '60px', background: 'linear-gradient(to left, transparent, rgba(168,85,247,0.6))' }} />
    </motion.div>
  );
}

function CategorySection({ label, items, columns = 4 }: CategorySectionProps) {
  return (
    <div style={{ marginBottom: '3.5rem' }}>
      <SubsectionTitle label={label} />
      <div style={{
        display: 'grid',
        gridTemplateColumns: `repeat(${columns}, 1fr)`,
        gap: '1rem',
        maxWidth: columns <= 3 ? `${columns * 180}px` : '100%',
        margin: '0 auto',
      }}>
        {items.map((skill, i) => (
          <SkillBadge key={skill.name} skill={skill} index={i} />
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <section id="skills" className="content-section section-alt">
      <div className="section-inner">
        <SectionTitle
          title="Skills"
          subtitle="Tecnologías y conocimientos que domino"
        />

        <CategorySection label="Lenguajes de programación" items={languages} columns={4} />
        <CategorySection label="Frameworks & Librerías"    items={frameworks} columns={3} />
        <CategorySection label="Bases de datos"            items={databases}  columns={3} />
        <CategorySection label="DevOps & Infraestructura"  items={devops}     columns={3} />
        <CategorySection label="Herramientas"              items={tools}      columns={5} />

        {/* Extra knowledge */}
        <div>
          <SubsectionTitle label="Conocimientos adicionales" />
          <div style={{
            display: 'flex', flexWrap: 'wrap', justifyContent: 'center',
            gap: '0.75rem', maxWidth: '700px', margin: '0 auto',
          }}>
            {extras.map((extra, i) => (
              <motion.span
                key={extra}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ scale: 1.08 }}
                style={{
                  padding: '0.5rem 1.25rem',
                  borderRadius: '9999px',
                  border: '1px solid rgba(168,85,247,0.3)',
                  color: '#94a3b8',
                  fontSize: '0.875rem',
                  cursor: 'default',
                }}
              >
                {extra}
              </motion.span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
