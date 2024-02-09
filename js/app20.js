// 20. El combustible:
// Escriba un programa que solicite al usuario ingresar el número de kilómetros recorridos
// por su carro y el número de litros consumidos . El script debe mostrar el consumo de
// combustible por kilómetro.

const km = parseFloat(prompt('Ingrese la cantidad de kilómetros recorridos: '))
const lt = parseFloat(prompt('Ingrese la cantidad de litros de combustible consumidos: '))

const consumo = lt/km

document.querySelector('h1').innerHTML = `Ejercicio #20`

document.querySelector('p').innerHTML = `Km recorridos: ${km} <br> Litros consumidos: ${lt}
<br> <br>
Consume ${consumo.toFixed(2)} litros de combustible por cada kilómetro`