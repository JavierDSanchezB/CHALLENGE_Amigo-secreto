let nombreAmigo = [];

function agregarAmigo(){
    var participante = document.getElementById("amigo").value;
    if (participante !== ""){
        nombreAmigo.push(participante);
        console.log(nombreAmigo);
        document.getElementById("amigo").value = "";
        var nuevoAmigo = document.createElement("li");
        nuevoAmigo.textContent = participante;
        var listaResultado = document.getElementById("listaAmigos");
        listaResultado.appendChild(nuevoAmigo);   
    }else{
        alert("Por favor ingresa un nombre valido")
    }
}

function sortearAmigo(){
    document.getElementById("resultado").innerHTML = ""
    let numeroAleatorio = Math.floor(Math.random() * nombreAmigo.length);
    let amigoSeleccionado = nombreAmigo[numeroAleatorio];
    nombreAmigo.splice(numeroAleatorio , 1);
    var amigoSorteado = document.createElement("li");
    amigoSorteado.textContent = amigoSeleccionado;
    var listaResultado = document.getElementById("resultado");
    listaResultado.appendChild(amigoSorteado);
    document.getElementById("listaAmigos").innerHTML = ""
    console.log(nombreAmigo); 
}