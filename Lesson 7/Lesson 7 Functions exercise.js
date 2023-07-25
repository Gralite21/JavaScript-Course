function greet (name){
    if (!name){
        console.log('Hello there!');
    }else {
        console.log(`Hello ${name}!`);
    }
}

greet();
greet('Dominik');

function welcome (name){
    console.log(`Hello ${name}!`);
}

welcome('Tim');
/* function convertFahrenheit (Celsius){
  console.log(`${Celsius} Celsius is ${(Celsius*9/5)+32} Fahrenheit`);
}

convertFahrenheit(25); */

function convertToFahrenheit(celsius) {
    return (celsius*9/5)+32;
}

console.log(convertToFahrenheit(25));

function convertToCelsius (fahrenheit) {
    return(fahrenheit-32)*5/9;
}
console.log(convertToCelsius(86));

function convertTemperature (degrees,unit){           //early return
    if (unit==='C'){
        return convertToFahrenheit(degrees)+'F';  // String Concatenation
    }else {
        return `${convertToCelsius(degrees)}C`;  //With Interpolation
    }
}

function gibmireinepositiveZahl (zahl){
    if (Zahl<0){
        return'Fehler:Zahl ist kleiner als null'   // cancel rest of the code and gives me the first return
    }

    return gibmireinepositiveZahl();
}

console.log(convertTemperature(25,'C'));          // shows the returned value in the console
console.log(convertTemperature(86,'F'));


