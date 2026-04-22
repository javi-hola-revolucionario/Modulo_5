//PROYECTO DEL DÍA — App que consulta una API
//=============================================
// Objetivo: construir una mini app de consola que:
//   1) consulta una API pública (JSONPlaceholder)
//   2) lista los primeros 5 usuarios
//   3) para cada usuario, muestra cuántos posts tiene
//   4) maneja errores si algo falla
//Se puede hacer con fetch o axios. Aquí va con fetch
//para que quede 100% estándar sin dependencias.


fetch("https://jsonplaceholder.typicode.com/todos/1")
  .then((response) => {
    console.log("Funciono, status:", response.status);
    return response.json();
  })
  .then(json => {
    console.log('===================================')
    console.log('DATOS ENCONTRADOS')
    console.log('UserId: ',json.userId)
    console.log('id: ', json.id)
    console.log('title: ', json.title)
    console.log('completed: ', json.completed)
})
    .catch(error => {
         console.log("Error: ", error)
});

