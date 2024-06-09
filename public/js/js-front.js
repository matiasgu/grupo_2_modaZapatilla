let prueba = document.querySelectorAll('div');
console.log(prueba);
function toggleVentanaEmergente(producto) {
    let ventana = document.getElementById('ventanaEmergente');
    if (ventana.style.display === 'none') {
      ventana.style.display = 'block';
      ventana.innerHTML = `<h2>Carrito de compras</h2>
                           <ul id="carrito"></ul><p>${producto}</p>
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

