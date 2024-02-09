// 6. Concatenación de cadenas:
// Capture de forma separada los 2 nombres y los dos apellidos de una persona y luego
// almacene en una variable los valores por medio de una concatenación y muéstrelo en la
// consola.

const name1 = prompt('Ingrese su primer nombre: ')
const name2 = prompt('Ingrese su segundo nombre: ')
const ape1 = prompt('Ingrese su primer apellido: ')
const ape2 = prompt('Ingrese su segundo apellido: ')

const nombre = name1 + " " + name2 + " " + ape1 + " " + ape2

document.querySelector('h1').innerHTML = `Ejercicio #6`

document.querySelector('p').innerHTML = nombre

//En la consola tambien 

console.log(nombre);