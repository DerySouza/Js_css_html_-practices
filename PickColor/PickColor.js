  let colorinput = document.getElementById('selector');
  let boxcolor = document.getElementsByClassName('color');
  Array.from(boxcolor).forEach(click => click.addEventListener("click",function paint(){
      click.style.background = colorinput.value;
       
  }))
  
  