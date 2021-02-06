let btn = document.getElementById('btnsub')
btn.addEventListener('click', function passaword() {
   validacao()

})


function validacao() {
   let pw1 = document.getElementById('password').value;
   let pw2 = document.getElementById('password2').value;
   let name = document.getElementById('nomedousuario').value;

   if (name == '' || pw1 == '' || pw2 == '') {
      let mensage = document.getElementById('passerror');
      mensage.innerText = 'Por favor,preencha todos os campos'
      mensage.style.color = 'red'


   }
   else if (pw1 != pw2) {
      let mensage = document.getElementById('passerror');
      mensage.innerText = 'Senha não confere'
      mensage.style.color = 'red'


   }
   else if (pw1.length < 8) {
      let mensage2 = document.getElementById('passerror');
      mensage2.innerText = 'Senha deve conter 8 digitos'
      mensage2.style.color = 'red'

   }
   else {
      let mensage2 = document.getElementById('passerror');
      mensage2.innerText = 'Senha criada com sucesso'
      mensage2.style.color = 'blue'

   }



}




document.querySelector('form').addEventListener('submit', event => {
   event.preventDefault()
})

