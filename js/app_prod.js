let Cantidad = [];
const form = document.getElementById("form");
//const loginForm = document.getElementById("loginForm");
const tabla = document.getElementById("productosTabla").getElementsByTagName("tbody1")[0];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const cebollaLarga = document.getElementById("cebollaLarga").value;
    const lechugaCrespa = document.getElementById("lechugaCrespa").value;
    const Mix = document.getElementById("Mix").value;
    const Lulo = document.getElementById("Lulo").value;
    const Scotch = document.getElementById("Scotch").value;
    const Rojo = document.getElementById("Rojo").value;

    const productos = { cebollaLarga, lechugaCrespa, Mix, Lulo, Scotch, Rojo };
    Cantidad.push(productos);
    actualizarTabla();
    form.reset();
    
})

function actualizarTabla() {
    tabla.innerHTML = "";
    Cantidad.forEach((productos, index) => {
        const fila = tabla.insertRow();
        fila.insertCell().textContent = productos.cebollaLarga;
        fila.insertCell().textContent = productos.lechugaCrespa;
        fila.insertCell().textContent = productos.Mix;
        fila.insertCell().textContent = productos.Lulo;
})
}
