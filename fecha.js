// Obtiene el elemento donde se mostrará la fecha
const fechaElemento = document.getElementById("fecha");

// Obtiene la fecha actual
const fechaActual = new Date();

// Array de nombres de los días de la semana en español
const diasSemana = [
  "Domingo",
  "Lunes",
  "Martes",
  "Miércoles",
  "Jueves",
  "Viernes",
  "Sábado",
];

// Array de nombres de los meses en español
const meses = [
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre",
];

// Obtiene el nombre del día de la semana
const diaSemana = diasSemana[fechaActual.getDay()];

// Obtiene el día del mes
const dia = fechaActual.getDate();

// Obtiene el nombre del mes
const mes = meses[fechaActual.getMonth()];

// Construye la cadena de fecha
const fechaFormateada = ` ${diaSemana} ${dia} de ${mes}`;

// Muestra la fecha en el elemento correspondiente
fechaElemento.textContent = fechaFormateada;
