// Reveal animations
window.addEventListener("scroll", () => {
  document.querySelectorAll(".reveal").forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 100) {
      el.classList.add("active");
    }
  });
});

// Stats counter
function animateValue(id, start, end, duration) {
  const obj = document.getElementById(id);
  let startTime = null;

  function step(timestamp) {
    if (!startTime) startTime = timestamp;
    const progress = Math.min((timestamp - startTime) / duration, 1);
    obj.textContent = Math.floor(progress * (end - start) + start);
    if (progress < 1) requestAnimationFrame(step);
  }

  requestAnimationFrame(step);
}

window.onload = () => {
  animateValue("stat1", 0, 24, 2000);
  animateValue("stat2", 0, 20, 2000);
  animateValue("stat3", 0, 10, 2000);

  loadGallery();
};

// Auto-load gallery
function loadGallery() {
  const gallery = document.getElementById("gallery");
  const imgList = [
    "images/gallery/car1.jpg",
    "images/gallery/car2.jpg",
    "images/gallery/car3.jpg"
  ];
  imgList.forEach(src => {
    const img = document.createElement("img");
    img.src = src;
    gallery.appendChild(img);
  });
}
