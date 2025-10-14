function highlightBibliotecaOption(tabId) {
    const buttons = document.querySelectorAll("#biblioteca header button");

    buttons.forEach(button => {
        if (button.dataset.tab === tabId)
            button.classList.add("ativo");
        else
            button.classList.remove("ativo");
    });
}

function openBibliotecaTab(tabId) {
    const tabs = document.querySelectorAll("#biblioteca > div");

    tabs.forEach(tab => {
        if (tab.classList.contains(tabId))
            tab.classList.add("ativo");
        else
            tab.classList.remove("ativo");
    });

    localStorage.setItem("bibliotecaSecaoAtiva", tabId);
}

document.addEventListener("DOMContentLoaded", () => {
    const bibliotecaButtons = document.querySelectorAll("#biblioteca header button");

    bibliotecaButtons.forEach(button => {
        if (!button.dataset.tab)
            button.dataset.tab = button.textContent.trim().toLowerCase();

        button.addEventListener("click", e => {
            e.preventDefault();
            const targetTab = button.dataset.tab;
            highlightBibliotecaOption(targetTab);
            openBibliotecaTab(targetTab);
        });
    });

    const ultimaSecao = localStorage.getItem("bibliotecaSecaoAtiva");

    if (ultimaSecao) {
        highlightBibliotecaOption(ultimaSecao);
        openBibliotecaTab(ultimaSecao);
    } else {
        highlightBibliotecaOption("acervo");
        openBibliotecaTab("acervo");
    }
});
