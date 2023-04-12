function contar(){
    var ini = document.getElementById('txti')
    var fim = document.getElementById('txtf')
    var passos = document.getElementById('txtp')
    var res = document.getElementById('resu')

    if(ini.value.length == 0 || fim.value.length == 0 || passos.value.length == 0 ){
        window.alert('[ERRO] complete todos os campos')
    }else{
        // falta de dados
        res.innerHTML = "Contando:  <br> "
        let a = Number(ini.value)
        let e = Number(fim.value)
        let i = Number(passos.value)

        if(i <= 0){
            window.alert('Passo invalido! Sera consuderado como passo = 1')
            i = 1
        }

        if(a < e) {
            //  contagem crecente
            for(let c = a; c <= e; c += i)
            res.innerHTML += ` ${c} \u{1f603}`
            
        }else{
            // contagem regressiva
            for(let c = a; c > e; c -= i)
            res.innerHTML += ` ${c} \u{1f603}`
        } 
        res.innerHTML += ` \u{1f3c1}`
        }
}
