// 17. Unidades de medida:
// Dada una cantidad expresada en pies, y otra en metros. Determinar la suma pero
// convertida a pulgadas, a yardas, a metros y a millas por separado. Considere las
// siguientes equivalencias.
// 1 milla = 1609 metros, 1 pulgada = 0.0254 metros, 1 yarda = 3 pies, 1 pie = 12 pulgadas.

const pies = 127
const metros = 50

const pulg = (pies*12) + (metros/0.0254)
const yardas = (pies/3) + (metros*1.094)
const mts = (pies/3.281) + metros
const millas = (pies/5280) + (metros/1609)

document.querySelector('h1').innerHTML = `Ejercicio #17`

document.querySelector('p').innerHTML = `Pies ingresados: ${pies} <br> Metros ingresados: ${metros}
<br> <br>
Suma en pulgadas: ${(pies*12).toFixed(2)} + ${(metros/0.0254).toFixed(2)} = ${pulg.toFixed(2)} <br>
Suma en yardas: ${(pies/3).toFixed(2)} + ${(metros*1.094).toFixed(2)} = ${yardas.toFixed(2)} <br>
Suma en metros: ${(pies/3.281).toFixed(2)} + ${metros} = ${mts.toFixed(2)} <br>
Suma en millas: ${(pies/5280).toFixed(4)} + ${(metros/1609).toFixed(4)} = ${millas.toFixed(4)}`