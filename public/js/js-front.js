let prueba = document.querySelectorAll('div');
console.log(prueba);
function toggleVentanaEmergente(producto) {
    let ventana = document.getElementById('ventanaEmergente');
    if (ventana.style.display === 'none') {
      ventana.style.display = 'block';
      ventana.innerHTML = `<h2>Carrito de compras</h2>
                           <ul id="carrito"></ul><p>${producto}</p>
                            <table>
                                <thead>
                                <tr>
                                    <th>Nombre Producto</th>
                                    <th>Vista miniatura</th>
                                    <th>Precio</th>
                                    <th>Cantidad</th>
                                    <th>Total</th>
                                </tr>
                                </thead>
                                <tbody>
                                <tr>
                                    <td><%= producto.product_name%> </td>
                                    <td><img src="/img/zapatillas_img/<%=producto.product_img%>.jpg"></td>
                                    <td> <%= producto.product_price%></td>
                                    <th>1</th>
                                    <th>$1056498</th>
                                </tr>
                                </tbody>
                            </table>
      					   <a href="/shopCarts/addCarrito/"> 
						       <button class="button-ventana-emergente" id="btn-opc-comprar">COMPRAR</button>
					       </a> 
					       <button class="button-ventana-emergente" id="btn-opc-cancelar">CANCELAR</button>`;
    } else {
      ventana.style.display = 'none';
      ventana.innerHTML = '';
    }
  }

  function agregarProducto(producto) {
    let carrito = document.getElementById('carrito');
    let li = document.createElement('li');
    li.textContent = producto;
    carrito.appendChild(li);
    
    let ventana = document.getElementById('ventanaEmergente');
    if (ventana.style.display === 'none') {
      toggleVentanaEmergente(producto);
    }
  }

document.addEventListener('click', function(event) {
if (event.target.id === 'btn-opc-cancelar') {
    // Código a ejecutar cuando se hace clic en el botón CANCELAR
    document.getElementById('ventanaEmergente').style.display = 'none';
}
});

