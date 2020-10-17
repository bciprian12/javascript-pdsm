/*crear una lista de estudiantes 
recorrer la lista e imprimir cada estudiante
y que los numere*/

let estudiantes = ['Jose','Arturo','Manuel','Diana','Sandra','Josefina','Rolando','Peter']

let lista = (e) => {
    let n=0;
    e.forEach(nombre => {
        n++;
        console.log(n + ' ' + nombre);
        })     
};
console.log(lista(estudiantes));

/* invertir el siguiente arreglo: 
invertirArreglo([1,2,3,4,5,6,7,8,9])

retorno tiene que ser: 9,8,7,6,5,4,3,2,1
*/

let numeros = [1,2,3,4,5,6,7,8,9];

invertirArreglo= arreglo =>  {
   arreglo.reverse()
   return arreglo;
}

console.log(invertirArreglo(numeros));

//Un extra!
let variable = prompt('Lo que escribas aqui lo voy a invertir').split("");

console.log(invertirArreglo(variable));