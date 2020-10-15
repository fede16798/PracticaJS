/*Realizar una función, a la que se le pase como parámetro un número N, y muestre
por consola N veces, el siguiente mensaje: “Bienvenidos al curso Full Stack”*/
function showMessage(num){
    for (let i = 0; i < num; i++) {
        console.log("Bienvenidos al curso Full Stack");
    }
}

/*Diseñar una función que tenga como parámetros dos números, y que calcule el máximo. */
function calcularMax (num, num1){
    let max = num > num1? num : num1;
    console.log(`El numero maximo es ${max}`);
    return max;
}

/*Crear una función que se llame promedio3, que reciba como parámetro tres valores y devuelva el promedio de los mismos.*/
function promedio3 (num, num2, num3){
    const cantidadNumeros = 3;
    return ((num + num2 + num3) / cantidadNumeros);
}

/*Una función que se llame siguiente, que reciba como parámetro un valor entero, y 
devuelva el siguiente del número ingresado como parámetro*/
function siguiente (num){
    num++;
    return num;
}

const next = e => e++;

/*Una función que se llame doble, que reciba como parámetro un valor, y devuelva el
doble del número ingresado como parámetro.*/
function doble (num){
    return num*2;
}

const dobleV2 = (e) => e*2;

/*Una función que se llame cuadrado, que reciba como parámetro un valor, y devuelva el
valor del numero ingresado como parámetro elevado al cuadrado.*/
function cuadrado (num){
    return num*num;
}

/*Una función que se denomine imprimirValores que dado un número por parámetro,
imprima cual es el valor siguiente, el doble y el cuadrado. Usando las funciones definidas
en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado.*/
function imprimirValores (num){
    console.log(siguiente(num));
    console.log(doble(num));
    console.log(cuadrado(num));
}

/*Una función que se denomine imprimirElDobleDelSiguiente que dado un número por
parámetro, imprima cual es el valor siguiente al el doble. Usando las funciones definidas
en los puntos 5) , 6) : siguiente, el doble .*/
function imprimirElDobleDelSiguiente (num) {
    num = doble(num);
    num = siguiente(num);
    console.log(num);
}

/*Una función que se denomine imprimirElDobleDelSiguienteAlCuadrado que dado un
número por parámetro, imprima cual es el valor siguiente al el doble del cuadrado. Usando las
funciones definidas en los puntos 5) , 6) y 7) : siguiente, el doble y el cuadrado*/
function imprimirElDobleDelSiguienteAlCuadrado (num) {
    num = cuadrado(num);
    num = doble(num);
    num = siguiente(num);
    console.log(num);
}

/*una función que dado la longitud de un lado de un cuadrado devuelva el perímetro*/
const perim = e => e*4;

function perimetro (lado){
    return lado*4;
}

/*una función que dado la longitud de un lado de un cuadrado devuelva la superficie.*/
const sup = lado => lado*lado;

function superficie (lado){
    return lado*lado;
}

/*una función que dado el radio de una círculo devuelva la circunferencia ( perimetro del circulo)*/
const circunf = r => ((r*2)*Math.PI);

const circunferencia = function (radio){
    return radio*2*Math.PI;
}

/*una función que dado el radio de una círculo devuelva el area del circulo*/
const area = function (radio){
    return ((radio*radio)*Math.PI);
}

const ar = r => {
    return (r*r)*Math.PI;
}

/* una función que dado un número de mes y me devuelva la cantidad de días de ese
mes(suponiendo que no es un año bisiesto)*/

const diasXMes = mes => {
    return new Date (2019, mes, 0).getDate();
}

/*Una función que reciba como parámetro un año y diga si ese año es bisiesto (googlear cuando un año es bisiesto)*/
const anoBisiesto = ano => {
    if((new Date (ano, 1, 0).getDate()) == 29){
        return true;
    } else {
        return false;
    }
}

/*una función que reciba el dia, mes y año y me devuelva la cantidad de días de ese mes*/
const diaXMesXano = (dia,mes,ano) => {
    return new Date (ano, mes, 0).getDate();
}

/*una función que reciba dia,mes y año y devuelva el dia siguiente*/
const diaSiguiente = (dia,mes,ano) => {
    let diaSemanal = new Date (ano, mes-1, dia+1).getDay();
    switch(diaSemanal){
        case 0: 
            return "Domingo";
            break;
        case 1: 
            return "Lunes";
            break;
        case 2: 
            return "Martes";
            break;
        case 3: 
            return "Miercoles";
            break;
        case 4: 
            return "Jueves";
            break;
        case 5: 
            return "Viernes";
            break;
        case 6: 
            return "Domingo";
            break;
        default: 
            return "error";
            break;    
    }
}

/*Una función que reciba dia,mes y año y devuelva el dia anterior*/
const diaAnterior = (dia,mes,ano) => {
    let diaa = new Date (ano, mes-1, dia-1).getDay();
    switch(diaa){
        case 0: 
            return "Domingo";
            break;
        case 1: 
            return "Lunes";
            break;
        case 2: 
            return "Martes";
            break;
        case 3: 
            return "Miercoles";
            break;
        case 4: 
            return "Jueves";
            break;
        case 5: 
            return "Viernes";
            break;
        case 6: 
            return "Sabado";
            break;
        default: 
            return "error";
            break;    
    }
}

/*una función que se llame ultimoDiaDelMes que reciba díia,mes y año y devuelva el último día del mes*/
const ultimoDiaDelMes = (dia,mes,ano) => {
    var date = new Date(ano, mes-1, dia);
    var lastDay = new Date(date.getFullYear(), date.getMonth() + 1, 0);
    return lastDay.getDate();
}

