let prompt = require('prompt-sync')();

console.log('Boas-Vindas a lojinha!');

const produtos = [
    {
        nome: "Brinquedo",
        preco: 10
    },
    {
        nome: "Camiseta",
        preco: 80
    }
];

let somandoProdutos = 0

for(let i = 0; i < produtos.length; i++) {
    somandoProdutos += produtos[i].preco;
};

console.log('Seus produtos')

console.log(somandoProdutos);




