// document.getElementById("addCarrito").addEventListener("click",iniciarSesion);
let productos = new Array();

function addcar(id){
    productos.push(id);
    console.log("Se añade el producto "+id);
    $.ajax({
        url:'/twist/carrito/'+id,
        success: function(){
            
        },
        data:productos
    })
}
