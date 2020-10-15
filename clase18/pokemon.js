 /*FETCH*/

 const direccion = 'https://pokeapi.co/api/v2/pokemon/1';

 const direccion2 = 'https://pokeapi.co/api/v2/pokemon';

 async function obtenerjson(){
   const response = await fetch(direccion);
   const data = await response.json();
   console.log(data.name);

   document.getElementById('primero').innerHTML="<h4>" + data.name + "</4>";

   var divisor = document.getElementById("primero");
   var img = document.createElement("img");
   img.setAttribute("src", data.sprites.front_default);
   divisor.appendChild(img);
 }

 fetch(direccion2).then(function (response) {
   return response.json();
 }).then( function (obj) {
   console.log(obj);
 }).catch(function (error) {
   console.log("fallo al obtener el Pokemon");
 })


 obtenerjson();
