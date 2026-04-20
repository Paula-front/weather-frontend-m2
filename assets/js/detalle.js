const contenedorDetalle = document.getElementById("weatherDetail");
const contenedorPronostico = document.getElementById("forecastGrid");

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
  if (contenedorDetalle) {
    contenedorDetalle.innerHTML = `
      <div class="alert alert-warning text-center" role="alert">
        No se encontró una ciudad seleccionada.
        <a href="index.html" class="alert-link">Volver al inicio</a>
      </div>
    `;
  }
} else {
  mostrarDetalle(ciudadGuardada);
  mostrarPronostico(ciudadGuardada.pronostico);
}

function mostrarDetalle(ciudad) {
  if (!contenedorDetalle) return;

  const iconoActual = ciudad.icono || obtenerIcono(ciudad.estado);

  contenedorDetalle.innerHTML = `
    <article class="weather-detail__card">
      <div class="row g-0 align-items-center">
        <div class="col-12 col-lg-5">
          <img
            src="${ciudad.imagen}"
            alt="Vista de ${ciudad.nombre}"
            class="weather-detail__image"
          />
        </div>

        <div class="col-12 col-lg-7">
          <div class="weather-detail__content">
            <div class="weather-detail__top">
              <h3 class="weather-detail__title">${ciudad.nombre}</h3>
              <img
                src="${iconoActual}"
                alt="Ícono del clima ${ciudad.estado}"
                class="weather-detail__icon"
              />
            </div>

            <p class="weather-detail__temp">Temperatura actual: ${ciudad.temperatura}°C</p>
            <p class="weather-detail__status">Estado: ${ciudad.estado}</p>

            <div class="weather-detail__meta">
              <p class="weather-detail__humidity">Humedad: ${ciudad.humedad}%</p>
              <p class="weather-detail__wind">Viento: ${ciudad.viento} km/h</p>
            </div>

            <div class="weather-detail__actions">
              <a href="index.html" class="weather-detail__button btn btn-primary">
                Volver al inicio
              </a>
            </div>
          </div>
        </div>
      </div>
    </article>
  `;
}

function mostrarPronostico(pronostico) {
  if (!contenedorPronostico) return;

  contenedorPronostico.innerHTML = "";

  pronostico.forEach((dia) => {
    const iconoDia = dia.icono || obtenerIcono(dia.estado);

    const columna = document.createElement("div");
    columna.className = "col-12 col-sm-6 col-lg-4 col-xl-3";

    columna.innerHTML = `
      <article class="forecast-card">
        <div class="forecast-card__body">
          <h3 class="forecast-card__day">${dia.dia}</h3>

          <img
            src="${iconoDia}"
            alt="Ícono del clima ${dia.estado}"
            class="forecast-card__icon"
          />

          <p class="forecast-card__temp forecast-card__temp--max">Máx: ${dia.max}°C</p>
          <p class="forecast-card__temp forecast-card__temp--min">Mín: ${dia.min}°C</p>
          <p class="forecast-card__status">${dia.estado}</p>
        </div>
      </article>
    `;

    contenedorPronostico.appendChild(columna);
  });
}