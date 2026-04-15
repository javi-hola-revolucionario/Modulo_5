//============================================================
// DEM0 1 - EVENT LOOP: orden de ejecucion
//==========================================================
// Como correrlo: node 01-event-loop.js
//
// 
//
//

console.log("1 — Inicio (sincrónico)");

setTimeout(() => {
  console.log("4 — setTimeout 0ms (macrotask)");
}, 0);

Promise.resolve().then(() => {
  console.log("3 — Promise.then (microtask)");
});

console.log("2 — Fin (sincrónico)");


// EXPLICACION PARA EL PROFE: 
// 1) Todo lo sincrono se ejectua primer (call stack)
// 2) 