// =========================
// PRODUCTOS
// =========================

const productos = [

    // =========================
    // PIZZAS
    // =========================

    {
        id: 1,
        nombre: "Mozzarella",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 6000 },
            { nombre: "Entera", precio: 12000 }
        ]
    },

    {
        id: 2,
        nombre: "Napolitana",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 18000 }
        ]
    },

    {
        id: 3,
        nombre: "Fugazza",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 4,
        nombre: "Rúcula",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 5,
        nombre: "Calabresa",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 6,
        nombre: "Especial",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 16000 }
        ]
    },

    {
        id: 7,
        nombre: "Especial con huevo",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 18000 }
        ]
    },

    {
        id: 8,
        nombre: "Cremosa Vinilo",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 22000 }
        ]
    },

    {
        id: 9,
        nombre: "Explosiva",
        categoria: "pizzas",
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 24000 }
        ]
    },

    {
        id: 10,
        nombre: "Pizza Lomo",
        categoria: "pizzas",
        opciones: [
            { nombre: "Mini", precio: 30000 },
            { nombre: "Grande", precio: 50000 }
        ]
    },

    {
        id: 11,
        nombre: "Pizza Nesa",
        categoria: "pizzas",
        opciones: [
            { nombre: "Mini", precio: 25000 },
            { nombre: "Grande", precio: 45000 }
        ]
    },


    // =========================
    // EMPANADAS POR UNIDAD
    // =========================

    {
        id: 20,
        nombre: "Empanada de carne",
        categoria: "empanadas",
        precio: 2200
    },

    {
        id: 21,
        nombre: "Empanada de carne dulce",
        categoria: "empanadas",
        precio: 2200
    },

    {
        id: 22,
        nombre: "Empanada árabe",
        categoria: "empanadas",
        precio: 2200
    },

    {
        id: 23,
        nombre: "Empanada de jamón y queso",
        categoria: "empanadas",
        precio: 2200
    },

    {
        id: 24,
        nombre: "Empanada de queso y cebolla",
        categoria: "empanadas",
        precio: 2200
    },

    {
        id: 25,
        nombre: "Empanada de pollo",
        categoria: "empanadas",
        precio: 2200
    },


    // =========================
    // SÁNDWICHES
    // =========================

    {
        id: 31,
        nombre: "Mila de pollo completa",
        categoria: "sandwiches",
        precio: 12000
    },

    {
        id: 32,
        nombre: "Mila de carne completa",
        categoria: "sandwiches",
        precio: 18000
    },

    {
        id: 33,
        nombre: "Sanguchazo con papas",
        categoria: "sandwiches",
        precio: 22000
    },

    {
        id: 34,
        nombre: "Lomito simple",
        categoria: "sandwiches",
        precio: 18000
    },

    {
        id: 35,
        nombre: "Lomito completo",
        categoria: "sandwiches",
        precio: 18000
    },

    {
        id: 36,
        nombre: "Hamburguesa simple",
        categoria: "sandwiches",
        precio: 12000
    },

    {
        id: 37,
        nombre: "Hamburguesa completa",
        categoria: "sandwiches",
        precio: 12000
    },


    // =========================
    // PAPAS
    // =========================

    {
        id: 40,
        nombre: "Papas fritas",
        categoria: "papas",
        precio: 10000
    },

    {
        id: 41,
        nombre: "Papas con cheddar, verdeo y huevo",
        categoria: "papas",
        precio: 11000
    },


    // =========================
    // POSTRES
    // =========================

    {
        id: 50,
        nombre: "Postre",
        categoria: "postres",
        precio: 3000
    },


    // =========================
    // BEBIDAS
    // =========================

    {
        id: 60,
        nombre: "Bebida 1",
        categoria: "bebidas",
        precio: 0
    },

    {
        id: 61,
        nombre: "Bebida 2",
        categoria: "bebidas",
        precio: 0
    }

];


// =========================
// GUSTOS DE EMPANADAS
// =========================

const gustosEmpanadas = [
    "Carne",
    "Carne dulce",
    "Árabe",
    "Jamón y queso",
    "Queso y cebolla",
    "Pollo"
];


// =========================
// VARIABLES
// =========================

let carrito = [];

let categoriaActual = "pizzas";

let cantidadEmpanadasNecesaria = 6;

let cantidadesEmpanadas = {};


// =========================
// FORMATO PRECIO
// =========================

function formatoPrecio(precio) {

    return "$" + precio.toLocaleString("es-AR");

}


// =========================
// MOSTRAR CATEGORÍA
// =========================

function mostrarCategoria(categoria) {

    categoriaActual = categoria;

    const productosContenedor =
        document.getElementById("productos");

    const titulo =
        document.getElementById("tituloCategoria");

    const subtitulo =
        document.getElementById("subtituloCategoria");


    productosContenedor.innerHTML = "";


    const nombresCategorias = {

        pizzas: "Pizzas",
        empanadas: "Empanadas",
        sandwiches: "Sándwiches",
        papas: "Papas",
        postres: "Postres",
        bebidas: "Bebidas"

    };


    titulo.textContent =
        nombresCategorias[categoria] || "Nuestra Carta";


    subtitulo.textContent =
        "Elegí tus favoritos";


    actualizarBotonesCategoria();


    if (categoria === "empanadas") {

        mostrarEmpanadas();

        return;

    }


    const productosFiltrados =
        productos.filter(
            producto => producto.categoria === categoria
        );


    productosFiltrados.forEach(producto => {

        if (producto.opciones) {

            crearProductoConOpciones(producto);

        } else {

            crearProductoSimple(producto);

        }

    });

}


// =========================
// BOTONES CATEGORÍA
// =========================

function actualizarBotonesCategoria() {

    document
        .querySelectorAll(".categoria")
        .forEach(boton => {

            boton.classList.toggle(
                "activa",
                boton.dataset.categoria === categoriaActual
            );

        });

}


// =========================
// PRODUCTO SIMPLE
// =========================

function crearProductoSimple(producto) {

    const contenedor =
        document.getElementById("productos");


    const tarjeta =
        document.createElement("div");

    tarjeta.className = "producto";


    tarjeta.innerHTML = `

        <div class="producto-info">

            <div class="producto-nombre">
                ${producto.nombre}
            </div>

            <div class="producto-precio">
                ${formatoPrecio(producto.precio)}
            </div>

        </div>

        <button
            class="agregar"
            onclick="agregarAlCarrito(
                ${producto.id},
                '${producto.nombre.replace(/'/g, "\\'")}',
                ${producto.precio}
            )"
        >
            +
        </button>

    `;


    contenedor.appendChild(tarjeta);

}


// =========================
// PRODUCTO CON OPCIONES
// =========================

function crearProductoConOpciones(producto) {

    const contenedor =
        document.getElementById("productos");


    const tarjeta =
        document.createElement("div");

    tarjeta.className = "producto";


    let botones = "";


    producto.opciones.forEach((opcion, indice) => {

        botones += `

            <button
                class="opcion-pizza"
                onclick="agregarOpcionPizza(
                    ${producto.id},
                    '${producto.nombre.replace(/'/g, "\\'")}',
                    '${opcion.nombre}',
                    ${opcion.precio}
                )"
            >

                <strong>
                    ${opcion.nombre}
                </strong>

                <span>
                    ${formatoPrecio(opcion.precio)}
                </span>

            </button>

        `;

    });


    tarjeta.innerHTML = `

        <div class="producto-info">

            <div class="producto-nombre">
                ${producto.nombre}
            </div>

            <div class="opciones-pizza">
                ${botones}
            </div>

        </div>

    `;


    contenedor.appendChild(tarjeta);

}


// =========================
// AGREGAR PRODUCTO SIMPLE
// =========================

function agregarAlCarrito(id, nombre, precio) {

    const existente =
        carrito.find(
            item =>
                item.tipo === "producto" &&
                item.id === id
        );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            tipo: "producto",

            id: id,

            nombre: nombre,

            precio: precio,

            cantidad: 1

        });

    }


    actualizarCarrito();

}


// =========================
// AGREGAR PIZZA
// =========================

function agregarOpcionPizza(
    id,
    nombre,
    opcion,
    precio
) {

    const nombreCompleto =
        `${nombre} - ${opcion}`;


    const clave =
        `${id}-${opcion}`;


    const existente =
        carrito.find(
            item =>
                item.tipo === "pizza" &&
                item.clave === clave
        );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            tipo: "pizza",

            clave: clave,

            nombre: nombreCompleto,

            precio: precio,

            cantidad: 1

        });

    }


    actualizarCarrito();

}


// =========================
// MOSTRAR EMPANADAS
// =========================

function mostrarEmpanadas() {

    const contenedor =
        document.getElementById("productos");


    contenedor.innerHTML = "";


    // EMPANADAS POR UNIDAD

    const tituloUnidad =
        document.createElement("div");

    tituloUnidad.className =
        "subtitulo-productos";

    tituloUnidad.textContent =
        "Por unidad";

    contenedor.appendChild(tituloUnidad);


    gustosEmpanadas.forEach((gusto, indice) => {

        const producto =
            productos[indice + 20];


        crearProductoSimple(producto);

    });


    // PACKS

    const tituloPacks =
        document.createElement("div");

    tituloPacks.className =
        "subtitulo-productos";

    tituloPacks.textContent =
        "Docenas";

    contenedor.appendChild(tituloPacks);


    crearPackEmpanadas(
        "Media docena",
        6,
        13000
    );


    crearPackEmpanadas(
        "Docena",
        12,
        25000
    );

}


// =========================
// PACK EMPANADAS
// =========================

function crearPackEmpanadas(
    nombre,
    cantidad,
    precio
) {

    const contenedor =
        document.getElementById("productos");


    const tarjeta =
        document.createElement("div");

    tarjeta.className =
        "pack-empanadas";


    tarjeta.innerHTML = `

        <h3>
            ${nombre}
        </h3>

        <p>
            ${cantidad} empanadas ·
            ${formatoPrecio(precio)}
        </p>

        <button
            class="boton-pack"
            onclick="abrirSelectorEmpanadas(
                ${cantidad},
                ${precio}
            )"
        >
            Elegir gustos
        </button>

    `;


    contenedor.appendChild(tarjeta);

}


// =========================
// ABRIR SELECTOR EMPANADAS
// =========================

function abrirSelectorEmpanadas(
    cantidad,
    precio
) {

    cantidadEmpanadasNecesaria =
        cantidad;


    cantidadesEmpanadas = {};


    gustosEmpanadas.forEach(gusto => {

        cantidadesEmpanadas[gusto] = 0;

    });


    const modal =
        document.getElementById("modalEmpanadas");


    const titulo =
        document.getElementById("tituloEmpanadas");


    const cantidadNecesaria =
        document.getElementById("cantidadNecesaria");


    const cantidadSeleccionada =
        document.getElementById("cantidadSeleccionada");


    const lista =
        document.getElementById("listaGustosEmpanadas");


    const boton =
        document.getElementById(
            "botonConfirmarEmpanadas"
        );


    titulo.textContent =
        cantidad === 12
            ? "Elegí los gustos de tu docena"
            : "Elegí los gustos de tu media docena";


    cantidadNecesaria.textContent =
        cantidad;


    cantidadSeleccionada.textContent =
        "0";


    lista.innerHTML = "";


    gustosEmpanadas.forEach(gusto => {

        const fila =
            document.createElement("div");

        fila.className =
            "gusto-empanada";


        fila.innerHTML = `

            <div class="gusto-nombre">
                ${gusto}
            </div>

            <div class="controles-gusto">

                <button
                    onclick="cambiarCantidadGusto(
                        '${gusto}',
                        -1
                    )"
                >
                    −
                </button>

                <span
                    class="cantidad-gusto"
                    id="cantidad-${gusto
                        .replaceAll(" ", "-")
                        .replaceAll("ó", "o")
                        .replaceAll("í", "i")
                        .replaceAll("é", "e")
                        .replaceAll("á", "a")
                        .replaceAll("ñ", "n")
                    }"
                >
                    0
                </span>

                <button
                    onclick="cambiarCantidadGusto(
                        '${gusto}',
                        1
                    )"
                >
                    +
                </button>

            </div>

        `;


        lista.appendChild(fila);

    });


    boton.disabled = true;


    modal.classList.add("abierto");

}


// =========================
// CAMBIAR CANTIDAD DE GUSTO
// =========================

function cambiarCantidadGusto(
    gusto,
    cambio
) {

    const actual =
        cantidadesEmpanadas[gusto] || 0;


    const totalActual =
        Object.values(cantidadesEmpanadas)
            .reduce(
                (total, cantidad) =>
                    total + cantidad,
                0
            );


    if (cambio > 0) {

        if (
            totalActual >=
            cantidadEmpanadasNecesaria
        ) {

            return;

        }

    }


    if (
        actual + cambio < 0
    ) {

        return;

    }


    cantidadesEmpanadas[gusto] =
        actual + cambio;


    actualizarSelectorEmpanadas();

}


// =========================
// ACTUALIZAR SELECTOR
// =========================

function actualizarSelectorEmpanadas() {

    const total =
        Object.values(cantidadesEmpanadas)
            .reduce(
                (suma, cantidad) =>
                    suma + cantidad,
                0
            );


    document.getElementById(
        "cantidadSeleccionada"
    ).textContent = total;


    const boton =
        document.getElementById(
            "botonConfirmarEmpanadas"
        );


    boton.disabled =
        total !== cantidadEmpanadasNecesaria;


    gustosEmpanadas.forEach(gusto => {

        const id =
            "cantidad-" +
            gusto
                .replaceAll(" ", "-")
                .replaceAll("ó", "o")
                .replaceAll("í", "i")
                .replaceAll("é", "e")
                .replaceAll("á", "a")
                .replaceAll("ñ", "n");


        const elemento =
            document.getElementById(id);


        if (elemento) {

            elemento.textContent =
                cantidadesEmpanadas[gusto];

        }

    });

}


// =========================
// CONFIRMAR EMPANADAS
// =========================

function confirmarEmpanadas() {

    const total =
        Object.values(cantidadesEmpanadas)
            .reduce(
                (suma, cantidad) =>
                    suma + cantidad,
                0
            );


    if (
        total !==
        cantidadEmpanadasNecesaria
    ) {

        return;

    }


    const detalle = [];


    gustosEmpanadas.forEach(gusto => {

        const cantidad =
            cantidadesEmpanadas[gusto];


        if (cantidad > 0) {

            detalle.push(
                `${gusto} x${cantidad}`
            );

        }

    });


    const precio =
        cantidadEmpanadasNecesaria === 12
            ? 25000
            : 13000;


    const nombre =
        cantidadEmpanadasNecesaria === 12
            ? "Docena de empanadas"
            : "Media docena de empanadas";


    const clave =
        `${nombre}-${detalle.join("|")}`;


    carrito.push({

        tipo: "empanadas",

        clave: clave,

        nombre: nombre,

        detalle: detalle,

        precio: precio,

        cantidad: 1

    });


    cerrarEmpanadas();


    actualizarCarrito();

}


// =========================
// CERRAR EMPANADAS
// =========================

function cerrarEmpanadas() {

    document
        .getElementById("modalEmpanadas")
        .classList.remove("abierto");

}


// =========================
// CARRITO
// =========================

function actualizarCarrito() {

    const lista =
        document.getElementById(
            "listaCarrito"
        );


    const vacio =
        document.getElementById(
            "carritoVacio"
        );


    const cantidad =
        document.getElementById(
            "cantidadCarrito"
        );


    const totalCarrito =
        document.getElementById(
            "totalCarrito"
        );


    const totalFinal =
        document.getElementById(
            "totalFinal"
        );


    lista.innerHTML = "";


    if (carrito.length === 0) {

        vacio.style.display = "block";

    } else {

        vacio.style.display = "none";

    }


    let total = 0;

    let cantidadTotal = 0;


    carrito.forEach((item, indice) => {

        total +=
            item.precio *
            item.cantidad;


        cantidadTotal +=
            item.cantidad;


        const div =
            document.createElement("div");


        div.className =
            "item-carrito";


        let detalleHTML = "";


        if (item.tipo === "empanadas") {

            detalleHTML = `

                <div class="item-precio">
                    ${item.detalle.join("<br>")}
                </div>

            `;

        } else {

            detalleHTML = `

                <div class="item-precio">
                    ${formatoPrecio(item.precio)}
                    c/u
                </div>

            `;

        }


        div.innerHTML = `

            <div>

                <div class="item-nombre">
                    ${item.nombre}
                </div>

                ${detalleHTML}

            </div>


            <div class="controles">

                <button
                    onclick="cambiarCantidadCarrito(
                        ${indice},
                        -1
                    )"
                >
                    −
                </button>

                <span class="cantidad">
                    ${item.cantidad}
                </span>

                <button
                    onclick="cambiarCantidadCarrito(
                        ${indice},
                        1
                    )"
                >
                    +
                </button>

            </div>

        `;


        lista.appendChild(div);

    });


    cantidad.textContent =
        cantidadTotal;


    totalCarrito.textContent =
        formatoPrecio(total);


    totalFinal.textContent =
        formatoPrecio(total);

}


// =========================
// CAMBIAR CANTIDAD CARRITO
// =========================

function cambiarCantidadCarrito(
    indice,
    cambio
) {

    carrito[indice].cantidad +=
        cambio;


    if (
        carrito[indice].cantidad <= 0
    ) {

        carrito.splice(indice, 1);

    }


    actualizarCarrito();

}


// =========================
// ABRIR CARRITO
// =========================

function abrirCarrito() {

    document
        .getElementById("modalCarrito")
        .classList.add("abierto");

}


// =========================
// CERRAR CARRITO
// =========================

function cerrarCarrito() {

    document
        .getElementById("modalCarrito")
        .classList.remove("abierto");

}


// =========================
// VOLVER AL INICIO
// =========================

function volverInicio() {

    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


// =========================
// ENVIAR WHATSAPP
// =========================

function enviarWhatsApp() {

    if (carrito.length === 0) {

        alert(
            "Todavía no agregaste ningún producto."
        );

        return;

    }


    const nombre =
        document.getElementById(
            "nombreCliente"
        ).value.trim();


    const tipoPedido =
        document.getElementById(
            "tipoPedido"
        ).value;


    const direccion =
        document.getElementById(
            "direccionCliente"
        ).value.trim();


    const formaPago =
        document.getElementById(
            "formaPago"
        ).value;


    const observaciones =
        document.getElementById(
            "observaciones"
        ).value.trim();


    let mensaje =
        "Hola! Quiero hacer el siguiente pedido:%0A%0A";


    carrito.forEach(item => {

        mensaje +=
            `• ${item.nombre} x${item.cantidad}%0A`;


        if (
            item.tipo === "empanadas"
        ) {

            mensaje +=
                `  ${item.detalle.join(" / ")}%0A`;

        }


        mensaje +=
            `  ${formatoPrecio(
                item.precio * item.cantidad
            )}%0A%0A`;

    });


    const total =
        carrito.reduce(
            (suma, item) =>
                suma +
                item.precio *
                item.cantidad,
            0
        );


    mensaje +=
        `TOTAL: ${formatoPrecio(total)}%0A%0A`;


    mensaje +=
        `Nombre: ${nombre || "No indicado"}%0A`;


    mensaje +=
        `Pedido: ${tipoPedido}%0A`;


    if (tipoPedido === "Delivery") {

        mensaje +=
            `Dirección: ${
                direccion || "No indicada"
            }%0A`;

    }


    mensaje +=
        `Forma de pago: ${formaPago}%0A`;


    if (observaciones) {

        mensaje +=
            `Observaciones: ${observaciones}%0A`;

    }


    const numero =
        "5493564374272";


    const url =
        `https://wa.me/${numero}?text=${mensaje}`;


    window.open(
        url,
        "_blank"
    );

}


// =========================
// INICIO
// =========================

mostrarCategoria("pizzas");

actualizarCarrito();