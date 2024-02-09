// 16. Atletas:
// Dos Atletas recorren la misma distancia y se registran sus tiempos en minutos y
// segundos. Se desea saber el tiempo total utilizado por ambos atletas en horas, minutos
// y segundos.

const min1 = parseInt(prompt('Ingrese los minutos del primer atleta: '))
const seg1 = parseInt(prompt('Ingrese los segundos del primer atleta: '))
const min2 = parseInt(prompt('Ingrese los minutos del segundo atleta: '))
const seg2 = parseInt(prompt('Ingrese los segundos del segundo atleta: '))

//Atleta 1
const t1_min = (seg1/60) + min1
const t1_seg = (min1*60) + seg1
const t1_hora = (min1/60) + (seg1/3600)

//Atleta 2
const t2_min = (seg2/60) + min2
const t2_seg = (min2*60) + seg2
const t2_hora = (min2/60) + (seg2/3600)

document.querySelector('h1').innerHTML = `Ejercicio #16:`

document.querySelector('p').innerHTML = `Primer Atleta:
<br>
Tiempo total convertido en horas: ${t1_hora.toFixed(2)} <br>
Tiempo total convertido en minutos: ${t1_min.toFixed(2)} <br>
Tiempo total convertido en segundos: ${t1_seg.toFixed(2)} <br>
Tiempo total: ${Math.floor(t1_min/60)} horas con ${Math.floor(t1_min%60)} minutos y 
${Math.floor(t1_seg%60)} segundos <br><br>
Segundo Atleta:
<br>
Tiempo total convertido en horas: ${t2_hora.toFixed(2)} <br>
Tiempo total convertido en minutos: ${t2_min.toFixed(2)} <br>
Tiempo total convertido en segundos: ${t2_seg.toFixed(2)} <br>
Tiempo total: ${Math.floor(t2_min/60)} horas con ${Math.floor(t2_min%60)} minutos y 
${Math.floor(t2_seg%60)} segundos`