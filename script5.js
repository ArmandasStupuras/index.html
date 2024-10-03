const side1= Number(prompt('Koks pirmos krastines ilgis: '))
const side2= Number(prompt('Koks antros krastines ilgis: '))
const side3= Number(prompt('Koks trecios krastines ilgis: '))



function calcArea(side1, side2, side3){

    const Area = ((side1 + side2 + side3)/2)

return Area


}


const AreaValue = Math.sqrt(
Area * (Area - side1) * (Area - side2) * (Area - side3));
let calctriangle = calcArea(AreaValue)
console.log(`The area of the triangle is${calctriangle}`);