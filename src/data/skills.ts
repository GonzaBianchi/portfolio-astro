import type { Localized } from '../i18n/utils';

export type SkillGroup = {
  title: Localized;
  items: string[];
};

export const skills: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'HTML', 'CSS', 'SQL', 'Bash'],
  },
  {
    title: { es: 'Front-end', en: 'Front-end' },
    items: ['Astro', 'React', 'Tailwind CSS', 'Vite', 'Sass'],
  },
  {
    title: { es: 'Back-end', en: 'Back-end' },
    items: ['Node.js', 'Express', 'PostgreSQL', 'Prisma', 'REST'],
  },
  {
    title: { es: 'Herramientas', en: 'Tooling' },
    items: ['Git', 'Docker', 'Linux', 'Vitest', 'Figma', 'GitHub Actions'],
  },
];
