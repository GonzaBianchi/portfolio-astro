import type { Localized } from '../i18n/utils';

export type Project = {
  name: string;
  description: Localized;
  tags: string[];
  repo?: string;
  demo?: string;
  featured?: boolean;
  /** Año o rango, se muestra junto al nombre. */
  year: string;
  /**
   * Captura del proyecto. Poné el archivo en `public/projects/`.
   * Ratio 16:10 (800×500) para que todas midan igual.
   */
  image?: { src: string; alt: Localized };
  /**
   * Dos o tres funcionalidades del sistema, cada una sobre un área distinta.
   * Qué hace esa parte, no qué ajustes tiene. Ni arquitectura ni tecnologías
   * (para eso, `tags`). Ver `docs/ficha-proyecto.md`.
   */
  features?: Localized[];
};

/* Reemplazá estos ejemplos por tus proyectos reales.
   Las imágenes de `public/projects/` son placeholders: cambialas por
   capturas de verdad. */
export const projects: Project[] = [
  {
    name: 'mop-comprobantes',
    year: '2025–2026',
    featured: true,
    description: {
      es: 'Sistema web del Ministerio de Obras Públicas de Santa Fe donde quienes reciben subsidios rinden cuentas de en qué gastaron el dinero, con facturas validadas contra ARCA y firma digital.',
      en: 'A web system for the Santa Fe Public Works Ministry where subsidy recipients report back on what they spent the money on, with invoices checked against the tax authority and digital signatures.',
    },
    image: {
      src: '/projects/mop-comprobantes.svg',
      alt: {
        es: 'Ilustración de un documento con un sello de verificación.',
        en: 'Illustration of a document with a verification stamp.',
      },
    },
    tags: ['Symfony', 'PHP', 'PostgreSQL', 'Doctrine', 'Twig', 'Bootstrap'],
  },
  {
    name: 'full-bot',
    year: '2025–2026',
    description: {
      es: 'Bot de Discord que da experiencia y niveles por participar en el chat, con logros, recompensas de rol y saludos de cumpleaños. Cada servidor lo configura desde su propio panel web.',
      en: 'A Discord bot that awards experience and levels for taking part in chat, with achievements, role rewards and birthday greetings. Each server configures it from its own web panel.',
    },
    image: {
      src: '/projects/full-bot.webp',
      alt: {
        es: 'Panel de configuración de un servidor: barra lateral de secciones y formulario del sistema de XP con la barra de guardado.',
        en: 'Server settings panel: sidebar of sections and the XP system form with the save bar.',
      },
    },
    features: [
      {
        es: 'Los usuarios suben de nivel participando en el chat, y cada servidor regula la velocidad de progresión y qué canales no cuentan.',
        en: 'Users level up by taking part in chat, and each server tunes how fast progression goes and which channels do not count.',
      },
      {
        es: 'Los roles se reparten solos: por alcanzar un nivel, al entrar al servidor, o eligiéndolos desde un menú de reacciones.',
        en: 'Roles are handed out on their own: by reaching a level, on joining the server, or by picking them from a reaction menu.',
      },
      {
        es: 'Las imágenes y videos que se publican en los canales elegidos se copian a un canal aparte, cada uno con un link al mensaje original.',
        en: 'Images and videos posted in the chosen channels get copied to a separate channel, each with a link back to the original message.',
      },
    ],
    tags: ['Discord.js', 'Node.js', 'React', 'MongoDB', 'Express', 'Render'],
    repo: 'https://github.com/GonzaBianchi/full-bot',
    demo: 'https://runichexcore.vercel.app',
  },
  {
    name: 'proyecto-uno',
    year: '2025',
    description: {
      es: 'Descripción corta del proyecto: qué problema resuelve, qué construiste y cuál fue el resultado medible.',
      en: 'Short project description: what problem it solves, what you built, and the measurable outcome.',
    },
    image: {
      src: '/projects/proyecto-uno.svg',
      alt: {
        es: 'Captura de proyecto-uno: panel con métricas y gráfico de barras.',
        en: 'Screenshot of proyecto-uno: dashboard with metrics and a bar chart.',
      },
    },
    features: [
      {
        es: 'Renderizado estático con hidratación parcial: la primera pintura no espera JavaScript.',
        en: 'Static rendering with partial hydration: the first paint never waits on JavaScript.',
      },
      {
        es: 'Consultas agregadas en la base en vez de en memoria; el panel bajó de segundos a milisegundos.',
        en: 'Aggregation pushed down to the database instead of in memory; the dashboard went from seconds to milliseconds.',
      },
      {
        es: 'Tipos generados desde el esquema, así el cliente y el servidor no se desincronizan.',
        en: 'Types generated from the schema, so client and server cannot drift apart.',
      },
    ],
    tags: ['Astro', 'TypeScript', 'PostgreSQL'],
    repo: 'https://github.com/GonzaBianchi/proyecto-uno',
    demo: 'https://proyecto-uno.dev',
  },
  {
    name: 'proyecto-dos',
    year: '2025',
    description: {
      es: 'Otra descripción breve. Enfocate en decisiones técnicas y en el impacto, no en la lista de tecnologías.',
      en: 'Another short description. Focus on technical decisions and impact, not on a list of technologies.',
    },
    image: {
      src: '/projects/proyecto-dos.svg',
      alt: {
        es: 'Captura de proyecto-dos: listado con filtros y detalle lateral.',
        en: 'Screenshot of proyecto-dos: filterable list with a side detail panel.',
      },
    },
    features: [
      {
        es: 'Estado del servidor separado del estado de la interfaz: se fueron la mitad de los re-renders.',
        en: 'Server state kept apart from UI state: half the re-renders disappeared.',
      },
      {
        es: 'Build reproducible en Docker, mismo artefacto en desarrollo y en producción.',
        en: 'Reproducible Docker build: the same artifact in development and production.',
      },
    ],
    tags: ['React', 'Node.js', 'Docker'],
    repo: 'https://github.com/GonzaBianchi/proyecto-dos',
  },
  {
    name: 'proyecto-tres',
    year: '2024',
    description: {
      es: 'Un tercer proyecto para completar la lista. Podés borrar o agregar los que quieras en src/data/projects.ts.',
      en: 'A third project to round out the list. Delete or add as many as you want in src/data/projects.ts.',
    },
    image: {
      src: '/projects/proyecto-tres.svg',
      alt: {
        es: 'Captura de proyecto-tres: salida de una herramienta de línea de comandos.',
        en: 'Screenshot of proyecto-tres: output of a command-line tool.',
      },
    },
    features: [
      {
        es: 'Una sola dependencia: el resto es la librería estándar y scripts de shell.',
        en: 'A single dependency: the rest is the standard library and shell scripts.',
      },
      {
        es: 'Salida legible para humanos y en JSON, para poder encadenarla con otras herramientas.',
        en: 'Human-readable and JSON output, so it pipes into other tools.',
      },
    ],
    tags: ['CLI', 'Bash', 'Automation'],
    repo: 'https://github.com/GonzaBianchi/proyecto-tres',
  },
];
