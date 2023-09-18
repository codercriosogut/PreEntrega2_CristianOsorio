//Menu Principal Inventario - ArrayMenu
const arrayMenu = [
    { id: 1, nombre: "Lista de Productos"},
    { id: 2, nombre: "Modificar Precios"},
    { id: 3, nombre: "Eliminar Productos"},
    { id: 4, nombre: "Agregar Nuevos Productos"},
];

//lista de productos ya creados en el arreglo
//alert(optionMenuUno(arrayListaProductos));
const arrayListaProductos = [
    { id: 1, nombre: "Monitor Samsung 24 pulgadas", precio: 180000},
    { id: 2, nombre: "Computador Completo solo PC", precio: 550000},
    { id: 3, nombre: "Teclado", precio: 15000},
    { id: 4, nombre: "Mouse", precio: 10000},
];

//obtener opcion del menu por ID
function optionMenuId(arrayMenu, id){
    return arrayMenu.find((menu) => menu.id == id);
}

//Menú Principal
function optionMenu(arrayMenu){
    let opciones = "Opciones disponibles : \n"; //MENSAJE3
    for (const menu of arrayMenu){
        opciones +=`
        ID: ${menu.id}
        ${menu.nombre}\n`;
    }
    return opciones;
}

//listar productos, ID NOMBRE y PRECIO
//optionMenuUno(arrayListaProductos)
function optionMenuUno(arrayListaProductos){
    let opcionesProductos = "Productos Disponibles : \n"; //MENSAJE4
    for (const menuUno of arrayListaProductos){
            opcionesProductos +=`
            ID: ${menuUno.id}
            NOMBRE: ${menuUno.nombre}
            PRECIO: ${menuUno.precio}\n`;
    }
    return opcionesProductos;
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
            alert("Producto modificado... \nLa base de datos se ha actualizado");
        } else {
            alert("El valor ingresado no es válido");
        }
    } else {
        alert("ID no encontrado");
    }
}

//eliminar productos
//optionMenuTres(arrayListaProductos);
function optionMenuTres(arrayListaProductos){
    let opcionesN3 = parseInt(prompt("Ingrese el ID a eliminar:\n" + optionMenuUno(arrayListaProductos))); //MENSAJE6
    const deleteId = arrayListaProductos.findIndex((producto) => producto.id === opcionesN3);
    if (deleteId !== -1){
        arrayListaProductos.splice(deleteId, 1);
        alert("Producto eliminado!... \nLa base de datos se ha actualizado"); //MENSAJE6
        arrayListaProductos.sort((a, b) => a.id - b.id); //arrayListaProductos.sort();
    } else {
        alert("ID no encontrado");
    }
}

//Agregar nuevos productos al inventario
//optionMenuCuatro(arrayListaProductos);
function optionMenuCuatro(arrayListaProductos) {
    let nuevoId, nuevoNombre, nuevoPrecio;
    let productoExistente;
    do {
        nuevoId = parseInt(prompt("Ingrese un nuevo ID:")); //MENSAJE7
        productoExistente = arrayListaProductos.find((producto) => producto.id === nuevoId);
        if (productoExistente) {
            alert("El ID ingresado ya existe en la base de datos. \nPor favor, ingrese un ID único.");
        }
    } while (productoExistente);
    nuevoNombre = prompt("Ingrese el nombre del nuevo producto:"); //MENSAJE7
    nuevoPrecio = parseInt(prompt("Ingrese el precio del nuevo producto:")); //MENSAJE7
    if (!isNaN(nuevoPrecio)) {
        const nuevoProducto = { id: nuevoId, nombre: nuevoNombre, precio: nuevoPrecio };
        arrayListaProductos.push(nuevoProducto);
        alert("Producto agregado con éxito... \nLa base de datos se ha actualizado"); //MENSAJE7
        arrayListaProductos.sort((a, b) => a.id - b.id); //arrayListaProductos.sort();
    } else {
        alert("El precio ingresado no es válido. El producto no fue agregado.");
    }
}


//funcion menú principal
function main() {
    while (true) {
        alert("BIENVENIDO AL MENU PRINCIPAL DE INVENTARIO") //MENSAJE1
        const userInput = parseInt(prompt("Ingrese el ID :\n" + optionMenu(arrayMenu))); //MENSAJE2 + MENSAJE3
        const seleccionarOpcionMenuMain = optionMenuId(arrayMenu, userInput);
        if (!seleccionarOpcionMenuMain) {
            alert("La Opción ingresada no es válida. Por favor, ingrese un ID correcto.");
            continue;
        }
        switch (seleccionarOpcionMenuMain.id) {
            case 1:
                alert(`Ha seleccionado la opción: \n-${seleccionarOpcionMenuMain.nombre}`); //MENSAJE4
                alert(optionMenuUno(arrayListaProductos));
                alert("Regresando al menu Principal");
                break;
            case 2:
                alert(`Ha seleccionado la opción: \n-${seleccionarOpcionMenuMain.nombre}`); //MENSAJE5
                optionMenuDos(arrayListaProductos);
                alert("Regresando al menu Principal");
                break;
            case 3:
                alert(`Ha seleccionado la opción: \n-${seleccionarOpcionMenuMain.nombre}`); //MENSAJE6
                optionMenuTres(arrayListaProductos);
                alert("Regresando al Menu Principal");
                break;
            case 4:
                alert(`Ha seleccionado la opción: \n-${seleccionarOpcionMenuMain.nombre}`); //MENSAJE7
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