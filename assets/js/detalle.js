const contenedorDetalle = document.getElementById("detalle-ciudad");
const contenedorPronostico = document.getElementById("pronostico");

function obtenerIcono(estado) {
  const texto = estado.toLowerCase();

  if (
    texto.includes("lluvia") ||
    texto.includes("llovizna") ||
    texto.includes("chubasc")
  ) {
    return "assets/img/clima/lluvia.png";
  }

  if (texto.includes("viento")) {
    return "assets/img/clima/viento.png";
  }

  if (texto.includes("cubierto") || texto.includes("nublado")) {
    if (texto.includes("despejado") || texto.includes("parcial")) {
      return "assets/img/clima/parcialmente-nublado.png";
    }
    return "assets/img/clima/nublado.png";
  }

  if (texto.includes("parcial")) {
    return "assets/img/clima/parcialmente-nublado.png";
  }

  return "assets/img/clima/soleado.png";
}

const ciudadGuardada = JSON.parse(localStorage.getItem("ciudadSeleccionada"));

if (!ciudadGuardada) {
  contenedorDetalle.innerHTML = `
    <div class="alert alert-warning text-center" role="alert">
      No se encontró una ciudad seleccionada. 
      <a href="index.html" class="alert-link">Volver al inicio</a>
    </div>
  `;
} else {
  mostrarDetalle(ciudadGuardada);
  mostrarPronostico(ciudadGuardada.pronostico);
}

function mostrarDetalle(ciudad) {
  const iconoActual = obtenerIcono(ciudad.estado);

  contenedorDetalle.innerHTML = `
    <article class="card shadow detalle-card overflow-hidden">
      <div class="row g-0">
        <div class="col-12 col-md-6">
          <img
            src="${ciudad.imagen}"
            alt="Imagen de ${ciudad.nombre}"
            class="img-fluid h-100 w-100 imagen-detalle"
          >
        </div>

        <div class="col-12 col-md-6">
          <div class="card-body p-4">
            <div class="d-flex align-items-center justify-content-between mb-3">
              <h2 class="card-title fw-bold mb-0">${ciudad.nombre}</h2>
              <img
                src="${iconoActual}"
                alt="${ciudad.estado}"
                class="icono-detalle"
              >
            </div>

            <p class="fs-5 mb-2">
              <strong>Temperatura actual:</strong> ${ciudad.temperatura}°C
            </p>

            <p class="mb-2">
              <strong>Estado:</strong> ${ciudad.estado}
            </p>

            <p class="mb-2">
              <strong>Humedad:</strong> ${ciudad.humedad}
            </p>

            <p class="mb-4">
              <strong>Viento:</strong> ${ciudad.viento}
            </p>

            <a href="index.html" class="btn btn-outline-light">
              ← Volver al inicio
            </a>
          </div>
        </div>
      </div>
    </article>
  `;
}

function mostrarPronostico(pronostico) {
  contenedorPronostico.innerHTML = "";

  pronostico.forEach((dia) => {
    const iconoDia = obtenerIcono(dia.estado);

    const columna = document.createElement("div");
    columna.className = "col-12 col-sm-6 col-lg-4 col-xl-3";

    columna.innerHTML = `
      <article class="card h-100 shadow tarjeta-pronostico">
        <div class="card-body text-center">
          <img src="${iconoDia}" alt="${dia.estado}" class="icono-clima mb-3">
          <h4 class="h5 fw-bold mb-3">${dia.dia}</h4>
          <p class="mb-2"><strong>Máx:</strong> ${dia.max}°C</p>
          <p class="mb-2"><strong>Mín:</strong> ${dia.min}°C</p>
          <p class="mb-0">${dia.estado}</p>
        </div>
      </article>
    `;

    contenedorPronostico.appendChild(columna);
  });
}