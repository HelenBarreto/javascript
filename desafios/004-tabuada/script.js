function tabuada() {

    let nu1 = document.getElementById('numero')
    let res = document.getElementById('seltab')

    if (nu1.value.length == 0){
        /*esse 0 está como uma string pq nao foi convertido. Significa q vai executar quando o campo estiver vazio */
        window.alert('por favor digite um número')
    }else{
        let a = Number(nu1.value)
        let b = 1
        res.innerHTML="   "
        while (b <= 10 ){
            let item = document.createElement('option')
            item.text = `${a} x ${b} = ${a*b}`
            res.appendChild(item)
            b++
            

    }
       
    }
}