
let btnBack = document.getElementById('btnBackground');
btnBack.addEventListener('click', function(){
    let fundo = document.querySelector('div');
    let h1 = document.querySelector('h1');
    let colors = '#' + Math.random().toString(16).slice(2,8);
    h1.style.color = colors
    fundo.style.backgroundColor = colors
})
 

 