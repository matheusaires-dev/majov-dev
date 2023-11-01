const scrollToTop = document.getElementById("scroll-to-top");
const footer = document.querySelector("footer");

// Função para verificar a posição de rolagem e controlar a visibilidade do ícone
function updateScrollToTopVisibility() {
  const footerPosition = footer.getBoundingClientRect().top;
  const bottomOffset = 20; // Ajuste este valor conforme necessário

  // Verificar se o usuário está perto do final da página (aproximadamente no rodapé)
  if (footerPosition <= window.innerHeight - bottomOffset) {
    scrollToTop.style.display = "block"; // Mostrar o ícone se estiver próximo ao rodapé
  } else {
    scrollToTop.style.display = "none"; // Esconder o ícone se estiver longe do rodapé
  }
}

// Verificar a posição de rolagem quando a página for carregada e em cada rolagem
window.addEventListener("scroll", updateScrollToTopVisibility);

// Função para rolar suavemente até o topo quando o ícone for clicado
scrollToTop.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});
