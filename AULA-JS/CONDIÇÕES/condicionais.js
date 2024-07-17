// Faça um script para o cálculo de uma folha de
// pagamento, sabendo que os descontos são do
// Imposto de Renda, que depende do salário bruto
// (conforme tabela abaixo) e 3% para o Sindicato e
// que o FGTS corresponde a 11% do Salário Bruto,
// mas não é descontado (é a empresa que deposita).
// O Salário Líquido corresponde ao Salário Bruto
// menos os descontos. O script deverá pedir ao
// usuário o valor da sua hora e a quantidade de horas
// trabalhadas no mês.

// Atividade
// Desconto do IR:
// Salário Bruto até 900 (inclusive) - isento
// Salário Bruto até 1500 (inclusive) - desconto de 5%
// Salário Bruto até 2500 (inclusive) - desconto de 10%
// Salário Bruto acima de 2500 - desconto de 20% Imprima na tela
// as informações, dispostas conforme o exemplo abaixo. No exemplo
// o valor da hora é 5 e a quantidade de hora é 220.
// Salário Bruto: (5 * 220) : R$ 1100,00
// (-) IR (5%) : R$ 55,00
// (-) INSS ( 10%) : R$ 110,00
// FGTS (11%) : R$ 121,00
// Total de descontos : R$ 165,00
// Salário Liquido : R$ 935,00

// let valor_hr = parseInt(prompt('Insira o valor da horas: '));
// let quant_hrs = parseInt(prompt('Insira a quantidade de horas ao mes: '));
// let salario = valor_hr * quant_hrs;
// let ir = 0;
// let inss = 0;
// let FGTS = 0;
// let soma_descontos = 0;
// let desconto = 0;

// if(salario <= 1500 && salario > 900){
//     ir += salario * 0.05;
// }
// if(salario <= 1500){
//     inss += salario * 0.1;
// }
// if(salario <= 2500){
//     FGTS += salario * 0.11;
// }else
// {
//     desconto = salario * 0.2;
// }

// soma_descontos = ir + inss + FGTS + desconto;

// alert('Total de descontos : ' + soma_descontos + '\nSalário liquido : ' + salario - soma_descontos);


// 2) Faça um script que lê as duas notas parciais obtidas
// por um aluno numa disciplina ao longo de um semestre,
// e calcule a sua média. A atribuição de conceitos
// obedece à tabela abaixo:
// Média de Aproveitamento Conceito
// Entre 9.0 e 10.0 A
// Entre 7.5 e 9.0 B
// Entre 6.0 e 7.5 C
// Entre 4.0 e 6.0 D
// Entre 4.0 e zero E

// O algoritmo deve mostrar numa janela de alert as
// notas, a média, o conceito correspondente e a
// mensagem “APROVADO” se o conceito for A, B ou C ou
// “REPROVADO” se o conceito for D ou E.

// let nota_1 = parseFloat(prompt('Insira a 1° nota : '));
// let nota_2 = parseFloat(prompt('Insira a 2° nota : '));
// let media = (nota_1 + nota_2)/2;

// if(media >= 6.0 && media <= 10){
//     alert('APROVADO');
// }else{
//     alert('REPROVADO');
// }