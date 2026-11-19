// ======================================================
// VINILO - SCRIPT COMPLETO
// ======================================================


// ======================================================
// PRODUCTOS
// ======================================================

const productos = [

    // PIZZAS
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


    // EMPANADAS
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


    // SÁNDWICHES
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


    // PAPAS
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


    // POSTRES
    {
        id: 50,
        nombre: "Postre",
        categoria: "postres",
        agotado: false,
        precio: 3000
    },


    // BEBIDAS
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


// ======================================================
// GUSTOS DE EMPANADAS
// ======================================================

const gustosEmpanadas = [
    "Carne",
    "Carne dulce",
    "Árabe",
    "Jamón y queso",
    "Queso y cebolla",
    "Pollo"
];


// ======================================================
// VARIABLES
// ======================================================

let carrito = [];
let categoriaActual = "pizzas";
let cantidadEmpanadasNecesaria = 6;
let cantidadesEmpanadas = {};


// ======================================================
// PRECIO
// ======================================================

function formatoPrecio(precio) {
    return "$" + Number(precio).toLocaleString("es-AR");
}


// ======================================================
// MOSTRAR CATEGORÍA
// ======================================================

function mostrarCategoria(categoria) {

    categoriaActual = categoria;

    const contenedor = document.getElementById("productos");
    const titulo = document.getElementById("tituloCategoria");
    const subtitulo = document.getElementById("subtituloCategoria");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const nombres = {
        pizzas: "Pizzas",
        empanadas: "Empanadas",
        sandwiches: "Sándwiches",
        papas: "Papas",
        bebidas: "Bebidas",
        postres: "Postres"
    };

    if (titulo) {
        titulo.textContent = nombres[categoria] || "Nuestra Carta";
    }

    if (subtitulo) {
        subtitulo.textContent = "Elegí tus favoritos";
    }

    actualizarBotonesCategoria();

    if (categoria === "empanadas") {
        mostrarEmpanadas();
        return;
    }

    const filtrados = productos.filter(
        producto => producto.categoria === categoria
    );

    filtrados.forEach(producto => {

        if (producto.opciones) {
            crearProductoConOpciones(producto);
        } else {
            crearProductoSimple(producto);
        }

    });
}


// ======================================================
// BOTONES DE CATEGORÍA
// ======================================================

function actualizarBotonesCategoria() {

    document.querySelectorAll(".categoria").forEach(boton => {

        boton.classList.toggle(
            "activa",
            boton.dataset.categoria === categoriaActual
        );

    });
}


// ======================================================
// PRODUCTO SIMPLE
// ======================================================

function crearProductoSimple(producto) {

    const contenedor = document.getElementById("productos");

    if (!contenedor) return;

    const tarjeta = document.createElement("div");

    tarjeta.className = producto.agotado
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


// ======================================================
// PRODUCTO CON OPCIONES
// ======================================================

function crearProductoConOpciones(producto) {

    const contenedor = document.getElementById("productos");

    if (!contenedor) return;

    const tarjeta = document.createElement("div");

    tarjeta.className = producto.agotado
        ? "producto agotado"
        : "producto";

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

        let botones = "";

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
                    <strong>${opcion.nombre}</strong>
                    <span>${formatoPrecio(opcion.precio)}</span>
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


// ======================================================
// AGREGAR PRODUCTO
// ======================================================

function agregarAlCarrito(id, nombre, precio) {

    const producto = productos.find(
        item => item.id === id
    );

    if (producto && producto.agotado) {
        return;
    }

    const existente = carrito.find(
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


// ======================================================
// AGREGAR PIZZA
// ======================================================

function agregarOpcionPizza(
    id,
    nombre,
    opcion,
    precio
) {

    const producto = productos.find(
        item => item.id === id
    );

    if (producto && producto.agotado) {
        return;
    }

    const clave = `${id}-${opcion}`;
    const nombreCompleto = `${nombre} - ${opcion}`;

    const existente = carrito.find(
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


// ======================================================
// EMPANADAS
// ======================================================

function mostrarEmpanadas() {

    const contenedor = document.getElementById("productos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const tituloUnidad = document.createElement("div");

    tituloUnidad.className = "subtitulo-productos";
    tituloUnidad.textContent = "Por unidad · $2.200";

    contenedor.appendChild(tituloUnidad);

    productos
        .filter(producto => producto.categoria === "empanadas")
        .forEach(producto => {
            crearProductoSimple(producto);
        });

    const tituloPacks = document.createElement("div");

    tituloPacks.className = "subtitulo-productos";
    tituloPacks.textContent = "Packs de empanadas";

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


// ======================================================
// PACK EMPANADAS
// ======================================================

function crearPackEmpanadas(
    nombre,
    cantidad,
    precio
) {

    const contenedor = document.getElementById("productos");

    if (!contenedor) return;

    const tarjeta = document.createElement("div");

    tarjeta.className = "pack-empanadas";

    tarjeta.innerHTML = `
        <h3>${nombre}</h3>

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


// ======================================================
// SELECTOR DE EMPANADAS
// ======================================================

function abrirSelectorEmpanadas(
    cantidad,
    precio
) {

    cantidadEmpanadasNecesaria = cantidad;
    cantidadesEmpanadas = {};

    gustosEmpanadas.forEach(gusto => {
        cantidadesEmpanadas[gusto] = 0;
    });

    const modal = document.getElementById("modalEmpanadas");
    const titulo = document.getElementById("tituloEmpanadas");
    const cantidadNecesaria =
        document.getElementById("cantidadNecesaria");
    const cantidadSeleccionada =
        document.getElementById("cantidadSeleccionada");
    const lista =
        document.getElementById("listaGustosEmpanadas");
    const boton =
        document.getElementById("botonConfirmarEmpanadas");

    // CORRECCIÓN DEL ERROR ORIGINAL
    if (!modal || !lista || !boton) {
        console.error(
            "Falta algún elemento del selector de empanadas en el HTML."
        );
        return;
    }

    if (titulo) {
        titulo.textContent =
            cantidad === 12
                ? "Elegí los gustos de tu docena"
                : "Elegí los gustos de tu media docena";
    }

    if (cantidadNecesaria) {
        cantidadNecesaria.textContent = cantidad;
    }

    if (cantidadSeleccionada) {
        cantidadSeleccionada.textContent = "0";
    }

    lista.innerHTML = "";

    gustosEmpanadas.forEach(gusto => {

        const fila = document.createElement("div");

        fila.className = "gusto-empanada";

        const idCantidad = obtenerIdGusto(gusto);

        fila.innerHTML = `
            <div class="gusto-nombre">
                ${gusto}
            </div>

            <div class="controles-gusto">

                <button
                    type="button"
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
                    type="button"
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


// ======================================================
// ID DE GUSTO
// ======================================================

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


// ======================================================
// CAMBIAR CANTIDAD DE EMPANADAS
// ======================================================

function cambiarCantidadGusto(
    gusto,
    cambio
) {

    const producto = productos.find(
        item =>
            item.categoria === "empanadas" &&
            item.nombre
                .toLowerCase()
                .includes(gusto.toLowerCase())
    );

    if (producto && producto.agotado) {
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

    if (
        cambio > 0 &&
        totalActual >= cantidadEmpanadasNecesaria
    ) {
        return;
    }

    if (actual + cambio < 0) {
        return;
    }

    cantidadesEmpanadas[gusto] =
        actual + cambio;

    actualizarSelectorEmpanadas();
}


// ======================================================
// ACTUALIZAR SELECTOR
// ======================================================

function actualizarSelectorEmpanadas() {

    const total =
        Object.values(cantidadesEmpanadas)
            .reduce(
                (suma, cantidad) =>
                    suma + cantidad,
                0
            );

    const cantidadSeleccionada =
        document.getElementById("cantidadSeleccionada");

    const boton =
        document.getElementById(
            "botonConfirmarEmpanadas"
        );

    if (cantidadSeleccionada) {
        cantidadSeleccionada.textContent = total;
    }

    if (boton) {
        boton.disabled =
            total !== cantidadEmpanadasNecesaria;
    }

    gustosEmpanadas.forEach(gusto => {

        const elemento =
            document.getElementById(
                obtenerIdGusto(gusto)
            );

        if (elemento) {
            elemento.textContent =
                cantidadesEmpanadas[gusto] || 0;
        }

    });
}


// ======================================================
// CONFIRMAR EMPANADAS
// ======================================================

function confirmarEmpanadas() {

    const total =
        Object.values(cantidadesEmpanadas)
            .reduce(
                (suma, cantidad) =>
                    suma + cantidad,
                0
            );

    if (
        total !== cantidadEmpanadasNecesaria
    ) {
        return;
    }

    const detalle = [];

    gustosEmpanadas.forEach(gusto => {

        const cantidad =
            cantidadesEmpanadas[gusto] || 0;

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


// ======================================================
// CERRAR EMPANADAS
// ======================================================

function cerrarEmpanadas() {

    const modal =
        document.getElementById("modalEmpanadas");

    if (modal) {
        modal.classList.remove("abierto");
    }
}


// ======================================================
// CARRITO
// ======================================================

function actualizarCarrito() {

    const lista =
        document.getElementById("listaCarrito");

    const vacio =
        document.getElementById("carritoVacio");

    const cantidad =
        document.getElementById("cantidadCarrito");

    const totalCarrito =
        document.getElementById("totalCarrito");

    const totalFinal =
        document.getElementById("totalFinal");

    // Evita que el script se rompa si algún elemento
    // todavía no existe en el HTML.
    if (!lista) return;

    lista.innerHTML = "";

    let total = 0;
    let cantidadTotal = 0;

    if (carrito.length === 0) {

        if (vacio) {
            vacio.style.display = "block";
        }

    } else {

        if (vacio) {
            vacio.style.display = "none";
        }
    }

    carrito.forEach((item, indice) => {

        total +=
            item.precio * item.cantidad;

        cantidadTotal += item.cantidad;

        const div =
            document.createElement("div");

        div.className = "item-carrito";

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
                    ${formatoPrecio(item.precio)} c/u
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
                    type="button"
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
                    type="button"
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

    if (cantidad) {
        cantidad.textContent = cantidadTotal;
    }

    if (totalCarrito) {
        totalCarrito.textContent =
            formatoPrecio(total);
    }

    if (totalFinal) {
        totalFinal.textContent =
            formatoPrecio(total);
    }
}


// ======================================================
// CAMBIAR CANTIDAD DEL CARRITO
// ======================================================

function cambiarCantidadCarrito(
    indice,
    cambio
) {

    if (!carrito[indice]) {
        return;
    }

    carrito[indice].cantidad += cambio;

    if (carrito[indice].cantidad <= 0) {
        carrito.splice(indice, 1);
    }

    actualizarCarrito();
}


// ======================================================
// ABRIR CARRITO
// ======================================================

function abrirCarrito() {

    const modal =
        document.getElementById("modalCarrito");

    if (modal) {
        modal.classList.add("abierto");
    }
}


// ======================================================
// CERRAR CARRITO
// ======================================================

function cerrarCarrito() {

    const modal =
        document.getElementById("modalCarrito");

    if (modal) {
        modal.classList.remove("abierto");
    }
}


// ======================================================
// BUSCAR PRODUCTOS
// ======================================================

function buscarProducto() {

    const buscador =
        document.getElementById("buscador");

    const contenedor =
        document.getElementById("productos");

    if (!buscador || !contenedor) {
        return;
    }

    const texto =
        buscador.value
            .toLowerCase()
            .trim();

    if (!texto) {
        mostrarCategoria(categoriaActual);
        return;
    }

    contenedor.innerHTML = "";

    const resultados =
        productos.filter(producto =>
            producto.nombre
                .toLowerCase()
                .includes(texto)
        );

    if (resultados.length === 0) {

        contenedor.innerHTML = `
            <div class="sin-resultados">
                No encontramos ese producto 😕
            </div>
        `;

        return;
    }

    resultados.forEach(producto => {

        if (producto.opciones) {
            crearProductoConOpciones(producto);
        } else {
            crearProductoSimple(producto);
        }

    });
}


// ======================================================
// ABRIR / CERRAR BUSCADOR
// ======================================================

function abrirBusqueda() {

    const buscador =
        document.getElementById("buscadorContenedor");

    const input =
        document.getElementById("buscador");

    if (!buscador) return;

    buscador.classList.toggle("abierto");

    if (
        buscador.classList.contains("abierto") &&
        input
    ) {
        setTimeout(() => {
            input.focus();
        }, 100);
    }
}


// ======================================================
// VOLVER AL INICIO
// ======================================================

function volverInicio() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    mostrarCategoria("pizzas");
}


// ======================================================
// IR A HOME
// ======================================================

function irHome() {

    cerrarCarrito();

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}


// ======================================================
// IR AL MENÚ
// ======================================================

function irMenu() {

    const seccion =
        document.getElementById("productos");

    if (seccion) {

        seccion.scrollIntoView({
            behavior: "smooth",
            block: "start"
        });

    }
}


// ======================================================
// PERFIL
// ======================================================

function abrirPerfil() {

    const modal =
        document.getElementById("modalPerfil");

    if (!modal) return;

    modal.classList.add("abierto");

    const nombre =
        localStorage.getItem("viniloNombre");

    const apellido =
        localStorage.getItem("viniloApellido");

    const telefono =
        localStorage.getItem("viniloTelefono");

    const campoNombre =
        document.getElementById("perfilNombre");

    const campoApellido =
        document.getElementById("perfilApellido");

    const campoTelefono =
        document.getElementById("perfilTelefono");

    if (campoNombre) {
        campoNombre.value = nombre || "";
    }

    if (campoApellido) {
        campoApellido.value = apellido || "";
    }

    if (campoTelefono) {
        campoTelefono.value = telefono || "";
    }
}


function cerrarPerfil() {

    const modal =
        document.getElementById("modalPerfil");

    if (modal) {
        modal.classList.remove("abierto");
    }
}


function guardarPerfil() {

    const nombre =
        document.getElementById("perfilNombre");

    const apellido =
        document.getElementById("perfilApellido");

    const telefono =
        document.getElementById("perfilTelefono");

    localStorage.setItem(
        "viniloNombre",
        nombre ? nombre.value.trim() : ""
    );

    localStorage.setItem(
        "viniloApellido",
        apellido ? apellido.value.trim() : ""
    );

    localStorage.setItem(
        "viniloTelefono",
        telefono ? telefono.value.trim() : ""
    );

    alert("¡Tus datos fueron guardados! 💙");

    cerrarPerfil();
}


// ======================================================
// REWARDS
// ======================================================

function abrirRewards() {

    const modal =
        document.getElementById("modalRewards");

    if (modal) {
        modal.classList.add("abierto");
    }
}


function cerrarRewards() {

    const modal =
        document.getElementById("modalRewards");

    if (modal) {
        modal.classList.remove("abierto");
    }
}


// ======================================================
// ENVIAR PEDIDO POR WHATSAPP
// ======================================================

function enviarWhatsApp() {

    if (carrito.length === 0) {

        alert(
            "Todavía no agregaste ningún producto."
        );

        return;
    }

    const campoNombre =
        document.getElementById("nombreCliente");

    const campoTipoPedido =
        document.getElementById("tipoPedido");

    const campoDireccion =
        document.getElementById("direccionCliente");

    const campoFormaPago =
        document.getElementById("formaPago");

    const campoObservaciones =
        document.getElementById("observaciones");

    const nombre =
        campoNombre
            ? campoNombre.value.trim()
            : "";

    const tipoPedido =
        campoTipoPedido
            ? campoTipoPedido.value
            : "Retiro";

    const direccion =
        campoDireccion
            ? campoDireccion.value.trim()
            : "";

    const formaPago =
        campoFormaPago
            ? campoFormaPago.value
            : "No indicado";

    const observaciones =
        campoObservaciones
            ? campoObservaciones.value.trim()
            : "";

    let mensaje =
        "Hola! Quiero hacer el siguiente pedido:\n\n";


    // PRODUCTOS
    carrito.forEach(item => {

        mensaje +=
            `• ${item.nombre} x${item.cantidad}\n`;

        if (item.tipo === "empanadas") {

            mensaje +=
                `  ${item.detalle.join(" / ")}\n`;
        }

        mensaje +=
            `  ${formatoPrecio(
                item.precio * item.cantidad
            )}\n\n`;
    });


    // TOTAL
    const total =
        carrito.reduce(
            (suma, item) =>
                suma +
                item.precio * item.cantidad,
            0
        );

    mensaje +=
        `TOTAL: ${formatoPrecio(total)}\n\n`;


    // DATOS
    mensaje +=
        `Nombre: ${nombre || "No indicado"}\n`;

    mensaje +=
        `Pedido: ${tipoPedido}\n`;

    if (
        tipoPedido.toLowerCase() ===
        "delivery"
    ) {

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


    // WHATSAPP DE VINILO
    const numero =
        "5493564374272";

    const url =
        `https://wa.me/${numero}?text=${
            encodeURIComponent(mensaje)
        }`;

    window.open(
        url,
        "_blank"
    );
}


// ======================================================
// CERRAR MODALES AL HACER CLICK AFUERA
// ======================================================

document.addEventListener(
    "click",
    function(event) {

        const modales =
            document.querySelectorAll(".modal");

        modales.forEach(modal => {

            if (
                event.target === modal
            ) {
                modal.classList.remove("abierto");
            }

        });

    }
);


// ======================================================
// INICIO
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function() {

        mostrarCategoria("pizzas");

        actualizarCarrito();

    }
);