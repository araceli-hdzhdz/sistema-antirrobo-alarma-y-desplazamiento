/* ======================
   CAROUSEL FUNCTIONALITY
====================== */

(function() {
  const carousel = document.getElementById('mediaCarousel');
  if (!carousel) return;

  const track = carousel.querySelector('.carousel-track');
  const slides = carousel.querySelectorAll('.carousel-slide');
  const prevBtn = carousel.querySelector('#carouselPrev');
  const nextBtn = carousel.querySelector('#carouselNext');
  const dotsContainer = carousel.querySelector('#carouselDots');
  const counterDiv = carousel.querySelector('#carouselCounter');

  let currentIndex = 0;
  const totalSlides = slides.length;

  // Crear puntos indicadores
  function createDots() {
    dotsContainer.innerHTML = '';
    for (let i = 0; i < totalSlides; i++) {
      const dot = document.createElement('button');
      dot.className = 'carousel-dot';
      if (i === 0) dot.classList.add('active');
      dot.addEventListener('click', () => goToSlide(i));
      dotsContainer.appendChild(dot);
    }
  }

  // Actualizar posición del carousel
  function updateCarousel() {
    const offset = -currentIndex * 100;
    track.style.transform = `translateX(${offset}%)`;

    // Actualizar puntos
    document.querySelectorAll('.carousel-dot').forEach((dot, i) => {
      dot.classList.toggle('active', i === currentIndex);
    });

    // Actualizar contador
    counterDiv.textContent = `${currentIndex + 1} / ${totalSlides}`;
  }

  // Ir a un slide específico
  function goToSlide(index) {
    currentIndex = (index + totalSlides) % totalSlides;
    updateCarousel();
  }

  // Siguiente slide
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  // Anterior slide
  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  // Teclado
  document.addEventListener('keydown', (e) => {
    if (carousel.offsetParent === null) return; // Si no es visible
    if (e.key === 'ArrowLeft') prevSlide();
    if (e.key === 'ArrowRight') nextSlide();
  });

  // Inicializar
  createDots();
  updateCarousel();

  // Auto-advance opcional (comentado por defecto)
  // setInterval(nextSlide, 5000);

})();
