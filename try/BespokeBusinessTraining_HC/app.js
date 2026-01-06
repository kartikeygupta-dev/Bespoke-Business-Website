//Header
let menu = document.getElementById("mobileMenu");
let overlay = document.getElementById("overlay");
let openBtn = document.getElementById("hamburgerBtn");
let closeBtn = document.getElementById("closeBtn");

openBtn.onclick = () => {
    menu.style.transform = "translateY(0)";
    overlay.style.opacity = 1;
    overlay.style.pointerEvents = "all";

    openBtn.style.display = "none";
    closeBtn.style.display = "block";
};

closeBtn.onclick = () => {
    menu.style.transform = "translateY(-120%)";
    overlay.style.opacity = 0;
    overlay.style.pointerEvents = "none";

    openBtn.style.display = "block";
    closeBtn.style.display = "none";
};

function toggleDropdown(dropId, arrowId) {
    let drop = document.getElementById(dropId);
    let arrow = document.getElementById(arrowId);

    if (drop.style.display === "block") {
        drop.style.display = "none";
        arrow.style.transform = "rotate(0deg)";
    } else {
        drop.style.display = "block";
        arrow.style.transform = "rotate(180deg)";
    }
}
//stats
function animateCounter(counterEl) {
  const target = parseInt(counterEl.getAttribute("data-target"));
  const numEl = counterEl.querySelector(".num");

  const duration = 2000;
  const step = target / (duration / 10);

  let count = 0;

  function update() {
    count += step;
    if (count >= target) {
      numEl.innerText = target.toLocaleString();
    } else {
      numEl.innerText = Math.ceil(count).toLocaleString();
      setTimeout(update, 10);
    }
  }

  update();
}

function triggerCountersOnScroll() {
  const counters = document.querySelectorAll(".stat-number");
  let triggered = false;

  window.addEventListener("scroll", () => {
    const section = document.querySelector(".stats-container");
    const sectionTop = section.getBoundingClientRect().top;

    if (!triggered && sectionTop < window.innerHeight) {
      counters.forEach(counter => animateCounter(counter));
      triggered = true;
    }
  });
}

document.addEventListener("DOMContentLoaded", triggerCountersOnScroll);

// tesitimonial-slider
var swiper = new Swiper(".mySwiper", {
  speed: 600,
  parallax: true,
  loop: true,
  autoplay: {
    delay: 3500,
    disableOnInteraction: false,
    pauseOnMouseEnter: true,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  }
});