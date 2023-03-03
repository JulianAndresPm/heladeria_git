function mostrarCarrito(id ){
    $.ajax({
        type:'GET',
        url:'/twist/carrito/'+id,
        success: function(producto){
          
        }
    });

};
