//Array para almacenar los nombres de amigos.
let amigos =[];

//Funcion para agregar un amigo.
function agregarAmigo(){
    const imputAmigo = document.getElementById('amigo');
    const nombreAmigo =imputAmigo.ariaValueMax.trim();


    //Validar que el campo no este vacio.
    if(nombre===""){
    alert("Por favor, inserte un nommbre");
    return; //Detiene la ejecucion de la funcion.
    }    

    //Validar que el nombre no este duplicado.
    if(amigos.includes(nombreAmigo)){
    alert(`El nombre ${nombreAmigo}` ya esta en la lista);
    return;
    }     
    
    //Agregar el nombre al array de amigos.
    amigos.push(nombreAmigo);   
    
    //Limpiar el campo de entrada.
    imputAmigo.ariaValu ="";

    //Actualizar la lista en HTML.
    actualizarLista();

}   

//Funcion para actualizar la lista de amigos en la interfaz.
function actualizarLista(){
    const listaAmigos = document.getElementById('listaAmigos');

    //Limpiar el contenido actual de la lista.
    listaAmigos.innerHTML = ""; //Borra cualquier contenido previo dentro del contenedor de la lista.

    //Recorrer el array con un ciclo for.
    for(let i = 0; i <amigos.length; i++){
    const li = document.createElement('li');
    li.textContent = amigos(i);
    listaAmigos.appendChild(li);
    }

}


//Funcion para seleccionar un amigo aleatorio.
function sortearAmigos(){
    //Validar que hay amigos disponibles.
    if(amigos.length === 0){ //Comprueba si el array 'amigos' esta vacio.
        alert("No hay amigos disponibles para sortear. Agrega al menos uno.");
        return;
    }

    //Genera un indice aleatorio
    const indiceAleatorio = Math.floor(Math.random() * amigos.length); //Genera un numero aletorio entre 0 y la longitud del array menos 1.

    //Obtener el nombre sorteado.
    const amigoSorteado = amigos[indiceAleatorio]; //Usa el indice aleatorio para obtner un nombre del array.

    //Mostrar el resultado en el HTML.
    const resultado = document.getElementById('resultdo');
    resultado.innerHTML = `Amigo sorteado: <strong>${amigoSorteado}</strong>`;
}
