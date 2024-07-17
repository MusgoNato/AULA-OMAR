// let numero = Number(10);

// /*Aqui é retornado o tipo string para impressao na tela*/
// /*Porem, o objeto continua sendo Number, não há a troca de tipos, ele somente retorna a string*/
// console.log(typeof(numero.toExponential(numero)));

/*LEMBRETE : Quando é usado String para criar um arquivo, porem nao passo nada nos seus parametros,
caso eu impressa na tela, é retornado vazio, porem o vazio que seria "" não consegue ser impresso pelo console.log, pois é uma string vazia
somente com tecnicas de depuração, como retornar um valor por meio do length, tipo numero.Valueof().length, que consigo saber se esta sendo retornado algo. */

// Faça um script que receba uma data no
// formato “dd/mm/aaaa” e escreva a data por
// extenso. Dica: use a função “split” de uma string
// que quebra a string em pedaços dado um
// separador como argumento da função. Nesse
// caso, o separador é a barra (/) da data.

// Exemplo: Para a entrada “22/04/1983” deve ser
// escrito “22 de abril de 1983”.


// let data = prompt('Insira a data : ').split('/');  

// // Dicionario contendo os meses
// let meses = {
//     1: 'Janeiro',
//     2: 'Fevereiro',
//     3: 'Março',
//     4: 'Abril',
//     5: 'Maio',
//     6: 'Junho',
//     7: 'Julho',
//     8: 'Agosto',
//     9: 'Setembro',
//     10: 'Outubro',
//     11: 'Novembro',
//     12: 'Dezembro'

// }

// // O valor contido em data[1] é do tipo String, por isso é convertido a IntersectionObserver, para a verificação do key do dicionario ser correta, de inteiro para inteiro.
// let mes = meses[parseInt(data[1])];

// alert(`${data[0]} de ${mes} de ${data[2]}`);

// switch(parseInt(data[1])){
//     case 1:{
//         mes = 'Janeiro';
//         break;
//     }
//     case 2:{
//         mes = 'Fevereiro';
//         break;
//     }
//     case 3:{
//         mes = 'Março';
//         break;
//     }
//     case 4:{
//         mes = 'Abril';
//         break;
//     }
//     case 5:{
//         mes = 'Maio';
//         break;
//     }
//     case 6:{
//         mes = 'Junho';
//         break;
//     }
//     case 7:{
//         mes = 'Julho';
//         break;
//     }
//     case 8:{
//         mes = 'Agosto';
//         break;
//     }
//     case 9:{
//         mes = 'Setembro';
//         break;
//     }
//     case 10:{
//         mes = 'Outubro';
//         break;
//     }
//     case 11:{
//         mes = 'Novembro';
//         break;
//     }
//     case 12:{
//         mes = 'Dezembro';
//         break;
//     }
//     default:{
//         mes = 'ERRO';   
//     }
// }
// alert(`${data[0]} de ${mes} de ${data[2]}`);

// 2° Declarar e atribuir três variáveis, uma com o
// seu 'nome', outra com o seu 'sobrenome' e outra
// com a sua 'idade'. Então, declare uma variável
// com nome resultado e atribua uma string unindo
// suas variáveis da seguinte forma: " João Silva
// terá 30 anos". Respeite os espaços!


// let nome = String(prompt('Insira seu nome : '));
// let sobrenome = String(prompt('Insira seu sobrenome : '));
// let idade = Number(prompt('Insira sua idade : '));

// // let resultado = nome + " " + sobrenome + " terá " + idade + " anos";

// alert(`${nome} ${sobrenome} terá ${idade} anos`);



