import { motion } from 'framer-motion';
import {
  SiPython, SiCplusplus, SiJavascript, SiTypescript, SiHtml5, SiCss,
  SiKotlin, SiDart, SiSwift,
  SiReact, SiAngular, SiNodedotjs, SiExpress, SiSpringboot, SiFlutter,
  SiMysql, SiFirebase, SiDbeaver, SiSqlite, SiSupabase,
  SiDocker, SiKubernetes, SiGithubactions,
  SiGit, SiGithub, SiFigma, SiPostman, SiGnubash,
} from 'react-icons/si';
import { TbBrandCSharp } from 'react-icons/tb';
import { FaJava } from 'react-icons/fa';
import type { Skill } from '../../data/skills';

const iconMap: Record<string, React.ElementType> = {
  SiPython, FaJava, TbBrandCSharp, SiCplusplus, SiJavascript, SiTypescript,
  SiHtml5, SiCss, SiKotlin, SiDart, SiSwift,
  SiReact, SiAngular, SiNodedotjs, SiExpress, SiSpringboot, SiFlutter,
  SiMysql, SiFirebase, SiDbeaver, SiSqlite, SiSupabase,
  SiDocker, SiKubernetes, SiGithubactions,
  SiGit, SiGithub, SiFigma, SiPostman, SiGnubash,
};

interface SkillBadgeProps {
  skill: Skill;
  index: number;
}

export default function SkillBadge({ skill, index }: SkillBadgeProps) {
  const Icon = iconMap[skill.icon] ?? SiPython;

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.35, delay: index * 0.05 }}
      whileHover={{ scale: 1.08, y: -4 }}
      className="glass-card"
      style={{
        borderRadius: '14px',
        padding: '1.25rem 1rem',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: '0.6rem',
        cursor: 'default',
      }}
    >
      <div style={{ fontSize: '2rem', color: '#a855f7', transition: 'color 0.2s' }}>
        <Icon />
      </div>
      <span style={{ fontSize: '0.8rem', fontWeight: '600', color: '#f1f5f9', textAlign: 'center' }}>
        {skill.name}
      </span>
      <div style={{ width: '100%', background: '#334155', borderRadius: '9999px', height: '4px' }}>
        <motion.div
          initial={{ width: 0 }}
          whileInView={{ width: `${skill.level}%` }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: index * 0.05 + 0.2 }}
          style={{
            height: '4px', borderRadius: '9999px',
            background: 'linear-gradient(to right, #7c3aed, #a855f7)',
          }}
        />
      </div>
      <span style={{ fontSize: '0.7rem', color: '#94a3b8' }}>{skill.level}%</span>
    </motion.div>
  );
}
