// 15. Verificación de contraseña:
// Pida al usuario que ingrese una contraseña y verifique si coincide con una contraseña
// predefinida.

const predefinida = '12345'

const password = prompt('Ingrese la contraseña: ')

if(predefinida == password){
    document.querySelector('p').innerHTML = `La contraseña ingresada y la predefinida coinciden 
    correctamente`
}else{
    document.querySelector('p').innerHTML = `La contraseña ingresada no coincide con la predefinida`
}

document.querySelector('h1').innerHTML = `Ejercicio #15`