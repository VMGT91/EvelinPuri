/**
 * ============================================================================
 * PORTFOLIO EVELIN PURI - ARTES VISUALES
 * Especialidad: Pintura Contemporánea (Acrílico y Técnica Mixta sobre Bastidor)
 * Lógica interactiva del catálogo, modal curatorial y filtros
 * ============================================================================
 */

document.addEventListener('DOMContentLoaded', () => {

  /* --------------------------------------------------------------------------
   * 1. ARRAY DE OBRAS (SERIES EN ./assets/Render finales_/)
   * -------------------------------------------------------------------------- */
  const obras = [
    // ================= SERIE A LA SOMBRA (Render A la sombra_) =================
    {
      id: 'a-la-sombra-de-nadie',
      title: 'A la Sombra de Nadie',
      series: 'Serie A la Sombra',
      category: 'a-la-sombra',
      year: '2023',
      dimensions: 'Gran Formato',
      technique: 'Acrílico y técnica mixta sobre bastidor entelado',
      support: 'Bastidor de madera maciza entelado',
      status: 'Obra Adquirida (Salón Nacional Juego de Damas)',
      image: './assets/Render finales_/Render A la sombra_/A la sombra de nadie - Evelin Puri - 2023.png',
      images: [
        './assets/Render finales_/Render A la sombra_/A la sombra de nadie - Evelin Puri - 2023.png',
        './assets/Render finales_/Render A la sombra_/A la sombra de nadie - Evelin Puri - 2023(1).png'
      ],
      description: 'Obra central de la serie "A la Sombra", distinguida y adquirida en el Salón Nacional de Pintura "Juego de Damas". La escena articula el contraste entre la penumbra arquitectónica interior, la silla solitaria y el estallido cromático que irrumpe junto al haz de luz proyectado en el piso.'
    },
    {
      id: 'a-la-sombra-trama-espacial',
      title: 'A la Sombra — Diálogo en Sala',
      series: 'Serie A la Sombra',
      category: 'a-la-sombra',
      year: '2025',
      dimensions: 'Políptico de Sala',
      technique: 'Acrílico sobre bastidor entelado',
      support: 'Bastidores entelados de galería',
      status: 'Disponible',
      image: './assets/Render finales_/Render A la sombra_/4.6 la sombra silla png.png',
      images: [
        './assets/Render finales_/Render A la sombra_/4.6 la sombra silla png.png',
        './assets/Render finales_/Render A la sombra_/A la sombra de nadie - Evelin Puri - 2023.png'
      ],
      description: 'Puesta en espacio de la serie individual "A la Sombra" (presentada en el Espacio de Arte Luis Quesada – Nave UNCUYO). El conjunto dialoga a través de arquitecturas íntimas, umbrales de luz rasante y naturalezas vibrantes que emergen desde el claroscuro.'
    },

    // ================= SERIE ABSTRACTA (Render Abstractos_) =================
    {
      id: 'abstracta-azul-profundo',
      title: 'Azul Profundo',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2024',
      dimensions: 'Formato Cuadrado',
      technique: 'Acrílico y veladuras matéricas sobre bastidor',
      support: 'Bastidor entelado con marco de galería',
      status: 'Disponible',
      image: './assets/Render finales_/Render Abstractos_/Serie Abstracta - Azul Profundo - Evelin Puri  .png',
      images: [
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Azul Profundo - Evelin Puri  .png'
      ],
      description: 'Inmersión cromática en gamas de azul ultramar, cobalto y cian luminoso. La densidad matérica en la franja inferior sugiere una topografía abisal que se disuelve gradualmente hacia una atmósfera etérea superior.'
    },
    {
      id: 'abstracta-lagrimas',
      title: 'Lágrimas',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2024',
      dimensions: 'Gran Formato Vertical',
      technique: 'Acrílico y gesto expresivo sobre bastidor',
      support: 'Bastidor entelado de gran escala',
      status: 'Disponible',
      image: './assets/Render finales_/Render Abstractos_/Serie Abstracta - Lágrimas - Evelin Puri_.png',
      images: [
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Lágrimas - Evelin Puri_.png',
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Lágrimas - Evelin Puri  .png'
      ],
      description: 'Composición vertical de gran potencia energética donde chorreados, trazos curvos y campos de amarillo cadmio, carmín, turquesa y violeta generan un ritmo visual vibrante que transforma el espacio circundante.'
    },
    {
      id: 'abstracta-oculos',
      title: 'Óculos',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2024',
      dimensions: 'Políptico (4 piezas cuadradas)',
      technique: 'Acrílico y técnica mixta sobre bastidor',
      support: 'Cuatro bastidores cuadrados independientes',
      status: 'Disponible',
      image: './assets/Render finales_/Render Abstractos_/Serie Abstrácta - Óculos - Evelin Puri.png',
      images: [
        './assets/Render finales_/Render Abstractos_/Serie Abstrácta - Óculos - Evelin Puri.png'
      ],
      description: 'Políptico compuesto por cuatro lienzos cuadrados donde la geometría circular opera como ventana hacia micro-universos abstractos. Cada pieza propone una paleta autónoma —ocre solar, borgoña, azul nocturno y horizonte— en equilibrio coral.'
    },
    {
      id: 'abstracta-sin-titulo-i',
      title: 'Sin Título I',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2024',
      dimensions: 'Formato Cuadrado',
      technique: 'Acrílico, grafito y técnica mixta sobre bastidor',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri  .png',
      images: [
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri  .png'
      ],
      description: 'Exploración de veladuras orgánicas en tonos rosa pálido, celeste cerúleo, tierra y grafito. La obra establece un contrapunto lírico entre la suavidad atmosférica del color y el trazo gestual caligráfico.'
    },
    {
      id: 'abstracta-sin-titulo-ii',
      title: 'Sin Título II',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2025',
      dimensions: 'Gran Formato Horizontal',
      technique: 'Acrílico y textura mineral sobre bastidor',
      support: 'Bastidor entelado de gran formato',
      status: 'Disponible',
      image: './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri_(1).png',
      images: [
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri_(1).png',
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri_(2).png',
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri_.png'
      ],
      description: 'Obra de impronta geológica concebida en tonos ocre dorado, gris piedra y tierra sombra. Sus estratos matéricos dialogan de forma orgánica con materiales nobles como la roca, el hormigón y la madera.'
    },
    {
      id: 'abstracta-sin-titulo-iii',
      title: 'Sin Título III',
      series: 'Serie Abstracta',
      category: 'abstractos',
      year: '2025',
      dimensions: 'Formato Panorámico',
      technique: 'Acrílico de alta densidad sobre bastidor apaisado',
      support: 'Bastidor arquitectónico de gran escala',
      status: 'Disponible',
      image: './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri_.jpg',
      images: [
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri_.jpg',
        './assets/Render finales_/Render Abstractos_/Serie Abstracta - Sín Título - Evelin Puri_(1).jpg'
      ],
      description: 'Lienzo panorámico para dobles alturas y muros de gran escala. Grandes planos de negro profundo, magenta intenso, amarillo ocre y azul eléctrico articulan una tensión espacial audaz y contemporánea.'
    },

    // ================= SERIE BOTÁNICA (Render Botánicos_) =================
    {
      id: 'botanica-ave-del-paraiso',
      title: 'Ave del Paraíso',
      series: 'Serie Botánica',
      category: 'botanicos',
      year: '2024',
      dimensions: 'Gran Formato Horizontal',
      technique: 'Acrílico sobre bastidor entelado',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './assets/Render finales_/Render Botánicos_/Serie Botánica - Ave del paraiso - Evelin Puri .png',
      images: [
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Ave del paraiso - Evelin Puri .png',
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Ave del paraiso - Evelin Puri (1).png'
      ],
      description: 'Exaltación de la morfología floral mediante una paleta cálida de naranjas, amarillos luminosos y verdes botánicos. La composición fusiona el primer plano orgánico con ondas envolventes de color y luz.'
    },
    {
      id: 'botanica-colores-al-viento',
      title: 'Colores al Viento',
      series: 'Serie Botánica',
      category: 'botanicos',
      year: '2024',
      dimensions: 'Gran Formato Cuadrado',
      technique: 'Acrílico sobre bastidor entelado',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './assets/Render finales_/Render Botánicos_/Serie Botánica - Colores al Viento - Evelin Puri_(1).jpg',
      images: [
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Colores al Viento - Evelin Puri_(1).jpg',
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Colores al Viento - Evelin Puri_.jpg',
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Colores al Viento - Evelin Puri_(3).jpg'
      ],
      description: 'Inflorescencias, semillas al viento y follaje estilizado en una sinfonía de tierras cálidas, carmines, verdes oliva y amarillos dorados que aportan calidez orgánica y vitalidad al espacio interior.'
    },
    {
      id: 'botanica-lluvia-de-fuego',
      title: 'Lluvia de Fuego',
      series: 'Serie Botánica',
      category: 'botanicos',
      year: '2024',
      dimensions: 'Gran Formato Horizontal',
      technique: 'Acrílico y veladuras sobre bastidor',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './assets/Render finales_/Render Botánicos_/Serie Botánica - Lluvia de Fuego - Evelin Puri_(1).jpg',
      images: [
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Lluvia de Fuego - Evelin Puri_(1).jpg',
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Lluvia de Fuego - Evelin Puri_.jpg'
      ],
      description: 'Sobre un fondo atmosférico de azules profundos, turquesas y violetas acuosos, descienden ramas y flores coralinas como destellos incandescentes, creando un diálogo poético entre el agua y el fuego.'
    },
    {
      id: 'botanica-palo-borracho',
      title: 'Palo Borracho',
      series: 'Serie Botánica',
      category: 'botanicos',
      year: '2024',
      dimensions: 'Gran Formato Horizontal',
      technique: 'Acrílico sobre bastidor entelado',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './assets/Render finales_/Render Botánicos_/Serie Botánica - Palo Borracho - Evelin Puri_.png',
      images: [
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Palo Borracho - Evelin Puri_.png',
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Palo Borracho - Evelin Puri_(1).png',
        './assets/Render finales_/Render Botánicos_/Serie Botánica - Palo Borracho - Evelin Puri_(2).png'
      ],
      description: 'Homenaje a la flora nativa donde la corteza espinosa del palo borracho, las pencas agaváceas y la delicadeza de su flor rosada se recortan sobre un fondo vibrante de amarillos y rojos solares.'
    },

    // ================= SERIE PAISAJES CONTEMPORÁNEOS (Render Paisajes contemporaneos) =================
    {
      id: 'paisajes-ciudad-de-ilusiones',
      title: 'Ciudad de Ilusiones',
      series: 'Serie Paisajes Contemporáneos',
      category: 'paisajes-contemporaneos',
      year: '2025',
      dimensions: 'Gran Formato Horizontal',
      technique: 'Acrílico y técnica mixta sobre bastidor',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './assets/Render finales_/Render Paisajes contemporaneos/Serie Paisajes Contemporáneos - Ciudad de Ilusiones - Evelin Puri_.png',
      images: [
        './assets/Render finales_/Render Paisajes contemporaneos/Serie Paisajes Contemporáneos - Ciudad de Ilusiones - Evelin Puri_.png',
        './assets/Render finales_/Render Paisajes contemporaneos/Serie Paisajes Contemporáneos - Ciudad de Ilusiones - Evelin Puri .png'
      ],
      description: 'Arquitectura onírica y geometría sensible. Escalinatas, arcos y volúmenes suspendidos en una atmósfera crepuscular de violetas, ocres y rosas que invitan a contemplar territorios imaginarios.'
    },
    {
      id: 'paisajes-un-nuevo-mundo',
      title: 'Un Nuevo Mundo',
      series: 'Serie Paisajes Contemporáneos',
      category: 'paisajes-contemporaneos',
      year: '2025',
      dimensions: 'Gran Formato Horizontal',
      technique: 'Acrílico sobre bastidor entelado',
      support: 'Bastidor entelado',
      status: 'Disponible',
      image: './assets/Render finales_/Render Paisajes contemporaneos/Serie Paisajes Contemporáneos - Un Nuevo Mundo - Evelin Puri_.png',
      images: [
        './assets/Render finales_/Render Paisajes contemporaneos/Serie Paisajes Contemporáneos - Un Nuevo Mundo - Evelin Puri_.png',
        './assets/Render finales_/Render Paisajes contemporaneos/Serie Paisajes Contemporáneos - Un Nuevo Mundo - Evelin Puri_(1).png',
        './assets/Render finales_/Render Paisajes contemporaneos/Serie Paisajes Contemporáneos - Un Nuevo Mundo - Evelin Puri_(2).png'
      ],
      description: 'Paisaje metafísico y cósmico donde portales geométricos, una cúpula nívea y un astro lunar dialogan sobre un horizonte incandescente, evocando el cruce entre tiempo, arquitectura y cosmos.'
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
      card.setAttribute('tabindex', '0');
      card.setAttribute('role', 'button');
      card.setAttribute('aria-label', `Ver detalles de ${obra.title}`);

      const viewsCount = obra.images ? obra.images.length : 1;
      const viewsBadgeHtml = viewsCount > 1
        ? `<span class="artwork-views-badge" aria-label="${viewsCount} vistas disponibles">${viewsCount} Vistas</span>`
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

          <!-- Imagen Real desde ./assets/Render finales_/ -->
          <img 
            src="${encodeURI(obra.image)}" 
            alt="${obra.title} — ${obra.series}" 
            class="artwork-img" 
            loading="lazy"
          >

          ${viewsBadgeHtml}

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

      // Evento para abrir detalle modal
      card.addEventListener('click', () => {
        openArtworkModal(obra.id);
      });

      card.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          openArtworkModal(obra.id);
        }
      });

      galleryGrid.appendChild(card);
    });
  }

  /* --------------------------------------------------------------------------
   * 4. FILTRADO POR CATEGORÍAS
   * -------------------------------------------------------------------------- */
  filterButtons.forEach(btn => {
    btn.addEventListener('click', () => {
      filterButtons.forEach(b => b.classList.remove('active'));
      btn.classList.add('active');

      const filter = btn.getAttribute('data-filter');
      if (filter === 'all') {
        currentFilteredObras = [...obras];
      } else {
        currentFilteredObras = obras.filter(o => o.category === filter);
      }
      renderGallery(currentFilteredObras);
    });
  });

  /* --------------------------------------------------------------------------
   * 5. MODAL / LIGHTBOX CURATORIAL NATIVO (<dialog>)
   * -------------------------------------------------------------------------- */
  function openArtworkModal(obraId) {
    const index = currentFilteredObras.findIndex(o => o.id === obraId);
    if (index === -1) return;

    currentArtworkIndex = index;
    displayArtworkInModal(currentFilteredObras[currentArtworkIndex]);

    if (typeof dialog.showModal === 'function') {
      dialog.showModal();
    } else {
      dialog.setAttribute('open', '');
    }
    document.body.style.overflow = 'hidden';
  }

  function displayArtworkInModal(obra) {
    dialogCategoryBadge.textContent = obra.series.toUpperCase();
    dialogYear.textContent = obra.year;
    dialogTitle.textContent = obra.title;
    dialogSeries.textContent = `${obra.series} • ${obra.year}`;
    dialogTechnique.textContent = obra.technique;
    dialogDimensions.textContent = obra.dimensions;
    if (dialogSupport) dialogSupport.textContent = obra.support || 'Bastidor entelado';
    dialogStatus.textContent = obra.status;
    dialogDescription.textContent = obra.description;

    const allImages = obra.images && obra.images.length > 0 ? obra.images : [obra.image];

    // Renderizar imagen principal y selector de vistas en el dialog
    dialogMediaContainer.innerHTML = '';

    const mainStage = document.createElement('div');
    mainStage.className = 'dialog-main-stage';

    const img = new Image();
    img.src = encodeURI(allImages[0]);
    img.alt = obra.title;
    img.className = 'dialog-main-img';

    img.onload = () => {
      mainStage.innerHTML = '';
      mainStage.appendChild(img);
    };

    img.onerror = () => {
      mainStage.innerHTML = `
        <div class="dialog-placeholder">
          <img src="./assets/logo-icono.png" alt="EP" class="dialog-placeholder-logo">
          <h4 class="dialog-placeholder-title">${obra.title}</h4>
          <p class="dialog-placeholder-notice">Pintura contemporánea sobre bastidor</p>
          <span style="font-size: 0.75rem; color: #888; margin-top: 1rem;">Archivo objetivo: ${obra.image}</span>
        </div>
      `;
    };

    dialogMediaContainer.appendChild(mainStage);

    if (allImages.length > 1) {
      const thumbsBar = document.createElement('div');
      thumbsBar.className = 'dialog-thumbs-bar';

      allImages.forEach((imgSrc, idx) => {
        const thumbBtn = document.createElement('button');
        thumbBtn.type = 'button';
        thumbBtn.className = `dialog-thumb-btn ${idx === 0 ? 'active' : ''}`;
        thumbBtn.setAttribute('aria-label', `Ver vista ${idx + 1} de ${obra.title}`);
        thumbBtn.innerHTML = `<img src="${encodeURI(imgSrc)}" alt="Vista ${idx + 1}" loading="lazy">`;

        thumbBtn.addEventListener('click', () => {
          thumbsBar.querySelectorAll('.dialog-thumb-btn').forEach(b => b.classList.remove('active'));
          thumbBtn.classList.add('active');
          img.src = encodeURI(imgSrc);
        });

        thumbsBar.appendChild(thumbBtn);
      });

      dialogMediaContainer.appendChild(thumbsBar);
    }
  }

  function closeArtworkModal() {
    if (typeof dialog.close === 'function') {
      dialog.close();
    } else {
      dialog.removeAttribute('open');
    }
    document.body.style.overflow = '';
  }

  function navigateModal(direction) {
    if (currentFilteredObras.length === 0) return;
    currentArtworkIndex = (currentArtworkIndex + direction + currentFilteredObras.length) % currentFilteredObras.length;
    displayArtworkInModal(currentFilteredObras[currentArtworkIndex]);
  }

  // Controles del modal
  dialogCloseBtn.addEventListener('click', closeArtworkModal);
  dialogPrevBtn.addEventListener('click', () => navigateModal(-1));
  dialogNextBtn.addEventListener('click', () => navigateModal(1));

  // Cierre al hacer click en el backdrop del diálogo nativo
  dialog.addEventListener('click', (e) => {
    const rect = dialog.getBoundingClientRect();
    const isInDialog = (
      rect.top <= e.clientY &&
      e.clientY <= rect.top + rect.height &&
      rect.left <= e.clientX &&
      e.clientX <= rect.left + rect.width
    );
    if (!isInDialog) {
      closeArtworkModal();
    }
  });

  // Atajos de teclado para accesibilidad
  window.addEventListener('keydown', (e) => {
    if (dialog.open) {
      if (e.key === 'Escape') {
        closeArtworkModal();
      } else if (e.key === 'ArrowLeft') {
        navigateModal(-1);
      } else if (e.key === 'ArrowRight') {
        navigateModal(1);
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
   * 7. FORMULARIO DE CONTACTO (FEEDBACK INTERACTIVO)
   * -------------------------------------------------------------------------- */
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();

      const name = document.getElementById('form-name').value.trim();
      const email = document.getElementById('form-email').value.trim();
      const message = document.getElementById('form-message').value.trim();

      if (!name || !email || !message) {
        formFeedback.className = 'form-feedback error';
        formFeedback.textContent = 'Por favor, complete todos los campos obligatorios antes de enviar.';
        return;
      }

      formFeedback.className = 'form-feedback success';
      formFeedback.textContent = `¡Gracias, ${name}! Tu consulta ha sido recibida con éxito. Evelin Puri o su equipo se pondrán en contacto a la brevedad.`;
      contactForm.reset();

      setTimeout(() => {
        formFeedback.style.display = 'none';
      }, 7000);
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
