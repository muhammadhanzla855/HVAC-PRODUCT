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
const cards = document.querySelectorAll('#card-stack .tf-card');
let currentIndex = 0;

function cycleCards() {
  // Remove previous position classes
  cards.forEach(card => {
    card.classList.remove('tf-pos-1', 'tf-pos-2', 'tf-pos-3', 'tf-pos-exit');
  });

  const total = cards.length;

  // Add position classes
  cards[currentIndex % total].classList.add('tf-pos-1');
  cards[(currentIndex + 1) % total].classList.add('tf-pos-2');
  cards[(currentIndex + 2) % total].classList.add('tf-pos-3');

  // Handle exit animation
  const exitIndex = (currentIndex - 1 + total) % total;
  cards[exitIndex].classList.add('tf-pos-exit');

  currentIndex++;
}

// Cycle every 4 seconds
setInterval(cycleCards, 4000);
// ----------------- LOADING SCRIPT -----------------
    const loader = document.getElementById('loader');
    const progressBar = document.getElementById('loader-progress-bar');
    const percentage = document.getElementById('loader-percentage');
    const mainContent = document.querySelector('main');

    let loadPercent = 0;

    const loadingInterval = setInterval(() => {
      loadPercent += Math.random() * 5; // Random increment for realism
      if (loadPercent > 100) loadPercent = 100;

      progressBar.style.width = loadPercent + '%';
      percentage.innerText = Math.floor(loadPercent) + '%';

      if (loadPercent >= 100) {
        clearInterval(loadingInterval);

        // Fade out loader
        loader.classList.add('hidden');

        // Show main content after loader fades
        setTimeout(() => {
          loader.style.display = 'none';
          mainContent.style.display = 'block';
          document.body.classList.remove('loading');
        }, 800); // matches CSS transition
      }
    }, 100);

    // ---------------- PARTICLES -----------------
    const particlesContainer = document.getElementById('loader-particles');
    const numParticles = 50;

    for (let i = 0; i < numParticles; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particle.style.width = particle.style.height = (2 + Math.random() * 3) + 'px';
      particlesContainer.appendChild(particle);
    }

// ---------------- END LOADING SCRIPT -----------------
document.addEventListener("DOMContentLoaded", function () {

  // ---------------- LOADING SCREEN -----------------
  const loader = document.getElementById('loader');
  const progressBar = document.getElementById('loader-progress-bar');
  const percentage = document.getElementById('loader-percentage');
  const mainContent = document.querySelector('main');

  let loadPercent = 0;
  const loadingInterval = setInterval(() => {
    loadPercent += Math.random() * 5;
    if (loadPercent > 100) loadPercent = 100;

    if (progressBar) progressBar.style.width = loadPercent + '%';
    if (percentage) percentage.innerText = Math.floor(loadPercent) + '%';

    if (loadPercent >= 100) {
      clearInterval(loadingInterval);

      // Fade out loader
      if (loader) loader.classList.add('hidden');

      setTimeout(() => {
        if (loader) loader.style.display = 'none';
        if (mainContent) mainContent.style.display = 'block';
        document.body.classList.remove('loading');

        // ---------------- START LIQUID CURSOR AFTER LOADING -----------------
        initLiquidCursor();
      }, 800); // match CSS fade
    }
  }, 100);

  // ---------------- PARTICLES INSIDE LOADER -----------------
  const particlesContainer = document.getElementById('loader-particles');
  if (particlesContainer) {
    for (let i = 0; i < 50; i++) {
      const particle = document.createElement('div');
      particle.classList.add('particle');
      particle.style.left = Math.random() * 100 + '%';
      particle.style.top = Math.random() * 100 + '%';
      particle.style.animationDuration = (4 + Math.random() * 4) + 's';
      particle.style.width = particle.style.height = (2 + Math.random() * 3) + 'px';
      particlesContainer.appendChild(particle);
    }
  }

  // ---------------- LIQUID CURSOR FUNCTION -----------------
  function initLiquidCursor() {
    const canvas = document.getElementById('liquid-cursor');
    if (!canvas) return;

    const ctx = canvas.getContext('2d', { alpha: true, desynchronized: true });
    if (!ctx) return;

    const particles = [];
    const mouse = { x: 0, y: 0, active: false, returning: false };

    function resizeCanvas() {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      particles.length = 0;
      initializeParticles();
    }

    function initializeParticles() {
      const particleCount = 350;
      const width = window.innerWidth;
      const height = window.innerHeight;
      const spread = Math.min(width, height) * 0.25;

      function createChunk(cx, cy, count) {
        for (let i = 0; i < count; i++) {
          const angle = Math.random() * Math.PI * 2;
          const radius = Math.random() * spread;
          const x = Math.min(Math.max(cx + Math.cos(angle) * radius, 0), width);
          const y = Math.min(Math.max(cy + Math.sin(angle) * radius, 0), height);
          particles.push({
            x, y, baseX: x, baseY: y,
            size: 0.8 + Math.random() * 1.5,
            color: `rgba(102,224,255,${Math.random() * 0.5 + 0.4})`,
            velocityX: 0, velocityY: 0, friction: 0.88
          });
        }
      }

      createChunk(width * 0.25, height * 0.25, particleCount * 0.25);
      createChunk(width * 0.75, height * 0.25, particleCount * 0.25);
      createChunk(width * 0.25, height * 0.75, particleCount * 0.25);
      createChunk(width * 0.75, height * 0.75, particleCount * 0.25);

      // random extra
      for (let i = 0; i < particleCount * 0.25; i++) {
        const x = Math.random() * width;
        const y = Math.random() * height;
        particles.push({ x, y, baseX: x, baseY: y, size: 0.8 + Math.random() * 1.5, color: `rgba(102,224,255,${Math.random()*0.5+0.4})`, velocityX: 0, velocityY: 0, friction: 0.88 });
      }
    }

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    document.addEventListener('mousemove', e => { mouse.x = e.clientX; mouse.y = e.clientY; mouse.active = true; mouse.returning = false; });
    document.addEventListener('mouseleave', () => { mouse.active = false; mouse.returning = true; particles.forEach(p => {p.velocityX=0;p.velocityY=0;}); });

    function animate() {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      const RADIUS = 80;
      const STRENGTH = 1.5;

      particles.forEach(p => {
        // Draw glow
        ctx.fillStyle = 'rgba(102,224,255,0.2)';
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size*2.2,0,Math.PI*2); ctx.fill();
        ctx.fillStyle = 'rgba(102,224,255,0.4)';
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size*1.4,0,Math.PI*2); ctx.fill();
        ctx.fillStyle = p.color;
        ctx.beginPath(); ctx.arc(p.x,p.y,p.size,0,Math.PI*2); ctx.fill();

        if (!mouse.active && mouse.returning) { const lerp=0.03; p.x+=(p.baseX-p.x)*lerp; p.y+=(p.baseY-p.y)*lerp; p.velocityX*=0.9;p.velocityY*=0.9; return; }

        p.velocityX+=(p.baseX-p.x)*0.0015;
        p.velocityY+=(p.baseY-p.y)*0.0015;

        if (mouse.active) {
          const dx=mouse.x-p.x, dy=mouse.y-p.y, distSq=dx*dx+dy*dy;
          if (distSq>0 && distSq<RADIUS*RADIUS) {
            const dist=Math.sqrt(distSq);
            const force=Math.pow(1-dist/RADIUS,3)*STRENGTH;
            p.velocityX-=(dx/dist)*force;
            p.velocityY-=(dy/dist)*force;
          }
        }

        p.x+=p.velocityX; p.y+=p.velocityY; p.velocityX*=p.friction; p.velocityY*=p.friction;
      });

      requestAnimationFrame(animate);
    }

    animate();
  }

});
