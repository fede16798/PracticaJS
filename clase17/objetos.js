let empanadas = [
    {
        id: 1,
        nombre: "carne",
        precio: 100
    },
    {
        id: 2,
        nombre: "jyq",
        precio: 105
    },
    {
        id: 3,
        nombre: "verdura",
        precio: 110
    },
    {
        id: 4,
        nombre: "humita",
        precio: 120
    },
]

// e = elemento (puede llevar el nombre que yo quiera, 
//pero se acostumbra a poner eso)
const idPrecio = empanadas.map(e => [
    e.id , e.precio
]);
console.log(idPrecio);

/*
const precios = empanadas.map(e =>e.precio);

let sumaPrecios = 0;
for (let i = 0 ; i < precios.length ; i++){
    sumaPrecios += precios[i];
}
console.log("El precio promedio es " + (sumaPrecios/precios.length));*/

//reduce ---> devuelve solo un elemento o numero
/*
let numeros = [1,2,3];

let reducido = numeros.reduce((acumulador , elemento) => acumulador + elemento ,50);
console.log(reducido);*/

let precioSumados = empanadas.reduce((acumulador, emp) => acumulador + emp.precio, 0);
console.log("el precio promedio es " + (precioSumados/empanadas.length));