const path = "../data/livros.json";

function criarCardAcervo(livro) {

    const card = document.createElement("div");

    const capa = document.createElement("img");
    capa.src = `../imagens/livros/${livro.capa}.png`;
    card.appendChild(capa);

    const titulo = document.createElement("h3");
    titulo.innerHTML = livro.titulo;
    titulo.classList = "title";
    card.appendChild(titulo);
    
    const info = document.createElement("div");
    card.appendChild(info);

    const autor = document.createElement("p");
    autor.innerHTML = livro.autor;
    info.appendChild(autor);

    const ano = document.createElement("p");
    ano.innerHTML = livro.ano_publicacao;
    info.appendChild(ano);

    const genero = document.createElement("p");
    genero.innerHTML = livro.genero;
    info.appendChild(genero);

    const divBotoes = document.createElement("div");
    card.appendChild(divBotoes);

    const botaoReservar = document.createElement("button");
    botaoReservar.innerHTML = "Reservar";
    divBotoes.appendChild(botaoReservar);

    const botaoDetalhes = document.createElement("button");
    botaoDetalhes.innerHTML = "Detalhes";
    divBotoes.appendChild(botaoDetalhes);

    card.classList = "cardAcervo";
    info.classList = "info";
    divBotoes.classList = "buttons";

    return card;

}

async function loadAcervo() {

    let response = await fetch("../data/livros.json");
    let books = await response.json();
    console.log(books);

    let acervo = document.querySelector(".tab#acervo")

    books.forEach(book => {
        let card = criarCardAcervo(book);
        acervo.appendChild(card);
    });

}

function initAcervo() {

    loadAcervo();

}