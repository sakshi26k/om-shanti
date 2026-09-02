document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("contactForm");

  if (form) {
    form.addEventListener("submit", (event) => {
      event.preventDefault();

      const button = form.querySelector("button");
      const originalText = button.textContent;

      button.textContent = "भेज दिया गया";
      button.disabled = true;

      setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        form.reset();
        alert("ॐ शांति! आपका संदेश सफलतापूर्वक भेज दिया गया है।");
      }, 900);
    });
  }
});