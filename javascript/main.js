const paciente = document.querySelector(".paciente")
const numero = document.querySelector(".numero")
const consulta = document.querySelector(".consulta")
const btnAgendarPaciente = document.querySelector(".btn-agendar-paciente")
const form = document.querySelector("#form")
const alerta = document.querySelector(".alerta")

const listadoTareas = document.querySelector(".listado-tareas")


// Utilice está forma de llamar al localStorage, ya que estuve viendo varias
// y está se me hacía la más simple, y menos complizada.
const datosLocalStorage = window.localStorage 

btnAgendarPaciente.onclick = () => {
    let contacto = {
        id: Math.floor(Math.random() * 100),
        paciente: paciente.value,
        numero: numero.value,
        consulta: consulta.value,
    }
    if(!paciente.checkValidity() ) { 
        Swal.fire({
        icon: 'error',
        title: 'Error en el formulario',
        text: 'Debes completar todos los datos',
        
})
    return form.reset();
    }
        else if(!numero.checkValidity()) {
        Swal.fire({
        icon: 'error',
        title: 'Error en el formulario',
        text: 'Debes completar todos los datos',
        
        })
        return form.reset();
    }
        else if(!consulta.checkValidity()) {
        Swal.fire({
        icon: 'error',
        title: 'Error en el formulario',
        text: 'Debes completar todos los datos',
    })
    return form.reset();
    }

    guardarContacto(datosLocalStorage, contacto)
} 
cargarContactos(datosLocalStorage, listadoTareas);



