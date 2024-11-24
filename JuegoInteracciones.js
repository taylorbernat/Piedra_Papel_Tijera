function getRandomElement(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length); 
    return arr[randomIndex];  
}



const Elecciones = ['Piedra', 'Papel', 'Tijeras']; 
const EleccionesToB=['Piedra', 'Papel', 'Tijeras','Lagarto','Spock']


class Juego{
    constructor(Piedra,Papel,Tijeras){
        this.Papel=Papel
        this.Piedra=Piedra
        this.Tijeras=Tijeras
    }

    
    ComprobarPapel(random){
        const resultadoDiv = document.getElementById("Respuesta");
        if(this.Papel==random){
            resultadoDiv.innerHTML = "Empate!";
            resultadoDiv.style.color = "white";
        }
        else if(this.Papel=="Papel" && random=="Piedra"){
            resultadoDiv.innerHTML = "¡Ganas!";
            resultadoDiv.style.color = "green";
        }
        else{
            resultadoDiv.innerHTML = "¡Pierdes!";
            resultadoDiv.style.color = "red";
        }
    }

    ComprobarPiedra(random){
        const resultadoDiv = document.getElementById("Respuesta");
        if(this.Piedra==random){
            resultadoDiv.innerHTML = "Empate!";
            resultadoDiv.style.color = "white";
        }
        else if(this.Piedra=="Piedra" && random=="Tijeras"){
            resultadoDiv.innerHTML = "¡Ganas!";
            resultadoDiv.style.color = "green";
        }
        else{
            resultadoDiv.innerHTML = "¡Pierdes!";
            resultadoDiv.style.color = "red";
        }
    }

    
    ComprobarTijeras(random){


        const resultadoDiv = document.getElementById("Respuesta");
        
        if(this.Tijeras==random){
            resultadoDiv.innerHTML = "Empate!";
            resultadoDiv.style.color = "white";
        }
        else if(this.Tijeras=="Tijeras" && random=="Papel"){
            resultadoDiv.innerHTML = "¡Ganas!";
            resultadoDiv.style.color = "green";
        }
        else{
            resultadoDiv.innerHTML = "¡Pierdes!";
            resultadoDiv.style.color = "red";
        }
    }

}


class Juego2 extends Juego{
    constructor(Piedra,Papel,Tijeras,spock,Lagarto){
        super(Piedra,Papel,Tijeras)
        this.spock=spock
        this.Lagarto=Lagarto
    }
    ComprobarPapel(random){
        const resultadoDiv = document.getElementById("Respuesta2");
        if(this.Papel==random){
            resultadoDiv.innerHTML = "Empate!";
            resultadoDiv.style.color = "white";
        }
        else if(this.Papel=="Papel" && random=="Piedra" || this.Papel=="Papel" && random=="Spock" ){
            resultadoDiv.innerHTML = "¡Ganas!";
            resultadoDiv.style.color = "green";
        }
        else{
            resultadoDiv.innerHTML = "¡Pierdes!";
            resultadoDiv.style.color = "red";    
        }
    }
    ComprobarPiedra(random){
        const resultadoDiv = document.getElementById("Respuesta2");

        if(this.Piedra==random){
            resultadoDiv.innerHTML = "Empate!";
            resultadoDiv.style.color = "white";
        }
        else if(this.Piedra=="Piedra" && random=="Tijeras" || this.Piedra=="Piedra" && random=="Lagarto"){
            resultadoDiv.innerHTML = "¡Ganas!";
            resultadoDiv.style.color = "green";
        }
        else{
            resultadoDiv.innerHTML = "¡Pierdes!";
            resultadoDiv.style.color = "red"; 
        }
    }

    ComprobarTijeras(random){
        const resultadoDiv = document.getElementById("Respuesta2");

        if(this.Tijeras==random){
            resultadoDiv.innerHTML = "Empate!";
            resultadoDiv.style.color = "white";
        }
        else if(this.Tijeras=="Tijeras" && random=="Papel" || this.Tijeras=="Tijeras" && random=="Lagarto"){
            resultadoDiv.innerHTML = "¡Ganas!";
            resultadoDiv.style.color = "green";
        }
        else{
            resultadoDiv.innerHTML = "¡Pierdes!";
            resultadoDiv.style.color = "red"; 
        }

    }
    ComprobarSpock(random){
        const resultadoDiv = document.getElementById("Respuesta2");

        if(this.spock==random){
            resultadoDiv.innerHTML = "Empate!";
            resultadoDiv.style.color = "white";
        }
        else if((this.spock=="Spock" && random=="Tijeras") || (this.spock=="Spock" && random=="Piedra")){
            resultadoDiv.innerHTML = "¡Ganas!";
            resultadoDiv.style.color = "green";
        }
        else{
            resultadoDiv.innerHTML = "¡Pierdes!";
            resultadoDiv.style.color = "red"; 
        }
    }

    ComprobarLagarto(random){
        const resultadoDiv = document.getElementById("Respuesta2");
        
        if(this.Lagarto==random){
            resultadoDiv.innerHTML = "Empate!";
            resultadoDiv.style.color = "white";
        }
        else if(this.Lagarto=="Lagarto" && random=="Papel " || this.Lagarto=="Lagarto" && random=="Spock"){
            resultadoDiv.innerHTML = "¡Ganas!";
            resultadoDiv.style.color = "green";
        }
        else{
            resultadoDiv.innerHTML = "¡Pierdes!";
            resultadoDiv.style.color = "red"
        }
    }
}










const JuegoClasico=new Juego("Piedra","Papel","Tijeras")

const JuegoToB= new Juego2("Piedra","Papel","Tijeras","Spock","Lagarto")


const Papel=document.getElementById("Papel");
const Piedra=document.getElementById("Piedra");
const Tijera=document.getElementById("Tijera");

//------------------------------------------------
const Lagarto=document.getElementById("Largarto");
const Spock=document.getElementById("Spock");
const PapelToB=document.getElementById("Papel2");
const PiedraToB=document.getElementById("Piedra2");
const TijeraToB=document.getElementById("Tijera2");


Piedra.addEventListener("click",()=>{

    let random=getRandomElement(Elecciones);
    JuegoClasico.ComprobarPiedra(random);
    const DivPadre = document.getElementById("ContenedorRamdomClasico");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px" 
    }
    else{
        imagen.src ="Tijeras.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
})









Tijera.addEventListener("click",()=>{
    let random=getRandomElement(Elecciones)
    JuegoClasico.ComprobarTijeras(random);
    const DivPadre = document.getElementById("ContenedorRamdomClasico");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    
    

    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else{
        imagen.src ="Tijeras.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    
})


Papel.addEventListener("click",()=>{
    let random=getRandomElement(Elecciones)
    JuegoClasico.ComprobarPapel(random);
    const DivPadre = document.getElementById("ContenedorRamdomClasico");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else{
        imagen.src ="Tijeras.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
});






//------------------------------------------------------Juego Dos-----------------------------------------------------------------------
PiedraToB.addEventListener("click",()=>{

    let random=getRandomElement(EleccionesToB);
   
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else{
        imagen.src ="Lagarto.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    JuegoToB.ComprobarPiedra(random);
})





PapelToB.addEventListener("click",()=>{
    let random=getRandomElement(EleccionesToB);
    
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else{
        imagen.src ="Lagarto.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    JuegoToB.ComprobarPapel(random);
})

TijeraToB.addEventListener("click",()=>{
    let random=getRandomElement(EleccionesToB);
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else{
        imagen.src ="Lagarto.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    JuegoToB.ComprobarTijeras(random);

})



Lagarto.addEventListener("click",()=>{
    let random=getRandomElement(EleccionesToB);
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else{
        imagen.src ="Lagarto.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    JuegoToB.ComprobarLagarto(random);

})



Spock.addEventListener("click",()=>{
    let random=getRandomElement(EleccionesToB);
    const DivPadre = document.getElementById("ContenedorRamdomToB");
    DivPadre.innerHTML=""
    const imagen = document.createElement("img");
    DivPadre.appendChild(imagen); 
    
    if(random=="Piedra"){
        imagen.src ="Piedra.png";  
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Papel"){
        imagen.src ="Papel.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Tijeras"){
        imagen.src ="Tijeras.png"; 
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else if(random=="Spock"){
        imagen.src ="Spock.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    else{
        imagen.src ="Lagarto.png";
        imagen.style.backgroundColor="rgb(211, 211, 211)"
        imagen.style.borderRadius="30px 30px 30px 30px"
    }
    JuegoToB.ComprobarSpock(random);

})




