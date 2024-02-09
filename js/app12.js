// 12. Calculadora simple:
// Cree una calculadora que permita al usuario realizar operaciones básicas (suma, resta,
// multiplicación, división) con dos números.

const op = parseInt(prompt('Calculadora Basica\n' + 
                           'Seleccione una opción:\n' +
                           '1-Sumar\n2-Restar\n3-Multiplicar\n4-Dividir'));

const n1 = parseFloat(prompt('Ingrese el primer número: '))
const n2 = parseFloat(prompt('Ingrese el segundo número: '))
let res
let operacion
let s

switch (op) {
    case 1:
        operacion = 'suma'
        s = '+'
        res = n1 + n2 
        break
    case 2:
        operacion = 'resta'
        s = '-'
        res = n1 - n2
        break
    case 3:
        operacion = 'multiplicación'
        s = 'x'
        res = n1 * n2
        break
    case 4:
        operacion = 'división'
        s = '/'
        res = (n1 / n2).toFixed(2)
        break
}

document.querySelector('h1').innerHTML = `Ejercicio #12`

if(op<1||op>4){
    document.querySelector('p').innerHTML = `No se ingreso una opción de operación valida`
}else{
    document.querySelector('p').innerHTML = `El resultado de la ${operacion} de ${n1} ${s} ${n2} es: 
    ${res}`;
}