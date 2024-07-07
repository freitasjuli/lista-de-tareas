const actividades=[];
function agregarTarea(){
    const nuevoValor = document.querySelector('#valor').value;

    actividades.push(nuevoValor);

    rendersarDatos();
}

function elinarTarea(persona){
    const posicion = actividades.findIndex((elemnto) => elemnto === persona);

    actividades.splice(posicion,1);

    rendersarDatos();
}


function rendersarDatos(){
    let html=``;
    let id=1;

    for (const actividad of actividades) {
        html += `
            <div class="fichatarea">
                <p>${id++}</p>
                <p>${actividad}</p>
                <button class="eliminar" onclick="elinarTarea('${actividad}')">x</button>
            </div>
        `
    }

    const tareas = document.querySelector('.tareas');
    tareas.innerHTML = html;
}

rendersarDatos();