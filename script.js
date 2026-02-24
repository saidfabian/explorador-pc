let puntos = 0;
let pcEncendida = false;

function mostrarSeccion(id) {
  document.querySelectorAll('.seccion').forEach(sec => {
    sec.classList.remove('activa');
  });

  document.getElementById(id).classList.add('activa');
}

function mostrarInfo(titulo, texto) {
  document.getElementById("tituloVentana").innerText = titulo;
  document.getElementById("textoVentana").innerText = texto;
  document.getElementById("ventana").classList.remove("oculto");
}

function cerrarVentana() {
  document.getElementById("ventana").classList.add("oculto");
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

  pcEncendida = !pcEncendida;

  if (pcEncendida) {
    pantalla.classList.remove("apagada");
    pantalla.classList.add("encendida");
    pantalla.innerText = "🟢 PC encendida";
  } else {
    pantalla.classList.remove("encendida");
    pantalla.classList.add("apagada");
    pantalla.innerText = "🔴 PC apagada";
  }
}
