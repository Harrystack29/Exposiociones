const concepts = [
  {
    keyword: 'INTRO',
    title: '¿Qué es la POO?',
    img: 'assets/images/poo_intro_1789586760293.jpg',
    description: '<strong>Definición:</strong> Paradigma de programación basado en la organización del código en objetos, que son instancias de clases, las cuales encapsulan datos (atributos) y comportamientos (métodos).<br><br><strong>Definición Humana:</strong> Es escribir código como si describieras cosas del mundo real: un carro, una cuenta bancaria o un estudiante.<br><br><em>💡 "En POO no piensas en funciones sueltas; piensas en quién hace qué."</em>'
  },
  {
    keyword: 'UTILIDAD',
    title: '¿Para qué sirve la POO?',
    img: 'assets/images/poo_utilidad_1789586771222.jpg',
    description: '<ul><li><strong>Modelar la Realidad:</strong> Permite estructurar problemas complejos traduciéndolos a entidades intuitivas del mundo real.</li><br><li><strong>Reutilizar Código:</strong> Evita duplicaciones innecesarias mediante patrones de código limpio y estructuras modulares.</li><br><li><strong>Proteger Datos:</strong> Mantiene la integridad de la información sensible encapsulando el acceso.</li><br><li><strong>Trabajo Colaborativo:</strong> Múltiples desarrolladores trabajan simultáneamente sin romper componentes ajenos.</li><br><li><strong>Escalabilidad Industrial:</strong> Permite hacer crecer proyectos desde 100 hasta más de 100,000 líneas ordenadas.</li></ul>'
  },
  {
    keyword: 'PILAR_1',
    title: 'Encapsulamiento',
    img: 'assets/images/poo_encapsulamiento_1789586781641.jpg',
    description: '<strong>Protección e Integridad:</strong> Oculta los datos internos de un objeto impidiendo modificaciones no autorizadas directamente desde fuera.<br><br>Actúa como una caja fuerte. Se accede y modifica a través de métodos públicos dedicados (getters y setters). Si otro código quiere cambiar el estado del objeto, debe hacerlo a través de esos métodos autorizados, previniendo que el objeto alcance un estado inválido.<br><br><em>"Nadie puede hacer cuenta.__saldo = 999999 desde fuera. El objeto defiende su propio estado."</em>'
  },
  {
    keyword: 'PILAR_2',
    title: 'Abstracción',
    img: 'assets/images/poo_abstraccion_1789586803045.jpg',
    description: 'Mostrar solo lo esencial reduciendo complejidad innecesaria.<br><br><strong>Metáfora del Iceberg:</strong> Conduces un automóvil interactuando solo con el volante y pedales (interfaz/superficie), sin necesidad de gestionar la combustión interna del motor (estructura profunda).<br><br><strong>Implementación Técnica:</strong> Se logra mediante clases abstractas e interfaces que definen los contratos sin obligar a mostrar los detalles internos.'
  },
  {
    keyword: 'PILAR_3',
    title: 'Herencia',
    img: 'assets/images/poo_herencia_1789586813167.jpg',
    description: '<strong>Jerarquía de Clases:</strong> Una clase hija (subclase) hereda atributos y métodos de una clase padre (superclase). Reutiliza atributos y métodos de clases superiores.<br><br>Si tenemos una clase general <code>Animal</code> con un método <code>respirar()</code>, podemos crear subclases como <code>Perro</code> y <code>Gato</code> que heredan automáticamente la capacidad de respirar, pero añaden sus propios métodos (como <code>ladrar()</code> o <code>maullar()</code>).'
  },
  {
    keyword: 'PILAR_4',
    title: 'Polimorfismo',
    img: 'assets/images/poo_polimorfismo_1789586822309.jpg',
    description: '<strong>"Muchas Formas":</strong> Permite que objetos de diferentes clases respondan al mismo mensaje o método, cada uno con su propia implementación particular.<br><br>Dos variantes principales:<br>• <strong>Sobrescritura (Overriding):</strong> La subclase redefine el método del padre.<br>• <strong>Sobrecarga (Overloading):</strong> Mismo método con distintos parámetros.'
  },
  {
    keyword: 'CONCEPTOS_BASE',
    title: 'Clases vs Objetos',
    img: 'assets/images/poo_clases_objetos_1789586843343.jpg',
    description: '<strong>La Clase:</strong> Es la plantilla, molde o plano abstracto. Por ejemplo, el plano arquitectónico de una vivienda.<br><br><strong>El Objeto:</strong> Es la instancia concreta creada en memoria a partir de la clase. Por ejemplo, la casa física ya construida en la ciudad.'
  },
  {
    keyword: 'ANATOMIA',
    title: 'Atributos, Métodos y Modificadores',
    img: 'assets/images/poo_anatomia_1789586853641.jpg',
    description: '<strong>Atributos:</strong> Variables internas que definen las características o estado de un objeto.<br><strong>Métodos:</strong> Funciones internas que definen el comportamiento.<br><br><strong>Modificadores de Acceso (Niveles de Seguridad):</strong><br>• <strong>Public:</strong> Permitido total (Accesibilidad Global).<br>• <strong>Protected:</strong> Restringido (Acceso Heredado).<br>• <strong>Private:</strong> Denegado externo (Máximo Encapsulamiento).'
  },
  {
    keyword: 'RELACIONES',
    title: 'Relaciones entre Clases',
    img: 'assets/images/poo_relaciones_1789586862356.jpg',
    description: 'Las clases no operan aisladas. Se relacionan de estas formas:<br><br>• <strong>Asociación ("usa-un"):</strong> Relación independiente donde una clase utiliza servicios de otra.<br>• <strong>Agregación ("tiene-un" débil):</strong> Los componentes pueden subsistir independientemente del contenedor.<br>• <strong>Composición ("tiene-un" fuerte):</strong> El componente depende vitalmente de la existencia del objeto principal.<br>• <strong>Herencia ("es-un"):</strong> Especialización jerárquica directa.'
  },
  {
    keyword: 'INDUSTRIA',
    title: 'POO en el Ámbito Laboral',
    img: 'assets/images/poo_industria_1789586884018.jpg',
    description: '• <strong>Desarrollo de Videojuegos (Unity/Unreal):</strong> Gestión de personajes, físicas de objetos e inventarios.<br>• <strong>Sistemas Bancarios (Java/C#):</strong> Modelado de transacciones, cuentas y auditoría de seguridad.<br>• <strong>Desarrollo Web (Django/Spring/Laravel):</strong> Frameworks MVC y arquitecturas de microservicios.<br>• <strong>IA & Data (Python):</strong> Encapsulamiento de modelos, capas de red y datasets.'
  },
  {
    keyword: 'CASO_REAL',
    title: 'Ejemplo de Caso Real',
    img: 'assets/images/poo_casoreal_1789586893033.jpg',
    description: '<strong>Caso MercadoLibre:</strong> En una plataforma masiva, entidades fundamentales como <code>Comprador</code>, <code>Producto</code> y <code>TransaccionPago</code> operan como un ecosistema de objetos interconectados.<br><br>Al procesar una compra, el método <code>pagar()</code> invoca internamente subclases de <code>Transaccion</code>. Sin POO, la gestión de estados y flujos colapsaría en complejidad.'
  },
  {
    keyword: 'CIERRE',
    title: 'Conclusión',
    img: 'assets/images/poo_conclusion_1789586903801.jpg',
    description: '<em>"Aprender POO no fue solo memorizar términos técnicos. Fue cambiar la forma de estructurar un problema. Ahora, al analizar un sistema, veo entidades vivas colaborando de forma organizada."</em><br><br>Como estudiantes de la UNC, entendemos que la ciencia aplicada consiste en construir arquitectura robusta orientada al servicio del desarrollo tecnológico.'
  }
];

function buildSlides() {
  const container = document.getElementById('presentation-container');

  // Progress indicator setup
  const progressContainer = document.createElement('div');
  progressContainer.className = 'progress-indicator';

  // Create a progress dot for the intro slide
  const introDot = document.createElement('div');
  introDot.className = 'progress-dot active';
  progressContainer.appendChild(introDot);

  concepts.forEach((m, index) => {
    // Progress Dot
    const dot = document.createElement('div');
    dot.className = 'progress-dot';
    progressContainer.appendChild(dot);

    // Slide Section
    const slide = document.createElement('section');
    slide.className = 'slide data-slide';

    // The text that will be typed out
    const fullText = `> print("${m.keyword} - ${m.title}")`;

    slide.innerHTML = `
      <div class="tech-panel slide-trigger" onclick="openModal(${index})">
        <div class="hud-corner top-left"></div>
        <div class="hud-corner top-right"></div>
        <div class="hud-corner bottom-left"></div>
        <div class="hud-corner bottom-right"></div>
        
        <div>
          <h2 class="slide-title" data-text='${fullText}'></h2><span class="cursor-blink"></span>
        </div>
      </div>
    `;

    container.appendChild(slide);
  });

  document.body.appendChild(progressContainer);

  // Update progress dots on scroll
  const dots = document.querySelectorAll('.progress-dot');
  container.addEventListener('scroll', () => {
    const slideHeight = window.innerHeight;
    const scrollPos = container.scrollTop;
    const activeIndex = Math.round(scrollPos / slideHeight);

    dots.forEach((dot, idx) => {
      if (idx === activeIndex) {
        dot.classList.add('active');
      } else {
        dot.classList.remove('active');
      }
    });
  });

  // Intersection Observer for Scroll Animations
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('in-view');
        // Typewriter effect
        const titleEl = entry.target.querySelector('.slide-title');
        if (titleEl && !titleEl.dataset.typingStarted) {
          titleEl.dataset.typingStarted = "true";
          typewriterEffect(titleEl, titleEl.dataset.text);
        }
      } else {
        entry.target.classList.remove('in-view'); // Re-animates on scroll back
        const titleEl = entry.target.querySelector('.slide-title');
        if (titleEl) {
          titleEl.innerHTML = "";
          delete titleEl.dataset.typingStarted;
        }
      }
    });
  }, { threshold: 0.3 }); // Triggers when 30% of the slide is visible

  document.querySelectorAll('.slide').forEach(slide => {
    observer.observe(slide);
  });
}

document.addEventListener('DOMContentLoaded', () => {
  initParticles();
  buildSlides();
  initCustomCursor();
});

function initParticles() {
  tsParticles.load('tsparticles', {
    background: { color: { value: 'transparent' } },
    fpsLimit: 60,
    particles: {
      number: { value: 60, density: { enable: true, area: 1000 } },
      color: { value: ['#00f3ff', '#7000ff'] },
      shape: { type: 'circle' },
      opacity: { value: 0.4, random: true },
      size: { value: { min: 1, max: 2 } },
      move: { enable: true, speed: 0.8, direction: 'none', random: true, outModes: { default: 'bounce' } },
      links: { enable: true, distance: 150, color: '#7000ff', opacity: 0.3, width: 1 }
    },
    interactivity: {
      detectsOn: 'canvas',
      events: {
        onHover: { enable: true, mode: 'grab' },
        onClick: { enable: true, mode: 'push' }
      },
      modes: { grab: { distance: 200, links: { opacity: 0.6, color: '#00f3ff' } }, push: { quantity: 2 } }
    },
    detectRetina: true
  });
}

function initCustomCursor() {
  const cursor = document.getElementById('cursor');
  const cursorBlur = document.getElementById('cursor-blur');

  document.addEventListener('mousemove', (e) => {
    const x = e.clientX;
    const y = e.clientY;
    
    // Update custom cursor position
    cursor.style.left = x + 'px';
    cursor.style.top = y + 'px';
    
    cursorBlur.style.left = x + 'px';
    cursorBlur.style.top = y + 'px';

    // Update mouse tracking for tech panels
    document.querySelectorAll('.tech-panel').forEach(panel => {
      const rect = panel.getBoundingClientRect();
      const panelX = e.clientX - rect.left;
      const panelY = e.clientY - rect.top;
      
      panel.style.setProperty('--mouse-x', `${panelX}px`);
      panel.style.setProperty('--mouse-y', `${panelY}px`);
    });
  });

  // Hover effect on clickable elements
  const hoverElements = document.querySelectorAll('.slide-trigger, .close-btn, a, button');
  hoverElements.forEach(el => {
    el.addEventListener('mouseenter', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1.5)';
      cursor.style.backgroundColor = 'rgba(0, 243, 255, 0.2)';
      cursor.style.borderColor = '#7000ff';
    });
    el.addEventListener('mouseleave', () => {
      cursor.style.transform = 'translate(-50%, -50%) scale(1)';
      cursor.style.backgroundColor = 'transparent';
      cursor.style.borderColor = '#00f3ff';
    });
  });
}

function typewriterEffect(element, text) {
  element.innerHTML = '';
  let i = 0;
  const speed = 40; // ms per char

  function type() {
    if (i < text.length && element.dataset.typingStarted) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  type();
}

function openModal(index) {
  const m = concepts[index];
  const modal = document.getElementById('tech-modal');
  const mediaContainer = document.getElementById('modal-media-container');
  const dateEl = document.getElementById('modal-date');
  const titleEl = document.getElementById('modal-title');
  const descEl = document.getElementById('modal-desc');

  let mediaHtml = '';
  if (m.video) {
    // For modal, we want videos to have controls if needed or keep autoplay loop
    mediaHtml = `<video class="slide-img" src="${m.video}" autoplay loop muted playsinline></video>`;
  } else {
    mediaHtml = `<img class="slide-img" src="${m.img}" alt="${m.title}" />`;
  }

  mediaContainer.innerHTML = mediaHtml;
  dateEl.innerHTML = m.keyword;
  titleEl.innerHTML = m.title;
  descEl.innerHTML = m.description;

  modal.classList.remove('hidden');
}

function closeModal() {
  const modal = document.getElementById('tech-modal');
  modal.classList.add('hidden');

  // Pause any playing videos to stop audio and processing
  const video = modal.querySelector('video');
  if (video) {
    video.pause();
    video.src = ''; // Force stop
  }
}
