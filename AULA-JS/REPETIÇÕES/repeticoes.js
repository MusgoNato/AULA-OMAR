// Use as estruturas de repetição, onde o programa
// deverá finalizar quando o usuário digitar 0, caso
// contrário ficará cadastrando os pedidos, agora vai
// poder acumular mais de um produto e ao final deverá
// ser dada a soma dos pedidos. O cardápio de uma casa
// de lanches é dado pela tabela abaixo:

// Código Produto Preço Unitário (R$)
// 100 Cachorro quente R$ 1,70
// 101 Bauru Simples R$ 2,30
// 102 Bauru com ovo R$ 2,60
// 103 Hamburguer R$ 2,40
// 104 Cheeseburguer R$ 2,50
// 105 Refrigerante R$ 1,00


// Escreva um algoritmo que leia o código do item
// adquirido pelo consumidor e a quantidade, calculando e
// mostrando o valor a pagar. Não será necessário exibir o
// produto e o valor, somente o valor final.

// Criado um dicionario
// let tabela_de_produtos = {};

// let saida = 1;
// let item = 0;
// let quant = 1;
// let valor_final = 0;

// // Loop inicial
// while(saida){

//     // Pedidos para o usuario
//     let codigo = parseInt(prompt('Insira o codigo : '));
//     let nome = prompt('Insira o nome do produto : ');
//     let preco = parseFloat(prompt('Insira o preço do produto : '));

//     // Adicionando ao meu dicionario as informações, (identificador: nome da variavel com valor qualquer)
//     tabela_de_produtos[codigo] = {nome: nome, preco: preco};

//     // Pedido de saida
//     saida = parseInt(prompt('Deseja cadastrar mais algum produto? (0 sair)'));
// }

// // Pedido para saber o produto a ser encontrado
// cod_item = parseInt(prompt('Codigo do produto : '));
// quant = parseInt(prompt('Quantidade : '));

// // Loop para percorrer as chaves do meu dicionario
// for(keys in tabela_de_produtos){
//     if(keys == cod_item){

//         // Quando encontrado é necessario criar uma variavel para armazenar o retorno do meu identidicador, que sera o identificador e o preco do produto
//         let produto = tabela_de_produtos[keys];

//         // Dai somente necessario acessar o preco por meio da variavel identificadora para acessar esse preco, no caso a variavel aqui criada foi o nome preco
//         valor_final = produto.preco * quant; 
//         alert('Valor final : ' + valor_final);
//         break;
//     }
// }


// Faça um algoritmo que leia um conjunto de
// 15 valores, um de cada vez, acompanhados de
// um código 1 ou 2. O valor representa o número
// de cobaias utilizadas em uma das 15
// experiências feitas e os códigos 1 e 2
// representam respectivamente coelhos e ratos.
// Mostre no final, o total de cobaias utilizadas, o
// total de coelhos, total de ratos, e o percentual
// de coelhos e ratos.

let cobaias = [];
let cont_coelho = 0;
let cont_rato = 0;
let total = 0;
let percentual;

// Loop para pegar os valores do usuario
for(let i = 0; i < 15; i++){
    cobaias[i] = parseInt(prompt('Insira o numero da cobaia : '));

    // Verificacao dos coelhos e ratos
    if(cobaias[i] == 1){
        cont_coelho++;
    }else if(cobaias[i] == 2){
        cont_rato++
    }
    
}

total = cont_coelho + cont_rato;

// Necessita-se colocar as crases para conseguir colocar os valores juntos das strings ao inves de concatenar tudo com +
alert(`Total de cobais : ${total}\nTotal de coelhos : ${cont_coelho} e percentual ${(cont_coelho/total) * 100}\nTotal de ratos : ${cont_rato} e percentual : ${(cont_rato/total) * 100}`);

