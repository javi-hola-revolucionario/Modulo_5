// Una app en js que consulte unapi publica con fetch
// procese la respuesta en JSON
// maneje los errores
// combinar varias peticiones encadenadas o en paralelo con promise.all


    fetch  ("https://pokeapi.co/api/v2/pokemon/squirtle")
    .then((response) => {
        console.log("Funciono!", response.status)
        return response.json();
    })
    
    .then(json => {
        console.log(json.name)
    })
    
    .catch(error => {
        console.log("Hubo un error: ", error)
    });
