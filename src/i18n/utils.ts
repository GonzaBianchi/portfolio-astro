import { defaultLang, ui, type Lang, type UIKey } from './ui';

/** Deduce el idioma a partir del pathname (`/en/...` => 'en'). */
export function getLangFromUrl(url: URL): Lang {
  const [, segment] = url.pathname.split('/');
  if (segment in ui) return segment as Lang;
  return defaultLang;
}

/** Devuelve la función de traducción para un idioma. */
export function useTranslations(lang: Lang) {
  return function t(key: UIKey): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Prefija una ruta con el idioma actual (`es` no lleva prefijo). */
export function localizePath(path: string, lang: Lang): string {
  const clean = path.startsWith('/') ? path : `/${path}`;
  return lang === defaultLang ? clean : `/${lang}${clean === '/' ? '' : clean}`;
}

/** Ruta equivalente en el otro idioma, para el selector. */
export function alternatePath(url: URL, target: Lang): string {
  const stripped = url.pathname.replace(/^\/en(?=\/|$)/, '') || '/';
  return localizePath(stripped, target);
}

/** Texto localizado guardado como `{ es, en }` en los archivos de datos. */
export type Localized = Record<Lang, string>;

export function pick(value: Localized, lang: Lang): string {
  return value[lang] ?? value[defaultLang];
}
