// 1°
let num = [];
let media = 0;
let soma = 0;

for(let i = 0; i < 3; i++){

    // É necessario converter a entrada do prompt para inteiro
    num[i] = parseInt(prompt('Insira os numeros : '));
    soma += num[i];
}   

// Calcula e mostra a media
media = soma/num.length;
alert('A media é : ' + media);

// 2°

var salario = parseInt(prompt('Insira seu salario : s'));
var novo_salario = 0;

novo_salario += salario * 0.1;
novo_salario += salario;
alert('Novo salario : ' + novo_salario);