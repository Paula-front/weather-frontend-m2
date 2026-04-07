const ciudades = [
  {
    id: 1,
    nombre: "Arica",
    temperatura: 23,
    estado: "Algunas nubes",
    humedad: "62%",
    viento: "18 km/h",
    icono: "assets/img/clima/parcialmente-nublado.png",
    imagen: "assets/img/ciudades/arica.jpg",
    pronostico: [
      { dia: "Lunes", max: 26, min: 20, estado: "Nubes y algo de sol" },
      { dia: "Martes", max: 27, min: 20, estado: "Soleado a parcial" },
      { dia: "Miércoles", max: 27, min: 18, estado: "Parcialmente soleado" },
      { dia: "Jueves", max: 27, min: 18, estado: "Parcialmente soleado" },
      { dia: "Viernes", max: 26, min: 19, estado: "Nubes y sol" },
      { dia: "Sábado", max: 26, min: 19, estado: "Nubes y sol" },
      { dia: "Domingo", max: 26, min: 18, estado: "Soleado" }
    ]
  },
  {
    id: 2,
    nombre: "Antofagasta",
    temperatura: 19,
    estado: "Despejado",
    humedad: "64%",
    viento: "19 km/h",
    icono: "assets/img/clima/soleado.png",
    imagen: "assets/img/ciudades/antofagasta.jpg",
    pronostico: [
      { dia: "Lunes", max: 22, min: 16, estado: "Soleado" },
      { dia: "Martes", max: 21, min: 16, estado: "Mayormente soleado" },
      { dia: "Miércoles", max: 21, min: 16, estado: "Mayormente soleado" },
      { dia: "Jueves", max: 20, min: 16, estado: "Parcialmente soleado" },
      { dia: "Viernes", max: 20, min: 15, estado: "Mayormente soleado" },
      { dia: "Sábado", max: 21, min: 15, estado: "Mucho sol" },
      { dia: "Domingo", max: 20, min: 16, estado: "Mucho sol" }
    ]
  },
  {
    id: 3,
    nombre: "La Serena",
    temperatura: 14,
    estado: "Despejado",
    humedad: "87%",
    viento: "15 km/h",
    icono: "assets/img/clima/soleado.png",
    imagen: "assets/img/ciudades/la-serena.jpg",
    pronostico: [
      { dia: "Lunes", max: 17, min: 11, estado: "Nubes y algo de sol" },
      { dia: "Martes", max: 18, min: 11, estado: "Soleado" },
      { dia: "Miércoles", max: 18, min: 12, estado: "Soleado a parcial" },
      { dia: "Jueves", max: 18, min: 12, estado: "Algunas nubes y luego sol" },
      { dia: "Viernes", max: 18, min: 12, estado: "Soleado" },
      { dia: "Sábado", max: 19, min: 12, estado: "Mucho sol" },
      { dia: "Domingo", max: 20, min: 12, estado: "Parcialmente soleado" }
    ]
  },
  {
    id: 4,
    nombre: "Valparaíso",
    temperatura: 15,
    estado: "Despejado",
    humedad: "52%",
    viento: "25 km/h",
    icono: "assets/img/clima/soleado.png",
    imagen: "assets/img/ciudades/valparaiso.jpg",
    pronostico: [
      { dia: "Lunes", max: 19, min: 11, estado: "Mucho sol" },
      { dia: "Martes", max: 22, min: 9, estado: "Mucho sol" },
      { dia: "Miércoles", max: 19, min: 8, estado: "Mucho sol" },
      { dia: "Jueves", max: 16, min: 8, estado: "Mayormente soleado" },
      { dia: "Viernes", max: 15, min: 12, estado: "Parcialmente soleado" },
      { dia: "Sábado", max: 17, min: 8, estado: "Nubes y algo de sol" },
      { dia: "Domingo", max: 20, min: 9, estado: "Mayormente nublado" }
    ]
  },
  {
    id: 5,
    nombre: "Santiago",
    temperatura: 20,
    estado: "Despejado",
    humedad: "85%",
    viento: "2 km/h",
    icono: "assets/img/clima/soleado.png",
    imagen: "assets/img/ciudades/santiago.jpg",
    pronostico: [
      { dia: "Lunes", max: 25, min: 9, estado: "Mucho sol" },
      { dia: "Martes", max: 29, min: 9, estado: "Sol radiante" },
      { dia: "Miércoles", max: 27, min: 9, estado: "Sol radiante" },
      { dia: "Jueves", max: 26, min: 8, estado: "Mucho sol" },
      { dia: "Viernes", max: 25, min: 12, estado: "Mucho sol" },
      { dia: "Sábado", max: 23, min: 8, estado: "Parcialmente soleado" },
      { dia: "Domingo", max: 25, min: 8, estado: "Mayormente nublado" }
    ]
  },
  {
    id: 6,
    nombre: "Talca",
    temperatura: 20,
    estado: "Despejado",
    humedad: "50%",
    viento: "8 km/h",
    icono: "assets/img/clima/soleado.png",
    imagen: "assets/img/ciudades/talca.jpg",
    pronostico: [
      { dia: "Lunes", max: 26, min: 8, estado: "Sol y algunas nubes" },
      { dia: "Martes", max: 25, min: 7, estado: "Algunas nubes y luego sol" },
      { dia: "Miércoles", max: 25, min: 7, estado: "Mayormente soleado" },
      { dia: "Jueves", max: 26, min: 7, estado: "Soleado a parcial" },
      { dia: "Viernes", max: 26, min: 10, estado: "Mayormente soleado" },
      { dia: "Sábado", max: 23, min: 10, estado: "Nubes y algo de sol" },
      { dia: "Domingo", max: 24, min: 8, estado: "Nubes y sol" }
    ]
  },
  {
    id: 7,
    nombre: "Concepción",
    temperatura: 17,
    estado: "Despejado",
    humedad: "52%",
    viento: "17 km/h",
    icono: "assets/img/clima/soleado.png",
    imagen: "assets/img/ciudades/concepcion.jpg",
    pronostico: [
      { dia: "Lunes", max: 21, min: 9, estado: "Nublado al comienzo y luego sol" },
      { dia: "Martes", max: 20, min: 9, estado: "Soleado a parcial" },
      { dia: "Miércoles", max: 20, min: 8, estado: "Soleado a parcial" },
      { dia: "Jueves", max: 21, min: 8, estado: "Soleado a parcial" },
      { dia: "Viernes", max: 19, min: 10, estado: "Sol radiante" },
      { dia: "Sábado", max: 17, min: 11, estado: "Nublado" },
      { dia: "Domingo", max: 19, min: 8, estado: "Sol brumoso" }
    ]
  },
  {
    id: 8,
    nombre: "Valdivia",
    temperatura: 15,
    estado: "Despejado",
    humedad: "56%",
    viento: "6 km/h",
    icono: "assets/img/clima/soleado.png",
    imagen: "assets/img/ciudades/valdivia.jpg",
    pronostico: [
      { dia: "Lunes", max: 20, min: 6, estado: "Mayormente soleado" },
      { dia: "Martes", max: 18, min: 7, estado: "Parcialmente soleado" },
      { dia: "Miércoles", max: 19, min: 5, estado: "Parcialmente soleado" },
      { dia: "Jueves", max: 19, min: 6, estado: "Soleado a parcial" },
      { dia: "Viernes", max: 22, min: 9, estado: "Mayormente soleado" },
      { dia: "Sábado", max: 14, min: 4, estado: "Lluvias por períodos" },
      { dia: "Domingo", max: 15, min: 4, estado: "Sol brumoso" }
    ]
  },
  {
    id: 9,
    nombre: "Puerto Montt",
    temperatura: 11,
    estado: "Despejado",
    humedad: "69%",
    viento: "18 km/h",
    icono: "assets/img/clima/soleado.png",
    imagen: "assets/img/ciudades/puerto-montt.jpg",
    pronostico: [
      { dia: "Lunes", max: 14, min: 8, estado: "Nubes y algo de sol" },
      { dia: "Martes", max: 15, min: 10, estado: "Parcialmente soleado" },
      { dia: "Miércoles", max: 13, min: 9, estado: "Parcialmente soleado" },
      { dia: "Jueves", max: 14, min: 7, estado: "Nubes y sol" },
      { dia: "Viernes", max: 16, min: 10, estado: "Aumenta la nubosidad" },
      { dia: "Sábado", max: 14, min: 6, estado: "Algunos chubascos" },
      { dia: "Domingo", max: 15, min: 6, estado: "Nubes y sol" }
    ]
  },
  {
    id: 10,
    nombre: "Punta Arenas",
    temperatura: 9,
    estado: "Algunas nubes",
    humedad: "59%",
    viento: "30 km/h",
    icono: "assets/img/clima/viento.png",
    imagen: "assets/img/ciudades/punta-arenas.jpg",
    pronostico: [
      { dia: "Lunes", max: 12, min: 7, estado: "Ventoso" },
      { dia: "Martes", max: 12, min: 7, estado: "Lluvias y lloviznas" },
      { dia: "Miércoles", max: 11, min: 8, estado: "Chubascos breves" },
      { dia: "Jueves", max: 12, min: 4, estado: "Muy ventoso" },
      { dia: "Viernes", max: 10, min: 4, estado: "Lluvias y lloviznas ocasionales" },
      { dia: "Sábado", max: 9, min: 3, estado: "Algo de lluvia" },
      { dia: "Domingo", max: 11, min: 7, estado: "Algo de lluvia" }
    ]
  }
];