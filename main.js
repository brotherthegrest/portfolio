let observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fadeIn');
    }
  });
});

// For each element you want to observe
let elements = document.querySelectorAll('#fadeIn');
elements.forEach(element => {
  observer.observe(element);
});
