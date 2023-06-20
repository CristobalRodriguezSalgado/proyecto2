var input = document.getElementById("ingresar-tarea");
var button = document.getElementById("boton-ingresar");
var ul = document.getElementById("listaTareas");


function nuevaTarea() {
    var tarea=input.value;

    if (tarea == "") {
        alert("No se pueden agregar tareas vacias");
    } else {
        var li = document.createElement('li')
        li.setAttribute("class", "estilolista");

        var check = document.createElement('input');
        check.setAttribute("type", "checkbox");

        var label = document.createElement('label');
        label.textContent = tarea;

        var btn = document.createElement('button');
        btn.setAttribute("class","btn btn-danger");
        btn.textContent = "Eliminar";

        li.appendChild(check);
        li.appendChild(label);
        li.appendChild(btn);

        ul.appendChild(li);



        input.value = "";
        input.focus();
    }
   
}

button.addEventListener("click", nuevaTarea);
