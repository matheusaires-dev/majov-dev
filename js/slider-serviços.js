const slider = document.getElementById("slider");
const navDots = document.querySelectorAll(".nav-dot");
const slideWidth = 1000;
const slides = document.querySelectorAll(".slide");
const totalSlides = slides.length;
let currentIndex = 0;
let touchStartX = 0;
let touchMoveX = 0;

// Clone os primeiros slides e adicione-os ao final
for (let i = 0; i < totalSlides; i++) {
  slider.appendChild(slides[i].cloneNode(true));
}

// Clone os últimos slides e adicione-os no início
for (let i = totalSlides - 1; i >= 0; i--) {
  slider.insertBefore(slides[i].cloneNode(true), slider.firstChild);
}

// Ajuste a posição inicial do slider
slider.style.transform = `translateX(${-slideWidth}px)`;

slider.addEventListener("mousedown", startDrag);
slider.addEventListener("touchstart", startDrag);

function startDrag(event) {
  event.preventDefault();
  if (event.type === "mousedown") {
    touchStartX = event.clientX;
  } else if (event.type === "touchstart") {
    touchStartX = event.touches[0].clientX;
  }

  slider.addEventListener("mousemove", drag);
  slider.addEventListener("touchmove", drag);
  slider.addEventListener("mouseup", endDrag);
  slider.addEventListener("touchend", endDrag);

  function drag(event) {
    event.preventDefault();
    if (event.type === "mousemove") {
      touchMoveX = event.clientX;
    } else if (event.type === "touchmove") {
      touchMoveX = event.touches[0].clientX;
    }
    let deltaX = touchMoveX - touchStartX;
    slider.style.transform = `translateX(${
      -slideWidth + deltaX
    }px)`;
  }

  function endDrag(event) {
    event.preventDefault();
    let deltaX = touchMoveX - touchStartX;
    let movedSlides = Math.round(deltaX / slideWidth);

    // Atualize o índice atual para o novo índice correto no slider clonado
    currentIndex += movedSlides;

    // Defina o novo índice para corresponder ao slide original
    currentIndex = (currentIndex + totalSlides) % totalSlides;

    slider.style.transform = `translateX(${
      -slideWidth + deltaX - currentIndex * slideWidth
    }px)`;

    slider.removeEventListener("mousemove", drag);
    slider.removeEventListener("touchmove", drag);
    slider.removeEventListener("mouseup", endDrag);
    slider.removeEventListener("touchend", endDrag);
  }
}

function moveToSlide(index) {
  currentIndex = index;
  slider.style.transform = `translateX(${-slideWidth - currentIndex * slideWidth}px)`;
}
