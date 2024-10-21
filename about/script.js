const texts = [
  "Since in 2013",
  "2nd rank in Karur district"
];

let currentIndex = 0;
const textOverlay = document.getElementById("text-overlay");

function changeText() {
  currentIndex = (currentIndex + 1) % texts.length;
  textOverlay.textContent = texts[currentIndex];
}

window.addEventListener('load', () => {
  // Set initial text
  textOverlay.textContent = texts[0];

  // Change text every 4 seconds after page load
  setInterval(changeText, 4000);
});
document.addEventListener("DOMContentLoaded", () => {
  const container = document.querySelector(".container");

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("show");
      }
    });
  }, {
    threshold: 0.5 // Trigger when 50% of the content is in view
  });

  observer.observe(container);
});
