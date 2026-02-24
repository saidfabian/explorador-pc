let puntos = 0;

function correcta() {
  puntos++;
  document.getElementById("puntos").innerText = puntos;
  alert("✅ Correcto");
}

function incorrecta() {
  alert("❌ Incorrecto");
}

function encenderPC() {
  alert("💻 Iniciando sistema...");
  
  setTimeout(() => {
    alert("✅ Sistema iniciado correctamente");
  }, 1000);
}
