// ======================================================
// VINILO - SCRIPT PRINCIPAL
// ======================================================


// ======================================================
// PRODUCTOS
// ======================================================

const productos = [

    // -------------------------
    // PIZZAS
    // -------------------------

    {
        id: 1,
        nombre: "Mozzarella",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 6000 },
            { nombre: "Entera", precio: 12000 }
        ]
    },

    {
        id: 2,
        nombre: "Napolitana",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 18000 }
        ]
    },

    {
        id: 3,
        nombre: "Fugazza",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 4,
        nombre: "Rúcula",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 5,
        nombre: "Calabresa",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 20000 }
        ]
    },

    {
        id: 6,
        nombre: "Especial",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 16000 }
        ]
    },

    {
        id: 7,
        nombre: "Especial con huevo",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 10000 },
            { nombre: "Entera", precio: 18000 }
        ]
    },

    {
        id: 8,
        nombre: "Cremosa Vinilo",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 22000 }
        ]
    },

    {
        id: 9,
        nombre: "Explosiva",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Media", precio: 12000 },
            { nombre: "Entera", precio: 24000 }
        ]
    },

    {
        id: 10,
        nombre: "Pizza Lomo",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Mini", precio: 30000 },
            { nombre: "Grande", precio: 50000 }
        ]
    },

    {
        id: 11,
        nombre: "Pizza Nesa",
        categoria: "Pizzas",
        opciones: [
            { nombre: "Mini", precio: 25000 },
            { nombre: "Grande", precio: 45000 }
        ]
    },


    // -------------------------
    // EMPANADAS
    // -------------------------

    {
        id: 20,
        nombre: "Carne",
        categoria: "Empanadas",
        precio: 2200
    },

    {
        id: 21,
        nombre: "Carne dulce",
        categoria: "Empanadas",
        precio: 2200
    },

    {
        id: 22,
        nombre: "Árabe",
        categoria: "Empanadas",
        precio: 2200
    },

    {
        id: 23,
        nombre: "Jamón y queso",
        categoria: "Empanadas",
        precio: 2200
    },

    {
        id: 24,
        nombre: "Queso y cebolla",
        categoria: "Empanadas",
        precio: 2200
    },

    {
        id: 25,
        nombre: "Pollo",
        categoria: "Empanadas",
        precio: 2200
    },


    // -------------------------
    // SANGUCHES
    // -------------------------

    {
        id: 31,
        nombre: "Mila de pollo completa",
        categoria: "Sandwiches",
        precio: 12000
    },

    {
        id: 32,
        nombre: "Mila de carne completa",
        categoria: "Sandwiches",
        precio: 18000
    },

    {
        id: 33,
        nombre: "Sanguchazo con papas",
        categoria: "Sandwiches",
        precio: 22000
    },

    {
        id: 34,
        nombre: "Lomito simple",
        categoria: "Sandwiches",
        precio: 18000
    },

    {
        id: 35,
        nombre: "Lomito completo",
        categoria: "Sandwiches",
        precio: 18000
    },

    {
        id: 36,
        nombre: "Hamburguesa simple",
        categoria: "Sandwiches",
        precio: 12000
    },

    {
        id: 37,
        nombre: "Hamburguesa completa",
        categoria: "Sandwiches",
        precio: 12000
    },


    // -------------------------
    // PAPAS
    // -------------------------

    {
        id: 40,
        nombre: "Porción de papas fritas",
        categoria: "Papas",
        precio: 10000
    },

    {
        id: 41,
        nombre: "Papas con cheddar / verdeo / huevo",
        categoria: "Papas",
        precio: 11000
    },


    // -------------------------
    // POSTRES
    // -------------------------

    {
        id: 50,
        nombre: "Postre",
        categoria: "Postres",
        precio: 3000
    },


    // -------------------------
    // BEBIDAS
    // -------------------------

    {
        id: 60,
        nombre: "Agua 500 ml",
        categoria: "Bebidas",
        precio: 3000
    },

    {
        id: 61,
        nombre: "Agua 1,5 L",
        categoria: "Bebidas",
        precio: 5000
    },

    {
        id: 62,
        nombre: "Agua saborizada 500 ml",
        categoria: "Bebidas",
        precio: 3000
    },

    {
        id: 63,
        nombre: "Agua saborizada 1,5 L",
        categoria: "Bebidas",
        precio: 5000
    },

    {
        id: 64,
        nombre: "Pepsi / 7UP 500 ml",
        categoria: "Bebidas",
        precio: 4000
    },

    {
        id: 65,
        nombre: "Coca-Cola 1,5 L",
        categoria: "Bebidas",
        precio: 5000
    },

    {
        id: 66,
        nombre: "Coca-Cola 1,125 L",
        categoria: "Bebidas",
        precio: 8000
    },

    {
        id: 67,
        nombre: "Brahma",
        categoria: "Bebidas",
        precio: 8000
    },

    {
        id: 68,
        nombre: "Brahma lata",
        categoria: "Bebidas",
        precio: 5000
    },

    {
        id: 69,
        nombre: "Stella Artois",
        categoria: "Bebidas",
        precio: 12000
    },

    {
        id: 70,
        nombre: "Stella Artois lata",
        categoria: "Bebidas",
        precio: 6000
    },

    {
        id: 71,
        nombre: "Budweiser",
        categoria: "Bebidas",
        precio: 4000
    },

    {
        id: 72,
        nombre: "Budweiser lata",
        categoria: "Bebidas",
        precio: 4000
    },

    {
        id: 73,
        nombre: "Santa Fe lata",
        categoria: "Bebidas",
        precio: 4000
    },

    {
        id: 74,
        nombre: "Trapiche",
        categoria: "Bebidas",
        precio: 20000
    },

    {
        id: 75,
        nombre: "Alma Mora",
        categoria: "Bebidas",
        precio: 18000
    },

    {
        id: 76,
        nombre: "F. Las Moras",
        categoria: "Bebidas",
        precio: 13000
    },

    {
        id: 77,
        nombre: "San Telmo",
        categoria: "Bebidas",
        precio: 12000
    },

    {
        id: 78,
        nombre: "Origen",
        categoria: "Bebidas",
        precio: 18000
    },

    {
        id: 79,
        nombre: "Est. Mendoza",
        categoria: "Bebidas",
        precio: 10000
    },

    {
        id: 80,
        nombre: "Don Valentín",
        categoria: "Bebidas",
        precio: 15000
    },

    {
        id: 81,
        nombre: "Fernet jarra",
        categoria: "Bebidas",
        precio: 12000
    },

    {
        id: 82,
        nombre: "Fernet medida",
        categoria: "Bebidas",
        precio: 5000
    },

    {
        id: 83,
        nombre: "Smirnoff + Speed",
        categoria: "Bebidas",
        precio: 12000
    },

    {
        id: 84,
        nombre: "Sky + Speed",
        categoria: "Bebidas",
        precio: 18000
    }

];


// ======================================================
// VARIABLES
// ======================================================

let carrito = [];

let cantidadEmpanadasSeleccionadas = 0;
let tipoPackEmpanadas = "";


// ======================================================
// MOSTRAR CATEGORÍA
// ======================================================

function mostrarCategoria(categoria) {

    const contenedor = document.getElementById("productos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const productosFiltrados = productos.filter(
        producto => producto.categoria === categoria
    );

    const titulo = document.createElement("h2");

    titulo.className = "titulo-categoria";
    titulo.textContent = categoria;

    contenedor.appendChild(titulo);


    // EMPANADAS
    if (categoria === "Empanadas") {

        mostrarOpcionesEmpanadas(contenedor);

        return;
    }


    // PRODUCTOS NORMALES

    productosFiltrados.forEach(producto => {

        if (producto.opciones) {

            contenedor.innerHTML += crearProductoConOpciones(producto);

        } else {

            contenedor.innerHTML += crearProductoSimple(producto);

        }

    });

}


// ======================================================
// EMPANADAS - MEDIA DOCENA / DOCENA
// ======================================================

function mostrarOpcionesEmpanadas(contenedor) {

    contenedor.innerHTML += `

        <div class="producto-card empanadas-pack-card">

            <div class="producto-info">

                <h3 class="producto-nombre">
                    Media docena
                </h3>

                <span class="precio-producto">
                    $13.000
                </span>

            </div>

            <button
                class="agregar"
                onclick="abrirSeleccionEmpanadas(6)"
            >
                AGREGAR
            </button>

        </div>


        <div class="producto-card empanadas-pack-card">

            <div class="producto-info">

                <h3 class="producto-nombre">
                    Docena
                </h3>

                <span class="precio-producto">
                    $25.000
                </span>

            </div>

            <button
                class="agregar"
                onclick="abrirSeleccionEmpanadas(12)"
            >
                AGREGAR
            </button>

        </div>

    `;
}


// ======================================================
// CREAR PRODUCTO SIMPLE
// ======================================================

function crearProductoSimple(producto) {

    return `

        <article class="producto-card">

            <div class="producto-info">

                <h3 class="producto-nombre">
                    ${producto.nombre}
                </h3>

                <span class="precio-producto">
                    $${producto.precio.toLocaleString("es-AR")}
                </span>

            </div>

            <button
                class="agregar"
                onclick="agregarProducto(${producto.id})"
            >
                AGREGAR
            </button>

        </article>

    `;
}


// ======================================================
// CREAR PIZZA CON OPCIONES
// ======================================================

function crearProductoConOpciones(producto) {

    let opcionesHTML = "";

    producto.opciones.forEach((opcion, indice) => {

        opcionesHTML += `

            <div class="opcion-pizza">

                <div class="opcion-info">

                    <strong>
                        ${opcion.nombre}
                    </strong>

                    <span>
                        $${opcion.precio.toLocaleString("es-AR")}
                    </span>

                </div>

                <button
                    class="boton-agregar-opcion"
                    onclick="agregarOpcionPizza(
                        ${producto.id},
                        ${indice}
                    )"
                >
                    AGREGAR
                </button>

            </div>

        `;

    });


    return `

        <article class="producto-card">

            <div class="producto-info">

                <h3 class="producto-nombre">
                    ${producto.nombre}
                </h3>

            </div>

            <div class="opciones-pizza">

                ${opcionesHTML}

            </div>

        </article>

    `;
}


// ======================================================
// AGREGAR PRODUCTO SIMPLE
// ======================================================

function agregarProducto(id) {

    const producto = productos.find(
        producto => producto.id === id
    );

    if (!producto) return;

    agregarAlCarrito(
        producto.nombre,
        producto.precio,
        1
    );

}


// ======================================================
// AGREGAR OPCIÓN DE PIZZA
// ======================================================

function agregarOpcionPizza(idProducto, indiceOpcion) {

    const producto = productos.find(
        producto => producto.id === idProducto
    );

    if (!producto || !producto.opciones[indiceOpcion]) {
        return;
    }

    const opcion = producto.opciones[indiceOpcion];

    const nombreCompleto =
        `${producto.nombre} - ${opcion.nombre}`;


    agregarAlCarrito(
        nombreCompleto,
        opcion.precio,
        1
    );

}


// ======================================================
// AGREGAR AL CARRITO
// ======================================================

function agregarAlCarrito(nombre, precio, cantidad = 1) {

    const existente = carrito.find(
        item => item.nombre === nombre
    );


    if (existente) {

        existente.cantidad += cantidad;

    } else {

        carrito.push({

            nombre: nombre,
            precio: precio,
            cantidad: cantidad

        });

    }


    actualizarCarrito();

    mostrarAvisoAgregado(nombre);

}


// ======================================================
// AVISO PRODUCTO AGREGADO
// ======================================================

function mostrarAvisoAgregado(nombre) {

    let aviso = document.querySelector(".aviso-agregado");

    if (aviso) {
        aviso.remove();
    }


    aviso = document.createElement("div");

    aviso.className = "aviso-agregado";

    aviso.textContent =
        `${nombre} agregado al pedido ✓`;


    document.body.appendChild(aviso);


    setTimeout(() => {

        aviso.classList.add("mostrar");

    }, 10);


    setTimeout(() => {

        aviso.classList.remove("mostrar");

        setTimeout(() => {

            aviso.remove();

        }, 300);

    }, 1800);

}


// ======================================================
// EMPANADAS - ABRIR SELECCIÓN
// ======================================================

function abrirSeleccionEmpanadas(cantidad) {

    cantidadEmpanadasSeleccionadas = cantidad;

    tipoPackEmpanadas =
        cantidad === 6
            ? "Media docena"
            : "Docena";


    const modal =
        document.getElementById("modalEmpanadas");

    const titulo =
        document.getElementById("tituloEmpanadas");

    const texto =
        document.getElementById("textoEmpanadas");

    const contenedor =
        document.getElementById("seleccionEmpanadas");


    if (!modal || !titulo || !texto || !contenedor) {
        return;
    }


    titulo.textContent =
        `${tipoPackEmpanadas} de empanadas 🥟`;


    texto.textContent =
        `Elegí ${cantidad} gustos. Podés combinar los sabores como quieras.`;


    const empanadas = productos.filter(
        producto => producto.categoria === "Empanadas"
    );


    let html = `

        <div class="selector-empanadas">

            <p class="contador-empanadas">
                Seleccionadas:
                <strong>
                    <span id="cantidadElegidaEmpanadas">0</span>
                    / ${cantidad}
                </strong>
            </p>

    `;


    empanadas.forEach(empanada => {

        html += `

            <div class="fila-empanada">

                <span>
                    ${empanada.nombre}
                </span>

                <div class="controles-empanada">

                    <button
                        type="button"
                        onclick="cambiarCantidadEmpanada(
                            ${empanada.id},
                            -1
                        )"
                    >
                        −
                    </button>

                    <strong
                        id="cantidadEmpanada-${empanada.id}"
                    >
                        0
                    </strong>

                    <button
                        type="button"
                        onclick="cambiarCantidadEmpanada(
                            ${empanada.id},
                            1
                        )"
                    >
                        +
                    </button>

                </div>

            </div>

        `;

    });


    html += `

            <button
                type="button"
                class="boton-confirmar-empanadas"
                onclick="confirmarEmpanadas()"
            >
                AGREGAR AL PEDIDO
            </button>

        </div>

    `;


    contenedor.innerHTML = html;


    modal.classList.add("activo");

}


// ======================================================
// CAMBIAR CANTIDAD DE EMPANADA
// ======================================================

function cambiarCantidadEmpanada(id, cambio) {

    const elemento =
        document.getElementById(
            `cantidadEmpanada-${id}`
        );


    if (!elemento) return;


    let cantidadActual =
        parseInt(elemento.textContent) || 0;


    const nuevaCantidad =
        cantidadActual + cambio;


    // No permitir cantidades negativas
    if (nuevaCantidad < 0) {
        return;
    }


    // No permitir superar la cantidad del pack
    if (nuevaCantidad > cantidadEmpanadasSeleccionadas) {
        return;
    }


    elemento.textContent = nuevaCantidad;


    actualizarContadorEmpanadas();

}


// ======================================================
// ACTUALIZAR CONTADOR DE EMPANADAS
// ======================================================

function actualizarContadorEmpanadas() {

    let total = 0;


    const empanadas = productos.filter(
        producto => producto.categoria === "Empanadas"
    );


    empanadas.forEach(empanada => {

        const elemento =
            document.getElementById(
                `cantidadEmpanada-${empanada.id}`
            );


        if (elemento) {

            total +=
                parseInt(elemento.textContent) || 0;

        }

    });


    const contador =
        document.getElementById(
            "cantidadElegidaEmpanadas"
        );


    if (contador) {
        contador.textContent = total;
    }

}


// ======================================================
// CONFIRMAR EMPANADAS
// ======================================================

function confirmarEmpanadas() {

    const empanadas = productos.filter(
        producto => producto.categoria === "Empanadas"
    );


    let totalSeleccionado = 0;

    let detalles = [];


    empanadas.forEach(empanada => {

        const elemento =
            document.getElementById(
                `cantidadEmpanada-${empanada.id}`
            );


        if (!elemento) return;


        const cantidad =
            parseInt(elemento.textContent) || 0;


        if (cantidad > 0) {

            totalSeleccionado += cantidad;


            detalles.push(
                `${cantidad} ${empanada.nombre}`
            );

        }

    });


    // Verificar que haya elegido exactamente el pack
    if (
        totalSeleccionado !==
        cantidadEmpanadasSeleccionadas
    ) {

        alert(
            `Tenés que elegir exactamente ${cantidadEmpanadasSeleccionadas} empanadas.`
        );

        return;
    }


    const precio =
        cantidadEmpanadasSeleccionadas === 6
            ? 13000
            : 25000;


    const nombreCarrito =
        `${tipoPackEmpanadas}: ${detalles.join(", ")}`;


    agregarAlCarrito(
        nombreCarrito,
        precio,
        1
    );


    cerrarModalEmpanadas();

}


// ======================================================
// CERRAR MODAL EMPANADAS
// ======================================================

function cerrarModalEmpanadas() {

    const modal =
        document.getElementById("modalEmpanadas");


    if (modal) {

        modal.classList.remove("activo");

    }

}


// ======================================================
// ACTUALIZAR CARRITO
// ======================================================

function actualizarCarrito() {

    const lista =
        document.getElementById("listaCarrito");

    const totalElemento =
        document.getElementById("totalCarrito");

    const contador =
        document.getElementById("contadorCarrito");


    if (!lista) return;


    lista.innerHTML = "";


    let total = 0;

    let cantidadTotal = 0;


    if (carrito.length === 0) {

        lista.innerHTML = `
            <p class="carrito-vacio">
                Tu pedido está vacío.
            </p>
        `;

    } else {

        carrito.forEach((item, indice) => {

            const subtotal =
                item.precio * item.cantidad;


            total += subtotal;

            cantidadTotal += item.cantidad;


            lista.innerHTML += `

                <div class="item-carrito">

                    <div class="item-carrito-info">

                        <strong>
                            ${item.nombre}
                        </strong>

                        <span>
                            $${item.precio.toLocaleString("es-AR")}
                        </span>

                    </div>


                    <div class="controles-carrito">

                        <button
                            onclick="cambiarCantidadCarrito(
                                ${indice},
                                -1
                            )"
                        >
                            −
                        </button>


                        <span class="cantidad-carrito">
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


                        <button
                            class="eliminar-item"
                            onclick="eliminarDelCarrito(
                                ${indice}
                            )"
                        >
                            🗑
                        </button>

                    </div>


                    <div class="subtotal-carrito">
                        $${subtotal.toLocaleString("es-AR")}
                    </div>

                </div>

            `;

        });

    }


    if (totalElemento) {

        totalElemento.textContent =
            `Total: $${total.toLocaleString("es-AR")}`;

    }


    if (contador) {

        contador.textContent =
            cantidadTotal;

    }

}


// ======================================================
// CAMBIAR CANTIDAD DEL CARRITO
// ======================================================

function cambiarCantidadCarrito(indice, cambio) {

    if (!carrito[indice]) return;


    carrito[indice].cantidad += cambio;


    if (carrito[indice].cantidad <= 0) {

        carrito.splice(indice, 1);

    }


    actualizarCarrito();

}


// ======================================================
// ELIMINAR DEL CARRITO
// ======================================================

function eliminarDelCarrito(indice) {

    if (!carrito[indice]) return;


    carrito.splice(indice, 1);


    actualizarCarrito();

}


// ======================================================
// ABRIR CARRITO
// ======================================================

function abrirCarrito() {

    const modal =
        document.getElementById("modalCarrito");


    if (!modal) return;


    actualizarCarrito();


    const perfil =
        JSON.parse(
            localStorage.getItem("viniloPerfil")
        );


    if (perfil) {

        const nombre =
            document.getElementById("nombreCliente");


        if (nombre && !nombre.value) {

            nombre.value =
                `${perfil.nombre || ""} ${perfil.apellido || ""}`.trim();

        }

    }


    modal.classList.add("activo");

}


// ======================================================
// CERRAR CARRITO
// ======================================================

function cerrarCarrito() {

    const modal =
        document.getElementById("modalCarrito");


    if (modal) {

        modal.classList.remove("activo");

    }

}


// ======================================================
// PERFIL
// ======================================================

function abrirPerfil() {

    const modal =
        document.getElementById("modalPerfil");


    if (!modal) return;


    const datos =
        JSON.parse(
            localStorage.getItem("viniloPerfil")
        );


    if (datos) {

        document.getElementById("perfilNombre").value =
            datos.nombre || "";

        document.getElementById("perfilApellido").value =
            datos.apellido || "";

        document.getElementById("perfilTelefono").value =
            datos.telefono || "";

    }


    modal.classList.add("activo");

}


// ======================================================
// GUARDAR PERFIL
// ======================================================

function guardarPerfil() {

    const nombre =
        document.getElementById("perfilNombre").value.trim();

    const apellido =
        document.getElementById("perfilApellido").value.trim();

    const telefono =
        document.getElementById("perfilTelefono").value.trim();


    const datos = {

        nombre: nombre,
        apellido: apellido,
        telefono: telefono

    };


    localStorage.setItem(
        "viniloPerfil",
        JSON.stringify(datos)
    );


    alert("Datos guardados correctamente ✓");


    cerrarPerfil();

}


// ======================================================
// CERRAR PERFIL
// ======================================================

function cerrarPerfil() {

    const modal =
        document.getElementById("modalPerfil");


    if (modal) {

        modal.classList.remove("activo");

    }

}


// ======================================================
// PREMIOS
// ======================================================

function abrirRecompensas() {

    const modal =
        document.getElementById("modalRecompensas");


    if (modal) {

        modal.classList.add("activo");

    }

}


// ======================================================
// CERRAR PREMIOS
// ======================================================

function cerrarRecompensas() {

    const modal =
        document.getElementById("modalRecompensas");


    if (modal) {

        modal.classList.remove("activo");

    }

}


// ======================================================
// VOLVER AL INICIO
// ======================================================

function irInicio() {

    window.scrollTo({

        top: 0,
        behavior: "smooth"

    });


    const productos =
        document.getElementById("productos");


    if (productos) {

        productos.innerHTML = `
            <div class="mensaje-inicial">
                Elegí una categoría para ver nuestros productos.
            </div>
        `;

    }

}


// ======================================================
// ENVIAR PEDIDO POR WHATSAPP
// ======================================================

function enviarWhatsApp() {

    // Verificar carrito
    if (carrito.length === 0) {

        alert(
            "Tu pedido está vacío."
        );

        return;
    }


    const nombre =
        document
            .getElementById("nombreCliente")
            .value
            .trim();


    const tipoPedido =
        document
            .getElementById("tipoPedido")
            .value;


    const direccion =
        document
            .getElementById("direccionCliente")
            .value
            .trim();


    const formaPago =
        document
            .getElementById("formaPago")
            .value;


    const observaciones =
        document
            .getElementById("observaciones")
            .value
            .trim();


    // Nombre
    if (!nombre) {

        alert(
            "Por favor ingresá tu nombre."
        );

        return;
    }


    // Tipo de pedido
    if (!tipoPedido) {

        alert(
            "Por favor seleccioná el tipo de pedido."
        );

        return;
    }


    // Dirección si es delivery
    if (
        tipoPedido === "Delivery" &&
        !direccion
    ) {

        alert(
            "Por favor ingresá tu dirección."
        );

        return;
    }


    // Forma de pago
    if (!formaPago) {

        alert(
            "Por favor seleccioná la forma de pago."
        );

        return;
    }


    // ==================================================
    // ARMAR MENSAJE
    // ==================================================

    let mensaje =
        `🍽️ *NUEVO PEDIDO - VINILO*%0A%0A`;


    mensaje +=
        `👤 *Nombre:* ${nombre}%0A`;

    mensaje +=
        `📦 *Tipo de pedido:* ${tipoPedido}%0A`;


    if (tipoPedido === "Delivery") {

        mensaje +=
            `📍 *Dirección:* ${direccion}%0A`;

    }


    mensaje +=
        `💳 *Forma de pago:* ${formaPago}%0A%0A`;


    mensaje +=
        `🛒 *PEDIDO:*%0A`;


    let total = 0;


    carrito.forEach(item => {

        const subtotal =
            item.precio * item.cantidad;


        total += subtotal;


        mensaje +=
            `• ${item.cantidad} x ${item.nombre} — $${subtotal.toLocaleString("es-AR")}%0A`;

    });


    mensaje +=
        `%0A💰 *TOTAL: $${total.toLocaleString("es-AR")}*%0A`;


    if (observaciones) {

        mensaje +=
            `%0A📝 *Observaciones:* ${observaciones}%0A`;

    }


    mensaje +=
        `%0A¡Gracias! 🙌`;


    // ==================================================
    // WHATSAPP
    // ==================================================

    const numeroWhatsApp =
        "5493564374272";


    const url =
        `https://wa.me/${numeroWhatsApp}?text=${mensaje}`;


    window.open(
        url,
        "_blank"
    );

}


// ======================================================
// CERRAR MODALES AL TOCAR AFUERA
// ======================================================

window.addEventListener(
    "click",
    function (evento) {

        const modales =
            document.querySelectorAll(".modal");


        modales.forEach(modal => {

            if (evento.target === modal) {

                modal.classList.remove("activo");

            }

        });

    }
);


// ======================================================
// CERRAR MODALES CON ESCAPE
// ======================================================

document.addEventListener(
    "keydown",
    function (evento) {

        if (evento.key === "Escape") {

            const modales =
                document.querySelectorAll(".modal");


            modales.forEach(modal => {

                modal.classList.remove("activo");

            });

        }

    }
);


// ======================================================
// INICIAR
// ======================================================

document.addEventListener(
    "DOMContentLoaded",
    function () {

        actualizarCarrito();

        irInicio();

    }
);