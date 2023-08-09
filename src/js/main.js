//inport {lo que quiero importar} from "de donde" "archivo"

import {decirHola, mensaje, Persona, obtenerPokemon,getPokemon,obtenerPoke,obtenerTarea} from './llamadasServidor.js';
console.log("Mi mensaje", mensaje);

decirHola("Profe");



var miPersona = new Persona();
console.log(miPersona.nombre);

var miRespuesta = obtenerPokemon("pikachu");

miRespuesta.then(
    (response) => {
        console.log("Response", response);
        return response.json();
    }
    
).then(
    (data)=> {
        console.log(data);
    }
)
//<---------------------------------------------------------------------------------------------------->

var miResultado = await obtenerPokemon("gengar");
var datosGengar = await miResultado.json();
console.log("Esperando a Gengar", datosGengar)

var pokemon = await getPokemon("snorlax");
console.log("Mi pokemon es: ", pokemon);


//<---------------------------------------------------------------------------------------------------->
var miPokemon = await obtenerPoke("pikachu")
console.log("Mi pokemon",miPokemon);

//<----------------------------------tareass---------------------------------------------------->

var miTarea = await obtenerTarea("task")
console.log("Mi tarea es", miTarea);



//-----------------------------------------------------------------------------------------------------
//proyecto inicio---------------------------------------------------------------------------------------

var input = document.getElementById("ingresar-tarea");
var button = document.getElementById("boton-ingresar");
var ul = document.getElementById("listaTareas");
var span = document.getElementById("span");






function eliminar(event) {
    var hijoLi = event.target.parentElement;
    ul.removeChild(hijoLi);
    contarTareas();
}

function nuevaTarea() {
    var tarea = input.value;

    if (tarea.trim() == "") {
        alert("No se pueden agregar tareas vacias");
    } else if (tareaRepetida()) {
        return;        
    } else {
        var li = document.createElement('li')
        li.setAttribute("class", "estilolista");

        var check = document.createElement('input');
        check.setAttribute("type", "checkbox");

        var label = document.createElement('label');
        label.classList.add("etiquetaTarea");
        label.textContent = tarea;

        var btn = document.createElement("button");
        var nuevaEtiquetaCaja = document.createElement("caja");
        btn.classList.add("btn", "btn-danger");
        btn.appendChild(nuevaEtiquetaCaja);
        btn.setAttribute("class", "btn btn-danger");
        btn.textContent = "Eliminar";
        


    }

    li.appendChild(check);
    li.appendChild(label);
    li.appendChild(btn);
    ul.appendChild(li);
    btn.addEventListener ("click", eliminar);




    check.addEventListener("change", contarTareas);
    input.value = "";
    input.focus();
}

button.addEventListener("click", nuevaTarea);

function contarTareas() {
    var contar = 0;
    var listaChecks = document.querySelectorAll("[type='checkbox']");

    for (let index = 0; index < listaChecks.length; index++) {
        if (listaChecks[index].checked) {
            contar++;
        }
    }
    span.textContent = contar;
}


input.addEventListener("keypress", 
function (event) {
    if (event.key === "Enter") {
        event.preventDefault();
        document.getElementById("boton-ingresar").click();
    } 
});

function tareaRepetida() {
    var listaEtiquetas = document.querySelectorAll(".etiquetaTarea");

    for (let index = 0; index < listaEtiquetas.length; index++) {
        if (listaEtiquetas[index].innerHTML.toLowerCase() == input.value.toLowerCase()) {
            alert("Tarea repetida.");
            return true;
            
            input.value="";
            input.focus();
        }else{
            return false;
        }        
    }    
}

