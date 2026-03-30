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
} else {
    //Debe analizar los números, identificar cual es el número mayor, el número del centro y el número menor.
    //Se declaran las variables donde se guardaran los resultados
    let mayor;
    let menor;
    let medio;

    //Se identifica el numero mayor
    //se evalua el numero 1
    if (num1 >= num2 && num1 >= num3){
        mayor = num1;

     //Se evalua el numero 2   
    }else if (num2 >= num1 && num2 >= num3){
        mayor = num2;

     //Si no se cumplen con las anteriores,entonces se determina que es num3   
    }else{
        mayor = num3;
    }

    //Se identifica el numero menor
    //se evalua el numero 1
    if (num1 <= num2 && num1 <= num3){
        menor = num1;

     //Se evalua el numero 2   
    }else if (num2 <= num1 && num2 <= num3){
        menor = num2;

     //Si no se cumplen las anteriores, entonces se determina que es num3   
    }else{
        menor = num3;
    }

    //Se identifica el numero medio
    //Utilizare || porque estare utilizando dos condiciones
    if (
        //si num1 esta entre num2 y num3
        (num1 >= num2 && num1 <= num3) || (num1 <= num2 && num1 >= num3)
    ){
        medio = num1;
     //Si num2 esta entre num1 y num3
    }else if (
        (num2 >= num1 && num2 <= num3) || (num2 <= num1 && num2 >= num3)
    ){
        medio = num2;
    //Al no ser num1,ni num2, entonces es num3    
    }else{
        medio = num3
    }

    //Debe imprimir los números por consola o por el DOM ordenados de mayor a menor, y de menor a mayor.
    //Se muestra de mayor a menor
    console.log("Se muestran los numero en orden de mayor a menor -> ", mayor, medio, menor);
    //Se muestra de menor a mayor
    console.log("Se muestran los numero en orden de menor a mayor -> ", menor, medio, mayor);

}