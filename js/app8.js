// 8. Cálculo del promedio:
// Solicite tres números y calcule su promedio.

const n1 = parseFloat(prompt('Ingrese el primer número: '))
const n2 = parseFloat(prompt('Ingrese el segundo número: '))
const n3 = parseFloat(prompt('Ingrese el tercer número: '))

const promedio = (n1+n2+n3)/3

document.querySelector('h1').innerHTML = `Ejercicio #8`

document.querySelector('p').innerHTML = `Primer número ingresado: ${n1}
<br>
Segundo número ingresado: ${n2}
<br>
Tercer número ingresado: ${n3}
<br> <br>
El promedio es: ${promedio.toFixed(2)}`