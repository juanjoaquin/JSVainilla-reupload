const paciente = document.querySelector(".paciente")
const numero = document.querySelector(".numero")
const consulta = document.querySelector(".consulta")
const btnAgendarPaciente = document.querySelector(".btn-agendar-paciente")
const form = document.querySelector("#form")
const alerta = document.querySelector(".alerta")

const listadoTareas = document.querySelector(".listado-tareas")



const datosLocalStorage = window.localStorage //Acá tuve inconventes, y tuve que utilizar este elemento
                                                //para poder llamar al localStorage

btnAgendarPaciente.onclick = () => {
    let contacto = {
        id: Math.floor(Math.random() * 100),
        paciente: paciente.value,
        numero: numero.value,
        consulta: consulta.value,
    }
     if(!paciente.checkValidity() ) { //No podía lograr que los input me cumplan esta misma funcion
        //Seguramente hay un metodo más simple. ¿Cuál podria ser?
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



