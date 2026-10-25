/**
 * ============================================================================
 * PORTFOLIO EVELIN PURI - ARTES VISUALES
 * Especialidad: Pintura Contemporánea (Acrílico y Técnica Mixta sobre Bastidor)
 * Lógica interactiva del catálogo, modal curatorial y filtros
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
   * 1. ARRAY DE OBRAS (EXCLUSIVAMENTE DESDE ./images/obras/Imagenes - WEB/)
   * Datos técnicos exactos según "Detaller técnicos de obras.xlsx"
   * Orden de imágenes por cuadro: todas las Vistas primero y al final el Detalle
   * -------------------------------------------------------------------------- */
  const obras = [
    // ================= SERIE A LA SOMBRA (Web - A la sombra) =================
    {
      id: 'a-la-sombra-de-nadie',
      title: 'A la sombra de nadie',
      series: 'A la Sombra',
      category: 'a-la-sombra',
      year: '2023',
      dimensions: '110 x 110 cm',
      technique: 'Acrílico sobre bastidor de lienzo',
      support: 'Bastidor de lienzo',
      status: 'No Disponible',
      image: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - A la sombra de nadie (Vista 1).webp',
      views: [
        { label: 'Vista 1', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - A la sombra de nadie (Vista 1).webp' },
        { label: 'Vista 2', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - A la sombra de nadie (Vista 2).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - A la sombra de nadie (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - A la sombra de nadie (Vista 1).webp',
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - A la sombra de nadie (Vista 2).webp',
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - A la sombra de nadie (Detalle).webp'
      ],
      description: 'Obra emblemática de la serie "A la Sombra" (Seleccionada y adquirida en el Salón Nacional de Pintura "Juego de Damas"). La composición articula el contraste entre la penumbra arquitectónica interior, la silla solitaria y el brote orgánico de color que emerge junto al haz de luz proyectado en el piso.'
    },
    {
      id: 'brotar-en-el-silencio',
      title: 'Brotar en el silencio',
      series: 'A la Sombra',
      category: 'a-la-sombra',
      year: '2025',
      dimensions: '70 x 70 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Brotar en el silencio (Vista).webp',
      views: [
        { label: 'Vista', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Brotar en el silencio (Vista).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Brotar en el silencio (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Brotar en el silencio (Vista).webp',
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Brotar en el silencio (Detalle).webp'
      ],
      description: 'Desde la quietud de un interior en penumbra, un jarrón monocromo en claroscuro contrasta con la irrupción vibrante de flora cromática sobre la trama de luz proyectada en el suelo, indagando en la fuerza vital que germina en el silencio.'
    },
    {
      id: 'luz-de-domingo-a-la-sombra',
      title: 'Luz de domingo a la sombra',
      series: 'A la Sombra',
      category: 'a-la-sombra',
      year: '2024',
      dimensions: '70 x 70 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Luz de domingo a la sombra (Vista).webp',
      views: [
        { label: 'Vista', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Luz de domingo a la sombra (Vista).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Luz de domingo a la sombra (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Luz de domingo a la sombra (Vista).webp',
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Luz de domingo a la sombra (Detalle).webp'
      ],
      description: 'Escena íntima de contemplación donde postigos entreabiertos, libros apilados y el reflejo solar proyectado sobre el piso oscuro se transforman en territorio fértil para el surgimiento de la mancha botánica y el color.'
    },
    {
      id: 'salida-de-la-caverna',
      title: 'Salida de la caverna',
      series: 'A la Sombra',
      category: 'a-la-sombra',
      year: '2025',
      dimensions: '70 x 70 cm',
      technique: 'Acrílico y óleo pastel sobre lienzo',
      support: 'Bastidor de lienzo',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Salida de la caverna (Vista).webp',
      views: [
        { label: 'Vista', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Salida de la caverna (Vista).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Salida de la caverna (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Salida de la caverna (Vista).webp',
        './images/obras/Imagenes - WEB/Web - A la sombra/A la sombra - Salida de la caverna (Detalle).webp'
      ],
      description: 'Distinguida con el 4° Premio en el 44° Salón de Pintura del CPCE Mendoza. Una escalinata bañada por luz cálida ascendente se abre paso desde la sombra arquitectónica mientras la vegetación cromática acompaña el tránsito hacia el exterior.'
    },

    // ================= SERIE ABSTRACTA (Web - Abstracta) =================
    {
      id: 'abstracta-oculos',
      title: 'Óculos - políptico (cuatro partes)',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2017',
      dimensions: '40 x 40 cm c/u',
      technique: 'Técnica mixta sobre bastidor de madera',
      support: 'Bastidor de madera (políptico de 4 partes)',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Óculus (Vista 1).webp',
      views: [
        { label: 'Vista 1', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Óculus (Vista 1).webp' },
        { label: 'Vista 2', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Óculus (Vista 2).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Óculus (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Óculus (Vista 1).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Óculus (Vista 2).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Óculus (Detalle).webp'
      ],
      description: 'Políptico compuesto por cuatro módulos cuadrados donde ventanas circulares (óculos) enmarcan microcosmos orgánicos de texturas, veladuras y contrastes cromáticos entre ocres, carmines, azules profundos y amarillos solares.'
    },
    {
      id: 'abstracta-lagrimas',
      title: 'Lágrimas',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2021',
      dimensions: '110 x 90 cm',
      technique: 'Acrílico y óleo pastel sobre bastidor',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Lágrimas (Vista).webp',
      views: [
        { label: 'Vista', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Lágrimas (Vista).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Lágrimas (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Lágrimas (Vista).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Lágrimas (Detalle).webp'
      ],
      description: 'Composición vertical de gran potencia expresiva donde veladuras, grafismos en óleo pastel y campos de amarillo cadmio, carmín, turquesa y violeta generan un ritmo visual vibrante en diálogo con el espacio.'
    },
    {
      id: 'abstracta-formato-alargado',
      title: 'Formato alargado',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2023',
      dimensions: '40 x 120 cm',
      technique: 'Acrílico sobre papel',
      support: 'Papel de alto gramaje',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Vista 1).webp',
      views: [
        { label: 'Vista 1', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Vista 1).webp' },
        { label: 'Vista 2', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Vista 2).webp' },
        { label: 'Vista 3', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Vista 3).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Vista 1).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Vista 2).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Vista 3).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Formato alargado (Detalle).webp'
      ],
      description: 'Obra apaisada de proporción panorámica donde planos profundos en negro y azul cobalto dialogan con irrupciones de magenta, ocre amarillo y trazos gestuales, ideal para acompañar recorridos arquitectónicos contemporáneos.'
    },
    {
      id: 'abstracta-calidos',
      title: 'Cálidos',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2023',
      dimensions: '60 x 50 cm',
      technique: 'Acrílico sobre papel',
      support: 'Papel de alto gramaje',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Cálidos (Vista 1).webp',
      views: [
        { label: 'Vista 1', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Cálidos (Vista 1).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Cálidos (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Cálidos (Vista 1).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Cálidos (Detalle).webp'
      ],
      description: 'Exploración cromática en clave ígnea donde capas de bermellón, naranja, magenta y ocre se entrelazan con acentos en violeta profundo y grafismos espontáneos que aportan calidez y vibración matérica.'
    },
    {
      id: 'abstracta-neutros-y-dorados',
      title: 'Neutros y dorados',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2025',
      dimensions: '80 x 130 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado',
      status: 'No Disponible',
      image: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros y dorados (Vista 1).webp',
      views: [
        { label: 'Vista 1', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros y dorados (Vista 1).webp' },
        { label: 'Vista 2', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros y dorados (Vista 2).webp' },
        { label: 'Vista 3', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros y dorados (Vista 3).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros y dorados (Vista 1).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros y dorados (Vista 2).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros y dorados (Vista 3).webp'
      ],
      description: 'Atmósfera envolvente y sutil construida a partir de veladuras orgánicas en tonos piedra, marfil, grises cálidos y destellos ocres y dorados que dialogan con la luz natural del espacio.'
    },
    {
      id: 'abstracta-neutros',
      title: 'Neutros',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2026',
      dimensions: '110 x 110 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado',
      status: 'No Disponible',
      image: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros (Vista).webp',
      views: [
        { label: 'Vista', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros (Vista).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros (Detalles).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros (Vista).webp',
        './images/obras/Imagenes - WEB/Web - Abstracta/Abstracta - Neutros (Detalles).webp'
      ],
      description: 'Composición de gran formato donde la mancha suelta en tonos arena, rosa pálido, marfil y azul agrisado se articula con gestos lineales orgánicos, logrando un equilibrio sereno y luminoso.'
    },

    // ================= SERIE BOTÁNICA (Web - Botánica) =================
    {
      id: 'botanica-colores-al-viento',
      title: 'Colores al viento',
      series: 'Serie Botánica',
      category: 'botanicos',
      year: '2017',
      dimensions: '110 x 110 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado',
      status: 'No Disponible',
      image: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Colores al viento (Vista 1).webp',
      views: [
        { label: 'Vista 1', src: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Colores al viento (Vista 1).webp' },
        { label: 'Vista 2', src: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Colores al viento (Vista 2).webp' },
        { label: 'Vista 3', src: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Colores al viento (Vista 3).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Colores al viento (Vista 1).webp',
        './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Colores al viento (Vista 2).webp',
        './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Colores al viento (Vista 3).webp'
      ],
      description: 'Dinamismo botánico en formato cuadrado donde hojas facetadas, inflorescencias y tallos son mecidos por una corriente cromática de tierras, ocres, carmines y verdes intensos.'
    },
    {
      id: 'botanica-ave-del-paraiso',
      title: 'Ave del paraíso',
      series: 'Serie Botánica',
      category: 'botanicos',
      year: '2021',
      dimensions: '70 x 120 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado',
      status: 'No Disponible',
      image: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del paraíso (Vista 1).webp',
      views: [
        { label: 'Vista 1', src: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del paraíso (Vista 1).webp' },
        { label: 'Vista 2', src: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del paraíso (Vista 2).webp' },
        { label: 'Vista 3', src: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del paraíso (Vista 3).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del Paraíso (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del paraíso (Vista 1).webp',
        './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del paraíso (Vista 2).webp',
        './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del paraíso (Vista 3).webp',
        './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Aves del Paraíso (Detalle).webp'
      ],
      description: 'Exuberancia floral y movimiento envolvente: cálidos amarillos, naranjas, corales y verdes botánicos despliegan la silueta orgánica de las flores sobre el lienzo apaisado.'
    },
    {
      id: 'botanica-palo-borracho',
      title: 'Palo Borracho',
      series: 'Serie Botánica',
      category: 'botanicos',
      year: '2022',
      dimensions: '90 x 110 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - Botánica/Seria Botánica - Palo borracho (Vista).webp',
      views: [
        { label: 'Vista', src: './images/obras/Imagenes - WEB/Web - Botánica/Seria Botánica - Palo borracho (Vista).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Botánica/Seria Botánica - Palo borracho (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Botánica/Seria Botánica - Palo borracho (Vista).webp',
        './images/obras/Imagenes - WEB/Web - Botánica/Seria Botánica - Palo borracho (Detalle).webp'
      ],
      description: 'Exaltación de la flora nativa donde la corteza espinosa del palo borracho, las pencas agaváceas y la delicadeza de su flor rosada se recortan sobre un fondo vibrante de amarillos y rojos solares.'
    },
    {
      id: 'botanica-lluvia-de-fuego',
      title: 'Lluvia de Fuego',
      series: 'Serie Botánica',
      category: 'botanicos',
      year: '2023',
      dimensions: '70 x 90 cm',
      technique: 'Acrílico y óleo pastel sobre lienzo',
      support: 'Bastidor de lienzo',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Lluvia de fuego .webp',
      views: [
        { label: 'Vista', src: './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Lluvia de fuego .webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Botánica/Botánica - Lluvia de fuego .webp'
      ],
      description: 'Sobre una atmósfera nocturna de azules profundos, cobalto y turquesas, ramas e inflorescencias encendidas en rojo y naranja caen como destellos incandescentes en óleo pastel y acrílico.'
    },

    // ================= PAISAJES CONTEMPORÁNEOS (Web - Paisaje contemporáneo) =================
    {
      id: 'paisajes-un-nuevo-mundo',
      title: 'Un Nuevo Mundo',
      series: 'Paisajes Contemporáneos',
      category: 'paisajes-contemporaneos',
      year: '2020',
      dimensions: '120 x 170 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado de gran formato',
      status: 'No Disponible',
      image: './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisaje contemporáneo - Otro mundo (Vista 1).webp',
      views: [
        { label: 'Vista 1', src: './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisaje contemporáneo - Otro mundo (Vista 1).webp' },
        { label: 'Vista 2', src: './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisaje contemporáneo - Otro mundo (Vista 2).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisaje contemporáneo - Otro mundo (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisaje contemporáneo - Otro mundo (Vista 1).webp',
        './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisaje contemporáneo - Otro mundo (Vista 2).webp',
        './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisaje contemporáneo - Otro mundo (Detalle).webp'
      ],
      description: 'Paisaje metafísico y cósmico de gran escala donde portales geométricos, una cúpula nívea y un astro lunar dialogan sobre un horizonte incandescente, evocando el cruce entre tiempo, arquitectura y cosmos.'
    },
    {
      id: 'paisajes-ciudad-de-ilusiones',
      title: 'Ciudad de Ilusiones',
      series: 'Paisajes Contemporáneos',
      category: 'paisajes-contemporaneos',
      year: '2017',
      dimensions: '92 x 139 cm',
      technique: 'Acrílico sobre bastidor',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisajes contemporáneos - Ciudad de ilusiones (Vista).webp',
      views: [
        { label: 'Vista', src: './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisajes contemporáneos - Ciudad de ilusiones (Vista).webp' },
        { label: 'Detalle', src: './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisajes contemporáneos - Ciudad de ilusiones (Detalle).webp' }
      ],
      images: [
        './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisajes contemporáneos - Ciudad de ilusiones (Vista).webp',
        './images/obras/Imagenes - WEB/Web - Paisaje contemporáneo/Paisajes contemporáneos - Ciudad de ilusiones (Detalle).webp'
      ],
      description: 'Arquitectura onírica y geometría sensible. Escalinatas, arcos y volúmenes suspendidos en una atmósfera crepuscular de violetas, ocres y rosas que invitan a contemplar territorios imaginarios.'
    }
  ];

  /* --------------------------------------------------------------------------
   * 2. ELEMENTOS DEL DOM
   * -------------------------------------------------------------------------- */
  const galleryGrid = document.getElementById('gallery-grid');
  const filterButtons = document.querySelectorAll('.filter-btn');
  const dialog = document.getElementById('artwork-dialog');
  const dialogCloseBtn = document.getElementById('dialog-close-btn');
  const dialogPrevBtn = document.getElementById('dialog-prev-btn');
  const dialogNextBtn = document.getElementById('dialog-next-btn');
  const dialogMediaContainer = document.getElementById('dialog-media-container');
  const dialogCategoryBadge = document.getElementById('dialog-category-badge');
  const dialogYear = document.getElementById('dialog-year');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogSeries = document.getElementById('dialog-series');
  const dialogTechnique = document.getElementById('dialog-technique');
  const dialogDimensions = document.getElementById('dialog-dimensions');
  const dialogSupport = document.getElementById('dialog-support');
  const dialogStatus = document.getElementById('dialog-status');
  const dialogDescription = document.getElementById('dialog-description');
  const dialogInquireBtn = document.getElementById('dialog-inquire-btn');
  const mobileToggle = document.getElementById('mobile-toggle');
  const primaryNav = document.getElementById('primary-nav');
  const contactForm = document.getElementById('contact-form');
  const formFeedback = document.getElementById('form-feedback');

  let currentFilteredObras = [...obras];
  let currentArtworkIndex = 0;

  /* --------------------------------------------------------------------------
   * 3. RENDERIZADO DINÁMICO DE OBRAS CON PLACEHOLDERS ELEGANTES
   * -------------------------------------------------------------------------- */
  const ARROW_LEFT_SVG = '<svg class="minimal-arrow-svg" viewBox="0 0 24 36" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M16 5L6 18l10 13"/></svg>';
  const ARROW_RIGHT_SVG = '<svg class="minimal-arrow-svg" viewBox="0 0 24 36" fill="none" stroke="currentColor" stroke-width="1.15" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M8 5l10 13-10 13"/></svg>';

  function renderGallery(items) {
    galleryGrid.innerHTML = '';

    if (items.length === 0) {
      galleryGrid.innerHTML = `
        <div style="grid-column: 1/-1; text-align: center; padding: 4rem 1rem; color: var(--text-muted);">
          <p style="font-size: 1.2rem; font-family: var(--font-serif);">No se encontraron obras para esta categoría.</p>
        </div>
      `;
      return;
    }

    items.forEach((obra) => {
      const card = document.createElement('article');
      card.className = 'artwork-card';
      card.setAttribute('data-id', obra.id);
      card.setAttribute('data-category', obra.category);
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Ver detalles de ${obra.title}`);

      const viewsList = obra.views || (obra.images ? obra.images.map((src, i) => ({ label: `Vista ${i + 1}`, src })) : [{ label: 'Vista', src: obra.image }]);
      const viewsSwitcherHtml = viewsList.length > 1
        ? `<div class="artwork-views-switcher" role="group" aria-label="Vistas de ${obra.title}">
            ${viewsList.map((v, i) => `<button type="button" class="artwork-view-pill ${i === 0 ? 'active' : ''}" data-src="${encodeURI(v.src)}" data-index="${i}">${v.label}</button>`).join('')}
           </div>
           <button type="button" class="card-view-arrow prev" aria-label="Vista anterior de ${obra.title}" title="Vista anterior">${ARROW_LEFT_SVG}</button>
           <button type="button" class="card-view-arrow next" aria-label="Siguiente vista de ${obra.title}" title="Siguiente vista">${ARROW_RIGHT_SVG}</button>`
        : '';

      card.innerHTML = `
        <div class="artwork-media">
          <!-- Placeholder visual elegante vía CSS con identidad de marca -->
          <div class="placeholder-canvas">
            <div class="placeholder-frame"></div>
            <div class="placeholder-top-meta">
              <span>${obra.series}</span>
              <span class="placeholder-status-tag">Pintura en Bastidor</span>
            </div>
            <div class="placeholder-center">
              <img src="./assets/logo-icono.png" alt="EP" class="placeholder-monogram" width="52" height="52">
              <h3 class="placeholder-title-hint">${obra.title}</h3>
              <span class="placeholder-series-hint">${obra.technique.split(',')[0]}</span>
            </div>
            <div class="placeholder-bottom-meta">
              <span>${obra.dimensions}</span>
              <span>${obra.year}</span>
            </div>
          </div>

          <!-- Imagen Real desde ./images/obras/Imagenes - WEB/ -->
          <img 
            src="${encodeURI(obra.image)}" 
            alt="${obra.title} — ${obra.series}" 
            class="artwork-img" 
            loading="lazy"
          >

          ${viewsSwitcherHtml}

          <!-- Capa interactiva de hover -->
          <div class="artwork-overlay">
            <span class="overlay-btn">Ver Ficha Curatorial</span>
          </div>
        </div>

        <!-- Ficha descriptiva debajo del medio -->
        <div class="artwork-card-info">
          <div class="artwork-card-header">
            <h3 class="artwork-card-title">${obra.title}</h3>
            <span class="artwork-card-year">${obra.year}</span>
          </div>
          <p class="artwork-card-technique">${obra.series} &bull; ${obra.technique}</p>
          <span class="artwork-card-dimensions">${obra.dimensions} &bull; ${obra.status}</span>
        </div>
      `;

      // Control inteligente de carga de imagen:
      const img = card.querySelector('.artwork-img');
      img.addEventListener('load', () => {
        img.classList.add('loaded');
      });
      img.addEventListener('error', () => {
        img.style.display = 'none';
      });

      // Selector de Vistas -> Detalle directamente desde la tarjeta (pastillas + flechas izq/der)
      let selectedViewIdx = 0;
      const viewPills = card.querySelectorAll('.artwork-view-pill');
      const updateCardView = (newIdx) => {
        if (viewsList.length <= 1) return;
        selectedViewIdx = (newIdx + viewsList.length) % viewsList.length;
        viewPills.forEach((p, idx) => p.classList.toggle('active', idx === selectedViewIdx));
        img.src = encodeURI(viewsList[selectedViewIdx].src);
      };

      viewPills.forEach((pill) => {
        pill.addEventListener('click', (e) => {
          e.stopPropagation();
          const idx = parseInt(pill.getAttribute('data-index'), 10) || 0;
          updateCardView(idx);
        });
      });

      const prevCardBtn = card.querySelector('.card-view-arrow.prev');
      const nextCardBtn = card.querySelector('.card-view-arrow.next');
      if (prevCardBtn) {
        prevCardBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateCardView(selectedViewIdx - 1);
        });
      }
      if (nextCardBtn) {
        nextCardBtn.addEventListener('click', (e) => {
          e.stopPropagation();
          updateCardView(selectedViewIdx + 1);
        });
      }

      // Evento para abrir detalle modal
      card.addEventListener('click', () => {
        openArtworkModal(obra.id, selectedViewIdx);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openArtworkModal(obra.id, selectedViewIdx);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  /* --------------------------------------------------------------------------
   * 4. FILTRADO POR CATEGORÍAS (SIN DESTRUIR EL DOM PARA FLUIDEZ EN MÓVILES)
   * -------------------------------------------------------------------------- */
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      btn.blur();

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        currentFilteredObras = [...obras];
      } else {
        currentFilteredObras = obras.filter(o => o.category === filter);
      }

      // Mostrar/ocultar tarjetas existentes sin recrear imágenes ni bloquear el touch-scroll
      const cards = galleryGrid.querySelectorAll('.artwork-card');
      cards.forEach(card => {
        const cardCat = card.getAttribute('data-category');
        const isMatch = filter === 'all' || cardCat === filter;
        card.style.display = isMatch ? '' : 'none';
      });

      unlockBodyScroll();
    });
  });

  /* --------------------------------------------------------------------------
   * 5. MODAL / LIGHTBOX CURATORIAL NATIVO (<dialog>)
   * -------------------------------------------------------------------------- */
  let stepModalView = null;

  function openArtworkModal(obraId, initialViewIdx = 0) {
    const index = currentFilteredObras.findIndex(o => o.id === obraId);
    if (index === -1) return;

    currentArtworkIndex = index;
    displayArtworkInModal(currentFilteredObras[currentArtworkIndex], initialViewIdx);

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';

    const dialogLayout = dialog.querySelector('.dialog-layout');
    if (dialogLayout) dialogLayout.scrollTop = 0;
  }

  function displayArtworkInModal(obra, initialViewIdx = 0) {
    dialogCategoryBadge.textContent = obra.series.toUpperCase();
    dialogYear.textContent = obra.year;
    dialogTitle.textContent = obra.title;
    dialogSeries.textContent = `${obra.series} • ${obra.year}`;
    dialogTechnique.textContent = obra.technique;
    dialogDimensions.textContent = obra.dimensions;
    if (dialogSupport) dialogSupport.textContent = obra.support || 'Bastidor entelado';
    dialogStatus.textContent = obra.status;
    dialogDescription.textContent = obra.description;

    const viewsList = obra.views || (obra.images ? obra.images.map((src, i) => ({ label: `Vista ${i + 1}`, src })) : [{ label: 'Vista', src: obra.image }]);
    let activeViewIdx = (initialViewIdx >= 0 && initialViewIdx < viewsList.length) ? initialViewIdx : 0;

    // Renderizar imagen principal, flechas laterales de vista y selector de miniaturas
    dialogMediaContainer.innerHTML = '';

    const mainStage = document.createElement('div');
    mainStage.className = 'dialog-main-stage';

    const imgWrapper = document.createElement('div');
    imgWrapper.className = 'dialog-img-wrapper';

    const img = new Image();
    img.src = encodeURI(viewsList[activeViewIdx].src);
    img.alt = `${obra.title} — ${viewsList[activeViewIdx].label}`;
    img.className = 'dialog-main-img';

    img.onload = () => {
      imgWrapper.innerHTML = '';
      imgWrapper.appendChild(img);
    };

    img.onerror = () => {
      imgWrapper.innerHTML = `
        <div class="dialog-placeholder">
          <img src="./assets/logo-icono.png" alt="EP" class="dialog-placeholder-logo">
          <h4 class="dialog-placeholder-title">${obra.title}</h4>
          <p class="dialog-placeholder-notice">Pintura contemporánea sobre bastidor</p>
          <span style="font-size: 0.75rem; color: #888; margin-top: 1rem;">Archivo objetivo: ${obra.image}</span>
        </div>
      `;
    };

    mainStage.appendChild(imgWrapper);

    // Badge indicador de la vista actual (ej: "Vista 1 • 1 / 3")
    const viewBadge = document.createElement('div');
    viewBadge.className = 'dialog-view-indicator';
    const updateBadgeText = () => {
      if (viewsList.length > 1) {
        viewBadge.textContent = `${viewsList[activeViewIdx].label} • ${activeViewIdx + 1} / ${viewsList.length}`;
        viewBadge.style.display = '';
      } else {
        viewBadge.style.display = 'none';
      }
    };
    updateBadgeText();
    mainStage.appendChild(viewBadge);

    let thumbsBar = null;

    const setModalView = (newIdx) => {
      if (viewsList.length <= 1) return;
      activeViewIdx = (newIdx + viewsList.length) % viewsList.length;
      const targetView = viewsList[activeViewIdx];
      img.src = encodeURI(targetView.src);
      img.alt = `${obra.title} — ${targetView.label}`;
      updateBadgeText();
      if (thumbsBar) {
        thumbsBar.querySelectorAll('.dialog-thumb-btn').forEach((b, i) => {
          b.classList.toggle('active', i === activeViewIdx);
        });
      }
    };

    stepModalView = (delta) => {
      if (viewsList.length > 1) {
        setModalView(activeViewIdx + delta);
        return true;
      }
      return false;
    };

    // Flechas laterales (Izquierda / Derecha) dentro del cuadro para cambiar de vista sin salir
    if (viewsList.length > 1) {
      const prevViewBtn = document.createElement('button');
      prevViewBtn.type = 'button';
      prevViewBtn.className = 'dialog-stage-arrow prev';
      prevViewBtn.setAttribute('aria-label', 'Vista anterior de esta obra');
      prevViewBtn.title = 'Vista anterior';
      prevViewBtn.innerHTML = ARROW_LEFT_SVG;
      prevViewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setModalView(activeViewIdx - 1);
      });

      const nextViewBtn = document.createElement('button');
      nextViewBtn.type = 'button';
      nextViewBtn.className = 'dialog-stage-arrow next';
      nextViewBtn.setAttribute('aria-label', 'Siguiente vista de esta obra');
      nextViewBtn.title = 'Siguiente vista';
      nextViewBtn.innerHTML = ARROW_RIGHT_SVG;
      nextViewBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        setModalView(activeViewIdx + 1);
      });

      mainStage.appendChild(prevViewBtn);
      mainStage.appendChild(nextViewBtn);

      // Soporte táctil de deslizamiento (Swipe Izquierda / Derecha) sobre la imagen en celulares/tablets
      let touchStartX = 0;
      let touchStartY = 0;
      mainStage.addEventListener('touchstart', (e) => {
        if (e.touches.length === 1) {
          touchStartX = e.touches[0].clientX;
          touchStartY = e.touches[0].clientY;
        }
      }, { passive: true });

      mainStage.addEventListener('touchend', (e) => {
        if (e.changedTouches.length === 1) {
          const dx = e.changedTouches[0].clientX - touchStartX;
          const dy = e.changedTouches[0].clientY - touchStartY;
          if (Math.abs(dx) > 42 && Math.abs(dx) > Math.abs(dy) * 1.2) {
            if (dx < 0) {
              setModalView(activeViewIdx + 1);
            } else {
              setModalView(activeViewIdx - 1);
            }
          }
        }
      }, { passive: true });
    }

    dialogMediaContainer.appendChild(mainStage);

    if (viewsList.length > 1) {
      thumbsBar = document.createElement('div');
      thumbsBar.className = 'dialog-thumbs-bar';

      viewsList.forEach((v, idx) => {
        const thumbBtn = document.createElement('button');
        thumbBtn.type = 'button';
        thumbBtn.className = `dialog-thumb-btn ${idx === activeViewIdx ? 'active' : ''}`;
        thumbBtn.setAttribute('aria-label', `Ver ${v.label} de ${obra.title}`);
        thumbBtn.innerHTML = `
          <img src="${encodeURI(v.src)}" alt="${v.label}" loading="lazy">
          <span class="dialog-thumb-label">${v.label}</span>
        `;

        thumbBtn.addEventListener('click', () => {
          setModalView(idx);
        });

        thumbsBar.appendChild(thumbBtn);
      });

      dialogMediaContainer.appendChild(thumbsBar);
    }
  }

  function unlockBodyScroll() {
    document.body.style.overflow = '';
    document.documentElement.style.overflow = '';
  }

  function closeArtworkModal() {
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
    unlockBodyScroll();
  }

  function navigateModal(direction) {
    if (currentFilteredObras.length === 0) return;
    currentArtworkIndex = (currentArtworkIndex + direction + currentFilteredObras.length) % currentFilteredObras.length;
    displayArtworkInModal(currentFilteredObras[currentArtworkIndex]);
    const dialogLayout = dialog.querySelector('.dialog-layout');
    if (dialogLayout) dialogLayout.scrollTop = 0;
  }

  // Controles del modal y liberación garantizada del scroll en móviles
  dialogCloseBtn.addEventListener('click', closeArtworkModal);
  dialog.addEventListener('close', unlockBodyScroll);
  dialog.addEventListener('cancel', unlockBodyScroll);
  dialogPrevBtn.addEventListener('click', () => {
    if (!stepModalView || !stepModalView(-1)) {
      navigateModal(-1);
    }
  });
  dialogNextBtn.addEventListener('click', () => {
    if (!stepModalView || !stepModalView(1)) {
      navigateModal(1);
    }
  });

  // Cierre al hacer click en el backdrop del diálogo nativo
  dialog.addEventListener('click', (e) => {
    if (e.target === dialog) {
      closeArtworkModal();
    }
  });

  // Atajos de teclado: Flechas Izquierda/Derecha cambian de vista dentro del cuadro (o de obra si tiene 1 sola vista)
  window.addEventListener('keydown', (e) => {
    if (dialog.open) {
      if (e.key === 'Escape') {
        closeArtworkModal();
      } else if (e.key === 'ArrowLeft') {
        if (!stepModalView || !stepModalView(-1)) {
          navigateModal(-1);
        }
      } else if (e.key === 'ArrowRight') {
        if (!stepModalView || !stepModalView(1)) {
          navigateModal(1);
        }
      }
    }
  });

  // Botón "Consultar por esta Obra" dentro del modal
  dialogInquireBtn.addEventListener('click', () => {
    const currentObra = currentFilteredObras[currentArtworkIndex];
    closeArtworkModal();
    
    // Desplazarse a contacto
    const contactSection = document.getElementById('contacto');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth' });
    }

    // Rellenar automáticamente campos del formulario
    const subjectSelect = document.getElementById('form-subject');
    const messageInput = document.getElementById('form-message');
    if (subjectSelect) subjectSelect.value = 'adquisicion';
    if (messageInput) {
      messageInput.value = `Hola Evelin, me comunico interesado/a en recibir información detallada sobre la pintura "${currentObra.title}" (${currentObra.series}, ${currentObra.year}, acrílico/mixta sobre bastidor).`;
      messageInput.focus();
    }
  });

  /* --------------------------------------------------------------------------
   * 6. MENÚ DE NAVEGACIÓN MOBILE
   * -------------------------------------------------------------------------- */
  if (mobileToggle && primaryNav) {
    mobileToggle.addEventListener('click', () => {
      const isExpanded = mobileToggle.getAttribute('aria-expanded') === 'true';
      mobileToggle.setAttribute('aria-expanded', !isExpanded);
      primaryNav.classList.toggle('is-open');
    });

    primaryNav.querySelectorAll('.nav-link').forEach(link => {
      link.addEventListener('click', () => {
        mobileToggle.setAttribute('aria-expanded', 'false');
        primaryNav.classList.remove('is-open');
      });
    });
  }

  /* --------------------------------------------------------------------------
   * 7. FORMULARIO DE CONTACTO (ENVÍO REAL DE CORREO A purievelin@gmail.com)
   * -------------------------------------------------------------------------- */
  if (contactForm) {
    const RECIPIENT_EMAIL = 'purievelin@gmail.com';
    const submitBtn = document.getElementById('form-submit-btn');

    contactForm.addEventListener('submit', async (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const subjectSelect = document.getElementById('form-subject');
      const subjectValue = subjectSelect ? subjectSelect.value : '';
      const subjectLabel = (subjectSelect && subjectSelect.selectedIndex > 0)
        ? subjectSelect.options[subjectSelect.selectedIndex].text
        : 'Consulta General desde el Portfolio Web';
      const message = document.getElementById('form-message').value.trim();

      formFeedback.style.display = 'block';

      if (!name || !email || !message) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Por favor, complete todos los campos obligatorios antes de enviar.';
        return;
      }

      const originalBtnHtml = submitBtn ? submitBtn.innerHTML : '<span>Enviar Consulta</span>';
      if (submitBtn) {
        submitBtn.disabled = true;
        submitBtn.innerHTML = '<span>Enviando consulta...</span>';
      }

      try {
        const response = await fetch(`https://formsubmit.co/ajax/${RECIPIENT_EMAIL}`, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
          },
          body: JSON.stringify({
            Nombre: name,
            Email: email,
            Motivo: subjectLabel,
            Mensaje: message,
            _subject: `Nueva consulta web: ${subjectLabel} (${name})`,
            _replyto: email,
            _template: 'table',
            _captcha: 'false'
          })
        });

        const data = await response.json().catch(() => ({}));

        if (response.ok && (data.success === 'true' || data.success === true)) {
          formFeedback.className = 'form-feedback success';
          formFeedback.textContent = `¡Gracias, ${name}! Tu consulta fue enviada a ${RECIPIENT_EMAIL}. Evelin Puri se pondrá en contacto a la brevedad.`;
          contactForm.reset();
        } else if (data.message && data.message.toLowerCase().includes('activate')) {
          formFeedback.className = 'form-feedback success';
          formFeedback.textContent = `¡Casi listo! Se envió un correo de activación por única vez a ${RECIPIENT_EMAIL}. Una vez que hagas clic en "Activate Form" en ese correo, todas las consultas llegarán directo a tu bandeja.`;
          contactForm.reset();
        } else {
          throw new Error(data.message || 'Error en el servicio de envío');
        }
      } catch (err) {
        // Respaldo directo vía cliente de correo (mailto) si no hay conexión o aún no se activó el endpoint
        const mailtoSubject = encodeURIComponent(`${subjectLabel} — Consulta de ${name}`);
        const mailtoBody = encodeURIComponent(`Nombre: ${name}\nCorreo: ${email}\nMotivo: ${subjectLabel}\n\nMensaje:\n${message}`);
        formFeedback.className = 'form-feedback success';
        formFeedback.innerHTML = `¡Gracias, ${name}! Si es la primera vez que se usa el formulario, revisa la bandeja de <strong>${RECIPIENT_EMAIL}</strong> para activar la recepción automática, o <a href="mailto:${RECIPIENT_EMAIL}?subject=${mailtoSubject}&body=${mailtoBody}" style="text-decoration: underline; font-weight: 600;">haz clic aquí para enviarlo directamente desde tu correo</a>.`;
      } finally {
        if (submitBtn) {
          submitBtn.disabled = false;
          submitBtn.innerHTML = originalBtnHtml;
        }
      }
    });
  }

  /* --------------------------------------------------------------------------
   * 8. MICRO-INTERACCIONES EDITORIALES, SCROLL SPY & REVEAL
   * -------------------------------------------------------------------------- */
  const siteHeader = document.getElementById('header');
  const navLinks = document.querySelectorAll('.primary-nav .nav-link:not(.nav-btn)');
  const sections = document.querySelectorAll('main section[id]');

  function handleHeaderScroll() {
    if (!siteHeader) return;
    if (window.scrollY > 40) {
      siteHeader.classList.add('is-scrolled');
    } else {
      siteHeader.classList.remove('is-scrolled');
    }

    // Actualizar link activo según la sección visible
    let currentSectionId = '';
    const scrollPos = window.scrollY + 180;
    sections.forEach(sec => {
      if (scrollPos >= sec.offsetTop && scrollPos < sec.offsetTop + sec.offsetHeight) {
        currentSectionId = sec.getAttribute('id');
      }
    });

    if (currentSectionId) {
      navLinks.forEach(link => {
        link.classList.toggle('active', link.getAttribute('href') === `#${currentSectionId}`);
      });
    }
  }

  window.addEventListener('scroll', handleHeaderScroll, { passive: true });
  handleHeaderScroll();

  // Aparición progresiva y orgánica de textos y bloques al hacer scroll
  const revealTargets = document.querySelectorAll(
    '.section-header, .timeline-item, .statement-body p, .statement-quote-box, .bio-content p, .highlight-item, .commissions-card, .channel-card'
  );

  if ('IntersectionObserver' in window) {
    const revealObserver = new IntersectionObserver((entries, observer) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('is-visible');
          observer.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealTargets.forEach((el, index) => {
      el.classList.add('reveal-on-scroll');
      el.style.transitionDelay = `${(index % 4) * 55}ms`;
      revealObserver.observe(el);
    });
  }

  /* --------------------------------------------------------------------------
   * 9. INICIALIZACIÓN
   * -------------------------------------------------------------------------- */
  renderGallery(obras);

});
