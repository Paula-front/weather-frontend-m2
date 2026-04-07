const ciudades = [
  {
    id: 1,
    nombre: "Arica",
    temperatura: 23,
    estado: "Despejado a nublado",
    humedad: "62%",
    viento: "18 km/h",
    imagen: "assets/img/ciudades/arica.jpg",
    pronostico: [
      { dia: "Martes", min: 22, max: 26, estado: "Cubierto a despejado" },
      { dia: "Miércoles", min: 22, max: 26, estado: "Nublado a parcial" },
      { dia: "Jueves", min: 21, max: 25, estado: "Parcial a despejado" },
      { dia: "Viernes", min: 21, max: 26, estado: "Parcial a despejado" },
      { dia: "Sábado", min: 21, max: 25, estado: "Despejado" }
    ]
  },
  {
    id: 2,
    nombre: "Antofagasta",
    temperatura: 18,
    estado: "Nublado",
    humedad: "64%",
    viento: "19 km/h",
    imagen: "assets/img/ciudades/antofagasta.jpg",
    pronostico: [
      { dia: "Martes", min: 17, max: 21, estado: "Cubierto a despejado" },
      { dia: "Miércoles", min: 16, max: 21, estado: "Despejado" },
      { dia: "Jueves", min: 16, max: 21, estado: "Despejado a parcial" },
      { dia: "Viernes", min: 16, max: 22, estado: "Parcial" },
      { dia: "Sábado", min: 16, max: 21, estado: "Despejado con viento" }
    ]
  },
  {
    id: 3,
    nombre: "La Serena",
    temperatura: 13,
    estado: "Parcial",
    humedad: "87%",
    viento: "15 km/h",
    imagen: "assets/img/ciudades/la-serena.jpg",
    pronostico: [
      { dia: "Martes", min: 11, max: 18, estado: "Nublado a parcial" },
      { dia: "Miércoles", min: 12, max: 15, estado: "Cubierto" },
      { dia: "Jueves", min: 11, max: 16, estado: "Cubierto a parcial" },
      { dia: "Viernes", min: 10, max: 17, estado: "Parcial a despejado" },
      { dia: "Sábado", min: 11, max: 18, estado: "Despejado" }
    ]
  },
  {
    id: 4,
    nombre: "Valparaíso",
    temperatura: 14,
    estado: "Despejado",
    humedad: "52%",
    viento: "25 km/h",
    imagen: "assets/img/ciudades/valparaiso.jpg",
    pronostico: [
      { dia: "Martes", min: 10, max: 22, estado: "Despejado con viento" },
      { dia: "Miércoles", min: 12, max: 19, estado: "Parcial a nublado" },
      { dia: "Jueves", min: 11, max: 17, estado: "Cubierto" },
      { dia: "Viernes", min: 12, max: 16, estado: "Cubierto a nublado" },
      { dia: "Sábado", min: 12, max: 17, estado: "Parcial" }
    ]
  },
  {
    id: 5,
    nombre: "Santiago",
    temperatura: 14,
    estado: "Despejado",
    humedad: "85%",
    viento: "2 km/h",
    imagen: "assets/img/ciudades/santiago.jpg",
    pronostico: [
      { dia: "Martes", min: 9, max: 29, estado: "Despejado" },
      { dia: "Miércoles", min: 11, max: 27, estado: "Despejado" },
      { dia: "Jueves", min: 9, max: 26, estado: "Despejado" },
      { dia: "Viernes", min: 10, max: 27, estado: "Despejado" },
      { dia: "Sábado", min: 9, max: 24, estado: "Parcial" }
    ]
  },
  {
    id: 6,
    nombre: "Talca",
    temperatura: 20,
    estado: "Despejado",
    humedad: "50%",
    viento: "8 km/h",
    imagen: "assets/img/ciudades/talca.jpg",
    pronostico: [
      { dia: "Martes", min: 9, max: 23, estado: "Neblina a despejado" },
      { dia: "Miércoles", min: 9, max: 22, estado: "Parcial" },
      { dia: "Jueves", min: 7, max: 24, estado: "Nublado a despejado" },
      { dia: "Viernes", min: 8, max: 24, estado: "Parcial a despejado" },
      { dia: "Sábado", min: 9, max: 23, estado: "Nublado a despejado" }
    ]
  },
  {
    id: 7,
    nombre: "Concepción",
    temperatura: 14,
    estado: "Despejado",
    humedad: "52%",
    viento: "17 km/h",
    imagen: "assets/img/ciudades/concepcion.jpg",
    pronostico: [
      { dia: "Martes", min: 9, max: 20, estado: "Parcial a despejado" },
      { dia: "Miércoles", min: 9, max: 17, estado: "Nublado a despejado" },
      { dia: "Jueves", min: 8, max: 18, estado: "Parcial a despejado" },
      { dia: "Viernes", min: 8, max: 18, estado: "Parcial a despejado" },
      { dia: "Sábado", min: 10, max: 15, estado: "Nublado" }
    ]
  },
  {
    id: 8,
    nombre: "Valdivia",
    temperatura: 8,
    estado: "Despejado",
    humedad: "56%",
    viento: "6 km/h",
    imagen: "assets/img/ciudades/valdivia.jpg",
    pronostico: [
      { dia: "Martes", min: 6, max: 19, estado: "Despejado a parcial" },
      { dia: "Miércoles", min: 7, max: 20, estado: "Nublado a despejado" },
      { dia: "Jueves", min: 6, max: 19, estado: "Parcial" },
      { dia: "Viernes", min: 6, max: 22, estado: "Parcial a despejado" },
      { dia: "Sábado", min: 10, max: 16, estado: "Lluvia" }
    ]
  },
  {
    id: 9,
    nombre: "Puerto Montt",
    temperatura: 9,
    estado: "Despejado",
    humedad: "69%",
    viento: "18 km/h",
    imagen: "assets/img/ciudades/puerto-montt.jpg",
    pronostico: [
      { dia: "Martes", min: 8, max: 16, estado: "Llovizna a despejado" },
      { dia: "Miércoles", min: 9, max: 15, estado: "Nublado a despejado" },
      { dia: "Jueves", min: 6, max: 14, estado: "Parcial" },
      { dia: "Viernes", min: 5, max: 19, estado: "Parcial" },
      { dia: "Sábado", min: 9, max: 15, estado: "Lluvia" }
    ]
  },
  {
    id: 10,
    nombre: "Punta Arenas",
    temperatura: 8,
    estado: "Viento y nubes",
    humedad: "59%",
    viento: "30 km/h",
    imagen: "assets/img/ciudades/punta-arenas.jpg",
    pronostico: [
      { dia: "Martes", min: 6, max: 11, estado: "Viento y lluvia" },
      { dia: "Miércoles", min: 8, max: 11, estado: "Lluvia y viento" },
      { dia: "Jueves", min: 8, max: 11, estado: "Lluvia y viento fuerte" },
      { dia: "Viernes", min: 4, max: 9, estado: "Chubascos" },
      { dia: "Sábado", min: 4, max: 8, estado: "Lluvia" }
    ]
  }
];