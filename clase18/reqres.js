function fetchData() {
    fetch("https://reqres.in/api/users")
    .then(response => {
      console.log(response);
      return response.json();
    })
    .then(usuarios => {
      console.log(usuarios.data)
      const html = usuarios.data
      .map(user => {
        return `
        <div class="usuario">
        <p> Nombre: ${user.first_name}</p>
        <img src=${user.avatar} alt="${user.first_name}"/>
        <p> Email: ${user.email}</p>
        </div>
        `
        }).join(" ")
      
      console.log(html)
      let elemento = document.querySelector("#app");
      elemento.insertAdjacentHTML("afterbegin", html)
    }).catch(error => {
      console.log(error);
    })
  }

fetchData();