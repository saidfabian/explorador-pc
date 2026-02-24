let encendida = false;
let puntos = 0;

document.getElementById("pantalla").onclick = () => {
  if (!encendida) encenderPC();
};

function encenderPC() {
  const pantalla = document.getElementById("pantalla");
  encendida = true;

  const sonido = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-windows-start-456.mp3");
  sonido.play();

  pantalla.innerHTML = "⚡ Iniciando sistema...";

  setTimeout(() => {
    pantalla.innerHTML = `
      <div class="desktop" id="desktop">

        <div class="icono" style="top:40px; left:40px;" ondblclick="abrirVentana('hardware')">🖥️<br>Hardware</div>
        <div class="icono" style="top:40px; left:140px;" ondblclick="abrirVentana('software')">💿<br>Software</div>
        <div class="icono" style="top:40px; left:240px;" ondblclick="abrirVentana('quiz')">🧠<br>Quiz</div>
        <div class="icono" style="top:40px; left:340px;" ondblclick="abrirVentana('simulacion')">⚙️<br>Simulación</div>

        <div class="menu-inicio" id="menuInicio">
          <p onclick="alert('Explorador Interactivo 😎')">💻 Mi PC</p>
          <p onclick="apagar()">🔴 Apagar</p>
        </div>

        <div class="taskbar">
          <div class="inicio" onclick="toggleInicio()">🪟 Inicio</div>
          <div class="reloj" id="reloj"></div>
        </div>
      </div>
    `;

    activarReloj();
    activarArrastreIconos();
  }, 1000);
}

function apagar() {
  encendida = false;
  document.getElementById("pantalla").innerHTML = "🔴 PC apagada";
}

function toggleInicio() {
  const menu = document.getElementById("menuInicio");
  menu.style.display = menu.style.display === "block" ? "none" : "block";
}

function activarReloj() {
  const reloj = document.getElementById("reloj");
  setInterval(() => {
    reloj.innerText = new Date().toLocaleTimeString();
  }, 1000);
}

function abrirVentana(tipo) {
  const ventana = document.createElement("div");
  ventana.className = "ventana";

  let contenido = "";

  if (tipo === "hardware") {
    contenido = `
      <h3>🖥️ Hardware</h3>
      CPU – Cerebro del PC<br>
      RAM – Memoria temporal<br>
      Disco Duro – Almacenamiento<br>
      Placa Base – Conecta todo
    `;
  }

  if (tipo === "software") {
    contenido = `
      <h3>💿 Software</h3>
      Sistema Operativo<br>
      Programas<br>
      Navegadores
    `;
  }

  if (tipo === "quiz") {
    contenido = `
      <h3>🧠 Quiz</h3>
      ¿Cerebro del PC?<br>
      <button onclick="respuesta(true)">CPU</button>
      <button onclick="respuesta(false)">RAM</button>
      <br><br>
      ¿Memoria temporal?<br>
      <button onclick="respuesta(false)">Disco Duro</button>
      <button onclick="respuesta(true)">RAM</button>
      <br><br>
      Puntos: <span id="puntos">${puntos}</span>
    `;
  }

  if (tipo === "simulacion") {
    contenido = `
      <h3>⚙️ Simulación</h3>
      <button onclick="alert('Procesando datos...')">Ejecutar proceso</button>
    `;
  }

  ventana.innerHTML = `
    <div class="barra-titulo">
      <span>${tipo.toUpperCase()}</span>
      <div class="botones">
        <span onclick="this.closest('.ventana').remove()">✖</span>
      </div>
    </div>
    <div class="contenido">${contenido}</div>
  `;

  document.getElementById("desktop").appendChild(ventana);
  hacerArrastrable(ventana);
}

function respuesta(correcta) {
  if (correcta) puntos++;
  document.querySelectorAll("#puntos").forEach(p => p.innerText = puntos);
}

function hacerArrastrable(elemento) {
  const barra = elemento.querySelector(".barra-titulo");

  barra.onmousedown = (e) => {
    let shiftX = e.clientX - elemento.getBoundingClientRect().left;
    let shiftY = e.clientY - elemento.getBoundingClientRect().top;

    function mover(e) {
      elemento.style.left = e.clientX - shiftX + "px";
      elemento.style.top = e.clientY - shiftY + "px";
    }

    document.addEventListener("mousemove", mover);

    document.onmouseup = () => {
      document.removeEventListener("mousemove", mover);
      document.onmouseup = null;
    };
  };
}

function activarArrastreIconos() {
  document.querySelectorAll(".icono").forEach(icono => {
    icono.onmousedown = (e) => {
      let shiftX = e.clientX - icono.getBoundingClientRect().left;
      let shiftY = e.clientY - icono.getBoundingClientRect().top;

      function mover(e) {
        icono.style.left = e.clientX - shiftX + "px";
        icono.style.top = e.clientY - shiftY + "px";
      }

      document.addEventListener("mousemove", mover);

      document.onmouseup = () => {
        document.removeEventListener("mousemove", mover);
        document.onmouseup = null;
      };
    };
  });
}
