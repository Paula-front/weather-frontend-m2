const contenedorCiudades = document.getElementById("contenedor-ciudades");

function mostrarCiudades() {
  contenedorCiudades.innerHTML = "";

  ciudades.forEach((ciudad) => {
    const columna = document.createElement("div");
    columna.className = "col-12 col-sm-6 col-lg-4";

    columna.innerHTML = `
      <article class="card h-100 shadow tarjeta-ciudad">
        <img 
          src="${ciudad.imagen}" 
          class="card-img-top imagen-ciudad" 
          alt="Imagen de ${ciudad.nombre}"
        >

        <div class="card-body d-flex flex-column">
          <div class="d-flex align-items-center justify-content-between mb-3">
            <h3 class="card-title h5 mb-0">${ciudad.nombre}</h3>
            <img 
              src="${ciudad.icono}" 
              alt="${ciudad.estado}" 
              class="icono-clima"
            >
          </div>

          <p class="card-text mb-2">
            <strong>Temperatura:</strong> ${ciudad.temperatura}°C
          </p>

          <p class="card-text mb-3">
            <strong>Estado:</strong> ${ciudad.estado}
          </p>

          <button class="btn btn-primary mt-auto boton-detalle" data-id="${ciudad.id}">
            Ver detalle
          </button>
        </div>
      </article>
    `;

    contenedorCiudades.appendChild(columna);
  });

  agregarEventosBotones();
}

function agregarEventosBotones() {
  const botones = document.querySelectorAll(".boton-detalle");

  botones.forEach((boton) => {
    boton.addEventListener("click", () => {
      const idCiudad = Number(boton.dataset.id);

      const ciudadSeleccionada = ciudades.find((ciudad) => ciudad.id === idCiudad);

      localStorage.setItem("ciudadSeleccionada", JSON.stringify(ciudadSeleccionada));

      window.location.href = "detalle.html";
    });
  });
}

mostrarCiudades();