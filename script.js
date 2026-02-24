let puntos = 0;

document.getElementById("powerBtn").addEventListener("click", iniciar);

function iniciar(){
  const pantalla = document.getElementById("pantalla");

  pantalla.innerHTML = "⚡ Iniciando...";
  
  setTimeout(()=>{
    pantalla.innerHTML = `
      <div class="desktop">
        <div class="icono" onclick="abrir('hardware')">🖥️<br>Hardware</div>
        <div class="icono" onclick="abrir('software')">💿<br>Software</div>
        <div class="icono" onclick="abrir('quiz')">🧠<br>Quiz</div>
        <div class="icono" onclick="abrir('simulacion')">⚙️<br>Simulación</div>
      </div>
    `;
  },1000);
}

function abrir(tipo){

  let contenido="";

  if(tipo==="hardware"){
    contenido=`
      <h3>Hardware</h3>
      CPU – Cerebro del PC<br>
      RAM – Memoria temporal<br>
      Disco Duro – Almacenamiento
    `;
  }

  if(tipo==="software"){
    contenido=`
      <h3>Software</h3>
      Sistema Operativo<br>
      Aplicaciones<br>
      Navegadores
    `;
  }

  if(tipo==="quiz"){
    contenido=`
      <h3>Quiz</h3>
      ¿Cerebro del PC?<br>
      <button onclick="responder(true)">CPU</button>
      <button onclick="responder(false)">RAM</button>
      <br><br>
      Puntos: <span id="puntos">${puntos}</span>
    `;
  }

  if(tipo==="simulacion"){
    contenido=`
      <h3>Simulación</h3>
      <button onclick="alert('Procesando...')">Ejecutar</button>
    `;
  }

  const ventana=document.createElement("div");
  ventana.className="ventana";
  ventana.innerHTML=`
    <div class="cerrar" onclick="this.parentElement.remove()">✖</div>
    ${contenido}
  `;

  document.body.appendChild(ventana);
}

function responder(correcta){
  if(correcta) puntos++;
  document.querySelectorAll("#puntos").forEach(p=>p.innerText=puntos);
}
