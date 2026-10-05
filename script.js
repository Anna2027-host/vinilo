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
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 6000 },
            { nombre: "Entera", precio: 12000 }
        ]
    },

    {
        id: 2,
        nombre: "Napolitana",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 18000 }
        ]
    },

    {
        id: 3,
        nombre: "Fugazza",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 4,
        nombre: "Rúcula",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 5,
        nombre: "Calabresa",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 6,
        nombre: "Especial",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 16000 }
        ]
    },

    {
        id: 7,
        nombre: "Especial con huevo",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 18000 }
        ]
    },

    {
        id: 8,
        nombre: "Cremosa Vinilo",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 22000 }
        ]
    },

    {
        id: 9,
        nombre: "Explosiva",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 24000 }
        ]
    },

    {
        id: 10,
        nombre: "Pizza Lomo",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Mini", precio: 30000 },
            { nombre: "Grande", precio: 50000 }
        ]
    },

    {
        id: 11,
        nombre: "Pizza Nesa",
        categoria: "pizzas",
        agotado: false,
        opciones: [
            { nombre: "Mini", precio: 25000 },
            { nombre: "Grande", precio: 45000 }
        ]
    },


    // =========================
    // EMPANADAS
    // =========================

    {
        id: 20,
        nombre: "Empanada de carne",
        categoria: "empanadas",
        agotado: false,
        precio: 2200
    },

    {
        id: 21,
        nombre: "Empanada de carne dulce",
        categoria: "empanadas",
        agotado: false,
        precio: 2200
    },

    {
        id: 22,
        nombre: "Empanada árabe",
        categoria: "empanadas",
        agotado: false,
        precio: 2200
    },

    {
        id: 23,
        nombre: "Empanada de jamón y queso",
        categoria: "empanadas",
        agotado: false,
        precio: 2200
    },

    {
        id: 24,
        nombre: "Empanada de queso y cebolla",
        categoria: "empanadas",
        agotado: false,
        precio: 2200
    },

    {
        id: 25,
        nombre: "Empanada de pollo",
        categoria: "empanadas",
        agotado: false,
        precio: 2200
    },


    // =========================
    // SÁNDWICHES
    // =========================

    {
        id: 31,
        nombre: "Mila de pollo completa",
        categoria: "sandwiches",
        agotado: false,
        precio: 12000
    },

    {
        id: 32,
        nombre: "Mila de carne completa",
        categoria: "sandwiches",
        agotado: false,
        precio: 18000
    },

    {
        id: 33,
        nombre: "Sanguchazo con papas",
        categoria: "sandwiches",
        agotado: false,
        precio: 22000
    },

    {
        id: 34,
        nombre: "Lomito simple",
        categoria: "sandwiches",
        agotado: false,
        precio: 18000
    },

    {
        id: 35,
        nombre: "Lomito completo",
        categoria: "sandwiches",
        agotado: false,
        precio: 18000
    },

    {
        id: 36,
        nombre: "Hamburguesa simple",
        categoria: "sandwiches",
        agotado: false,
        precio: 12000
    },

    {
        id: 37,
        nombre: "Hamburguesa completa",
        categoria: "sandwiches",
        agotado: false,
        precio: 12000
    },


    // =========================
    // PAPAS
    // =========================

    {
        id: 40,
        nombre: "Papas fritas",
        categoria: "papas",
        agotado: false,
        precio: 10000
    },

    {
        id: 41,
        nombre: "Papas con cheddar, verdeo y huevo",
        categoria: "papas",
        agotado: false,
        precio: 11000
    },


    // =========================
    // POSTRES
    // =========================

    {
        id: 50,
        nombre: "Postre",
        categoria: "postres",
        agotado: false,
        precio: 3000
    },


    // =========================
    // BEBIDAS
    // =========================

    {
        id: 60,
        nombre: "Agua 500 ml",
        categoria: "bebidas",
        agotado: false,
        precio: 3000
    },

    {
        id: 61,
        nombre: "Agua 1,5 L",
        categoria: "bebidas",
        agotado: false,
        precio: 5000
    },

    {
        id: 62,
        nombre: "Agua saborizada 500 ml",
        categoria: "bebidas",
        agotado: false,
        precio: 3000
    },

    {
        id: 63,
        nombre: "Agua saborizada 1,5 L",
        categoria: "bebidas",
        agotado: false,
        precio: 5000
    },

    {
        id: 64,
        nombre: "Pepsi / 7UP 500 ml",
        categoria: "bebidas",
        agotado: false,
        precio: 4000
    },

    {
        id: 65,
        nombre: "Coca-Cola 1,5 L",
        categoria: "bebidas",
        agotado: false,
        precio: 5000
    },

    {
        id: 66,
        nombre: "Coca-Cola 1,125 L",
        categoria: "bebidas",
        agotado: false,
        precio: 8000
    },

    {
        id: 67,
        nombre: "Brahma",
        categoria: "bebidas",
        agotado: false,
        precio: 8000
    },

    {
        id: 68,
        nombre: "Brahma lata",
        categoria: "bebidas",
        agotado: false,
        precio: 5000
    },

    {
        id: 69,
        nombre: "Stella Artois",
        categoria: "bebidas",
        agotado: false,
        precio: 12000
    },

    {
        id: 70,
        nombre: "Stella Artois lata",
        categoria: "bebidas",
        agotado: false,
        precio: 6000
    },

    {
        id: 71,
        nombre: "Budweiser",
        categoria: "bebidas",
        agotado: false,
        precio: 4000
    },

    {
        id: 72,
        nombre: "Budweiser lata",
        categoria: "bebidas",
        agotado: false,
        precio: 4000
    },

    {
        id: 73,
        nombre: "Santa Fe lata",
        categoria: "bebidas",
        agotado: false,
        precio: 4000
    },

    {
        id: 74,
        nombre: "Trapiche",
        categoria: "bebidas",
        agotado: false,
        precio: 20000
    },

    {
        id: 75,
        nombre: "Alma Mora",
        categoria: "bebidas",
        agotado: false,
        precio: 18000
    },

    {
        id: 76,
        nombre: "F. Las Moras",
        categoria: "bebidas",
        agotado: false,
        precio: 13000
    },

    {
        id: 77,
        nombre: "San Telmo",
        categoria: "bebidas",
        agotado: false,
        precio: 12000
    },

    {
        id: 78,
        nombre: "Origen",
        categoria: "bebidas",
        agotado: false,
        precio: 18000
    },

    {
        id: 79,
        nombre: "Est. Mendoza",
        categoria: "bebidas",
        agotado: false,
        precio: 10000
    },

    {
        id: 80,
        nombre: "Don Valentín",
        categoria: "bebidas",
        agotado: false,
        precio: 15000
    },

    {
        id: 81,
        nombre: "Fernet jarra",
        categoria: "bebidas",
        agotado: false,
        precio: 12000
    },

    {
        id: 82,
        nombre: "Fernet medida",
        categoria: "bebidas",
        agotado: false,
        precio: 5000
    },

    {
        id: 83,
        nombre: "Smirnoff + Speed",
        categoria: "bebidas",
        agotado: false,
        precio: 12000
    },

    {
        id: 84,
        nombre: "Sky + Speed",
        categoria: "bebidas",
        agotado: false,
        precio: 18000
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

    tarjeta.className =
        producto.agotado
            ? "producto agotado"
            : "producto";


    if (producto.agotado) {

        tarjeta.innerHTML = `

            <div class="producto-info">

                <div class="producto-nombre">
                    ${producto.nombre}
                </div>

                <div class="producto-precio">
                    ${formatoPrecio(producto.precio)}
                </div>

                <div class="producto-agotado">
                    🔴 AGOTADO
                </div>

            </div>

        `;

    } else {

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

    }


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


    tarjeta.className =
        producto.agotado
            ? "producto agotado"
            : "producto";


    let botones = "";


    if (producto.agotado) {

        tarjeta.innerHTML = `

            <div class="producto-info">

                <div class="producto-nombre">
                    ${producto.nombre}
                </div>

                <div class="producto-agotado">
                    🔴 AGOTADO
                </div>

            </div>

        `;

    } else {

        producto.opciones.forEach(opcion => {

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

    }


    contenedor.appendChild(tarjeta);

}


// =========================
// AGREGAR PRODUCTO SIMPLE
// =========================

function agregarAlCarrito(id, nombre, precio) {

    const producto =
        productos.find(
            item => item.id === id
        );


    if (
        producto &&
        producto.agotado
    ) {

        return;

    }


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

    const producto =
        productos.find(
            item => item.id === id
        );


    if (
        producto &&
        producto.agotado
    ) {

        return;

    }


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


    // =========================
    // POR UNIDAD
    // =========================

    const tituloUnidad =
        document.createElement("div");

    tituloUnidad.className =
        "subtitulo-productos";

    tituloUnidad.textContent =
        "Por unidad · $2.200";

    contenedor.appendChild(tituloUnidad);


    const productosEmpanadas =
        productos.filter(
            producto =>
                producto.categoria === "empanadas"
        );


    productosEmpanadas.forEach(producto => {

        crearProductoSimple(producto);

    });


    // =========================
    // PACKS
    // =========================

    const tituloPacks =
        document.createElement("div");

    tituloPacks.className =
        "subtitulo-productos";

    tituloPacks.textContent =
        "Packs de empanadas";

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


        const idCantidad =
            obtenerIdGusto(gusto);


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
                    id="${idCantidad}"
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
// ID DE GUSTO
// =========================

function obtenerIdGusto(gusto) {

    return "cantidad-" +
        gusto
            .replaceAll(" ", "-")
            .replaceAll("ó", "o")
            .replaceAll("í", "i")
            .replaceAll("é", "e")
            .replaceAll("á", "a")
            .replaceAll("ñ", "n");

}


// =========================
// CAMBIAR CANTIDAD DE GUSTO
// =========================

function cambiarCantidadGusto(
    gusto,
    cambio
) {

    const productoEmpanada =
        productos.find(
            producto =>
                producto.categoria === "empanadas" &&
                producto.nombre
                    .toLowerCase()
                    .includes(gusto.toLowerCase())
        );


    if (
        productoEmpanada &&
        productoEmpanada.agotado
    ) {

        return;

    }


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

        const elemento =
            document.getElementById(
                obtenerIdGusto(gusto)
            );


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
        "Hola! Quiero hacer el siguiente pedido:\n\n";


    carrito.forEach(item => {

        mensaje +=
            `• ${item.nombre} x${item.cantidad}\n`;


        if (
            item.tipo === "empanadas"
        ) {

            mensaje +=
                `  ${item.detalle.join(" / ")}\n`;

        }


        mensaje +=
            `  ${formatoPrecio(
                item.precio * item.cantidad
            )}\n\n`;

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
        `TOTAL: ${formatoPrecio(total)}\n\n`;


    mensaje +=
        `Nombre: ${nombre || "No indicado"}\n`;


    mensaje +=
        `Pedido: ${tipoPedido}\n`;


    if (tipoPedido === "Delivery") {

        mensaje +=
            `Dirección: ${
                direccion || "No indicada"
            }\n`;

    }


    mensaje +=
        `Forma de pago: ${formaPago}\n`;


    if (observaciones) {

        mensaje +=
            `Observaciones: ${observaciones}\n`;

    }


    const numero =
        "5493564374272";


    const url =
        `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;


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