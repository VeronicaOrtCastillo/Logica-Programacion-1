//Funcion para realizar la conversion
function convertirTemperatura(celsius){
    //validacion para saber si el valor NO es numero
    if (isNaN(celsius)){
        return "Ingresa un numero válido";
    }

    //conversion a Fahrenheit
    let fahrenheit = (celsius * 9/5) + 32;
    //conversion a Kelvin
    let kelvin = celsius + 273.15;

    //retornamos los resultados
    return "Kelvin: " + kelvin.toFixed(2) + " | Fahrenheit: " + fahrenheit.toFixed(2);
}