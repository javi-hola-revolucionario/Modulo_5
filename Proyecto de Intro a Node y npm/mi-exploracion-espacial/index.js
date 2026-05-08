const planetas = require('./planetas.js');
// Aqui mostraremos la informacion de los planetas

planetas.forEach(planeta => {
    console.log(`¡Planeta ${planeta.nombre} descubierto!`);
    console.log(`¡Descripcion ${planeta.descripcion} descubierto!`);
    console.log(`¡Descubierto en ${planeta.descubiertoEn} descubierto!`);
    console.log('---------')
});