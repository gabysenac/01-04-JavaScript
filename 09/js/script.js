// atividade 9

n1 = parseInt(prompt('Digite o primeiro número: '));
n2 = parseInt(prompt('Digite o segundo número: '));
let operacao = prompt ('Digite a operação matemática: ');

switch(operacao){
    case "+":
        console.log(`O resultado será: ${n1 + n2}`)
        break;

    case "-":
        console.log(`O resultado será: ${n1 - n2}`)
        break;
        
    case "*":
        console.log(`O resultado será: ${n1 * n2}`)
        break;

    case "/":
        console.log(`O resultado será: ${n1 / n2}`)
        break;

    default:
        console.log('Apenas: "+" | "-" | "*" | "/" ');

}
