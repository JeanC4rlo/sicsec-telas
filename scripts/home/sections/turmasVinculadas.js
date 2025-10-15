const abreJanelas = document.querySelectorAll(".abre-janela"); /*A pira é que vai abrir uma janelinha na página mostrando as turmas ao invés de só tacar num canto aleatório. Por isso do nome*/
const fotoGenerica = "/imagens/foto-generica-perfil.png";

const TURMAS = [
    ["Português",
    {
        "papel": "DOCENTE",
        "foto": fotoGenerica,
        "nome": "NOME DOCENTE",
        "departamento": "DEPARTAMENTO DOCENTE",
        "formacao": "FORMAÇÃO DOCENTE",
        "email": "E-MAIL DOCENTE"
    },
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
    },
    {
        "papel": "DISCENTE",
        "foto": fotoGenerica,
        "nome": "NOME DISCENTE  2",
        "departamento": "DEPARTAMENTO DISCENTE  2",
        "formacao": "FORMAÇÃO DISCENTE  2",
        "email": "E-MAIL DISCENTE  2"
    }],
    ["Matemática",
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
        "nome": "NOME DISCENTE  2",
        "departamento": "DEPARTAMENTO DISCENTE  2",
        "formacao": "FORMAÇÃO DISCENTE  2",
        "email": "E-MAIL DISCENTE  2"
    }]
]

function montarTabelaTurma(materia) {
    const divIntegrantes = document.querySelector("#integrantes-turma");
    const divDocente = document.querySelector("#docentes");
    const divDiscente = document.querySelector("#discentes");

    let turma;

    for(let i = 0; i < TURMAS.length; i++) {
        if(TURMAS[i][0] === materia)
            turma = TURMAS[i];
    }

    divDocente.innerHTML = "";
    divDiscente.innerHTML = "";

    const h1Docente = document.querySelector("#h1-docentes");
    h1Docente.textContent = "Docente (" + contadorDePapeis("docente", turma) + ")";

    const h1Discente = document.querySelector("#h1-discentes");
    h1Discente.textContent = "Discente (" + contadorDePapeis("discente", turma) + ")";

    turma.forEach(integrante => {
        if(integrante === materia)
            return;
        
        let div = (integrante.papel === "DOCENTE") ? divDocente : divDiscente;
        let subdiv = document.createElement("div");
        let foto = document.createElement("img");
        let nome = document.createElement("p");
        let matricula = document.createElement("p");
        let curso = document.createElement("p");
        let departamento = document.createElement("p");
        let formacao = document.createElement("p");
        let email = document.createElement("p");

        subdiv.classList.add("subdiv");

        foto.src = integrante.foto;
        subdiv.appendChild(foto);

        nome.textContent = integrante.nome;
        subdiv.appendChild(nome);

        if (integrante.papel === "DOCENTE") {
            departamento.textContent = integrante.departamento;
            subdiv.appendChild(departamento);

            formacao.textContent = integrante.formacao;
            subdiv.appendChild(formacao);
        }
        else {
            matricula.textContent = integrante.departamento;
            subdiv.appendChild(matricula);

            curso.textContent = integrante.formacao;
            subdiv.appendChild(curso);
        }

        email.textContent = integrante.email;
        subdiv.appendChild(email);

        div.appendChild(subdiv);
    })
}

function contadorDePapeis(papel, turma) {
    let cont = 0;
    papel = papel.toUpperCase();
    turma.forEach(integrante => {
        if (integrante.papel === papel)
            cont++;
    })
    return cont;
}

function initTurmas() {
    abreJanelas.forEach(element => {
        element.addEventListener('click', () => montarTabelaTurma(element.textContent));
    });
}