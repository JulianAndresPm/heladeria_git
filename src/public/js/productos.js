// document.getElementById("addCarrito").addEventListener("click",iniciarSesion);
// let productos = new Array();

function addcar(id , precioxUni){
    let id_producto = id;
    $.ajax({
        type:'POST',
        url:'/twist/carrito/',
        data:{
            id_producto,
            precioxUni
        },
        dataType:'json'
    });

};
