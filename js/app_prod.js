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
        document.getElementById("body").innerHTML += `<h3>${(product.cebollaLarga * 500) * 8}</h3>
    <h3>${(product.lechugaCrespa * 500) * 15}</h3> <h3>${(product.Mix * 500) * 12}</h3> 
    <h3>${(product.Repollo * 500) * 8,5}</h3> <h3>${(product.Lulo * 500) * 6}
    </h3> <h3>${product.Scotch * 1500}</h3> <h3>${product.Rojo * 1200}</h3> `;
        document.getElementById("button").disabled = false;
    });
}

async function createProduct() {
    document.getElementById("button").disabled = true;
    const form = document.getElementById("forma");
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