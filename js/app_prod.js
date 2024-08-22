let Cantidad = [];
const form2 = document.getElementById("form2");
//const loginForm = document.getElementById("loginForm");
const tabla2 = document.getElementById("productosTabla").getElementsByTagName("tbody")[0];

form2.addEventListener("submit", function (e) {
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
    form2.reset();
    
})

function actualizarTabla() {
    tabla2.innerHTML = "";
    Cantidad.forEach((productos, index) => {
        const fila = tabla2.insertRow();
        fila.insertCell().textContent = productos.cebollaLarga;
        fila.insertCell().textContent = productos.lechugaCrespa;
        fila.insertCell().textContent = productos.Mix;
        fila.insertCell().textContent = productos.Lulo;
})
}
