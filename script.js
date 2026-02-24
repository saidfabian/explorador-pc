let puntos = 0;

function mostrarSeccion(id) {
  document.querySelectorAll(".seccion").forEach(sec => {
    sec.style.display = "none";
  });

  document.getElementById(id).style.display = "block";
}

function mostrarInfo(texto) {
  document.querySelectorAll("#info").forEach(p => {
    p.innerText = texto;
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

  pantalla.innerText = "🟢 PC encendida...";
  
  setTimeout(() => {
    pantalla.innerText = "💻 Sistema iniciado";
  }, 1500);
}

/* Mostrar hardware al iniciar */
mostrarSeccion("hardware");

