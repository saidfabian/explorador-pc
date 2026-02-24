let puntos = 0;
let encendida = false;

function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach(sec => {
    sec.style.display = "none";
  });
  document.getElementById(id).style.display = "block";
}

function mostrarInfo(texto) {
  document.querySelectorAll("#info").forEach(el => {
    el.innerText = texto;
  });
}

function respuesta(correcta) {
  if (correcta) {
    puntos++;
    alert("✅ Correcto");
  } else {
    alert("❌ Incorrecto");
  }
  document.getElementById("puntos").innerText = puntos;
}

/* ====== SIMULACIÓN PC PRO ====== */

function encenderPC() {
  const pantalla = document.getElementById("pantalla");
  const sonido = new Audio("https://assets.mixkit.co/sfx/preview/mixkit-interface-click-1126.mp3");

  if (!encendida) {
    encendida = true;
    sonido.play();

    pantalla.innerHTML = `
      <div class="boot-screen">
        <p>⚡ Booting system...</p>
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
              <h3>🔐 Iniciar Sesión</h3>
              <input type="password" id="password" placeholder="Contraseña">
              <button onclick="login()">Entrar</button>
              <p id="login-msg"></p>
            </div>
          `;
        }, 400);
      }
    }, 120);

  } else {
    encendida = false;
    pantalla.innerText = "🔴 PC apagada";
    pantalla.classList.remove("on");
  }
}

function login() {
  const pass = document.getElementById("password").value;
  const msg = document.getElementById("login-msg");

  if (pass === "1234") {
    document.getElementById("pantalla").innerHTML = `
      <div class="desktop">
        <h3>🖥️ Escritorio</h3>
        <div class="iconos">
          <div class="icono" onclick="alert('📁 Mis Archivos')">📁</div>
          <div class="icono" onclick="alert('🌐 Navegador')">🌐</div>
          <div class="icono" onclick="alert('⚙️ Configuración')">⚙️</div>
        </div>
      </div>
    `;
  } else {
    msg.innerText = "❌ Contraseña incorrecta";
  }
}

/* Mostrar hardware al iniciar */
mostrarSeccion("hardware");
