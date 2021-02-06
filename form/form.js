 var result = document.getElementById("confirmar");
 var contry = document.getElementById("contry");
 var btnEnviar = document.getElementById("coment");
 // Evento button.
 result.addEventListener("click", function (e) {
    e.preventDefault();
    var testes = document.getElementById("teste").value;
    document.getElementById("nomedoplayer").innerHTML = testes
    var display = document.getElementById("detalhes").style.display;
    if (display == "block")
       document.getElementById("detalhes").style.display = "none"
    else
       document.getElementById("detalhes").style.display = "block"

 });
 // Caixa de comentário.
 btnEnviar.addEventListener("click", function (btn) {
    btn.preventDefault();
    let boxtext = document.getElementById("boxtext");
    boxtext.value = " "
    alert("Comentário enviado.")

 })
 // Região.
 contry.addEventListener("change", function () {
    let regiao = document.getElementById("regiao");
    regiao.innerHTML = contry.value

 })
 // Idade do jogador.
 function diaDoNiver() {
    var valor = document.getElementById('idade').value;
    var dia = new Date(valor);
    var idade = Math.floor((Date.now() - dia) / (31557600000));
    var Nidade = document.getElementById('age');
    Nidade.innerHTML = idade;
 }