const calcularTotal = () => {
    let monto = document.getElementById('monto').value
    let cantidad = document.getElementById('cantidad').value
    let iva = document.getElementById('iva').value
 
    if(monto.length == 0 || cantidad.length != 0){
    document.getElementById('total').value = monto * cantidad/iva;
}
}