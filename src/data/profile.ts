import type { Localized } from '../i18n/utils';

/* ============================================================
   Editá este archivo: es la fuente de verdad de tus datos.
   ============================================================ */
export const profile = {
  name: 'Gonzalo Bianchini',
  handle: 'gonzalo',
  host: 'portfolio',
  email: 'gonzalobianchini01@gmail.com',
  location: { es: 'Argentina', en: 'Argentina' } satisfies Localized,
  available: true,

  /** Líneas que se tipean en la terminal del hero. */
  terminal: {
    es: [
      'whoami',
      'Desarrollador web. Front-end con foco en performance y accesibilidad.',
      'cat intereses.txt',
      'TypeScript · Astro · React · Node · Linux · automatización',
      'echo $OBJETIVO',
      'Escribir código que se entienda dentro de seis meses.',
    ],
    en: [
      'whoami',
      'Web developer. Front-end focused on performance and accessibility.',
      'cat interests.txt',
      'TypeScript · Astro · React · Node · Linux · automation',
      'echo $GOAL',
      'Write code that still makes sense six months later.',
    ],
  } satisfies Record<'es' | 'en', string[]>,

  about: {
    es: [
      'Soy desarrollador web y me dedico a construir productos donde el detalle importa: tiempos de carga, accesibilidad, y una base de código que no se vuelva un problema con el tiempo.',
      'Trabajo sobre todo con TypeScript, Astro y React del lado del cliente, y Node del lado del servidor. Me siento cómodo en la terminal, automatizo lo que hago dos veces y prefiero resolver el problema antes que agregar una dependencia.',
      'Cuando no estoy programando, ando leyendo sobre sistemas, jugando con Linux o rompiendo algo para entender cómo funciona.',
    ],
    en: [
      'I am a web developer building products where the details matter: load times, accessibility, and a codebase that will not become a liability six months in.',
      'I mostly work with TypeScript, Astro and React on the client, and Node on the server. I am at home in the terminal, I automate anything I do twice, and I would rather solve the problem than add a dependency.',
      'When I am not coding you will find me reading about systems, tinkering with Linux, or breaking something just to understand how it works.',
    ],
  } satisfies Record<'es' | 'en', string[]>,

  /**
   * Datos sueltos del panel lateral de "Sobre mí".
   * No repitas acá el stack: esa lista vive en `src/data/skills.ts`.
   */
  facts: [
    { key: 'os', value: 'Linux · Windows' },
    { key: 'editor', value: 'VS Code · Neovim' },
    { key: 'focus', value: 'performance · a11y · DX' },
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
