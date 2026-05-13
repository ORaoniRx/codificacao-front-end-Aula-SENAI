//GET

function buscarComentarios() {
    //Faz uma requisição de GET para a API
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
        //recebe a resposta da API
        .then(resposta => resposta.json())
        //recebe dados já convertidos para JSON
        .then(data => {
            alert('Exibindo comentários no console aqui!');
            //mostra o comentario no console do navegador
            console.log(data);
        });


};

//POST

function enviarComentario() {
    fetch('https://jsonplaceholder.typicode.com/comments', {
        //define o método de requisição como Post
        method: 'POST',

        //informa que os dados enviados estão em formato JSON
        headers: {
            'Content-type': 'application/json'
        },

        //converte o objeto javascript para texto JSON.
        body: JSON.stringify({
            //nome enviado para a API
            nome: "Ana",
            //comentario enviado para a API
            comentario: "Muito bom !!"
        })

    })
        //converte resposta da api para JSON
        .then(resposta => resposta.json())
        .then(data => {
            alert("comentário enviado! espia no console.");

            console.log(data);
        })

};