// 18. Tanques de agua:
// Dadas dos tanques llenos de agua cuyas capacidades están dadas en litros y en yardas
// cúbicas. De la cantidad total de agua: el 75% se dedica al consumo doméstico y el
// 25% se dedica al riego. Diseñe un programa que haga lo siguiente:
// Determine la cantidad total de agua expresada en metros cúbicos.
// Determine las cantidades de agua dedicada al riego y al consumo doméstico expresada
// en metros cúbicos y en pies cúbicos. Considere los siguientes factores de conversión:
// 1 pie cúbico = 0.0283 metros cúbicos, 1 metro cúbico = 1000 litros, 1 yarda cúbica = 27
// pies cúbicos.

const tanqueLitros = 4250
const tanqueyardas = 20

const mts1 = tanqueLitros / 1000
const mts2 = (tanqueyardas * 27) * 0.0283
const mtsTotal = mts1 + mts2

const aguaRiegoMts = 0.25 * mtsTotal
const aguaConsumoMts = 0.75 * mtsTotal

const aguaRiegoFt = (mtsTotal / 0.0283) * 0.25
const aguaConsumoFt = (mtsTotal / 0.0283) * 0.75

document.querySelector('h1').innerHTML = `Ejercicio #18`

document.querySelector('p').innerHTML = `Capacidad del tanque en litros: ${tanqueLitros}
<br>
Capacidad del tanque en yardas cúbicas: ${tanqueyardas} <br> <br>
Cantidad total de agua en metros cúbicos: ${mtsTotal.toFixed(2)} 
<br>
Cantidad de agua dedicada al riego (en metros cúbicos): ${aguaRiegoMts.toFixed(2)}
<br>
Cantidad de agua dedicada al consumo doméstico (en metros cúbicos): ${aguaConsumoMts.toFixed(2)}
<br>
Cantidad de agua dedicada al riego (en pies cúbicos): ${aguaRiegoFt.toFixed(2)}
<br>
Cantidad de agua dedicada al consumo doméstico (en pies cúbicos): ${aguaConsumoFt.toFixed(2)}`