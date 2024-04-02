// atividade 3
var number = parseInt(prompt("Digite um número"))

console.log("número pares entre 1 e " + number + ":");
for(var i=1; i <=number; i++){
    if(i % 2 === 0){
        console.log(i);
    }
}