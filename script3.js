


const tempinCelsius = prompt("Kokia yra temperatura matuojant Celcijum ?");

function celsiusToFahrenheit(temp) {

    const fahrenheit = ((temp * 1.8) + 32);
    return fahrenheit
 
}
let tempinFarenheit = celsiusToFahrenheit(tempinCelsius);
console.log(tempinFarenheit);





