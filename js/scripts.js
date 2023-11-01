// Efeito Animatedanimate__animated

//class="animate__animated"

const content = document.querySelector('.content');

// Variável para controlar se o scroll já ocorreu
let scrolled = false;

// Função para verificar se o elemento está visível na tela
function isElementInViewport(element) {
    const rect = element.getBoundingClientRect();
    return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
}

// Função para animar os elementos quando estiverem visíveis na tela
function animateOnScroll() {
    if (!scrolled && isElementInViewport(content)) {
        const elementsToAnimate = content.querySelectorAll('.animate__animated');

        elementsToAnimate.forEach((element, index) => {
            element.classList.add('animate__fadeInUp');
            element.style.animationDelay = `${index * 200}ms`; // Delay para criar o efeito de um por um
        });

        scrolled = true;
    }
}

// Adiciona o evento de scroll para acionar a animação
window.addEventListener('scroll', animateOnScroll);

// Inicializa a animação assim que a página carregar
animateOnScroll();
