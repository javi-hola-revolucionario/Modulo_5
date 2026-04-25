//Recibir nuevos pedidos de clientes
// Procese cada pedido de manera asincornica con un tiempo de preparacion simulado
// Actualice el estado de cada pedido (en proceso -> compeltado ) en la interfaz
// Usar event loop // setTimeout // promises // async/await

const listapedidos = document.getElementById("listapedidos");
const btn_agregar = document.getElementById("btn_agregar");

let ordenId = 0;

btn_agregar.addEventListener('click', () => {
    const orden = { id: ordenId++, status: 'En proceso'  };
    addOrder(orden);
    procesarPedido(orden);
});

function addOrder(orden) {
    const listItem = document.createElement('li');
    listItem.id = `order-${orden.id}`;
    listItem.textContent = `Pedido #${orden.id}: ${orden.status}`;
    listapedidos.appendChild(listItem);
}

function updateOrderStatus(orden, status) {
    const listItem = document.getElementById(`order-${orden.id}`);
    if (listItem) {
        listItem.textContent = `Pedido #${orden.id}: ${status}`;
    }
}

async function processOrder(orden) {
    // TODO: Simular la preparación del pedido usando setTimeout y Promise
    return new Promise((resolve) => {
        const tiempo = Math.floor(Math.random() * 3000) + 2000;

        setTimeout(() => {
            orden.status = "Completado";
            resolve(orden);
        }, tiempo);
    })
}

// TODO: Actualizar el estado del pedido a "Completado"
async function procesarPedido(orden) {
    const pedidocompletado = await processOrder(orden) 
        updateOrderStatus(pedidocompletado, pedidocompletado.status);
}