//Función para validar si el usuario es un cliente
function esCliente(){
    for (let intentos = 1; intentos <= 3; intentos++){
        const codigoCliente = prompt("Ingrese su código de cliente (12345)");

        //Codigo de validacion de cliente "12345"
        if (codigoCliente === "12345"){
            return true; //codigo valido
        } else {
            alert(`Codigo de cliente incorrecto. Intento ${intentos} de 3. `);
        }
    }
    return false; // si falla 3 veces no podrá ingresar
}
// Función para seleccionar la comida y cantidad de porciones

function solicitarComida() {
    if (!esCliente()) {
        alert("Acceso denegado. No eres un cliente válido.");
        return;
    }

    while (true) {
        console.log("Menú de Comidas:");
        console.log("1. Pizza - $150 por porción");
        console.log("2. Hamburguesa - $1.300 C/U");
        console.log("3. Sushi - $1.500 el plato");
        console.log("4. Ensalada - $350 el plato");

        let eleccionComida;
        let cantidadPorciones;

        eleccionComida = prompt("Elige una comida (1-4):");

    if (eleccionComida === null || eleccionComida === "" || isNaN(eleccionComida) || eleccionComida < 1 || eleccionComida > 4) {
        alert("Selección no válida. Debes ingresar un número del 1 al 4. Intenta de nuevo.");
        continue;
    }

    eleccionComida = parseInt(eleccionComida);

    while (true) {
        cantidadPorciones = prompt("Ingresa la cantidad de porciones:");

        if (cantidadPorciones === null || cantidadPorciones === "" || isNaN(cantidadPorciones) || cantidadPorciones <= 0) {
        alert("Cantidad no válida. Debe ser un número mayor que 0. Intenta de nuevo.");
        continue;
        }

        cantidadPorciones = parseFloat(cantidadPorciones);
        break;
        }

        calcularCosto(eleccionComida, cantidadPorciones);
        break;
    }
    }

// Función para calcular el costo total
function calcularCosto(eleccionComida, cantidadPorciones) {
    let costoPorPorcion;

    switch (eleccionComida) {
    case 1:
        costoPorPorcion = 150;
        break;
    case 2:
        costoPorPorcion = 1300;
        break;
    case 3:
        costoPorPorcion = 1500;
        break;
    case 4:
        costoPorPorcion = 350;
        break;
        default:
        break;
    }

    const costoTotal = costoPorPorcion * cantidadPorciones;
    alert(`El costo total es de $${costoTotal.toFixed(2)}`);
    }

    //Solicitud de comida
    solicitarComida();