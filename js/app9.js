// 9. Celsius a Fahrenheit:
// Pida una temperatura en grados Celsius y convierta a grados Fahrenheit.

const temp = parseFloat(prompt('Ingrese la temperatura en grados Celsius: '))

const conver = (temp*(9/5)) + 32

document.querySelector('h1').innerHTML = `Ejercicio #9`

document.querySelector('p').innerHTML = `${temp} grados Celsius equivalen a ${conver.toFixed(1)} 
grados Fahrenheit`