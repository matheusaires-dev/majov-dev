// alert("Página em manutenção! Desculpe o transtorno...");
const menuLinks = document.querySelectorAll('nav a');

menuLinks.forEach((link) => {
    const targetId = link.getAttribute('href'); 

    if(targetId.slice(0,1) === "#"){ 
        console.log("AAAAA")
        link.addEventListener('click', (event) => {
            event.preventDefault(); // Impede o comportamento padrão do link
            const targetElement = document.querySelector(targetId); // Selecione a seção alvo
            targetElement.scrollIntoView({ behavior: 'smooth' }); // Role suavemente até a seção alvo
        });
    }
});

// const btnScrollToTop = document.getElementById("btnScrollToTop");
// function scrollToTop() {
//     window.scrollTo({
//         top: 0,
//         behavior: "smooth",
//     });
// }

// btnScrollToTop.addEventListener("click", scrollToTop);

// function handleScroll() {
//     const windowHeight = window.innerHeight;
//     const scrollTop =
//         window.pageYOffset || document.documentElement.scrollTop;

//     if (scrollTop > windowHeight / 2) {
//         btnScrollToTop.classList.remove('hidden');
//     } else {
//         btnScrollToTop.classList.add('hidden');
//     }
// }
// window.addEventListener("scroll", handleScroll);

document.getElementById("open-menu").addEventListener("click", function () {
    this.classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("btn-fale-conosco").classList.toggle("hidden");
});

document.getElementById("close-menu").addEventListener("click", function () {
    document.getElementById("open-menu").classList.toggle("hidden");
    document.getElementById("menu").classList.toggle("active");
    document.getElementById("btn-fale-conosco").classList.toggle("hidden");
});