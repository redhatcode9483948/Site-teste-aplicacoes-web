alert('Seja Bem vindo ao site de teste para aplicações web!');
console.log('Este é um log de teste');

alert('Desafio alura 01');
 //Pegunte ao usuário que dia da semana é hoje.
 //Se for sábado ou domingo, mostre a mensagem "Bom fim de semana, chefe !"
 //Caso contrário, mostre a mensagem "Boa semana de estudos, chefe!
let dia = prompt ('Que dia da semana é hoje ?');

if (dia =='sábado' || dia == 'domingo') {
    alert('Bom fim de semana, chefe !');
}else{
    alert('Boa semana de estudos, chefe!');
}

alert('Desafio alura 02')
//Verifique se um número digitado pelo usuário é positivo ou negativo
//mostre um alert informando 
let numero = prompt ('Digite um número aqui:');

if (numero >= 0) {
    alert('Esse número é positivo !');
}else{
    alert('Esse número é negativo !');
}

alert('Desafio alura 03');
//crie uma mensagem que informa o usuário sobre o saldo da conta,
// usando uma template string para incluir o valor do saldo na mensagem

let saldoDisponivel = 2500;
let nomeUsuario = prompt ('Para saber seu saldo, digite seu nome:');

alert(`olá ${nomeUsuario}, seu saldo é de R$ ${saldoDisponivel}`);



