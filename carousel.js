const track = document.querySelector('.carousel-track');
const slides = Array.from(track.children);
const dots = Array.from(document.querySelectorAll('.dot'));
let index = 0;
const slideCount = slides.length;

// Slide verplaatsen
function moveToSlide(idx) {
  track.style.transform = `translateX(-${idx * 100}%)`;
  updateDots(idx);
}

// Dots updaten
function updateDots(idx) {
  dots.forEach(dot => dot.classList.remove('active'));
  if(dots[idx]) dots[idx].classList.add('active');
}

// Dots klikbaar maken
dots.forEach((dot, i) => {
  dot.addEventListener('click', () => {
    index = i;
    moveToSlide(index);
  });
});

// automatische sliding
setInterval(() => {
  index = (index + 1) % slideCount;
  moveToSlide(index);
}, 6000);

// Init eerste slide
moveToSlide(index);
