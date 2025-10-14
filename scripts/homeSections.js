function highlightOption(sectionId) {
    const buttons = document.querySelectorAll("nav button");

    buttons.forEach(button => {
        if (button.dataset.section === sectionId)
            button.classList.add("ativo");
        else
            button.classList.remove("ativo");
    })
}

function openSection(sectionId) {
    const sections = document.querySelectorAll("main > section");

    sections.forEach(section => {
        if (section.id === sectionId)
            section.classList.add("ativo");
        else
            section.classList.remove("ativo");

        const tabs = section.querySelectorAll(".ativo");
    });

    localStorage.setItem("secaoAtiva", sectionId);
}

document.addEventListener("DOMContentLoaded", () => {
    let sectionButtons = document.querySelectorAll("nav button");
    sectionButtons.forEach(button => {
        button.addEventListener("click", (e) => {
            e.preventDefault();
            const targetSection = button.dataset.section;
            highlightOption(targetSection);
            openSection(targetSection);
        });
    });
    
    const ultimaSecao = localStorage.getItem("secaoAtiva");

    if (ultimaSecao) {
        highlightOption(ultimaSecao);
        openSection(ultimaSecao);
    }  
    else {
        highlightOption("boletim")
        openSection("boletim");
    }
});
