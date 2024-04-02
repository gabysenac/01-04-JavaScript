// console.log("Olá mundo!")
// console.log('Olá mundo 2')
// console.log(`Olá mundo 3`)

// // variável
// let nome = 'Gabrielly'
// const idade = 18
// var profissao = 'programador'
// console.log(typeof nome)
// console.log(typeof idade)
// console.log(profissao)

// console.log(nome + idade + profissao)
// console.log("Usuário: " + nome + " Idade: " + idade + "Profissão: " + profissao)
// console.log(`${nome} ${idade} ${profissao}`)
// console.log(`Usuario: ${nome} Idade: ${idade} Profissao:${profissao}`)



// var idade = parseInt(prompt("Digite sua idade"))
// alert("Você tem " + idade + " anos ")

// idade + 10
// alert("Daqui a 10 anos você terá " + idade + " anos")


// var idade2 = idade + 10
// alert("Daqui a 10 anos você terá " + idade2 + " anos")


// let nome = prompt("Digite seu nome")
// let sobrenome = prompt("Sobrenome")

// alert(`O nome completo é: ${nome} ${sobrenome}`)



// let idade = ParseInt(prompt("Idade"))

// if(idade >=18) {
//     alert('Pode entrar')
// }else{
//     alert('Não pode entrar')
// }


// let idade = parseInt(prompt("Idade"))

// if(idade >=18) {
//     alert('Pode entrar')
// }else if (idade >=15 && idade<18){
//     alert('Pode entrar com os pais')
// }else{
//     alert('Não pode entrar')
// }


// for (let i = 0; i <= 50; i++) {
//  console.log(`O valor de i é: ${i}`);
// }


// hoje 01-04
// let p = 0;

// while(p < 5){
//     console.log(`Repetindo ${p}`)
//     p++
// }


// let g = 10

// do{
//     console.log(`Valor de J: ${j}`)
//     j = j -1
// }while(j > 1)

const trabalho = prompt("Digite seu trabalho")
switch(trabalho) {
case "programador":
    console.log("Você gosta de programar!");
    break;
case "engenheiro":
    console.log("Você gosta de cálculo");
    break;
case "Advogado":
    console.log("Você gosta de Justiça");
    break;
    default:
    console.log("Profissão não encontrada");
}





