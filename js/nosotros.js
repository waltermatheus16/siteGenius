window.addEventListener('DOMContentLoaded', () => {
  // Seções existentes
  document.querySelector('.next-section')?.classList.add('visible');
  document.querySelector('.direita-content')?.classList.add('visible');
  document.querySelector('.section-title')?.classList.add('visible');
  document.querySelector('.content')?.classList.add('visible');
  document.querySelector('.vision .section-title')?.classList.add('visible');
  document.querySelector('.vision .content')?.classList.add('visible');

  // Novas seções com conteúdo à direita
  document.querySelector('.nuestro-compromiso .right-section-title')?.classList.add('visible');
  document.querySelector('.nuestro-compromiso .right-content')?.classList.add('visible');

  // Seção "Innovación Constante" com conteúdo à esquerda
  document.querySelector('.innovacion-constante .section-title')?.classList.add('visible');
  document.querySelector('.innovacion-constante .content')?.classList.add('visible');

  // Seção "Futuro Sostenible" com conteúdo à direita
  document.querySelector('.futuro-sostenible .right-section-title')?.classList.add('visible');
  document.querySelector('.futuro-sostenible .right-content')?.classList.add('visible');
});