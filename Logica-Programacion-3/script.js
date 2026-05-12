// PROGRAMA PARA CALCULAR FACTORIAL


// Variable que guardará el número ingresado por el usuario
let numero;


// Se repetirá hasta que el usuario escriba un número válido
while (true) {

    // Number() convierte el dato ingresado a tipo number
    numero = Number(prompt("Ingresa un número para calcular su factorial:"));

    
    // isNaN() verifica si el dato NO es un número
    if (!isNaN(numero) && numero >= 0) {

        // Si el dato es válido, el ciclo termina
        break;

    } else {

        // Mensaje de error si el usuario escribe texto u otro dato inválido
        alert("Error: Debes ingresar un número válido mayor o igual a 0");

    }
}


// Variable donde guardamos el resultado
let factorial = 1;


// Para calcular el factorial
// Empieza en 1 y termina en el número ingresado
for (let i = 1; i <= numero; i++) {

    // Multiplicamos el resultado acumulado por el número actual
    factorial = factorial * i;
}


// Mostrar el resultado en consola
console.log("El factorial de " + numero + " es: " + factorial);


// Mostrar el resultado en la página
document.write("<h2>El factorial de " + numero + " es: " + factorial + "</h2>");