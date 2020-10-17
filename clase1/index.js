console.log("Este es un ejemplo de JavaScript");
let x = '"Hola" \n estas en otra linea \n uno' + "uno";
console.log("apple" == "Orange");
let valor = 3*6;
valor2 = 3+3;
let numero = 0;
while (numero <=12){
    console.log(numero);
    numero= numero+2;
}

for (numero = 0; numero<=12; numero = numero + 2){
    console.log(numero)
}


const respuesta = prompt('como estas hoy?')

switch (respuesta) {
case 'bien':
    console.log('Que bueno siga asi');
    
    break;
case 'mal':
    console.log('Ta arrollao, eso es falta de dinero');
    break;
default:
    console.log('Manin, eso no me interesa solo dime si estas bien o mal')
    break;
};





for (let arbol=''; arbol.length <= 7 ; arbol= arbol + '#') {
    console.log(arbol);
    
};
for (let i = 1; i <=100; i++){
    
    if (i % 5 === 0 && i % 3 === 0)
    console.log('FizzBuzz');
    
    else if (i % 3 === 0) 
    
        console.log('Buzz');
    
    
    else if (i % 5 === 0)
    
        console.log('Fizz');
    
    
    else 
    console.log(i);
};

const variableGlobal = 10;

const myfunction = () => {
console.log(variableGlobal);
let inside = 'Hola';


};
let z = 5;
if (true){
let y = 20;
let z = 30;
console.log(x+y+z)
}
console.log(x+z);

console.log("The future says:",future());

 function future(){
    return "Tu eres un loco";
};

function cuadrado(x) {
    return x*x;
};

console.log(cuadrado(5, "hi"));

function numeross() {
return 5;    
};

function multiplica( factor ){
    return number => number * factor;
    
};
let twice = multiplica(2);
console.log(twice(5));


let numeros = [2,3,5,7,11,false,"holis"];
console.log("hola".split);


const estudiantes = ['Byron', 'Carlos', 'Maxwell','Rafael'];
estudiantes.push('Cindy');
console.log(estudiantes);
