
class InicioSesion{
    constructor(Nombre,Contraseña){
        this.Nombre=Nombre
        this.Contraseña=Contraseña
    }   
    ComprobarContraseña(){
        let Datos = JSON.parse(localStorage.getItem("Datos")) || [];
        return Datos.some((valor) => valor[1] == this.Nombre && valor[2] == this.Contraseña);
        
    }
    ComprobarNombre(){
        let Datos = JSON.parse(localStorage.getItem("Datos")) || [];    
        return Datos.some((valor) => valor[1] == this.Nombre);
        
    }
}

let fullData = localStorage.getItem("Datos");
console.log(fullData)
DatoComprobante=JSON.parse(fullData)

Nombre=document.getElementById("Nombre")
Contraseña=document.getElementById("Contraseña")

var Boton=document.getElementById("Enviar")



Boton.addEventListener("click",()=>{
    const Inicio = new InicioSesion(Nombre.value,Contraseña.value)
    if(Inicio.ComprobarNombre() && Inicio.ComprobarContraseña() ){
        window.location.href="Juego.html"
    }
    else{
        alert("mal")
    }
})
