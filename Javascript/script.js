let cart = [];

// -------------------------
// ADD TO CART FUNCTIONALITY
// -------------------------
document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', e => {
    const productName = e.target.parentElement.querySelector('h3').innerText;
    const price = e.target.parentElement.querySelector('.price').innerText;
    cart.push({ name: productName, price: price });
    console.log(cart);
    alert(`${productName} added to cart!`);
  });
});

// -------------------------
// HERO SLIDER + DOTS
// -------------------------
const slides = document.querySelectorAll(".slide");
const prevBtn = document.querySelector(".arrow.left");
const nextBtn = document.querySelector(".arrow.right");
const dotsContainer = document.querySelector(".dots");

let currentIndex = 0;
let slideInterval;

// Generate dots dynamically
slides.forEach((_, i) => {
  const dot = document.createElement("span");
  if (i === 0) dot.classList.add("active");
  dotsContainer.appendChild(dot);
});

const dots = document.querySelectorAll(".dots span");

// Show a specific slide
function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle("active", i === index);
    dots[i].classList.toggle("active", i === index);
  });
  currentIndex = index;
}

// Next + Prev controls
function nextSlide() {
  showSlide((currentIndex + 1) % slides.length);
}

function prevSlide() {
  showSlide((currentIndex - 1 + slides.length) % slides.length);
}

// Auto-rotate every 5s
function startAutoSlide() {
  slideInterval = setInterval(nextSlide, 5000);
}

function stopAutoSlide() {
  clearInterval(slideInterval);
}

// Arrow Event Listeners
nextBtn.addEventListener("click", () => {
  nextSlide();
  stopAutoSlide();
  startAutoSlide();
});

prevBtn.addEventListener("click", () => {
  prevSlide();
  stopAutoSlide();
  startAutoSlide();
});

// Dot click Event Listeners
dots.forEach((dot, i) => {
  dot.addEventListener("click", () => {
    showSlide(i);
    stopAutoSlide();
    startAutoSlide();
  });
});

// Init slider
showSlide(currentIndex);
startAutoSlide();

// -------------------------
// SIDE PANEL NAV
// -------------------------
function openNav() {
  document.getElementById("mySidePanel").style.width = "100%"; 
}

function closeNav() {
  document.getElementById("mySidePanel").style.width = "0"; 
}

const gridBtn = document.getElementById("gridView");
const listBtn = document.getElementById("listView");
const productGrid = document.querySelector(".shop-grid");

gridBtn.addEventListener("click", () => {
  productGrid.classList.remove("shop-list");
  productGrid.classList.add("shop-grid");
  gridBtn.classList.add("active");
  listBtn.classList.remove("active");
});

listBtn.addEventListener("click", () => {
  productGrid.classList.remove("shop-grid");
  productGrid.classList.add("shop-list");
  listBtn.classList.add("active");
  gridBtn.classList.remove("active");
});

// shopHeaderScroll.js
const shopHeader = document.querySelector('.shop-header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 50) { // adjust distance
    shopHeader.style.background = '#fff';
    shopHeader.style.boxShadow = '0 2px 5px rgba(0,0,0,0.1)';
  } else {
    shopHeader.style.background = 'transparent';
    shopHeader.style.boxShadow = 'none';
  }
});


  // Scroll animation for About section
  window.addEventListener('scroll', function () {
    const aboutSection = document.querySelector('.about-section');
    const position = aboutSection.getBoundingClientRect().top;
    const screenHeight = window.innerHeight / 1.3;

    if (position < screenHeight) {
      aboutSection.classList.add('show');
    }
  });

  document.querySelectorAll('.shop-card').forEach(card => {
  const slides = card.querySelectorAll('.shop-slide');
  const leftBtn = card.querySelector('.arrow.left');
  const rightBtn = card.querySelector('.arrow.right');
  let currentIndex = 0;
  let interval;

  function showSlide(index) {
    slides.forEach((slide, i) => {
      slide.classList.toggle('active', i === index);
    });
    currentIndex = index;
  }

  function nextSlide() {
    showSlide((currentIndex + 1) % slides.length);
  }

  function prevSlide() {
    showSlide((currentIndex - 1 + slides.length) % slides.length);
  }

  // Auto-slide on hover
  card.querySelector('.shop-product-images').addEventListener('mouseenter', () => {
    interval = setInterval(nextSlide, 2000);
  });
  card.querySelector('.shop-product-images').addEventListener('mouseleave', () => {
    clearInterval(interval);
  });

  leftBtn.addEventListener('click', prevSlide);
  rightBtn.addEventListener('click', nextSlide);

  showSlide(currentIndex);
});

function toggleNav() {
      document.getElementById("side-nav").classList.toggle("open");
    }

    



let carouselImages = document.querySelectorAll('.hero-carousel .hero-image');
    let currentIndex1 = 0;

    function showNextImage() {
  // Remove current active image
  carouselImages[currentIndex1].classList.remove('active');

  // Move to next index
  currentIndex1 = (currentIndex1 + 1) % carouselImages.length;

  // Add active class to the new image
  carouselImages[currentIndex1].classList.add('active');
}


    setInterval(showNextImage, 4000); // change every 4 seconds
  
    const slider = document.querySelectorAll(".testimonial-slide");
    const prevButton = document.querySelector(".nav-btn.prev");
    const nextButton = document.querySelector(".nav-btn.next");
    let current = 0;

    function showSlide(index) {
        slides.forEach((slider, i) => {
            slider.classList.remove("active");
            if(i === index) slider.classList.add("active");
        });
    }

    prevBtn.addEventListener("click", () => {
        current = (current === 0)? slider.length - 1 : current - 1;
        showSlide(current);
    });

    nextBtn.addEventListener("click", () => {
        current = (current === slider.length - 1)? 0 : current + 1;
        showSlide(current);
    });

    // Optional: Auto-play the testimonials every 5 seconds
    setInterval(() => {
        current = (current + 1) % slider.length;
        showSlide(current);
    }, 5000);

