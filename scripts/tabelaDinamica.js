const notasBD = [
    {
        "ano": "2023",
        "materias": [["Português", "2", "2", "2", "2"], ["Matemática", "2", "2", "2", "2"]],
        "faltas": ["0", "0"],
        "final": ["8", "8"],
        "situacao": ["REPRV", "REPRV"]
    },
    {
        "ano": "2024",
        "materias": [["Português", "10", "10", "10", "10"], ["Matemática", "10", "10", "10", "10"]],
        "faltas": ["0", "0"],
        "final": ["8", "8"],
        "situacao": ["REPRV", "REPRV"]
    },
    {
        "ano": "2025",
        "materias": [["Português", "20", "20", "20", "20"], ["Matemática", "20", "20", "20", "20"]],
        "faltas": ["0", "0"],
        "final": ["8", "8"],
        "situacao": ["REPRV", "REPRV"]
    }
];

const botaoBoletim = document.querySelector("#botaoAcessoBoletim");
const botaoEsq = document.querySelector("#botaoEsq");
const botaoDir = document.querySelector("#botaoDir");

let anoAtual = new Date().getFullYear();
let idx = notasBD.findIndex(nota => nota.ano === String(anoAtual));

if (idx === -1) idx = notasBD.length - 1;

botaoBoletim.addEventListener('click', () => preencherTabela());
botaoEsq.addEventListener('click', () => passarAno(-1));
botaoDir.addEventListener('click', () => passarAno(1));

function passarAno(incremento) {
    let novoIdx = idx + incremento;

    if (novoIdx >= 0 && novoIdx < notasBD.length) {
        idx = novoIdx;
    }

    preencherTabela();
}

function preencherTabela() {
    const tabela = document.getElementById("tabelaBoletim");
    const tbody = tabela.querySelector("tbody");
    const ano = tabela.querySelector("div > p");
    let notas = notasBD[idx];

    tbody.innerHTML = "";
    ano.textContent = notas.ano;

    for (let i = 0; i < notas.materias.length; i++) {
        const tr = document.createElement("tr");

        notas.materias[i].forEach(v => {
            const td = document.createElement("td");
            td.textContent = v;
            tr.appendChild(td);
        });

        const tdFaltas = document.createElement("td");
        tdFaltas.textContent = notas.faltas[i];
        tr.appendChild(tdFaltas);

        const tdNotaFinal = document.createElement("td");
        tdNotaFinal.textContent = notas.final[i];
        tr.appendChild(tdNotaFinal);

        const tdSituacao = document.createElement("td");
        tdSituacao.textContent = notas.situacao[i];
        tr.appendChild(tdSituacao);

        tbody.appendChild(tr);
    }
}

document.addEventListener("DOMContentLoaded", preencherTabela);
