let palabra = prompt("Escribe una palabra y te diré si es un palindromo!");


let palindromo = (a) => {
    a = a.replace(/\s+/g,'').toLowerCase();
  let b = a.split("");
  let c = a.split("").reverse();
  b = b.toString();
  c = c.toString();
  if(b == c){
   console.log( palabra + ' ' + 'es un palindromo' )
 } else
   {console.log( palabra + ' ' + 'no es un palindromo')}
}

palindromo(palabra);
