/* =========================================================
   VINILO RESTÓ BAR
   SCRIPT COMPLETO
========================================================= */


/* =========================================================
   PRODUCTOS
========================================================= */

const productos = [

    /* =======================
       PIZZAS
    ======================= */

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


    /* =======================
       EMPANADAS
    ======================= */

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


    /* =======================
       SANGUCHES
    ======================= */

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


    /* =======================
       PAPAS
    ======================= */

    {
        id: 40,
        nombre: "Papas fritas",
        categoria: "Papas",
        precio: 10000
    },

    {
        id: 41,
        nombre: "Papas con cheddar, verdeo y huevo",
        categoria: "Papas",
        precio: 11000
    },


    /* =======================
       POSTRES
    ======================= */

    {
        id: 50,
        nombre: "Postre",
        categoria: "Postres",
        precio: 3000
    },


    /* =======================
       BEBIDAS
    ======================= */

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


/* =========================================================
   VARIABLES
========================================================= */

let carrito = [];

let categoriaActual = "";


/* =========================================================
   FORMATO DE PRECIOS
========================================================= */

function formatoPrecio(precio) {

    return "$" + precio.toLocaleString("es-AR");

}


/* =========================================================
   MOSTRAR CATEGORÍA
========================================================= */

function mostrarCategoria(categoria) {

    categoriaActual = categoria;

    const contenedor = document.getElementById("productos");

    if (!contenedor) return;

    contenedor.innerHTML = "";

    const titulo = document.createElement("h2");

    titulo.className = "titulo-categoria";

    titulo.textContent = categoria;

    contenedor.appendChild(titulo);


    const productosCategoria = productos.filter(
        producto => producto.categoria === categoria
    );


    if (productosCategoria.length === 0) {

        contenedor.innerHTML += `
            <p class="sin-productos">
                No hay productos disponibles.
            </p>
        `;

        return;
    }


    productosCategoria.forEach(producto => {

        if (producto.opciones) {

            contenedor.innerHTML += crearProductoConOpciones(producto);

        } else {

            contenedor.innerHTML += crearProductoSimple(producto);

        }

    });

}


/* =========================================================
   PRODUCTO SIMPLE
========================================================= */

function crearProductoSimple(producto) {

    return `
        <article class="producto-card">

            <div class="producto-info">

                <h3>${producto.nombre}</h3>

                <strong class="precio-producto">
                    ${formatoPrecio(producto.precio)}
                </strong>

            </div>

            <button
                class="agregar"
                onclick="agregarProducto(
                    ${producto.id}
                )"
            >
                AGREGAR
            </button>

        </article>
    `;

}


/* =========================================================
   PRODUCTO CON OPCIONES
   EJ: PIZZA MEDIA / ENTERA
========================================================= */

function crearProductoConOpciones(producto) {

    let botones = "";


    producto.opciones.forEach(opcion => {

        botones += `

            <div class="opcion-pizza">

                <div class="opcion-info">

                    <strong>
                        ${opcion.nombre}
                    </strong>

                    <span>
                        ${formatoPrecio(opcion.precio)}
                    </span>

                </div>


                <button
                    class="boton-agregar-opcion"
                    onclick="agregarOpcionPizza(
                        ${producto.id},
                        '${producto.nombre.replace(/'/g, "\\'")}',
                        '${opcion.nombre.replace(/'/g, "\\'")}',
                        ${opcion.precio}
                    )"
                >
                    AGREGAR
                </button>

            </div>

        `;

    });


    return `

        <article class="producto-card producto-con-opciones">

            <div class="producto-info">

                <h3>${producto.nombre}</h3>

            </div>


            <div class="opciones-pizza">

                ${botones}

            </div>

        </article>

    `;

}


/* =========================================================
   AGREGAR PRODUCTO SIMPLE
========================================================= */

function agregarProducto(id) {

    const producto = productos.find(
        producto => producto.id === id
    );

    if (!producto) return;


    const existente = carrito.find(
        item => item.id === id
    );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            id: producto.id,

            nombre: producto.nombre,

            precio: producto.precio,

            cantidad: 1

        });

    }


    actualizarCarrito();

    mostrarConfirmacion(
        producto.nombre
    );

}


/* =========================================================
   AGREGAR PIZZA CON OPCIÓN
========================================================= */

function agregarOpcionPizza(
    id,
    nombre,
    opcion,
    precio
) {

    const clave = id + "-" + opcion;


    const existente = carrito.find(
        item => item.clave === clave
    );


    if (existente) {

        existente.cantidad++;

    } else {

        carrito.push({

            id: id,

            clave: clave,

            nombre: nombre + " - " + opcion,

            precio: precio,

            cantidad: 1

        });

    }


    actualizarCarrito();

    mostrarConfirmacion(
        nombre + " " + opcion
    );

}


/* =========================================================
   CONFIRMACIÓN VISUAL
========================================================= */

function mostrarConfirmacion(nombre) {

    let aviso = document.getElementById("avisoAgregado");


    if (!aviso) {

        aviso = document.createElement("div");

        aviso.id = "avisoAgregado";

        aviso.className = "aviso-agregado";

        document.body.appendChild(aviso);

    }


    aviso.textContent =
        "✓ " + nombre + " agregado al carrito";


    aviso.classList.add("mostrar");


    setTimeout(() => {

        aviso.classList.remove("mostrar");

    }, 1800);

}


/* =========================================================
   ACTUALIZAR CARRITO
========================================================= */

function actualizarCarrito() {

    const lista =
        document.getElementById("listaCarrito");

    const totalElemento =
        document.getElementById("totalCarrito");

    const contador =
        document.getElementById("contadorCarrito");


    let total = 0;

    let cantidadTotal = 0;


    if (lista) {

        lista.innerHTML = "";

    }


    if (carrito.length === 0) {

        if (lista) {

            lista.innerHTML = `
                <p class="carrito-vacio">
                    Tu carrito está vacío.
                </p>
            `;

        }

    } else {

        carrito.forEach((item, indice) => {

            total +=
                item.precio *
                item.cantidad;

            cantidadTotal +=
                item.cantidad;


            if (lista) {

                lista.innerHTML += `

                    <div class="item-carrito">

                        <div class="item-carrito-info">

                            <strong>
                                ${item.nombre}
                            </strong>

                            <span>
                                ${formatoPrecio(item.precio)}
                            </span>

                        </div>


                        <div class="cantidad-carrito">

                            <button
                                onclick="cambiarCantidad(${indice}, -1)"
                            >
                                −
                            </button>

                            <span>
                                ${item.cantidad}
                            </span>

                            <button
                                onclick="cambiarCantidad(${indice}, 1)"
                            >
                                +
                            </button>

                        </div>


                        <strong class="subtotal-carrito">
                            ${formatoPrecio(
                                item.precio *
                                item.cantidad
                            )}
                        </strong>


                        <button
                            class="eliminar-item"
                            onclick="eliminarProducto(${indice})"
                        >
                            🗑
                        </button>

                    </div>

                `;

            }

        });

    }


    if (totalElemento) {

        totalElemento.textContent =
            formatoPrecio(total);

    }


    if (contador) {

        contador.textContent =
            cantidadTotal;

        if (cantidadTotal > 0) {

            contador.classList.add("activo");

        } else {

            contador.classList.remove("activo");

        }

    }

}


/* =========================================================
   CAMBIAR CANTIDAD
========================================================= */

function cambiarCantidad(indice, cambio) {

    if (!carrito[indice]) return;


    carrito[indice].cantidad += cambio;


    if (carrito[indice].cantidad <= 0) {

        carrito.splice(indice, 1);

    }


    actualizarCarrito();

}


/* =========================================================
   ELIMINAR PRODUCTO
========================================================= */

function eliminarProducto(indice) {

    if (!carrito[indice]) return;


    carrito.splice(indice, 1);


    actualizarCarrito();

}


/* =========================================================
   ABRIR CARRITO
========================================================= */

function abrirCarrito() {

    const modal =
        document.getElementById("modalCarrito");

    if (!modal) return;


    modal.classList.add("activo");


    actualizarCarrito();

}


/* =========================================================
   CERRAR CARRITO
========================================================= */

function cerrarCarrito() {

    const modal =
        document.getElementById("modalCarrito");

    if (!modal) return;


    modal.classList.remove("activo");

}


/* =========================================================
   EMPANADAS
========================================================= */

function seleccionarPackEmpanadas(cantidad) {

    const contenedor =
        document.getElementById(
            "seleccionEmpanadas"
        );


    if (!contenedor) return;


    contenedor.innerHTML = "";


    const tipos = productos.filter(
        producto =>
            producto.categoria === "Empanadas"
    );


    let precioPack = 0;


    if (cantidad === 6) {

        precioPack = 13000;

    } else if (cantidad === 12) {

        precioPack = 25000;

    }


    let html = `

        <div class="seleccion-pack">

            <h3>
                Elegí tus empanadas
            </h3>

            <p>
                ${cantidad} unidades —
                ${formatoPrecio(precioPack)}
            </p>

            <div class="empanadas-lista">

    `;


    tipos.forEach(tipo => {

        html += `

            <div class="empanada-fila">

                <span>
                    ${tipo.nombre}
                </span>

                <input
                    type="number"
                    min="0"
                    max="${cantidad}"
                    value="0"
                    class="cantidad-empanada"
                    data-id="${tipo.id}"
                >

            </div>

        `;

    });


    html += `

            </div>

            <button
                class="boton-agregar-pack"
                onclick="agregarPackEmpanadas(${cantidad}, ${precioPack})"
            >
                AGREGAR ${cantidad} EMPANADAS
            </button>

        </div>

    `;


    contenedor.innerHTML = html;

}


/* =========================================================
   AGREGAR PACK DE EMPANADAS
========================================================= */

function agregarPackEmpanadas(
    cantidad,
    precioPack
) {

    const inputs =
        document.querySelectorAll(
            ".cantidad-empanada"
        );


    let suma = 0;

    const seleccion = [];


    inputs.forEach(input => {

        const cantidadElegida =
            parseInt(input.value) || 0;


        suma += cantidadElegida;


        if (cantidadElegida > 0) {

            const id =
                parseInt(
                    input.dataset.id
                );


            const producto =
                productos.find(
                    p => p.id === id
                );


            if (producto) {

                seleccion.push(
                    `${cantidadElegida} ${producto.nombre}`
                );

            }

        }

    });


    if (suma !== cantidad) {

        alert(
            `Tenés que elegir exactamente ${cantidad} empanadas.`
        );

        return;

    }


    carrito.push({

        id: "emp-" + Date.now(),

        nombre:
            `Pack ${cantidad} empanadas (${seleccion.join(", ")})`,

        precio: precioPack,

        cantidad: 1

    });


    actualizarCarrito();

    cerrarModalEmpanadas();


    mostrarConfirmacion(
        `Pack de ${cantidad} empanadas`
    );

}


/* =========================================================
   CERRAR MODAL EMPANADAS
========================================================= */

function cerrarModalEmpanadas() {

    const modal =
        document.getElementById(
            "modalEmpanadas"
        );


    if (!modal) return;


    modal.classList.remove("activo");

}


/* =========================================================
   PERFIL
========================================================= */

function abrirPerfil() {

    const modal =
        document.getElementById(
            "modalPerfil"
        );


    if (!modal) return;


    cargarPerfil();


    modal.classList.add("activo");

}


function cerrarPerfil() {

    const modal =
        document.getElementById(
            "modalPerfil"
        );


    if (!modal) return;


    modal.classList.remove("activo");

}


/* =========================================================
   GUARDAR PERFIL
========================================================= */

function guardarPerfil() {

    const nombre =
        document.getElementById(
            "perfilNombre"
        )?.value.trim() || "";


    const apellido =
        document.getElementById(
            "perfilApellido"
        )?.value.trim() || "";


    const telefono =
        document.getElementById(
            "perfilTelefono"
        )?.value.trim() || "";


    localStorage.setItem(
        "viniloPerfil",
        JSON.stringify({

            nombre,
            apellido,
            telefono

        })
    );


    alert(
        "✓ Datos guardados correctamente."
    );


    cerrarPerfil();

}


/* =========================================================
   CARGAR PERFIL
========================================================= */

function cargarPerfil() {

    const datos =
        localStorage.getItem(
            "viniloPerfil"
        );


    if (!datos) return;


    try {

        const perfil =
            JSON.parse(datos);


        const nombre =
            document.getElementById(
                "perfilNombre"
            );


        const apellido =
            document.getElementById(
                "perfilApellido"
            );


        const telefono =
            document.getElementById(
                "perfilTelefono"
            );


        if (nombre) {

            nombre.value =
                perfil.nombre || "";

        }


        if (apellido) {

            apellido.value =
                perfil.apellido || "";

        }


        if (telefono) {

            telefono.value =
                perfil.telefono || "";

        }

    } catch (error) {

        console.error(
            "No se pudo cargar el perfil.",
            error
        );

    }

}


/* =========================================================
   RECOMPENSAS
========================================================= */

function abrirRecompensas() {

    const modal =
        document.getElementById(
            "modalRecompensas"
        );


    if (!modal) return;


    modal.classList.add("activo");

}


function cerrarRecompensas() {

    const modal =
        document.getElementById(
            "modalRecompensas"
        );


    if (!modal) return;


    modal.classList.remove("activo");

}


/* =========================================================
   VOLVER AL INICIO
========================================================= */

function irInicio() {

    categoriaActual = "";


    const productosContenedor =
        document.getElementById(
            "productos"
        );


    if (productosContenedor) {

        productosContenedor.innerHTML = `

            <div class="mensaje-inicial">

                <h2>
                    Elegí una categoría
                </h2>

                <p>
                    Tocá una opción para ver el menú.
                </p>

            </div>

        `;

    }


    window.scrollTo({

        top: 0,

        behavior: "smooth"

    });

}


/* =========================================================
   ENVIAR PEDIDO POR WHATSAPP
========================================================= */

function enviarWhatsApp() {

    if (carrito.length === 0) {

        alert(
            "Primero agregá algún producto al carrito."
        );

        return;

    }


    const nombre =
        document.getElementById(
            "nombreCliente"
        )?.value.trim() || "";


    const tipoPedido =
        document.getElementById(
            "tipoPedido"
        )?.value || "";


    const direccion =
        document.getElementById(
            "direccionCliente"
        )?.value.trim() || "";


    const formaPago =
        document.getElementById(
            "formaPago"
        )?.value || "";


    const observaciones =
        document.getElementById(
            "observaciones"
        )?.value.trim() || "";


    /* =========================
       VALIDACIONES OBLIGATORIAS
    ========================== */


    if (!nombre) {

        alert(
            "Por favor, escribí tu nombre."
        );

        document.getElementById(
            "nombreCliente"
        )?.focus();

        return;

    }


    if (!tipoPedido) {

        alert(
            "Por favor, seleccioná cómo querés recibir el pedido."
        );

        document.getElementById(
            "tipoPedido"
        )?.focus();

        return;

    }


    if (
        tipoPedido === "Delivery" &&
        !direccion
    ) {

        alert(
            "Para Delivery tenés que ingresar tu dirección."
        );

        document.getElementById(
            "direccionCliente"
        )?.focus();

        return;

    }


    if (!formaPago) {

        alert(
            "Por favor, seleccioná una forma de pago."
        );

        document.getElementById(
            "formaPago"
        )?.focus();

        return;

    }


    /* =========================
       ARMAR PEDIDO
    ========================== */

    let mensaje =
        "🍽️ *NUEVO PEDIDO - VINILO*%0A%0A";


    mensaje +=
        "👤 *Nombre:* " +
        encodeURIComponent(nombre) +
        "%0A";


    mensaje +=
        "📦 *Pedido:* " +
        encodeURIComponent(tipoPedido) +
        "%0A";


    if (tipoPedido === "Delivery") {

        mensaje +=
            "📍 *Dirección:* " +
            encodeURIComponent(direccion) +
            "%0A";

    }


    mensaje +=
        "💳 *Forma de pago:* " +
        encodeURIComponent(formaPago) +
        "%0A%0A";


    mensaje +=
        "🛒 *DETALLE DEL PEDIDO:*%0A";


    let total = 0;


    carrito.forEach(item => {

        const subtotal =
            item.precio *
            item.cantidad;


        total += subtotal;


        mensaje +=
            "• " +
            encodeURIComponent(
                `${item.cantidad} x ${item.nombre}`
            ) +
            " — " +
            encodeURIComponent(
                formatoPrecio(subtotal)
            ) +
            "%0A";

    });


    mensaje +=
        "%0A💰 *TOTAL: " +
        encodeURIComponent(
            formatoPrecio(total)
        ) +
        "*%0A";


    if (observaciones) {

        mensaje +=
            "%0A📝 *Observaciones:* " +
            encodeURIComponent(
                observaciones
            ) +
            "%0A";

    }


    /* =========================
       WHATSAPP
    ========================== */

    const numero =
        "5493564374272";


    const url =
        "https://wa.me/" +
        numero +
        "?text=" +
        mensaje;


    window.open(
        url,
        "_blank"
    );

}


/* =========================================================
   CERRAR MODALES AL TOCAR AFUERA
========================================================= */

window.addEventListener(
    "click",
    function(event) {

        const modales =
            document.querySelectorAll(
                ".modal"
            );


        modales.forEach(modal => {

            if (
                event.target === modal
            ) {

                modal.classList.remove(
                    "activo"
                );

            }

        });

    }
);


/* =========================================================
   ESC PARA CERRAR MODALES
========================================================= */

document.addEventListener(
    "keydown",
    function(event) {

        if (event.key !== "Escape") return;


        const modales =
            document.querySelectorAll(
                ".modal.activo"
            );


        modales.forEach(modal => {

            modal.classList.remove(
                "activo"
            );

        });

    }
);


/* =========================================================
   INICIAR
========================================================= */

document.addEventListener(
    "DOMContentLoaded",
    function() {

        actualizarCarrito();

    }
);