const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
      console.log(entry)
      if (entry.isIntersecting) {
        entry.target.classList.add("fadeIn");
      } else {
        entry.target.classList.remove("fadeIn");
      }
    });
  });
  
  const hiddenElements = document.querySelectorAll(".hiddenn");
  hiddenElements.forEach((el) => observer.observe(el));
  