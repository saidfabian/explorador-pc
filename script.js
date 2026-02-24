/* ================== SECCIONES ================== */
function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach(sec => sec.style.display = "none");
  document.getElementById(id).style.display = "block";
}

/* ================== SIMULACIÓN ================== */
function animarBarra(callbackTexto) {
  const progreso = document.getElementById("progreso");
  let ancho = 0;
  progreso.style.width = "0%";

  const intervalo = setInterval(() => {
    ancho += 5;
    progreso.style.width = ancho + "%";
    if (ancho >= 100) {
      clearInterval(intervalo);
      callbackTexto();
    }
  }, 60);
}

function encenderPC() {
  const pantalla = document.getElementById("pantalla");
  pantalla.innerText = "🟡 Iniciando...";
  animarBarra(() => pantalla.innerText = "🟢 Sistema iniciado");
}

function apagarPC() {
  const pantalla = document.getElementById("pantalla");
  pantalla.innerText = "🟠 Apagando...";
  animarBarra(() => pantalla.innerText = "🔴 PC apagada");
}

/* ================== “IMÁGENES 3D” (SVG) ==================
   Son dibujos vectoriales con volumen y brillo, funcionan en PC y celular sin internet.
*/
const visuals = {
  CPU: svgChip("CPU"),
  RAM: svgRam(),
  DISCO: svgDisk(),
  GPU: svgGpu(),
  PLACA: svgBoard(),
  FUENTE: svgPsu(),
  SO: svgWindow("SO"),
  APP: svgBox("APP"),
  NAV: svgGlobe(),
  ANTIV: svgShield()
};

function svgChip(label) {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="g1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#60a5fa" stop-opacity="0.35"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
      <linearGradient id="shine" x1="0" y1="0" x2="1" y2="0">
        <stop offset="0" stop-color="#ffffff" stop-opacity="0.22"/>
        <stop offset="1" stop-color="#ffffff" stop-opacity="0"/>
      </linearGradient>
    </defs>
    <rect x="55" y="35" width="130" height="110" rx="18" fill="url(#g1)" stroke="rgba(255,255,255,0.18)"/>
    <rect x="60" y="40" width="120" height="18" rx="9" fill="url(#shine)"/>
    ${pins()}
    <text x="120" y="102" text-anchor="middle" fill="rgba(255,255,255,0.9)" font-size="22" font-weight="700">${label}</text>
  </svg>`;
}

function pins() {
  let s = "";
  for (let i = 0; i < 8; i++) {
    s += `<rect x="${35}" y="${48 + i*12}" width="14" height="6" rx="3" fill="rgba(34,197,94,0.8)"/>`;
    s += `<rect x="${191}" y="${48 + i*12}" width="14" height="6" rx="3" fill="rgba(34,197,94,0.8)"/>`;
  }
  return s;
}

function svgRam() {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="r1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#22c55e" stop-opacity="0.55"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="30" y="70" width="180" height="55" rx="14" fill="url(#r1)" stroke="rgba(255,255,255,0.18)"/>
    ${Array.from({length:6}).map((_,i)=>`<rect x="${45+i*28}" y="82" width="18" height="18" rx="4" fill="rgba(255,255,255,0.16)"/>`).join("")}
    <rect x="55" y="125" width="130" height="10" rx="5" fill="rgba(96,165,250,0.35)"/>
    <text x="120" y="62" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">RAM</text>
  </svg>`;
}

function svgDisk() {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="d1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#a78bfa" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="55" y="40" width="130" height="100" rx="18" fill="url(#d1)" stroke="rgba(255,255,255,0.18)"/>
    <circle cx="120" cy="92" r="26" fill="rgba(255,255,255,0.14)"/>
    <circle cx="120" cy="92" r="8" fill="rgba(255,255,255,0.25)"/>
    <rect x="80" y="128" width="80" height="8" rx="4" fill="rgba(34,197,94,0.45)"/>
    <text x="120" y="30" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">DISCO</text>
  </svg>`;
}

function svgGpu() {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="g2" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#f59e0b" stop-opacity="0.55"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="35" y="55" width="170" height="75" rx="16" fill="url(#g2)" stroke="rgba(255,255,255,0.18)"/>
    <circle cx="95" cy="92" r="18" fill="rgba(255,255,255,0.14)"/>
    <circle cx="145" cy="92" r="18" fill="rgba(255,255,255,0.14)"/>
    <rect x="35" y="120" width="35" height="16" rx="6" fill="rgba(96,165,250,0.35)"/>
    <text x="120" y="44" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">GPU</text>
  </svg>`;
}

function svgBoard() {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="b1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#10b981" stop-opacity="0.55"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="55" y="35" width="130" height="110" rx="18" fill="url(#b1)" stroke="rgba(255,255,255,0.18)"/>
    <rect x="75" y="55" width="55" height="35" rx="10" fill="rgba(255,255,255,0.12)"/>
    <rect x="140" y="55" width="30" height="65" rx="10" fill="rgba(255,255,255,0.10)"/>
    <circle cx="95" cy="120" r="10" fill="rgba(255,255,255,0.14)"/>
    <text x="120" y="28" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">PLACA</text>
  </svg>`;
}

function svgPsu() {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="p1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ef4444" stop-opacity="0.45"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="55" y="55" width="130" height="80" rx="18" fill="url(#p1)" stroke="rgba(255,255,255,0.18)"/>
    <circle cx="100" cy="95" r="18" fill="rgba(255,255,255,0.14)"/>
    <circle cx="100" cy="95" r="7" fill="rgba(255,255,255,0.25)"/>
    <rect x="135" y="75" width="35" height="40" rx="10" fill="rgba(255,255,255,0.10)"/>
    <text x="120" y="44" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">FUENTE</text>
  </svg>`;
}

function svgWindow(label) {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="w1" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#38bdf8" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="45" y="40" width="150" height="100" rx="18" fill="url(#w1)" stroke="rgba(255,255,255,0.18)"/>
    <rect x="55" y="52" width="130" height="14" rx="7" fill="rgba(255,255,255,0.10)"/>
    <rect x="55" y="75" width="70" height="55" rx="12" fill="rgba(255,255,255,0.08)"/>
    <rect x="132" y="75" width="53" height="55" rx="12" fill="rgba(255,255,255,0.06)"/>
    <text x="120" y="32" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">${label}</text>
  </svg>`;
}

function svgBox(label) {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="bx" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#a78bfa" stop-opacity="0.55"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <rect x="70" y="55" width="100" height="80" rx="18" fill="url(#bx)" stroke="rgba(255,255,255,0.18)"/>
    <rect x="82" y="68" width="76" height="14" rx="7" fill="rgba(255,255,255,0.10)"/>
    <text x="120" y="45" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">${label}</text>
  </svg>`;
}

function svgGlobe() {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="gl" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#22c55e" stop-opacity="0.5"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <circle cx="120" cy="90" r="45" fill="url(#gl)" stroke="rgba(255,255,255,0.18)"/>
    <path d="M80 90h80" stroke="rgba(255,255,255,0.15)" stroke-width="4"/>
    <path d="M120 45c18 16 18 74 0 90" stroke="rgba(255,255,255,0.15)" stroke-width="4" fill="none"/>
    <text x="120" y="30" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">WEB</text>
  </svg>`;
}

function svgShield() {
  return `
  <svg viewBox="0 0 240 180" class="svg3d">
    <defs>
      <linearGradient id="sh" x1="0" y1="0" x2="1" y2="1">
        <stop offset="0" stop-color="#ef4444" stop-opacity="0.42"/>
        <stop offset="1" stop-color="#0b1220" stop-opacity="1"/>
      </linearGradient>
    </defs>
    <path d="M120 35l55 20v45c0 38-23 58-55 70-32-12-55-32-55-70V55z"
      fill="url(#sh)" stroke="rgba(255,255,255,0.18)"/>
    <path d="M120 55v90" stroke="rgba(255,255,255,0.14)" stroke-width="4"/>
    <path d="M92 90h56" stroke="rgba(255,255,255,0.14)" stroke-width="4"/>
    <text x="120" y="26" text-anchor="middle" fill="rgba(255,255,255,0.85)" font-size="18" font-weight="700">AV</text>
  </svg>`;
}

/* ================== DETALLES INTERACTIVOS ================== */
const detalleHardware = {
  CPU: {
    titulo: "CPU (Procesador)",
    texto: "La CPU ejecuta instrucciones y procesa datos. Es el “cerebro” del computador.",
    partes: [
      { nombre: "Núcleos", desc: "Ejecutan tareas en paralelo para mayor velocidad." },
      { nombre: "Caché", desc: "Memoria rápida para acelerar procesos frecuentes." },
      { nombre: "Frecuencia", desc: "Velocidad de trabajo, medida en GHz." }
    ]
  },
  RAM: {
    titulo: "Memoria RAM",
    texto: "Guarda datos temporalmente mientras usas programas. Al apagar, se borra.",
    partes: [
      { nombre: "Capacidad", desc: "Cuántos datos puede guardar (GB)." },
      { nombre: "Velocidad", desc: "Qué tan rápido entrega datos a la CPU." },
      { nombre: "Latencia", desc: "Tiempo de respuesta de la memoria." }
    ]
  },
  DISCO: {
    titulo: "Disco (HDD/SSD)",
    texto: "Almacena archivos de forma permanente: fotos, videos, programas.",
    partes: [
      { nombre: "SSD", desc: "Más rápido y resistente, sin partes mecánicas." },
      { nombre: "HDD", desc: "Más barato, pero más lento." },
      { nombre: "Capacidad", desc: "Espacio disponible (GB/TB)." }
    ]
  },
  GPU: {
    titulo: "GPU (Tarjeta Gráfica)",
    texto: "Procesa gráficos e imágenes. Ayuda en juegos, edición y tareas de IA.",
    partes: [
      { nombre: "VRAM", desc: "Memoria de la GPU para texturas y gráficos." },
      { nombre: "Cores", desc: "Procesan muchos cálculos en paralelo." },
      { nombre: "Drivers", desc: "Software que permite que funcione bien en el sistema." }
    ]
  },
  PLACA: {
    titulo: "Placa Base",
    texto: "Conecta todos los componentes y permite que se comuniquen.",
    partes: [
      { nombre: "Socket CPU", desc: "Donde se instala el procesador." },
      { nombre: "Slots RAM", desc: "Donde se colocan las memorias." },
      { nombre: "Puertos", desc: "USB, audio, red, etc." }
    ]
  },
  FUENTE: {
    titulo: "Fuente de Poder",
    texto: "Convierte energía y la reparte a cada componente con voltaje correcto.",
    partes: [
      { nombre: "Watts", desc: "Potencia total disponible (W)." },
      { nombre: "Protecciones", desc: "Evitan daños por sobrecarga." },
      { nombre: "Conectores", desc: "Cables para placa, GPU, discos, etc." }
    ]
  }
};

const detalleSoftware = {
  SO: {
    titulo: "Sistema Operativo",
    texto: "Administra el hardware y permite usar programas (Windows, Linux, etc.).",
    funciones: [
      { nombre: "Gestión de procesos", desc: "Organiza tareas y rendimiento." },
      { nombre: "Gestión de memoria", desc: "Controla RAM y uso de recursos." },
      { nombre: "Interfaz", desc: "Permite interactuar con el usuario." }
    ]
  },
  APP: {
    titulo: "Programas (Apps)",
    texto: "Aplicaciones para tareas: Office, editores, reproductores, etc.",
    funciones: [
      { nombre: "Productividad", desc: "Word, Excel, Docs…" },
      { nombre: "Edición", desc: "Fotos, video, audio…" },
      { nombre: "Comunicación", desc: "Chat, correo, videollamadas…" }
    ]
  },
  NAV: {
    titulo: "Navegador",
    texto: "Permite acceder a páginas web: Chrome, Edge, Firefox, etc.",
    funciones: [
      { nombre: "Pestañas", desc: "Abrir varias páginas a la vez." },
      { nombre: "Historial", desc: "Registro de páginas visitadas." },
      { nombre: "Descargas", desc: "Guardar archivos desde internet." }
    ]
  },
  ANTIV: {
    titulo: "Antivirus",
    texto: "Protege contra malware y amenazas. Escanea y bloquea riesgos.",
    funciones: [
      { nombre: "Escaneo", desc: "Revisa archivos y detecta amenazas." },
      { nombre: "Tiempo real", desc: "Bloquea ataques mientras navegas." },
      { nombre: "Cuarentena", desc: "Aísla archivos peligrosos." }
    ]
  }
};

function abrirDetalle(key) {
  // Hardware
  if (detalleHardware[key]) {
    const panel = document.getElementById("panelDetalle");
    panel.classList.remove("oculto");
    document.getElementById("detalleTitulo").innerText = detalleHardware[key].titulo;
    document.getElementById("detalleTexto").innerText = detalleHardware[key].texto;

    document.getElementById("detalleVisual").innerHTML = visuals[key] || "";

    const cont = document.getElementById("detallePartes");
    cont.innerHTML = "";
    detalleHardware[key].partes.forEach(p => {
      const b = document.createElement("button");
      b.className = "chip";
      b.innerText = p.nombre;
      b.onclick = () => toast(p.nombre, p.desc);
      cont.appendChild(b);
    });
    return;
  }

  // Software
  if (detalleSoftware[key]) {
    const panel = document.getElementById("panelDetalleSoft");
    panel.classList.remove("oculto");
    document.getElementById("detalleTituloSoft").innerText = detalleSoftware[key].titulo;
    document.getElementById("detalleTextoSoft").innerText = detalleSoftware[key].texto;

    document.getElementById("detalleVisualSoft").innerHTML = visuals[key] || "";

    const cont = document.getElementById("detallePartesSoft");
    cont.innerHTML = "";
    detalleSoftware[key].funciones.forEach(f => {
      const b = document.createElement("button");
      b.className = "chip";
      b.innerText = f.nombre;
      b.onclick = () => toast(f.nombre, f.desc);
      cont.appendChild(b);
    });
  }
}

function cerrarDetalle() {
  document.getElementById("panelDetalle").classList.add("oculto");
}

function cerrarDetalleSoft() {
  document.getElementById("panelDetalleSoft").classList.add("oculto");
}

/* ================== TOAST (mensajito bonito) ================== */
let toastTimer = null;
function toast(titulo, texto) {
  let el = document.getElementById("toast");
  if (!el) {
    el = document.createElement("div");
    el.id = "toast";
    el.className = "toast";
    document.body.appendChild(el);
  }
  el.innerHTML = `<strong>${titulo}</strong><br>${texto}`;
  el.classList.add("show");

  if (toastTimer) clearTimeout(toastTimer);
  toastTimer = setTimeout(() => el.classList.remove("show"), 2200);
}

/* ================== QUIZ con IMÁGENES ================== */
const preguntas = [
  {
    pregunta: "¿Cuál es el cerebro del computador?",
    opciones: [
      { label: "CPU", img: "CPU" },
      { label: "RAM", img: "RAM" },
      { label: "Disco", img: "DISCO" }
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué memoria es temporal?",
    opciones: [
      { label: "Disco", img: "DISCO" },
      { label: "RAM", img: "RAM" },
      { label: "GPU", img: "GPU" }
    ],
    correcta: 1
  },
  {
    pregunta: "¿Dónde se guardan archivos permanentemente?",
    opciones: [
      { label: "Disco", img: "DISCO" },
      { label: "CPU", img: "CPU" },
      { label: "RAM", img: "RAM" }
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué componente se encarga de gráficos?",
    opciones: [
      { label: "GPU", img: "GPU" },
      { label: "Fuente", img: "FUENTE" },
      { label: "Placa", img: "PLACA" }
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué conecta todos los componentes?",
    opciones: [
      { label: "Placa Base", img: "PLACA" },
      { label: "Disco", img: "DISCO" },
      { label: "GPU", img: "GPU" }
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué software controla el hardware?",
    opciones: [
      { label: "Sistema Operativo", img: "SO" },
      { label: "Navegador", img: "NAV" },
      { label: "Antivirus", img: "ANTIV" }
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué permite navegar en internet?",
    opciones: [
      { label: "Navegador", img: "NAV" },
      { label: "CPU", img: "CPU" },
      { label: "RAM", img: "RAM" }
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué protege contra virus?",
    opciones: [
      { label: "Antivirus", img: "ANTIV" },
      { label: "RAM", img: "RAM" },
      { label: "Disco", img: "DISCO" }
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué convierte energía para el PC?",
    opciones: [
      { label: "Fuente", img: "FUENTE" },
      { label: "GPU", img: "GPU" },
      { label: "SO", img: "SO" }
    ],
    correcta: 0
  },
  {
    pregunta: "¿Qué se borra al apagar el PC?",
    opciones: [
      { label: "RAM", img: "RAM" },
      { label: "Disco", img: "DISCO" },
      { label: "Placa", img: "PLACA" }
    ],
    correcta: 0
  }
];

let actual = 0;
let puntos = 0;

function cargarPregunta() {
  const p = preguntas[actual];
  document.getElementById("pregunta").innerText = p.pregunta;

  const cont = document.getElementById("respuestas");
  cont.innerHTML = "";

  p.opciones.forEach((op, i) => {
    const card = document.createElement("button");
    card.className = "quizCard";
    card.innerHTML = `
      <div class="quizImg">${visuals[op.img] || ""}</div>
      <div class="quizLbl">${op.label}</div>
    `;
    card.onclick = () => verificar(i);
    cont.appendChild(card);
  });
}

function verificar(i) {
  if (i === preguntas[actual].correcta) {
    puntos++;
    toast("✅ Correcto", "Buen trabajo.");
  } else {
    toast("❌ Incorrecto", "Sigue intentando.");
  }
  document.getElementById("puntos").innerText = puntos;

  actual++;
  if (actual < preguntas.length) {
    cargarPregunta();
  } else {
    document.getElementById("pregunta").innerText = "🎉 Quiz terminado";
    document.getElementById("respuestas").innerHTML = "";
  }
}

/* ================== PARTÍCULAS ================== */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

function resizeCanvas() {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
}
resizeCanvas();

let particles = [];
for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 1 + 0.2
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);
  ctx.fillStyle = "rgba(255,255,255,0.45)";
  ctx.beginPath();
  particles.forEach(p => {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  });
  ctx.fill();

  particles.forEach(p => {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });

  requestAnimationFrame(draw);
}
draw();

window.addEventListener("resize", () => {
  resizeCanvas();
  particles = particles.map(p => ({
    ...p,
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height
  }));
});

/* ================== INICIO ================== */
mostrarSeccion("hardware");
cargarPregunta();
