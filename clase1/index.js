/*console.log("Este es un ejemplo de JavaScript");
x = '"Hola" \n estas en otra linea \n uno' + "uno";
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

*/
/*
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
}
*/


/*
for (let arbol=''; arbol.length <= 7 ; arbol= arbol + '#') {
    console.log(arbol);
    
}
*/

for (let i = 1; i <=100; i++){
    
    if (i % 5 === 0 && i % 3 === 0)
    console.log('FizzBuzz');
    
    else if (i % 3 === 0) 
    
        console.log('Buzz');
    
    
    else if (i % 5 === 0)
    
        console.log('Fizz');
    
    
    else 
    console.log(i);
}
