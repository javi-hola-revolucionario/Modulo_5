function operar(a,b,operacion) {
console.log(a + b);
operacion();
}
// Debe imprimir 7
console.log(operar(3,4, (x,y) => x + y ));
// ------------------------------------------------------------------------

function operar(a,b,operacion) {
console.log(a - b);
operacion();
}
// Debe imprimir 7
console.log(operar(10,5, (x,y) => x + y ));


// ------------------------------------------------------------
// EJERCICIO 2 — JSON ↔ objeto
// ------------------------------------------------------------
// Tienes el siguiente string JSON. Conviértelo a objeto,
// incrementa la edad en 1 y vuelve a convertirlo a string JSON.

const entrada = '{"nombre":"Diego","edad":17,"activo":true}';


const textoJSON = JSON.stringify(entrada);
console.log("Como string JSON: ");
console.log(textoJSON);
console.log(typeof textoJSON);

const obj = JSON.parse(entrada);
console.log("\nComo objeto:")
console.log(obj);
console.log("Tipo: ", typeof obj);
console.log("Edad +1: ", obj.edad + 1);

const textoJSON2 = JSON.stringify(obj);
console.log("\nComo texto otra vez");
console.log(textoJSON2);
console.log(typeof textoJSON2);

// TODO: parsear
// TODO: modificar edad
// TODO: stringificar y hacer console.log del resultado

// ------------------------------------------------------------
// EJERCICIO 3 — Detecta el JSON inválido
// ------------------------------------------------------------
// De estos 3 strings, solo UNO es JSON válido. Usa try/catch
// con JSON.parse para averiguar cuál.

const a = "{'nombre': 'Ana'}";
const b = '{"nombre": "Ana",}';
const c = '{"nombre": "Ana"}';

// TODO: recorre [a, b, c] y dime cuál es válido.