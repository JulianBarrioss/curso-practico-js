//código del cuadrado

console.group("Cuadrados");

function perimetroCuadrado (lado){
    return lado * 4;
}

function areaCuadrado(lado){
    return lado * lado;
}

console.groupEnd();

//código del triángulo

console.group("Triángulos")

function perimetroTriangulo (lado1, lado2, base){
    return lado1 + lado2 + base;
} 

function areaTriangulo (base, altura){
    return (base * altura) / 2;
} 

console.groupEnd()

//código del círculo

console.group("Circulos")

function radioCirculo (radio){
    return radio;
}

function diametroCirculo(radio){
    return radio * 2;
}
 
function PI (){
    return Math.PI
} 

function perimetroCirculo (radio){
    const diametro= diametroCirculo(radio);
} 

function areaCirculo (radio){
    return (radio * radio) * Math.PI
}

console.groupEnd()