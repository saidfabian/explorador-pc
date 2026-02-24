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

function encenderPC() {
  const pantalla = document.getElementById("pantalla");

  if (!encendida) {
    encendida = true;

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
          pantalla.innerHTML = "🟢 Sistema operativo cargado";
          pantalla.classList.add("on");
        }, 400);
      }
    }, 120);

  } else {
    encendida = false;
    pantalla.innerText = "🔴 PC apagada";
    pantalla.classList.remove("on");
  }
}

/* Mostrar hardware al iniciar */
mostrarSeccion("hardware");
