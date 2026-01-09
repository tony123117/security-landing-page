 function requestQuote() {
      alert("Quote request form coming soon!");
    }

    function bookAssessment() {
      alert("Security assessment booking coming soon!");
    }

  document.querySelectorAll(".nav-inner a").forEach(link => {
    link.addEventListener("click", () => {
      document.querySelectorAll(".nav-inner a")
        .forEach(l => l.classList.remove("active"));
      link.classList.add("active");
    });
  });


 const openBtn = document.getElementById("openModal");
const closeBtn = document.getElementById("closeModal");
const modal = document.getElementById("reviewsModal");

openBtn.addEventListener("click", () => {
  modal.style.display = "flex";
  document.body.style.overflow = "hidden";
});

closeBtn.addEventListener("click", closeModal);

modal.addEventListener("click", (e) => {
  if (e.target === modal) closeModal();
});

function closeModal() {
  modal.style.display = "none";
  document.body.style.overflow = "auto";
}

/* ESC key support */
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape") closeModal();
});



function requestQuote() {
  alert("Request a Quote clicked!");
  // window.location.href = "/quote";
}

function bookCall() {
  alert("Book a Call clicked!");
  // window.location.href = "/book-call";
}



  document.getElementById("year").textContent = new Date().getFullYear();

  // IntersectionObserver to reveal elements with a small stagger
  (function() {
    const selectors = [
      'nav', '.hero-content', '.hero h1', '.hero p', '.hero-buttons',
      '.services-text', '.service-card', '.services-list .service-card',
      '.image-wrapper img', '.card', '.card-large', '.right-column .card',
      '.features li', '.cta-panel', '.brand', '.footer-top', '.footer-middle', '.footer-bottom'
    ];

    const nodes = document.querySelectorAll(selectors.join(','));
    nodes.forEach((el, i) => {
      if (el.tagName === 'IMG' || el.querySelector && el.querySelector('img')) {
        el.classList.add('img-will');
      } else {
        el.classList.add('will-animate');
      }
    });

    const io = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          const el = entry.target;
          // add in-view to trigger transitions
          el.classList.add('in-view');
          // small stagger based on DOM order
          const delay = (Array.prototype.indexOf.call(nodes, el) % 8) * 70;
          el.style.transitionDelay = delay + 'ms';
          io.unobserve(el);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -8% 0px' });

    nodes.forEach(el => io.observe(el));
  })();
