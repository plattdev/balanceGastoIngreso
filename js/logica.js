// 1️⃣ IMPORTACIÓN DE MÓDULOS
//Tipo 1 de importacion - se importa el array registros desde data.js y lo vamos a usar en este archivo
import { registros } from './data.js' //Importamos el array registros desde data.js

// 2️⃣ VARIABLES GLOBALES Y CONSTANTES


// 3️⃣ SELECCIÓN DE ELEMENTOS DEL DOM
const form = document.getElementById('formulario')
const concepto = document.getElementById('concepto')
const importe = document.getElementById('importe')
const tipo = document.getElementById('tipo')

// **********************************
//Evento sumbit del formulario. Tambien se puede hacer con  btnAgregar.addEventListener('click', () {})

form.addEventListener('submit', function(event) {
    event.preventDefault(); // Evita que el formulario se envíe y recargue la página. IMPORTANTE:LUEGO CUANDO HAGAMOS LA BD TENDREMOS QUE QUITAR ESTO

    //Obtener los valores del formulario
    const conceptoValue = concepto.value
    const importeValue = parseFloat(importe.value)
    const tipoValue = tipo.value

    //Toda la información que obtenemos de .value tiene que ser un objeto y cada objeto tiene que estar dentro del array registros
    const registro = {
        concepto: conceptoValue,
        importe: importeValue,
        tipo: tipoValue
    }

    //Agregar el objeto registro al array registros. IMPORTANTE: está declarado en data.js
    registros.push(registro)

    
    //Limpiar los campos del formulario después de enviar
    form.reset()
    
    console.log(registros) //Muestra el array de registros en la consola para verificar

    //LLAMADAS A FUNCIONES DE APOYO
    //Llamar a una función que será para introducir un nuevo registro en la tabla de HTML
    agregarRegistroATabla(registro)
    
    //Llamar a la función para calcular y actualizar el balance
    calcularBalance()
})

// 4️⃣ FUNCIONES
//*************************** */
//CONSTRUCTOR DE LA TABLA EN EL HTML
// Función para agregar un registro a la tabla en el HTML
function agregarRegistroATabla(registro) {
    //Seleccionar la tabla del DOM
    const tabla = document.getElementById('tablaIntroRegistros')
    
    //Crear una nueva fila y sus celdas-  con funcion de JS
    const nuevaFila = tabla.insertRow()

    //Crear celdas para concepto, importe y tipo
    const celdaConcepto = nuevaFila.insertCell(0)
    const celdaImporte = nuevaFila.insertCell(1)
    const celdaTipo = nuevaFila.insertCell(2)

    //Asignar los valores del objeto creado (registro) a las celdas
    celdaConcepto.textContent = registro.concepto
    celdaImporte.textContent = `${registro.importe} €`
    celdaTipo.textContent = registro.tipo
}

//Función que suma todos los gastos, ingresos y calcula el balance (ingresos-gastos). No queremos el objeto, queremos el array registros que tiene todos los objetos
//***************** */
//HACE TODAS LAS OPERACIONES DE SUMA Y RESTA
function calcularBalance() {
    let totalIngresos = 0
    let totalGastos = 0
    
    //Recorrer el array registros y sumar los importes según el tipo
    registros.forEach(registro => {
        //recuerda que registro.tipo viene de las propiedades del objeto registro
        if (registro.tipo === 'ingreso') {
            totalIngresos += registro.importe
        } else if (registro.tipo === 'gasto') {
            totalGastos += registro.importe
        }
    });

    //Llevar el total de ingresos, gastos y balance al DOM
    const balanceIngresos = document.getElementById('balanceIngresos')
    const balanceGastos = document.getElementById('balanceGastos')
    const balanceTotal = document.getElementById('balanceTotal')

    //Actualizar los valores en el DOM
    balanceIngresos.textContent = `${totalIngresos} €`
    balanceGastos.textContent = `${totalGastos} €`
    
    const balance = totalIngresos - totalGastos
    balanceTotal.textContent = `${balance} €`
}






