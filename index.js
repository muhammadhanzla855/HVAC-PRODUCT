const mobileToggle = document.getElementById("mobileToggle");
const mobileMenu = document.getElementById("mobileMenu");

mobileToggle.addEventListener("click", () => {
  const isOpen = mobileMenu.style.display === "flex";

  mobileMenu.style.display = isOpen ? "none" : "flex";
  mobileToggle.textContent = isOpen ? "☰" : "✕";
});
const form = document.getElementById('getCallForm');
form.addEventListener('submit', e => {
  e.preventDefault();

  let valid = true;
  form.querySelectorAll('input').forEach(input => {
    if (!input.value.trim()) {
      valid = false;
      input.classList.add('invalid');
      setTimeout(() => input.classList.remove('invalid'), 500);
    }
  });

  if (valid) {
    alert("Thanks! We'll call you shortly.");
    form.reset();
  }
});
document.addEventListener("DOMContentLoaded", function() {
  const seeMoreBtn = document.getElementById("seeMoreBtn");
  const hideBtn = document.getElementById("hideBtn");
  const hiddenCards = document.querySelectorAll(".cards-grid .card.hidden");

  // Function to show hidden cards
  seeMoreBtn.addEventListener("click", () => {
    hiddenCards.forEach(card => {
      card.style.display = "flex"; // show the card
      card.style.opacity = 0;
      card.style.transform = "translateY(20px)";
      
      // Animate in
      setTimeout(() => {
        card.style.transition = "all 0.4s ease";
        card.style.opacity = 1;
        card.style.transform = "translateY(0)";
      }, 50);
    });

    // Toggle buttons
    seeMoreBtn.style.display = "none";
    hideBtn.style.display = "inline-block";
  });

  // Function to hide the extra cards
  hideBtn.addEventListener("click", () => {
    hiddenCards.forEach(card => {
      card.style.transition = "all 0.3s ease";
      card.style.opacity = 0;
      card.style.transform = "translateY(20px)";

      setTimeout(() => {
        card.style.display = "none";
      }, 300);
    });

    // Toggle buttons
    hideBtn.style.display = "none";
    seeMoreBtn.style.display = "inline-block";
  });
});
