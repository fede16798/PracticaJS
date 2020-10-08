let array = ["a", "b", "c"];
array.push("d");

console.log(array);

array.pop();
console.log(array);

array.unshift("z");
console.log(array);

array.shift();
console.log(array);


let a = [1,2,3];
let b = [4,5,6];

let concatenado = [].concat(a,b);
console.log(concatenado);

//slice no modifica el original
let array1 = [10,20,30,40,50,60,70,80,90,100];
console.log(array1.slice(5,7));

console.log(array1.slice(5));

//splice SI modifica el array original
let array2 = [10,20,30,40,50,60,70,80,90,100];
let array3 = array2.splice(2,7);
console.log(array2);
console.log(array3);

let array4 = [10,20,30,40,50,60,70,80,90,100];
let array5 = array4.splice(2,0,"A");
console.log(array4);

let array6 = array4.splice(5,1,"c");
console.log(array4);
console.log(array6);

let array7 = [10,20,30,40,50,60,70,80,90,100];
console.log(array7.join(" - "));

let frase = "hola como andas";
console.log(frase.split(""));

let array8 = [1,2,3,4,5];
array8.fill("a",1,3);
console.log(array8);

//sort
let arrayNombres = ["juan", "fede", "emi", "zane"];
console.log(arrayNombres.sort());

let arrayNumeros = [5,6,32,10];
console.log(arrayNumeros.sort());

const fc = function(a,b){
    return a-b;
}

console.log(arrayNumeros.sort(fc));