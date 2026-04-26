// 1. Consultar libros: Mostrar todos los libros almacenados en formato JSON.
// 2. Agregar libros: Permitir al usuario agregar un libro a la colección.
// 3. Actualizar la disponibilidad: Cambiar el estado de disponibilidad de un libro a 'prestado' o 'disponible'.
// 4. (Opcional) Simular un archivo JSON: Aunque no vas a leer/escribir realmente en un archivo, simularás la lectura y 
// escritura de datos usando callbacks, como si interactuaras con un sistema de almacenamiento.

// Datos iniciales de libros en formato JSON
let biblioteca = {
    "libros": [
        { "titulo": "Cien años de soledad", "autor": "Gabriel García Márquez", "genero": "Realismo mágico", "disponible": true },
        { "titulo": "1984", "autor": "George Orwell", "genero": "Distopía", "disponible": true }
    ]
};

// Función para simular la lectura de datos (asimilar la lectura de un archivo JSON)
function leerDatos(callback) {
    setTimeout(() => {
        // Aquí simulas leer el JSON con un retraso de 1 segundo
        callback(biblioteca);
    }, 2000);
}

// Función para mostrar todos los libros en consola
function mostrarLibros() {
    leerDatos((datos) => {
        console.log("Inventario de libros:");
        datos.libros.forEach((libro, index) => {
            console.log(`${index + 1}. ${libro.titulo} - ${libro.autor} (${libro.disponible ? 'Disponible' : 'Prestado'})`);
        });
    });
}

// Función para agregar un nuevo libro
function agregarLibro(titulo, autor, genero, disponible) {
    console.log("Agregando nuevo libro a bibloteca")
    setTimeout(() => {
    const nuevoLibro = { titulo, autor, genero, disponible };
    biblioteca.libros.push(nuevoLibro);
    console.log(`Nuevo libro ${nuevoLibro.titulo} ha sido agregado correctamente`)
    }, 4000);
}


function actualizarDisponibilidad(titulo, nuevoEstado, callback) { 
    setTimeout(() => {
            console.log("Actualizando disponibilidad...")
    const libro = biblioteca.libros.find(libro => libro.titulo === titulo);

    if (libro) {
        libro.disponible = nuevoEstado;
        console.log(`Disponibilidad ha sido actualizado: ${titulo} -> ${nuevoEstado}`);
    } else {
        console.log("Libro no encontrado")
    }
    if (callback) callback ();
    }, 5000);
}

// Ejemplo de cómo ejecutar la aplicación
mostrarLibros();
agregarLibro("El principito", "Antoine de Saint-Exupéry", "Fábula", true);
actualizarDisponibilidad("1984", false);
