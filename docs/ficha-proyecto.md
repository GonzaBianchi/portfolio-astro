# Ficha de proyecto

Plantilla para levantar la info de un proyecto en otro chat y traerla acá ya
lista para cargar. Evita el ida y vuelta de "¿y esto cómo era?".

## Cómo se usa

1. Abrí un chat nuevo, idealmente parado en el repo del proyecto.
2. Pegá el **prompt** de más abajo.
3. Contestá lo que te pregunte (o dejá que lea el repo y complete lo que pueda).
4. Traeme el bloque que devuelve. Yo lo cargo en `src/data/projects.ts`,
   sumo la captura y verifico cómo queda en los cuatro temas.

Si algo queda como `TODO:`, decímelo igual: lo cargo con el resto y lo
completamos después.

---

## El prompt

Copiá todo lo que está adentro del bloque:

````text
Sos mi asistente para armar la ficha de un proyecto mío que va a ir en mi
portfolio web. El objetivo es producir un único bloque de datos, listo para
pegar en el código.

Si tenés acceso al repo, primero leé README, package.json y la estructura de
carpetas, y deducí todo lo que puedas. Después preguntame SOLO lo que no
puedas deducir. Hacé las preguntas de a una o dos, no todas juntas.

Lo que necesitás sacar:

1. Slug del proyecto: minúsculas, con guiones, como se llamaría el repo.
2. Año o rango de años ("2025" o "2024–2025").
3. Qué es y qué hace, contado como a alguien que no programa.
4. Para quién es y qué problema le resuelve.
5. Dos o tres funcionalidades del sistema, cada una sobre un área distinta.
   Qué hace cada parte, no cuántas opciones tiene esa parte. NO decisiones
   de arquitectura.
6. Stack real: las tecnologías que definen el proyecto.
7. Dónde está hosteada cada parte: front, back y base de datos. Puede ser
   todo junto, en servicios distintos o en un servidor propio.
8. ¿El repo es público? ¿Hay demo online? URLs exactas.
9. ¿Qué pantalla representa mejor el proyecto para una captura?

Reglas de redacción, importantes:

- La descripción dice QUÉ ES el proyecto y QUÉ HACE, en lenguaje llano, como
  se lo contarías a alguien que no programa. Nada de arquitectura ni de
  decisiones técnicas. Tampoco una lista de tecnologías: para eso están los
  tags. Máximo 200 caracteres.
- Arrancá siempre por qué es la cosa. Si sobra lugar dentro de esos 200
  caracteres podés cerrar con el hueco que llena o con el resultado, pero
  nunca abras por ahí: quien lee todavía no sabe de qué le estás hablando.
- Este patrón funciona y es el que quiero:
  «<Qué es> que <qué hace principal>, con <dos o tres cosas más que hace>.
  <Cómo se usa o qué lo distingue>.»
  Aplicado: "Bot de Discord que da experiencia y niveles por participar en el
  chat, con logros, recompensas de rol y saludos de cumpleaños. Cada servidor lo
  configura desde su propio panel web."
- La descripción da el panorama; los features entran en las partes. Si un
  feature repite algo que ya dijo la descripción, no aporta.
- Los features son funcionalidades del sistema, no decisiones técnicas ni
  tecnologías. Mal: "usa PostgreSQL". Mal: "las agregaciones se resuelven en
  la base y no en memoria" (eso es cómo está hecho, no qué hace).
- Cada feature cubre un área DISTINTA del sistema. Si los dos o tres hablan
  de lo mismo con más o menos detalle, sobra uno: buscá otra parte del
  proyecto. Esto es lo que más se equivoca, prestale atención.
- Quedate en el nivel de qué hace esa parte, no en el de sus ajustes. Mal:
  "multiplicador de 0.25x a 8x, cooldown de 60 segundos y canales ignorados"
  (eso es la pantalla de configuración, no la funcionalidad). Bien: "los
  usuarios suben de nivel participando en el chat, y cada servidor regula la
  velocidad de progresión y qué canales no cuentan".
- Un número puntual está bien si define la funcionalidad; una lista de
  ajustes, no.
- Los tags son 4 a 6, y el orden importa: primero las tecnologías con las que
  está construido, después el hosting. Nombres canónicos: `Node.js`, no
  `node`; `PostgreSQL`, no `postgres`.
- Meté el hosting solo si aporta algo: un servidor propio, un servicio que
  haya condicionado cómo está hecho, o un deploy que valga contar. Si es el
  default aburrido y no entra en los 6, dejalo afuera antes que sacar una
  tecnología. Y no pongas dos servicios que hacen lo mismo.
- NO inventes números ni métricas. Si no te di un dato, escribí
  `TODO: <qué falta>` en su lugar y seguí.
- Todo va en español y en inglés. El inglés no es traducción literal: es el
  equivalente natural, con el mismo tono directo.
- Nada de adjetivos de marketing: ni "innovador", ni "robusto", ni
  "de última generación".

Formato de salida: devolvé EXCLUSIVAMENTE un objeto TypeScript con esta
forma, sin texto antes ni después, sin explicaciones.

```ts
type Localized = { es: string; en: string };

type Project = {
  name: string;                  // slug
  year: string;
  featured?: boolean;            // solo si es de los mejores que tengo
  description: Localized;        // máx. 200 caracteres
  image?: {
    src: string;                 // '/projects/<slug>.<ext>'
    alt: Localized;              // qué se ve, para lectores de pantalla
  };
  features?: Localized[];        // 2 o 3, una por área del sistema
  tags: string[];                // 4 a 6: tecnologías y, si aporta, hosting
  repo?: string;                 // omitir si el repo es privado
  demo?: string;                 // omitir si no hay demo
};
```

Empezá preguntándome por el proyecto.
````

---

## Referencia de campos

| Campo         | ¿Va sí o sí? | Qué lleva                                        |
| ------------- | ------------ | ------------------------------------------------ |
| `name`        | Sí           | Slug en minúsculas con guiones. Se muestra tal cual, al lado del hash. |
| `year`        | Sí           | `"2025"` o `"2024–2025"`.                        |
| `description` | Sí           | Qué es y qué hace, en lenguaje llano. Máx. 200 caracteres. |
| `tags`        | Sí           | 4 a 6. Tecnologías primero, hosting después si aporta. Nombres canónicos: `Node.js`, no `node`. |
| `featured`    | No           | Marca el proyecto con `(destacado)` y lo abre por defecto. Usalo en uno solo. |
| `features`    | No           | 2 o 3 funcionalidades del sistema, una por área. Aparecen al desplegar. |
| `image`       | No           | Captura. Ver abajo.                              |
| `repo`        | No           | Omitilo si el repo es privado, antes que apuntar a un 404. |
| `demo`        | No           | URL de la demo en vivo.                          |

El hash tipo commit que ves en la lista no se carga: sale del `name` y es
estable, siempre el mismo para el mismo nombre.

## La captura

- Ratio **16:10**. La medida cómoda es 1600×1000, que se muestra a 544px.
- Guardala en `public/projects/<slug>.<ext>`, y en `image.src` poné
  `/projects/<slug>.<ext>` (con la barra inicial, sin `public`).
- `.webp` para capturas reales, `.svg` si es un diagrama o un mockup.
- Que se vea una pantalla real con contenido, no un logo ni una portada.
- Si es de tema oscuro no importa: va dentro de un marco con fondo neutro
  que amortigua el contraste contra el modo claro.
- El `alt` describe lo que se ve, no repite el nombre del proyecto.

## Ejemplo completo

Así se ve una ficha terminada, tal como queda en `src/data/projects.ts`:

```ts
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
  // Uno por área: progresión, roles, multimedia. Ninguno repite al otro.
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
  // Tecnologías primero, el hosting al final.
  tags: ['Discord.js', 'Node.js', 'React', 'MongoDB', 'Express', 'Render'],
  repo: 'https://github.com/GonzaBianchi/full-bot',
  demo: 'https://runichexcore.vercel.app',
}
```

## Antes de dar por cerrado un proyecto

- [ ] La descripción se entiende sin saber programar y arranca diciendo qué es
      el proyecto, no qué le falta al resto.
- [ ] La descripción no enumera tecnologías (para eso están los tags).
- [ ] Los features dicen qué hace el proyecto, no cómo está construido.
- [ ] Cada feature habla de un área distinta: ninguno es el anterior con más
      o menos detalle, ni repite lo que ya dijo la descripción.
- [ ] Los tags empiezan por las tecnologías, no por el hosting, y no hay dos
      servicios que hagan lo mismo.
- [ ] No quedó ningún `TODO:` sin resolver o sin avisar.
- [ ] Las URLs de `repo` y `demo` abren de verdad.
- [ ] La captura está en `public/projects/` y en 16:10.
- [ ] Hay un solo proyecto con `featured: true`.
