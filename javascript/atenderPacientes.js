const btnCargarDatos = document.querySelector(".btn-cargar-datos");

const listaPacientes = document.querySelector("#lista-pacientes")

const btnLimpiarLista = document.querySelector(".btn-limpiar-lista")

let numeroPacientes = 0;


function atenderPaciente (pacientes) {
  if (numeroPacientes < pacientes.length) {
    const paciente = pacientes[numeroPacientes];
    const div = document.createElement("div");
    div.innerText = paciente.nombre + " " + paciente.turno + " " + paciente.consulta;
    listaPacientes.append(div);
    numeroPacientes++;
    let eliminarBoton = document.createElement("span");
    eliminarBoton.innerHTML = "delete_forever"
    eliminarBoton.classList.add("material-icons", "icono")
    div.append(eliminarBoton)
    eliminarBoton.addEventListener("click", () => {
    div.remove()
  });
} 
  else {Swal.fire({
    icon: 'error',
    title: 'Error en el servidor',
    text: 'Ya no hay más pacientes que atender',
    footer: 'El turno ya finalizó'
  }).then((result) => {
    if(result.isConfirmed) {
      location.reload("./") //Utilicé un reload como "limpieza" 
    }//porque cuando utilizaba remove, los elementos del DOM seguían apareciendo
  })// y a gusto, me parecio que el reload lo hacía más rápido al desaparecer el elemento en sí
} 
}

function accionesBotones() {
  btnCargarDatos.addEventListener("click", () => {
    fetch("../pacientes.json")
      .then(response => response.json())
      .then(data => {
        atenderPaciente(data);
      })
  });
  
  btnLimpiarLista.addEventListener("click", () => {
    if (numeroPacientes === 0) {
      btnLimpiarLista.disabled = false;
      return Swal.fire({
        icon: 'error',
        title: 'Error..',
        text: 'Primero necesitas tener pacientes!',
      })
    }
    else {
      setTimeout(() =>{
        Swal.fire({
          icon: 'success',
          title: 'La lista se actualizó',
          text: 'Genial, la lista ha sido limpiada',
          confirmButtonText: 'Volver'
        }).then((result) => {
          if(result.isConfirmed) {
            window.location.reload("./");
          }
        })
        
      }, 1000)
    }
    
  }) 
  }


accionesBotones()








