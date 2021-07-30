//código del cuadrado

function perimetroCuadrado (lado){
    return Number(lado) * 4;
}

function areaCuadrado(lado){
    return Number(lado) * Number(lado);
}

//código del triángulo

function perimetroTriangulo (lado1, lado2, base){
    return Number(lado1) + Number(lado2) + Number(base);
} 

function areaTriangulo (base, altura){
    return (base * altura) / 2;
} 

function alturaTriangulo(lado1, lado2, base){
    if(lado1 === lado2 && lado1 != base){
        const altura = Math.sqrt(lado1**2 - base**2/ 4)
        return altura;
    }
    else{
        return "éste no es un tirangulo isoceles D:"
    }
}

//código del círculo

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
    return diametro * Math.PI
} 

function areaCirculo (radio){
    return (radio * radio) * Math.PI
}

//Aquí interactuamos con el HTML

//calculos del cuadrado

function calcularPerimetroCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const perimetro = perimetroCuadrado(value);

    alert(perimetro);
}

function calcularAreaCuadrado(){
    const input = document.getElementById("InputCuadrado");
    const value = input.value;
    const area = areaCuadrado(value);

    alert(area);
}

//calculos del triangulo

function calcularPerimetroTriangulo(){
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const base = document.getElementById("Base");

    const value1 = lado1.value;
    const value2 = lado2.value;
    const value3 = base.value;

    const perimetro = perimetroTriangulo(value1, value2, value3);

    alert(perimetro);
}

function calcularAreaTriangulo(){
     const altura = document.getElementById("Altura");
     const base = document.getElementById("Base");

     const value1 = altura.value;
     const value2 = base.value;

     const area = areaTriangulo(value1, value2);

     alert(area);
 }

function calcularAlturaTriangulo(){
    const lado1 = document.getElementById("Lado1");
    const lado2 = document.getElementById("Lado2");
    const base = document.getElementById("Base");

    const value1 = lado1.value;
    const value2 = lado2.value;
    const value3 = base.value;

    const altura = alturaTriangulo(value1, value2, value3);

    alert(altura);
}

//calculos del circulo

function calcularDiametroCirculo(){
    const radio = document.getElementById("Radio");
    const value = radio.value;

    const diametro = diametroCirculo(value);

    alert(diametro);

}

function calcularPerimetroCirculo(){
    const radio = document.getElementById("Radio");
    const value = radio.value;

    const perimetro = perimetroCirculo(value);

    alert(perimetro);

}

function calcularAreaCirculo(){
    const radio = document.getElementById("Radio");
    const value = radio.value;

    const area = areaCirculo(value);

    alert(area);

}