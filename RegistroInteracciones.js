class Registro{
    constructor(Correo,Nombre,Contraseña){
        this.Correo=Correo
        this.Nombre=Nombre
        this.Contraseña=Contraseña

    }


    ComprobarCorreo(){
        let Datos = JSON.parse(localStorage.getItem("Datos")) || [];
        return Datos.some((valor) => valor[0] == this.Correo);
        
    }
    ComprobarNombre(){
        let Datos = JSON.parse(localStorage.getItem("Datos")) || [];    
        return Datos.some((valor) => valor[1] == this.Nombre);
        
    }

    GuardarInformacion(){
        if(this.ComprobarCorreo){
            let DatosContenedor = JSON.parse(localStorage.getItem("Datos")) || [];
            let Contenedor = [this.Correo, this.Nombre, this.Contraseña];
            DatosContenedor.push(Contenedor)

            localStorage.setItem("Datos", JSON.stringify(DatosContenedor))
            let fullData = localStorage.getItem("Datos");
            console.log(fullData)
        }
        
    }
}

var Correo=document.getElementById("Correo");
var Nombre=document.getElementById("Nombre");
var Contraseña=document.getElementById("Contraseña");
var Boton=document.getElementById("Enviar");




Correo.addEventListener("input",(valor)=>{
    TexValor=valor.target.value;
    if(TexValor.includes("@gmail.com")){
        Correo.style.boxShadow="0px 0px 10px 3px green"
    }
    else if(TexValor==""){
        Correo.style.boxShadow=""

    }
    else{
        Correo.style.boxShadow="0px 0px 10px 3px red"


    }

})
Nombre.addEventListener("input",(valor)=>{
    TexValor=valor.target.value;
    if(TexValor.length>5){
        Nombre.style.boxShadow="0px 0px 10px 3px green"
    }
    else if(TexValor==""){
        Nombre  .style.boxShadow=""

    }
    else{
        Nombre.style.boxShadow="0px 0px 10px 3px red"

    }

})

Contraseña.addEventListener("input",(valor)=>{
    TexValor=valor.target.value;

    if(TexValor.length>6){
        Contraseña.style.boxShadow="0px 0px 10px 3px green"

    }
    else if(TexValor==""){
        Contraseña.style.boxShadow=""

    }
    else{
        Contraseña.style.boxShadow="0px 0px 10px 3px red"

    }
})





Boton.addEventListener("click", () => {
    let registro = new Registro(Correo.value, Nombre.value, Contraseña.value);

    if (Correo.value && Nombre.value && Contraseña.value) {

        
        if(registro.ComprobarCorreo()){
            alert("Ese correo ya existe")
            
        }
        else if (registro.ComprobarNombre()){
            alert("Ese nombre ya existe")
        }
        else{
            registro.GuardarInformacion();
            Correo.value=""
            Nombre.value=""
            Contraseña.value=""
            Correo.style.boxShadow=""
            Nombre.style.boxShadow=""
            Contraseña.style.boxShadow=""
            window.location.href="index.html"
        }

        

    } else {
        alert("Por favor, complete todos los campos.");
    }
});