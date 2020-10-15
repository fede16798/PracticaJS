/*FETCH */
const api_url = 'https://api.wheretheiss.at/v1/satellites/25544';

async function getPosition() {
    const response = await fetch (api_url); //dentro del fetch se pone la url de donde se van a buscar los datos
    const data = await response.json();

    const { latitude, longitude, velocity, units } = data;

    console.log(latitude);
    console.log(longitude);
    console.log(velocity);
    console.log(units);

    document.getElementById('lat').textContent = latitude;
    document.getElementById('lon').textContent = longitude;
    document.getElementById('vel').textContent = velocity + units;

}
    
getPosition();

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


const getEmpanadasAsync = () => {
    return new Promise ((resolve, reject) => {
        setTimeout(() => {
            resolve (empanadas);
        }, 1500);
    });
}

async function fetchinEmpanadas() {
    const getEmpanadasConAwait = await getEmpanadasAsync();
    console.log(getEmpanadasConAwait);
}

//fetchinEmpanadas();