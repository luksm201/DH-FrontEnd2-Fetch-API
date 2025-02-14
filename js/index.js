

/* Integrantes

Lucas Mota Barbosa da Silva
Henrique Arantes Nunes
Hebert Santos
Mozarth Martini Spier
Anderson Silva
João Bosco


*/


// Aqui realizamos a consulta da promisse, esperando sua resposta assíncrona

let card = document.querySelector(".card")

function atualizar() {
    fetch('https://randomuser.me/api/')
    .then(response => {
        return response.json()
    })
    .then(data => {
        //manipulamos a resposta

        console.log(data)
        renderizarDadosUsuario(data)
      
    });
}

atualizar()

function renderizarDadosUsuario(dados) {
    /* -------------------------------- Tarefa 1 -------------------------------- */
    // Aqui devem desenvolver uma função que seja exibida na tela
    // a foto, o nome completo do usuário e o e-mail.
    // Isto deve ser baseado nas informações que obtemos da API e inseridas no HTML.

        let foto = dados.results[0].picture.large;

        let nome = `${dados.results[0].name.title} ${dados.results[0].name.first} ${dados.results[0].name.last}`

        let email = dados.results[0].email

        console.log(foto)

        console.log(nome)

        console.log(email)

        card.innerHTML = `
        <img src="${foto}"> 
        <h2>${nome}</h2>
        <p>${email}<p>
        `
}

let botaoRandom = document.getElementById("random")

botaoRandom.addEventListener("click", (event) =>{
    event.preventDefault()
    atualizar()
})


/* --------------------------- Tarefa 2 (extra) --------------------------- */
// Aqui você pode ir para o ponto extra de usar o botão que está comentado no HTML.
// Você pode descomentar o código no index.html e usar esse botão para executar uma nova solicitação API, sem recarregar a página.
// Cabe aos desenvolvedores decidirem qual bloco de código deve ser contido dentro de uma função para que ele possa ser executado toda vez que um clique de botão for realizado.






