// 1. Suma de dos números:
// Escriba un programa que solicite al usuario dos números y muestre la suma de los mismos.

const n1 = parseFloat(prompt('Ingrese el primer número: '))
const n2 = parseFloat(prompt('Ingrese el segundo número: '))
const sum = n1 + n2

document.querySelector('h1').innerHTML = `Ejercicio #1`

document.querySelector('p').innerHTML = `Primer número ingresado: ${n1} 
<br> 
Segundo número ingresado: ${n2}
<br> <br>
El resultado de la suma es: ${sum}`