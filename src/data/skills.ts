import type { Localized } from '../i18n/utils';

export type SkillGroup = {
  title: Localized;
  items: (string | Localized)[];
};

export const skills: SkillGroup[] = [
  {
    title: { es: 'Lenguajes', en: 'Languages' },
    items: ['TypeScript', 'JavaScript', 'SQL', 'PHP', 'Java'],
  },
  {
    title: { es: 'Front-end', en: 'Front-end' },
    items: ['Astro', 'React', 'Angular', 'Tailwind CSS'],
  },
  {
    title: { es: 'Back-end', en: 'Back-end' },
    items: ['Node.js', 'Express', 'Symfony', 'Spring Boot', 'PostgreSQL', 'API REST'],
  },
  {
    title: { es: 'Herramientas', en: 'Tooling' },
    items: [
      'Git',
      'Trello',
      'Notion',
      { es: 'Inteligencia artificial', en: 'Artificial intelligence' },
    ],
  },
];
