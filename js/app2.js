// 2. Resta de dos números:
// Cree un programa que pida dos números y muestre la resta del primero menos el segundo.

const n1 = parseFloat(prompt('Ingrese el primer número: '))
const n2 = parseFloat(prompt('Ingrese el segundo número: '))

const res = n1 - n2;

document.querySelector('h1').innerHTML = `Ejercicio #2`

document.querySelector('p').innerHTML = `Primer número ingresado: ${n1} 
<br>
Segundo número ingresado: ${n2}
<br><br>
El resultado de la resta es: ${res}`