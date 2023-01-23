function carregar(){
var msg = document.getElementById('horario')
var img = document.getElementById('foto')
var agora = new Date()
var hora = agora.getHours()

msg.innerHTML = `Agora são ${hora} horas na praia.`
if(hora > 0 && hora < 12 ){
    img.src='imagens/manha.jpg'
} else if(hora >= 12 && hora <= 18){
    img.src='imagens/tarde.jpg'
}else {
    img.src='imagens/noite.jpg'
}

}