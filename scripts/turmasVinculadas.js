const abreJanelas = document.querySelectorAll(".abre-janela"); /*A pira é que vai abrir uma janelinha na página mostrando as turmas ao invés de só tacar num canto aleatório. Por isso do nome*/
const fotoGenerica = "/imagens/foto-generica-perfil.png";

const TURMA = [
    {
        "papel": "DOCENTE",
        "foto": fotoGenerica,
        "nome": "NOME DOCENTE",
        "departamento": "DEPARTAMENTO DOCENTE",
        "formacao": "FORMAÇÃO DOCENTE",
        "email": "E-MAIL DOCENTE"
    },
    {
        "papel": "DISCENTE",
        "foto": fotoGenerica,
        "nome": "NOME DISCENTE 1",
        "departamento": "DEPARTAMENTO DISCENTE 1",
        "formacao": "FORMAÇÃO DISCENTE 1",
        "email": "E-MAIL DISCENTE 1"
    },
    {
        "papel": "DISCENTE",
        "foto": fotoGenerica,
        "nome": "NOME DISCENTE  2",
        "departamento": "DEPARTAMENTO DISCENTE  2",
        "formacao": "FORMAÇÃO DISCENTE  2",
        "email": "E-MAIL DISCENTE  2"
    }
]

abreJanelas.forEach(element => {
    element.addEventListener('click', montarTabelaTurma);
});

function montarTabelaTurma() {
    const sessao = document.querySelector("#turmas");
    const divDocente = document.createElement("div");
    const divDiscente = document.createElement("div");

    const h1Docente = document.createElement("h1");
    h1Docente.textContent = "Docente (" + contadorDePapeis("docente") + ")";
    divDiscente.appendChild(h1Docente);

    const h1Discente = document.createElement("h1");
    h1Discente.textContent = "Discente (" + contadorDePapeis("discente") + ")";
    divDocente.appendChild(h1Discente);

    const subDivDocente = document.createElement("div");
    TURMA.forEach(integrante => {
        let div = (integrante.papel === "DOCENTE") ? subDivDocente : divDiscente;
        let foto = document.createElement("img");
        let nome = document.createElement("p");
        let matricula = document.createElement("p");
        let curso = document.createElement("p");
        let departamento = document.createElement("p");
        let formacao = document.createElement("p");
        let email = document.createElement("p");

        foto.src = integrante.foto;
        div.appendChild(foto);

        nome.textContent = integrante.nome;
        div.appendChild(nome);

        if (integrante.papel === "DOCENTE") {
            departamento.textContent = integrante.departamento;
            div.appendChild(departamento);

            formacao.textContent = integrante.formacao;
            div.appendChild(formacao);
        }
        else {
            matricula.textContent = integrante.departamento;
            div.appendChild(matricula);

            curso.textContent = integrante.formacao;
            div.appendChild(curso);
        }

        email.textContent = integrante.email;
        div.appendChild(email);
    })
    divDocente.appendChild(subDivDocente);
    sessao.appendChild(divDiscente);
    sessao.appendChild(divDocente);
}

function contadorDePapeis(papel) {
    let cont = 0;
    papel = papel.toUpperCase();
    TURMA.forEach(integrante => {
        if (integrante.papel === papel)
            cont++;
    })
    return cont;
}