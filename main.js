let precio = parseInt(document.getElementById('price').innerText);
let btnClear = document.getElementById('btnClear');
let btnResumen = document.getElementById('btnSend');

function descuento(precio,cantidad,categoria,) {
    return ((cantidad * precio) - (precio * categoria / 100));
}


btnResumen.addEventListener('click', () => {
    let cantidad = parseInt(document.getElementById('inputCantidad').value);
    let categoria = parseInt(document.getElementById('categoria').value);
    document.getElementById('precioTotal').innerText = descuento(
        precio,
        cantidad,
        categoria
    );
})

btnClear.addEventListener('click', () => {
    document.getElementById('categoria').value = 0;
    document.getElementById('precioTotal').innerText = 0;
    document.getElementById('inputCantidad').value = 0;
})



