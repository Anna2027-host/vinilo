// ===============================
// PRODUCTOS
// ===============================

const productos = [

    // PIZZAS
    { id: 1, nombre: "Mozzarella 1/2", precio: 6000, categoria: "pizzas" },
    { id: 2, nombre: "Mozzarella completa", precio: 12000, categoria: "pizzas" },

    { id: 3, nombre: "Napolitana 1/2", precio: 10000, categoria: "pizzas" },
    { id: 4, nombre: "Napolitana completa", precio: 18000, categoria: "pizzas" },

    { id: 5, nombre: "Fugazza 1/2", precio: 10000, categoria: "pizzas" },
    { id: 6, nombre: "Fugazza completa", precio: 20000, categoria: "pizzas" },

    { id: 7, nombre: "Rúcula 1/2", precio: 12000, categoria: "pizzas", descripcion: "Mozzarella, rúcula y cebolla" },
    { id: 8, nombre: "Rúcula completa", precio: 20000, categoria: "pizzas", descripcion: "Mozzarella, rúcula y cebolla" },

    { id: 9, nombre: "Calabresa 1/2", precio: 12000, categoria: "pizzas", descripcion: "Mozzarella, salame y orégano" },
    { id: 10, nombre: "Calabresa completa", precio: 20000, categoria: "pizzas", descripcion: "Mozzarella, salame y orégano" },

    { id: 11, nombre: "Especial 1/2", precio: 10000, categoria: "pizzas" },
    { id: 12, nombre: "Especial completa", precio: 16000, categoria: "pizzas" },

    { id: 13, nombre: "Especial con huevo 1/2", precio: 10000, categoria: "pizzas" },
    { id: 14, nombre: "Especial con huevo completa", precio: 18000, categoria: "pizzas" },

    { id: 15, nombre: "Cremosa Vinilo 1/2", precio: 12000, categoria: "pizzas" },
    { id: 16, nombre: "Cremosa Vinilo completa", precio: 22000, categoria: "pizzas" },

    { id: 17, nombre: "Explosiva 1/2", precio: 12000, categoria: "pizzas" },
    { id: 18, nombre: "Explosiva completa", precio: 24000, categoria: "pizzas" },

    { id: 19, nombre: "Pizza Lomo Mini", precio: 30000, categoria: "pizzas" },
    { id: 20, nombre: "Pizza Lomo Grande", precio: 50000, categoria: "pizzas" },

    { id: 21, nombre: "Pizza Nesa Mini", precio: 25000, categoria: "pizzas" },
    { id: 22, nombre: "Pizza Nesa Grande", precio: 45000, categoria: "pizzas" },


    // EMPANADAS
    { id: 23, nombre: "Carne salada", precio: 2200, categoria: "empanadas" },
    { id: 24, nombre: "Carne dulce", precio: 2200, categoria: "empanadas" },
    { id: 25, nombre: "Árabe", precio: 2200, categoria: "empanadas" },
    { id: 26, nombre: "Jamón y queso", precio: 2200, categoria: "empanadas" },
    { id: 27, nombre: "Queso y cebolla", precio: 2200, categoria: "empanadas" },
    { id: 28, nombre: "Pollo", precio: 2200, categoria: "empanadas" },
    { id: 29, nombre: "Media docena", precio: 13000, categoria: "empanadas" },
    { id: 30, nombre: "Docena", precio: 25000, categoria: "empanadas" },


    // SANDWICHES
    { id: 31, nombre: "Sándwich de mila de pollo completo", precio: 12000, categoria: "sandwiches" },
    { id: 32, nombre: "Sándwich de mila de carne completo", precio: 18000, categoria: "sandwiches" },
    { id: 33, nombre: "Sanguchazo con papas", precio: 22000, categoria: "sandwiches" },
    { id: 34, nombre: "Lomito simple", precio: 18000, categoria: "sandwiches" },
    { id: 35, nombre: "Lomito completo", precio: 18000, categoria: "sandwiches" },
    { id: 36, nombre: "Hamburguesa simple", precio: 12000, categoria: "sandwiches" },
    { id: 37, nombre: "Hamburguesa completa", precio: 12000, categoria: "sandwiches" },


    // PAPAS
    { id: 38, nombre: "Porción de papas", precio: 10000, categoria: "papas" },
    { id: 39, nombre: "Papas con cheddar / verdeo / huevo", precio: 11000, categoria: "papas" },


    // POSTRES
    { id: 40, nombre: "Postres", precio: 3000, categoria: "postres" },


    // BEBIDAS
    { id: 41, nombre: "Agua 500 ml", precio: 3000, categoria: "bebidas" },
    { id: 42, nombre: "Agua 1,5 L", precio: 5000, categoria: "bebidas" },
    { id: 43, nombre: "Agua saborizada 500 ml", precio: 3000, categoria: "bebidas" },
    { id: 44, nombre: "Agua saborizada 1,5 L", precio: 5000, categoria: "bebidas" },
    { id: 45, nombre: "Pepsi / 7UP 500 ml", precio: 4000, categoria: "bebidas" },
    { id: 46, nombre: "Coca-Cola 1,5 L", precio: 5000, categoria: "bebidas" },
    { id: 47, nombre: "Coca-Cola 1,125 L", precio: 8000, categoria: "bebidas" },


    // CERVEZAS
    { id: 48, nombre: "Brahma", precio: 8000, categoria: "bebidas" },
    { id: 49, nombre: "Brahma lata", precio: 5000, categoria: "bebidas" },
    { id: 50, nombre: "Stella Artois", precio: 12000, categoria: "bebidas" },
    { id: 51, nombre: "Stella Artois lata", precio: 6000, categoria: "bebidas" },
    { id: 52, nombre: "Budweiser", precio: 4000, categoria: "bebidas" },
    { id: 53, nombre: "Budweiser lata", precio: 4000, categoria: "bebidas" },
    { id: 54, nombre: "Santa Fe lata", precio: 4000, categoria: "bebidas" },


    // VINOS
    { id: 55, nombre: "Trapiche", precio: 20000, categoria: "bebidas" },
    { id: 56, nombre: "Alma Mora", precio: 18000, categoria: "bebidas" },
    { id: 57, nombre: "F. Las Moras", precio: 13000, categoria: "bebidas" },
    { id: 58, nombre: "San Telmo", precio: 12000, categoria: "bebidas" },
    { id: 59, nombre: "Origen", precio: 18000, categoria: "bebidas" },
    { id: 60, nombre: "Est. Mendoza", precio: 10000, categoria: "bebidas" },
    { id: 61, nombre: "Don Valentín", precio: 15000, categoria: "bebidas" },


    // TRAGOS
    { id: 62, nombre: "Fernet jarra", precio: 12000, categoria: "bebidas" },
    { id: 63, nombre: "Fernet medida", precio: 5000, categoria: "bebidas" },
    { id: 64, nombre: "Smirnoff + Speed", precio: 12000, categoria: "bebidas" },
    { id: 65, nombre: "Sky + Speed", precio: 18000, categoria: "bebidas" },


    // EXTRAS
    { id: 66, nombre: "Palmito 1/2", precio: 1400, categoria: "extras" },
    { id: 67, nombre: "Palmito completa", precio: 2400, categoria: "extras" },
    { id: 68, nombre: "Huevo 1/2", precio: 1400, categoria: "extras" },
    { id: 69, nombre: "Huevo completa", precio: 2400, categoria: "extras" },
    { id: 70, nombre: "Ananá 1/2", precio: 1400, categoria: "extras" },
    { id: 71, nombre: "Ananá completa", precio: 2400, categoria: "extras" },
    { id: 72, nombre: "Morrón 1/2", precio: 1400, categoria: "extras" },
    { id: 73, nombre: "Morrón completa", precio: 2400, categoria: "extras" },
    { id: 74, nombre: "Anchoas 1/2", precio: 1400, categoria: "extras" },
    { id: 75, nombre: "Anchoas completa", precio: 2400, categoria: "extras" },
    { id: 76, nombre: "Rúcula 1/2", precio: 1400, categoria: "extras" },
    { id: 77, nombre: "Rúcula completa", precio: 2400, categoria: "extras" }
];


// ===============================
// VARIABLES
// ===============================

let carrito = [];
let categoriaActual = "todos";


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
        todos: "Nuestra Carta",
        pizzas: "Pizzas",
        empanadas: "Empanadas",
        sandwiches: "Sándwiches",
        papas: "Papas",
        postres: "Postres",
        bebidas: "Bebidas",
        extras: "Extras"
    };

    titulo.textContent = nombresCategorias[categoria];

    let productosMostrar;

    if (categoria === "todos") {
        productosMostrar = productos;
    } else {
        productosMostrar = productos.filter(function(producto) {
            return producto.categoria === categoria;
        });
    }

    productosMostrar.forEach(function(producto) {

        const tarjeta = document.createElement("article");

        tarjeta.className = "producto";

        const informacion = document.createElement("div");
        informacion.className = "producto-info";

        const nombre = document.createElement("div");
        nombre.className = "producto-nombre";
        nombre.textContent = producto.nombre;

        informacion.appendChild(nombre);

        if (producto.descripcion) {

            const descripcion = document.createElement("div");

            descripcion.className = "producto-descripcion";

            descripcion.textContent = producto.descripcion;

            informacion.appendChild(descripcion);
        }

        const precio = document.createElement("div");

        precio.className = "producto-precio";

        precio.textContent = formatoPrecio(producto.precio);

        informacion.appendChild(precio);

        const boton = document.createElement("button");

        boton.className = "agregar";

        boton.textContent = "+";

        boton.addEventListener("click", function() {
            agregarAlCarrito(producto.id);
        });

        tarjeta.appendChild(informacion);
        tarjeta.appendChild(boton);

        contenedor.appendChild(tarjeta);
    });

    actualizarBotonesCategoria();
}


// ===============================
// BOTONES DE CATEGORÍA
// ===============================

function actualizarBotonesCategoria() {

    const botones = document.querySelectorAll(".categoria");

    botones.forEach(function(boton) {

        boton.classList.remove("activo");

        if (boton.dataset.categoria === categoriaActual) {
            boton.classList.add("activo");
        }
    });
}


// ===============================
// AGREGAR AL CARRITO
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
// ACTUALIZAR CARRITO
// ===============================

function actualizarCarrito() {

    const lista = document.getElementById("listaCarrito");
    const carritoVacio = document.getElementById("carritoVacio");
    const totalFinal = document.getElementById("totalFinal");
    const cantidadCarrito = document.getElementById("cantidadCarrito");
    const totalCarrito = document.getElementById("totalCarrito");

    lista.innerHTML = "";

    let cantidadTotal = 0;
    let precioTotal = 0;

    carrito.forEach(function(item) {

        cantidadTotal += item.cantidad;

        precioTotal += item.precio * item.cantidad;

        const elemento = document.createElement("div");

        elemento.className = "item-carrito";

        const informacion = document.createElement("div");

        const nombre = document.createElement("div");

        nombre.className = "item-nombre";

        nombre.textContent = item.nombre;

        const precio = document.createElement("div");

        precio.className = "item-precio";

        precio.textContent = formatoPrecio(item.precio * item.cantidad);

        informacion.appendChild(nombre);
        informacion.appendChild(precio);

        const controles = document.createElement("div");

        controles.className = "cantidad-controles";

        const botonMenos = document.createElement("button");

        botonMenos.textContent = "-";

        botonMenos.addEventListener("click", function() {
            cambiarCantidad(item.id, -1);
        });

        const cantidad = document.createElement("span");

        cantidad.textContent = item.cantidad;

        const botonMas = document.createElement("button");

        botonMas.textContent = "+";

        botonMas.addEventListener("click", function() {
            cambiarCantidad(item.id, 1);
        });

        controles.appendChild(botonMenos);
        controles.appendChild(cantidad);
        controles.appendChild(botonMas);

        elemento.appendChild(informacion);
        elemento.appendChild(controles);

        lista.appendChild(elemento);
    });

    if (carrito.length === 0) {

        carritoVacio.style.display = "block";

    } else {

        carritoVacio.style.display = "none";
    }

    totalFinal.textContent = formatoPrecio(precioTotal);

    cantidadCarrito.textContent = cantidadTotal;

    totalCarrito.textContent = formatoPrecio(precioTotal);
}


// ===============================
// CAMBIAR CANTIDAD
// ===============================

function cambiarCantidad(id, cambio) {

    const producto = carrito.find(function(item) {
        return item.id === id;
    });

    if (!producto) {
        return;
    }

    producto.cantidad += cambio;

    if (producto.cantidad <= 0) {

        carrito = carrito.filter(function(item) {
            return item.id !== id;
        });
    }

    actualizarCarrito();
}


// ===============================
// ABRIR CARRITO
// ===============================

function abrirCarrito() {

    const modal = document.getElementById("modalCarrito");

    modal.style.display = "flex";
}


// ===============================
// CERRAR CARRITO
// ===============================

function cerrarCarrito() {

    const modal = document.getElementById("modalCarrito");

    modal.style.display = "none";
}


// ===============================
// ENVIAR PEDIDO POR WHATSAPP
// ===============================

function enviarWhatsApp() {

    if (carrito.length === 0) {

        alert("El carrito está vacío.");

        return;
    }

    const nombre = document.getElementById("nombreCliente").value;
    const tipoPedido = document.getElementById("tipoPedido").value;
    const direccion = document.getElementById("direccionCliente").value;
    const formaPago = document.getElementById("formaPago").value;
    const observaciones = document.getElementById("observaciones").value;

    let mensaje = "Hola Vinilo! Quiero hacer un pedido:%0A%0A";

    carrito.forEach(function(item) {

        mensaje += item.cantidad + " x " +
            item.nombre + " - " +
            formatoPrecio(item.precio * item.cantidad) +
            "%0A";
    });

    let total = 0;

    carrito.forEach(function(item) {
        total += item.precio * item.cantidad;
    });

    mensaje += "%0ATOTAL: " + formatoPrecio(total);

    mensaje += "%0A%0ANombre: " + nombre;
    mensaje += "%0APedido: " + tipoPedido;
    mensaje += "%0AForma de pago: " + formaPago;

    if (direccion !== "") {
        mensaje += "%0ADirección: " + direccion;
    }

    if (observaciones !== "") {
        mensaje += "%0AObservaciones: " + observaciones;
    }

    const numeroWhatsApp = "5493564374272";

    const url =
        "https://wa.me/" +
        numeroWhatsApp +
        "?text=" +
        encodeURIComponent(
            mensaje.replace(/%0A/g, "\n")
        );

    window.open(url, "_blank");
}


// ===============================
// INICIO
// ===============================

mostrarCategoria("todos");

actualizarCarrito();