const nombreInput = document.getElementById("nombre-input") ;
const guardarBtn = document.getElementById("button-name") ;
const nombresLista = document.getElementById("nombres-lista") ;

guardarBtn.addEventListener("click", function(){

    const nombre = nombreInput.value ;
    const nombresRepetido = Array.from(nombresLista.getElementsByTagName("li")).some(li => li.textContent === nombre) ;

    if(nombresRepetido){
        alert("ERROR, NOMBRE REPETIDO ❌")
    } else {
        alert("Nombre agregado correctamente ✅")
        const nuevoElementolista = document.createElement("li") ;
        nuevoElementolista.textContent = nombre ;
        nombresLista.appendChild(nuevoElementolista) ;
    }
    
    nombreInput.value = "" 
})