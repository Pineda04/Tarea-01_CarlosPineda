// 13. Cambio de moneda:
// Pida al usuario una cantidad en dólares y convertirla a lempiras utilizando el tipo de
// cambio actual.

const dolares = parseFloat(prompt('Ingrese la cantidad de dolares que desea convertir: '))
const conver = dolares * 24.65

document.querySelector('h1').innerHTML = `Ejercicio #13`

document.querySelector('p').innerHTML = `Cantidad de dólares ingresados: $ ${dolares}
<br>
Conversión a lempiras: L ${conver.toFixed(2)}`