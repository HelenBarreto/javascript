let chute 
let max = 500
let numSecreto = parseInt(Math.random() * max + 1)
let tentativas = 1
console.log (numSecreto)

    while(chute != numSecreto){
    chute = prompt (`Escolha um número entre 1 e ${max}.`)
    if (chute == numSecreto){
        break
    }else if(chute > numSecreto){
        alert (` O número secreto é menor que ${chute}`)
    }else {
        alert (`O número secreto é maior que ${chute}`)
    }
    tentativas++
    }
        

    
let palaTentativas = tentativas > 1 ? 'tentativas' : 'tentativa'
alert (`Parabéns! você acertou o número secreto em ${tentativas} ${palaTentativas}.`)

