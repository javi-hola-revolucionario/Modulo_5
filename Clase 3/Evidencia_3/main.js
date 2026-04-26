// Una funcion que utilice fetch y mostrar en el div con id-data-container
const btnfetch = document.getElementById('btnfetch');

btnfetch.addEventListener('click', () => {
    fetch('https://swapi.info/api/films/')
    .then(response => {
        if(!response.ok) {
            throw new Error('Error en la solicitud');
        }
        return response.json().then(data => ({
            status:response.status,
            data:data
        }));
    })
    .then(res => mostrarContenido(res))
    .catch(error => {
        console.error ('Error:', error);
    });
});

// Una funcion que use Axios para obtener los datos 
function getinfo () {
    axios
    .get('https://swapi.info/api/films/')
    .then(res => mostrarContenido(res))
    .catch(err => console.log(err))
}

// Una funcion para mostrar los personajes en el contenedor
function mostrarContenido(res) {
    document.getElementById('res').innerHTML = `
    <div class="card card-body">
        <h5>Status: ${res.status}</h5>
    </div>
    <div class="card">
    <div class="card-body">
      <pre>${JSON.stringify(res.data, null, 2)}</pre>
    </div>
  </div>
  `;
}

// DOM
document.getElementById('get').addEventListener('click', getinfo);