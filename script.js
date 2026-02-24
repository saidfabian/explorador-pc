let encendida = false;

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
        <div class="icono" style="top:40px; left:40px;" ondblclick="abrirVentana('archivos')">📁<br>Archivos</div>
        <div class="icono" style="top:40px; left:140px;" ondblclick="abrirVentana('navegador')">🌐<br>Navegador</div>
        <div class="icono" style="top:40px; left:240px;" ondblclick="abrirVentana('config')">⚙️<br>Config</div>

        <div class="menu-inicio" id="menuInicio">
          <p onclick="alert('Sistema Simulado 😎')">💻 Mi PC</p>
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
    const ahora = new Date();
    reloj.innerText = ahora.toLocaleTimeString();
  }, 1000);
}

function abrirVentana(tipo) {
  const ventana = document.createElement("div");
  ventana.className = "ventana";

  let contenido = "";
  if (tipo === "archivos") contenido = "📄 Tarea.docx<br>📷 Foto.png";
  if (tipo === "navegador") contenido = "🌐 Navegador simulado";
  if (tipo === "config") contenido = "⚙️ Panel de control";

  ventana.innerHTML = `
    <div class="barra-titulo">
      <span>${tipo.toUpperCase()}</span>
      <div class="botones">
        <span onclick="minimizar(this)">🗕</span>
        <span onclick="cerrar(this)">✖</span>
      </div>
    </div>
    <div class="contenido">${contenido}</div>
  `;

  document.getElementById("desktop").appendChild(ventana);
  hacerArrastrable(ventana);
}

function cerrar(btn) {
  btn.closest(".ventana").remove();
}

function minimizar(btn) {
  const ventana = btn.closest(".ventana");
  ventana.style.display = "none";
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
