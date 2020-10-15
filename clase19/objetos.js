class User {
    nombre = "default";
    apellido = "default";
    edad = 99;
    instrumentosEjecutados = [];

    presentacion() {
        return `Hola soy ${this.nombre} ${this.apellido}`;
    }

    //Crear constuctor
    constructor(nombre="default", apellido="default", edad=99, instrumentosEjecutados=[]){
        this.nombre = nombre;
        this.apellido = apellido;
        this.edad = edad;
        this.instrumentosEjecutados = instrumentosEjecutados;
    }

}

const user1 = new User("Matias", "Perez" , 30 , ["batería" , "arpa"]);

console.log(user1.presentacion());
//FOR IN
for (let prop in user1) {
    console.log(`Propiedad: ${prop} = ${user1[prop]}`);
}
//FOR OF
let iterable =[10,20,30];
for (let value of iterable) {
    console.log(value);
}


const usuario = {
    nombre: "Juan",
    apellido: "Perez",
    edad: 30,
    instrumentosEjecutados: ["violin", "piano", "viola"],
    presentacion: function(){
        return `Hola soy ${this.nombre} ${this.apellido}`;
    }
}

console.log(usuario.nombre);

console.log(usuario.presentacion());

const otroUsuario = {};
otroUsuario.nombre = "Federico",
otroUsuario.apellido = "Rodriguez",
otroUsuario.edad = 22,
otroUsuario.instrumentosEjecutados = ["Guitarra", "Flauta"]
otroUsuario.presentacion = function(){
    return `Hola soy ${this.nombre} ${this.apellido}`;
}

console.log(otroUsuario.nombre);

console.log(otroUsuario.presentacion());