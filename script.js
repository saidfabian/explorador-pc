/* SECCIONES */
function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

/* INFO */
function mostrarInfo(texto) {
  document.querySelectorAll("#info").forEach(p => p.innerText = texto);
}

/* SIMULACIÓN */
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
  
  animarBarra(() => {
    pantalla.innerText = "🟢 Sistema iniciado";
  });
}

function apagarPC() {
  const pantalla = document.getElementById("pantalla");
  pantalla.innerText = "🟠 Apagando...";
  
  animarBarra(() => {
    pantalla.innerText = "🔴 PC apagada";
  });
}

/* QUIZ */
const preguntas = [
  {
    pregunta: "¿Cuál es el cerebro del computador?",
    respuestas: ["RAM", "CPU", "Disco"],
    correcta: 1
  },
  {
    pregunta: "¿Qué memoria es temporal?",
    respuestas: ["RAM", "Disco Duro"],
    correcta: 0
  },
  {
    pregunta: "¿Qué controla el hardware?",
    respuestas: ["Sistema Operativo", "Monitor"],
    correcta: 0
  },
  {
    pregunta: "¿Dónde se guardan archivos?",
    respuestas: ["Disco Duro", "CPU"],
    correcta: 0
  },
  {
    pregunta: "¿Qué permite navegar en internet?",
    respuestas: ["Navegador", "RAM"],
    correcta: 0
  }
];

let actual = 0;
let puntos = 0;

function cargarPregunta() {
  const p = preguntas[actual];
  document.getElementById("pregunta").innerText = p.pregunta;

  const contenedor = document.getElementById("respuestas");
  contenedor.innerHTML = "";

  p.respuestas.forEach((resp, i) => {
    const btn = document.createElement("button");
    btn.innerText = resp;
    btn.onclick = () => verificar(i);
    contenedor.appendChild(btn);
  });
}

function verificar(i) {
  if (i === preguntas[actual].correcta) {
    puntos++;
    alert("✅ Correcto");
  } else {
    alert("❌ Incorrecto");
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

/* PARTICULAS */
const canvas = document.getElementById("particles");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

let particles = [];

for (let i = 0; i < 60; i++) {
  particles.push({
    x: Math.random() * canvas.width,
    y: Math.random() * canvas.height,
    r: Math.random() * 2 + 1,
    d: Math.random() * 1
  });
}

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height);

  ctx.fillStyle = "rgba(255,255,255,0.5)";
  ctx.beginPath();

  particles.forEach(p => {
    ctx.moveTo(p.x, p.y);
    ctx.arc(p.x, p.y, p.r, 0, Math.PI * 2);
  });

  ctx.fill();
  move();
}

function move() {
  particles.forEach(p => {
    p.y += p.d;
    if (p.y > canvas.height) {
      p.y = 0;
      p.x = Math.random() * canvas.width;
    }
  });
}

setInterval(draw, 33);

window.addEventListener("resize", () => {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
});

/* INICIO */
mostrarSeccion("hardware");
cargarPregunta();
