function showProjectDetails(projectId) {
    alert(`Detalhes do projeto: ${projectId}`);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });
}
function showProjectDetails(projectId) {
    alert(`Detalhes do projeto: ${projectId}`);
}

function scrollToSection(sectionId) {
    const section = document.getElementById(sectionId);
    window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth'
    });

   
    setTimeout(() => {
        window.scrollTo({
            top: section.offsetTop,
            behavior: 'smooth'
        });
    }, 500); 
}
function showProjectDetails(projectId) {
   
    if (projectId === 'project1') {
        alert("Detalhes do Projeto 1: Sistema Integrado com Banco de Dados.");
    } else if (projectId === 'project2') {
        alert("Detalhes do Projeto 2: Site Portfólio.");
    }
}








