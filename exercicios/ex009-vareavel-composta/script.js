let auto = [9,8,7,3]
console.log(`valores ${auto}`)

/*for(let pos = 0; pos < auto.length; pos++ ){
    console.log(`posição ${pos} valor ${auto[pos]}`)// let 'por' no proprio 'auto'
}*/

for(let b in auto){
    console.log(` posição ${b} valor ${auto[b]}`)
}