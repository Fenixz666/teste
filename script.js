window.addEventListener('scroll', function() {
    var scrollTop = window.scrollY;
    var loreSection = document.getElementById('Lore');
    var nav = document.querySelector('nav');

    // Se a posição do scroll for maior ou igual à posição do topo da seção "Lore"
    if (scrollTop >= loreSection.offsetTop) {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 1)'; // Muda a cor de fundo do 'Saiba mais' para cobrir a página
    } else {
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.5)'; // Mantém a cor de fundo do 'Saiba mais' transparente
    }
});
