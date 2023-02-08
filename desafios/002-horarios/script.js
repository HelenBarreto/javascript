function calculo(){
var data = new Date()
var ano = data.getFullYear()
var naci = document.getElementById('aniver')
var naci = Number(aniver.value)
var idade = ano - naci
var res = document.getElementById('resposta')
if(naci >  ano  || naci <= 0){
    window.alert('[ERRO] Preencha o campo corretamente')
} else{
    var sexo = document.getElementsByName('asexo')
    var img = document.createElement('img')
    img.setAttribute('id','foto')//também dá para colocar atributos
    var genero = " " 
    if(sexo[0].checked){
        genero = 'masculino'
        if(idade < 10 && idade > 0){
            img.setAttribute('src','imagens/criançahomem.png')
        }else if(idade < 21){
            img.setAttribute('src','imagens/jovemhomem.png')
        }else if(idade < 50){
            img.setAttribute('src','imagens/adultohomem.png')
        }else{
            img.setAttribute('src','imagens/idosohomem.png')
        }
    }else if(sexo[1].checked){
        genero = 'feminino'
        if(idade < 10 && idade > 0){
            img.setAttribute('src','imagens/criançamulher.png')
        }else if(idade < 21){
            img.setAttribute('src','imagens/jovemmulher.png')
        }else if(idade < 50){
            img.setAttribute('src','imagens/adultomulher.png')
        }else{
            img.setAttribute('src','imagens/idosomulher.png')
        }
    }
    res.style.textAlign = 'center'    
    res.innerHTML = ` O cálculo mostra que é ${genero} e tem ${idade} anos.`    
    res.appendChild(img)




}


}