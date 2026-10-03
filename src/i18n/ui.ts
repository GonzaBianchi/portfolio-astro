export const languages = {
  es: 'Español',
  en: 'English',
} as const;

export const defaultLang = 'es';

export type Lang = keyof typeof languages;

export const ui = {
  es: {
    'meta.title': 'Gonzalo Bianchini — Desarrollador Web',
    'meta.description':
      'Portfolio de Gonzalo Bianchini: desarrollador web enfocado en interfaces rápidas, accesibles y bien construidas.',

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
      'Construyo interfaces rápidas, accesibles y con obsesión por el detalle. Me gusta el código simple, los sistemas que se entienden y las cosas que cargan en menos de un segundo.',
    'hero.cta.projects': 'Ver proyectos',
    'hero.cta.contact': 'Contactame',
    'hero.status': 'disponible para proyectos',

    'about.title': 'Sobre mí',
    'about.cmd': 'cat sobre-mi.md',

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

    'contact.title': 'Contacto',
    'contact.cmd': './contactar.sh',
    'contact.lead':
      '¿Tenés una idea, un proyecto o una vacante? Escribime y te respondo.',
    'contact.email': 'Enviar email',

    'footer.built': 'Hecho con Astro y demasiado café.',
    'footer.rights': 'Todos los derechos reservados.',

    '404.title': 'Página no encontrada',
    '404.text': 'La ruta que buscás no existe o fue movida.',
    '404.home': 'Volver al inicio',
  },
  en: {
    'meta.title': 'Gonzalo Bianchini — Web Developer',
    'meta.description':
      "Gonzalo Bianchini's portfolio: web developer focused on fast, accessible, well-built interfaces.",

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
      'I build fast, accessible interfaces with an obsession for detail. I like simple code, systems you can actually reason about, and pages that load in under a second.',
    'hero.cta.projects': 'View projects',
    'hero.cta.contact': 'Get in touch',
    'hero.status': 'available for work',

    'about.title': 'About me',
    'about.cmd': 'cat about.md',

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

    'contact.title': 'Contact',
    'contact.cmd': './get-in-touch.sh',
    'contact.lead':
      'Got an idea, a project or a role in mind? Drop me a line and I’ll get back to you.',
    'contact.email': 'Send email',

    'footer.built': 'Built with Astro and too much coffee.',
    'footer.rights': 'All rights reserved.',

    '404.title': 'Page not found',
    '404.text': 'The route you are looking for does not exist or was moved.',
    '404.home': 'Back home',
  },
} as const;

export type UIKey = keyof (typeof ui)['es'];
