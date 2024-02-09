// 4. Área de un triángulo:
// Pida la base y la altura de un triángulo y calcula su área.

const b = parseFloat(prompt('Ingrese la base del triángulo: '))
const a = parseFloat(prompt('Ingrese la altura del triángulo: '))

const area = (b * a)/2

document.querySelector('h1').innerHTML = `Ejercicio #4`

document.querySelector('p').innerHTML = `Base del triángulo: ${b}
<br>
Altura del triángulo: ${a}
<br><br>
El área del triángulo es: ${area}`