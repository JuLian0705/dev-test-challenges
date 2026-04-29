function obtenerHistorial() {
    return JSON.parse(localStorage.getItem("historial")) || [];
}

function guardarHistorial(data) {
    const historial = obtenerHistorial();
    historial.push(data);
    localStorage.setItem("historial", JSON.stringify(historial));
}

async function buscar() {
    const nombre_usuario = document.getElementById("nombre_usuario").value;

    if (!nombre_usuario) return;

    const res = await fetch(`https://api.github.com/users/${nombre_usuario}`);
    const data = await res.json();

    const resultadoDiv = document.getElementById("resultado");

    if (data.message === "Not Found") {
        resultadoDiv.innerHTML = "<p>Usuario no encontrado</p>";
        return;
    }

    const usuario = {
        nombre_usuario: data.login,
        avatar: data.avatar_url
    };

    resultadoDiv.innerHTML = `
        <p><strong>${usuario.nombre_usuario}</strong></p>
        <img src="${usuario.avatar}" width="100">
    `;

    guardarHistorial(usuario);
    mostrarHistorial();
}

function mostrarHistorial() {
    const historial = obtenerHistorial();
    const lista = document.getElementById("historial");

    lista.innerHTML = "";

    historial.forEach(item => {
        const li = document.createElement("li");
        li.textContent = item.nombre_usuario;
        lista.appendChild(li);
    });
}

mostrarHistorial();