let usuarios = [];
const form = document.getElementById("registroForm");
const loginForm = document.getElementById("loginForm");
const tabla = document.getElementById("usuariosTabla").getElementsByTagName("tbody")[0];

form.addEventListener("submit", function (e) {
    e.preventDefault();
    const nombres = document.getElementById("nombres").value;
    const apellidos = document.getElementById("apellidos").value;
    const correo = document.getElementById("correo").value;
    const telefono = document.getElementById("telefono").value;

    const usuario = { nombres, apellidos, correo, telefono };
    usuarios.push(usuario);
    actualizarTabla();
    form.reset();
});
/* loginForm.addEventListener("submit",function(e){
    e.preventDefault();
    const correo= document.getElementById("loginCorreo").value;
    const telefono= document.getElementById("loginContra").value;
    const usuario= usuarios.find(u => u.correo === correo&& u.telefono===telefono);
    if(usuario){
        alert(`Bienvenido, ${usuario.nombres} ${usuario.apellidos}! `);
    }else{
        alert("Usuario no encontrado por favor verifique ");
    }
    loginForm.reset();
}) */
function actualizarTabla() {
    tabla.innerHTML = "";
    usuarios.forEach((usuario, index) => {
        const fila = tabla.insertRow();
        fila.insertCell().textContent = usuario.nombres;
        fila.insertCell().textContent = usuario.apellidos;
        fila.insertCell().textContent = usuario.correo;
        fila.insertCell().textContent = usuario.telefono;

        const celdaAcciones = fila.insertCell();

        const botonEditar = document.createElement("button");
        botonEditar.textContent = "Editar";
        botonEditar.onclick = () => editarUsuario(index);
        celdaAcciones.appendChild(botonEditar);

        const botonEliminar = document.createElement("button");
        botonEliminar.textContent = "Eliminar";
        botonEliminar.onclick = () => eliminarUsuario(index);
        celdaAcciones.appendChild(botonEliminar);
    });
}
function editarUsuario(index) {
    const usuario = usuarios[index];
    document.getElementById("nombres").value = usuario.nombre;
    document.getElementById("apellidos").value = usuario.apellidos;
    document.getElementById("correo").value = usuario.correo;
    document.getElementById("telefono").value = usuario.telefono;
    usuarios.splice(index, 1);
    actualizarTabla();
}
function eliminarUsuario(index) {
    usuarios.splice(index, 1);
    actualizarTabla();
}
