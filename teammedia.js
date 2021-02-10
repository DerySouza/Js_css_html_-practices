const calc = (a, b, c) =>
    (a + b + c) / 3
const koala = calc(44,23,71);
const dolphi = calc(47,54,49);
console.log (koala,dolphi)
 const checkwinner = function (Dolphis, koalas) {
     if (Dolphis > koalas){
         console.log('Dolphis wins score: ' + dolphi)
     }
     else console.log('Koalas wins score: ' + koala)
     
 }
checkwinner(dolphi,koala); // Dolphis wins score: 50
  
