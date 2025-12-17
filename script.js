
const tabs = document.querySelectorAll('.category-tabs .tab');
const products = document.querySelectorAll('.product-card');

tabs.forEach(tab => {
  tab.addEventListener('click', () => {

    tabs.forEach(t => t.classList.remove('active'));
    tab.classList.add('active');

    const category = tab.innerText.toLowerCase();

    products.forEach(product => {
      product.style.opacity = '0';
      product.style.transform = 'scale(0.96)';

      setTimeout(() => {
       
        if (category === 'rings' || Math.random() > 0.4) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }

        product.style.opacity = '1';
        product.style.transform = 'scale(1)';
      }, 200);
    });
  });
});


const revealElements = document.querySelectorAll(
  '.bestseller-section, .collection-gifts-section, .recent-section, .gift-promo-section, .gifts-block, .ethos-block, .future-block, .testimonials-section'
);

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('reveal-visible');
        revealObserver.unobserve(entry.target);
      }
    });
  },
  {
    threshold: 0.15
  }
);

revealElements.forEach(el => {
  el.classList.add('reveal-hidden');
  revealObserver.observe(el);
});


const horizontalSections = document.querySelectorAll(
  '.product-grid, .recent-grid, .gifts-grid, .testimonial-grid'
);

horizontalSections.forEach(section => {
  let scrolled = false;

  section.addEventListener('scroll', () => {
    if (!scrolled) {
      section.classList.add('scrolled');
      scrolled = true;
    }
  });
});
