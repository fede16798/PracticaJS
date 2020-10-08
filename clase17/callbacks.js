let array = ["a","b","c","d"];

const f = function(e){
    console.log(e);
}

array.forEach(f);

array.forEach( (e) => console.log(e));

const f2 = function(e, i){
    console.log(e,"->", i);
}

array.forEach(f2);
array.forEach((e , i) => console.log(e,"->",i));

const funcEvery = function (e) {
    if(e.lenght == 1) return true;
    else return false;
}

console.log(array.every(funcEvery));

//lo contrario a every es some

console.log(array.some(funcEvery));


//MAP ---> devuelve la misma cantidad de elementos que el array original
const numero = [1,2,3,4,5];
const multiplicado = numero.map( item => item*2);

console.log(multiplicado);

const parejas = numero.map(item => [item, item*2]);
console.log(parejas);

