var input = document.getElementById("ingresar-tarea");
var button = document.getElementById("boton-ingresar");
var ul = document.getElementById("listaTareas");
var span = document.getElementById("span");


//const taskLabel = document.createElement("label");



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
        
        //listItem.appendChild(taskLabel);

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

// function noRepetirTarea() {
   // var tareaRepetida = "";
    //var listaTareas = document.querySelector("['type=li']");

    
    
    
   // str.repeat(count) //

   // function addTask() {
  //  const taskText = taskInput.value.trim();}

   // if (taskText !== "") {
       // const existingTasks = Array.from(taskList.getElementsByTagName("label"));
      //  const isTaskDuplicate = existingTasks.some(task => task.textContent === taskText);}

       // if (isTaskDuplicate) {
       // alert("tarea repitida, revise sus notas");
        //return;
       // }