const pessoa = {
    nome: "Ana",
    endereco: {
        cidade: "Florianópolis",
        estado: "SC"
    }

};

console.log(pessoa.endereco.cidade);

//Função dentro do objeto

const usuario2 = {
    nome: "Oscar",

    saudacao: function(){
        console.log("Ola!");
    }
};

usuario2.saudacao();

//objetos com this 
const pessoaFeliz = {
    nome: "Raoni",
    idade: 17,
    apresentar:function(){
        console.log(`Meu nome é ${this.nome} e tenho ${this.idade} anos.`)
    }
}

pessoaFeliz.apresentar()