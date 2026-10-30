import type { Localized } from '../i18n/utils';

/* ============================================================
   Editá este archivo: es la fuente de verdad de tus datos.
   ============================================================ */
export const profile = {
  name: 'Gonzalo Bianchini',
  handle: 'gonzalo',
  host: 'portfolio',
  email: 'gonzalobianchini01@gmail.com',
  location: { es: 'Santa Fe, Argentina', en: 'Santa Fe, Argentina' } satisfies Localized,
  available: true,

  /** Currículums descargables (archivos en `public/cv/`). */
  cv: {
    es: '/cv/CV-Gonzalo-Bianchini-ES.pdf',
    en: '/cv/CV-Gonzalo-Bianchini-EN.pdf',
  } satisfies Localized,

  /** Líneas que se tipean en la terminal del hero. */
  terminal: {
    es: [
      'whoami',
      'Desarrollador web full stack. Front-end y back-end.',
      'cat intereses.txt',
      'React · Angular · Express · PHP/Symfony · Linux · automatización',
      'echo $OBJETIVO',
      'Soluciones rápidas, eficientes y seguras para cada problema.',
    ],
    en: [
      'whoami',
      'Full stack web developer. Front-end and back-end.',
      'cat interests.txt',
      'React · Angular · Express · PHP/Symfony · Linux · automation',
      'echo $GOAL',
      'Fast, efficient and secure solutions to every problem.',
    ],
  } satisfies Record<'es' | 'en', string[]>,

  about: {
    es: [
      'Soy desarrollador web full stack: trabajo tanto del lado del cliente como del servidor. Me importa construir sistemas interoperables, eficientes, organizados y escalables, y mi objetivo es diseñar soluciones rápidas, eficientes y seguras para cada problema.',
      'Actualmente trabajo en el Ministerio de Obras Públicas del Gobierno de la Provincia de Santa Fe, con PHP, Symfony y PostgreSQL. También disfruto trabajar con TypeScript y JavaScript en Astro, React y Angular, con Express en Node.js, y tengo conocimientos de Java con Spring Boot. Me siento cómodo en Linux y automatizo lo que hago dos veces.',
      'Cuando no estoy programando me llegan momentos de iluminación: ideas nuevas o mejoras eficientes para algún sistema.',
    ],
    en: [
      'I am a full stack web developer: I work on both the client and the server side. I care about building interoperable, efficient, well-organized and scalable systems, and my goal is to design fast, efficient and secure solutions to each problem.',
      'I currently work at the Ministry of Public Works of the Santa Fe Provincial Government, using PHP, Symfony and PostgreSQL. I also enjoy working with TypeScript and JavaScript in Astro, React and Angular, with Express on Node.js, and I have experience with Java and Spring Boot. I am at home on Linux and I automate anything I do twice.',
      'When I am not coding I get flashes of insight: new ideas or efficient improvements for some system.',
    ],
  } satisfies Record<'es' | 'en', string[]>,

  /**
   * Datos sueltos del panel lateral de "Sobre mí".
   * No repitas acá el stack: esa lista vive en `src/data/skills.ts`.
   */
  facts: [
    { key: 'os', value: { es: 'Linux · Windows', en: 'Linux · Windows' } },
    { key: 'editor', value: { es: 'VS Code', en: 'VS Code' } },
    {
      key: 'focus',
      value: {
        es: 'soluciones eficientes · seguras · escalables',
        en: 'efficient · secure · scalable solutions',
      },
    },
  ],

  socials: [
    { label: 'GitHub', url: 'https://github.com/GonzaBianchi', icon: 'github' },
    {
      label: 'LinkedIn',
      url: 'https://www.linkedin.com/in/gonzalo-bianchini/',
      icon: 'linkedin',
    },
    { label: 'Email', url: 'mailto:gonzalobianchini01@gmail.com', icon: 'mail' },
  ],
} as const;
