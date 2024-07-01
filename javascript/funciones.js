const guardarContacto = (datosLocalStorage, contacto) => {
    datosLocalStorage.setItem(contacto.id, JSON.stringify(contacto))
    window.location.href = `/`
}

const cargarContactos = (datosLocalStorage, parentNode) =>  {
    let claves = Object.keys(datosLocalStorage)
    for (clave of claves) {
        let contacto = JSON.parse(datosLocalStorage.getItem(clave))
        crearContacto(parentNode, contacto, datosLocalStorage)
    }
}

const crearContacto = (parentNode, contacto, datosLocalStorage) => {
    let divContacto = document.createElement("div")
    let pacienteContacto = document.createElement("h3")
    let numeroContacto = document.createElement("p")
    let consultaContacto = document.createElement("p")
    let iconoBorrar = document.createElement("span")

    pacienteContacto.innerHTML = contacto.paciente
    numeroContacto.innerHTML = contacto.numero
    consultaContacto.innerHTML = contacto.consulta
    iconoBorrar.innerHTML = "delete_forever"

    divContacto.style.marginRight = "-230px"; //Tenía problemas con la posición cuando aparecíanm en el DOM
    divContacto.classList.add("tarea")        //Y después de indagar, con está forma, pude solucionarlo
    iconoBorrar.classList.add("material-icons", "icono")


    iconoBorrar.addEventListener("click", () => {
        datosLocalStorage.removeItem(contacto.id);
        if(datosLocalStorage.removeItem) {
            Swal.fire({
                position: 'top-end',
                icon: 'success',
                title: 'El paciente fue eliminado de la agenda',
                showConfirmButton: false,
                timer: 1000,
                
            })
            divContacto.remove()
        }
        else if (datosLocalStorage.removeItem) {
            return location.reload()
        }
        
        else {
            Swal.fire({
                icon: 'error',
                title: 'Error...',
                text: 'Sucedió un error!',
                footer: 'Volve a intentarlo'
            })
        }
    })

    divContacto.appendChild(pacienteContacto)
    divContacto.appendChild(numeroContacto)
    divContacto.appendChild(consultaContacto)
    divContacto.appendChild(iconoBorrar)

    parentNode.appendChild(divContacto)

}

