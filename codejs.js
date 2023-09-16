//Menu Principal Inventario - ArrayMenu
const arrayMenu = [
    { id: 1, nombre: "Listar Productos"},
    { id: 2, nombre: "Modificar lista de precios de los productos"},
    { id: 3, nombre: "Eliminar Productos"},
    { id: 4, nombre: "Ingresar Nuevos Productos"},
];

//lista de productos ya creados en el arreglo
//alert(optionMenuUno(arrayListaProductos));
const arrayListaProductos = [
    { id: 1, nombre: "Monitor Samsung 24 pulgadas", precio: 180000},
    { id: 2, nombre: "Computador Completo solo PC", precio: 550000},
    { id: 3, nombre: "Teclado", precio: 15000},
    { id: 4, nombre: "Mouse", precio: 10000},
];

//Menú Principal
function optionMenu(arrayMenu){
    let opciones = "Opciones disponibles : \n";
    for (const menu of arrayMenu){
        opciones +=`
        ID: ${menu.id}
        ${menu.nombre}\n`;
    }
    return opciones;
}

//listar menu de productos
function optionMenuUno(arrayListaProductos){
    let opcionesProductos = "Productos Disponibles : \n";
    for (const menuUno of arrayListaProductos){
            opcionesProductos +=`
            ID: ${menuUno.id}
            NOMBRE: ${menuUno.nombre}
            PRECIO: ${menuUno.precio}\n`;
    }
    return opcionesProductos;
}

//obtener opcion del menu por ID
function optionMenuId(arrayMenu, id){
    return arrayMenu.find((menu) => menu.id == id);
}

//modificar precio del producto
//optionMenuDos(arrayListaProductos);
function optionMenuDos(arrayListaProductos){
    let opcionesN2 = parseInt(prompt("Ingrese el ID a Modificar su precio:\n" + optionMenuUno(arrayListaProductos)));
    const modifyId = arrayListaProductos.findIndex((producto) => producto.id === opcionesN2);
    if (modifyId !== -1){
        const editPrecio = parseInt(prompt("ingrese el monto a modificar:"));
        if (!isNaN(editPrecio)){
            arrayListaProductos[modifyId].precio = editPrecio;
            alert("El precio del producto ha sido modificado");
        } else {
            alert("El valor ingresado no es válido");
        }
    } else {
        alert("ID no encontrado");
    }
}

//eliminar productos
//alert(optionMenuTres(indiqueIdProductos));
function optionMenuTres(arrayListaProductos){
    let opcionesN3 = parseInt(prompt("Ingrese el ID a eliminar:\n" + optionMenuUno(arrayListaProductos)));
    const deleteId = arrayListaProductos.findIndex((producto) => producto.id === opcionesN3);
    if (deleteId !== -1){
        arrayListaProductos.splice(deleteId, 1);
        alert("Producto eliminado!... La base de datos se ha modificado");
        arrayListaProductos.sort((a, b) => a.id - b.id); //arrayListaProductos.sort();
    } else {
        alert("ID no encontrado");
    }
}

//Ingresar Mas Productos al Inventario
//case 4:
//    alert(`4Ha seleccionado la opción: ${seleccionarOpcionMenuMain.nombre}`);
//    optionMenuCuatro(arrayListaProductos);
function optionMenuCuatro(arrayListaProductos) {
    let nuevoId, nuevoNombre, nuevoPrecio;
    let productoExistente;
    do {
        nuevoId = parseInt(prompt("Ingrese un nuevo ID:"));
        productoExistente = arrayListaProductos.find((producto) => producto.id === nuevoId);
        if (productoExistente) {
            alert("El ID ingresado ya existe en la base de datos. Por favor, ingrese un ID único.");
        }
    } while (productoExistente);
    nuevoNombre = prompt("Ingrese el nombre del nuevo producto:");
    nuevoPrecio = parseInt(prompt("Ingrese el precio del nuevo producto:"));
    if (!isNaN(nuevoPrecio)) {
        const nuevoProducto = { id: nuevoId, nombre: nuevoNombre, precio: nuevoPrecio };
        arrayListaProductos.push(nuevoProducto);
        alert("Producto agregado con éxito.");
        arrayListaProductos.sort((a, b) => a.id - b.id); //arrayListaProductos.sort();
    } else {
        alert("El precio ingresado no es válido. El producto no fue agregado.");
    }
}

//funcion principal
function main() {
    while (true) {
        alert("BIENVENIDO AL MENU PRINCIPAL DE INVENTARIO")
        const userInput = parseInt(prompt("Ingrese el ID\n" + optionMenu(arrayMenu)));
        const seleccionarOpcionMenuMain = optionMenuId(arrayMenu, userInput);
        if (!seleccionarOpcionMenuMain) {
            alert("Opción ingresada no válida. Por favor, ingrese un ID válido.");
            continue;
        }
        switch (seleccionarOpcionMenuMain.id) {
            case 1:
                alert(`Ha seleccionado la opción: ${seleccionarOpcionMenuMain.nombre}`);
                alert(optionMenuUno(arrayListaProductos));
                alert("Regresando al menu Principal");
                break;
            case 2:
                alert(`Ha seleccionado la opción: ${seleccionarOpcionMenuMain.nombre}`);
                optionMenuDos(arrayListaProductos);
                alert("Regresando al menu Principal");
                break;
            case 3:
                alert(`Ha seleccionado la opción: ${seleccionarOpcionMenuMain.nombre}`);
                optionMenuTres(arrayListaProductos);
                alert("Regresando al Menu Principal");
                break;
            case 4:
                alert(`Ha seleccionado la opción: ${seleccionarOpcionMenuMain.nombre}`);
                optionMenuCuatro(arrayListaProductos);
                alert("Regresando al Menu Principal");
                break;
            default:
                alert("Opción ingresada no válida. Por favor, ingrese un ID válido.");
                break;
        }
    }
}
arrayListaProductos.sort((a, b) => a.id - b.id); //arrayListaProductos.sort();
main();