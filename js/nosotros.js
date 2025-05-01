// Detecta quando o título da seção "Misión" e o conteúdo estão visíveis e adiciona a classe 'visible'
window.addEventListener("DOMContentLoaded", function () {
  const sectionTitle = document.querySelector(".next-section");
  const content = document.querySelector(".direita-content");

  // Adiciona a classe 'visible' para ativar a transição de entrada
  sectionTitle.classList.add("visible");
  content.classList.add("visible");
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".section-title")?.classList.add("visible");
  document.querySelector(".content")?.classList.add("visible");
});

window.addEventListener("DOMContentLoaded", () => {
  document.querySelector(".vision .section-title")?.classList.add("visible");
  document.querySelector(".vision .content")?.classList.add("visible");
});
