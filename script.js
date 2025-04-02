const carouselImages = [
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80', 
    'https://images.unsplash.com/photo-1587668178277-295251f900ce?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80', 
    'https://images.unsplash.com/photo-1599599810769-bcde5a160d32?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80', 
    'https://images.unsplash.com/photo-1515037893149-de7f840978e2?ixlib=rb-1.2.1&auto=format&fit=crop&w=2000&q=80'  
  ];
  
  const productImages = [
    'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80'
  ];
  

  document.addEventListener('DOMContentLoaded', () => {
    
    if (window.lucide) {
      window.lucide.createIcons();
    }
  

    initCarousel('carousel-container', carouselImages);
    initCarousel('brownie-carousel-container', productImages, 3000);
  
  
    setupScrollAnimations();
  });
  

  function initCarousel(containerClass, images, interval = 5000) {
    const container = document.querySelector(`.${containerClass}`);
    if (!container) return;
  
    let currentIndex = 0;
  
  
    images.forEach((src, index) => {
      const img = document.createElement('img');
      img.src = src;
      img.style.filter = 'brightness(0.6)';
      if (index === 0) img.classList.add('active');
      container.appendChild(img);
    });
  
    const slides = container.querySelectorAll('img');
  
    setInterval(() => {
      slides[currentIndex].classList.remove('active');
      currentIndex = (currentIndex + 1) % slides.length;
      slides[currentIndex].classList.add('active');
    }, interval);
  }
  
  function setupScrollAnimations() {
    const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -50px 0px'
    };
  
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
        }
      });
    }, observerOptions);
  
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));
  }
  

  function handleWhatsAppClick() {
    window.open('https://wa.me/5511976006464', '_blank');
  }
  
  function handleInstagramClick() {
    window.open('https://www.instagram.com/mabelle_gourmet?igsh=aDJ3ZzBienY0dGpj', '_blank');
  }