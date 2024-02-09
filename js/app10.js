// 10. Área de un círculo:
// Solicite el radio de un círculo y calcule su área.

const radio = parseFloat(prompt('Ingrese el radio del círculo: '))
const area = (3.1416) * Math.pow(radio,2)

document.querySelector('h1').innerHTML = `Ejercicio #10`

document.querySelector('p').innerHTML = `Radio ingresado: ${radio} 
<br> <br>
El área del círculo es ${area.toFixed(2)}`