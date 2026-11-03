export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'meta.title': 'Gonzalo Bianchini — Desarrollador Web Full Stack',
    'meta.description':
      'Portfolio de Gonzalo Bianchini, desarrollador web full stack en Santa Fe, Argentina. Sistemas web eficientes, seguros y escalables con PHP, Symfony, TypeScript, React y Angular.',

    'nav.about': 'sobre-mí',
    'nav.stack': 'stack',
    'nav.projects': 'proyectos',
    'nav.contact': 'contacto',
    'nav.menu': 'Abrir menú',
    'nav.theme': 'Cambiar tema',
    'nav.lang': 'Cambiar idioma',
    'nav.skin': 'Cambiar estética (terminal / cyber)',

    'hero.role': 'Desarrollador Web / Full Stack',
    'hero.greeting': 'Hola, soy',
    'hero.tagline':
      'Desarrollo aplicaciones full stack, del front-end al back-end. Diseño soluciones rápidas, eficientes y seguras, con sistemas interoperables, organizados y escalables.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactame',
    'cv.download': 'Descargar CV',
    'hero.status': 'abierto a oportunidades laborales y proyectos freelance',

    'about.title': 'Sobre mí',
    'about.cmd': 'cat sobre-mi.md',
    'about.panel': 'cat formacion.txt',
    'about.education': 'estudios',
    'about.languages': 'idiomas',
    'about.courses': 'cursos',

    'stack.title': 'Stack',
    'stack.cmd': 'ls -la ~/stack',
    'stack.note':
      'Herramientas que uso a diario. El resto se aprende cuando el problema lo pide.',

    'projects.title': 'Proyectos',
    'projects.cmd': 'git log --oneline proyectos',
    'projects.featured': 'destacado',
    'projects.code': 'Código',
    'projects.demo': 'Demo',
    'projects.empty': 'Próximamente.',
    'projects.gallery': 'Capturas',
    'projects.prev': 'Imagen anterior',
    'projects.next': 'Imagen siguiente',

    'contact.title': 'Contacto',
    'contact.cmd': './contactar.sh',
    'contact.lead':
      '¿Tenés una vacante, un proyecto freelance o una idea? Escribime y te respondo.',
    'contact.email': 'Enviar email',

    'footer.built': 'Hecho con Astro y demasiado café.',
    'footer.rights': 'Todos los derechos reservados.',

    '404.title': 'Página no encontrada',
    '404.text': 'La ruta que buscás no existe o fue movida.',
    '404.home': 'Volver al inicio',
  },
  en: {
    'meta.title': 'Gonzalo Bianchini — Full Stack Web Developer',
    'meta.description':
      "Portfolio of Gonzalo Bianchini, full stack web developer in Santa Fe, Argentina. Efficient, secure and scalable web systems with PHP, Symfony, TypeScript, React and Angular.",

    'nav.about': 'about',
    'nav.stack': 'stack',
    'nav.projects': 'projects',
    'nav.contact': 'contact',
    'nav.menu': 'Open menu',
    'nav.theme': 'Toggle theme',
    'nav.lang': 'Switch language',
    'nav.skin': 'Switch look (terminal / cyber)',

    'hero.role': 'Web / Full Stack Developer',
    'hero.greeting': "Hi, I'm",
    'hero.tagline':
      'I build full stack applications, from front-end to back-end. I design fast, efficient and secure solutions, with interoperable, well-organized and scalable systems.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'cv.download': 'Download CV',
    'hero.status': 'open to job opportunities and freelance work',

    'about.title': 'About me',
    'about.cmd': 'cat about.md',
    'about.panel': 'cat education.txt',
    'about.education': 'education',
    'about.languages': 'languages',
    'about.courses': 'courses',

    'stack.title': 'Stack',
    'stack.cmd': 'ls -la ~/stack',
    'stack.note':
      "Tools I use daily. The rest gets learned when the problem asks for it.",

    'projects.title': 'Projects',
    'projects.cmd': 'git log --oneline projects',
    'projects.featured': 'featured',
    'projects.code': 'Code',
    'projects.demo': 'Demo',
    'projects.empty': 'Coming soon.',
    'projects.gallery': 'Screenshots',
    'projects.prev': 'Previous image',
    'projects.next': 'Next image',

    'contact.title': 'Contact',
    'contact.cmd': './get-in-touch.sh',
    'contact.lead':
      'Got a role, a freelance project or an idea in mind? Drop me a line and I’ll get back to you.',
    'contact.email': 'Send email',

    'footer.built': 'Built with Astro and too much coffee.',
    'footer.rights': 'All rights reserved.',

    '404.title': 'Page not found',
    '404.text': 'The route you are looking for does not exist or was moved.',
    '404.home': 'Back home',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
