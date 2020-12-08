window.addEventListener('DOMContentLoaded', () => {
  const inputs = document.querySelectorAll("input");

  const getSize = function() {
    const size = this.getAttribute('data-size') || "";
    document.documentElement.style.setProperty(`--${this.name}`, this.value + size);
  };

  inputs.forEach(input => {
    input.addEventListener("change", getSize);
  });
  inputs.forEach(input => {
    input.addEventListener("mousemove", getSize);
  });
  
});