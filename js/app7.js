// 7. Verificación de par o impar:
// Pida un número al usuario y determina si es par o impar.

const n = parseInt(prompt('Ingrese un número: '))

document.querySelector('h1').innerHTML = `Ejercicio #7`

if (n%2==0) {
    document.querySelector('p').innerHTML = `Número ingresado: ${n}
    <br>
    El número ${n} es un número par`
}else{
    document.querySelector('p').innerHTML = `Número ingresado: ${n}
    <br>
    El número ${n} es un número impar`
}