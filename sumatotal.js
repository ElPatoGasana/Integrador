let descuentoEstudiante = 0.8;
let descuentoTrainee = 0.5;
let descuentoJunior = 0.15;

const btnNumber = document.getElementById('Cantidad');
const btnResumen = document.getElementById('Resumen');
const btnReestablecer = document.getElementById('borrar')

const optionCategoria = document.getElementById('Categoria');

btnNumber.addEventListener("click", precioFinal);
btnResumen.addEventListener("click", resumen);
btnReestablecer.addEventListener("click", reestablecer);


function precioFinal(){

    let precio = 0;

    if (optionCategoria.value == 'Estudiante') {
        precio = (200 - (200 * descuentoEstudiante)) * btnNumber.value;
    } else if (optionCategoria.value == 'Trainee') {
        precio = (200 - (200 * descuentoTrainee)) * btnNumber.value;
    } else {
        precio = (200 - (200 * descuentoJunior)) * btnNumber.value;
    }

    return precio;
}

function reestablecer(){
    document.getElementById("total_a_pagar").innerHTML = '0.00';
}

function resumen(){
    document.getElementById("total_a_pagar").innerHTML = precioFinal()}
    
    