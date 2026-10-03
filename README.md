# Portfolio — Astro

Portfolio personal bilingüe (ES/EN) con estética de terminal, modo oscuro y claro.
Sitio estático: sin JS de framework, solo unos pocos scripts propios.

## Comandos

| Comando           | Qué hace                                    |
| ----------------- | ------------------------------------------- |
| `npm run dev`     | Servidor de desarrollo en `localhost:4321`  |
| `npm run build`   | Chequeo de tipos + build en `dist/`         |
| `npm run preview` | Previsualiza el build de producción         |

## Dónde editar

Todo el contenido está separado del markup:

- `src/data/profile.ts` — nombre, email, redes, bio, líneas de la terminal del hero, "facts".
- `src/data/projects.ts` — proyectos (nombre, descripción ES/EN, tags, repo, demo, `featured`).
  Para cargar uno nuevo, ver [`docs/ficha-proyecto.md`](docs/ficha-proyecto.md):
  trae un prompt listo para pegar en otro chat y sacar la info del proyecto.
- `src/data/skills.ts` — grupos del stack.
- `src/i18n/ui.ts` — todos los textos de la interfaz en ES y EN.

Antes de deployar, reemplazá los placeholders que quedan:

1. `astro.config.mjs` → `site` con tu dominio real.
2. `public/robots.txt` → la URL del sitemap.
3. `src/data/projects.ts` → los tres proyectos de ejemplo (los `repo` apuntan a
   `github.com/GonzaBianchi/proyecto-*`, que todavía no existen).

Cada sección usa un tratamiento visual distinto a propósito, para que el stack,
los proyectos y el panel de "sobre mí" no se lean como tres grillas de tarjetas:

- **Sobre mí** → panel de terminal con `whoami --verbose`. No pongas el stack acá.
- **Stack** → árbol de directorios, sin cajas (`src/components/Skills.astro`).
- **Proyectos** → timeline estilo `git log`, con un hash estable derivado del
  nombre (`src/components/Projects.astro`). Cada fila se despliega al hacer
  click y cierra las demás.

El acordeón es un `<details name="project">`: el navegador se encarga de la
exclusividad y del teclado, y la apertura se anima con `::details-content` más
`interpolate-size: allow-keywords`. Donde eso no está soportado el panel abre
de golpe, y hay un script mínimo que suple el `name` en navegadores viejos.
El destacado arranca abierto para que la sección no se vea vacía.

Las capturas van en `public/projects/` y se declaran en el campo `image` de
cada proyecto, en ratio 16:10. Las tres que están ahora son placeholders
abstractos: reemplazalas por capturas reales.

Cada captura va dentro de un marco con fondo neutro (token `--mat`, uno por
combinación de skin y tema). Es un passe-partout: amortigua el salto cuando
subís una captura de tema oscuro y la página está en claro. Si tus capturas
son claras funciona igual, no hace falta tocar nada.

## Idiomas

- `/` → español (idioma por defecto, sin prefijo)
- `/en/` → inglés

El selector del header mantiene la ruta equivalente. Para agregar un idioma:
sumalo a `locales` en `astro.config.mjs`, a `languages` y `ui` en `src/i18n/ui.ts`,
y creá `src/pages/<lang>/index.astro`.

## Temas y estéticas

Dos ejes independientes en `<html>`, ambos resueltos antes del primer paint por el
script inline de `BaseLayout.astro` (sin flash) y guardados en `localStorage`:

| Atributo    | Valores                 | Control            | Clave |
| ----------- | ----------------------- | ------------------ | ----- |
| `data-skin` | `terminal` \| `cyber`   | botón del rayo ⚡  | `skin` |
| `data-theme`| `dark` \| `light`       | botón sol/luna     | `theme` |

Las cuatro combinaciones funcionan: `terminal` es la consola verde original y
`cyber` es la paleta Night City (magenta, amarillo ácido, cian sobre violeta).

- Paleta en `src/styles/global.css`: un bloque de tokens por combinación. Los
  bloques `cyber` van **después** de los `terminal` porque empatan en especificidad.
- Casi todo el cambio de estética sale de los tokens. Los extras de `cyber`
  (halos de neón, aberración cromática, barrido CRT, títulos en mayúscula) viven
  junto al componente que decoran, bajo `:global(:root[data-skin='cyber'])`.
- El tema sigue al sistema mientras el usuario no haya elegido manualmente; la
  estética arranca siempre en `terminal`.
- El script mantiene sincronizados `<meta name="theme-color">` y el favicon
  (`favicon.svg` / `favicon-cyber.svg`). Si agregás una combinación, actualizá el
  mapa `BG` de `BaseLayout.astro` para que coincida con `--bg`.
- El `<meta name="color-scheme" content="dark light">` evita que el modo oscuro
  automático de Chrome invierta las versiones claras.

## Accesibilidad

Skip link, foco visible, contraste AA en ambos temas, navegación por teclado y
`prefers-reduced-motion` respetado (se desactivan las animaciones y el tipeo del hero).

## Deploy

Salida estática en `dist/`: sirve tal cual en Netlify, Vercel, Cloudflare Pages o
GitHub Pages. Sin adaptador ni runtime de servidor.
