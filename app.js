// console.log("upload") 
// variables globales

const formularioUI =    document.querySelector("#formulario");
const listaActividadeUI = document.getElementById("listaActividades");
let arrayActividades = [];
//  funciones
const CrearItems = (actividad) =>{
    let item = {
        actividad: actividad,
        estado: false
    }
   
    
    arrayActividades.push(item);
 return item
};

const GuardarDB = (actividad) =>{
localStorage.setItem("rutina", JSON.stringify(arrayActividades));

RederizarDB()
};

const RederizarDB = () =>{
    listaActividadeUI.innerHTML = "";
    arrayActividades = JSON.parse(localStorage.getItem("rutina"));
    // console.log(arrayActividades);
    if( arrayActividades === null){
        arrayActividades = [];
      
        
    }else{
        arrayActividades.forEach(item=> {
            // console.log(item)
            if(item.estado){
                listaActividadeUI.innerHTML += `
    
                <div class="alert alert-success" role="alert"><i class="material-iconsfloat-left mr-2">
             </i><b>${item.actividad}</b> - ${item.estado}
                <span class="float-right"><i class="material-icons">done</i><span class="material-icons">delete_forever</span>
                </span>
              </div>`

            }else{

                listaActividadeUI.innerHTML += `
    
                <div class="alert alert-danger" role="alert"><i class="material-iconsfloat-left mr-2">
             </i><b>${item.actividad}</b> - ${item.estado}
                <span class="float-right"><i class="material-icons">done</i><span class="material-icons">delete_forever</span>
                </span>
              </div>`
            }



        })
    }
}

const  DeleteDB = (actividad) =>{
    let indexArray;
arrayActividades.forEach((elemento, index) => {
    //  console.log(index);
    if (elemento.actividad === actividad){
        indexArray = index
    };
});
arrayActividades.splice(indexArray, 1 )
GuardarDB()
}

const EditarDB =(actividad)=>{
let indexArray = arrayActividades.findIndex((elemento) => elemento.actividad === actividad 
);
// console.log(indexArray)
console.log( arrayActividades[indexArray]);
arrayActividades[indexArray].estado = true;
GuardarDB()

}
//  let correr = CrearItems ("trotar");
//  let nadar = CrearItems ("natacion");
// console.log(correr)
// console.log(arrayActividades)
// addEventListener
formularioUI.addEventListener("submit", (event) => {
    event.preventDefault();    // Cancela el evento si este es cancelable, sin detener el resto del funcionamiento del evento, es decir, puede ser llamado de nuevo.
    let actividadUI = document.querySelector("#actividad").value;
    // console.log(actividadUI);
    CrearItems(actividadUI);
    GuardarDB()
    formularioUI.reset()
    if( actividadUI ===  "" || actividadUI ==  " "){
            //  window.alert("Datos incorrecto");
        Swal.fire('Producto No Existe, Ingrese Producto');
        }
    
    // console.log(arrayActividades)

});
document.addEventListener("DOMContentLoaded", RederizarDB);
listaActividadeUI.addEventListener("click", (e)=>{
e.preventDefault();

// console.log(e.target);
// console.log(e.target.innerHTML);
if(e.target.innerHTML === "done" || e.target.innerHTML === "delete_forever" ){
    // console.log("action_done");
let texto = (e.path[2].childNodes[1].innerHTML);
if(e.target.innerHTML === "delete_forever"){
    DeleteDB(texto);

}else(e.target.innerHTML === "done")
EditarDB(texto)
}

});

