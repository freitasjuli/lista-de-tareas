const actividades=[];
let idPorTarea =1;

function agregarTarea(){
    const nuevoValor = document.querySelector('#valor').value;

    const objetoTarea ={
        idTarea: idPorTarea,
        tarea: nuevoValor,
        estados: true
    }
    actividades.push(objetoTarea);

    idPorTarea++;

    rendersarDatos();
}

function elinarTarea(persona){
    const posicion = actividades.findIndex((obj) => obj.idTarea === persona);

    actividades.splice(posicion,1);

    rendersarDatos();
}

function actualizarConfirmado (id){
    const posicion = actividades.findIndex((obj)=>{
        if(id === obj.idTarea){
            return true;
        }else{
            return false;
        }
    });

    actividades[posicion].estados = !actividades[posicion].estados;
}
function rendersarDatos(){
    if(actividades.estados){
        chekeado = '1';
    }else{
        chekeado ='2';
    }


    let html=``;

    for (const actividad of actividades) {
        html += `
            <div class="fichatarea">
                <p>${actividad.idTarea}</p>
                <p>${actividad.tarea}</p>
                <input type="checkbox" onclick="actualizarConfirmado(${actividad.idTarea})" ${chekeado}/>
                <button class="eliminar" onclick="elinarTarea(${actividad.idTarea})">x</button>
                
            </div>
        `
    }

    const tareas = document.querySelector('.tareas');
    tareas.innerHTML = html;
}

rendersarDatos();