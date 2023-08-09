

export const mensaje = "Hola mundo soy un mensaje";

export async function decirHola(nombre){
    console.log("Bienvenido" + nombre)
}


export class Persona {
    nombre = "Pepe";
}



const laUrlPokemon = "https://pokeapi.co/api/v2/";

export function obtenerPokemon(pokemon){

    return fetch(laUrlPokemon+"pokemon/"+pokemon);

}

//<------------------------------------------------------------------------------------------->//
const laURLdePokemon = "https://pokeapi.co/api/v2/";

export async function getPokemon(namePokemonParam) {
    var miPromesa = fetch(laURLdePokemon + "pokemon/" + namePokemonParam);
    let resultado = await miPromesa; // solo puedo usar await en funciones asincrónomas, por ende, se le indica async a la funcion
    let data = await resultado.json();

    return (data);
}

//-----------------------------------------------------------------------------------------------------


//<---------------------------------------------------------------------------------------------------->
const URLServidorPokemon ="https://pokeapi.co/api/v2/";

export async function obtenerPoke(pokemonParam){
    let promesaServidor = fetch(URLServidorPokemon+"pokemon/"+pokemonParam)
    let respuestaServidor = await promesaServidor;
    let datosPokemon = await respuestaServidor.json();
    return datosPokemon;
}

//<--------------------------------------tareas------------------------------------------------------


const URLServidorTarea = "http://localhost:3000/api/task";

export async function obtenerTarea(tareaParam){
    let promesaServi = fetch(URLServidorTarea)
    let respuestaServi = await promesaServi;
    let datosTarea = await respuestaServi.json();
    return datosTarea;
}