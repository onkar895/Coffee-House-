const swiper = new Swiper(".swiper", {
  autoplay: {
    delay: 2000,
    disableOnInteraction: false,
  },
  effect: "fade",
  loop: true,

  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
});

let menu = document.querySelector(".menu");
let nums = document.querySelectorAll(".num");
let start = false;

// window.addEventListener("scroll", () => {
//   const navbar = document.querySelector(".navbar");
//   navbar.classList.toggle("sticky", window.scrollY > 0);

//   if (window.scrollY >= menu.offsetTop) {
//     if (!start) {
//       nums.forEach((num) => {
//         startCount(num);
//       });
//     }
//     start = true;
//   }
// });

// const startCount = (el) => {
//   let max = el.dataset.val;
//   let count = setInterval(() => {
//     el.textContent++;
//     if (el.textContent === max) {
//       clearInterval(count);
//     }
//   }, 2000 / nums);
// };


const hamberger = document.querySelector('.nav-toggler')
const navMenu = document.querySelector('.navigation')

const makeCross = () => {
  hamberger.classList.toggle('active')
  navMenu.classList.toggle('open')

  if (navMenu.classList.contains('open')) {
    navMenu.style.maxHeight = navMenu.scrollHeight + 'px'
  } else {
    navMenu.removeAttribute('style')
  }
}
 
hamberger.addEventListener('click', makeCross)