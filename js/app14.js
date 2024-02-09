// 14. Comparación de cadenas:
// Solicite dos cadenas de texto y compare si son iguales o diferentes.

const cadena1 = prompt('Ingrese una cadena de texto: ')
const cadena2 = prompt('Ingrese otra cadena de texto: ')

if(cadena1 == cadena2){
    document.querySelector('p').innerHTML = `Las cadenas de texto son iguales`
}else{
    document.querySelector('p').innerHTML = `Las cadenas de texto son diferentes`
}

document.querySelector('h1').innerHTML = `Ejercicio #14`