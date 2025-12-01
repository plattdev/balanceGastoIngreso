// 1️⃣ IMPORTACIÓN DE MÓDULOS


// 2️⃣ VARIABLES GLOBALES Y CONSTANTES
// Array para almacenar los registros
const registros = []

// 3️⃣ SELECCIÓN DE ELEMENTOS DEL DOM
const concepto = document.getElementById('concepto')
const importe = document.getElementById('importe')
const tipo = document.getElementById('tipo')
const btnAgregar = document.getElementById('btnAgregar')
const tabla = document.getElementById('tabla')



// 5️⃣ FUNCIONES PRINCIPALES
//Cuando haga click en el botón "Agregar" se añade un array a la tabla con los datos ingresados
function agregarRegistro() {

    // Crear objeto registro y guardarlo en el array
    const registro = {
        concepto: concepto.value,
        importe: importe.value,
        tipo: tipo.value
    }
    registros.push(registro)

    console.log(registros)

    // Crear y agregar la fila a la tabla
    const nuevoRegistro = document.createElement('tr');
    nuevoRegistro.innerHTML = `
        <td>${registro.concepto}</td>
        <td>${registro.importe}</td>
        <td>${registro.tipo}</td>
    `;
    tabla.appendChild(nuevoRegistro);

    console.log('Registro agregado:', registro);

    // Limpiar los campos después de agregar
    concepto.value = '';
    importe.value = '';
    tipo.value = 'ingreso';
}


// 6️⃣ EVENT LISTENERS (Eventos)




