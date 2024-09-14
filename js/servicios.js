//const apiURL = "https://base-de-datos-rv0c.onrender.com/products"
//const formURL = "https://base-de-datos-rv0c.onrender.com/contacts"
const apiURL = "https://base-de-datos-blond.vercel.app/products"
const formURL = "https://base-de-datos-blond.vercel.app/contacts"
//const apiURL = "https://taltentotechbackend.vercel.app/products/";
//const apiURL = "https://taltentotechbackend.onrender.com/products/";
//const apiURL = "http://localhost:3000/products/";

/* async function getProducts() {
  let products = await fetch(apiURL);
  products = await products.json();
  products.forEach((product) => {
    document.getElementById("product").innerHTML += `<h3>${product.nombre}</h3>
    <h3>${product.apellidos}</h3> <h3>${product.telefono}</h3> 
    <h3>${product.email}</h3> <h3>${product.dia}</h3> 
    <h3>${product.hora}</h3>`;
  });
} */

async function createProduct() {
  document.getElementById("button").disabled = true;
  const form = document.getElementById("create");
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

async function sendFormData() {
  document.getElementById("button").disabled = true;
  const form = document.getElementById("contact-form")
  //declarar varialbe se pone el tipo y luego nombre de la Variable
  const formData = new FormData(form)
  const data = new URLSearchParams(formData).toString()

  //fetch es la funcion que permite enviar informacion
  let respuesta = await fetch(formURL + "/guardar", {
    method: "POST",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded"
    },
    body: data
  })
  respuesta = await respuesta.json()
  //alert(respuesta._id)
  console.log(respuesta)
  document.getElementById("button").disabled = false;

}
