document.addEventListener('DOMContentLoaded', () => {
    const navButtons = document.querySelectorAll('.nav-btn');
    const pageSections = document.querySelectorAll('.page-section');

    navButtons.forEach(button => {
        button.addEventListener('click', () => {
            const pageId = button.getAttribute('data-page');

            //1. Remove .active de todos os botões e seções
            navButtons.forEach(btn => btn.classList.remove('active'));
            pageSections.forEach(section => section.classList.remove('active'));

            //2. Adiciona .active ao botão clicado
            button.classList.add('active');

            //3. Mostra a seção correspondente
            const targetSection = document.getElementById(pageId);
            if (targetSection) {
                targetSection.classList.add('active');
            }
        })
    })
})