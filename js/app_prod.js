const apiURL = "https://base-de-datos-blond.vercel.app/products"
const formURL = "https://base-de-datos-blond.vercel.app/contacts"

/* let Cantidad = [];
const form2 = document.getElementById("form2");
//const loginForm = document.getElementById("loginForm");
const tabla2 = document.getElementById("productosTabla").getElementsByTagName("body")[0];

form2.addEventListener("submit", function (e) {
    e.preventDefault();
    const cebollaLarga = document.getElementById("cebollaLarga").value;
    const lechugaCrespa = document.getElementById("lechugaCrespa").value;
    const Repollo = document.getElementById("Repollo").value;
    const Mix = document.getElementById("Mix").value;
    const Lulo = document.getElementById("Lulo").value;
    const Scotch = document.getElementById("Scotch").value;
    const Rojo = document.getElementById("Rojo").value;
    const productos = { cebollaLarga, lechugaCrespa, Repollo, Mix, Lulo, Scotch, Rojo };
    Cantidad.push(productos);
    console.log(Cantidad)
    actualizarTabla();
    form2.reset();
})

function actualizarTabla() {
    tabla2.innerHTML = "";
    Cantidad.forEach((productos, index ) => {
        const fila = tabla2.insertRow();
        fila.insertCell().textContent = productos.cebollaLarga;
        fila.insertCell().textContent = productos.lechugaCrespa;
        fila.insertCell().textContent = productos.Repollo;
        fila.insertCell().textContent = productos.Mix;
        fila.insertCell().textContent = productos.Lulo;
        fila.insertCell().textContent = productos.Scotch;
        fila.insertCell().textContent = productos.Rojo;
    })
} */

async function getProducts() {
    document.getElementById("button").disabled = true;
    let products = await fetch(apiURL);
    products = await products.json();
    products.forEach((product) => {
        document.getElementById("body").innerHTML += `<h3>${products.cebollaLarga}</h3>
    <h3>${products.lechugaCrespa}</h3> <h3>${products.Mix}</h3>`;
    document.getElementById("button").disabled = true;
    });
}

async function createProduct() {
    document.getElementById("button").disabled = true;
    const form = document.getElementById("form2");
    const formData = new FormData(form);
    const data = new URLSearchParams(formData).toString();

    let message = await fetch(apiURL, {
        method: "POST",
        headers: {
            "Content-Type": "application/x-www-form-urlencoded",
        },
        body: data,
    });
    message = await message.json();

    console.log(message);
    document.getElementById("button").disabled = false;
}