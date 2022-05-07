// console.log("uploadfile");
// variables globales
const formularioUI = document.getElementById("formulario");  
const listaProductosUI = document.getElementById("listadeproductos");
let arrayProductos = []


// funciones
const crearProductos = (productos) =>{
    let item = {
        productos: productos
    } 
    arrayProductos.push(item)  
    return item; 
};

// let produtcone = crearProductos("arroz");
// let productwo = crearProductos("azucar");
// console.log(produtcone);
// console.log(productwo);
// console.log(arrayProductos);
const guardar = ()  =>{
localStorage.setItem("mercado",  JSON.stringify(arrayProductos));
};
const renderizar = () =>{
    listaProductosUI.innerHTML = "";
    arrayProductos = JSON.parse(localStorage.getItem("mercado"));
    if(arrayProductos === null){
        arrayProductos =  []
    }else{
        arrayProductos.forEach( elemento => {

        })
    }
    console.log(arrayProductos);
}

// llamado de eventos
formularioUI.addEventListener("submit", (e)=>{
    e.preventDefault();
    let productosUI = document.querySelector("#producto").value
    
// console.log(productosUI);
crearProductos(productosUI);
guardar()
formularioUI.reset()
});
document.addEventListener("DOMContentLoaded", renderizar);



