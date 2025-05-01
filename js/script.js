window.addEventListener("scroll", function () {
  const texto = document.getElementById("texto-proposito");
  const textoExtra = document.getElementById("texto-extra");
  const scrollMax = 500;
  const scrollTop = window.scrollY;
  const ratio = Math.min(scrollTop / scrollMax, 1);
  const grayValue = Math.floor(255 - 255 * ratio);

  texto.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
  textoExtra.style.color = `rgb(${grayValue}, ${grayValue}, ${grayValue})`;
});

const slides = document.querySelectorAll(".slide");
const dots = document.querySelectorAll(".dot");
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  current = index;
}

document.querySelector(".nav-btn.left").addEventListener("click", () => {
  const newIndex = (current - 1 + slides.length) % slides.length;
  showSlide(newIndex);
});

document.querySelector(".nav-btn.right").addEventListener("click", () => {
  const newIndex = (current + 1) % slides.length;
  showSlide(newIndex);
});

dots.forEach((dot, i) => {
  dot.addEventListener("click", () => showSlide(i));
});

document.getElementById("verMasBtn").addEventListener("click", function () {
  var textoExtra = document.getElementById("texto-extra");
  if (textoExtra.style.display === "none") {
    textoExtra.style.display = "block";
    this.innerText = "Ver menos";
  } else {
    textoExtra.style.display = "none";
    this.innerText = "Ver más";
  }
});
