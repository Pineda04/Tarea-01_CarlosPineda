// 11. Verificación de un número primo:
// Pida un número y verifique si es primo o no.

const n = parseInt(prompt('Ingrese un número: '))
let divisores = 0

document.querySelector('h1').innerHTML = `Ejercicio #11`

for (let i = 1; i <= n; i++){
    if (n%i==0) {
        divisores++
    }       
}

if (divisores==2) {
    document.querySelector('p').innerHTML = `El número ${n} es un número primo`
}else{
    document.querySelector('p').innerHTML = `El número ${n} no es un número primo`
}