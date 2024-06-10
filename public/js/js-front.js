let prueba = document.querySelectorAll('div');
console.log(prueba);

let producto = [{
  nombre: "Zapatillas Puma X-ray Tour",
  img: "/img/zapatillas_img/13_zapatillas_puma_unisex.jpg",
  precio:  "$75975.2",
  talle: 35,
  cantidad: 1,
  total: "$75975,2"
},
{
  nombre: "Zapatillas Nike Waffle Debut Se Hombre",
  img: "/img/zapatillas_img/09-zapatillas_nike_man.jpg",
  precio:  "$164421",
  talle: 42,
  cantidad: 1,
  total: "$164421"
}]

function toggleVentanaEmergente() {
    let ventana = document.getElementById('ventanaEmergente');
    if ( ventana.style.display === 'none') {
      ventana.style.display = 'block';
      console.log(producto);
      ventana.innerHTML = `<h2>Carrito de compras</h2>
                            <table class="table">
                                <thead>
                                <tr>
                                    <th>Nombre Producto</th>
                                    <th>Vista miniatura</th>
                                    <th>Precio</th>
                                    <th>Talle</th>                                   
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                    <th>Eliminar</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td>${producto[1].nombre}</td>
                                    <td><img class=img-table src=${producto[1].img}></td>
                                    <td>${producto[1].precio}</td>
                                    <th>${producto[1].talle}</th>
                                    <th>${producto[1].cantidad}</th>
                                    <th>${producto[1].total}</th>
                                    <th><button><i id="basurerito" class="fa-solid fa-trash"</i></button></th>
                                </tr>
                                </tbody>
                            </table>
                            <h3>Items: 1 Total Compra: $164421,00</h3>
    					    <button class="button-ventana-emergente" id="btn-opc-cancelar">SEGUIR COMPRANDO</button>
      					   <a href="/shopCarts/addCarrito/"> 
						       <button class="button-ventana-emergente" id="btn-opc-comprar">COMPRAR</button>
					       </a> 
					       <button class="button-ventana-emergente" id="btn-opc-cancelar">CANCELAR</button>`;
    } else {
      ventana.style.display = 'none';
      ventana.innerHTML = '';
    }
  }


  function agregarProducto() {
    let carrito = document.getElementById('carrito');
    /*let li = document.createElement('li');
    li.textContent = producto;
    carrito.appendChild(li);*/
    
    let ventana = document.getElementById('ventanaEmergente');
    if (ventana.style.display === 'none') {
      toggleVentanaEmergente();
    }
  }

document.addEventListener('click', function(event) {
    if (event.target.id === 'btn-opc-cancelar') {
        // Código a ejecutar cuando se hace clic en el botón CANCELAR
        document.getElementById('ventanaEmergente').style.display = 'none';
    }
});

document.addEventListener('click', function(event){
    let li = document.querySelector("#product_size");
    console.log("soy li" + li);
    //li.style.backgroundColor = '#004853';
    li.style.color = '#fb6900';
})
