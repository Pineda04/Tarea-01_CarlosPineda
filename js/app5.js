// 5. Longitud de una cadena:
// Solicite una cadena de texto al usuario y muestra la longitud de la misma.

const cadena = prompt('Ingrese una cadena de texto: ')

const longitud = cadena.length

document.querySelector('h1').innerHTML = `Ejercicio #5`

document.querySelector('p').innerHTML = `La cadena de texto -> ${cadena} 
<br>
Tiene una longitud de ${longitud} caracteres`