let encendida = false;

function encenderPC() {
  const pantalla = document.getElementById("pantalla");

  if (!encendida) {
    encendida = true;

    const sonido = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-windows-start-456.mp3");
    sonido.play();

    pantalla.innerHTML = `
      <div class="boot-screen">
        <p>⚡ Iniciando sistema...</p>
        <div class="barra">
          <div class="progreso" id="progreso"></div>
        </div>
      </div>
    `;

    let progreso = 0;
    const barra = document.getElementById("progreso");

    const intervalo = setInterval(() => {
      progreso += 10;
      barra.style.width = progreso + "%";

      if (progreso >= 100) {
        clearInterval(intervalo);

        setTimeout(() => {
          pantalla.innerHTML = `
            <div class="login">
              <h3>🔐 Iniciar sesión</h3>
              <input type="password" id="password" placeholder="Contraseña">
              <br><br>
              <button onclick="login()">Entrar</button>
              <p id="msg"></p>
            </div>
          `;
        }, 500);
      }
    }, 120);

  } else {
    encendida = false;
    pantalla.innerHTML = "🔴 PC apagada";
  }
}

function login() {
  const pass = document.getElementById("password").value;

  if (pass === "1234") {
    cargarEscritorio();
  } else {
    document.getElementById("msg").innerText = "❌ Contraseña incorrecta";
  }
}

function cargarEscritorio() {
  const pantalla = document.getElementById("pantalla");

  pantalla.innerHTML = `
    <div class="desktop" id="desktop">
      <div class="icono" style="top:40px; left:40px;" ondblclick="abrirVentana('archivos')">📁<br>Archivos</div>
      <div class="icono" style="top:40px; left:140px;" ondblclick="abrirVentana('navegador')">🌐<br>Navegador</div>
      <div class="icono" style="top:40px; left:240px;" ondblclick="abrirVentana('config')">⚙️<br>Config</div>
    </div>
  `;

  activarArrastreIconos();
}

function abrirVentana(tipo) {
  const ventana = document.createElement("div");
  ventana.className = "ventana";

  let contenido = "";

  if (tipo === "archivos") contenido = "📄 Documento.txt<br>📷 Imagen.png";
  if (tipo === "navegador") contenido = "🌐 Internet simulado 😎";
  if (tipo === "config") contenido = "⚙️ Ajustes del sistema";

  ventana.innerHTML = `
    <div class="barra-titulo">
      <span>${tipo.toUpperCase()}</span>
      <span class="cerrar" onclick="this.parentElement.parentElement.remove()">✖</span>
    </div>
    <div class="contenido">${contenido}</div>
  `;

  document.getElementById("desktop").appendChild(ventana);

  hacerArrastrable(ventana);
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
