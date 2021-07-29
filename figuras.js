//código del cuadrado
console.group("Cuadrados");
const ladoCuadrado = 5;
console.log("Los lados del cuadrado miden: " + ladoCuadrado + "cm")

const perimetroCuadrado = ladoCuadrado * 4;
console.log("El perimetro del cuadrado es: " + perimetroCuadrado + "cm")

const areaCuadrado = ladoCuadrado * ladoCuadrado;
console.log("EL area del cuadrado es: " + areaCuadrado + "cm2")
console.groupEnd();

//código del triángulo

console.group("Triángulos")

const ladoTriangulo1 = 6;
const ladoTriangulo2 = 6;
const baseTriangulo = 4;
const alturaTriangulo = 5.5;

console.log("Los lados del triángulo miden: " + ladoTriangulo1 + "cm, " + ladoTriangulo2 + "cm, " + baseTriangulo + "cm")

console.log("La altura del triángulo es: " + alturaTriangulo + "cm")

const perimetroTriangulo = ladoTriangulo1 + ladoTriangulo2 + baseTriangulo;

console.log("El perimetro del triángulo es: " + perimetroTriangulo + "cm")

const areaTriangulo = (baseTriangulo * alturaTriangulo) / 2;
console.log("El área del triángulo es: " + areaTriangulo + "cm2")

console.groupEnd()

//código del círculo

console.group("Circulos")

const radioCirculo = 4;
console.log("El radion del círculo es: " + radioCirculo + "cm")

const diametroCirculo = radioCirculo * 2;
console.log("EL diámetro del círculo es:" + diametroCirculo + "cm")

const PI = Math.PI;
console.log("PI es: " + PI)

const perimetroCirculo = diametroCirculo * PI;
console.log("El perimetro del círculo es:" + perimetroCirculo + "cm")

const areaCirculo = (radioCirculo * radioCirculo) * PI;
console.log("El área del círculo es: " + areaCirculo + "cm2")

console.groupEnd()