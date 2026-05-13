function buscarComentarios() {
    fetch('https://jsonplaceholder.typicode.com/comments?_limit=3')
    .then(res => res.json())
    .then(data => {
        const resultadoGet = document.getElementById('resultadoGet');

        //Limpa o conteúdo anterior
        resultadoGet.innerHTML = ``;

        data.forEach(comentario => {

            resultadoGet.innerHTML += `
            <div class="comentario">
                
                <h3>${comentario.name}</h3>

                <p>
                    <strong>Email:</strong>
                    ${comentario.email}
                </p>

                <p>${comentario.body}</p>
            
            </div>
            `
        });
    })
}