const images = document.querySelectorAll('img[data-src]');

const options = {
  rootMargin: '0px',
  threshold: 0.5
};

const observer = new IntersectionObserver((entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      const image = entry.target;
      const src = image.getAttribute('data-src');

      image.setAttribute('src', src);
      image.removeAttribute('data-src');
      observer.unobserve(image);
    }
  });
}, options);

images.forEach(image => {
  observer.observe(image);
});
