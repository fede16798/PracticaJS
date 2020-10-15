/*cree un array con todas las edades de los estudiantes de su clase. Itere el array
utilizando un bucle while y luego imprima todas las edades en la consola. */
let edades = [21,95,22,30,45,21,21,18,33,34,29,39,20,50,47];

const recorrerEdades = (lista) => {
    let i = 0;
    while (i < lista.length) {
        console.log(lista[i]);
        i++;
    }
}

/*Al ejercicio 1 agregue un condicional dentro del ciclo while para imprimir solo
números pares. Cambie el ciclo para usar un ciclo "for" en lugar de un ciclo "while".*/
const listarEdadesPares = lista => {
    for (let i = 0; i < lista.length; i++) {
        if(lista[i]%2 == 0)
            console.log(lista[i]);
    }
}

/*escriba una función que reciba un array como parámetro e imprima el número más bajo de la array en la consola.*/
const mostrarNumeroMasBajo = lista => {
    let menor = Number.MAX_VALUE;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] < menor)
            menor = lista[i];
    }
    console.log(`La edad mas baja es ${menor}`);
}

const numeroMasBajoConSort = lista => {
    lista = lista.sort();
    console.log(lista[0]);
}

/*escriba una función que reciba un array como parámetro e imprima el número más grande de la array en la consola.*/
const mostrarNumeroMasAlto = lista => {
    let mayor = Number.MIN_VALUE;
    for (let i = 0; i < lista.length; i++) {
        if(lista[i] > mayor)
            mayor = lista[i];
    }
    console.log(`La edad mas alta es ${mayor}`);
}

const numeroMasAltoConSort = lista => {
    lista = lista.sort();
    console.log(lista[lista.length -1]);
}

/*Escriba una función que reciba dos parámetros, una array y un índice. La
función imprimirá el valor del elemento en la posición dada (basado en uno) en la consola.*/
const imprimirPosicion = (lista, indice) => {
    console.log(lista[indice]);
}

/*Escriba una función que reciba una array y solo imprima los valores que se repiten. */
const mostrarValoresRepetidos = (lista) => {
    let valueAnt;
    lista = lista.sort();
    let valoresRepetidos = [];
    for (let i = 0; i < lista.length; i++) {
        if( lista[i] != valueAnt ){
            if (lista[i] == lista[i+1]) {
                valoresRepetidos.push(lista[i]);
                valueAnt = lista[i];
            }
        }
    }
    console.log(valoresRepetidos);
}

/*escriba una función de JavaScript simple para unir todos los elementos de la siguiente array en una cadena*/
const unirElemenos = (lista) => {
    console.log(lista.join(","));
}

/*escriba una función de JavaScript que invierta un número. Por ejemplo, si x = 32443, la salida debería ser 34423.*/
const invertirNumero = numero => numero.reverse();


/*escriba una función de JavaScript que devuelva una cadena en orden alfabético.
Por ejemplo, si x = 'webmaster', la salida debería ser 'abeemrstw'. La puntuación y los
números no se pasan en la cadena.*/
const invertirCadena = cadena => cadena.split("").reverse().join("");
let a = 32443;  

/*escriba una función de JavaScript que convierta la primera letra de cada palabra
a mayúsculas. Por ejemplo, si x = "prince of persia", la salida debería ser "Prince Of Persia".*/
let palabra = "prince of persia";

function reemplazar(palabra){
    return palabra.replace(/\b[a-z]/g,c=>c.toUpperCase());
}

const reem = palabra => palabra.replace(/\b[a-z]/g,c=>c.toUpperCase());
palabra = reemplazar(palabra);

/* escriba una función de JavaScript que busque la palabra más larga de una frase.
Por ejemplo, si x = "Tutorial de desarrollo web", el resultado debería ser "Desarrollo".*/
let z = "Tutorial de desarrollo web";
const palabraMasLarga = frase => {
    palabras = frase.split(" ");
    let palabraMayor = palabras[0];
    palabras.forEach(element => {
        if(element.length > palabraMayor.length){
            palabraMayor = element;
        }
    });
    palabraMayor = reem(palabraMayor);
    return palabraMayor;
}