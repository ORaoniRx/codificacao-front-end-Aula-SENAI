//criando o objeto usuario

const usuario = {
    nome: "João",
    email: "joão@gmail.com",
    idade: 30,
    ativo: true
};

// 1.Acessar e imprimir nome e idade do objeto.

console.log(usuario.nome);
console.log(usuario.idade);
console.log(usuario.ativo);
console.log(usuario.email)

//2.alterar ativo para false;

usuario.ativo = false;
usuario.nome = "Raoni";


console.log(usuario.nome);
console.log(usuario.ativo);

//3.Remover propriedade email

delete usuario.email;

console.log(usuario.email)


//4.acessar propriedade usando variavel.

const chave = "cidade";

console.log(usuario["chave"]);

usuario.cidade = "pelotas";

console.log(usuario.cidade);

console.log(usuario);


//keys ai 

console.log(Object.keys(usuario));
// {"nome", "idade", "ativo"}

//valores ai
console.log(Object.values(usuario));