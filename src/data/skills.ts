export interface Skill {
  name: string;
  icon: string;
  category: 'language' | 'framework' | 'database' | 'devops' | 'tool';
  level: number;
}

export const skills: Skill[] = [
  // Languages
  { name: 'Python',      icon: 'SiPython',      category: 'language',  level: 85 },
  { name: 'Java',        icon: 'FaJava',         category: 'language',  level: 80 },
  { name: 'C#',          icon: 'TbBrandCSharp',  category: 'language',  level: 75 },
  { name: 'C++',         icon: 'SiCplusplus',    category: 'language',  level: 70 },
  { name: 'JavaScript',  icon: 'SiJavascript',   category: 'language',  level: 88 },
  { name: 'TypeScript',  icon: 'SiTypescript',   category: 'language',  level: 80 },
  { name: 'HTML',        icon: 'SiHtml5',        category: 'language',  level: 90 },
  { name: 'CSS',         icon: 'SiCss',          category: 'language',  level: 85 },
  { name: 'Kotlin',      icon: 'SiKotlin',       category: 'language',  level: 65 },
  { name: 'Dart',        icon: 'SiDart',         category: 'language',  level: 60 },
  { name: 'Swift',       icon: 'SiSwift',        category: 'language',  level: 55 },

  // Frameworks
  { name: 'React',       icon: 'SiReact',        category: 'framework', level: 85 },
  { name: 'Angular',     icon: 'SiAngular',      category: 'framework', level: 70 },
  { name: 'Node.js',     icon: 'SiNodedotjs',    category: 'framework', level: 80 },
  { name: 'Express',     icon: 'SiExpress',      category: 'framework', level: 75 },
  { name: 'Spring Boot', icon: 'SiSpringboot',   category: 'framework', level: 70 },
  { name: 'Flutter',     icon: 'SiFlutter',      category: 'framework', level: 65 },

  // Databases
  { name: 'MySQL',       icon: 'SiMysql',        category: 'database',  level: 80 },
  { name: 'Firebase',    icon: 'SiFirebase',     category: 'database',  level: 72 },
  { name: 'DBeaver',     icon: 'SiDbeaver',      category: 'database',  level: 75 },
  { name: 'SQLite',      icon: 'SiSqlite',       category: 'database',  level: 70 },
  { name: 'Supabase',    icon: 'SiSupabase',     category: 'database',  level: 68 },

  // DevOps
  { name: 'Docker',          icon: 'SiDocker',         category: 'devops', level: 72 },
  { name: 'Kubernetes',      icon: 'SiKubernetes',     category: 'devops', level: 60 },
  { name: 'GitHub Actions',  icon: 'SiGithubactions',  category: 'devops', level: 70 },

  // Tools
  { name: 'Git',     icon: 'SiGit',     category: 'tool', level: 90 },
  { name: 'GitHub',  icon: 'SiGithub',  category: 'tool', level: 88 },
  { name: 'Figma',   icon: 'SiFigma',   category: 'tool', level: 70 },
  { name: 'Postman', icon: 'SiPostman', category: 'tool', level: 80 },
  { name: 'Bash',    icon: 'SiGnubash', category: 'tool', level: 75 },
];
