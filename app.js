const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

boton.addEventListener('click', agregarTarea);
//KEYDOWN  maneja eventos del teclado
input.addEventListener('keydown', (e) => {
    if(e.key === 'enter') {
        agregarTarea();
    }
});

function agregarTarea() {
    //verificar si se ingreso la tarea (si el usuario ingreso texto en el input)
    if (input.value) {
        //crear tarea en el DOM, dentro de un div
        let tareaNueva = document.createElement('div');
        //agregar tarea creando una nueva clase, para poder manipularla
        tareaNueva.classList.add('tarea');
        
        //crear texto ingresador por el usuario en el DOM
        let texto = document.createElement('p');
        //el value del texto va a ser la tarea ingresada en el input
        texto.innerText = input.value;
        //agregar cada tarea como un nodo hijo (como lista de tareas)
        tareaNueva.appendChild(texto);
        
        //agregar iconos al final de la tarea
        let iconos = document.createElement('div');
        //agregar iconos creando una nueva clase, para poder manipularlos
        iconos.classList.add('iconos');
        tareaNueva.appendChild(iconos);
        input.value = '';

        //Iconos
        let completar = document.createElement('i');
        completar.classList.add('icono-eliminar', 'fa-solid', 'fa-check');
        completar.addEventListener('click', completarTarea);


        let eliminar = document.createElement('i');
        eliminar.classList.add('icono-eliminar', 'fa-regular', 'fa-trash-can');
        eliminar.addEventListener('click', eliminarTarea);
        
        //append agrega varios elementos
        iconos.append(completar, eliminar);

        //agregar tarea a la lista
        listaDeTareas.appendChild(tareaNueva);
    //si la lista de tareas esta vacia (si el usuario no ingreso texto)
    } else {
        alert('Por favor ingresa una tarea');
    }

    function completarTarea(e) {  
        //como no sabemos donde va a ser el evento, viajamos a traves del DOM hasta llegar a la tarea
        // E llamamos a donde ocurre el evento
        let tarea = e.target.parentNode.parentNode;
        //TOGGLE permite ALTERNAR clases, sin necesidad de verificarlo (ej "completar/eliminar")
        tarea.classList.toggle('completada');
    }

    function eliminarTarea(e) {
        let tarea = e.target.parentNode.parentNode;
        //elimina el elemento del DOM
        tarea.remove(); 

    }
}

