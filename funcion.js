function borrar() {
  let pantalla = document.getElementById("pantalla");
  pantalla.value = pantalla.value.slice(0, -1);
}

function limpiar() {
  document.getElementById("pantalla").value = "";
}
// 🔹 Suma de tres valores ingresados por el usuario
function sumarTresValores() {
  const a = Number(document.getElementById("numA").value);
  const b = Number(document.getElementById("numB").value);
  const c = Number(document.getElementById("numC").value);

  // Validar que los tres campos tengan números válidos
  if (isNaN(a) || isNaN(b) || isNaN(c)) {
    document.getElementById("resultado1").textContent =
      "Por favor, ingresa los tres números.";
    return;
  }

  const suma = a + b + c;
  document.getElementById("resultado1").textContent =
    `La suma de los valores es: ${suma}`;
}


//Cuadrado de un número
function calcularCuadrado() {
  const num = Number(document.getElementById("numCuadrado").value);
  const resultado = num * num;
  document.getElementById("resultado2").textContent =
    `El cuadrado de ${num} es: ${resultado}`;
}

//Promedio de calificaciones
function calcularPromedio() {
  const nombre = document.getElementById("nombreEstudiante").value;
  const n1 = Number(document.getElementById("nota1").value);
  const n2 = Number(document.getElementById("nota2").value);
  const n3 = Number(document.getElementById("nota3").value);

  const promedio = ((n1 + n2 + n3) / 3).toFixed(2);
  document.getElementById("resultado3").textContent =
    `El promedio de ${nombre} es: ${promedio} puntos.`;
}

//Conversión de unidades (metros)
function convertirUnidades() {
  const metros = Number(document.getElementById("valorMetros").value);
  const centimetros = metros * 100;
  const kilometros = metros / 1000;

  document.getElementById("resultado4").textContent =
    `${metros} metros equivalen a ${centimetros.toLocaleString()} centímetros y ${kilometros} kilómetros.`;
}

//Comparación de dos valores
function compararValores() {
  const a = Number(document.getElementById("valorA").value);
  const b = Number(document.getElementById("valorB").value);

  if (a === b) {
    document.getElementById("resultado5").textContent =
      "Los números no pueden ser iguales. Ingrese valores distintos.";
  } else {
    const mayor = Math.max(a, b);
    const menor = Math.min(a, b);
    const diferencia = Math.abs(a - b);
    document.getElementById("resultado5").textContent =
      `El número mayor es ${mayor}, el menor es ${menor}, y su diferencia es ${diferencia}.`;
  }
}
