// 3. Multiplicación y División:
// Solicite dos números al usuario y muestra el resultado de la multiplicación y división de
// los mismos.

const n1 = parseFloat(prompt('Ingrese el primer número: '))
const n2 = parseFloat(prompt('Ingrese el segundo número: '))

const mult = n1 * n2
const div = n1 / n2

document.querySelector('h1').innerHTML = `Ejercicio #3`

document.querySelector('p').innerHTML = `Primer número ingresado: ${n1}
<br>
Segundo número ingresado: ${n2}
<br><br>
El resultado de la multiplicación es: ${mult}
<br>
El resultado de la división es: ${div}`