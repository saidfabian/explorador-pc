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
    pantalla.innerText = "🟡 Iniciando sistema...";
    pantalla.classList.add("boot");

    setTimeout(() => {
      pantalla.innerText = "🟢 Sistema operativo cargado";
      pantalla.classList.remove("boot");
      pantalla.classList.add("on");
    }, 1500);

  } else {
    encendida = false;
    pantalla.innerText = "🔴 PC apagada";
    pantalla.classList.remove("on");
  }
}

/* Mostrar hardware al iniciar */
mostrarSeccion("hardware");
