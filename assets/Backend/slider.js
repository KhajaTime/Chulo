// // Replace the slider JavaScript section with this:
// let currentSlide = 0;

// window.addEventListener("load", function () {
//   const items = document.querySelectorAll(".slider__item");
//   if (items[0]) {
//     items[0].classList.add("active");
//   }
// });

// function updateSlides(animate = true) {
//   const items = document.querySelectorAll(".slider__item");
//   const radios = document.querySelectorAll('input[name="slider"]');
  
//   items.forEach((item, index) => {
//     item.classList.remove("active", "prev", "sliding");
    
//     if (animate) {
//       item.classList.add("sliding");
//     }
    
//     if (radios[index].checked) {
//       item.classList.add("active");
//       currentSlide = index;
//     } else if (index < currentSlide) {
//       item.classList.add("prev");
//     }
//   });
// }

// function nextSlide() {
//   const radios = document.querySelectorAll('input[name="slider"]');
//   const currentIndex = Array.from(radios).findIndex((radio) => radio.checked);
//   const nextIndex = (currentIndex + 1) % radios.length;
//   radios[nextIndex].checked = true;
//   updateSlides(true);
// }

// function prevSlide() {
//   const radios = document.querySelectorAll('input[name="slider"]');
//   const currentIndex = Array.from(radios).findIndex((radio) => radio.checked);
//   const prevIndex = (currentIndex - 1 + radios.length) % radios.length;
//   radios[prevIndex].checked = true;
//   updateSlides(true);
// }

// document.addEventListener("DOMContentLoaded", function() {
//   const radios = document.querySelectorAll('input[name="slider"]');
//   radios.forEach((radio, index) => {
//     radio.addEventListener('change', () => {
//       updateSlides(true);
//     });
//   });
  
//   // Initialize first slide
//   updateSlides(false);
// });