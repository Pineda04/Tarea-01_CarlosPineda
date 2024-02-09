// 19. La compra:
// Ha realizado una compra y sabe el precio del producto y su iva. Haga un script que
// calcule el precio total a pagar por la compra.

const prod = prompt('Ingrese el nombre del producto: ')
const precio = parseFloat(prompt('Ingrese el precio de producto: '))
const iva = parseFloat(prompt('Ingrese el porcentaje de IVA del producto: '))

const ivaC = (iva/100) * precio
const total = precio + ivaC

document.querySelector('h1').innerHTML = `Ejercicio #19`

document.querySelector('p').innerHTML = `Producto: ${prod} <br>
Precio (Sin IVA): L ${precio} <br>
IVA: (${iva}%): L ${ivaC.toFixed(2)} <br>
Precio total (Con IVA): L ${total.toFixed(2)}`