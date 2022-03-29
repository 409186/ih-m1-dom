// 1. SELECCIÓN
const tablero = document.getElementById("tablero")
const boton   = document.getElementById("almacenamiento")

boton.addEventListener("click", (event) => {

    event.preventDefault()

    // 2. OBTENER TODOS LOS DATOS EN VARIABLES
	// -> [selector].[nombre del campo de texto].["value"]
    const nombres = tablero.tuNombre.value
    const correos = tablero.correo.value
    const cumples = tablero.cumple.value
    
    const postres = tablero.postre.checked

    let revisionPostre;
    if(postres == true){
        revisionPostre = "si escogio postre"
    } else {
        revisionPostre = "no escogio postre"
    }

    const indice = tablero.escoger.selectedIndex
    const opcionSeleccionada = tablero.escoger.options[indice]
    const opcionTexto = opcionSeleccionada.text
    console.log(opcionTexto)
})