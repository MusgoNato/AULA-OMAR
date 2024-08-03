/*Para a criação de um objeto existem varias formas, porem nesta utilizaremos uma função construtora para a criação, nada mais é do que 
uma função que contera  os atributos e metodos do objeto em si*/

// Criacao da função contrutora do objeto
function Livro(titulo_livro, autor, total_de_paginas){
    // Atributos do objeto
    this.titulo = titulo_livro;
    this.autor_livro = autor;
    this.pgs_totais = total_de_paginas;

    // Aqui poderiam haver metodos
}

/*Aqui é instanciado a criação do objeto Livro, passando os parametros para o objeto*/
let livro = new Livro("Harry Potter", "John Travolta", 100);



// Em tempo de execução quando as propriedades do objeto sao desconhecidas, o ideal seria fazer de forma dinamica, o que permite isso é a palavra reservda Object
let dados_livro_1 = {
    autor_do_livro: "Jonhy Cage das reviravoltas",
    titulo: "Pao com mortadela",
    paginas_atuais: 0
};

let livro_1 = new Object();

// Aqui eu faço todas as chaves dentro dos dados dos livros receberem o que seria em tempo de execução os novos dados
// Em resumo, simplismente cira-se um outro construtor, no caso o de cima
livro_1.nome_autor = dados_livro_1.autor_do_livro;
livro_1.titulo_livro = dados_livro_1.titulo;
livro_1.pg_atual = dados_livro_1.paginas_atuais;

// Caso eu faça isso, o vscode nao aponta que é um objeto, ou seja ele nao autocompleta como deveria, porem ele é sim um objeto, o objeto é criado e caso eu tente acessar seus atributos e métodos dara certo

console.log(livro_1.nome_autor);
 
