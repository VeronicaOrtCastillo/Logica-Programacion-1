//Debe solicitar al usuario 3 números por prompt y guardarlos en sus respectivas variables.
let num1 = Number(prompt("Ingresa el primer número: "));
let num2 = Number(prompt("Ingresa el segundo número: "));
let num3 = Number(prompt("Ingresa el tercer número: "));

//Debe ser capaz de identificar si los números son iguales e imprimir un mensaje por consola o por el DOM diciendo que los números son iguales.
//Se realiza primero porque si los numero son iguales no se podra mostrar un numero mayor y uno menor
//Utilizare === y && para comparar los valores de forma exacta
if (num1 === num2 && num2 === num3){
    //Si se cumple mostrara el siguente mensaje
    console.log("Los números "+ num1 + num2 + num3 +" son iguales");
} 