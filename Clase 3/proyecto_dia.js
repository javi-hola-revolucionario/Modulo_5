// Consultar una api publica  
// Listar los primeros 5 usuarios 
// para cada usuario, mostrar cusntos post tiene
// manejar errores si algo falla

const API = "https://jsonplaceholder.typicode.com";

function obtenerUsuario() {
    return fetch(`${API}/users`)
    .then((res) => {
        if (!res.ok(){
            throw new Error("Error al obtener los usuarios");
        }
            return res.json()
    });
}

function obtener Post() {
    return fetch(`${API}/posts`)
    .then
}

obtenerUsuario().then((users) => {
    console.log(users);
}

// ejemplo del profesor