

var Correo=document.getElementById("Correo");
var Nombre=document.getElementById("Nombre");
var Contraseña=document.getElementById("Contraseña");
var Boton=document.getElementById("Enviar");
var Datos=[]


Correo.addEventListener("input",(valor)=>{
    TexValor=valor.target.value;
    if(TexValor.includes("@gmail.com")){
        Correo.style.boxShadow="0px 0px 0px 3px green"
    }
    else if(TexValor==""){
        Correo.style.boxShadow=""

    }
    else{
        Correo.style.boxShadow="0px 0px 0px 3px red"


    }

})
Nombre.addEventListener("input",(valor)=>{
    TexValor=valor.target.value;
    if(TexValor=="hola"){
        Nombre.style.boxShadow="0px 0px 0px 3px green"
    }
    else if(TexValor==""){
        Nombre  .style.boxShadow=""

    }
    else{
        Nombre.style.boxShadow="0px 0px 0px 3px red"

    }

})

Contraseña.addEventListener("input",(valor)=>{
    TexValor=valor.target.value;

    if(TexValor.length>6){
        Contraseña.style.boxShadow="0px 0px 0px 3px green"

    }
    else if(TexValor==""){
        Contraseña.style.boxShadow=""

    }
    else{
        Contraseña.style.boxShadow="0px 0px 0px 3px red"

    }
})

Boton.addEventListener("click",()=>{
    Datos.forEach((valor,position)=>{
        valor.forEach((Contenido)=>{
            if(Contenido==Correo.value){
                console.log("mal")
            }
            else{
                console.log("bien")
            }
        })
        

    })

    let Contenedor=[]
    Contenedor.push(Correo.value);
    Contenedor.push(Nombre.value);
    Contenedor.push(Contraseña.value);
    Datos.push(Contenedor)
    console.log(Datos)
})


class registro{
    constructor(Correo,Nombre,Contraseña){
        this.Correo=Correo
        this.Nombre=Nombre
        this.Contraseña=Contraseña
    }

}
