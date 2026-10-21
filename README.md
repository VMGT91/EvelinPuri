# Portfolio Web — Evelin Puri (Artes Visuales)
### Disciplina: Pintura Contemporánea (Acrílico & Técnica Mixta sobre Bastidor) & Proyectos a Medida

Sitio web oficial de portfolio para la artista visual **Evelin Puri**. Diseñado con una arquitectura contemporánea de galería de arte, navegación fluida, diseño responsive de alta fidelidad, sistema interactivo de filtrado de obras y modal/lightbox curatorial nativo (`<dialog>`).

---

## 📁 Estructura del Proyecto

```
portfolio-evelin-puri/
├── index.html                  # Estructura semántica HTML5 accesible
├── styles.css                  # Sistema de diseño, paleta neutra y díptico editorial
├── script.js                   # Catálogo de pinturas sobre bastidor, filtros y lightbox
├── README.md                   # Esta guía de uso y mantenimiento
│
├── assets/                     # Identidad visual, retratos y fotografías de taller
│   ├── logo-evelin-puri.png    # Logo principal negro con transparencia (32-bit ARGB)
│   ├── logo-evelin-puri-white.png # Logo variante blanca con transparencia
│   ├── logo-icono.png          # Isotipo EP (monograma)
│   ├── favicon.ico             # Ícono web estándar para navegadores
│   ├── perfil-1.jpg            # Retrato de sala de exposición (cuerpo entero en galería)
│   ├── perfil-2.jpg            # Retrato de cercanía para sección de Proyectos a Medida
│   ├── estudio-taller.jpg      # Fotografía del proceso pictórico en caballete
│   └── original/               # Respaldo de recursos originales y mesas de trabajo
│
└── images/
    └── obras/                  # Carpeta destino para tus fotografías finales de pinturas
```

---

## 🎨 Integración Editorial de Retratos y Taller

Se implementó una estrategia visual de dos niveles concebida para coleccionistas y clientes de segmento alto:

1. **Sección Biografía (Díptico Editorial de Autoridad y Oficio):**
   - **`perfil-1.jpg` (Retrato Protagónico de Galería):** Evelin posa en sala de exposición con vestimenta formal y sus pinturas de gran formato al fondo, proyectando solvencia curatorial y presencia institucional.
   - **`estudio-taller.jpg` (Detalle de Taller y Proceso):** Superpuesto como tarjeta flotante de artesanía y oficio, mostrando sus manos con paleta y pincel trabajando el lienzo sobre el caballete.
2. **Sección Proyectos a Medida & Arte y Espacios (`perfil-2.jpg`):**
   - Retrato cálido y carismático que humaniza el contacto directo para interioristas, arquitectos y clientes privados que buscan obras comisionadas a medida o visitas al estudio.

---

## 🖼️ Cómo subir las fotografías de las pinturas

El sitio ya cuenta con **placeholders visuales elegantes vía CSS** inspirados en el montaje de sala de una galería. La página es **100% interactiva y navegable desde ahora mismo**.

Cuando tengas listas las fotos de las pinturas, simplemente guárdalas dentro de la carpeta:
`portfolio-evelin-puri/images/obras/`

### Nombres de archivo preconfigurados en `script.js`:

| Nombre de Archivo | Título de la Obra | Serie / Categoría |
| :--- | :--- | :--- |
| `mito-frontal.webp` | *Mito — Frontal* | Serie Mito (190 x 130 cm) |
| `mito-espacio.webp` | *Mito — Espacio* | Serie Mito (200 x 150 cm) |
| `tension-materia.webp` | *Tensión & Materia I* | Gran Formato (180 x 140 cm) |
| `topologia-vacio.webp` | *Topología del Vacío* | Proyectos a Medida (Díptico 220 x 160 cm) |
| `materia-latente.webp` | *Materia Latente* | Serie Mito (160 x 120 cm) |
| `resonancia-mineral.webp` | *Resonancia Mineral* | Técnica Mixta (140 x 110 cm) |
| `fractura-luz.webp` | *Fractura de la Luz* | Gran Formato (175 x 135 cm) |
| `umbral-espacial.webp` | *Umbral Espacial* | Proyectos a Medida (210 x 150 cm) |

> **Nota de formato:** Se recomienda formato `.webp` por su óptimo rendimiento web y ligereza, pero también puedes usar `.jpg` o `.png`. Si usas otra extensión, solo cámbiala en el objeto correspondiente dentro de `script.js`.

---

## ➕ Cómo agregar o modificar obras en el catálogo

Abre el archivo `script.js` y edita el arreglo `obras`:

```javascript
{
  id: 'nueva-pintura',
  title: 'Título de la Pintura',
  series: 'Serie Cromática',
  category: 'gran-formato', // 'serie-mito' | 'gran-formato' | 'mixta' | 'proyectos-espaciales'
  year: '2026',
  dimensions: '180 x 130 cm',
  technique: 'Acrílico y técnica mixta sobre bastidor',
  support: 'Bastidor entelado en lino',
  status: 'Disponible', // 'Disponible' | 'Colección Privada'
  image: './images/obras/nueva-pintura.webp',
  description: 'Concepto curatorial de la pieza.'
}
```

---

## 🚀 Cómo visualizar el proyecto localmente

1. **Directamente en el navegador:**
   - Haz doble clic en el archivo `index.html` para abrirlo en cualquier navegador (Chrome, Edge, Firefox, Safari).

2. **Mediante un servidor local (Recomendado):**
   - Ejecuta en la terminal dentro de la carpeta del proyecto:
     ```bash
     python -m http.server 8000
     ```
   - Abre en tu navegador: `http://localhost:8000`
