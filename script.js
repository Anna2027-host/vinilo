javascript
// ===============================
// PRODUCTOS
// ===============================

const productos = [

    // ===========================
    // PIZZAS
    // ===========================

    {
        id: 1,
        nombre: "Mozzarella",
        categoria: "pizzas",
        media: 6000,
        entera: 12000
    },

    {
        id: 2,
        nombre: "Napolitana",
        categoria: "pizzas",
        media: 10000,
        entera: 18000
    },

    {
        id: 3,
        nombre: "Fugazza",
        categoria: "pizzas",
        media: 10000,
        entera: 20000
    },

    {
        id: 4,
        nombre: "Rúcula",
        categoria: "pizzas",
        descripcion: "Mozzarella, rúcula y cebolla",
        media: 12000,
        entera: 20000
    },

    {
        id: 5,
        nombre: "Calabresa",
        categoria: "pizzas",
        descripcion: "Mozzarella, salame y orégano",
        media: 12000,
        entera: 20000
    },

    {
        id: 6,
        nombre: "Especial",
        categoria: "pizzas",
        media: 10000,
        entera: 16000
    },

    {
        id: 7,
        nombre: "Especial con huevo",
        categoria: "pizzas",
        media: 10000,
        entera: 18000
    },

    {
        id: 8,
        nombre: "Cremosa Vinilo",
        categoria: "pizzas",
        media: 12000,
        entera: 22000
    },

    {
        id: 9,
        nombre: "Explosiva",
        categoria: "pizzas",
        media: 12000,
        entera: 24000
    },

    {
        id: 10,
        nombre: "Pizza Lomo",
        categoria: "pizzas",
        mini: 30000,
        grande: 50000
    },

    {
        id: 11,
        nombre: "Pizza Nesa",
        categoria: "pizzas",
        mini: 25000,
        grande: 45000
    },


    // ===========================
    // PAPAS
    // ===========================

    {
        id: 12,
        nombre: "Porción de papas",
        precio: 10000,
        categoria: "pizzas",
        subcategoria: "papas"
    },

    {
        id: 13,
        nombre: "Papas con cheddar / verdeo / huevo",
        precio: 11000,
        categoria: "pizzas",
        subcategoria: "papas"
    },


    // ===========================
    // EXTRAS
    // ===========================

    {
        id: 14,
        nombre: "Palmito",
        categoria: "pizzas",
        subcategoria: "extras",
        media: 1400,
        entera: 2400
    },

    {
        id: 15,
        nombre: "Huevo",
        categoria: "pizzas",
        subcategoria: "extras",
        media: 1400,
        entera: 2400
    },

    {
        id: 16,
        nombre: "Ananá",
        categoria: "pizzas",
        subcategoria: "extras",
        media: 1400,
        entera: 2400
    },

    {
        id: 17,
        nombre: "Morrón",
        categoria: "pizzas",
        subcategoria: "extras",
        media: 1400,
        entera: 2400
    },

    {
        id: 18,
        nombre: "Anchoas",
        categoria: "pizzas",
        subcategoria: "extras",
        media: 1400,
        entera: 2400
    },

    {
        id: 19,
        nombre: "Rúcula extra",
        categoria: "pizzas",
        subcategoria: "extras",
        media: 1400,
        entera: 2400
    },


    // ===========================
    // EMPANADAS
    // ===========================

    {
        id: 20,
        nombre: "Carne salada",
        precio: 2200,
        categoria: "empanadas"
    },

    {
        id: 21,
        nombre: "Carne dulce",
        precio: 2200,
        categoria: "empanadas"
    },

    {
        id: 22,
        nombre: "Árabe",
        precio: 2200,
        categoria: "empanadas"
    },

    {
        id: 23,
        nombre: "Jamón y queso",
        precio: 2200,
        categoria: "empanadas"
    },

    {
        id: 24,
        nombre: "Queso y cebolla",
        precio: 2200,
        categoria: "empanadas"
    },

    {
        id: 25,
        nombre: "Pollo",
        precio: 2200,
        categoria: "empanadas"
    },


    // ===========================
    // SANDWICHES
    // ===========================

    {
        id: 26,
        nombre: "Sándwich de mila de pollo completo",
        precio: 12000,
        categoria: "sandwiches"
    },

    {
        id: 27,
        nombre: "Sándwich de mila de carne completo",
        precio: 18000,
        categoria: "sandwiches"
    },

    {
        id: 28,
        nombre: "Sanguchazo con papas",
        precio: 22000,
        categoria: "sandwiches"
    },

    {
        id: 29,
        nombre: "Lomito simple",
        precio: 18000,
        categoria: "sandwiches"
    },

    {
        id: 30,
        nombre: "Lomito completo",
        precio: 18000,
        categoria: "sandwiches"
    },

    {
        id: 31,
        nombre: "Hamburguesa simple",
        precio: 12000,
        categoria: "sandwiches"
    },

    {
        id: 32,
        nombre: "Hamburguesa completa",
        precio: 12000,
        categoria: "sandwiches"
    },


    // ===========================
    // POSTRES
    // ===========================

    {
        id: 33,
        nombre: "Postres",
        precio: 3000,
        categoria: "postres"
    },


    // ===========================
    // BEBIDAS
    // ===========================

    {
        id: 34,
        nombre: "Agua 500 ml",
        precio: 3000,
        categoria: "bebidas"
    },

    {
        id: 35,
        nombre: "Agua 1,5 L",
        precio: 5000,
        categoria: "bebidas"
    },

    {
        id: 36,
        nombre: "Agua saborizada 500 ml",
        precio: 3000,
        categoria: "bebidas"
    },

    {
        id: 37,
        nombre: "Agua saborizada 1,5 L",
        precio: 5000,
        categoria: "bebidas"
    },

    {
        id: 38,
        nombre: "Pepsi / 7UP 500 ml",
        precio: 4000,
        categoria: "bebidas"
    },

    {
        id: 39,
        nombre: "Coca-Cola 1,5 L",
        precio: 5000,
        categoria: "bebidas"
    },

    {
        id: 40,
        nombre: "Coca-Cola 1,125 L",
        precio: 8000,
        categoria: "bebidas"
    },

    {
        id: 41,
        nombre: "Brahma",
        precio: 8000,
        categoria: "bebidas"
    },

    {
        id: 42,
        nombre: "Brahma lata",
        precio: 5000,
        categoria: "bebidas"
    },

    {
        id: 43,
        nombre: "Stella Artois",
        precio: 12000,
        categoria: "bebidas"
    },

    {
        id: 44,
        nombre: "Stella Artois lata",
        precio: 6000,
        categoria: "bebidas"
    },

    {
        id: 45,
        nombre: "Budweiser",
        precio: 4000,
        categoria: "bebidas"
    },

    {
        id: 46,
        nombre: "Budweiser lata",
        precio: 4000,
        categoria: "bebidas"
    },

    {
        id: 47,
        nombre: "Santa Fe lata",
        precio: 4000,
        categoria: "bebidas"
    },

    {
        id: 48,
        nombre: "Trapiche",
        precio: 20000,
        categoria: "bebidas"
    },

    {
        id: 49,
        nombre: "Alma Mora",
        precio: 18000,
        categoria: "bebidas"
    },

    {
        id: 50,
        nombre: "F. Las Moras",
        precio: 13000,
        categoria: "bebidas"
    },

    {
        id: 51,
        nombre: "San Telmo",
        precio: 12000,
        categoria: "bebidas"
    },

    {
        id: 52,
        nombre: "Origen",
        precio: 18000,
        categoria: "bebidas"
    },

    {
        id: 53,
        nombre: "Est. Mendoza",
        precio: 10000,
        categoria: "bebidas"
    },

    {
        id: 54,
        nombre: "Don Valentín",
        precio: 15000,
        categoria: "bebidas"
    },

    {
        id: 55,
        nombre: "Fernet jarra",
        precio: 12000,
        categoria: "bebidas"
    },

    {
        id: 56,
        nombre: "Fernet medida",
        precio: 5000,
        categoria: "bebidas"
    },

    {
        id: 57,
        nombre: "Smirnoff + Speed",
        precio: 12000,
        categoria: "bebidas"
    },

    {
        id: 58,
        nombre: "Sky + Speed",
        precio: 18000,
        categoria: "bebidas"
    }

];


// ===============================
// VARIABLES
// ===============================

let carrito = [];

let categoriaActual = "pizzas";

let tipoEmpanadasActual = null;

let cantidadesEmpanadas = {};


// ===============================
// GUSTOS DE EMPANADAS
// ===============================

const gustosEmpanadas = [
    "Carne salada",
    "Carne dulce",
    "Árabe",
    "Jamón y queso",
    "Queso y cebolla",
    "Pollo"
];


// ===============================
// FORMATO DE PRECIO
// ===============================

function formatoPrecio(numero) {

    return "$" + numero.toLocaleString("es-AR");

}


// ===============================
// MOSTRAR CATEGORÍA
// ===============================

function mostrarCategoria(categoria) {

    categoriaActual = categoria;

    const contenedor = document.getElementById("productos");

    const titulo = document.getElementById("tituloCategoria");

    contenedor.innerHTML = "";


    const nombresCategorias = {

        pizzas: "Pizzas",

        empanadas: "Empanadas",

        sandwiches: "Sándwiches",

        postres: "Postres",

        bebidas: "Bebidas"

    };


    titulo.textContent = nombresCategorias[categoria];


    const productosMostrar = productos.filter(function(producto) {

        return producto.categoria === categoria;

    });


    if (categoria === "pizzas") {

        mostrarPizzas(productosMostrar);

    } else {

        productosMostrar.forEach(function(producto) {

            mostrarProductoSimple(producto);

        });

    }


    actualizarBotonesCategoria();

}


// ===============================
// MOSTRAR PIZZAS
// ===============================

function mostrarPizzas(lista) {

    const contenedor = document.getElementById("productos");


    lista.forEach(function(producto) {


        // PAPAS

        if (producto.subcategoria === "papas") {

            const tarjeta = document.createElement("article");

            tarjeta.className = "producto";

            tarjeta.innerHTML = `
                <div class="producto-info">

                    <div class="producto-nombre">
                        ${producto.nombre}
                    </div>

                    <div class="pizza-opciones">

                        <button class="opcion-pizza"
                            onclick="agregarAlCarrito(${producto.id})">

                            <span class="tipo">
                                Porción
                            </span>

                            <span class="precio">
                                ${formatoPrecio(producto.precio)}
                            </span>

                        </button>

                    </div>

                </div>
            `;

            contenedor.appendChild(tarjeta);

            return;
        }


        // PIZZAS CON MEDIA / ENTERA

        const tarjeta = document.createElement("article");

        tarjeta.className = "producto";


        let opciones = "";


        if (producto.media !== undefined) {

            opciones += `
                <button class="opcion-pizza"
                    onclick="agregarVariante(${producto.id}, 'media')">

                    <span class="tipo">
                        Media
                    </span>

                    <span class="precio">
                        ${formatoPrecio(producto.media)}
                    </span>

                </button>
            `;

        }


        if (producto.entera !== undefined) {

            opciones += `
                <button class="opcion-pizza"
                    onclick="agregarVariante(${producto.id}, 'entera')">

                    <span class="tipo">
                        Entera
                    </span>

                    <span class="precio">
                        ${formatoPrecio(producto.entera)}
                    </span>

                </button>
            `;

        }


        if (producto.mini !== undefined) {

            opciones += `
                <button class="opcion-pizza"
                    onclick="agregarVariante(${producto.id}, 'mini')">

                    <span class="tipo">
                        Mini
                    </span>

                    <span class="precio">
                        ${formatoPrecio(producto.mini)}
                    </span>

                </button>
            `;

        }


        if (producto.grande !== undefined) {

            opciones += `
                <button class="opcion-pizza"
                    onclick="agregarVariante(${producto.id}, 'grande')">

                    <span class="tipo">
                        Grande
                    </span>

                    <span class="precio">
                        ${formatoPrecio(producto.grande)}
                    </span>

                </button>
            `;

        }


        tarjeta.innerHTML = `

            <div class="producto-info">

                <div class="producto-nombre">
                    ${producto.nombre}
                </div>

                ${
                    producto.descripcion
                    ?
                    `<div class="producto-descripcion">
                        ${producto.descripcion}
                    </div>`
                    :
                    ""
                }

                <div class="pizza-opciones">
                    ${opciones}
                </div>

            </div>

        `;


        contenedor.appendChild(tarjeta);

    });


    // SEPARADOR PAPAS

    const tituloPapas = document.createElement("div");

    tituloPapas.className = "subtitulo-productos";

    tituloPapas.textContent = "🍟 Papas";

    contenedor.insertBefore(
        tituloPapas,
        contenedor.querySelector(
            '[class*="producto"]'
        )
    );


    // Esto mantiene las papas dentro de la misma categoría.
}


// ===============================
// MOSTRAR PRODUCTO SIMPLE
// ===============================

function mostrarProductoSimple(producto) {

    const contenedor = document.getElementById("productos");


    const tarjeta = document.createElement("article");

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

        <button class="agregar">
            +
        </button>

    `;


    tarjeta.querySelector(".agregar").addEventListener(
        "click",
        function() {

            agregarAlCarrito(producto.id);

        }
    );


    contenedor.appendChild(tarjeta);

}


// ===============================
// BOTONES DE CATEGORÍA
// ===============================

function actualizarBotonesCategoria() {

    const botones = document.querySelectorAll(".categoria");


    botones.forEach(function(boton) {

        boton.classList.remove("activo");


        if (
            boton.dataset.categoria === categoriaActual
        ) {

            boton.classList.add("activo");

        }

    });

}


// ===============================
// AGREGAR VARIANTE
// ===============================

function agregarVariante(id, variante) {

    const producto = productos.find(function(item) {

        return item.id === id;

    });


    if (!producto) {
        return;
    }


    let precio;

    let nombreVariante;


    if (variante === "media") {

        precio = producto.media;
        nombreVariante = "Media";

    }

    if (variante === "entera") {

        precio = producto.entera;
        nombreVariante = "Entera";

    }

    if (variante === "mini") {

        precio = producto.mini;
        nombreVariante = "Mini";

    }

    if (variante === "grande") {

        precio = producto.grande;
        nombreVariante = "Grande";

    }


    const nombreCompleto =
        producto.nombre +
        " " +
        nombreVariante;


    agregarProductoPersonalizado(
        producto.id + "-" + variante,
        nombreCompleto,
        precio
    );

}


// ===============================
// AGREGAR PRODUCTO PERSONALIZADO
// ===============================

function agregarProductoPersonalizado(
    id,
    nombre,
    precio
) {

    const productoExistente = carrito.find(function(item) {

        return item.id === id;

    });


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({

            id: id,

            nombre: nombre,

            precio: precio,

            cantidad: 1

        });

    }


    actualizarCarrito();

}


// ===============================
// AGREGAR PRODUCTO NORMAL
// ===============================

function agregarAlCarrito(id) {

    const producto = productos.find(function(item) {

        return item.id === id;

    });


    if (!producto) {
        return;
    }


    const productoExistente = carrito.find(function(item) {

        return item.id === id;

    });


    if (productoExistente) {

        productoExistente.cantidad++;

    } else {

        carrito.push({

            id: producto.id,

            nombre: producto.nombre,

            precio: producto.precio,

            cantidad: 1

        });

    }


    actualizarCarrito();

}


// ===============================
// EMPANADAS
// ===============================

function abrirSelectorEmpanadas(tipo) {

    tipoEmpanadasActual = tipo;


    const cantidadNecesaria =
        tipo === "media"
        ? 6
        : 12;


    cantidadesEmpanadas = {};


    gustosEmpanadas.forEach(function(gusto) {

        cantidadesEmpanadas[gusto] = 0;

    });


    document.getElementById(
        "tituloEmpanadas"
    ).textContent =
        tipo === "media"
        ? "Media docena de empanadas"
        : "Docena de empanadas";


    document.getElementById(
        "cantidadNecesaria"
    ).textContent = cantidadNecesaria;


    document.getElementById(
        "cantidadSeleccionada"
    ).textContent = "0";


    const lista =
        document.getElementById(
            "listaGustosEmpanadas"
        );


    lista.innerHTML = "";


    gustosEmpanadas.forEach(function(gusto) {

        const fila =
            document.createElement("div");


        fila.className =
            "gusto-empanada";


        fila.innerHTML = `

            <span class="gusto-nombre">
                ${gusto}
            </span>

            <div class="controles-gusto">

                <button
                    onclick="cambiarGustoEmpanada('${gusto}', -1)"
                >
                    −
                </button>

                <span
                    class="cantidad-gusto"
                    id="cantidad-${gusto.replaceAll(" ", "-").replaceAll("á", "a").replaceAll("é", "e").replaceAll("í", "i").replaceAll("ó", "o").replaceAll("ú", "u")}"
                >
                    0
                </span>

                <button
                    onclick="cambiarGustoEmpanada('${gusto}', 1)"
                >
                    +
                </button>

            </div>

        `;


        lista.appendChild(fila);

    });


    document
        .getElementById("modalEmpanadas")
        .classList.add("abierto");


    actualizarSelectorEmpanadas();

}


// ===============================
// CAMBIAR GUSTO EMPANADA
// ===============================

function cambiarGustoEmpanada(gusto, cambio) {

    const cantidadNecesaria =
        tipoEmpanadasActual === "media"
        ? 6
        : 12;


    const totalActual =
        Object.values(cantidadesEmpanadas)
            .reduce(function(a, b) {
                return a + b;
            }, 0);


    if (
        cambio > 0 &&
        totalActual >= cantidadNecesaria
    ) {

        return;

    }


    cantidadesEmpanadas[gusto] += cambio;


    if (cantidadesEmpanadas[gusto] < 0) {

        cantidadesEmpanadas[gusto] = 0;

    }


    actualizarSelectorEmpanadas();

}


// ===============================
// ACTUALIZAR SELECTOR
// ===============================

function actualizarSelectorEmpanadas() {

    const cantidadNecesaria =
        tipoEmpanadasActual === "media"
        ? 6
        : 12;


    const total =
        Object.values(cantidadesEmpanadas)
            .reduce(function(a, b) {
                return a + b;
            }, 0);


    document.getElementById(
        "cantidadSeleccionada"
    ).textContent = total;


    gustosEmpanadas.forEach(function(gusto) {

        const id =
            "cantidad-" +
            gusto
                .replaceAll(" ", "-")
                .replaceAll("á", "a")
                .replaceAll("é", "e")
                .replaceAll("í", "i")
                .replaceAll("ó", "o")
                .replaceAll("ú", "u");


        const elemento =
            document.getElementById(id);


        if (elemento) {

            elemento.textContent =
                cantidadesEmpanadas[gusto];

        }

    });


    const boton =
        document.getElementById(
            "botonConfirmarEmpanadas"
        );


    boton.disabled =
        total !== cantidadNecesaria;

}


// ===============================
// CONFIRMAR EMPANADAS
// ===============================

function confirmarEmpanadas() {

    const cantidadNecesaria =
        tipoEmpanadasActual === "media"
        ? 6
        : 12;


    const total =
        Object.values(cantidadesEmpanadas)
            .reduce(function(a, b) {
                return a + b;
            }, 0);


    if (total !== cantidadNecesaria) {

        return;

    }


    const precio =
        tipoEmpanadasActual === "media"
        ? 13000
        : 25000;


    let detalle = [];


    gustosEmpanadas.forEach(function(gusto) {

        const cantidad =
            cantidadesEmpanadas[gusto];


        if (cantidad > 0) {

            detalle.push(
                cantidad +
                " " +
                gusto
            );

        }

    });


    const nombre =
        tipoEmpanadasActual === "media"
        ? "Media docena de empanadas"
        : "Docena de empanadas";


    const id =
        "empanadas-" +
        tipoEmpanadasActual +
        "-" +
        Date.now();


    carrito.push({

        id: id,

        nombre:
            nombre +
            " (" +
            detalle.join(", ") +
            ")",

        precio: precio,

        cantidad: 1

    });


    actualizarCarrito();

    cerrarEmpanadas();

}


// ===============================
// CERRAR EMPANADAS
// ===============================

function cerrarEmpanadas() {

    document
        .getElementById("modalEmpanadas")
        .classList.remove("abierto");

}


// ===============================
// MOSTRAR EMPANADAS
// ===============================

function mostrarEmpanadas() {

    const contenedor =
        document.getElementById("productos");


    contenedor.innerHTML = "";


    const tituloIndividual =
        document.createElement("div");


    tituloIndividual.className =
        "subtitulo-productos";


    tituloIndividual.textContent =
        "🥟 Por unidad";


    contenedor.appendChild(
        tituloIndividual
    );


    gustosEmpanadas.forEach(function(gusto) {

        const producto =
            productos.find(function(item) {

                return item.nombre === gusto;

            });


        mostrarProductoSimple(producto);

    });


    const tituloPacks =
        document.createElement("div");


    tituloPacks.className =
        "subtitulo-productos";


    tituloPacks.textContent =
        "📦 Combos";


    contenedor.appendChild(
        tituloPacks
    );


    const tarjeta =
        document.createElement("article");


    tarjeta.className =
        "producto";


    tarjeta.innerHTML = `

        <div class="producto-info">

            <div class="producto-nombre">
                Elegí tu cantidad y tus gustos
            </div>

            <div class="empanadas-packs">

                <button
                    class="boton-pack"
                    onclick="abrirSelectorEmpanadas('media')"
                >

                    <span class="tipo">
                        Media docena
                    </span>

                    <span class="precio">
                        $13.000
                    </span>

                </button>

                <button
                    class="boton-pack"
                    onclick="abrirSelectorEmpanadas('docena')"
                >

                    <span class="tipo">
                        Docena
                    </span>

                    <span class="precio">
                        $25.000
                    </span>

                </button>

            </div>

        </div>

    `;


    contenedor.appendChild(
        tarjeta
    );

}


// ===============================
// ACTUALIZAR CATEGORÍA
// ===============================

const mostrarCategoriaOriginal =
    mostrarCategoria;


mostrarCategoria = function(categoria) {

    categoriaActual = categoria;


    if (categoria === "empanadas") {

        const titulo =
            document.getElementById(
                "tituloCategoria"
            );

        titulo.textContent =
            "Empanadas";


        mostrarEmpanadas();

        actualizarBotonesCategoria();

        return;

    }


    mostrarCategoriaOriginal(categoria);

};


// ===============================
// VOLVER AL INICIO
// ===============================

function volverInicio() {

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    mostrarCategoria("pizzas");

}


// ===============================
// ACTUALIZAR CARRITO
// ===============================

function actualizarCarrito() {

    const lista =
        document.getElementById(
            "listaCarrito"
        );


    const carritoVacio =
        document.getElementById(
            "carritoVacio"
        );


    const totalFinal =
        document.getElementById(
            "totalFinal"
        );


    const cantidadCarrito =
        document.getElementById(
            "cantidadCarrito"
        );


    const totalCarrito =
        document.getElementById(
            "totalCarrito"
        );


    lista.innerHTML = "";


    let cantidadTotal = 0;

    let precioTotal = 0;


    carrito.forEach(function(item) {

        cantidadTotal += item.cantidad;

        precioTotal +=
            item.precio *
            item.cantidad;


        const elemento =
            document.createElement("div");


        elemento.className =
            "item-carrito";


        const informacion =
            document.createElement("div");


        const nombre =
            document.createElement("div");


        nombre.className =
            "item-nombre";


        nombre.textContent =
            item.nombre;


        const precio =
            document.createElement("div");


        precio.className =
            "item-precio";


        precio.textContent =
            formatoPrecio(
                item.precio *
                item.cantidad
            );


        informacion.appendChild(
            nombre
        );

        informacion.appendChild(
            precio
        );


        const controles =
            document.createElement("div");


        controles.className =
            "cantidad-controles";


        const botonMenos =
            document.createElement("button");


        botonMenos.textContent =
            "-";


        botonMenos.addEventListener(
            "click",
            function() {

                cambiarCantidad(
                    item.id,
                    -1
                );

            }
        );


        const cantidad =
            document.createElement("span");


        cantidad.textContent =
            item.cantidad;


        const botonMas =
            document.createElement("button");


        botonMas.textContent =
            "+";


        botonMas.addEventListener(
            "click",
            function() {

                cambiarCantidad(
                    item.id,
                    1
                );

            }
        );


        controles.appendChild(
            botonMenos
        );

        controles.appendChild(
            cantidad
        );

        controles.appendChild(
            botonMas
        );


        elemento.appendChild(
            informacion
        );

        elemento.appendChild(
            controles
        );


        lista.appendChild(
            elemento
        );

    });


    if (carrito.length === 0) {

        carritoVacio.style.display =
            "block";

    } else {

        carritoVacio.style.display =
            "none";

    }


    totalFinal.textContent =
        formatoPrecio(precioTotal);


    cantidadCarrito.textContent =
        cantidadTotal;


    totalCarrito.textContent =
        formatoPrecio(precioTotal);

}


// ===============================
// CAMBIAR CANTIDAD
// ===============================

function cambiarCantidad(id, cambio) {

    const producto =
        carrito.find(function(item) {

            return item.id === id;

        });


    if (!producto) {
        return;
    }


    producto.cantidad += cambio;


    if (producto.cantidad <= 0) {

        carrito =
            carrito.filter(function(item) {

                return item.id !== id;

            });

    }


    actualizarCarrito();

}


// ===============================
// ABRIR CARRITO
// ===============================

function abrirCarrito() {

    document
        .getElementById("modalCarrito")
        .classList.add("abierto");

}


// ===============================
// CERRAR CARRITO
// ===============================

function cerrarCarrito() {

    document
        .getElementById("modalCarrito")
        .classList.remove("abierto");

}


// ===============================
// MOSTRAR EMPANADAS AL INICIO
// ===============================


// ===============================
// ENVIAR WHATSAPP
// ===============================

function enviarWhatsApp() {

    if (carrito.length === 0) {

        alert(
            "El carrito está vacío."
        );

        return;

    }


    const nombre =
        document.getElementById(
            "nombreCliente"
        ).value;


    const tipoPedido =
        document.getElementById(
            "tipoPedido"
        ).value;


    const direccion =
        document.getElementById(
            "direccionCliente"
        ).value;


    const formaPago =
        document.getElementById(
            "formaPago"
        ).value;


    const observaciones =
        document.getElementById(
            "observaciones"
        ).value;


    let mensaje =
        "Hola Vinilo! Quiero hacer un pedido:\n\n";


    carrito.forEach(function(item) {

        mensaje +=
            item.cantidad +
            " x " +
            item.nombre +
            " - " +
            formatoPrecio(
                item.precio *
                item.cantidad
            ) +
            "\n";

    });


    let total = 0;


    carrito.forEach(function(item) {

        total +=
            item.precio *
            item.cantidad;

    });


    mensaje +=
        "\nTOTAL: " +
        formatoPrecio(total);


    mensaje +=
        "\n\nNombre: " +
        nombre;


    mensaje +=
        "\nPedido: " +
        tipoPedido;


    mensaje +=
        "\nForma de pago: " +
        formaPago;


    if (direccion !== "") {

        mensaje +=
            "\nDirección: " +
            direccion;

    }


    if (observaciones !== "") {

        mensaje +=
            "\nObservaciones: " +
            observaciones;

    }


    const numeroWhatsApp =
        "5493564374272";


    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(
            mensaje
        );


    window.open(
        url,
        "_blank"
    );

}


// ===============================
// INICIO
// ===============================

mostrarCategoria("pizzas");

actualizarCarrito();

