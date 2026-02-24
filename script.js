function mostrarSeccion(id) {
  // Oculta todas las secciones
  const secciones = document.querySelectorAll(".seccion");
  secciones.forEach(sec => sec.style.display = "none");

  // Muestra la sección seleccionada
  document.getElementById(id).style.display = "block";
}

function mostrarInfo(texto) {
  document.getElementById("info").innerText = texto;
}

let puntos = 0;

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
  pantalla.innerText = "💻 Iniciando sistema...";
  
  setTimeout(() => {
    pantalla.innerText = "🟢 Sistema encendido correctamente";
  }, 1500);
}